import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <div>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className={clsx('container', styles.bannerTitle)}>
          
          <h1 className={clsx('hero__title')}>{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              Access the Documentation
            </Link>
          </div>
        </div>
      </header>


      <div className={clsx(''), styles.seeWhatsNew}>
        <div id={styles.seeWhatsNewTextWrapper}>
        <h2 id={styles.seeWhatsNewTitleGradient}>See What's New</h2>
            <Link
              className="button button--primary button--lg"
              to="/blog">
              Blog
            </Link>
          </div>
            <img id={styles.seeWhatsNewImg} src="../../static/img/newspaper.svg"/>
      </div>
  </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in test <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
