---
title: Understanding High Availability in Complex Systems
author: Mark Murphy
authorURL: https://github.com/markSmurphy
---

## Understanding high availability in complex systems, and how to calculate them

When working on complex, distributed, multi-tiered systems there are always certain non-functional requirements that the solution should achieve.
Performance and resilience can be a focus of a given sprint team at a component level, but the overall availability of the system as a whole needs a more holistic view.

In this article we scrutinise real-world deployments to understand:

* The relationship between complexity and availability.
* How to work out the theoretical availability of a system.
* How to monitor the actual availability.
* How to achieve 99.99% availability.

---

### The relationship between complexity and availability

