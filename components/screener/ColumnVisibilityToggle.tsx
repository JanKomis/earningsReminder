import React from 'react';

const ColumnVisibilityToggle = ({ columnVisibility, setColumnVisibility, columnGroups }) => {
  const toggleColumnGroupVisibility = (group, isVisible) => {
    const newVisibility = { ...columnVisibility };

    columnGroups[group].forEach(columnId => {
      newVisibility[columnId] = isVisible;
    });

    setColumnVisibility(newVisibility);
  };

  return (
    <div>
      {Object.keys(columnGroups).map((group) => (
        <div key={group}>
          <button onClick={() => toggleColumnGroupVisibility(group, true)}>Show {group}</button>
          <button onClick={() => toggleColumnGroupVisibility(group, false)}>Hide {group}</button>
        </div>
      ))}
    </div>
  );
};

export default ColumnVisibilityToggle;