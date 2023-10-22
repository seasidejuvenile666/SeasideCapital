import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import logo from "@site/static/img/profile.jpg";

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <img src={logo} style={{width: 280, borderRadius: '50%'}} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">无论你是听到别人的暴富神话而满腔热血进场的新人</p>
        <p className="hero__subtitle">还是经历数次黑天鹅仍活在场上的老手</p>
        <p className="hero__subtitle">都祝愿你能在币圈得到自己想要的</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            暴富导航→
          </Link>
        </div>
        <p className="hero__subtitle"></p>
        {/* <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            加入社群→
          </Link>
        </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
