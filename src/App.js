import React from "react";
import Layout from "./components/Functional/Layout/Layout";
import RegistrationPage from "./components/Functional/RegistrationPage/RegistrationPage";
import CalcVolume from "./components/calcVolume";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            width:0,
            length:0
        }
    }

    render() {
        const{width,length}=this.state
        return (
             <Layout>
                <input type='text' onChange={e=>this.setState({width:e.target.value})} placeholder="Width"/>
                <input type='text' onChange={e=>this.setState({length:e.target.value})}  placeholder="length"/>
                <h2>Area:{width*length}</h2>
                <CalcVolume area={width*length} width={width} length={length}/>
             </Layout>

            
           
        );
    }
}

export default App;
