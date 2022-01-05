import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Convenient',
    Svg: require('../../static/img/undraw_product_iteration_kjok.svg').default,
    description: (
      <>
        You do not have to go through tedious process to apply for FPay.
      </>
    ),
  },
  {
    title: 'Fast Approval',
    Svg: require('../../static/img/undraw_accept_request_re_d81h.svg').default,
    description: (
      <>
        Your application will be approved within the same day and FPay will be setup right away.
      </>
    ),
  },
  {
    title: 'Customer Support',
    Svg: require('../../static/img/undraw_instant_support_re_iw6d.svg').default,
    description: (
      <>
        We make sure your business transaction run smoothly from time to time.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
