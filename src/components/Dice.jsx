import React, { useState } from 'react';
import diceEmpty from "../assets/images/dice-empty.png"
import diceOne from "../assets/images/dice1.png"
import diceTwo from "../assets/images/dice2.png"
import diceThree from "../assets/images/dice3.png"
import diceFour from "../assets/images/dice4.png"
import diceFive from "../assets/images/dice5.png"
import diceSix from "../assets/images/dice6.png"

const Dice = () => {
    const [diceState, setDice] = useState(diceThree);
    const dices = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];
    
    const rollDice =() => {

        // initially display empty dice
        setDice(diceEmpty);
        // display a new random dice after 1 sec.
        setTimeout(()=> {
            const diceIndex = Math.floor(Math.random()*dices.length);
            setDice(dices[diceIndex]);
        }, 1000);
    }
    return ( 
        <div className = 'picture'>
            <img src= {diceState} onClick={rollDice}/>
        </div>
     );
}
 
export default Dice;