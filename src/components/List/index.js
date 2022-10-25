import {Component} from "react";
const users = ['Aram','Rafael','Narek'];

class List extends Component{

    constructor(props){
    super(props);
    }
    

    render(){
        console.log(this.props);
        return(
            <ul>
                <div> Title:{this.props.title} </div>
               {users.map((user,index)=><li key={index}>{user}</li>)}
            </ul>
        )
    }
}
export default List;