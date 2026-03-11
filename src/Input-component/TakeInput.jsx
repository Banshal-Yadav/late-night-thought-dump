import { useState, useMemo } from "react";
import ReactMarkdown from 'react-markdown';
import { InputButton } from "../input-button/InputButton";
import styles from "../Style.module.css"

export const TakeInput = () => {

    const [inputValue, setInputValue] = useState("");
    const [aiResponse, setAiResponse] = useState("");

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

    
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    // prints the input values from useState
    const handleSubmit = async (e) => {
        e.preventDefault();   // prevent refresh
        const userInput = inputValue;
        console.log("handleSubmit code is running");
        setInputValue(""); // clears text area

        const response = await fetch("http://localhost:1234/v1/chat/completions", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                model: "qwen3.5-4b@q6_k",
                messages: [{role: "user", content: userInput}]
            })
        })  
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
                placeholder={placeholder}
                />
            <button className={styles.custom_button} type="submit">Send</button>
        </form> 

        {/* ai response */}
        <div className={styles.ai_response}>
            <ReactMarkdown >{aiResponse}</ReactMarkdown>
        </div>
        
        </>
    )
}