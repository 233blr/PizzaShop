import React, { useState } from 'react';

const Categories = React.memo(({ items, onClickItem }) => {
  const [acItem, setItems] = useState(0);

  const onSelectItem = index => {
    setItems(index);
    onClickItem(index)
  }

  return (
    <div className="categories">
      <ul>
        {items && items.map((item, index) => {
          return (
          <li
              className={acItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={`${item}_${index}`}>
              {item}
          </li>);
        })}
      </ul>
    </div>
  );
});

export default Categories;