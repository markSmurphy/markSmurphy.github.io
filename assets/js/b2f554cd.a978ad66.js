"use strict";(self.webpackChunktech_blog=self.webpackChunktech_blog||[]).push([[477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2022/10/05/Calculating-Availability-SLAs/Calculating-Availability-SLAs","metadata":{"permalink":"/blog/2022/10/05/Calculating-Availability-SLAs/Calculating-Availability-SLAs","source":"@site/blog/2022-10-05-Calculating-Availability-SLAs/Calculating-Availability-SLAs.mdx","title":"Calculating Availability SLAs in Distributed Systems","description":"","date":"2022-10-05T00:00:00.000Z","formattedDate":"October 5, 2022","tags":[],"readingTime":6.135,"hasTruncateMarker":false,"authors":[{"name":"Mark Murphy","url":"https://github.com/markSmurphy"}],"frontMatter":{"title":"Calculating Availability SLAs in Distributed Systems","author":"Mark Murphy","authorURL":"https://github.com/markSmurphy"}},"content":"import Tabs from \'@theme/Tabs\';\\r\\nimport TabItem from \'@theme/TabItem\';\\r\\n\\r\\n## Complexity in multi-tiered systems\\r\\n\\r\\nModern cloud-native solutions invariably employ micro-service architecture, resulting in highly distributed applications spanning multiple tiers.\\r\\n\\r\\nThe benefits of this approach are well documented and not in dispute, but it does add a certain complexity.\\r\\n\\r\\nThe complexity we\'re referring to here is *not* complexity of the code, nor complexity of the functionality of the solution; By **complexity** we mean the non-functional complexity that come hand-in-hand with multi-tiered micro-service solutions. As an end-to-end system becomes more complex, it also becomes, probabilistically, less available.\\r\\n\\r\\nConsider the example topology below, and that each of these nine tiers will be underpinned by a given cloud service, and the service provider will publish it\'s availability [SLA](https://en.wikipedia.org/wiki/Service-level_agreement) for each of those services; but when *our* end users expect an SLA statement about the guaranteed availability of *our* overall service, **How do we calculate the availability SLA of a distributed system?**\\r\\n\\r\\n[![Example Topology](./img/High_Availability_Example.png)](./img/High_Availability_Example.png)\\r\\n\\r\\nTo work this out for any conceivable topology, we must first understand the **The relationship between complexity and availability**\\r\\n\\r\\n---\\r\\n\\r\\n## The Relationship Between Complexity and Availability\\r\\n\\r\\nTo understand this better, let\'s start off with a simple topology and add complexity as we go:\\r\\n\\r\\n### Single tier\\r\\n\\r\\n[![Simple Topology](./img/High_Availability_Simple_Topology.png)](./img/High_Availability_Simple_Topology.png)\\r\\n\\r\\nIn the example above we have a client-side application which connects directly to a cloud hosted database, and the cloud provider\'s SLA states an availability of 99%.\\r\\n\\r\\nIf the database is down, then our whole system is down. So our system also, inherently, has an availability of **99%**\\r\\n\\r\\n:::caution\\r\\nThere are very good reasons why don\'t design [thick-client](https://en.wikipedia.org/w/index.php?title=Thick_client&redirect=yes) applications anymore.\\r\\n\\r\\nThis example serves only as a baseline upon which to add complexity and examine how the system\'s availability evolves.\\r\\n:::\\r\\n\\r\\nLet\'s make our system a little more realistic by changing it to be a browser based application and see how it changes our system\'s 99% Availability.\\r\\n\\r\\n---\\r\\n\\r\\n### Two tiers\\r\\n\\r\\nIf we add a web server between the client and the database we\'re introducing a new tier into our system.\\r\\n\\r\\n[![Web Application Topology](./img/High_Availability_Web_app.png)](./img/High_Availability_Web_app.png)\\r\\n\\r\\nThe client\'s browser uses `HTTPS` to communicate with the web server, and the application hosted on the web server connects to the database.\\r\\n\\r\\n> For simplicity we\'re stating that the web server\'s availability is also 99%.\\r\\n\\r\\nIf either of these two tiers are down, then our system is down (because each tier is useless by itself).\\r\\n\\r\\n#### Calculating Probability\\r\\n\\r\\nSo we now have two tiers, each with 0.99 probability of being available at any given point time.\\r\\n\\r\\n:::info\\r\\n\\r\\nProbabilities are expressed as numbers between **zero** (no chance of happening) and **one** (a certainty).\\r\\n\\r\\n:::\\r\\n\\r\\nCalculating our system\'s availability is a simple matter of multiplying each tier\'s probability of being available (being up).\\r\\n\\r\\n```text\\r\\n0.99 * 0.99 = 0.98\\r\\n```\\r\\n\\r\\nSo our revised system architecture has an availability **98%**. Notice that this is *lower* than the previous, more simplistic, example. If this is surprising to you. it can rationalised by considering that we\'d expect the database to be down 1% of the time, but we\'d also expect the web server to be down 1% of the time. These two separate downtimes combine for a total of 2% downtime.\\r\\n\\r\\n:::tip\\r\\n\\r\\nThe addition of additional tiers into a distributed application decreases it\'s expected availability.\\r\\n\\r\\n:::\\r\\n\\r\\n---\\r\\n\\r\\n### Real World Example\\r\\n\\r\\nLet\'s return to our earlier example of a topology with nine tiers:\\r\\n\\r\\n   * Relational database\\r\\n   * NoSQL database\\r\\n   * DNS\\r\\n   * Serverless compute\\r\\n   * Web Servers\\r\\n   * API Gateway\\r\\n   * Load Balancer\\r\\n   * Firewall\\r\\n   * CDN\\r\\n\\r\\n[![Example Topology](./img/High_Availability_Example.png)](./img/High_Availability_Example.png)\\r\\n\\r\\nUsing our cloud service provider\'s SLA documentation, such as [Azure\'s](https://azure.microsoft.com/en-us/support/legal/sla/summary/) or [AWS\'s](https://aws.amazon.com/legal/service-level-agreements/), we can find the Service Availability for each of our tiers and multiply them together to obtain our solution\'s availability.\\r\\n\\r\\n<Tabs>\\r\\n  <TabItem value=\\"azure\\" label=\\"Azure\\" default>\\r\\n    Azure Availability SLAs\\r\\n\\r\\n      | Tier                | Azure Service              | Service Availability |\\r\\n      |---------------------|----------------------------|----------------------|\\r\\n      | Relational database | Azure SQL Database         |        99.99%        |\\r\\n      | NoSQL database      | Azure CosmosDB             |        99.99%        |\\r\\n      | DNS                 | Azure Provided DNS         |       100.00%        |\\r\\n      | Serverless compute  | Azure Functions            |        99.95%        |\\r\\n      | Web Servers         | Azure Cloud Services       |        99.95%        |\\r\\n      | API Gateway         | Azure API Management       |        99.95%        |\\r\\n      | Load Balancer       | Azure Load Balancer        |        99.99%        |\\r\\n      | Firewall            | Azure Firewall             |        99.95%        |\\r\\n      | CDN                 | Azure CDN                  |        99.90%        |\\r\\n\\r\\n      0.9999 * 0.9999 * 1.0000 * 0.9995 * 0.9995 * 0.9995 * 0.9999 * 0.9995 * 0.999 = 0.9967\\r\\n\\r\\n      End-to-end System\'s Availability SLA is 99.67%\\r\\n\\r\\n  </TabItem>\\r\\n\\r\\n  <TabItem value=\\"aws\\" label=\\"AWS\\">\\r\\n    AWS Availability SLAs\\r\\n\\r\\n      | Tier                | AWS Service                | Service Availability |\\r\\n      |---------------------|----------------------------|----------------------|\\r\\n      | Relational database | Amazon RDS                 |        99.95%        |\\r\\n      | NoSQL database      | AWS DynamoDB               |        99.99%        |\\r\\n      | DNS                 | Amazon Route 53            |        99.99%        |\\r\\n      | Serverless compute  | AWS Lambda                 |        99.95%        |\\r\\n      | Web Servers         | Amazon Lightsail (managed) |        99.95%        |\\r\\n      | API Gateway         | AWS API Gateway            |        99.95%        |\\r\\n      | Load Balancer       | Elastic Load Balancer      |        99.99%        |\\r\\n      | Firewall            | AWS Network Firewall       |        99.90%        |\\r\\n      | CDN                 | Amazon CloudFront          |        99.90%        |\\r\\n\\r\\n      0.9995 * 0.9999 * 0.9999 * 0.9995 * 0.9995 * 0.9995 * 0.9999 * 0.9990 * 0.9990 = 0.9957\\r\\n\\r\\n      End-to-end System\'s Availability SLA is 99.57%\\r\\n\\r\\n  </TabItem>\\r\\n</Tabs>\\r\\n\\r\\n---\\r\\n\\r\\nIt\'s interesting to note the slight differences between providers. In this example, Azure offers a 0.1% higher availability SLA than AWS for these equivalent services, but there are caveats:\\r\\n\\r\\n* Many services have multiple tiers, and different tiers offer different availability SLAs. For this example I\'ve used the highest tier on offer, but ...\\r\\n* These services change and improve over time, so this example is just snapshot in time rather than evidence of superiority.\\r\\n* Service providers may not achieve their SLAs, and conversely may exceed them.\\r\\n* Different regions *will* have different uptime results. e.g. AWS\'s `us-east-1` region *usually* gets updates first, so you might expect solutions deployed there to be effected more by problematic updates.\\r\\n* In my experience, downtime normally results from problems with deployments of the solution, or escaped bugs, rather than the underlying cloud platform. So the lesson there is to avoid shooting yourself in the foot by having a like-live non-production environment and a robust QA process.\\r\\n\\r\\n## Conclusion\\r\\n\\r\\nIf you\'re going to offer your user-base an **Availability SLA**, then this methodology will allow you to calculate the composite availability for your solution. The key points are:\\r\\n\\r\\n1 Identify each critical tier in your solution and the service that hosts them.\\r\\n2 Our example is constrained to services offered be a single cloud provider, but you might have additional third party services to include too (CDN, oAuth provider, back-end SaaS service, etc).\\r\\n3 Obtain the provider\'s availability SLA for each of these tiers/services as a value between zero and one (i.e. 0.995 = 99.5%).\\r\\n4 Multiply all of these values together to obtain your solution\'s SLA.\\r\\n5 Keep in mind that this figure represents the *highest* SLA you should offer for your solution because:\\r\\n  * For your solution to exceed this uptime objective you\'ll need your service providers to exceed their\'s, and you can\'t guarantee that.\\r\\n  * There are other variables that can effect availability that aren\'t accounted for, such as failed deployments, bugs, misconfigurations, etc.\\r\\n  * In other words, if you achieve a higher uptime it\'ll be by luck rather than by design, so don\'t quote anything higher."}]}')}}]);