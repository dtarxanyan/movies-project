import React, {Component} from 'react';

class FrameTest extends Component {



    render() {
        const {children} = this.props
        return (
            <div className={"frame"}>
                {children}
            </div>
        );
    }
}

export default FrameTest;