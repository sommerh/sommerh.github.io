import React from 'react';

const SkillsIcon = ({ skill: { name, icon } }) => {
  return (
    <div className="icon-group">
      <img src={icon} className="icons" alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default SkillsIcon;
