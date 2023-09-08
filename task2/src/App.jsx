import React from 'react';
import Clock from './Clock';

const App = () => {
  return (
    <>
      <Clock location={'New York'} time={-5} />
      <Clock location={'Kyiv'} time={2} />
      <Clock location={'London'} time={0} />
    </>
  );
};

export default App;
