import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './HomepageFeatures.styles.scss';

const FeatureList = [
  {
    title: 'Exercise Ideas',
    icon: '/img/undraw_working_out.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go ahead and move your
        docs into the <code>docs</code> directory.
      </>
    )
  },
  {
    title: 'Wide Range of Recipes',
    icon: '/img/undraw_barbecue.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and used to get your
        website up and running quickly.
      </>
    )
  },
  {
    title: 'Even more to come!',
    icon: '/static/img/undraw_under_construction.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can be extended while
        reusing the same header and footer.
      </>
    )
  }
];

function Feature({ icon, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className="featureSvg" src={useBaseUrl(icon)} alt={title} />
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
    <section className="features">
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
