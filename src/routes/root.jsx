// import { useEffect } from "react";
// import { Outlet, Link, useLoaderData, Form, redirect, NavLink, useNavigation, useSubmit } from "react-router-dom";
// import { getContacts, createContact } from "../contacts";
// import bgImg from "../assets/images/bg1.jpg"

// export async function action() {
//   const contact = await createContact();
//   console.log("root");
//   return redirect(`/contacts/${contact.id}/edit`);
// }

// // export async function loader() {
// //   const contacts = await getContacts();
// //   return { contacts };
// // }

// export async function loader({ request }) {
//   const url = new URL(request.url);
//   const q = url.searchParams.get("q");
//   const contacts = await getContacts(q);
//   return { contacts, q };
// }

// export default function Root() {
//   const { contacts, q } = useLoaderData();
//   const navigation = useNavigation();
//   const submit = useSubmit();
//   const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");

//   useEffect(() => {
//     document.getElementById("q").value = q;
//   }, [q]);

//   return (
//     <>
//       {/* <header className="App-header">
//         <img src={bgImg} width={100} height={100} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//       </header> */}
//         {/* <div className="menu">
//           <ul>
//             <li>
//               {" "}
//               <Link to="/">Home</Link>{" "}
//             </li>
//             <li>
//               {" "}
//               <Link to="/messages">Messages</Link>{" "}
//             </li>
//             <li>
//               {" "}
//               <Link to="/about">About</Link>{" "}
//             </li>
//           </ul>
//         </div> */}
//         {/* <Swiper
//           modules={[Navigation, Pagination, Scrollbar, A11y, Virtual, Keyboard, EffectCoverflow, Controller]}
//           style={{ backgroundColor: "#28292a" }}
//           spaceBetween={50}
//           slidesPerView={1}
//           autoHeight
//           navigation
//           effect="coverflow"
//           grabCursor
//           rewind
//           keyboard
//           // direction="vertical"
//           // onSlideChange={() => console.log('slide change')}
//           // onSwiper={(swiper) => console.log(swiper)}
//         >
//           <SwiperSlide className="mh-full-page">
//             <Overview changeTab={this.changeTab} />
//           </SwiperSlide>
//           <SwiperSlide className="mh-full-page">
//             <Education changeTab={this.changeTab} />
//           </SwiperSlide>
//           <SwiperSlide className="mh-full-page">
//             <Experience changeTab={this.changeTab} />
//           </SwiperSlide>
//           <SwiperSlide className="mh-full-page">
//             <Projects changeTab={this.changeTab} />
//           </SwiperSlide>
//           <SwiperSlide className="mh-full-page">
//             <Skills changeTab={this.changeTab} />
//           </SwiperSlide>
//         </Swiper> */}
//         {/* // style={{ backgroundImage: `url(${bgImg0})`}}
// 			// style={{ backgroundImage: `url(${bgImg1})`}}
// 			// style={{ backgroundImage: `url(${bgImg2})`}}
// 			// style={{ backgroundImage: `url(${bgImg3})`}}
// 			// style={{ backgroundImage: `url(${bgImg4})`}} */}
//       <div id="sidebar">
//         <h1>React Router Contacts</h1>
//         <div>
//           <Form id="search-form" role="search">
//             <input
//               id="q"
//               aria-label="Search contacts"
//               placeholder="Search"
//               type="search"
//               name="q"
//               defaultValue={q}
//               onChange={(event) => {
//                 const isFirstSearch = q == null;
//                 submit(event.currentTarget.form, {
//                   replace: !isFirstSearch,
//                 });
//               }}
//             />
//             <div id="search-spinner" aria-hidden hidden={!searching} />
//             <div className="sr-only" aria-live="polite"></div>
//           </Form>
//           <Form method="post" >
//             <button type="submit">New</button>
//           </Form>
//         </div>
//         <nav>
//           {contacts.length ? (
//             <ul>
//               {contacts.map((contact) => (
//                 <li key={contact.id}>
//                   <NavLink
//                     to={`contacts/${contact.id}`}
//                     className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
//                   ></NavLink>
//                   <Link to={`contacts/${contact.id}`}>
//                     {contact.first || contact.last ? (
//                       <>
//                         {contact.first} {contact.last}
//                       </>
//                     ) : (
//                       <i>No Name</i>
//                     )}{" "}
//                     {contact.favorite && <span>★</span>}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>
//               <i>No contacts</i>
//             </p>
//           )}
//         </nav>
//       </div>
//       <div id="detail" className={navigation.state === "loading" ? "loading" : ""}>
//         <Outlet />
//       </div>
//     </>
//   );
// }
