import "./Style.css"
import Footer from "./Footer/index"
import Navbar from "./Navbar/index"
import Section1 from "./Section1/index"
import Section2 from "./Section2/index"
import Section3 from "./Section3/index"
import Section4 from "./Section4/index"
import Section5 from "./Section5/index"
import Section6 from "./Section6/index"
import Section7 from "./Section7/index"


function travelWebsite() {

    return (

        <div className="container">
            <Navbar />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Footer />
        </div>

    )
}

export default travelWebsite