import React from 'react';

import styles from "../style/footer.module.css"
import {Box} from "@mui/material";

const Footer = () => {
    return (
        <Box className={styles.footer}>
          <span>
            Created by <a className={styles.link} href="https://github.com/kattymwk" target="_blank">BSUIR student</a>
          </span>
            <span className={styles.link}>|</span>
            <a className={styles.link} href="https://trello.com/ru" target="_blank">Trello clone</a>
        </Box>
    );
};

export default Footer;