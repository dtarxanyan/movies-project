import React from "react";

class Dropdown extends React.Component {
    constructor() {
        super()
        this.state = {
            countris: []
        }
    }

    componentDidMount() {
        fetch('data.json').then(res => res.json()).then(res => this.setState({ countris: res }))
    }

    render() {

        return (

            <div>
                <label htmlFor="input">{this.props.label}</label>
                <input
                    id="input"
                    type="text"
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.value}
                    onChange={this.props.onChange}
                    list='id'
                />
                <datalist id="id">
                    {this.state.countris.map(({ name }) => {
                        return <option key={name}>{name}</option>
                    })}
                </datalist>

            </div>

        )

    }
}
export default Dropdown