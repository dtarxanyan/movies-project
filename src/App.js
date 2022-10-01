import React from 'react';
import Sidebar from './components/SideBar/Sidebar';
import Input from './components/Input';

class App extends React.Component {
  render() {
    return (
      <div>
        <Input label={'My input'} placeholder={1000} value={100} onChange={() => console.log(10)} />
      </div>
    );
  }
}

export default App;
