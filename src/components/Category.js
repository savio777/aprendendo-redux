import React from 'react';

import { connect } from 'react-redux';

const Category = ({ categorySelect }) => {
  return (
    <div>
      <h1>teste</h1>
      <h1>{categorySelect && categorySelect.title}</h1>
    </div>
  );
};

export default connect((state) => ({ categorySelect: state.categorySelect }))(
  Category
);
