import styles from "../Style.module.css"
export const Footer = ({quote}) => {
    return(
        <>
          <div className={styles.footer_container}>{quote}</div>
          <ul className={styles.footer_list_container}>
            <li className={styles.footer_list}><a href="https://github.com/Banshal-Yadav">Github</a></li>
            <li className={styles.footer_list}><a href="https://x.com/Banshal_Yadav">X(Twitter)</a></li>
            <li className={styles.footer_list}><a href="https://www.linkedin.com/in/banshal-yadav-528841300/">Linkedin</a></li>
          </ul>
        </>
    )
}