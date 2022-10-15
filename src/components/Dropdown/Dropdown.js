import React from 'react';

class Dropdown extends React.Component {
    render() {
        const {options, value, label, onChange} = this.props;

       return (
            <>
                <label htmlFor="names">{label}</label>
                <select
                    id="names"
                    onChange={onChange}
                    value={value}
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
