import React from 'react';
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter start={17} interval={1000} />
      <Counter start={-50} interval={100} />
      <Counter start={5} interval={10} />
    </>
  );
};

export default App;
