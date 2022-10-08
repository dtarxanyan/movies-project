import React, {Component} from 'react';

class BlackBox extends Component {
    constructor() {
        super();
    }
    render() {
        const {children} = this.props
        return (
            <div className={'blackBox'}>
                {children}
            </div>
        );
    }
}

export default BlackBox;