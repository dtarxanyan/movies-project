import React, {Component} from 'react';

class DropDownInput extends Component {
    render() {
        return (
            <div>
                <input
                    type="text"
                    list={"drop"}
                />
                <datalist id={"drop"}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                </datalist>


            </div>
        );
    }
}

export default DropDownInput;