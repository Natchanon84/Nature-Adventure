import "../Style.css"
import support from "../../picture/support.png"
import facebook from "../../picture/facebook.svg"
import twitter from "../../picture/twitter.svg"
import instagram from "../../picture/instagram.svg"
import linkedin from "../../picture/linkedin.svg"
import playStore from "../../picture/play-store.svg"
import appStore from "../../picture/app-store.svg"
import heart from "../../picture/heart.svg"
function Footer() {

    return (
        <div className="container-footer">
            <div className="section1-footer">
                <div className="callcenter-footer">
                    <img src={support} />
                    <h3>Speak to our expert at: +66 2 888 7654 </h3>
                </div>

                <div className="followus-footer" >
                    <h4>Follow Us</h4>
                    <img src={facebook} />
                    <img src={twitter} />
                    <img src={instagram} />
                    <img src={linkedin} />
                </div>
            </div>

            <div className="section2-footer">
                <div className="item-footer item1-footer">
                    <div className="item-header-footer" >
                        <h3>Contact</h3>
                    </div>
                    <div className="item-content-footer">
                        <a href="#">Ocean Tower II Sukhumvit 21 <br />
                            Khlong Toei,Watthana Bangkok</a>
                        <br />
                        <a href="#">info@example.com</a>
                    </div>
                </div>
                <div className="item-footer item2-footer">
                    <div className="item-header-footer" >
                        <h3>Company</h3>
                    </div>
                    <div className="item-content-footer">
                        <a href="#">About Us</a>
                        <a href="#">Tourz Reviews</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Travel Guides</a>
                        <a href="#">Data Policy</a>
                        <a href="#">Cookie Policy</a>
                        <a href="#">Legal</a>
                        <a href="#">Sitemap</a>
                    </div>
                </div>
                <div className="item-footer item3-footer">
                    <div className="item-header-footer" >
                        <h3>Support</h3>
                    </div>
                    <div className="item-content-footer">
                        <a href="#">Get in Touch</a>
                        <a href="#">Help center</a>
                        <a href="#">Live chat</a>
                        <a href="#">How it works</a>
                    </div>
                </div>
                <div className="item-footer item4-footer">
                    <div className="item-header-footer" >
                        <h3>Mobile Apps</h3>
                    </div>
                    <div className="item-content-footer">
                        <div className="store-footer" >
                            <img src={playStore} />
                            <a href="#">Android App</a>
                        </div>

                        <div className="store-footer">
                            <img src={appStore} />
                            <a href="#"> iOS App</a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="section3-footer">
                <div className="item-left-footer" >
                    <p>Copyright 2023 All rights reserved.</p>
                </div>
                <div className="item-right-footer" >
                    <p>Crafted With</p>
                    <img src={heart} />
                    <p>by</p>
                    <p className="red">Natchaaaa</p>
                </div>
            </div>
        </div>
    )
}

export default Footer