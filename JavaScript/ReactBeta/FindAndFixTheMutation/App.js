// To-do
// There is a draggable box on a static background. You can change the box’s color using the select input.

// But there is a bug. If you move the box first, and then change its color, the background (which isn’t supposed to move!) will “jump” to the box position. But this should not happen: the Background’s position prop is set to initialPosition, which is { x: 0, y: 0 }. Why is the background moving after the color change?

// Find the bug and fix it.

// import { useState } from "react";
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
import Background from "./Background.js";
import Box from "./Box.js";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function Canvas() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  function handleMove(dx, dy) {
    setShape({
      ...shape,
      position: {
        x: shape.position.x + dx,
        y: shape.position.y + dy,
      },
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
