import { useState } from "react"
import styles from "../Style.module.css"
import { TakeInput } from "./TakeInput"
import { InputButton } from "../input-button/InputButton"
export const InputContainer = () => {

        // to store array of objects
        const quotes = [
            "everyone around me has it figured out, why don't",
            "parents asking about my future and i genuinely have no answer",
            "quarter life crisis at 3am wondering if any of this leads somewhere"
        ]

        // track quotes
        const [index, setIndex] = useState(0)

    const handleClick = () => {
        setIndex((prev) => (prev + 1) % quotes.length)  
    }

    return(
        <>
       <div className={styles.input_wrapper} >
         <div className={styles.input_container}>
            <TakeInput />
            <br />
            <button onClick={handleClick}
                    className={styles.resource_options} 
                    style={{  width: "fit-content",padding: "1rem", fontSize: "18px", marginBottom : "1rem"  }}
            >Next</button>
            <InputButton text={quotes[index]} />
        </div>
       </div>
        </>
    )
}