import styles from "../Style.module.css"
export const InputButton = ({text}) => {

  
    return(
        <>
            <button  className={styles.input_suggestions}> {text} </button>
        </>
    )
}