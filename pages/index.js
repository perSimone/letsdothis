import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SP.COM</title>
        <meta
          name="description"
          content="Awesomely generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">my site!</a>
        </h1>

        <section>
          <h1>Home Page</h1>
          <section className="section-title">
            <h3 className="section-title">
              This is the homepage, pretty cool ey?!
            </h3>
            <p className="section-body">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur culpa expedita beatae distinctio sunt unde tempora nemo
              aliquam nostrum dolor id optio blanditiis, molestias tempore
              autem? Rem, tempore. Architecto, voluptatum?
            </p>
          </section>
          <section id="contact">
            <h3 className="section-title">Contact Us</h3>
            <p className="section-body">
              You can Contact us via our various social media handles
            </p>
          </section>
        </section>
      </main>

      <footer className={styles.footer}>
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/burger.svg" alt="Vercel Logo" width={50} height={60} />
        </span>
      </footer>
    </div>
  );
}