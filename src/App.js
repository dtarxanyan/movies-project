import React from 'react';
import TableContainer from "./components/Table/TableContainer";
import DropDown from "./components/dropDown";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoader: true,
            list: [],
        }
    }

    componentDidMount() {
        fetch("/data.dropDown.json")
            .then(res => res.json())
            .then(list => this.setState({
                list
            }))
    }


    render() {
        const {list} = this.state;
        return (
            <>
               <DropDown

                        label={"Country"}
                        value={{id: 1, name: "USA"}}
                        options={this.state.list}
                        onChange={() => {
                            console.log(this.label)
                        }}

                />

            </>
        )
    }
}

export default App;
