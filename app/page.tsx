"use client";
import { Button } from "react-bootstrap";
import styles from "./page.module.scss";
import Image from "next/image";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";
function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <a href="#" className={styles.logo}>
                Centrifuge
            </a>

            <ul>
              <li className={styles.navItem}>
                <a href="#" className={styles.itemText}>
                  Cairo
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.itemText}>
                  6th-October
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.itemText}>
                  Mansoura
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>
            <div className={styles.text}>
              <h2 className={styles.heading}>
                Eng. Amira <br></br> Labs
              </h2>
              <p className={styles.paragraph}>
                Trust gained over 20 years of experience.
                              </p>
              <Button variant="outline-primary">
                <Link className={styles.startBtn} href="/devices/">
                  Start&nbsp;&nbsp;
                  <BsArrowRightCircle />
                </Link>
              </Button>
            </div>

            <div className={styles.image}>
              <Image
                src="/images/microtainer_grande.webp"
                width={300}
                height={300}
                alt="medical device"
              />
            </div>
          </div>
        </div>
      </main>
      <div className={styles.circle}></div>
    </>
  );
}

export default Home;
