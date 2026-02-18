import styles from  "../Style.module.css"
export const Resource = ({heading, resource_one,resource_two, resource_three }) => {
    return(
        
        <>
            <div  className={styles.resource_wrapper}>
            <h2 className={styles.resource_heading} >{heading}</h2>
            <div 
            onClick={() => console.log("You opened ", {resource_one})} 
            className={styles.resource_options}  >{resource_one}</div>

            <div 
            onClick={() => console.log("You opened ", {resource_two})} 
            className={styles.resource_options}  >{resource_two}</div>

            <div 
            onClick={() => console.log("You opened ", {resource_three})}  
            className={styles.resource_options}  >{resource_three}</div>
         <Feedback />
        </div>
       
        </>
    )
}

export const Feedback = () => {
    return(
        <div className={styles.feedback}>
            <h2 style={{backgroundColor: "transparent",marginBottom: "5px"}} >Therapist Q&A</h2>
            
            <button className={styles.qna_button} >Check out</button>
        </div>
    )
}