import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from 'styles/global.style';
// import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Chat Guru - The intelligent bot</title>
        <meta name="author" content="Klei Aliaj" />
        <meta
          name="description"
          content="Engine-ChatGuru is a comprehensive language tool that can answer questions, generate code, titles, and grammatically correct text, as well as paraphrase, summarize, translate, explain programming code, evaluate mathematical expressions, and create study notes. It is ideal for students, developers, researchers, and anyone in need of language-related assistance.

          "
        />
        {/* Twitter */}
        <meta name="twitter:handle" content="@wardvisual" />
        <meta name="twitter:site" content="@wardvisual" />
        <meta name="twitter:cardType" content="summary_large_image" />

        {/* OG */}
        <meta property="og:url" content="https://engine-ChatGuru.vercel.app/" />
        <meta
          property="og:title"
          content="ChatGuru - Intelligent Chatbot Powered by Artificial Intelligence"
        />
        <meta
          property="og:description"
          content="ChatGuru is a intelligent chatbot powered by artificial intelligence. It is designed to provide helpful and insightful answers to your questions. ChatGuru can learn from its conversations with you, allowing it to become increasingly efficient and knowledgeable over time."
        />

        {/* Canonical */}
        <link rel="canonical" href="https://engine-ChatGuru.vercel.app/" />
        <meta
          name="keywords"
          content="chatbot, artificial intelligence, AI, chatbot learning, ChatGuru, OpenAI, ChatGPT"
        />

        {/* Fontawesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />

        {/* Icon */}
        <link rel="icon" type="image/x-icon" href="./logo.png" />
      </Head>
      <GlobalStyle />

      {/* <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-6S0MG7203R"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`

          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6S0MG7203R');

          `}
      </Script> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
