// To-do
// This example renders a famous haiku by Katsushika Hokusai, with each line wrapped in a <p> tag. Your job is to insert an <hr /> separator between each paragraph. Your resulting structure should look like this:

// <article>
//   <p>I write, erase, rewrite</p>
//   <hr />
//   <p>Erase again, and then</p>
//   <hr />
//   <p>A poppy blooms.</p>
// </article>

// A haiku only contains three lines, but your solution should work with any number of lines. Note that <hr /> elements only appear between the <p> elements, not in the beginning or the end!

const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "A poppy blooms.",
  ],
};

// export default function Poem() {
return (
  <article>
    {poem.lines.map((line, index, array) => {
      return (
        <>
          <p key={index}>{line}</p>
          {index !== array.length - 1 && <hr />}
        </>
      );
    })}
  </article>
);
// }

// Now the above solution trigers a warning for react key. Since we don't want to wrap the array child with another div, we will have to find a work around

// const poem = {
lines: ["I write, erase, rewrite", "Erase again, and then", "A poppy blooms."];
//   };

//   export default function Poem() {
let output = [];

// Fill the output array
poem.lines.forEach((line, i) => {
  output.push(<hr key={i + "-separator"} />);
  output.push(<p key={i + "-text"}>{line}</p>);
});
// Remove the first <hr />
output.shift();

return <article>{output}</article>;
//   }

//   Here we create an output array and push the child p and hr child elements into the array. Since the DOM recognises arrays as nodes, it reders the children of the array in place.

// Now let's have an optimized version. In outr first solution, we tried to use the short fragment syntax which doesn't support keys. There is however a more explicit syntax in React, <Fragment>

// Here is our final solution

import React, { Fragment } from "react";

// const poem = {
lines: ["I write, erase, rewrite", "Erase again, and then", "A poppy blooms."];
// };

export default function Poem() {
  return (
    <article>
      {poem.lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <hr />}
          <p>{line}</p>
        </Fragment>
      ))}
    </article>
  );
}
