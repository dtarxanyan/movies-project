import { Component } from "react";

class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        };
    }

    componentDidMount() {
        fetch('/list/list.json')
            .then((res) => res.json())
            .then((users) =>
                this.setState({
                    users,
                }),
            );
    }
    // deleteUser = (name) => {
    //     this.setState({
    //         users: this.state.users.filter((user) => {
    //             return user.name !== name;
    //         }),
    //     });
    // };


    render() {

        return (
            <div>
                <div>
                <label htmlFor="input">Name</label>
                <input
                    value={this.state.value}
                    type="text"
                    // onChange={this.state.onChange}
                    list='id'
                />
                <datalist id="id">
                    {this.state.users.map(({ name }) => {
                        return <option key={name}>{name}</option>
                    })}
                </datalist>

            </div>


            </div>
        )
    }
}

export default Dropdown