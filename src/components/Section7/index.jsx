import "../Style.css"
import email from "../../picture/email.svg"

function Section7() {

    return (
        <div className="container-section7">
            <div className="header-section7">
                <h4>NEWSLETTER</h4>
                <h1>Subscribe For More Info And Update</h1>
            </div>


            <form className="input-section7">
                <img src={email} />
                <input type="email" placeholder="Your email here..."></input>
                <button type="submit">Subscribe Now</button>
            </form>
        </div>
    )
}

export default Section7