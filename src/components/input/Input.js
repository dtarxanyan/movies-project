import {Component} from "react";
import Myinput from "./Myinput";

class Input extends Component {
    constructor() {
        super();
        this.state = {
            vale: 0

        }
          this.updatValue = this.updatValue.bind(this)
    }

    updatValue(e) {
        // console.log()
      this.setState({
           vale:e.target.value

        })
    }


    render() {
        return (
            <>
                <Myinput lable='input lable' placeholder='my placeholder' value={this.state.vale} updatValue={this.updatValue}/>
            </>
        )
    }


}

export default Input

