import styles from "../Style.module.css"
export const PgHeading = ({text}) => {
    return (
        <>
         <div >
            <h2 className={styles.pg_heading}>{text}</h2>
         </div>
        </>
    )
}