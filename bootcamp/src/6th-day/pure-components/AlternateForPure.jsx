import React ,{memo} from 'react'

const AlternateForPure = (props) => {
    console.log("child comp");
  return (
    <div>
        <h2>{props.name}</h2>
    </div>
  );
};

export default AlternateForPure