// import { useSuspenseQuery } from "micro-graphql-react";
// import { useState, useTransition } from "react";

// function ShowImages() {
//   const INITIAL_TIME = +new Date();
//   const GET_IMAGES_QUERY = `
// query HomeModuleBooks(
//   $page: Int
// ) {
//   allBooks(
//     SORT: { title: 1 },
//     PAGE: $page,
//     PAGE_SIZE: 20
//   ) {
//     Books{
//       smallImage
//     }
//   }
// }

// `;

//   const [page, setPage] = useState(1);
//   const [cacheBuster, setCacheBuster] = useState(INITIAL_TIME);
//   const [precacheImages, setPrecacheImages] = useState(true);

//   // const [startTransition, isPending] = useTransition({ timeoutMs: 10000 });

//   const { data } = useSuspenseQuery(GET_IMAGES_QUERY, { page });
//   const images = data.allBooks.Books.map(
//     (b: any) => b.smallImage + `?cachebust=${cacheBuster}`
//   );

//   // const onNext = () => {
//   //   if (page < 20) {
//   //     startTransition(() => {
//   //       return setPage((p) => p + 1);
//   //     });
//   //   } else {
//   //     startTransition(() => {
//   //       return setCacheBuster(+new Date());
//   //     });
//   //   }
//   // };

//   const togglePrecaching = (evt: any) => {
//     setPrecacheImages((val) => evt.target.checked);
//   };

//   return (
//     <div className="App">
//       {isPending ? <Loading /> : null}
//       <FlowItems>
//         <button onClick={onNext} className="btn btn-xs btn-primary">
//           Next images
//         </button>
//         <label style={{ display: "flex" }}>
//           <span>Precache Images</span>
//           <input
//             defaultChecked={precacheImages}
//             onChange={togglePrecaching}
//             type="checkbox"
//           />
//         </label>
//       </FlowItems>
//       <FlowItems>
//         {images.map((img) => (
//           <div key={img}>
//             {precacheImages ? (
//               <SuspenseImg alt="" src={img} />
//             ) : (
//               <img alt="" src={img} />
//             )}
//           </div>
//         ))}
//       </FlowItems>
//     </div>
//   );
// }

import React from "react";

const ShowImages = () => {
  return <div>ShowImages</div>;
};

export default ShowImages;
