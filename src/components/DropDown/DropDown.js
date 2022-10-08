import React, {Component} from 'react';
import {deselectOptions} from "@testing-library/user-event/dist/select-options";

class DropDown extends Component {

    render() {
        const { options, label, value } = this.props;

        return (
            <div>
                <label htmlFor="country">{ label }</label>

                <select name="country" id="country">
                    {this.props.options.map(option => <option selected={value} key={option.id}>{option.name}</option>)}
                </select>

            </div>
        );
    }
}

export default DropDown;