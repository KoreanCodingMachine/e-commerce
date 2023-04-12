import React, {useLayoutEffect, useState , useEffect} from 'react';

const Test = () => {

    const [value, setValue] = useState(0)

    useLayoutEffect(()=>{
        if (value === 0) {
            setValue(10 + Math.random() * 200)
        }
    },[value])

    console.log('render', value)

    return (
        <div>
            <button onClick={ () => {setValue(0)} }>value:{value}</button>
        </div>
    );
};

export default Test;