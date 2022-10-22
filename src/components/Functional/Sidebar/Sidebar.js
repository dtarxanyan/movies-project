import React, { useState } from "react";

const Sidebar = (props) => {
  const [show, setShow] = useState(true);
  const { items } = props;
  const changeClassName = () => {
    setShow(!show);
  };
  return (
    <div>
      {items.map((menu) => {
        return (
          <>
            <div className="menuItem" onClick={changeClassName}>
              {" "}
              {menu.name}{" "}
            </div>
            <div className={show ? "subMenu" : ""}>
              {" "}
              {menu.items.map((item) => {
                return <div> {item.name} </div>;
              })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Sidebar;
