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
              LOGO
            </a>
            <ul>
              <li className={styles.navItem}>
                <a href="#" className={styles.itemText}>
                  Item1
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.itemText}>
                  Item2
                </a>
              </li>
              <li className={styles.navItem}>
                <a href="#" className={styles.itemText}>
                  Item3
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.content}>
            <div className={styles.text}>
              <h2 className={styles.heading}>
                Heading <br></br> ASG
              </h2>
              <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                repellat explicabo quas atque, distinctio impedit?
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
