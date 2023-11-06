import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
    return (
        <div className={styles.notFoundContainer}>
            <div className={styles.notFoundContent}>
                <h1 className={styles.heading1}>Oops! Page not found</h1>
                <p className={styles.para}>
                    The page you are looking for might have been removed or is temporarily
                    unavailable.
                </p>
                <Link to="/" className={`${styles.backToHome} ${styles.backToHomeHover}`}>
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;





