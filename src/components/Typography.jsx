import React from 'react';

const tagsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  span: "span",
  div: "div",
  li: "li",
  b: "b",
  small: "small",
  strong: "strong",
  cite: "cite",
  del: "del"
};

const Typography = ({ tag, className, children, ...props }) => {
  

  const Component = tag ? tagsMapping[tag] : "p"; // <Text tag="..." ></Text> default tag "p"
  
  return (
    <Component className={ className }>
      {children}
    </Component>
  );
};


export default Typography;