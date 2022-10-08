import React, {Component} from 'react';

class FrameTest extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {children} =this.props
        return (
            <div className={"frame"}>
                {children}

            </div>
        );
    }
}

export default FrameTest;