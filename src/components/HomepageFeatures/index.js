import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Performance Optimisations',
    Svg: require('@site/static/img/home/undraw_speed_test.svg').default,
    description: (
      <>
        Serving more traffic with less resources is fundamental to achieving hyperscale.
      </>
    ),
  },
  {
    title: 'Scalability',
    Svg: require('@site/static/img/home/undraw_building_websites.svg').default,
    description: (
      <>
        Scaling application tiers to handle traffic spikes.
      </>
    ),
  },
  {
    title: 'High Availability',
    Svg: require('@site/static/img/home/undraw_going_up.svg').default,
    description: (
      <>
        Hosting services in multiple cloud regions (<code>active/active</code>) spreads the traffic by routing to the nearest available region, and can achieve 99.99% up time.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
