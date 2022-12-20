// To-do
// Here is a crosswalk light component that toggles on when the button is pressed:

// Add an alert to the click handler. When the light is green and says “Walk”, clicking the button should say “Stop is next”. When the light is red and says “Stop”, clicking the button should say “Walk is next”.

// Does it make a difference whether you put the alert before or after the setWalk call?

// import { useState } from "react";

// export default function TrafficLight() {
//   const [walk, setWalk] = useState(true);

//   function handleClick() {
//     setWalk(!walk);
//   }

//   return (
//     <>
//       <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
//       <h1
//         style={{
//           color: walk ? "darkgreen" : "darkred",
//         }}
//       >
//         {walk ? "Walk" : "Stop"}
//       </h1>
//     </>
//   );
// }

import { useState } from "react";

export default function TrafficLight() {
  const [walk, setWalk] = useState(true);

  function handleClick() {
    setWalk(!walk);
    alert(walk ? "Stop is next" : "Walk is next");
  }

  return (
    <>
      <button onClick={handleClick}>Change to {walk ? "Stop" : "Walk"}</button>
      <h1
        style={{
          color: walk ? "darkgreen" : "darkred",
        }}
      >
        {walk ? "Walk" : "Stop"}
      </h1>
    </>
  );
}

// it doesn't make any difference whether you call the alert before setstate because react keeps a snapshot of each render.
