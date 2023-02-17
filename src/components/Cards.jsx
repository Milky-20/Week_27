import React, { useState } from 'react';
import './Cards.css'

export default function Cards(props) {

// constructor(props){
//     super(props);
//     this.state = {
//         pressed: false
//     };
// };

const [pressed, setPressed] = useState(false);

const handleChange = () => {
    setPressed(!pressed);
}

    
        const {name, price, priceTextHigh, priceTextLow, speed, condition, color} = props;
        
        let classCard;
        if (pressed) classCard = "selected";

        return (

            <div className={`card ${classCard}`} onClick = {handleChange}>
            <div className='cardName' style={{backgroundColor: color}}>{name}</div>
                <div className='card-price' style={{backgroundColor: color}}>
                <span className='priceTextHigh'>{priceTextHigh}</span>
                <span className='price'>{price}</span>
                <span className='priceTextLow'>{priceTextLow}</span>
                </div>

                <div className='card-speed' style={{backgroundColor: color}}>{speed}</div>

                <footer className='card-condition' style={{backgroundColor: color}}>{condition}</footer>
                
            </div>

        );
    }

