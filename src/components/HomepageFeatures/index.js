import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Support Me',
    description: (
      <>
        Give me a star at here <a href='https://github.com/seasidejuvenile666/SeasideCapital' target='_blank'>GitHub</a>
      </>
    ),
  },
  {
    title: 'About Me',
    description: (
      <>
        core contributor of WTF Academy
        <br></br>
        website:<a href='https://wtf.academy/' target='_blank'>wtf.academy</a>
        <br></br>
        twitter:<a href='https://twitter.com/WTFAcademy_' target='_blank'>@WTFAcademy_</a>
      </>
    ),
  },
  {
    title: 'Contact Me',
    description: (
      <>
        twitter:<a href='https://twitter.com/0xSeaside888' target='_blank'>@0xSeaside888</a>
        <br></br>
        weibo:<a href='https://weibo.com/u/7824140448' target='_blank'>0xSeaside_</a>
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
