import Navbar from './UI/Navbar';
import Header from './UI/Header'
import BodyText from './UI/BodyText';
import MortgageForm from './Form/MortgageForm';
import Modal from './ResultModal/Modal';
import './App.css';
import { useState } from 'react';

//create class or constructor function here
class Mortgage{
  constructor (saved, properties,earnings, deductions, homeLoans){
    this.saved =saved;
    this.properties = properties;
    this.earnings = earnings;
    this.deductions = deductions;
    this.homeLoans = homeLoans;
    this.percentage = 0
  }
  loanToValue(){
    
    
    if (this.homeLoans == 0 ){
      this.percentage = 0.75
      return this.percentage
  }else if(this.homeLoans==1){
     this.percentage = 0.45
     return this.percentage
  }else if (this.homeLoans >=2){
       this.percentage = 0.35
       return this.percentage     
  }
  }

  propertyCost(){
    const newPercentage = this.loanToValue()
    const property_value = Math.round(this.saved/(1-newPercentage))
    return property_value
  }

  loanAmount(){
    const percentage = this.loanToValue()
    const property_value = this.propertyCost()
    const loan_due = percentage*property_value
    return loan_due
  }

  minimumDownPayment(){
    const propertyValue = this.propertyCost()
    const downPayment = propertyValue * (25/100)
    return downPayment
  }

  remainingDownPayment(){
    
    const downPayment = this.minimumDownPayment()
    return this.saved - downPayment
  }

}



function App(props) {

  const [showModal, setShowModal] = useState(false)
  const [valueObject, setValueObject] = useState({})

const inputsHandler=(inputs)=>{
  const {status, saved, properties,type,earnings, deductions,homeLoans} = inputs
  console.log("new",status, saved, properties,type,earnings, deductions,homeLoans)
  const newMortgage = new Mortgage(saved, properties,earnings, deductions, homeLoans)
  let newLoanToValue = newMortgage.loanToValue()
  let newPropertyCost = newMortgage.propertyCost()
  let newLoanAmount = newMortgage.loanAmount()
  let newDownPayment = newMortgage.minimumDownPayment()
  let newRemainderDownpayment = newMortgage.remainingDownPayment()
  console.log("newloan",typeof(newLoanToValue),newLoanToValue,newPropertyCost,newLoanAmount,type,newDownPayment)
  setValueObject( {newLoanToValue,newPropertyCost,newLoanAmount,type,saved,newDownPayment,newRemainderDownpayment})
  setShowModal(true)


}

  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <BodyText/>
      <MortgageForm onSubmitInput = {inputsHandler}/>
      {showModal && <Modal breakDownValues = {valueObject}/>}
    </div>
  );
}

export default App;
