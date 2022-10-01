import React from 'react'

class TextInput extends React.Component {

    render() {
        return (
            <>
            <label htmlFor="input">{this.props.label}</label>
            <input
              id="input"
              type="text"
              placeholder={this.props.placeholder}
              defaultValue={this.props.value}
              onChange={this.props.onChange}
            />
          </>
        )
    }
}
export default TextInput