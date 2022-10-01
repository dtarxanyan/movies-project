import React from 'react';


class SidebarItem extends React.Component {
    render() {
        const {icon, text} = this.props;

        return (
            <div className={'sidebar-item'}>
                <div className={'sidebar-item-icon'}>
                    <img src={icon}/>
                </div>
                <p className={'sidebar-item-text'}>
                    {text}
                </p>
            </div>
        );
    }
}

export default SidebarItem;