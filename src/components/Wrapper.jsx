import React from 'react';

// props.children은 부모 컴포넌트에서 자식 컴포넌트 사이에 있는 내용을 참조하기 위해 사용된다.
const Wrapper = ({children}) => {

    return (
        <div>
            {children}
        </div>
    );
};

export default Wrapper;