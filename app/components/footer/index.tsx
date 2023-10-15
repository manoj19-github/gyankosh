import React, { FC } from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
interface FooterProps {}
const Footer: FC<FooterProps> = (): JSX.Element => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <p>Gyankosh</p>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ipsa
          pariatur quas distinctio nobis repellat officiis mollitia blanditiis
          maxime, molestias debitis tempora earum aliquam. Magnam sit quae
          dignissimos molestiae totam.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="logo" width={17} height={17} />
          <Image src="/instagram.png" alt="logo" width={17} height={17} />
          <Image src="/youtube.png" alt="logo" width={17} height={17} />
        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
        </div>

        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Frontend</Link>
          <Link href="/">Backend</Link>
        </div>
      </div>
    </div>
    <div className={styles.devTalks}>
      Developed By Santra Developers
    </div>
    </>
  );
};

export default Footer;
