
import Head from 'next/head';
import ThemeToggle from '../components/ThemeToggle';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sport Archive</title>
      </Head>
      <main className="container">
        <div className="header">
          <h1>🏋️ Sport Archive</h1>
          <div className="switchers">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>
        <p>Категории, упражнения и статьи скоро появятся 👇</p>
      </main>
    </>
  );
}
