import { useState, useMemo } from "react";
import ReactMarkdown from 'react-markdown';
import styles from "../Style.module.css"

export const TakeInput = () => {

    const [inputValue, setInputValue] = useState("");
    const [aiResponse, setAiResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    // prints the input values from useState
    const handleSubmit = async (e) => {
        e.preventDefault();   // prevent refresh
        const userInput = inputValue;
        console.log("handleSubmit code is running");
        setInputValue(""); // clears text area

        setIsLoading(true)
        const response = await fetch("http://localhost:1234/v1/chat/completions", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                model: "qwen3.5-9b@iq4_xs",
                messages: [{role: "user", content: userInput}]
            })
        })  
        setIsLoading(false)
        const data = await response.json();
        setAiResponse(data.choices[0].message.content);  
    }
    
    return(
        <>
        <form  onSubmit={handleSubmit} className={styles.form_container}>
            <textarea  
                value={inputValue} 
                onChange={handleChange} 
                className={styles.form_input}  
                placeholder="dump your thoughts"
                />
            <button className={styles.custom_button} type="submit">Send</button>
        </form> 

        {/* ai response  and locading text*/}
        {isLoading && <div>thinking...</div>}
        {!isLoading && <div className={styles.ai_response}>
            <ReactMarkdown >{aiResponse}</ReactMarkdown>
        </div>}
        
        
        </>
    )
}