import {Component} from "react";

class TableItem extends Component {
    constructor() {
        super();

    }



    render() {

        return (
            <>
                <li>
                     <span>{this.props.id} </span><span>{this.props.name} </span> <span onClick={()=>this.props.remuveTableitem(this.props.id)}>X</span>
                </li>
            </>

        )
    }

}


export default TableItem;