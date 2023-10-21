import React from 'react'
import styles from "./loginPage.module.css"

const LoginPage = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.socialButton}>
                <div className={`${styles.socialButton} ${styles.googleBtn}`}>
                    Sign in with Google

                </div>
                <div className={`${styles.socialButton} ${styles.githubBtn}`}>
                    Sign in with Github

                </div>


            </div>

        </div>
    </div>
  )
}

export default LoginPage