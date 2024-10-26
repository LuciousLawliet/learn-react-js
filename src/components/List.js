import React from "react";
import Heroes from "../Data/justiceLeague.json";

function NameList() {
    const persons = [
        {
            id: 0,
            name: 'Fadel',
            age: '24',
            ability: 'Omnipotent'
        },
        {
            id: 1,
            name: 'Goblog',
            age: '214',
            ability: 'Tolol'
        },
        {
            id: 2,
            name: 'Papa',
            age: '44',
            ability: 'Anjing'
        },
        {
            id: 3,
            name: 'Joni',
            age: '14',
            ability: 'Bangsad'
        },
    ]

    //const personList = persons.map(person => (<h2>Damn {person.name}, u are {person.ability}</h2>))
    const heroList = Heroes.map(hero => {
        return(
            <div>
                <h1>{hero.name}</h1>
                <p>as</p>
                <h2>{hero["a.k.a"]}</h2>
                <p>has</p>
                <h2>{hero.ability}</h2>
            </div>
        )
    })
    return <div>{heroList}</div>
}

export default NameList