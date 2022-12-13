import { getImageUrl } from './utils.js';

// Extract a Component
// In this exercise under passing props to component; given a DOM with predominant JSX and no internal component, we identified sections in the DOM with shared characteristics and transformed them into components. We went on to pass props into these components to create different structures.

function Profile(props) {
    return (
        <div>
            <h2>{props.scientist.name}</h2>
            <img
                className="avatar"
                src={getImageUrl(props.scientist.imageId)}
                alt={props.scientist.name}
                width={70}
                height={70}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    {props.scientist.profession}
                </li>
                <li>
                    <b>Awards: {props.scientist.awards.num} </b>
                    ({props.scientist.awards.desc})
                </li>
                <li>
                    <b>Discovered: </b>
                    {props.scientist.discovery}
                </li>
            </ul>
        </div>
    )
}

export default function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile
                scientist={{
                    name: 'Maria Skłodowska-Curie',
                    imageId: 'szV5sdG',
                    profession: 'physicist and chemist',
                    awards: {
                        num: 4,
                        desc: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal'
                    },
                    discovery: 'polonium (element)'
                }}
            />

            <Profile
                scientist={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2',
                    profession: 'geochemist',
                    awards: {
                        num: 2,
                        desc: 'Miyake Prize for geochemistry, Tanaka Prize'
                    },
                    discovery: 'a method for measuring carbon dioxide in seawater'
                }}
            />
        </div>
    );
}


// export default function Gallery() {
//     return (
//         <div>
//             <h1>Notable Scientists</h1>
//             <section className="profile">
//                 <h2>Maria Skłodowska-Curie</h2>
//                 <img
//                     className="avatar"
//                     src={getImageUrl('szV5sdG')}
//                     alt="Maria Skłodowska-Curie"
//                     width={70}
//                     height={70}
//                 />
//                 <ul>
//                     <li>
//                         <b>Profession: </b>
//                         physicist and chemist
//                     </li>
//                     <li>
//                         <b>Awards: 4 </b>
//                         (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
//                     </li>
//                     <li>
//                         <b>Discovered: </b>
//                         polonium (element)
//                     </li>
//                 </ul>
//             </section>
//             <section className="profile">
//                 <h2>Katsuko Saruhashi</h2>
//                 <img
//                     className="avatar"
//                     src={getImageUrl('YfeOqp2')}
//                     alt="Katsuko Saruhashi"
//                     width={70}
//                     height={70}
//                 />
//                 <ul>
//                     <li>
//                         <b>Profession: </b>
//                         geochemist
//                     </li>
//                     <li>
//                         <b>Awards: 2 </b>
//                         (Miyake Prize for geochemistry, Tanaka Prize)
//                     </li>
//                     <li>
//                         <b>Discovered: </b>
//                         a method for measuring carbon dioxide in seawater
//                     </li>
//                 </ul>
//             </section>
//         </div>
//     );
// }
