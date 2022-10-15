import React from 'react';

class Dropdown extends React.Component {
    render() {
        const {options, value, label} = this.props;

       return (
            <>
                <label htmlFor="names">{label}</label>
                <select onChange = {(e)=>this.props.onChangeValue(e.target.value,e.target.name)}
                    id="names"
                    // onChange={onChange}
                    value={value}
                    name = {label}
                >
                    {options.map((option) => {
                        return <option key={option.value} value={option.value}>{option.name}</option>;
                    })}
                </select>
            </>
        );
    }
}

export default Dropdown;
