import React,{ Component } from "react";

class Form extends Component{



    render(){
        return(
            <div>
            <form>
                <h1>Sing Up</h1>
                <h3>It is quick and easy</h3>
                <input type={"text"} placeholder={"Name"}/><br/>
                <input type={"text"} placeholder={"Last Name"}/><br/>
                <input type={"number"} placeholder={"Mobile Number"}/><br/>
                <input type={"password"} placeholder={"New Password"}/><br/>
                <select>
                    <option>oct</option>
                    <option>nov</option>
                    <option>dec</option>
                </select>
                <select>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                </select>
                <select>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                </select><br/>
                <label> Female<input type={"radio"} name={"Gender"}/> </label>
                <label> Male<input type={"radio"} name={"Gender"}/> </label>
                <label> Custom<input type={"radio"} name={"Gender"}/> </label> <br/>
                <select>
                    <option>She ."Wish her a happy birthday"</option>
                    <option>He ."Wish his a happy birthday"</option>
                </select><br/>
                <input type="text" placeholder={"Gender(optional)"}/>
            </form>
                <button>Sing Up</button>
                </div>
        )
    }
}

export default Form;