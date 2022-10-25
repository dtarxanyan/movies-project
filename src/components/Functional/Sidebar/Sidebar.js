import React, {useState} from "react";
import Layout from "../Layout/Layout";

const Sidebar = (props) => {
    const {items} = props;
    const [open,setOpen] = useState(false)

  const  sidebarOpen = () => {
        setOpen(prev => !open)
  }


    return (
        <div>
            {
                items.map( itm =>
                    <div>
                        <div onClick = {()=>sidebarOpen(itm.name)}>{itm.name}</div>

                        <div>{itm.items.map(menu => open && <div>{menu.name}</div>
                        )}
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Sidebar;