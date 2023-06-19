import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import {Header} from "@/components/header";
import {Inter} from "next/font/google";
import {Section1} from "@/components/section-1";
import {Section2} from "@/components/section-2";
import {Developer} from "@/components/developer";
import {Footer} from "@/components/footer";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>技育COMP</title>
        <meta name="description" content="ハッカソンのアイディア出しをサポート" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header/>
        <Section1/>
        <Section2/>
        <Developer/>
        <Footer/>
      </main>
    </>
  )
}
