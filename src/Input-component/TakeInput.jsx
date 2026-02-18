import { useState, useMemo } from "react";
import { InputButton } from "../input-button/InputButton";
import styles from "../Style.module.css"

export const TakeInput = () => {

    const [inputValue, setInputValue] = useState("");

    const placeholderText = [ 
        " “What’s one thing that’s been haunting me?” ", 
        " “What’s one thing I’m scared to admit?” ",
        " If free will doesn't exist, does it even matter how i live my life", 
        " “What’s one thing I wish I could say to my parents?” " ];

                                
    // choose quotes randomly for placeholder
    // calculate placeholder quote once
    const placeholder = useMemo(() => {
        const randomIndex = Math.floor(Math.random() * placeholderText.length);
        return placeholderText[randomIndex];
    }, [] );

    // textarea's onhange triggers this function
    // it get the value and pass it to the useState function
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    // prints the input values from useState
    const handleSubmit = (e) => {
        e.preventDefault();   // prevent refresh
        console.log(inputValue);
        setInputValue(""); // clears text area

        <div>{inputValue}</div>
    }
    
    return(
        <>
        <form  onSubmit={handleSubmit} className={styles.form_container}>
            <textarea  
                value={inputValue} // get text as a value
                onChange={handleChange} // trigger handleChange() on change
                className={styles.form_input}  
                placeholder={placeholder}
                />
            <button className={styles.custom_button} type="submit">Send</button>
        </form> 
        </>
    )
}