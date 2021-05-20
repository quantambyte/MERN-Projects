import React , { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';
import axios from './axios'

function TinderCards() {

    const [people , setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/card');



            setPeople(req.data);
        }

        fetchData();
    }, [])


const swipped = (direction, nameToDelete) => {
    console.log('Removing: ' + nameToDelete)
    // setLastDirection(direction);
};

const outOfFrame = (name) => {
    console.log(name + 'left the screen!');
}

    return (
        <div className = 'tinder-cards'>
            <div className = 'tinder-cards_cardContainer'>

            {people.map((person) => (
                <TinderCard
                className = 'swipe'
                key = {person.name}
                preventSwipe= {['up', 'down']}

                onSwipe = {(dir) => swipped(dir, person.name)}

                onCardLeftScreen = {() => outOfFrame(person.name)}
                >

                    <div
                        style = {{backgroundImage: 'url(' + person.imgUrl + ')'}}
                        className = 'card'
                    >
                        <h3>{person.name}</h3>
                    </div>

                </TinderCard>
            ))}

            </div>

        </div>
    )
}

export default TinderCards
