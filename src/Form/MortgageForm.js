import classes from "../UI/GeneralStyling.module.css"
import styleclass from "../Form/Form.module.css"


const MortgageForm = ()=>{

    return (
        <div className={classes.spacing}>
            <div className={styleclass.formcontainer}>
                <form >
                <div className={styleclass.form_dispplay}>
                <div className={styleclass.formcontainer_one}>
                <label>Where are you in your home ownership journey ?</label>
                    <select>
                    <option value="books">Books</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    </select>

                    <label>How much have you set aside for home purchase ?</label>
                    <input></input>

                    <label>Do you own any other properties ?</label>
                    <input></input>
                </div>
                
                <div className={styleclass.formcontainer_two}>
                <label>How much do you earn ?</label>
                    <input></input>

                    <label>Do you have monthly commitments ?</label>
                    <input></input>

                    <label>What property type are you lookinhg for ?</label>
                    <select>
                    <option value="books">Books</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    </select>
                </div>
                </div>
                
                    <div className={styleclass.submit_button_container}>
                    <input type="submit" className={styleclass.submit_button}></input>
                    </div>
                    
                </form>
            </div>
           
            
        </div>
    )
}

export default MortgageForm