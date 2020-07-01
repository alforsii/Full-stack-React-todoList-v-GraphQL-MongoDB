import React from 'react';

export default function Typography() {
  return (
    <div>
      <p className="">I am NOT Flow Text</p>
      <p className="flow-text">I am Flow Text</p>
      <blockquote>
        This is an example quotation that uses the blockquote tag.
      </blockquote>
      <h1>H1</h1>
      <h6>H6</h6>
      <h4 className="truncate">
        This is an extremely long title that will be truncated
      </h4>
    </div>
  );
}
