import React, { Children, useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

function ExpandableText({ children, maxChars = 200 }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const text = isExpanded ? children.substring(0, maxChars) : children;

  //   console.log("Text length:", children.length);

  if (children.length <= maxChars) return <p>{children}</p>;

  return (
    <p>
      {text} ...{" "}
      <button onClick={() => setIsExpanded(!isExpanded)} className="btn btn-xs">
        {isExpanded ? "Read More" : "Read Less"}
      </button>
    </p>
  );
}

export default ExpandableText;
