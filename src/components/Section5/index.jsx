import "../Style.css"
import React, { useEffect, useState } from "react";
import { items } from "../data/data";

import star from "../../picture/star.svg"
import locationred from "../../picture/locationred.svg"

function Section5() {

    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filteredItems, setFilteredItems] = useState(items);

    const [isButtonVisible, setIsButtonVisible] = useState(true);

    let filters = ["Thailand", "New Zealand", "Canada", "Iceland", "Scotland", "Norway"];

    const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
            let filters = selectedFilters.filter((el) => el !== selectedCategory);
            setSelectedFilters(filters);
        } else {
            setSelectedFilters([selectedCategory]);
        }
    };

    useEffect(() => {
        filterItems();
    }, [selectedFilters]);

    const filterItems = () => {
        if (selectedFilters.length > 0) {
            let tempItems = selectedFilters.map((selectedCategory) => {
                let temp = items.filter((item) => item.category === selectedCategory);
                return temp;
            });
            setFilteredItems(tempItems.flat());
        } else {
            setFilteredItems([...items.slice(0, 6)]);
        }
    };

    const handleClickShowMore = () => {
        setFilteredItems([...items])
        setIsButtonVisible(false);
    }
    // 
    return (
        <div className="container-section5">
            <div className="header-section5">
                <div className="text-header-section5">
                    <h4>FEATURED PLACES</h4>
                    <h1>Most Popular Places</h1>
                </div>

                <div className="buttons-container">
                    {filters.map((category, idx) => (
                        <button
                            onClick={() => handleFilterButtonClick(category)}
                            className={`button ${selectedFilters?.includes(category) ? "active" : ""
                                }`}
                            key={`filters-${idx}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="content-section5">

                <div className="items-container animation-section5">
                    {filteredItems.map((item, idx) => (
                        <div key={`items-${idx}`} className="item-section5">
                            <div className="img-item-section5">
                                <img src={item.src} />
                            </div>

                            <div className="description-section5" >
                                <div className="review-section5">
                                    <div className="star-section5">
                                        <img src={star} />
                                        <img src={star} />
                                        <img src={star} />
                                        <img src={star} />
                                        <img src={star} />
                                    </div>
                                    <div className="rate-section5">
                                        <p>{item.rate}</p>
                                        <p>({item.review})</p>
                                    </div>

                                </div>

                                <p className="name-section5">{item.name}</p>
                                <p className="lorem-section5">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <p className="category">
                                    <img classname="image-category" src={locationred} />
                                    {item.category}
                                </p>
                            </div>
                            <div className="price-other-section5">
                                <p>${item.price} / Per Person</p>
                                <p>{item.day} Days / {item.night} Night</p>
                            </div>

                        </div>
                    ))}
                </div>
                <div className="showmore" >
                    {isButtonVisible && <button onClick={handleClickShowMore}>Show Me More</button>}
                </div>
            </div>
        </div>
    )
}

export default Section5