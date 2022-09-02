import classes from "../UI/GeneralStyling.module.css"
import styleclass from "../Form/Form.module.css"
import { useState } from "react"


const MortgageForm = ()=>{
    //setup the statemanagement for all the inputs
    const [journeyStatus, setJourneyStatus]= useState()
    const [savings, setSavings]=useState()
    const [property, setProperty]=useState()
    const [propertyType, setPropertyType]=useState()
    const [salary, setSalary]=useState()
    const [commitments, setCommitments]=useState()
    const [loans, setLoans]=useState()

    //form submit handler
    const submitHandler=(event)=>{
        event.preventDefault()
        const receivedInputs = {status:journeyStatus, saved:savings, 
            properties:property,type:propertyType,earnings:salary, deductions:commitments,homeLoans:loans}
    }

    //set up Individual input handlers

    const journeyChangeHandler = (e)=>{
        setJourneyStatus(e.target.value)
        console.log(journeyStatus)
    }

    const savingsHandler = (e)=>{
        setSavings(e.target.value)
        
    }

    const propertyHandler = (e)=>{
        setProperty(e.target.value)
        
    }

    const propertyTypeHandler = (e)=>{
        setPropertyType(e.target.value)
        
    }

    const salaryHandler = (e)=>{
        setSalary(e.target.value)
        
    }

    const commitmentsHandler = (e)=>{
        setCommitments(e.target.value)
        
    }

    const loansHandler = (e)=>{
        setLoans(e.target.value)
        
    }

    return (
        <div className={classes.spacing}>
            <div className={styleclass.formcontainer}>
                <form onSubmit={submitHandler} >
                <div className={styleclass.form_dispplay}>
                <div className={styleclass.formcontainer_one}>

                <label htmlFor="journey-status">Where are you in your home ownership journey ?</label>
                    <select id="journey-status" onChange={journeyChangeHandler} required="true">
                    <option value="books">Books</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    </select>

                    <label htmlFor="savings">How much have you set aside for home purchase ?</label>
                    <input id="savings" type="number" placeholder="In $" onChange={savingsHandler} required="true"></input>

                    <label htmlFor="property-number">How many other properties do you own ?</label>
                    <input id="property-number" type="number" onChange={propertyHandler} required="true"></input>

                    <label htmlFor="property-type">What property type are you looking for ?</label>
                    <select id="property-type" onChange={propertyTypeHandler} required="true">
                    <option value="books">Books</option>
                    <option value="html">HTML</option>
                    <option value="css">CSS</option>
                    </select>
                </div>
                
                <div className={styleclass.formcontainer_two}>
                    <label htmlFor="salary">How much do you earn ?</label>
                    <input id="salary" type="number" placeholder="In $" onChange={salaryHandler} required="true"></input>

                    <label htmlFor="commitments">Total amount of monthly commitments </label>
                    <input id="commitments" type="number" placeholder="In $" onChange={commitmentsHandler} required="true"></input>

                    <label htmlFor="loan-field">How many existing home loans do you have ?</label>
                    <input id ="loan-field" type="number" onChange={loansHandler} required="true"></input>

                    
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