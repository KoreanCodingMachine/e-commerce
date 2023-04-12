import React from 'react';
import Parent from "../components/Parent";
import Wrapper from "../components/Wrapper";
import Child from "../components/Child";

// Wrapper 컴포넌트는 Parent , Child 컴포넌트의 상위 컴포넌트다.
const State = () => {
    return (
        <Wrapper>
            <Parent />
        </Wrapper>
    );
};

export default State;