import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(()=>{
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRIST_WEBSITE_ID;
      (() => {
        const d = document;
        const s:any = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("body")[0].appendChild(s);
      })();
      
  })

  return <Component {...pageProps} />
}

export default MyApp
