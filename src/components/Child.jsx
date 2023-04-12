import React from 'react';

const Child = (props) => {

    console.log(props)
    
    return (
        <div>
            <h1>My name is {props.name}</h1>
            <div>
                {props.count}
                <button onClick={props.increaseCount}>+1</button>
                <button onClick={props.decreaseCount}>-1</button>
            </div>
        </div>
    );
};

Child.defaultProps = {
    name : 'jh'
}

export default Child;