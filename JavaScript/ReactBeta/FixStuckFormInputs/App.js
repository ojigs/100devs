// To-do
// When you type into the input fields, nothing appears. It’s like the input values are “stuck” with empty strings. The value of the first <input> is set to always match the firstName variable, and the value for the second <input> is set to always match the lastName variable. This is correct. Both inputs have onChange event handlers, which try to update the variables based on the latest user input (e.target.value). However, the variables don’t seem to “remember” their values between re-renders. Fix this by using state variables instead.

// export default function Form() {
//   let firstName = "";
//   let lastName = "";

//   function handleFirstNameChange(e) {
//     firstName = e.target.value;
//   }

//   function handleLastNameChange(e) {
//     lastName = e.target.value;
//   }

//   function handleReset() {
//     firstName = "";
//     lastName = "";
//   }

//   return (
//     <form onSubmit={(e) => e.preventDefault()}>
//       <input
//         placeholder="First name"
//         value={firstName}
//         onChange={handleFirstNameChange}
//       />
//       <input
//         placeholder="Last name"
//         value={lastName}
//         onChange={handleLastNameChange}
//       />
//       <h1>
//         Hi, {firstName} {lastName}
//       </h1>
//       <button onClick={handleReset}>Reset</button>
//     </form>
//   );
// }

import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

// We imported useState from react and declared state variables for firstname and lastname. We then replace the assignment in the handlechange functions with state setters
