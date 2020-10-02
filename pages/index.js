import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import HtmlParse from 'html-react-parser';

export default function Home() {
  const [result, setResult] = useState('<div/>');
  const onSubmitHandle = (e) => {
    e.preventDefault();
    console.log(e.target.neoTiny.value);
    setResult(e.target.neoTiny.value)
  }

  // const render =  ;
  // const a = document.getElementById('neoTinyId')

  return (
    <div className={styles.container}>
      <Head>
        <title>Neo Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="/tinymce/tinymce.min.js"></script>
        <script src='/tinymce/init.js'> </script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>

          <form onSubmit={onSubmitHandle}>
            <textarea name="neoTiny" id="neoTinyId" style={{visibility: "hidden", Client: "null"}}></textarea>
            <button type="submit">Submit</button>
          </form>
        
        </div>
 
        <div>
            {HtmlParse(result)}
            {/* {result?result:null} */}
        </div>


      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        
      </footer>
    </div>
  )
}
