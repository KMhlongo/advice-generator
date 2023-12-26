import { useEffect, useState } from 'react';
import './App.css';
import Dice from './icon-dice.svg';

function AdviceComponent() {

    const [slip, setSlip] = useState({});

    const fetchSlip = async () => {
        console.log('fetchslip running')
        try {
            fetch('https://api.adviceslip.com/advice', {cache: "no-cache"})
            .then((response) => {   
                return response.json()
            })
            .then((obj) => {
                console.log(obj.slip.advice)
                setSlip(obj.slip)
            })
            .catch((error) => {
                console.log(error)
            })
        } catch(error) {
            console.log(error)
        }       
    }

    useEffect(() => {
       fetchSlip();
    }, []) 

    return (
        <main>
            <p className='advice_id'>{`ADVICE #${slip.id}`}</p>
            <p className='advice_text'>"{slip.advice}"</p>
            <img alt='divider' className='divider'></img>
            <div className='dice-container' onClick={fetchSlip}>
                <img src={Dice} alt='Dice'></img>
            </div>
        </main>
    )

}

export default AdviceComponent;