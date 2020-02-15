import React from 'react';


//long for of stateless components using explicit return statement
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What Should I Do?
            </button>
        </div>
    );
};

export default Action;
