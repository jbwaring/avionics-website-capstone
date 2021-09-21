import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Collaborative',
    Svg: require('../../static/img/person.3.sequence.fill.svg').default,
    description: (
      <>
        Designed for collaboration. Everyone can contribute!
      </>
    ),
  },
  {
    title: 'Always up to date',
    Svg: require('../../static/img/doc.richtext.svg').default,
    description: (
      <>
        You are constantly browsing the latest released version.
      </>
    ),
  },
  {
    title: 'Fluid Navigation',
    Svg: require('../../static/img/doc.text.magnifyingglass.svg').default,
    description: (
      <>
        Only display what matters to you without reading an entire document.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4', styles.FeatureCard)}>
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
