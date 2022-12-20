// To-do
// This form has a few bugs. Click the button that increases the score a few times. Notice that it does not increase. Then edit the first name, and notice that the score has suddenly “caught up” with your changes. Finally, edit the last name, and notice that the score has disappeared completely.

// Your task is to fix all of these bugs. As you fix them, explain why each of them happens.

// import { useState } from "react";

// export default function Scoreboard() {
//   const [player, setPlayer] = useState({
//     firstName: "Ranjani",
//     lastName: "Shettar",
//     score: 10,
//   });

//   function handlePlusClick() {
//     player.score++;
//   }

//   function handleFirstNameChange(e) {
//     setPlayer({
//       ...player,
//       firstName: e.target.value,
//     });
//   }

//   function handleLastNameChange(e) {
//     setPlayer({
//       lastName: e.target.value,
//     });
//   }

//   return (
//     <>
//       <label>
//         Score: <b>{player.score}</b>{" "}
//         <button onClick={handlePlusClick}>+1</button>
//       </label>
//       <label>
//         First name:
//         <input value={player.firstName} onChange={handleFirstNameChange} />
//       </label>
//       <label>
//         Last name:
//         <input value={player.lastName} onChange={handleLastNameChange} />
//       </label>
//     </>
//   );
// }

import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "Ranjani",
    lastName: "Shettar",
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({ ...player, score: player.score + 1 });
  }

  function handleFirstNameChange(e) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}

// the bugged code was mutating the player object, so react didn't know that there was a need for re-render. So when the firstName was updated, react triggered a render which took the new score and updated it on the screen. For the lastname, the score gets lost in the UI because the player object was not copied when setting the new state object
