import Head from "next/head";
import Script from 'next/script'

function meta({ children }) {
  return (
    <>
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https: //fonts.googleapis.com/css2? family= Orbitron:wght@900 & family= Oswald:wght@600;700 & display=swap" rel="stylesheet"/>
      <title>my-museum</title>
      <link rel="icon" href="/public/favicon.ico" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></Script>

    </>
  );
}

export default meta;