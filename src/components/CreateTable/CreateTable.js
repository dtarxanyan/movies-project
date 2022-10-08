import {Component} from "react";
import TableItem from "./TableItem";

class CreateTable extends Component {
    constructor() {
        super();
        this.state = {
            data: [{id: 1, name: 'USA'}, {id: 2, name: 'USA'}, {id: 3, name: 'USA'}, {id: 4, name: 'USA'},]
        }

        this.remuveTableitem = this.remuveTableitem.bind(this)
    }

    remuveTableitem(id) {
        let result = this.state.data.filter((item) => {
            return item.id !== id

        })

        this.setState({
            data:result
        })
    }


    render() {

        return (
            <>
                <ul>

                    {this.state.data.map((item) => {
                        return <TableItem key={item.id}  remuveTableitem ={this.remuveTableitem} id ={item.id} name={item.name}/>
                    })}
                </ul>
            </>

        )
    }

}


export default CreateTable;