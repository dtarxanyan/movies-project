import {Component} from "react";

class Myinput extends  Component{



    render() {
        return (
            <>
               <label>{this.props.lable}</label>
                <input type="text" placeholder={this.props.placeholder}  value={this.props.value} onChange={(e) => this.props.updatValue(e)} className="start-count"/>
            </>
        )
    }


}

export default  Myinput

