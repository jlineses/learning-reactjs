import React from 'react';


const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and i'm {props.age} years old.</p>
        </div>
    )
};

export default person;