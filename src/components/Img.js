import React from "react";

const Img = ({source, alt}) => {
  return (
      <img src={`${source}.svg`} srcSet={`${source}@2x.png 2x, ${source}@3x.png 3x`} alt={alt} />
  )}

  export default Img