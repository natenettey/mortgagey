import Card from "../UI/Card"
import ReactDOM  from "react-dom"
import classes from '../ResultModal/Modal.module.css'

const Modal = (props)=>{
    return(
        <>
            {ReactDOM.createPortal(
                <div className={classes.modal_backdrop}>
                    <Card>
                    <h2>Affordability Breakdown</h2>
                    <h3>Your home could cost up to  ${props.breakDownValues.newPropertyCost.toLocaleString()}</h3>
                        <div className={classes.modal_breakdown}>
                            <section className={classes.modal_breakdown__section}>
                                <div className = {classes.modal_breakdown__section__div}>
                                <p>Loan Amount :</p>
                                <p>$ {props.breakDownValues.newLoanAmount}</p>
                                </div>

                                <div className = {classes.modal_breakdown__section__div}>
                                <p>Loan To Value :</p>
                                <p>{props.breakDownValues.newLoanToValue}</p>
                                </div>
                                
                                <div className = {classes.modal_breakdown__section__div}>
                                <p>Property Type :</p>
                                <p>{props.breakDownValues.type}</p>
                                </div>

                                
                            </section>

                            <section className={classes.modal_breakdown__section}>
                            <div className = {classes.modal_breakdown__section__div}>
                                <p>Total Downpayment :</p>
                                <p>{props.breakDownValues.saved}</p>
                                </div>

                                <div className = {classes.modal_breakdown__section__div}>
                                <p>Minimum Downpayment :</p>
                                <p>${props.breakDownValues.newDownPayment}</p>
                                </div>

                                

                                <div className = {classes.modal_breakdown__section__div}>
                                <p>Remaining Downpayment :</p>
                                <p>${props.breakDownValues.newRemainderDownpayment} </p>
                                </div>
                            </section>
                        </div>
                    </Card>
                </div>,
                document.getElementById('modal_overlay')
            )

            }
        </>
    )
}
export default Modal