function SubjectAndClasses({
  menuItems,
  isActiveSubjects,
  setIsActiveSubjects,
  isActiveClasses,
  setIsActiveClasses,
}) {
  return (
    <>
      <div className="subjectsWrapper">
        {menuItems.map((item, index) => {
          return (
            <div
              onClick={() => {
                {
                  index === 0
                    ? setIsActiveSubjects(!isActiveSubjects)
                    : setIsActiveClasses(!isActiveClasses);
                }
              }}
              key={index}
              className={'wrapper'}>
              {item.name}
            </div>
          );
        })}
      </div>
      {isActiveSubjects ? (
        <div className="subjects">
          {menuItems[0].items.map((item) => {
            return <div>{item.name}</div>;
          })}
        </div>
      ) : null}

      {isActiveClasses ? (
        <div className="classes">
          {menuItems[1].items.map((item) => {
            return <div>{item.name}</div>;
          })}
        </div>
      ) : null}
    </>
  );
}

export default SubjectAndClasses;
