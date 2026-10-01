import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import styles from "../Style.module.css"
import { API_URL, MODEL, SYSTEM_PROMPT } from "../config"

export const TakeInput = () => {

    const [inputValue, setInputValue] = useState("");
    const [aiResponse, setAiResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userInput = inputValue.trim();
        if (!userInput || isLoading) return;
        setInputValue("");
        setError("");
        setAiResponse("");
        setIsLoading(true)

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    model: MODEL,
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        { role: "user", content: userInput }
                    ]
                })
            })
            if (!response.ok) {
                throw new Error(`server responded ${response.status}`)
            }
            const data = await response.json();
            setAiResponse(data.choices[0].message.content);
        } catch (err) {
            setError("couldn't reach the model. is LM Studio running?")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form_container}>
                <textarea
                    value={inputValue}
                    onChange={handleChange}
                    className={styles.form_input}
                    placeholder="dump your thoughts.."
                />
                <button className={styles.custom_button} type="submit" disabled={isLoading}>Send</button>
            </form>

            {isLoading && <div style={{ backgroundColor: "transparent" }} >thinking...</div>}
            {error && <div className={styles.ai_response}>{error}</div>}
            {aiResponse.length > 0 && <div className={styles.ai_response}>
                <ReactMarkdown >{aiResponse}</ReactMarkdown>
            </div>}
            {aiResponse && <button className={styles.ai_res_back_btn} onClick={() => setAiResponse("")}> Back </button>}


        </>
    )
}
