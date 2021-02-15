import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const Cards = () => {
    return (
        <div className="cards">
            <h1>Check Out!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">

                    <ul className="cards__items">
                        <CardItem
                            src='images/img-6.jpg'
                            text="Explore the waterfall"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Enjoy in  Bali"
                            label="Fun Trip"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-3.jpg"
                            text="Explore the beauty of Atlantic"
                            label="Ocean View"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            text="Explore the Himalayas"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-8.jpg"
                            text="Explore the Sahara Desert"
                            label="Adventure"
                            path="/services"
                        />

                    </ul>

                </div>
            </div>

        </div>
    );
}

export default Cards;