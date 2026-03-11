import styles from "../Style.module.css"
import { TakeInput } from "./TakeInput"
export const InputContainer = () => {

    return(
        <>
       <div className={styles.input_wrapper} >
         <div className={styles.input_container}>
            <TakeInput />
        </div>
       </div>
        </>
    )
}