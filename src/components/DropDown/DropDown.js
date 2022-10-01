import React, {Component} from 'react';
import {deselectOptions} from "@testing-library/user-event/dist/select-options";

class DropDownInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: [],
        }

    }

    componentDidMount() {
        fetch('/data/countries.json')
            .then(res => res.json())
            .then(countries => this.setState({
                countries: countries,
            }))
    }

    render() {
        const { options, label, value } = this.props;

        return (
            <div>
                <label htmlFor="country">{ label }</label>

                <select name="country" id="country">
                    {this.state.countries.map(option => <option selected={value} key={option.id} value="volvo">{option.name}</option>)}
                </select>

            </div>
        );
    }
}

export default DropDownInput;