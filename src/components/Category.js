import React from 'react';

import { connect } from 'react-redux';

// 42 minutos
//https://www.youtube.com/watch?v=u99tNt3TZf8&t=2s
const Category = ({ categorySelect, value }) => {
  return (
    <div>
      <h1>
        {categorySelect && `Categoria Selecionada: ${categorySelect.title}`}
      </h1>
      <input />
    </div>
  );
};

export default connect((state) => ({ categorySelect: state.categorySelect }))(
  Category
);
