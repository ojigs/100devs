// To-do
// This is the same buggy challenge as in the previous challenge. This time, fix the mutation by using Immer. For your convenience, useImmer is already imported, so you need to change the shape state variable to use it.

// import { useState } from "react";
// import { useImmer } from "use-immer";
// import Background from "./Background.js";
// import Box from "./Box.js";

// const initialPosition = {
//   x: 0,
//   y: 0,
// };

// export default function Canvas() {
//   const [shape, setShape] = useState({
//     color: "orange",
//     position: initialPosition,
//   });

//   function handleMove(dx, dy) {
//     shape.position.x += dx;
//     shape.position.y += dy;
//   }

//   function handleColorChange(e) {
//     setShape({
//       ...shape,
//       color: e.target.value,
//     });
//   }

//   return (
//     <>
//       <select value={shape.color} onChange={handleColorChange}>
//         <option value="orange">orange</option>
//         <option value="lightpink">lightpink</option>
//         <option value="aliceblue">aliceblue</option>
//       </select>
//       <Background position={initialPosition} />
//       <Box color={shape.color} position={shape.position} onMove={handleMove}>
//         Drag me!
//       </Box>
//     </>
//   );
// }

import { useState } from "react";
import { useImmer } from "use-immer";
import Background from "./Background.js";
import Box from "./Box.js";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function Canvas() {
  const [shape, setShape] = useImmer({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    setShape((draft) => {
      draft.position.x += dx;
      draft.position.y += dy;
    });
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background position={initialPosition} />
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}

// immer does the update for us. And while it looks like the object is being mutated, it actually is not
