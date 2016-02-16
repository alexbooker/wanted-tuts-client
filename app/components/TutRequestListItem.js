import React from 'react';
import TagList from './TagList.js';

export default function TutRequestListItem({title, comments, solutions, tags}) {
  return (
    <li>
      <h1>{title}</h1>
      <p>{comments.length} Comments &amp; {solutions.length} Tutorials</p>
      <TagList tags={tags}/>
    </li>
  );
}

