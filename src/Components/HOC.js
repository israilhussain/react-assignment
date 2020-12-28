import React, { useState } from 'react';

// This function takes a component...
export function HOC(WrappedComponent) {
    // ...and returns another component...
    return class extends React.Component {
        constructor(props) {
            super(props);
        }

        mouseOverHandler = () => {
            console.log('mouseOverHandler called');
        }
        mouseOutHandler = () => {
            console.log('mouseOutHandler called');
        }

        render() {
            // ... and renders the wrapped component with the fresh data!
            // Notice that we pass through any additional props
            return <WrappedComponent
                mouseOverHandler={this.mouseOverHandler}
                mouseOutHandler={this.mouseOutHandler}
                {...this.props}
            />;
        }
    };
}