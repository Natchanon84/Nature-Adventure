import "../Style.css"
import React, { useState } from 'react';
import location from "../../picture/location.svg"
import calendar from "../../picture/calendar.svg"
import plane from "../../picture/plane.svg"
import person from "../../picture/person.svg"
import search from "../../picture/search.svg"

function Section1() {
    const [where, setWhere] = useState("Search destinations")
    const [travelType, setTravelType] = useState("Travel Type")
    const [adults, setAdults] = useState(1)
    const [childeren, setChilderen] = useState(1)

    const [isOpenWhere, setIsOpenWhere] = useState(false)
    const [isOpenTravel, setisOpenTravel] = useState(false)

    const handleWhereClick = () => {
        setIsOpenWhere(!isOpenWhere)
    }

    const handleWhereItemClick = (location) => {
        setWhere(location);
    }

    const handleTravelClick = () => {
        setisOpenTravel(!isOpenTravel)
    }

    const handleTravelItemClick = (type) => {
        setTravelType(type)
    }

    const countType = (type, symbol) => {
        if (type === "adults") {
            if (adults >= 1) {
                if (symbol === "+") {
                    setAdults(adults + 1)
                } else {
                    setAdults(adults - 1)
                }
            } else if (adults < 1) {
                if (symbol === "-") {
                    setAdults(adults = 0)
                } else {
                    setAdults(adults + 1)
                }
            }
        } else if (type === "childeren") {
            if (childeren >= 1) {
                if (symbol === "+") {
                    setChilderen(childeren + 1)
                } else {
                    setChilderen(childeren - 1)
                }
            } else if (childeren < 1) {
                if (symbol === "-") {
                    setChilderen(childeren = 0)
                } else {
                    setChilderen(childeren + 1)
                }
            }
        }
    }
    return (
        <div className="container-section1">
            <div className="textheader-section1">
                <h1>Explore Life  </h1>
                <h1>Travel Where</h1>
                <h1>You Want</h1>
                <p>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected.
                </p>
            </div>
            <div className="container-searchbox-section1">
                <div className="searchbox-section1">
                    {/* Location */}
                    <div className="item-searchbox" onClick={handleWhereClick}>
                        {/* <img src={location} /> */}
                        <div className="content-item-searchbox cursor">
                            <p className="bold" style={{ color: "#EF8125" }}>Location</p>
                            <p className="location-p clearcolor">{where}</p>

                            {isOpenWhere && (
                                <div id="myDropdown" className="dropdown-content">
                                    <p onClick={() => handleWhereItemClick("Thailand")} >Thailand</p>
                                    <p onClick={() => handleWhereItemClick("New Zealand")} >New Zealand</p>
                                    <p onClick={() => handleWhereItemClick("Canada")} >Canada</p>
                                    <p onClick={() => handleWhereItemClick("Iceland")} >Iceland</p>
                                    <p onClick={() => handleWhereItemClick("Scotland")} >Scotland</p>
                                    <p onClick={() => handleWhereItemClick("Norway")} >Norway</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Booking Date */}
                    <div className="item-searchbox">
                        {/* <img src={calendar} /> */}
                        <div className="content-item-searchbox">
                            <p className="bold" style={{ color: "#EF8125" }} >Booking Date</p>
                            <input className="calendar-item-searchbox clearcolor" type="date"></input>
                        </div>
                    </div>
                    {/* Travel Type */}
                    <div className="item-searchbox cursor " onClick={handleTravelClick}>
                        {/*<img src={plane} />*/}
                        <div className="content-item-searchbox" >
                            <p className="bold" style={{ color: "#EF8125" }}>Travel Type</p>
                            <p className="type-p clearcolor">{travelType}</p>

                            {isOpenTravel && (
                                <div id="myDropdown" className="dropdown-content">
                                    <p onClick={() => handleTravelItemClick("Offcial Tour")} >Offcial Tour</p>
                                    <p onClick={() => handleTravelItemClick("Family Tour")} >Family Tour</p>
                                    <p onClick={() => handleTravelItemClick("Group Tour")} >Group Tour</p>

                                </div>
                            )}

                        </div>

                    </div>
                    {/* Guest */}
                    <div className="guest-item-searchbox">
                        <div className="icon-guest" >
                            {/* <img src={person} /> */}
                        </div>

                        <div className="guest-content-item-searchbox" >
                            <p className="bold" style={{ color: "#EF8125" }}>Guest</p>
                            <div className="item-guest">
                                <div className="name-guest">
                                    <p className="clearcolor">Adults</p>
                                </div>
                                <div className="count-guest">

                                    <button className="btn-minus cursor" onClick={() => countType("adults", "-")}>-</button>
                                    <p className="clearcolor">{adults}</p>
                                    <button className="btn-plus cursor" onClick={() => countType("adults", "+")}>+</button>
                                </div>

                            </div>

                            <div className="item-guest">
                                <div className="name-guest">
                                    <p className="clearcolor">Childeren</p>
                                </div>

                                <div className="count-guest">
                                    <button className="btn-minus cursor" onClick={() => countType("childeren", "-")}>-</button>
                                    <p className="clearcolor">{childeren}</p>
                                    <button className="btn-plus cursor" onClick={() => countType("childeren", "+")}>+</button>
                                </div>

                            </div>


                        </div>
                    </div>
                    <div className="icon-search">
                        <button onClick={() => window.location.reload()} className="btn-search-section1 cursor" >Search</button>
                        {/* <img src={search} /> */}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Section1