import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);
const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h1>Namaste React functional component</h1>
      <h2>This is a h2 tags</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

// passing a react element inside the root
root.render(<HeaderComponent />);
