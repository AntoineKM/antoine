import React from 'react';

// This should trigger various linting rules
const BadComponent = (props) => {
  const unused = 'this should trigger no-unused-vars';
  
  // This should trigger react/jsx-curly-brace-presence
  return <div className="test">Hello</div>;
};

export default BadComponent;