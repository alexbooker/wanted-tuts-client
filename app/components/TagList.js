import React from 'react';

function TagList({tags}) {
  return (
    <ul>
      {tags.map((tag, i) => <li key={i}>{tag.name}</li>)}
    </ul>
  );
}

export default TagList;

