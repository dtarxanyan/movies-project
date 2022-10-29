import SubjectAndClasses from './components/SubjectsAndClasses/SubjectAndClasses';
import './App.css';
import { useState } from 'react';
import menuItems from './components/SubjectsAndClasses/menuItems';

function App() {
  const [isActiveSubjects, setIsActiveSubjects] = useState(menuItems[0].isActive);
  const [isActiveClasses, setIsActiveClasses] = useState(menuItems[1].isActive);

  return (
    <>
      <SubjectAndClasses
        menuItems={menuItems}
        isActiveSubjects={isActiveSubjects}
        setIsActiveSubjects={setIsActiveSubjects}
        isActiveClasses={isActiveClasses}
        setIsActiveClasses={setIsActiveClasses}
      />
    </>
  );
}

export default App;
