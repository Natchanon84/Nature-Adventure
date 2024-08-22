import "../Style.css"
import coupon from "../../picture/coupon.svg"
import balloon from "../../picture/balloon.svg"
import quality from "../../picture/quality.svg"
import callcenter from "../../picture/call-center.svg"


function Section3() {

    return (
        <div className="container-section3">
            <div className="header-section3">
                <h4>WHY CHOOSE</h4>
            </div>
            <div className="content-section3">
                <div className="item-content-section3">
                    <div className="image-item-section3">
                        <img src={coupon}></img>
                    </div>

                    <div className="text-item-section3">
                        <h3>Ultimate flexibility</h3>
                        <p>You're in control, with free cancellation and payment options to satisfy any plan or budget.</p>
                    </div>

                </div>
                <div className="item-content-section3">
                    <div className="image-item-section3">
                        <img src={balloon}></img>
                    </div>

                    <div className="text-item-section3">
                        <h3>Memorable experiences</h3>
                        <p>Browse and book tours and activities so incredible, you'll want to tell your friends.</p>
                    </div>

                </div>
                <div className="item-content-section3">
                    <div className="image-item-section3">
                        <img src={quality}></img>
                    </div>

                    <div className="text-item-section3">
                        <h3>Quality at our core</h3>
                        <p>High-quality standards. Millions of reviews. A tourz company.</p>
                    </div>

                </div>
                <div className="item-content-section3">
                    <div className="image-item-section3">
                        <img src={callcenter}></img>
                    </div>

                    <div className="text-item-section3">
                        <h3>Bast Support</h3>
                        <p>New price? New plan? No problem. We're here to help, 24/7.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Section3