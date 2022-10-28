import { useState } from "react";

const SubjectClasses = ({ subjectsObject }) => {
  const [data, setData] = useState(subjectsObject);
  const handelActivities = (subName) => {
    setData(
      data.map((item) => {
        if (item.name === subName) {
          item.isActive = !item.isActive;
          return item;
        }
        return item;
      })
    );
  };
  return (
    <div className="mainSubject">
      {data.map((subject) => {
        return (
          <div className="containerSubjects">
            <div className="subjects">
              <div onClick={() => handelActivities(subject.name)}>
                {subject.name}
              </div>
            </div>
            <div className={subject.isActive ? "subItemsActive" : "subItems"}>
              {subject.items.map((item) => {
                return <div> {item.name} </div>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubjectClasses;
