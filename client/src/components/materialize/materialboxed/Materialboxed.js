import React, { useEffect } from 'react';
import M from 'materialize-css';

export default function Materialboxed() {
  useEffect(() => {
    const materialboxed = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialboxed, {});
  }, []);

  return (
    <img
      className="materialboxed"
      width="650"
      src="https://lorempixel.com/580/250/nature/1"
      alt="random-img"
    />
  );
}
