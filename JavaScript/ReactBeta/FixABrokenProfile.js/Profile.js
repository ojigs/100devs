// import Panel from './Panel.js';
// import { getImageUrl } from './utils.js';

// let currentPerson;

// export default function Profile({ person }) {
//   currentPerson = person;
//   return (
//     <Panel>
//       <Header />
//       <Avatar />
//     </Panel>
//   )
// }

// function Header() {
//   return <h1>{currentPerson.name}</h1>;
// }

// function Avatar() {
//   return (
//     <img
//       className="avatar"
//       src={getImageUrl(currentPerson)}
//       alt={currentPerson.name}
//       width={50}
//       height={50}
//     />
//   );
// }

//  The bug is in the above code. To fix this, we eliminate the current person variable declared globally and pass it to child components through props rather
import Panel from "./Panel.js";
import { getImageUrl } from "./utils.js";

export default function Profile({ person }) {
  return (
    <Panel>
      <Header currentPerson={person} />
      <Avatar currentPerson={person} />
    </Panel>
  );
}

function Header({ currentPerson }) {
  return <h1>{currentPerson.name}</h1>;
}

function Avatar({ currentPerson }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(currentPerson)}
      alt={currentPerson.name}
      width={50}
      height={50}
    />
  );
}
