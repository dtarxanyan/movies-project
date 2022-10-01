import React from 'react'

class TextInput extends React.Component{

    render(){
        const {input} = this.props
        return(<div>
            <label>
                <input 
                value='14'
                placeholder='text'
                
                />
            </label>
        </div>)
    }
}
export default TextInput