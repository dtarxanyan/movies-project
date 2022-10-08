import React from 'react';
import Dropdown from './components/Dropdown/Dropdown';
class App extends React.Component {
constructor(){
    super();
    this.state = {
        users : []
    }
}

    componentDidMount(){
        fetch('data/sidebar.json').then(res => res.json())
        .then(res => this.setState({
            users : res
        }))
    }
    render() {
        return (
            <Dropdown 
            value = 'name'
            label = 'label'
            users={this.state.users}/>

            )
    }
}

export default App;
