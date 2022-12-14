// To-do
// Change it to show two separate lists one after another: Chemists and Everyone Else. Like previously, you can determine whether a person is a chemist by checking if person.profession === 'chemist'.

import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
  const chemist = people.filter((people) => people.profession === "chemist");
  const everyoneElse = people.filter(
    (people) => !(people.profession === "chemist")
  );

  const Chemist = chemist.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  const Everyone = everyoneElse.map((person) => (
    <li key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>
  ));

  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemist</h2>
      <ul>{Chemist}</ul>
      <h2>Everyone else</h2>
      <ul>{Everyone}</ul>
    </article>
  );
}
