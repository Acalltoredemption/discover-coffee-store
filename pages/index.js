import Head from 'next/head'
import Banner from '../components/banner'
import styles from '../styles/Home.module.css'
import Image from 'next/image';

export default function Home() {

  const handleOnBannerBtnClick = () => {
    console.log("Hi banner button!")
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick} />
        <div className={styles.heroImage}>
        <Image src="/static/man1.png" width={700} height={400} />
        </div>
      </main>
    </div>
  )
}
