import React from 'react';
import SelectItem from "./SelectItem";

class Dropdown extends React.Component {
    constructor() {
        super();
        this.state ={
             options:[{id: 1, name: 'usa'}, {id: 2, name: 'HP'}, {id: 3, name: 'GR'}  ,{id: 4, name: 'tt'} ,{id: 5, name: 'bb'}]

        }
    }

    handleChange = (e) => {
        const value = e.target.value;

            console.log(value)
    }

    render() {


        return (
            <select name="cars" id="cars" onChange={this.handleChange}>

                {this.state.options.map((item)=>{
                      return <SelectItem  key={item.id} id={item.id} name ={item.name} handleChange ={this.handleChange}/>
                })}


            </select>
        )
    }
}

export default Dropdown;