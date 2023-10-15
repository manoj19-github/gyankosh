"use client";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import styles from "./authLinks.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const AuthLinks = () => {
  const isLoggedIn = false;
  const [open, setOpen] = useState<boolean>(false);
  const Icon = open ? AiOutlineClose : GiHamburgerMenu;

  return (
    <Fragment>
      <div onClick={() => setOpen((prev) => !prev)} className={styles.burger}>
        <Icon size={20 } />
      </div>
      {isLoggedIn ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <div className={styles.link}>
            <p>My Profile </p>
          </div>
        </>
      )}
      {!!open ? (
        <div className={styles.responsiveMenu}>
          <Link href="/" className={styles.smallLink}>
            Home
          </Link>
          <Link href="/home" className={styles.smallLink}>
            Contacts
          </Link>
          <Link href="/abot" className={styles.smallLink}>
            About
          </Link>
          {isLoggedIn ? (
            <Link href="/login" className={styles.smallLink}>
              Login
            </Link>
          ) : (
            <>
              <div className={styles.smallLink}>
                <p>My Profile </p>
              </div>
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </Fragment>
  );
};

export default AuthLinks;
