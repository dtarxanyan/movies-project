import React, {Component} from 'react';

class DropDown extends Component {

    render() {
        const { options, label, value, onChange } = this.props;

        return (
            <div>
                <label htmlFor="country">{ label }</label>

                <select onChange={ onChange } name="country" id="country">
                    {options.map(option => {
                        if (option.id === value.id) {
                            return <option selected key={option.id}>{option.name}</option>
                        } else {
                            return <option key={option.id}>{option.name}</option>
                        }
                    })
                    }
                </select>

            </div>
        );
    }
}

export default DropDown;