// todo: clean this section up into category/type of import
import clsx from 'clsx';

import { FullWidthPage, PageBlock } from "../components/HomepageLayout";
import users from "../users";

import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import logo from "../../static/img/site_banner_wide_white.png";
import style from "./index.module.css";

import Layout from '@theme/Layout';


// lets not make this too cluttered
const Splash = () => (
  <div className={style.Splash}>
    <h1 className={style.SplashTitle}>
      <img src={logo} alt="SupItsTom Logo" />
    </h1>
    <h2 className={style.SplashSubtitle}>
      It's okay to run over space aliens
    </h2>
    <div className={style.buttons}>
      <Link className="button button--primary button--lg" to="https://docs.supitstom.net">
        Documentation
      </Link>
      <Link className="button button--secondary button--lg" to="/changelogs">
        Changelogs
      </Link>
    </div>
  </div>
);

// needs to be swapped with <PageBlock className={style.DetailsContainer}> once we have products lined up
// also needs the <Features> field re-adding
const Features = () => (
  <PageBlock className={style.Features}>
    <div className={style.FeaturesMain}>
      <article className={style.Feature}>
        <h1>24/7 Edging!</h1>
        <p>
          Content is stored and served on edge servers around the world,
          with garunteed 100% uwuptime!
        </p>
      </article>
      <article className={style.Feature}>
        <h1>SecUwUrity First ^_^</h1>
        <p>
          Products are regularly checked for security issues.
          And <a href="/bugs"> bug bounties</a> are now open to the public!
        </p>
      </article>
      <article className={style.Feature}>
        <h1>OwOpen Source?</h1>
        <p>
          Sometime in the future... backend components like the API and some Bots will be open source.
        </p>
      </article>
    </div>
  </PageBlock>
);

// needs to be swapped with <PageBlock className={style.DetailsContainer}> once we have products lined up
// also needs the <Users> field re-adding
const Details = () => (
  //<PageBlock className={style.DetailsContainer}>
  <PageBlock className={style.DetailsContainer}>
    <div className={style.Details}>
      We pull around <b>26.61M</b> requests, <b>349.39 GBs</b> of uncached bandwith and <b>10.82M</b> visits monthly!
    </div>
  </PageBlock>
);

const User = ({ user: { url, image, name } }) => (
  <a href={url} className={style.User}>
    <img src={image} alt={name} title={name} />
  </a>
);

const Users = () => {
  const userList = users
    .filter((user) => user.image != null)
    .map((user, index) => <User key={index} user={user} />);

  return (
    <PageBlock className={style.Users}>
      <h1 className={style.UsersTitle}>
        Providing free backend tools to those who need it
      </h1>
      <div className={style.UserWall}>{userList}</div>
      {/* <p className={style.UsersCta}>
        Use the service? Want your product here?{" "}
        <a href="https://github.com/supitstom.net/issues">
          Open an issue!
        </a>
      </p> */}
    </PageBlock>
  );
};

const Videos = () => {
  return (
    <PageBlock className={style.Users}>
      {/* <h1 className={style.UsersTitle}>
        Providing free backend support to those who need it
      </h1> */}
      <iframe width="100%" height="520" src="https://www.youtube-nocookie.com/embed/g4rIaFrjO7Q?si=LsCFbrFMb7kup7oy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </PageBlock>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="REL oZ and the fucking stash super recharged v69 awesome so cool wicked website!! out NOW!!1"
    >
      <main>
        {/* here is where we slap the catalogue of shit */}
        <Splash />
        <Features />
        {/* <Details /> */}
        {/* <Users /> */}
        <Videos/>
      </main>
    </Layout>
  );
}
