import React from 'react';
import TextInput from "./components/TextInput/TextInput";
import DropDownInput from "./components/DropDown/DropDown";

class App extends React.Component {
    render() {
        return (
            <div>
                <TextInput
                    label={'First Name'}
                    placeholder={'Enter Your Name'}
                    value={'Initial Value'}
                    onChange={(newValue) => {
                        console.log(newValue)
                    }}
                />

                <DropDownInput
                    label = {'Country'}
                    value = { {id: 2, name: 'Germany'} }
                />

            </div>


        )
    }
}

export default App;
