import React from "react";
import SidebarItem from "./SidebarItem";

import './css/sidebar.css'

class Sidebar extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            isLoading: true,
        }
    }

    componentDidMount() {
        fetch('/data/sidebar.json').then(resp => resp.json()).then((items) => this.setState({
            items,
            isLoading: false
        }))
    }

    render() {
        return (
            <div className={'sidebar'}>
                {this.state.isLoading && <span>Loading...</span>}
                {!this.state.isLoading && this.state.items.map(item => {
                    return (
                        <SidebarItem
                            key={item.id}
                            icon={item.url}
                            text={item.name}
                        />
                    )
                })}

            </div>
        )
    }
}

export default Sidebar;