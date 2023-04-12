import React, {useState} from 'react';
import Child from "./Child";

//  props는 고정된값 , 부모에서 정의해주는 속성 , 부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터, (자식입장)에서 읽기전용이다.
//  state는 속성을 정의하는 상태 , 자식이 들고있는 값 (쓰기 전용이다.)
const Parent = () => {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount(count+1)
    }

    const decreaseCount = () => {
        setCount(count-1)
    }

    return (
        <div>
            <Child count={count} increaseCount={increaseCount} decreaseCount={decreaseCount}/>
        </div>
    );
};


export default Parent;