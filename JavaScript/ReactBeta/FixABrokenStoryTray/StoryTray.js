// To-do
// The CEO of your company is asking you to add “stories” to your online clock app, and you can’t say no. You’ve written a StoryTray component that accepts a list of stories, followed by a “Create Story” placeholder.

// You implemented the “Create Story” placeholder by pushing one more fake story at the end of the stories array that you receive as a prop. But for some reason, “Create Story” appears more than once. Fix the issue.

// export default function StoryTray({ stories }) {
//   stories.push({
//     id: "create",
//     label: "Create Story",
//   });

//   return (
//     <ul>
//       {stories.map((story) => (
//         <li key={story.id}>{story.label}</li>
//       ))}
//     </ul>
//   );
// }

export default function StoryTray({ stories }) {
  const create = {
    id: "create",
    label: "Create Story",
  };

  return (
    <ul>
      {stories.map((story, i) => (
        <>
          <li key={story.id}>{story.label}</li>
        </>
      ))}
      <li key={create.id}>{create.label}</li>
    </ul>
  );
}

// StoryTray was an impure component because it mutated an object that existed before it started rendering, hence it renders the create story element twice for each interval. We fixed it by making it a pure component and passing the create story element after all the other stories from the stories object have been rendered.
