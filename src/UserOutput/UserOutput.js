import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className = 'UserOutput'>
      <p onClick = {props.click}>Username: {props.userName}</p>
      <p>Nice to meet you! </p>
    </div>
)
}
export default userOutput;
