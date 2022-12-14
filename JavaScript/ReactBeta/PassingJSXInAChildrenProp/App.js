// To-do:
// Extract a Card component from the markup below, and use the children prop to pass different JSX to it:
// This implemented functionality also includes application of conditional rendering of JSX

function Card({ title, image, text }) {
    return (
        <div className="card">
            <div className="card-content">
                <h1>{title}</h1>
                {title === 'Photo' ?
                    <img
                        className="avatar"
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                    /> :
                    <p>{text}</p>}
            </div>
        </div>
    )
}

export default function Profile() {
    return (
        <div>
            <Card
                title={'Photo'}
                image={{
                    src: "https://i.imgur.com/OKS67lhm.jpg",
                    alt: "Aklilu Lemma",
                    width: 70,
                    height: 70
                }}
            />

            <Card
                title={'About'}
                text={'Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.'}
            />
        </div>
    );
}



// Original markup
// export default function Profile() {
//     return (
//         <div>
//             <div className="card">
//                 <div className="card-content">
//                     <h1>Photo</h1>
//                     <img
//                         className="avatar"
//                         src="https://i.imgur.com/OKS67lhm.jpg"
//                         alt="Aklilu Lemma"
//                         width={70}
//                         height={70}
//                     />
//                 </div>
//             </div>
//             <div className="card">
//                 <div className="card-content">
//                     <h1>About</h1>
//                     <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
//                 </div>
//             </div>
//         </div>
//     );
// }
