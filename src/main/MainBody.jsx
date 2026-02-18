import styles from "../Style.module.css"
import { InputContainer } from "../Input-component/InputContainer"
import { Resource } from "../resources/Resource"
import { PgHeading } from "../Headings/PgHeading"

export const MainBody = () => {
    return(
        <div className={styles.main_body} >
            <div>
                <PgHeading text="Your 2AM, thoughts DUMPER." />
                <InputContainer />
            </div>
            <Resource 
                heading="Resources" 
                resource_one="Help Line"
                resource_two="Article"
                resource_three="Blog posts"
            />
        </div>
    )
}