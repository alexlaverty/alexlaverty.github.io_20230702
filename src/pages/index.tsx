import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const arr = [
  "Civilization advances by extending the number of important operations which we can perform without thinking about them. - Alfred North Whitehead",
  "I must study politics and war, that our sons may have liberty to study mathematics and philosophy. - John Adams",
  "If you want to live a happy life, tie it to a goal, not to people or things. - Albert Einstein",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "Knowledge speaks, but wisdom listens. - Jimi Hendrix",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
  "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
  "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
  "The best leaders are those most interested in surrounding themselves with assistants and associates smarter than they are. - John C. Maxwell",
  "The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The only true wisdom is in knowing you know nothing. - Socrates",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Wise men speak because they have something to say; fools because they have to say something. - Plato",
];

const randomIndex = Math.floor(Math.random() * arr.length);
const randomString = arr[randomIndex];

const RandomQuote = () => {
  return {randomString};
};

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{RandomQuote().randomString}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/Home">
            Enter
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
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
