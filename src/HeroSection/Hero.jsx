import styles from "../Style.module.css"
export const HeroSection = ({heroTitle}) => {
    return (
        <>
         <div>
            <h2 className={styles.hero_text}>{heroTitle}</h2>
         </div>
        </>
    )
}