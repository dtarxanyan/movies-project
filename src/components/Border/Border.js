import {Component} from "react";


class Border extends Component {
    constructor() {
        super();
    }




    render() {
        console.log()
        return(
            <div className='border'>
                {this.props.children}
            </div>
        )
    }


}
export default Border