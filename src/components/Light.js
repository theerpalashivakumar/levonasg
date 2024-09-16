import React from 'react';

const Light = ({ color, isOn, countdown }) => {
  return (
    <div className={`light ${color} ${isOn ? 'on' : 'off'}`}>
      {isOn ? `${countdown}s` : null}
    </div>
  );
};

export default Light;
