import React from 'react';

class SingnUpList extends React.Component{
    render(){
        const {props:{placeholder}} = this
        return (
        <div>
        <input type="text" placeholder={ placeholder } />
        </div>
        );
    }
    
}

export default SingnUpList;
