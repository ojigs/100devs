// To-do
// This component tries to set the <h1>’s CSS class to "night" during the time from midnight to six hours in the morning, and "day" at all other times. However, it doesn’t work. Can you fix this component?

// You can verify whether your solution works by temporarily changing the computer’s timezone. When the current time is between midnight and six in the morning, the clock should have inverted colors!

// Given
// export default function Clock({ time }) {
//     let hours = time.getHours();
//     if (hours >= 0 && hours <= 6) {
//       document.getElementById('time').className = 'night';
//     } else {
//       document.getElementById('time').className = 'day';
//     }
//     return (
//       <h1 id="time">
//         {time.toLocaleTimeString()}
//       </h1>
//     );
//   }

// It's not necessary to modify the DOM,so we return JSX instead
export default function Clock({ time }) {
  let hours = time.getHours();
  let dayOrNight;
  if (hours >= 0 && hours <= 6) {
    dayOrNight = "night";
  } else {
    dayOrNight = "day";
  }
  return <h1 className={dayOrNight}>{time.toLocaleTimeString()}</h1>;
}
