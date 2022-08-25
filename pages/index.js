import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>HLTV ENDPOINTS with NEXT.JS</title>
      </Head>

      <main className={styles.main}>
        <p>HLTV ENDPOINTS with NEXT.JS</p>
      </main>
    </div>
  );
}
