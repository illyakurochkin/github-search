import React from 'react';

function Loader({text}) {
  return (
    <div className="ui container center aligned">
      <div className="ui active medium centered inline loader" />
      {text}
    </div>
  );
}

export default Loader;
