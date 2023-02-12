import React from 'react';
import './Cards.css'

class Cards extends React.Component {
    render() {
        const {name, price, priceTextHigh, priceTextLow, speed, condition, isSelected, color} = this.props;
        
        let classCard;
        if (isSelected) classCard = "selected";

        return (

            <div className={`card ${classCard}`}>
            <div className='cardName' style={{backgroundColor: color}}>{name}</div>
                <div className='card-price' style={{backgroundColor: color}}>

                <span className='priceTextHigh'>{priceTextHigh}</span>
                <span className='price'>{price}</span>
                <span className='priceTextLow'>{priceTextLow}</span>
                </div>

                <div className='card-speed' style={{backgroundColor: color}}>{speed}</div>

                <footer className='card-condition' style={{backgroundColor: color}}>{condition}</footer>
                
            </div>

        )
    }
}

export default Cards;