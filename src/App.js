import React from "react";
import SubjectClasses from "./components/SubjectClasses";

const menuItems = [
  {
    name: "Առարկաներ",
    isActive: false,
    items: [
      {
        name: "Ֆիզիկա",
      },
      {
        name: "Մաթեմ",
      },
      {
        name: "Հայոց",
      },
    ],
  },
  {
    name: "Դասարաններ",
    isActive: false,
    items: [
      {
        name: "10 Ա",
      },
      {
        name: "9 Բ",
      },
      {
        name: "11 Գ",
      },
    ],
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <SubjectClasses subjectsObject={menuItems} />;
  }
}

export default App;
