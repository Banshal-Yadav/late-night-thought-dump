import styles from "../Style.module.css"
import { InputContainer } from "../Input-component/InputContainer"
import { PgHeading } from "../Headings/PgHeading"

export const MainBody = () => {
    return(
        <div className={styles.main_body} >
            <div>
                <PgHeading text="Your 2AM, thoughts DUMPER." />
                <InputContainer />
            </div>
        </div>
    )
}