import classes from '../UI/BodyText.module.css'
import generalStyle from '../UI/GeneralStyling.module.css'

const BodyText = ()=>{
    return(
        <div className={[classes.bodytext]}>
            <div>
                <h2>
                    Find the right budget that fits your  pocket  and doesn't break your bank
                </h2>
            </div>
            <div>
                <p>
                Find your budget so you can purchase your dream home with confidence.
                Simply answer a few questions about yourself, your financials and desired home, 
                and we'll calculate your maximum property price, estimated loan amount and required downpayment.
                </p>
            </div>
        </div>
    )
}
export default BodyText