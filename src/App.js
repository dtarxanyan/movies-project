import React from 'react';
import DropdownInput from './components/SelectInput/DropdownInput';

class App extends React.Component {
    render() {
        return (
            <>
                <DropdownInput
                    label='Country'
                    value={{ id: 1, name: 'USA'}}
                    options={[
                    { id: 1, name: 'USA'},
                    {id: 2, name: 'Gernamny'}
  ]}
/>

            </>
        )
    }
}

export default App;
