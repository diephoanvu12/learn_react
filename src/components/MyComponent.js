// class component
// function component
import React from "react";

class MyComponent extends React.Component {
    //JSX cho phép javascript trong html
    render() {
        return (
            <div>
                My first component
                {Math.random()}
            </div>
        );
    }
}

export default MyComponent;