import React from "react";

class InputBar extends React.Component{
constructor(props) {
    super(props);
}

        render() {
            const {hendelInput} = this.props

            return(
                <input
                id={"input"}
                onChange={hendelInput}
                type="text"
                placeholder={"text..."}
            />
        )
    }
}

export default InputBar;
