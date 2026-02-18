import styles from "../Style.module.css"
export const Footer = ({quote}) => {
    return(
        <>
          <div className={styles.footer_container}>{quote}</div>
        </>
    )
}