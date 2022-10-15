import React from "react";

class Sign extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sign: false,
            login: false,
        }
    }

onOpensign=()=>{
    this.setState({sign:true});
};
onOpenlogin=()=>{
    this.setState({login:true});
};
onOpensign=()=>{
    this.setState({sign:false});
};
onOpenlogin=()=>{
    this.setState({login:false});
};

    render() {
      

        return (
        < form>
        <label for="name">First name:</label>
        <input type="text" id="fname" name="fname"/><br></br>
        <label for="name">Last name:</label>
        <input type="text" id="lname" name="lname"/><br></br>
      </form>
      )
    }
}

export default Sign;