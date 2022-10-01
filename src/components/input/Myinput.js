import {Component} from "react";

class Myinput extends  Component{



    render() {
        // console.log(this.props.label)
        return (
            <>
              {this.props.lable === undefined?'':<label>{this.props.lable}</label>}

                <input type="text" placeholder={this.props.placeholder?this.props.placeholder:''}  onChange={(e) => this.props.updatValue(e)} className="start-count"/>
            </>
        )
    }


}

export default  Myinput

