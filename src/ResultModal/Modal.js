import Card from "../UI/Card"
import ReactDOM  from "react-dom"
import classes from '../ResultModal/Modal.module.css'

const Modal = ()=>{
    return(
        <>
            {ReactDOM.createPortal(
                <div className={classes.modal_backdrop}>
                    <Card>
                        <div>
                            <h2>Your home could cost up to $5000</h2>
                            <div>
                                
                            </div>
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