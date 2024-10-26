import React from "react";

const HelloHeroes = (props) => {
    const {name, hero, ability} = props

    return (
        <div>
        <h1>Hello {name} a.k.a {hero}</h1>
            {ability}
        </div>
    )
}

export default HelloHeroes