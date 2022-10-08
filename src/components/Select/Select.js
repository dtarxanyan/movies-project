import {Component} from "react";
import Options from "./Options";

class Select extends Component {
    constructor() {
        super();

        this.state ={
            data:[  {id: 1, name: 'USA'},  {id: 2, name: 'USA'},  {id: 3, name: 'USA'},  {id: 4, name: 'USA'},]
        }
    }

    render() {

        return (
            <>

                <Options  data = {this.state.data}value="volvo" />

            </>

        )
    }

}


export default Select;