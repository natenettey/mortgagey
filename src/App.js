import Navbar from './UI/Navbar';
import Header from './UI/Header'
import BodyText from './UI/BodyText';
import MortgageForm from './Form/MortgageForm';
import './App.css';

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

}



function App(props) {

const inputsHandler=(inputs)=>{
  const {status, saved, properties,type,earnings, deductions,homeLoans} = inputs
  console.log("new",status, saved, properties,type,earnings, deductions,homeLoans)
  const newMortgage = new Mortgage(saved, properties,earnings, deductions, homeLoans)
  let newLoanToValue = newMortgage.loanToValue()
  let newPropertyCost = newMortgage.propertyCost()
  let newLoanAmount = newMortgage.loanAmount()
  console.log("newloan",typeof(newLoanToValue),newLoanToValue,newPropertyCost,newLoanAmount)
  // let newPropertyCost = newMortgage.propertyCost()
  // let newLoanAmount = newMortgage.loanAmount()

  // console.log(newLoanAmount,newLoanToValue,newPropertyCost)

}
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <BodyText/>
      <MortgageForm onSubmitInput = {inputsHandler}/>
    </div>
  );
}

export default App;
