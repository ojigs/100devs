// To-do
// This ColorSwitch component renders a button. It’s supposed to change the page color. Wire it up to the onChangeColor event handler prop it receives from the parent so that clicking the button changes the color.

// After you do this, notice that clicking the button also increments the page click counter. Your colleague who wrote the parent component insists that onChangeColor does not increment any counters. What else might be happening? Fix it so that clicking the button only changes the color, and does not increment the counter.

// export default function ColorSwitch({ onChangeColor }) {
//     return (
//       <button>
//         Change color
//       </button>
//     );
// }

export default function ColorSwitch({ onChangeColor }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onChangeColor();
      }}
    >
      Change color
    </button>
  );
}

// First we passed the onChangeColor prop to an onClick event handler in button element through an anonymous function. We notice that there is an event handler in the div housing button. This gets triggered when button is clicked through event propagation. Since we don't have access to that file, we proceed to stop the event bubbling with e.stopPropagation(). This prevents the div event from firing after button is clicked
