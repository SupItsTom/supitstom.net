import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import HomepageVideo from '../components/HomepageVideo';

import ThemedImage from '@theme/ThemedImage';
import HomepageCatalogue from '../components/HomepageCatalogue';


// lets not make this too cluttered
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero shadow--lw', styles.heroBanner)}>
      <div className="container">
        <ThemedImage
          alt="Site Logo"
          sources={{
            light: '/img/site_banner_wide_black.png',
            dark: '/img/site_banner_wide_white.png',
          }}
          height={'100px'}
        />
        {/* <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading> */}
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--outline button--secondary button--lg"
            to="/contact">
            Contact Meh&nbsp;&nbsp;→
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="REL oZ and the fucking stash super recharged v69 awesome so cool wicked website!! out NOW!!1">
      <HomepageHeader />
      <main>
        {/* here is where we slap the catalogue of shit */}
        <HomepageVideo />
      </main>
    </Layout>
  );
}
