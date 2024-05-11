// class component
// function component
import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Vu',
        address: 'HCM',
        age: 24
    };
    //JSX cho phép javascript trong html
    render() {
        return (
            <div>
                My name is {this.state.name}
            </div>
        );
    }
}

export default MyComponent;