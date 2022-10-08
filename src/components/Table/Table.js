import React, { Component } from 'react'

export default class Table extends Component {
constructor(props){
    super(props)

}
  render() {
    const {onDelete} = this.props
    return (
      <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Id</th>
            </tr>
        </thead>
        <tbody>
            {this.props.data.map(el => {
                return ( el.isShown && 
                    <tr key={el.id}>
                        <td>{el.name}</td>
                        <td>{el.id}</td>
                        <td><button onClick={() => {onDelete(el.id)}}>X</button></td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    )
  }
}
