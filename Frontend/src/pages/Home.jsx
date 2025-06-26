/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */

// // import React from "react";

// const App = () => {
//     return (
//       <div>
//         {/* Navigation Bar */}
//         <nav className="bg-blue-600 text-white p-4 flex justify-between">
//           <div className="text-xl font-bold">MyWebsite</div>
//           <div className="space-x-4">
//             <a href="#home" className="hover:underline">Home</a>
//             <a href="#about" className="hover:underline">About</a>
//             <a href="#services" className="hover:underline">Services</a>
//             <a href="#plans" className="hover:underline">Plans</a>
//             <a href="#contact" className="hover:underline">Contact</a>
//           </div>
//         </nav>
  
//         {/* Page Sections */}
//         <section id="home" className="h-screen flex items-center justify-center bg-gray-100">
//           <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
//         </section>
        
//         <section id="about" className="h-screen flex items-center justify-center bg-gray-200">
//           <h2 className="text-3xl">About Us</h2>
//         </section>
        
//         <section id="services" className="h-screen flex items-center justify-center bg-gray-300">
//           <h2 className="text-3xl">Our Services</h2>
//         </section>
        
//         {/* Jobs & Recruiter Plans Section */}
//         <section id="plans" className="h-screen bg-white p-10">
//           <h2 className="text-4xl font-bold text-center mb-8">Jobs & Recruiter Plans</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="p-6 bg-blue-100 text-center rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold">Jobs</h3>
//               <p>Post a job</p>
//               <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Post a job</button>
//             </div>
//             <div className="p-6 bg-yellow-100 text-center rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold">Jobs + Recruiter Lite</h3>
//               <p>Post a job and basic sourcing</p>
//               <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded">Get Started</button>
//             </div>
//             <div className="p-6 bg-orange-100 text-center rounded-lg shadow-lg">
//               <h3 className="text-2xl font-bold">Jobs + Recruiter</h3>
//               <p>Advanced job posting and collaboration</p>
//               <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded">Contact Us</button>
//             </div>
//           </div>
//         </section>
  
//         <section id="contact" className="h-screen flex items-center justify-center bg-gray-400">
//           <h2 className="text-3xl">Contact Us</h2>
//         </section>
//       </div>
//     );
//   };
  
//   export default App;
  


// // import React
// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const Navbar = () => {
//   return (
//     <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px 20px", background: "#333", color: "#fff" }}>
//       <h2>My Website</h2>
//       <div>
//         <a href="#home" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Home</a>
//         <a href="#jobs" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Jobs</a>
//         <a href="#courses" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Courses</a>
//         <a href="#about" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>About</a>
//         <a href="#contact" style={{ margin: "0 10px", color: "#fff", textDecoration: "none" }}>Contact</a>
//       </div>
//     </nav>
//   );
// };

// const Home = () => {
//   return (
//     <section id="home" style={{ padding: "50px", textAlign: "center" }}>
//       <h1>Welcome to Our Website</h1>
//       <p>Your gateway to success.</p>
//     </section>
//   );
// };

// const Jobs = () => {
//   return (
//     <section id="jobs" style={{ padding: "50px", textAlign: "center", background: "#f4f4f4" }}>
//       <h2>Post a Job</h2>
//       <form style={{ display: "grid", gap: "10px", maxWidth: "400px", margin: "auto" }}>
//         <input type="text" placeholder="Job Title" />
//         <input type="text" placeholder="Company" />
//         <input type="text" placeholder="Location" />
//         <button style={{ padding: "10px", background: "blue", color: "white", border: "none" }}>Submit</button>
//       </form>
//     </section>
//   );
// };

// const Courses = () => {
//   return (
//     <section id="courses" style={{ padding: "50px", textAlign: "center" }}>
//       <h2>New & Featured Courses</h2>
//       <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
//         <div style={{ padding: "20px", background: "#e3e3e3", width: "200px" }}>Course 1</div>
//         <div style={{ padding: "20px", background: "#e3e3e3", width: "200px" }}>Course 2</div>
//         <div style={{ padding: "20px", background: "#e3e3e3", width: "200px" }}>Course 3</div>
//       </div>
//     </section>
//   );
// };

// const About = () => {
//   return (
//     <section id="about" style={{ padding: "50px", textAlign: "center", background: "#f4f4f4" }}>
//       <h2>About Us</h2>
//       <p>We are here to help you find the best opportunities.</p>
//     </section>
//   );
// };

// const Contact = () => {
//   return (
//     <section id="contact" style={{ padding: "50px", textAlign: "center" }}>
//       <h2>Contact Us</h2>
//       <p>Email: support@website.com</p>
//     </section>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <Jobs />
//       <Courses />
//       <About />
//       <Contact />
//     </div>
//   );
// };

// export default App;


// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const Navbar = () => {
//   return (
//     <nav style={{ 
//       display: "flex", justifyContent: "space-between", alignItems: "center", 
//       padding: "15px 30px", background: "#222", color: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.1)" 
//     }}>
//       <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Job Portal</h2>
//       <div>
//         {['Home', 'Jobs', 'Courses', 'About', 'Contact'].map((item) => (
//           <a 
//             key={item} 
//             href={`#${item.toLowerCase()}`} 
//             style={{ margin: "0 15px", color: "#fff", textDecoration: "none", fontSize: "18px" }}>
//             {item}
//           </a>
//         ))}
//       </div>
//     </nav>
//   );
// };

// const Jobs = () => {
//   return (
//     <section id="jobs" style={{ padding: "50px", textAlign: "center", background: "#f8f9fa" }}>
//       <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>Post a Job</h2>
//       <div style={{ 
//         background: "#fff", padding: "30px", borderRadius: "10px", 
//         boxShadow: "0 4px 10px rgba(0,0,0,0.1)", maxWidth: "400px", margin: "auto" 
//       }}>
//         <form style={{ display: "grid", gap: "15px" }}>
//           <input type="text" placeholder="Job Title" style={inputStyle} />
//           <input type="text" placeholder="Company" style={inputStyle} />
//           <input type="text" placeholder="Location" style={inputStyle} />
//           <select style={inputStyle}>
//             <option>Job Type</option>
//             <option>Full-time</option>
//             <option>Part-time</option>
//             <option>Remote</option>
//           </select>
//           <button style={buttonStyle}>Submit</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// const inputStyle = {
//   padding: "12px", border: "1px solid #ddd", borderRadius: "5px", fontSize: "16px"
// };

// const buttonStyle = {
//   padding: "12px", background: "#007bff", color: "white", border: "none", 
//   borderRadius: "5px", fontSize: "16px", cursor: "pointer"
// };

// const Home = () => <Section id="home" title="Welcome to Our Website" text="Your gateway to success." />;
// const Courses = () => <Section id="courses" title="New & Featured Courses" text="Explore our latest courses and boost your skills." bg="#e9ecef" />;
// const About = () => <Section id="about" title="About Us" text="We help you find the best opportunities." />;
// const Contact = () => <Section id="contact" title="Contact Us" text="Email: support@website.com" bg="#e9ecef" />;

// const Section = ({ id, title, text, bg }) => (
//   <section id={id} style={{ padding: "50px", textAlign: "center", background: bg || "#fff" }}>
//     <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>{title}</h2>
//     <p style={{ fontSize: "18px", color: "#555" }}>{text}</p>
//   </section>
// );

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Home />
//       <Jobs />
//       <Courses />
//       <About />
//       <Contact />
//     </div>
//   );
// };

// export default App;




// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between p-4 bg-gray-900 text-white">
//       <h2 className="text-lg font-semibold">LinkedIn Premium</h2>
//       <div>
//         <a href="#home" className="mx-3">Advance Your Career</a>
//         <a href="#premium" className="mx-3">Unlock Premium Insights</a>
//         <button className="ml-4 bg-blue-600 px-4 py-2 rounded">Start Your Free Trial</button>
//       </div>
//     </nav>
//   );
// };

// const HeroSection = () => {
//   return (
//     <section className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white text-center p-6">
//       <h1 className="text-4xl font-bold">LinkedIn Premium</h1>
//       <p className="text-lg mt-2">The smarter way to advance your career or small business.</p>
//       <div className="mt-4">
//         <button className="bg-white text-black px-4 py-2 rounded mr-2">Try Career for free</button>
//         <button className="border border-white px-4 py-2 rounded">Try Business for free</button>
//       </div>
//     </section>
//   );
// };

// const PremiumInsights = () => {
//   return (
//     <section id="premium" className="p-10 bg-gray-100 text-center">
//       <h2 className="text-3xl font-semibold">Unlock Premium Insights</h2>
//       <p className="mt-2 text-gray-600">Get access to advanced analytics, who viewed your profile, and AI-powered recommendations.</p>
//       <div className="mt-6 flex justify-center gap-6">
//         <div className="p-6 bg-white shadow-md rounded-lg w-64">
//           <h3 className="font-semibold">Profile Insights</h3>
//           <p className="text-sm text-gray-600">See who viewed your profile and engage with potential recruiters.</p>
//         </div>
//         <div className="p-6 bg-white shadow-md rounded-lg w-64">
//           <h3 className="font-semibold">AI Job Matching</h3>
//           <p className="text-sm text-gray-600">Get job recommendations tailored to your skills and experience.</p>
//         </div>
//         <div className="p-6 bg-white shadow-md rounded-lg w-64">
//           <h3 className="font-semibold">Advanced Networking</h3>
//           <p className="text-sm text-gray-600">Unlock messaging and direct connections with industry leaders.</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <HeroSection />
//       <PremiumInsights />
//     </div>
//   );
// };

// export default App;




// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";

// const sections = [
//   { id: "billing", title: "Billing Access", content: "Manage your LinkedIn billing and subscriptions." },
//   { id: "users", title: "User Management", content: "Add, remove, and manage users in your organization." },
//   { id: "transactions", title: "Transactions", content: "View and manage your LinkedIn payments and transactions." },
// ];

// const LinkedInAdminCenter = () => {
//   const [activeSection, setActiveSection] = useState("billing");

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       {/* Navbar */}
//       <nav className="bg-white shadow-md p-4 flex justify-between items-center">
//         <h1 className="text-xl font-bold text-blue-600">LinkedIn Admin Center</h1>
//         <div className="space-x-4">
//           {sections.map((section) => (
//             <button
//               key={section.id}
//               onClick={() => setActiveSection(section.id)}
//               className={`p-2 rounded ${
//                 activeSection === section.id ? "bg-blue-600 text-white" : "text-gray-700"
//               }`}
//             >
//               {section.title}
//             </button>
//           ))}
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <div className="text-center py-12 bg-gray-200">
//         <h2 className="text-3xl font-semibold">Welcome to LinkedIn Admin Center</h2>
//         <p className="text-gray-600 mt-2">
//           Manage billing, users, and licenses across LinkedIn products — all in one place.
//         </p>
//       </div>

//       {/* Scrolling Sections */}
//       <div className="flex flex-col items-center mt-6 p-6">
//         {sections.map((section) => (
//           <div
//             key={section.id}
//             className={`w-full max-w-3xl p-6 mb-6 rounded-lg shadow-md bg-white transition-transform duration-500 ${
//               activeSection === section.id ? "scale-105" : "opacity-50"
//             }`}
//           >
//             <h3 className="text-2xl font-semibold text-blue-700">{section.title}</h3>
//             <p className="text-gray-700 mt-2">{section.content}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LinkedInAdminCenter;


// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import { motion } from "framer-motion";

// const sections = [
//   { title: "Company", description: "Small, medium, and large businesses." },
//   { title: "Showcase page", description: "Sub-pages associated with an existing page." },
//   { title: "Educational institution", description: "Schools and universities." },
// ];

// const LinkedInPageCreation = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center py-10">
//       {/* Header */}
//       <h1 className="text-3xl font-bold text-gray-800">Create a LinkedIn Page</h1>
//       <p className="text-gray-600 mt-2 text-center max-w-lg">
//         Connect with clients, employees, and the LinkedIn community. To get started, choose a page type.
//       </p>

//       {/* Page Options */}
//       <div className="flex space-x-6 mt-8">
//         {sections.map((section, index) => (
//           <motion.div
//             key={index}
//             className="bg-white p-6 rounded-lg shadow-md w-60 text-center"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <h2 className="text-xl font-semibold text-blue-700">{section.title}</h2>
//             <p className="text-gray-600 mt-2">{section.description}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Scrolling Device Animation */}
//       <motion.div
//         className="mt-12 flex items-center space-x-8"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.img
//           src="https://img.freepik.com/free-psd/blank-laptop-screen-mockup-modern-technology-clean-design_191095-81527.jpg?t=st=1739341167~exp=1739344767~hmac=971d724789fe39687adbbca19618a3c4ea4c01a8dd6ea4317922aaec74dac7bb&w=740"
//           alt="Laptop UI"
//           className="w-80 shadow-lg"
//           animate={{ y: [0, -10, 0] }}
//           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//         />
//         <motion.img
//           src="https://img.freepik.com/free-psd/stunning-lake-mountain-view-smartphone_191095-83792.jpg?t=st=1739341739~exp=1739345339~hmac=772c93c7d53166c09a271ff56fb7bec7c707e65a2396c3d07e2e2a58a08ba4d7&w=740"
//           alt="Mobile UI"
//           className="w-40 shadow-md"
//           animate={{ y: [0, -10, 0] }}
//           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default LinkedInPageCreation;




// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { motion } from "framer-motion";

// const sections = [
//   { id: "company", title: "Company", description: "Small, medium, and large businesses." },
//   { id: "showcase", title: "Showcase Page", description: "Sub-pages associated with an existing page." },
//   { id: "education", title: "Educational Institution", description: "Schools and universities." },
// ];

// const LinkedInPageCreation = () => {
//   const [activeModal, setActiveModal] = useState(null);

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center py-10">
//       {/* Header */}
//       <h1 className="text-3xl font-bold text-gray-800">Create a LinkedIn Page</h1>
//       <p className="text-gray-600 mt-2 text-center max-w-lg">
//         Connect with clients, employees, and the LinkedIn community. To get started, choose a page type.
//       </p>

//       {/* Page Options */}
//       <div className="flex space-x-6 mt-8">
//         {sections.map((section) => (
//           <motion.div
//             key={section.id}
//             className="bg-white p-6 rounded-lg shadow-md w-60 text-center cursor-pointer hover:bg-blue-50"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setActiveModal(section)}
//           >
//             <h2 className="text-xl font-semibold text-blue-700">{section.title}</h2>
//             <p className="text-gray-600 mt-2">{section.description}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Popup Modal */}
//       {activeModal && (
//         <motion.div
//           className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center p-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//         >
//           <motion.div
//             className="bg-white p-6 rounded-lg shadow-lg w-96 text-center relative"
//             initial={{ scale: 0.8 }}
//             animate={{ scale: 1 }}
//             exit={{ scale: 0.8 }}
//           >
//             <button
//               className="absolute top-2 right-3 text-2xl text-gray-600 hover:text-red-600"
//               onClick={() => setActiveModal(null)}
//             >
//               &times;
//             </button>
//             <h2 className="text-2xl font-semibold text-blue-700 mb-4">{activeModal.title}</h2>
//             <p className="text-gray-700">{activeModal.description}</p>
//           </motion.div>
//         </motion.div>
//       )}

//       {/* Scrolling Device Animation */}
//       <motion.div
//         className="mt-12 flex items-center space-x-8"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.img
//           src="/laptop_mockup.png"
//           alt="Laptop UI"
//           className="w-80 shadow-lg"
//           animate={{ y: [0, -10, 0] }}
//           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
//         />
//         <motion.img
//           src="/mobile_mockup.png"
//           alt="Mobile UI"
//           className="w-40 shadow-md"
//           animate={{ y: [0, -10, 0] }}
//           transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 0.2 }}
//         />
//       </motion.div>
//     </div>
//   );
// };

// export default LinkedInPageCreation;







// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";

// const users = [
//   { id: 1, name: "Narendra Arya", message: "Thanks", date: "Feb 11", status: "Available on mobile", image: "https://images.unsplash.com/photo-1738914401186-618afe776956?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { id: 2, name: "Mitali Chandani", message: "Hi Mitali, it's great to connect...", date: "Feb 10", status: "Offline", image: "/profile2.jpg" },
//   { id: 3, name: "Dimitris Papadimitriou", message: "King's College London Data Analytics...", date: "Feb 10", status: "Available", image: "https://images.unsplash.com/photo-1738914401186-618afe776956?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { id: 4, name: "Shrishti Taneja", message: "Congrats on the new role!", date: "Feb 9", status: "Available on mobile", image: "https://plus.unsplash.com/premium_photo-1677171143903-d1233bbbcd17?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { id: 5, name: "LinkedIn for Sales", message: "Hi, Honey! It looks like you might be...", date: "Feb 7", status: "Offline", image: "https://plus.unsplash.com/premium_photo-1677171143903-d1233bbbcd17?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { id: 6, name: "Prashant Sahu", message: "I'm on it", date: "Feb 7", status: "Available", image: "/profile6.jpg" },
// ];

// const LinkedInMessaging = () => {
//   const [search, setSearch] = useState("");
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [message, setMessage] = useState("");
//   const [chats, setChats] = useState({});

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const sendMessage = () => {
//     if (message.trim() === "") return;
//     setChats({ ...chats, [selectedUser.id]: [...(chats[selectedUser.id] || []), message] });
//     setMessage("");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6 px-4 md:px-10">
//       {/* Navigation Bar */}
//       <div className="bg-white shadow-md w-full py-4 px-6 flex justify-between items-center">
//         <h1 className="text-2xl font-bold">Messaging</h1>
//         <input
//           type="text"
//           placeholder="Search messages"
//           className="border p-2 rounded-md w-1/3"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <div className="flex space-x-4">
//           <span className="cursor-pointer">...</span>
//           <span className="cursor-pointer">✎</span>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex w-full max-w-6xl mt-6">
//         {/* Left Sidebar - User List */}
//         <div className="w-1/3 bg-white shadow-md p-4 overflow-y-auto h-96">
//           {filteredUsers.length > 0 ? (
//             filteredUsers.map((user) => (
//               <div
//                 key={user.id}
//                 className="p-4 border-b cursor-pointer hover:bg-gray-200 flex items-center"
//                 onClick={() => setSelectedUser(user)}
//               >
//                 <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
//                 <div>
//                   <h2 className="text-lg font-semibold">{user.name}</h2>
//                   <p className="text-gray-600 text-sm">{user.message}</p>
//                   <span className="text-xs text-gray-500">{user.date}</span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 mt-10">No users found</p>
//           )}
//         </div>

//         {/* Right Sidebar - Chat Window */}
//         <div className="w-2/3 bg-white shadow-md p-6 flex flex-col">
//           {selectedUser ? (
//             <>
//               {/* User Profile */}
//               <div className="flex justify-between items-center border-b pb-2 mb-4">
//                 <div className="flex items-center">
//                   <img src={selectedUser.image} alt={selectedUser.name} className="w-12 h-12 rounded-full mr-3" />
//                   <div>
//                     <h2 className="text-xl font-bold">{selectedUser.name}</h2>
//                     <p className="text-sm text-gray-500">{selectedUser.status}</p>
//                   </div>
//                 </div>
//                 <button
//                   className="text-gray-600 text-2xl"
//                   onClick={() => setSelectedUser(null)}
//                 >
//                   &times;
//                 </button>
//               </div>

//               {/* Chat History */}
//               <div className="flex-1 overflow-y-auto h-72 p-4 bg-gray-50 rounded-lg">
//                 {chats[selectedUser.id] ? (
//                   chats[selectedUser.id].map((msg, index) => (
//                     <p key={index} className="text-gray-800 p-2 bg-blue-100 rounded-md my-1 max-w-xs">
//                       {msg}
//                     </p>
//                   ))
//                 ) : (
//                   <p className="text-gray-600">No messages yet</p>
//                 )}
//               </div>

//               {/* Message Input */}
//               <div className="mt-4 flex">
//                 <input
//                   type="text"
//                   placeholder="Write a message..."
//                   className="border p-2 rounded-md flex-grow"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                 />
//                 <button
//                   className="bg-blue-600 text-white px-4 py-2 rounded-md ml-2"
//                   onClick={sendMessage}
//                 >
//                   Send
//                 </button>
//               </div>
//             </>
//           ) : (
//             <p className="text-gray-600 text-center mt-16">Select a user to start chatting</p>
//           )}
//         </div>
//       </div>

//       {/* Message Tabs */}
//       <div className="mt-6 flex space-x-4">
//         {["Focused", "Unread", "My Connections", "InMail", "Starred"].map((tab) => (
//           <button
//             key={tab}
//             className="bg-gray-200 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white"
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default LinkedInMessaging;




// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";

// const users = [
//   { id: 1, name: "Narendra Arya", message: "Thanks", date: "Feb 11", status: "Available on mobile", image: "https://images.unsplash.com/photo-1738914401186-618afe776956?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { id: 2, name: "Mitali Chandani", message: "Hi Mitali, it's great to connect...", date: "Feb 10", status: "Offline", image: "/profile2.jpg" },
//   { id: 3, name: "Dimitris Papadimitriou", message: "King's College London Data Analytics...", date: "Feb 10", status: "Available", image: "https://images.unsplash.com/photo-1738914401186-618afe776956?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { id: 4, name: "Shrishti Taneja", message: "Congrats on the new role!", date: "Feb 9", status: "Available on mobile", image: "https://plus.unsplash.com/premium_photo-1677171143903-d1233bbbcd17?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
// ];

// const tabs = ["Focused", "Unread", "My Connections", "InMail", "Starred"];

// const LinkedInMessaging = () => {
//   const [search, setSearch] = useState("");
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [message, setMessage] = useState("");
//   const [chats, setChats] = useState({});
//   const [activeTab, setActiveTab] = useState("Focused");

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const sendMessage = () => {
//     if (message.trim() === "" || !selectedUser) return;
//     setChats({ ...chats, [selectedUser.id]: [...(chats[selectedUser.id] || []), { text: message, sender: 'You' }] });
//     setMessage("");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6 px-4 md:px-10">
//       <div className="bg-white shadow-md w-full py-4 px-6 flex flex-col md:flex-row justify-between items-center">
//         <h1 className="text-2xl font-bold">Messaging</h1>
//         <input
//           type="text"
//           placeholder="Search messages"
//           className="border p-2 rounded-md w-full md:w-1/3 mt-2 md:mt-0"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>
      
//       <div className="flex w-full max-w-6xl mt-4 space-x-2">
//         {tabs.map((tab) => (
//           <button key={tab} className={`px-4 py-2 rounded-md ${activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"}`} onClick={() => setActiveTab(tab)}>
//             {tab}
//           </button>
//         ))}
//       </div>
      
//       <div className="flex w-full max-w-6xl mt-6">
//         <div className="w-1/3 bg-white shadow-md p-4 overflow-y-auto h-96">
//           {filteredUsers.length > 0 ? (
//             filteredUsers.map((user) => (
//               <div key={user.id} className="p-4 border-b cursor-pointer hover:bg-gray-200 flex items-center" onClick={() => setSelectedUser(user)}>
//                 <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
//                 <div>
//                   <h2 className="text-lg font-semibold">{user.name}</h2>
//                   <p className="text-gray-600 text-sm">{user.message}</p>
//                   <span className="text-xs text-gray-500">{user.date}</span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 mt-10">No users found</p>
//           )}
//         </div>

//         <div className="w-2/3 bg-white shadow-md p-6 flex flex-col">
//           {selectedUser ? (
//             <>
//               <div className="flex justify-between items-center border-b pb-2 mb-4">
//                 <div className="flex items-center">
//                   <img src={selectedUser.image} alt={selectedUser.name} className="w-12 h-12 rounded-full mr-3" />
//                   <div>
//                     <h2 className="text-xl font-bold">{selectedUser.name}</h2>
//                     <p className="text-sm text-gray-500">{selectedUser.status}</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-1 overflow-y-auto h-72 p-4 bg-gray-50 rounded-lg">
//                 {chats[selectedUser.id]?.map((msg, index) => (
//                   <p key={index} className={`p-2 my-1 max-w-xs rounded-md ${msg.sender === 'You' ? 'bg-blue-100 self-end' : 'bg-gray-200'}`}>{msg.text}</p>
//                 ))}
//               </div>
//               <div className="mt-4 flex">
//                 <input type="text" placeholder="Write a message..." className="border p-2 rounded-md flex-grow" value={message} onChange={(e) => setMessage(e.target.value)} />
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded-md ml-2" onClick={sendMessage}>Send</button>
//               </div>
//             </>
//           ) : (
//             <p className="text-gray-600 text-center mt-16">Select a user to start chatting</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LinkedInMessaging;



// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";

// const users = [
//   { id: 1, name: "Narendra Arya", message: "Thanks", date: "Feb 11", status: "Available on mobile", image: "https://images.unsplash.com/photo-1738914401186-618afe776956?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { id: 2, name: "Mitali Chandani", message: "Hi Mitali, it's great to connect...", date: "Feb 10", status: "Offline", image: "/profile2.jpg" },
//   { id: 3, name: "Dimitris Papadimitriou", message: "King's College London Data Analytics...", date: "Feb 10", status: "Available", image: "https://images.unsplash.com/photo-1738914401186-618afe776956?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { id: 4, name: "Shrishti Taneja", message: "Congrats on the new role!", date: "Feb 9", status: "Available on mobile", image: "https://plus.unsplash.com/premium_photo-1677171143903-d1233bbbcd17?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
// ];

// const tabs = ["Focused", "Unread", "My Connections", "InMail", "Starred"];

// const LinkedInMessaging = () => {
//   const [search, setSearch] = useState("");
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [message, setMessage] = useState("");
//   const [chats, setChats] = useState({});
//   const [activeTab, setActiveTab] = useState("Focused");

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const sendMessage = () => {
//     if (message.trim() === "" || !selectedUser) return;
//     setChats({ ...chats, [selectedUser.id]: [...(chats[selectedUser.id] || []), { text: message, sender: 'You' }] });
//     setMessage("");
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center py-6 px-4 md:px-10">
//       <div className="bg-white shadow-md w-full max-w-6xl py-4 px-6 flex flex-col md:flex-row justify-between items-center rounded-lg">
//         <h1 className="text-2xl font-bold">Messaging</h1>
//         <input
//           type="text"
//           placeholder="Search messages"
//           className="border p-2 rounded-md w-full md:w-1/3 mt-2 md:mt-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>
      
//       <div className="flex w-full max-w-6xl mt-4 space-x-2 overflow-x-auto">
//         {tabs.map((tab) => (
//           <button
//             key={tab}
//             className={`px-4 py-2 rounded-md text-sm md:text-base whitespace-nowrap ${
//               activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//             }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
      
//       <div className="flex flex-col md:flex-row w-full max-w-6xl mt-6 space-y-4 md:space-y-0 md:space-x-4">
//         <div className="w-full md:w-1/3 bg-white shadow-md p-4 rounded-lg overflow-y-auto h-96">
//           {filteredUsers.length > 0 ? (
//             filteredUsers.map((user) => (
//               <div
//                 key={user.id}
//                 className={`p-4 border-b cursor-pointer hover:bg-gray-100 flex items-center ${
//                   selectedUser?.id === user.id ? "bg-blue-50" : ""
//                 }`}
//                 onClick={() => setSelectedUser(user)}
//               >
//                 <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
//                 <div>
//                   <h2 className="text-lg font-semibold">{user.name}</h2>
//                   <p className="text-gray-600 text-sm">{user.message}</p>
//                   <span className="text-xs text-gray-500">{user.date}</span>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-500 mt-10">No users found</p>
//           )}
//         </div>

//         <div className="w-full md:w-2/3 bg-white shadow-md p-6 rounded-lg flex flex-col">
//           {selectedUser ? (
//             <>
//               <div className="flex justify-between items-center border-b pb-2 mb-4">
//                 <div className="flex items-center">
//                   <img src={selectedUser.image} alt={selectedUser.name} className="w-12 h-12 rounded-full mr-3" />
//                   <div>
//                     <h2 className="text-xl font-bold">{selectedUser.name}</h2>
//                     <p className="text-sm text-gray-500">{selectedUser.status}</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="flex-1 overflow-y-auto h-72 p-4 bg-gray-50 rounded-lg">
//                 {chats[selectedUser.id]?.map((msg, index) => (
//                   <div
//                     key={index}
//                     className={`flex ${
//                       msg.sender === 'You' ? 'justify-end' : 'justify-start'
//                     }`}
//                   >
//                     <p
//                       className={`p-2 my-1 max-w-xs rounded-md ${
//                         msg.sender === 'You' ? 'bg-blue-100 text-blue-900' : 'bg-gray-200 text-gray-900'
//                       }`}
//                     >
//                       {msg.text}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-4 flex">
//                 <input
//                   type="text"
//                   placeholder="Write a message..."
//                   className="border p-2 rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
//                 />
//                 <button
//                   className="bg-blue-600 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   onClick={sendMessage}
//                 >
//                   Send
//                 </button>
//               </div>
//             </>
//           ) : (
//             <p className="text-gray-600 text-center mt-16">Select a user to start chatting</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LinkedInMessaging;


// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { FiSearch, FiMoreVertical } from "react-icons/fi";

// const users = [
//   { id: 1, name: "Narendra Arya", message: "Thanks", date: "Feb 11", status: "Available on mobile", image: "https://images.unsplash.com/photo-1738914401186-618afe776956?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//   { id: 2, name: "Mitali Chandani", message: "Hi Mitali, it's great to connect...", date: "Feb 10", status: "Offline", image: "https://via.placeholder.com/50" },
//   { id: 3, name: "Shrishti Taneja", message: "Congrats on the new role!", date: "Feb 9", status: "Available on mobile", image: "https://via.placeholder.com/50" },
// ];

// const MessagingPopup = () => {
//   const [search, setSearch] = useState("");
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [activeTab, setActiveTab] = useState("Focused");

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="fixed bottom-10 right-10 w-96 bg-white shadow-xl rounded-lg overflow-hidden">
//       <div className="bg-gray-100 p-4 flex justify-between items-center">
//         <h2 className="text-lg font-semibold">Messaging</h2>
//         <FiMoreVertical className="text-xl cursor-pointer" />
//       </div>
//       <div className="border-b flex">
//         <button
//           className={`flex-1 p-2 text-center ${activeTab === "Focused" ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"}`}
//           onClick={() => setActiveTab("Focused")}
//         >
//           Focused
//         </button>
//         <button
//           className={`flex-1 p-2 text-center ${activeTab === "Other" ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"}`}
//           onClick={() => setActiveTab("Other")}
//         >
//           Other
//         </button>
//       </div>
//       <div className="p-2 flex items-center bg-gray-50 border-b">
//         <FiSearch className="text-gray-400 ml-2" />
//         <input
//           type="text"
//           placeholder="Search messages"
//           className="w-full p-2 bg-transparent outline-none"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>
//       <div className="h-80 overflow-y-auto">
//         {filteredUsers.map((user) => (
//           <div
//             key={user.id}
//             className="p-3 flex items-center cursor-pointer hover:bg-gray-100"
//             onClick={() => setSelectedUser(user)}
//           >
//             <img src={user.image} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
//             <div>
//               <h3 className="font-semibold">{user.name}</h3>
//               <p className="text-sm text-gray-600 truncate">{user.message}</p>
//             </div>
//             <span className="ml-auto text-xs text-gray-400">{user.date}</span>
//           </div>
//         ))}
//       </div>
//       {selectedUser && (
//         <div className="p-4 border-t bg-white">
//           <h3 className="font-semibold">Chat with {selectedUser.name}</h3>
//           <p className="text-gray-500 text-sm">{selectedUser.status}</p>
//           <div className="mt-2 flex">
//             <input
//               type="text"
//               placeholder="Write a message..."
//               className="flex-grow p-2 border rounded-md"
//             />
//             <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">Send</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MessagingPopup;


// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";

// const jobsData = {
//   "Easy Apply": [
//     { id: 1, title: "React.js Developer", company: "NeenOpal Inc.", location: "India (Remote)", promoted: true },
//     { id: 2, title: "Frontend Developer", company: "System Soft Technologies", location: "India (Remote)", promoted: false }
//   ],
//   Remote: [
//     { id: 3, title: "Full Stack Developer", company: "TechCorp", location: "USA (Remote)", promoted: false },
//     { id: 4, title: "Backend Engineer", company: "Innovate Inc.", location: "UK (Remote)", promoted: true }
//   ],
//   IT: [
//     { id: 5, title: "DevOps Engineer", company: "Cloud Solutions", location: "Germany (Remote)", promoted: false }
//   ]
// };

// const JobTabs = () => {
//   const [activeTab, setActiveTab] = useState("Easy Apply");
//   const [selectedJob, setSelectedJob] = useState(null);

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//     setSelectedJob(null); 
//   };

//   const handleJobClick = (job) => {
//     setSelectedJob(job);
//   };

//   const handleCloseJob = (jobId) => {
//     jobsData[activeTab] = jobsData[activeTab].filter((job) => job.id !== jobId);
//     setSelectedJob(null);
//   };

//   return (
//     <div className="p-4 bg-white shadow-lg rounded-lg w-full max-w-xl">
//       <div className="flex border-b mb-4">
//         {Object.keys(jobsData).map((tab) => (
//           <button
//             key={tab}
//             className={`px-4 py-2 ${activeTab === tab ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"}`}
//             onClick={() => handleTabClick(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>
//       <div>
//         {jobsData[activeTab].map((job) => (
//           <div key={job.id} className="p-3 border-b flex justify-between items-center cursor-pointer" onClick={() => handleJobClick(job)}>
//             <div>
//               <h3 className="font-semibold text-blue-600">{job.title}</h3>
//               <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
//               {job.promoted && <span className="text-xs bg-yellow-200 px-2 py-1 rounded">Promoted</span>}
//             </div>
//             <button className="text-gray-500 hover:text-red-500" onClick={(e) => { e.stopPropagation(); handleCloseJob(job.id); }}>
//               ❌
//             </button>
//           </div>
//         ))}
//       </div>
//       {selectedJob && (
//         <div className="p-4 mt-2 bg-gray-100 rounded-lg">
//           <h3 className="font-semibold">{selectedJob.title}</h3>
//           <p className="text-sm">{selectedJob.company} - {selectedJob.location}</p>
//           <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded" onClick={() => alert("Apply for " + selectedJob.title)}>
//             Apply Now
//           </button>
//         </div>
//       )}
//       <button className="mt-4 w-full text-center text-blue-600 font-semibold">Show all →</button>
//     </div>
//   );
// };

// export default JobTabs;



// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import { FaSearch, FaHome, FaUsers, FaBriefcase, FaComments, FaBell, FaTh, FaRedo } from "react-icons/fa";
// import { NavLink } from "react-router-dom";
// import { Avatar } from "@mui/material";

// const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between p-2 bg-white shadow-md">
//       {/* Left Section */}
//       <div className="flex items-center space-x-3">
//         <img src="https://www.shutterstock.com/shutterstock/photos/2278726727/display_1500/stock-vector-minimalistic-circular-logo-sample-vector-2278726727.jpg" alt="LinkedIn" className="w-8" />
//         <div className="flex items-center bg-gray-200 p-1 rounded-md">
//           <FaSearch className="text-gray-500 mx-2" />
//           <input
//             type="text"
//             placeholder="Title, skill or company"
//             className="bg-transparent outline-none text-sm"
//           />
//         </div>
//         <div className="flex items-center bg-gray-200 p-1 rounded-md">
//           <FaSearch className="text-gray-500 mx-2" />
//           <input
//             type="text"
//             placeholder="City, state, or zip code"
//             className="bg-transparent outline-none text-sm"
//           />
//         </div>
//       </div>
      
//       {/* Middle Navigation */}
//       <div className="flex space-x-6">
//         <NavLink to="/home" className="flex flex-col items-center text-gray-500 hover:text-black">
//           <FaHome size={20} /><span className="text-xs">Home</span>
//         </NavLink>
//         <NavLink to="/network" className="flex flex-col items-center text-gray-500 hover:text-black">
//           <FaUsers size={20} /><span className="text-xs">My Network</span>
//         </NavLink>
//         <NavLink to="/jobs" className="flex flex-col items-center text-black border-b-2 border-black">
//           <FaBriefcase size={20} /><span className="text-xs">Jobs</span>
//         </NavLink>
//         <NavLink to="/messaging" className="flex flex-col items-center text-gray-500 hover:text-black">
//           <FaComments size={20} /><span className="text-xs">Messaging</span>
//         </NavLink>
//         <NavLink to="/notifications" className="flex flex-col items-center text-gray-500 hover:text-black">
//           <FaBell size={20} /><span className="text-xs">Notifications</span>
//         </NavLink>
//         <NavLink to="/me" className="flex flex-col items-center text-gray-500 hover:text-black">
//           <Avatar sx={{ width: 24, height: 24 }} />
//           <span className="text-xs">Me</span>
//         </NavLink>
//       </div>
      
//       {/* Right Section */}
//       <div className="flex space-x-4">
//         <NavLink to="/business" className="flex items-center text-gray-500 hover:text-black">
//           <FaTh size={20} /><span className="text-xs ml-1">For Business</span>
//         </NavLink>
//         <NavLink to="/advertise" className="flex items-center text-gray-500 hover:text-black">
//           <FaRedo size={20} /><span className="text-xs ml-1">Advertise</span>
//         </NavLink>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React from "react";

// const NetworkManager = () => {
//   const [activeTab, setActiveTab] = React.useState("Grow");
//   const [suggestions, setSuggestions] = React.useState([
//     {
//       id: 1,
//       name: "Riya Rathore",
//       title: "Java Developer || C / C++ || Core Java",
//       mutual: "Based on your profile",
//       img: "https://via.placeholder.com/50",
//     },
//     {
//       id: 2,
//       name: "Vinod Kumar Vemula",
//       title: "Graduated in Bharath University 2022",
//       mutual: "RAJ and 9 other mutual connections",
//       img: "https://via.placeholder.com/50",
//     },
//     {
//       id: 3,
//       name: "Nishant Dewangan",
//       title: "Fullstack Webdev | MERN | Next.js | Python",
//       mutual: "Yogesh is a mutual connection",
//       img: "https://via.placeholder.com/50",
//     },
//     {
//       id: 4,
//       name: "Roshni Raghuwanshi",
//       title: "Looking for an opportunity in IT Company",
//       mutual: "Anurag and 39 other mutual connections",
//       img: "https://via.placeholder.com/50",
//     },
//   ]);

//   const removeSuggestion = (id) => {
//     setSuggestions(suggestions.filter((user) => user.id !== id));
//   };

//   return (
//     <div className="flex gap-6 p-6 font-sans">
//       {/* Left Sidebar (Manage My Network) */}
//       <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
//         <h2 className="text-lg font-semibold mb-3">Manage my network</h2>
//         <ul className="text-sm space-y-2">
//           <li className="flex justify-between items-center cursor-pointer hover:bg-gray-200 p-2 rounded">
//             <span>Connections</span> <span className="text-gray-600">2,031</span>
//           </li>
//           <li className="flex justify-between items-center cursor-pointer hover:bg-gray-200 p-2 rounded">
//             <span>Contacts</span> <span className="text-gray-600">523</span>
//           </li>
//           <li className="cursor-pointer hover:bg-gray-200 p-2 rounded">Following & followers</li>
//           <li className="cursor-pointer hover:bg-gray-200 p-2 rounded">Groups</li>
//           <li className="cursor-pointer hover:bg-gray-200 p-2 rounded">Events</li>
//           <li className="cursor-pointer hover:bg-gray-200 p-2 rounded">Pages</li>
//           <li className="cursor-pointer hover:bg-gray-200 p-2 rounded">Newsletters</li>
//         </ul>
//       </div>

//       {/* Right Side - Suggestions & Invitations */}
//       <div className="w-3/5">
//         {/* Tabs */}
//         <div className="flex border-b-2 pb-2">
//           <div
//             className={`cursor-pointer px-5 py-2 ${
//               activeTab === "Grow" ? "border-b-2 border-green-500" : ""
//             }`}
//             onClick={() => setActiveTab("Grow")}
//           >
//             Grow
//           </div>
//           <div
//             className={`cursor-pointer px-5 py-2 relative ${
//               activeTab === "Catch Up" ? "border-b-2 border-red-500" : ""
//             }`}
//             onClick={() => setActiveTab("Catch Up")}
//           >
//             Catch Up
//             <span className="bg-red-500 text-white text-xs rounded-full px-2 ml-2">🔴</span>
//           </div>
//         </div>

//         {/* No pending invitations */}
//         <div className="py-4 text-sm">No pending invitations</div>

//         {/* Suggested Connections */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">People you may know</h3>
//           <div className="flex gap-4 flex-wrap">
//             {suggestions.map((user) => (
//               <div key={user.id} className="w-48 border p-4 rounded-lg relative text-center">
//                 <img
//                   src={user.img}
//                   alt={user.name}
//                   className="w-12 h-12 rounded-full mx-auto"
//                 />
//                 <h4 className="text-base font-medium mt-2">{user.name}</h4>
//                 <p className="text-xs text-gray-600">{user.title}</p>
//                 <p className="text-xs text-gray-800">{user.mutual}</p>
//                 <button className="mt-2 bg-blue-600 text-white py-1 px-3 rounded-md">
//                   + Connect
//                 </button>
//                 <button
//                   onClick={() => removeSuggestion(user.id)}
//                   className="absolute top-2 right-2 text-lg"
//                 >
//                   ❌
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Show All Button */}
//         {suggestions.length > 0 && (
//           <button
//             className="mt-5 px-4 py-2 bg-gray-200 border rounded-md"
//             onClick={() => alert("Showing All Profiles...")}
//           >
//             Show All →
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NetworkManager;





// // export default CatchUpSection;
// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { FaUserFriends, FaEnvelope, FaUsers, FaCalendarAlt, FaNewspaper } from "react-icons/fa";
// import { FiMoreHorizontal } from "react-icons/fi";
// // eslint-disable-next-line no-unused-vars
// import { MdManageAccounts } from "react-icons/md";

// const users = [
//   { id: 1, name: "Riya Rathore", title: "Java Developer || C / C++", mutual: "Based on your profile" },
//   { id: 2, name: "Vinod Kumar Vemula", title: "Graduated in Bharath University 2022", mutual: "RAJ and 9 others" },
//   { id: 3, name: "Nishant Dewangan", title: "Fullstack Webdev | MERN | Next.js | Python - Django", mutual: "Yogesh is a mutual connection" },
//   { id: 4, name: "Roshni Raghuwanshi", title: "Looking for an opportunity in IT Company | DS...", mutual: "Anurag and 39 others" },
// ];

// const LinkedInNetwork = () => {
//   const [activeTab, setActiveTab] = useState("grow");

//   return (
//     <div className="flex bg-gray-100 min-h-screen p-6">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
//         <h2 className="text-lg font-bold mb-4">Manage my network</h2>
//         <ul className="space-y-3">
//           <li className="flex items-center gap-3 text-gray-700 font-medium cursor-pointer hover:bg-gray-100 p-2 rounded">
//             <FaUserFriends className="text-xl" /> Connections
//           </li>
//           <li className="flex items-center gap-3 text-gray-700 font-medium cursor-pointer bg-gray-200 p-2 rounded">
//             <FaEnvelope className="text-xl" /> Contacts
//           </li>
//           <li className="flex items-center gap-3 text-gray-700 font-medium cursor-pointer hover:bg-gray-100 p-2 rounded">
//             <FaUsers className="text-xl" /> Groups
//           </li>
//           <li className="flex items-center gap-3 text-gray-700 font-medium cursor-pointer hover:bg-gray-100 p-2 rounded">
//             <FaCalendarAlt className="text-xl" /> Events
//           </li>
//           <li className="flex items-center gap-3 text-gray-700 font-medium cursor-pointer hover:bg-gray-100 p-2 rounded">
//             <FaNewspaper className="text-xl" /> Newsletters
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="w-3/4 p-6">
//         {/* Tabs */}
//         <div className="flex gap-6 border-b pb-3">
//           <button className={`pb-2 font-semibold ${activeTab === "grow" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"}`} onClick={() => setActiveTab("grow")}>
//             Grow
//           </button>
//           <button className={`pb-2 font-semibold ${activeTab === "catchUp" ? "border-b-2 border-blue-500 text-blue-600" : "text-gray-600"}`} onClick={() => setActiveTab("catchUp")}>
//             Catch up 🔴
//           </button>
//         </div>

//         {/* People You May Know */}
//         <h3 className="mt-6 text-lg font-bold">People you may know</h3>
//         <div className="grid grid-cols-2 gap-4 mt-4">
//           {users.map((user) => (
//             <div key={user.id} className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
//               <div>
//                 <h4 className="font-semibold">{user.name}</h4>
//                 <p className="text-sm text-gray-500">{user.title}</p>
//                 <p className="text-xs text-gray-400">{user.mutual}</p>
//                 <button className="mt-2 px-4 py-1 text-white bg-blue-600 rounded-full">+ Connect</button>
//               </div>
//               <FiMoreHorizontal className="text-2xl text-gray-500 cursor-pointer" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LinkedInNetwork;



// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import { FaUserFriends, FaUsers, FaCalendarAlt, FaFileAlt, FaNewspaper } from "react-icons/fa";

// const networkData = [
//   { id: 1, name: "Connections", count: 2031, icon: <FaUserFriends /> },
//   { id: 2, name: "Contacts", count: 523, icon: <FaUsers /> },
//   { id: 3, name: "Following & Followers", count: 5, icon: <FaUsers /> },
//   { id: 4, name: "Groups", count: 2, icon: <FaUsers /> },
//   { id: 5, name: "Events", count: 132, icon: <FaCalendarAlt /> },
//   { id: 6, name: "Pages", count: 38, icon: <FaFileAlt /> },
//   { id: 7, name: "Newsletters", count: 12, icon: <FaNewspaper /> },
// ];

// const suggestedPeople = [
//   { id: 1, name: "Riya Rathore", title: "Java Developer || C/C++", img: "https://via.placeholder.com/100" },
//   { id: 2, name: "Vinod Kumar Vemula", title: "Graduated in Bharath University 2022", img: "https://via.placeholder.com/100" },
//   { id: 3, name: "Nishant Dewangan", title: "Fullstack Webdev | MERN", img: "https://via.placeholder.com/100" },
//   { id: 4, name: "Roshni Raghuwanshi", title: "Looking for an opportunity in IT Company", img: "https://via.placeholder.com/100" },
// ];

// const LinkedInNetwork = () => {
//   return (
//     <div className="flex bg-gray-100 min-h-screen p-6">
//       {/* Left Sidebar */}
//       <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
//         <h2 className="text-lg font-bold mb-4">Manage My Network</h2>
//         <ul>
//           {networkData.map((item) => (
//             <li key={item.id} className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
//               <div className="flex items-center gap-2">
//                 {item.icon}
//                 <span>{item.name}</span>
//               </div>
//               <span className="text-blue-600 font-semibold">{item.count}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="w-3/4 ml-6">
//         <div className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between">
//           <h2 className="text-lg font-bold">People You May Know</h2>
//           <button className="text-blue-600 font-semibold">Show All →</button>
//         </div>
//         <div className="grid grid-cols-2 gap-4">
//           {suggestedPeople.map((person) => (
//             <div key={person.id} className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
//               <img src={person.img} alt={person.name} className="w-16 h-16 rounded-full" />
//               <div>
//                 <h3 className="font-semibold">{person.name}</h3>
//                 <p className="text-gray-600 text-sm">{person.title}</p>
//                 <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded-md">Connect</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LinkedInNetwork;



// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import { FaRegThumbsUp, FaRegCommentDots, FaRetweet, FaRegPaperPlane } from "react-icons/fa";

// const post = {
//   title: "Manufacturing gears up for growth",
//   author: "Divya Pathak",
//   timeAgo: "Updated 22 hours ago",
//   description:
//     "Several companies in the manufacturing sector are set to ramp up investments and focus on expansion over the next six months, a quarterly survey by FICCI shows.",
// };

// const userPost = {
//   id: 1,
//   name: "Manish Sharma",
//   designation: "Chairman, Panasonic Life Solutions India and South Asia",
//   timeAgo: "1w",
//   content: `India’s manufacturing sector is off to a strong start in 2025, with the PMI reaching a record six-month high in January. This growth, driven by a surge in domestic demand and an uptick in exports, points to a transformative year for the industry...`,
//   likes: 125,
//   comments: 45,
//   reposts: 30,
//   sends: 20,
// };

// const ManufacturingPost = () => {
//   return (
//     <div className="flex flex-col items-center bg-gray-100 py-8">
//       {/* Main Post Card */}
//       <div className="bg-white shadow-md rounded-lg p-6 w-3/4 mb-6">
//         <p className="text-sm text-gray-500">{post.timeAgo}</p>
//         <h2 className="text-xl font-bold">{post.title}</h2>
//         <p className="text-sm text-gray-600">
//           By <span className="font-semibold text-blue-600">{post.author}</span>
//         </p>
//         <p className="mt-2 text-gray-700">{post.description}</p>
//         <button className="mt-4 px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100">
//           Share
//         </button>
//       </div>

//       {/* User Perspective Card */}
//       <div className="bg-white shadow-md rounded-lg p-6 w-3/4">
//         <div className="flex items-center mb-3">
//           <img
//             src="https://via.placeholder.com/50"
//             alt="User"
//             className="w-12 h-12 rounded-full"
//           />
//           <div className="ml-3">
//             <h4 className="font-semibold">{userPost.name}</h4>
//             <p className="text-sm text-gray-500">{userPost.designation} • {userPost.timeAgo}</p>
//           </div>
//           <button className="ml-auto px-3 py-1 text-blue-600 border border-blue-600 rounded-lg">
//             + Follow
//           </button>
//         </div>

//         <p className="text-gray-700">{userPost.content}</p>

//         {/* Like, Comment, Repost, Send */}
//         <div className="flex justify-between items-center mt-4 border-t pt-2 text-gray-600">
//           <button className="flex items-center gap-2 hover:text-blue-600">
//             <FaRegThumbsUp /> {userPost.likes}
//           </button>
//           <button className="flex items-center gap-2 hover:text-blue-600">
//             <FaRegCommentDots /> {userPost.comments}
//           </button>
//           <button className="flex items-center gap-2 hover:text-blue-600">
//             <FaRetweet /> {userPost.reposts}
//           </button>
//           <button className="flex items-center gap-2 hover:text-blue-600">
//             <FaRegPaperPlane /> {userPost.sends}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManufacturingPost;



// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import { BsChatDots } from "react-icons/bs";
// import { FiExternalLink } from "react-icons/fi";

// const HelpModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="fixed bottom-6 right-6 flex flex-col items-end">
//       {/* Help Button */}
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg font-semibold hover:bg-blue-800 transition"
//         >
//           Help
//         </button>
//       )}

//       {/* Help Modal */}
//       {isOpen && (
//         <div className="bg-white w-96 h-[450px] rounded-lg shadow-lg flex flex-col">
//           {/* Header */}
//           <div className="bg-blue-700 text-white p-4 flex justify-between items-center rounded-t-lg">
//             <h2 className="text-lg font-semibold">Help</h2>
//             <button onClick={() => setIsOpen(false)} className="text-white text-xl">
//               <FaTimes />
//             </button>
//           </div>

//           {/* Search Bar */}
//           <div className="p-4">
//             <input
//               type="text"
//               placeholder="Search for helpful articles"
//               className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           {/* Help Suggestions */}
//           <div className="px-4 text-gray-700 text-sm font-semibold">Help based on your activity</div>
//           <div className="px-4 flex flex-col mt-2 space-y-2 text-blue-600 text-sm">
//             <a href="#" className="hover:underline">
//               Change content language on Learning
//             </a>
//             <a href="#" className="hover:underline">
//               Use the Learning library
//             </a>
//             <a href="#" className="hover:underline">
//               Set and manage weekly goals in Learning
//             </a>
//           </div>

//           {/* Chat and Open Help */}
//           <div className="mt-auto p-4 border-t">
//             <button className="flex items-center gap-2 text-blue-600 w-full py-2 hover:bg-gray-100 rounded-md">
//               <BsChatDots className="text-lg" />
//               Chat with support
//             </button>
//             <button className="flex items-center gap-2 text-blue-600 w-full py-2 mt-2 hover:bg-gray-100 rounded-md">
//               <FiExternalLink className="text-lg" />
//               Open Help in a new tab
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HelpModal;




// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import { FaTimes, FaSearch, FaGlobe } from "react-icons/fa";

// const LearningNav = () => {
//   return (
//     <nav className="w-full flex items-center justify-between px-6 py-2 border-b bg-white">
//       {/* Left Section */}
//       <div className="flex items-center gap-4">
//         <button className="text-gray-600 text-xl hover:bg-gray-200 p-2 rounded-full">
//           <FaTimes />
//         </button>
//         <div className="flex items-center gap-1">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
//             alt="LinkedIn Logo"
//             className="w-6"
//           />
//           <span className="text-blue-600 text-xl font-semibold">Learning</span>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg w-1/3">
//         <FaSearch className="text-gray-500" />
//         <input
//           type="text"
//           placeholder="Search"
//           className="bg-transparent focus:outline-none px-2 w-full"
//         />
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center gap-6">
//         {/* User Profile */}
//         <div className="flex items-center gap-2 cursor-pointer">
//           <img
//             src="https://via.placeholder.com/30"
//             alt="User"
//             className="w-8 h-8 rounded-full"
//           />
//           <span className="text-gray-700">Me ▼</span>
//         </div>

//         {/* Language Selector */}
//         <div className="flex items-center gap-2 cursor-pointer">
//           <FaGlobe className="text-gray-600" />
//           <span className="text-gray-700">EN ▼</span>
//         </div>

//         {/* Subscription */}
//         <button className="text-gray-800 font-semibold hover:underline">
//           Start my free month
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default LearningNav;




// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const courses = [
//   {
//     id: 1,
//     title: "Certified Ethical Hacker (CEH)",
//     author: "Pearson, Nick Garner, and Omar Santos",
//     duration: "19h",
//     tags: ["New"],
//     img: "https://via.placeholder.com/300x150",
//   },
//   {
//     id: 2,
//     title: "Detection and Response with XDR: Integrated Security",
//     author: "Pearson, Katherine McNamara, Steven ...",
//     duration: "3h 49m",
//     tags: ["New", "Popular"],
//     img: "https://via.placeholder.com/300x150",
//   },
//   {
//     id: 3,
//     title: "Practice Exam 1 for Certified Information Security Manager",
//     author: "Total Seminars",
//     duration: "4m 12s",
//     tags: ["Popular"],
//     img: "https://via.placeholder.com/300x150",
//   },
//   {
//     id: 4,
//     title: "Red Team Operator Series",
//     author: "Cybrary",
//     duration: "4h 27m",
//     tags: ["Popular"],
//     img: "https://via.placeholder.com/300x150",
//   },
// ];

// const CourseCard = ({ course }) => {
//   return (
//     <div className="relative bg-white rounded-lg shadow-lg p-3 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
//       <img
//         src={course.img}
//         alt={course.title}
//         className="rounded-md w-full h-40 object-cover"
//       />
//       <div className="absolute top-2 left-2 flex gap-1">
//         {course.tags.map((tag, index) => (
//           <span
//             key={index}
//             className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//       <div className="mt-2">
//         <p className="text-gray-700 text-sm">Course</p>
//         <h3 className="text-md font-semibold">{course.title}</h3>
//         <p className="text-gray-500 text-sm">By: {course.author}</p>
//       </div>
//       <div className="absolute bottom-2 right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md">
//         {course.duration}
//       </div>
//     </div>
//   );
// };

// const CybersecurityCourses = () => {
//   return (
//     <div className="relative bg-gray-900 text-white py-12">
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-20"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1738807991630-260f842bdf49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//         }}
//       ></div>

//       <div className="relative container mx-auto px-6">
//         <h2 className="text-4xl font-bold">Cybersecurity</h2>
//         <p className="mt-2 text-gray-300 max-w-3xl">
//           With security breaches continuing to make headlines, the demand for cybersecurity professionals has skyrocketed. 
//           Check here regularly for curated content on the most vital cybersecurity topics, so you can upskill, reskill, or just stay on the cutting edge.
//         </p>

//         <div className="mt-6 flex justify-between items-center">
//           <h3 className="text-xl font-semibold">New & Featured Courses</h3>
//           <button className="text-blue-300 font-semibold hover:underline">
//             Show all 496 courses →
//           </button>
//         </div>

//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {courses.map((course) => (
//             <CourseCard key={course.id} course={course} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CybersecurityCourses;


// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const courses = [
//   {
//     id: 1,
//     title: "Certified Ethical Hacker (CEH)",
//     author: "Pearson, Nick Garner, and Omar Santos",
//     duration: "19h",
//     tags: ["New"],
//     img: "https://images.unsplash.com/photo-1738807991630-260f842bdf49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 2,
//     title: "Detection and Response with XDR: Integrated Security",
//     author: "Pearson, Katherine McNamara, Steven ...",
//     duration: "3h 49m",
//     tags: ["New", "Popular"],
//     img: "https://images.unsplash.com/photo-1738807991630-260f842bdf49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 3,
//     title: "Practice Exam 1 for Certified Information Security Manager",
//     author: "Total Seminars",
//     duration: "4m 12s",
//     tags: ["Popular"],
//     img: "https://images.unsplash.com/photo-1738807991630-260f842bdf49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 4,
//     title: "Red Team Operator Series",
//     author: "Cybrary",
//     duration: "4h 27m",
//     tags: ["Popular"],
//     img: "https://images.unsplash.com/photo-1738807991630-260f842bdf49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

// const CourseCard = ({ course }) => {
//   return (
//     <div className="relative bg-white rounded-lg shadow-lg p-3 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
//       <img
//         src={course.img}
//         alt={course.title}
//         className="rounded-md w-full h-40 object-cover"
//       />
//       <div className="absolute top-2 left-2 flex gap-1">
//         {course.tags.map((tag, index) => (
//           <span
//             key={index}
//             className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//       <div className="mt-2">
//         <p className="text-gray-700 text-sm">Course</p>
//         <h3 className="text-md font-semibold">{course.title}</h3>
//         <p className="text-gray-500 text-sm">By: {course.author}</p>
//       </div>
//       <div className="absolute bottom-2 right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded-md">
//         {course.duration}
//       </div>
//     </div>
//   );
// };

// const CybersecurityCourses = () => {
//   return (
//     <div className="relative bg-gray-900 text-white py-12">
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-20"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1738807991630-260f842bdf49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
//         }}
//       ></div>

//       <div className="relative container mx-auto px-6">
//         <h2 className="text-4xl font-bold">Cybersecurity</h2>
//         <p className="mt-2 text-gray-300 max-w-3xl">
//           With security breaches continuing to make headlines, the demand for cybersecurity professionals has skyrocketed. 
//           Check here regularly for curated content on the most vital cybersecurity topics, so you can upskill, reskill, or just stay on the cutting edge.
//         </p>

//         <div className="mt-6 flex justify-between items-center">
//           <h3 className="text-xl font-semibold">New & Featured Courses</h3>
//         </div>

//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {courses.map((course) => (
//             <CourseCard key={course.id} course={course} />
//           ))}
//         </div>

//         {/* Bottom Div with Angle Brackets */}
//         <div className="relative mt-12 bg-gray-800 p-6 rounded-lg text-center text-gray-300">
//           <span className="absolute top-0 left-0 text-3xl text-blue-500"></span>
//           <span className="absolute top-0 right-0 text-3xl text-blue-500"></span>
//           <span className="absolute bottom-0 left-0 text-3xl text-blue-500"></span>
//           <span className="absolute bottom-0 right-0 text-3xl text-blue-500"></span>
//           <p className="text-lg font-semibold">Stay Secure, Keep Learning! 🚀</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CybersecurityCourses;




// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const courses = [
//   {
//     id: 1,
//     title: "Certified Ethical Hacker (CEH)",
//     author: "Pearson, Nick Garner, and Omar Santos",
//     duration: "19h",
//     tags: ["New"],
//     img: "https://images.unsplash.com/photo-1738807991630-260f842bdf49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 2,
//     title: "Detection and Response with XDR: Integrated Security",
//     author: "Pearson, Katherine McNamara, Steven ...",
//     duration: "3h 49m",
//     tags: ["New", "Popular"],
//     img: "https://images.unsplash.com/photo-1738807991630-260f842bdf49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 3,
//     title: "Practice Exam 1 for Certified Information Security Manager",
//     author: "Total Seminars",
//     duration: "4m 12s",
//     tags: ["Popular"],
//     img: "https://images.unsplash.com/photo-1738807991630-260f842bdf49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: 4,
//     title: "Red Team Operator Series",
//     author: "Cybrary",
//     duration: "4h 27m",
//     tags: ["Popular"],
//     img: "https://images.unsplash.com/photo-1738807991630-260f842bdf49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
// ];

// const CourseCard = ({ course }) => {
//   return (
//     <div className="bg-white rounded-lg shadow-lg p-3 hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
//       <img src={course.img} alt={course.title} className="rounded-md w-full h-40 object-cover" />
//       <div className="mt-2">
//         <p className="text-gray-700 text-sm">Course</p>
//         <h3 className="text-md font-semibold">{course.title}</h3>
//         <p className="text-gray-500 text-sm">By: {course.author}</p>
//       </div>
//       <div className="mt-2 text-gray-700 font-semibold">Duration: {course.duration}</div>
//     </div>
//   );
// };

// const CybersecurityCourses = () => {
//   return (
//     <div className="bg-gray-900 text-white py-12 px-6">
//       <div className="container mx-auto">
//         <h2 className="text-4xl font-bold">Cybersecurity</h2>
//         <p className="mt-2 text-gray-300 max-w-3xl">
//           With security breaches continuing to make headlines, the demand for cybersecurity professionals has skyrocketed. Check here regularly for curated content on the most vital cybersecurity topics, so you can upskill, reskill, or just stay on the cutting edge.
//         </p>

//         <div className="mt-6 flex justify-between items-center">
//           <h3 className="text-xl font-semibold">New & Featured Courses</h3>
//           <button className="text-blue-300 font-semibold hover:underline">
//             Show all 496 courses →
//           </button>
//         </div>

//         {/* First Row of Courses */}
//         <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {courses.map((course) => (
//             <CourseCard key={course.id} course={course} />
//           ))}
//         </div>

//         {/* Second Row of Courses */}
//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {courses.map((course) => (
//             <CourseCard key={course.id} course={course} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CybersecurityCourses;




// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const skills = [
//   "Network Security",
//   "Cyber Threat Intelligence (CTI)",
//   "Firewalls",
//   "Information Security",
//   "Vulnerability Management",
//   "Ethical Hacking",
//   "Operating Systems",
//   "Security Architecture Design",
//   "Penetration Testing",
// ];

// const certifications = [
//   {
//     id: 1,
//     title: "Prepare for the Microsoft Cybersecurity Architect (SC-100) Certification Exam",
//     description:
//       "Please be advised that LinkedIn Learning will retire this learning path on December 12...",
//     img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg",
//   },
//   {
//     id: 2,
//     title: "Cert Prep: ISC2 Certified in Cybersecurity (CC)",
//     description:
//       "Considering a career in cybersecurity? The good news is that almost every company today...",
//     img: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Linkedin.svg",
//   },
// ];

// const CybersecuritySection = () => {
//   return (
//     <div className="bg-gray-100 p-6 rounded-lg">
//       {/* Top Skills Section */}
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-bold">Top Cybersecurity Skills</h2>
//         <p className="text-gray-500 text-sm">Provided by LinkedIn.</p>
//         <div className="mt-3">
//           <p className="text-gray-700 font-semibold">1 skill matches your profile</p>
//           <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mt-1">
//             ✅ JavaScript
//           </span>
//         </div>
//         <div className="mt-4">
//           <p className="text-gray-700 font-semibold">9 skills to develop</p>
//           <div className="flex flex-wrap gap-2 mt-2">
//             {skills.map((skill, index) => (
//               <span
//                 key={index}
//                 className="inline-block bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Certifications Section */}
//       <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-bold">Certifications</h2>
//         <p className="text-gray-500 text-sm">
//           On-demand courses to help you earn a professional certificate, prepare for professional
//           certification exams, and earn continuing education units.
//         </p>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//           {certifications.map((cert) => (
//             <div
//               key={cert.id}
//               className="flex items-center bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm"
//             >
//               <img src={cert.img} alt="LinkedIn Logo" className="w-12 h-12 mr-4" />
//               <div>
//                 <h3 className="font-semibold text-gray-800">{cert.title}</h3>
//                 <p className="text-gray-500 text-sm">{cert.description}</p>
//               </div>
//               <span className="ml-auto text-gray-500 text-xl">➡️</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CybersecuritySection;



// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";

// const users = [
//   { id: 1, name: "Martela Elezaj", role: "Software Developer", img: "https://via.placeholder.com/50", following: true },
//   { id: 2, name: "SURBHI -", role: "Senior Test Lead | Load Testing", img: "https://via.placeholder.com/50", following: true },
//   { id: 3, name: "Amanullah Shams", role: "Software Developer | JavaScript | React", img: "https://via.placeholder.com/50", following: true },
//   { id: 4, name: "Samreen Khan", role: "Full Stack Developer | Node.js | Angular", img: "https://via.placeholder.com/50", following: false },
//   { id: 5, name: "Bukurosh Xhakeri", role: "Frontend Developer | Sales Manager", img: "https://via.placeholder.com/50", following: false }
// ];

// const Network = () => {
//   const [activeTab, setActiveTab] = useState("following");
//   const [userList, setUserList] = useState(users);

//   const toggleFollow = (id) => {
//     setUserList((prevUsers) =>
//       prevUsers.map((user) =>
//         user.id === id ? { ...user, following: !user.following } : user
//       )
//     );
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-4 bg-white rounded shadow-md">
//       <div className="flex border-b mb-4">
//         <button
//           className={`px-4 py-2 font-semibold ${activeTab === "following" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
//           onClick={() => setActiveTab("following")}
//         >
//           Following
//         </button>
//         <button
//           className={`px-4 py-2 font-semibold ${activeTab === "followers" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
//           onClick={() => setActiveTab("followers")}
//         >
//           Followers
//         </button>
//       </div>

//       <div>
//         {userList
//           .filter((user) => (activeTab === "following" ? user.following : !user.following))
//           .map((user) => (
//             <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg mb-2">
//               <div className="flex items-center">
//                 <img src={user.img} alt={user.name} className="w-10 h-10 rounded-full mr-3" />
//                 <div>
//                   <p className="font-semibold">{user.name}</p>
//                   <p className="text-sm text-gray-500">{user.role}</p>
//                 </div>
//               </div>
//               <button
//                 className={`px-4 py-1 rounded border ${user.following ? "bg-gray-200 text-black" : "bg-blue-500 text-white"}`}
//                 onClick={() => toggleFollow(user.id)}
//               >
//                 {user.following ? "Following" : "Follow"}
//               </button>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Network;








// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const Events = () => {
//   const yourEvents = [
//     {
//       id: 1,
//       title: "Cloud Community Days",
//       date: "Sun, Apr 16, 2023, 9:00 AM",
//       image: "https://imgs.search.brave.com/-wYLHCrISmcmlWkx-sfDXPMvVEwpByoqgjfR8gvXios/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1nL3Rv/b2wvY29sb3JpemUt/aW5mby53ZWJw",
//     },
//     {
//       id: 2,
//       title: "Microsoft Power BI Certification Training",
//       date: "Sat, Feb 25, 2023, 1:30 PM",
//       image: "https://imgs.search.brave.com/-wYLHCrISmcmlWkx-sfDXPMvVEwpByoqgjfR8gvXios/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1nL3Rv/b2wvY29sb3JpemUt/aW5mby53ZWJw",
//     },
//   ];

//   const recommendedEvents = [
//     {
//       id: 1,
//       title: "Path to Product Management in 2025 ($500k offer!)",
//       date: "Mon, Feb 17, 2025, 6:30 AM",
//       attendees: "8,410 attendees",
//       image: "https://imgs.search.brave.com/-wYLHCrISmcmlWkx-sfDXPMvVEwpByoqgjfR8gvXios/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1nL3Rv/b2wvY29sb3JpemUt/aW5mby53ZWJw",
//     },
//     {
//       id: 2,
//       title: "The Empowered Leader Experience - Uganda/Tanzania Retreat",
//       date: "Mon, Feb 17, 2025, 12:30 AM",
//       attendees: "10 attendees",
//       image: "https://imgs.search.brave.com/-wYLHCrISmcmlWkx-sfDXPMvVEwpByoqgjfR8gvXios/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1nL3Rv/b2wvY29sb3JpemUt/aW5mby53ZWJw",
//     },
//     {
//       id: 3,
//       title: "Project Controls Expo UAE",
//       date: "Mon, Feb 17, 2025, 9:30 AM",
//       attendees: "95 attendees",
//       image: "https://imgs.search.brave.com/-wYLHCrISmcmlWkx-sfDXPMvVEwpByoqgjfR8gvXios/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waXhs/ci5jb20vaW1nL3Rv/b2wvY29sb3JpemUt/aW5mby53ZWJw",
//     },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto p-6 font-sans">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-3xl font-bold text-gray-900">Events</h2>
//         <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
//           Create an event
//         </button>
//       </div>

//       {/* Your Events */}
//       <div className="mb-8">
//         <h3 className="text-lg font-semibold flex justify-between items-center">
//           Your events
//           <span className="text-blue-600 cursor-pointer text-sm hover:underline">Show all</span>
//         </h3>
//         <div className="flex space-x-4 overflow-x-auto mt-4">
//           {yourEvents.map((event) => (
//             <div key={event.id} className="flex items-center p-4 bg-white shadow-lg rounded-lg min-w-[280px] hover:shadow-xl transition">
//               <img src={event.image} alt={event.title} className="w-16 h-16 rounded-md object-cover" />
//               <div className="ml-4">
//                 <p className="font-medium text-sm text-gray-800">{event.title}</p>
//                 <p className="text-gray-500 text-xs">{event.date}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Recommended Events */}
//       <div>
//         <h3 className="text-xl font-bold mb-4">Recommended for you</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {recommendedEvents.map((event) => (
//             <div key={event.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition">
//               <img src={event.image} alt={event.title} className="w-full h-44 object-cover" />
//               <div className="p-5">
//                 <p className="font-semibold text-sm text-gray-900">{event.title}</p>
//                 <p className="text-gray-500 text-xs mt-1">{event.date}</p>
//                 <p className="text-gray-500 text-xs mb-4">{event.attendees}</p>
//                 <button className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
//                   View
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Events;



// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";

// const PagesList = () => {
//   const [pages, setPages] = useState([
//     { id: 1, name: "Work from Home / Remote Jobs", followers: "245,964", logo: "https://imgs.search.brave.com/iNSQnFynHKVXxBmPcZVO9n6qOsyuGwnNq0ozzczPchY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlwaXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAx/L0ltYWdlXzIwMjQx/MTA4XzE0MjgzMl82/MzQuanBn", following: true },
//     { id: 2, name: "Freshers Jobs", followers: "1,427,730", logo: "https://imgs.search.brave.com/iNSQnFynHKVXxBmPcZVO9n6qOsyuGwnNq0ozzczPchY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlwaXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAx/L0ltYWdlXzIwMjQx/MTA4XzE0MjgzMl82/MzQuanBn", following: true },
//     { id: 3, name: "Oil and Natural Gas Corporation Ltd", followers: "494,286", logo: "https://imgs.search.brave.com/iNSQnFynHKVXxBmPcZVO9n6qOsyuGwnNq0ozzczPchY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlwaXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAx/L0ltYWdlXzIwMjQx/MTA4XzE0MjgzMl82/MzQuanBn", following: true },
//     { id: 4, name: "Bharat Electronics Limited", followers: "72,348", logo: "", following: true },
//     { id: 5, name: "DRDO, Centre for Airborne Systems", followers: "113,822", logo: "https://imgs.search.brave.com/iNSQnFynHKVXxBmPcZVO9n6qOsyuGwnNq0ozzczPchY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlwaXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAx/L0ltYWdlXzIwMjQx/MTA4XzE0MjgzMl82/MzQuanBn", following: true },
//     { id: 6, name: "Blinkit", followers: "972,774", logo: "", following: true },
//     { id: 7, name: "Indian Startup News", followers: "530,911", logo: "https://imgs.search.brave.com/iNSQnFynHKVXxBmPcZVO9n6qOsyuGwnNq0ozzczPchY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmlwaXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI1LzAx/L0ltYWdlXzIwMjQx/MTA4XzE0MjgzMl82/MzQuanBn", following: true },
//   ]);

//   const [unfollowPage, setUnfollowPage] = useState(null); // Track which page to unfollow

//   // Open unfollow confirmation modal
//   const confirmUnfollow = (page) => {
//     setUnfollowPage(page);
//   };

//   // Unfollow function
//   const handleUnfollow = () => {
//     setPages(pages.map((p) => (p.id === unfollowPage.id ? { ...p, following: false } : p)));
//     setUnfollowPage(null); // Close modal
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg font-sans">
//       {/* Header with Dynamic Page Count */}
//       <h2 className="text-2xl font-bold text-gray-900 mb-4">{pages.length} Pages</h2>

//       {/* Pages List */}
//       <div className="divide-y">
//         {pages.map((page) => (
//           <div key={page.id} className="flex items-center justify-between py-4">
//             <div className="flex items-center space-x-4">
//               <img src={page.logo} alt={page.name} className="w-12 h-12 rounded-md object-cover" />
//               <div>
//                 <p className="font-medium text-gray-900">{page.name}</p>
//                 <p className="text-gray-500 text-sm">{page.followers} followers</p>
//               </div>
//             </div>
//             {page.following ? (
//               <button
//                 className="px-4 py-2 text-sm font-semibold border rounded-full text-gray-700 border-gray-400 hover:bg-gray-100 transition"
//                 onClick={() => confirmUnfollow(page)}
//               >
//                 Following
//               </button>
//             ) : (
//               <button
//                 className="px-4 py-2 text-sm font-semibold border rounded-full text-blue-600 border-blue-600 hover:bg-blue-50 transition"
//                 onClick={() => setPages(pages.map((p) => (p.id === page.id ? { ...p, following: true } : p)))}
//               >
//                 Follow
//               </button>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Unfollow Confirmation Modal */}
//       {unfollowPage && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
//           <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//             <p className="text-lg font-semibold mb-4">Unfollow {unfollowPage.name}?</p>
//             <p className="text-gray-600 mb-6">Are you sure you want to unfollow this page?</p>
//             <div className="flex justify-center space-x-4">
//               <button
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition"
//                 onClick={() => setUnfollowPage(null)}
//               >
//                 Cancel
//               </button>
//               <button
//                 className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
//                 onClick={handleUnfollow}
//               >
//                 Unfollow
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PagesList;



// // eslint-disable-next-line no-unused-vars
// import React, { useState, useRef, useEffect } from "react";
// import { HiOutlineDotsVertical } from "react-icons/hi"; // Importing Dots Icon

// const NewslettersList = () => {
//   // eslint-disable-next-line no-unused-vars
//   const [newsletters, setNewsletters] = useState([
//     { id: 1, title: "Timechain Chronicles", desc: "Your window into blockchain.", logo: "https://via.placeholder.com/50", details: "Latest updates on decentralized finance and NFTs." },
//     { id: 2, title: "Energy to the World", desc: "Latest innovations in energy.", logo: "https://via.placeholder.com/50", details: "Insights into renewable energy." },
//     { id: 3, title: "Appinventiv Weekly", desc: "Work-culture and technology updates.", logo: "https://via.placeholder.com/50", details: "Inside stories of tech projects and hiring trends." },
//   ]);

//   const [menuOpen, setMenuOpen] = useState(null);
//   const [expanded, setExpanded] = useState(null);
//   const menuRef = useRef(null);

//   // Close menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(null);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   // Copy link function
//   const handleCopy = (title) => {
//     navigator.clipboard.writeText(`https://linkedin.com/newsletter/${title.replace(/\s+/g, "-").toLowerCase()}`);
//     alert("Copied to clipboard!");
//     setMenuOpen(null);
//   };

//   // Toggle expand/collapse details
//   const toggleExpand = (id) => {
//     setExpanded(expanded === id ? null : id);
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg font-sans">
//       {/* Header */}
//       <h2 className="text-2xl font-bold text-gray-900 mb-2">Newsletters</h2>
//       <p className="text-gray-600 text-sm mb-4">{newsletters.length} newsletters</p>

//       {/* Newsletter List */}
//       <div className="divide-y">
//         {newsletters.map((news) => (
//           <div key={news.id} className="py-4">
//             {/* Main Row */}
//             <div className="flex items-center justify-between relative">
//               <div className="flex items-center space-x-4 cursor-pointer" onClick={() => toggleExpand(news.id)}>
//                 <img src={news.logo} alt={news.title} className="w-12 h-12 rounded-md object-cover" />
//                 <div>
//                   <p className="font-medium text-gray-900">{news.title}</p>
//                   <p className="text-gray-500 text-sm">{news.desc}</p>
//                 </div>
//               </div>

//               {/* Three-Dots Button */}
//               <button 
//                 onClick={() => setMenuOpen(menuOpen === news.id ? null : news.id)} 
//                 className="text-gray-600 hover:text-gray-900 p-2 rounded-full hover:bg-gray-200 transition duration-300"
//               >
//                 <HiOutlineDotsVertical size={20} />
//               </button>

//               {/* Dropdown Menu */}
//               {menuOpen === news.id && (
//                 <div ref={menuRef} className="absolute right-0 mt-2 bg-white border shadow-lg rounded-md p-2 w-32 z-10 animate-fadeIn">
//                   <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => alert("Share clicked!")}>
//                     Share
//                   </button>
//                   <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => handleCopy(news.title)}>
//                     Copy Link
//                   </button>
//                 </div>
//               )}
//             </div>

//             {/* Expanded Details */}
//             {expanded === news.id && (
//               <div className="mt-3 bg-gray-100 p-4 rounded-md text-gray-700">
//                 <p className="text-sm">{news.details}</p>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewslettersList;


// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";

// const contactsData = [
//   { id: 1, name: "Abhishek Sharma", emoji: "😲😲", date: "4/8/2023" },
//   { id: 2, name: "Shivam", emoji: "🚩🚩", date: "4/8/2023" },
//   { id: 3, name: "Abhisek Bhai Mbbs", emoji: "", date: "4/8/2023" },
//   { id: 4, name: "Chandhras Ji", emoji: "", date: "4/8/2023" },
//   { id: 5, name: "Dharmendr Bhai", emoji: "🚩", date: "4/8/2023" },
// ];

// const ContactsList = () => {
//   const [contacts, setContacts] = useState(contactsData);
//   const [search, setSearch] = useState("");
//   const [sortBy, setSortBy] = useState("Recently added");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [sortDropdown, setSortDropdown] = useState(false);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (!event.target.closest(".dropdown")) {
//         setDropdownOpen(false);
//         setSortDropdown(false);
//       }
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   // Filter contacts based on search input
//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(search.toLowerCase())
//   );

//   // Sort contacts
//   useEffect(() => {
//     let sortedContacts = [...filteredContacts];
//     if (sortBy === "Alphabetical") {
//       sortedContacts.sort((a, b) => a.name.localeCompare(b.name));
//     }
//     setContacts(sortedContacts);
//   }, [sortBy, search]);

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//         <h2 className="text-2xl font-semibold text-gray-800">Saved Contacts</h2>

//         {/* Dropdown */}
//         <div className="relative mt-4 md:mt-0 dropdown">
//           <button
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             className="bg-blue-600 text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition"
//           >
//             Phone contacts <IoIosArrowDown />
//           </button>

//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-44 py-2">
//               <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
//                 All Contacts
//               </button>
//               <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
//                 SIM Contacts
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Search & Sort Section */}
//       <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
//         <p className="text-gray-500">{contacts.length} Imported Contacts</p>

//         <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
//           {/* Sort Dropdown */}
//           <div className="relative dropdown">
//             <button
//               onClick={() => setSortDropdown(!sortDropdown)}
//               className="text-gray-700 flex items-center gap-1 hover:text-gray-900 bg-gray-100 px-3 py-2 rounded-lg"
//             >
//               Sort by: <span className="font-semibold">{sortBy}</span>
//               <IoIosArrowDown />
//             </button>

//             {sortDropdown && (
//               <div className="absolute right-0 mt-2 bg-white shadow-md rounded-lg w-40 py-2">
//                 <button
//                   onClick={() => setSortBy("Recently added")}
//                   className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Recently added
//                 </button>
//                 <button
//                   onClick={() => setSortBy("Alphabetical")}
//                   className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Alphabetical
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Search Input */}
//           <div className="relative w-full sm:w-72">
//             <input
//               type="text"
//               placeholder="Search by name or company"
//               className="border border-gray-300 px-4 py-2 rounded-lg pl-10 w-full focus:ring-2 focus:ring-blue-400 shadow-sm"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//             <FaSearch className="absolute left-3 top-3 text-gray-500" />
//           </div>
//         </div>
//       </div>

//       {/* Contact List */}
//       <div className="divide-y">
//         {filteredContacts.map((contact) => (
//           <div
//             key={contact.id}
//             className="py-4 flex items-center space-x-4 hover:bg-gray-100 px-4 rounded-lg transition duration-200"
//           >
//             {/* Avatar */}
//             <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 font-bold text-xl">
//               {contact.name.charAt(0)}
//             </div>

//             {/* Contact Info */}
//             <div>
//               <p className="text-gray-900 font-medium text-lg">
//                 {contact.name} {contact.emoji}
//               </p>
//               <p className="text-gray-500 text-sm">Created: {contact.date}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ContactsList



// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";

// const invitationsData = {
//   received: {
//     people: [
//       { id: 1, name: "Khushi Mansuri", role: "Intern @Nexan Tech | Web Developer | WordPress", time: "Sent 3 days ago", image: "https://images.unsplash.com/photo-1739236131036-cad5287beda0?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//       { id: 2, name: "Dinesh Vishvakarma", role: "Technology Aspirant | 2nd Year B.Tech Student", time: "Sent 3 days ago", image: "https://images.unsplash.com/photo-1739236131036-cad5287beda0?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     ],
//     pages: [],
//     events: [],
//   },
//   sent: {
//     people: [
//       { id: 3, name: "Satish Shukla", role: "Student || Diploma in Computer Science || Web Development", time: "Sent 3 days ago", image: "https://images.unsplash.com/photo-1739236131036-cad5287beda0?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//       { id: 4, name: "Rounak Mittal", role: "Student and working professional", time: "Sent 3 days ago", image: "https://images.unsplash.com/photo-1739236131036-cad5287beda0?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
//     ],
//     pages: [],
//     events: [],
//   },
// };

// const Invitations = () => {
//   const [activeTab, setActiveTab] = useState("sent");
//   const [activeCategory, setActiveCategory] = useState("people");

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       {/* Header Tabs */}
//       <div className="flex border-b pb-2 mb-4">
//         <button
//           className={`mr-4 px-4 py-2 ${activeTab === "received" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"}`}
//           onClick={() => setActiveTab("received")}
//         >
//           Received
//         </button>
//         <button
//           className={`px-4 py-2 ${activeTab === "sent" ? "text-green-600 border-b-2 border-green-600" : "text-gray-500"}`}
//           onClick={() => setActiveTab("sent")}
//         >
//           Sent
//         </button>
//       </div>

//       {/* Category Filter */}
//       <div className="flex gap-4 mb-4">
//         {Object.keys(invitationsData[activeTab]).map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-full ${activeCategory === category ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"}`}
//             onClick={() => setActiveCategory(category)}
//           >
//             {category.charAt(0).toUpperCase() + category.slice(1)} ({invitationsData[activeTab][category].length})
//           </button>
//         ))}
//       </div>

//       {/* Invitation List */}
//       <div>
//         {invitationsData[activeTab][activeCategory].length > 0 ? (
//           invitationsData[activeTab][activeCategory].map((invite) => (
//             <div key={invite.id} className="flex items-center justify-between p-4 border-b">
//               <div className="flex items-center gap-4">
//                 <img src={invite.image} alt={invite.name} className="w-12 h-12 rounded-full" />
//                 <div>
//                   <h3 className="font-semibold">{invite.name}</h3>
//                   <p className="text-sm text-gray-500">{invite.role}</p>
//                   <p className="text-xs text-gray-400">{invite.time}</p>
//                 </div>
//               </div>
//               <button className="text-red-500 font-semibold">Withdraw</button>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500 text-center py-6">No invitations available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Invitations;



// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";

// const usersData = [
//   {
//     id: 1,
//     name: "Gunjan Madaan",
//     title: "SDE@Microsoft | Ex-Paytm | 236K+ on LinkedIn",
//     followers: "Devansh, Abhishek Kumar and 196 others you know followed",
//     image: "https://images.unsplash.com/photo-1601233742657-3e2be84b0023?q=80&w=500",
//     background: "https://images.unsplash.com/photo-1738914401186-618afe776956?q=80&w=500"
//   },
//   {
//     id: 2,
//     name: "Kumar K",
//     title: "SDE @ Amazon(Prv) | All India Rank 12 in Google CodeJam'21",
//     followers: "Abhishek, Anupam and 62 others you know followed",
//     image: "https://images.unsplash.com/photo-1601233742657-3e2be84b0023?q=80&w=500",
//     background: "https://images.unsplash.com/photo-1738914401186-618afe776956?q=80&w=500"
//   },
// ];

// const FollowSuggestions = () => {
//   const [users, setUsers] = useState(usersData);
//   const [following, setFollowing] = useState({});

//   const toggleFollow = (id) => {
//     setFollowing((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   const removeUser = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-xl">
//       <h2 className="text-xl font-semibold mb-4 text-gray-800">
//         People who are in the Technology, Information, and Internet industry also follow these people
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {users.map((user) => (
//           <div
//             key={user.id}
//             className="relative bg-white rounded-xl shadow-md overflow-hidden p-4 hover:shadow-xl transition"
//           >
//             {/* Background Image */}
//             <div className="relative h-24 w-full">
//               <img src={user.background} alt="Background" className="h-full w-full object-cover rounded-lg opacity-80" />
//               <button
//                 className="absolute top-2 right-2 bg-gray-800 text-white rounded-full p-1 hover:bg-gray-600"
//                 onClick={() => removeUser(user.id)}
//               >
//                 ✕
//               </button>
//             </div>

//             {/* Profile Image */}
//             <div className="flex items-center mt-4 gap-3">
//               <img src={user.image} alt={user.name} className="w-12 h-12 rounded-full border-2 border-white" />
//               <div>
//                 <h3 className="font-semibold text-lg text-gray-900">{user.name}</h3>
//                 <p className="text-sm text-gray-600">{user.title}</p>
//               </div>
//             </div>

//             {/* Followers Info */}
//             <p className="text-xs text-gray-500 mt-2">{user.followers}</p>

//             {/* Follow Button */}
//             <button
//               className={`w-full mt-3 py-2 rounded-lg font-semibold transition ${following[user.id] ? "bg-gray-300 text-black" : "bg-blue-600 text-white hover:bg-blue-700"}`}
//               onClick={() => toggleFollow(user.id)}
//             >
//               {following[user.id] ? "Unfollow" : "+ Follow"}
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FollowSuggestions;


// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";

// const languages = [
//   "English (English)",
//   "हिन्दी (Hindi)",
//   "Español (Spanish)",
//   "Français (French)",
//   "Deutsch (German)",
//   "中文 (Chinese)",
//   "日本語 (Japanese)"
// ];

// const LanguageSelector = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-200 mt-10">
//       <button
//         className="flex items-center gap-2 text-gray-800 hover:text-blue-600 font-medium"
//         onClick={() => console.log("Back clicked")}
//       >
//         ← Back
//       </button>
//       <h2 className="text-2xl font-semibold mt-4 text-gray-900">Language</h2>
//       <p className="text-gray-600 mt-1">Select the language you use on LinkedIn</p>
      
//       <div className="relative mt-4">
//         <button
//           className="w-full py-3 px-4 border rounded-lg bg-gray-100 text-gray-800 flex justify-between items-center hover:bg-gray-200"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {selectedLanguage} 
//           <span className="text-gray-500">▼</span>
//         </button>
//         {isOpen && (
//           <ul className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg overflow-hidden z-10">
//             {languages.map((lang) => (
//               <li
//                 key={lang}
//                 className="px-4 py-2 cursor-pointer hover:bg-blue-100 text-gray-800"
//                 onClick={() => {
//                   setSelectedLanguage(lang);
//                   setIsOpen(false);
//                 }}
//               >
//                 {lang}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
      
//       <p className="text-sm text-gray-500 mt-4">
//         Let us know which language you’re most comfortable using on LinkedIn. You can change it back at any time. 
//         <span className="text-blue-600 cursor-pointer hover:underline">Learn more</span>
//       </p>
//     </div>
//   );
// };

// export default LanguageSelector;




// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";

// const menuItems = [
//   { id: "accountPreferences", label: "Account preferences" },
//   { id: "signInSecurity", label: "Sign in & security" },
//   { id: "visibility", label: "Visibility" },
//   { id: "dataPrivacy", label: "Data privacy" },
//   { id: "advertisingData", label: "Advertising data" },
//   { id: "notifications", label: "Notifications" },
// ];

// const accountPreferencesData = {
//   main: [
//     { id: "profileInfo", label: "Profile information" },
//     { id: "display", label: "Display" },
//     { id: "generalPreferences", label: "General preferences" },
//   ],
//   profileInfo: [
//     { id: "nameLocation", label: "Name, location, and industry" },
//     { id: "personalInfo", label: "Personal demographic information" },
//     { id: "verifications", label: "Verifications" },
//   ],
// };

// const signInSecurityData = {
//   main: [
//     { id: "email", label: "Email addresses" },
//     { id: "phone", label: "Phone numbers" },
//     { id: "password", label: "Change password" },
//     { id: "passkeys", label: "Passkeys" },
//     { id: "whereSignedIn", label: "Where you're signed in" },
//     { id: "devices", label: "Devices that remember your password" },
//     { id: "twoStep", label: "Two-step verification" },
//   ],
// };

// const details = {
//   email: <p className="text-gray-700">Primary Email: sharmahoney89176@gmail.com</p>,
//   phone: <p className="text-gray-700">No phone number added</p>,
//   password: <p className="text-gray-700">Last changed: 3 months ago</p>,
//   passkeys: <p className="text-gray-700">No passkeys set up</p>,
//   whereSignedIn: <p className="text-gray-700">Devices: Windows, Mobile</p>,
//   devices: <p className="text-gray-700">Remembered devices: 2</p>,
//   twoStep: <p className="text-gray-700">Currently OFF</p>,

//   nameLocation: <p className="text-gray-700">Name: Honey Sharma | Location: India</p>,
//   personalInfo: <p className="text-gray-700">Gender: Male | Age: 22</p>,
//   verifications: <p className="text-gray-700">Verified: Email, LinkedIn</p>,
// };

// const SettingsPage = () => {
//   const [selectedMenu, setSelectedMenu] = useState("accountPreferences");
//   const [subMenu, setSubMenu] = useState(null);
//   const [detailsContent, setDetailsContent] = useState(null);

//   const renderContent = () => {
//     if (detailsContent) return detailsContent;

//     switch (selectedMenu) {
//       case "accountPreferences":
//         return (
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Account Preferences</h2>
//             {accountPreferencesData.main.map((item) => (
//               <div
//                 key={item.id}
//                 onClick={() => setSubMenu(item.id)}
//                 className="border border-gray-300 rounded-lg p-3 mb-3 cursor-pointer hover:bg-gray-100"
//               >
//                 {item.label}
//               </div>
//             ))}
//           </div>
//         );

//       case "signInSecurity":
//         return (
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Account Access</h2>
//             {signInSecurityData.main.map((item) => (
//               <div
//                 key={item.id}
//                 onClick={() => setDetailsContent(details[item.id])}
//                 className="border border-gray-300 rounded-lg p-3 mb-3 cursor-pointer hover:bg-gray-100"
//               >
//                 {item.label}
//               </div>
//             ))}
//           </div>
//         );

//       default:
//         return <p className="text-gray-500">Coming soon...</p>;
//     }
//   };

//   const renderSubMenu = () => {
//     if (!subMenu) return renderContent();

//     return (
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <h2 className="text-xl font-semibold mb-4">{subMenu.replace(/([A-Z])/g, " $1")}</h2>
//         {accountPreferencesData[subMenu]?.map((item) => (
//           <div
//             key={item.id}
//             onClick={() => setDetailsContent(details[item.id])}
//             className="border border-gray-300 rounded-lg p-3 mb-3 cursor-pointer hover:bg-gray-100"
//           >
//             {item.label}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-white p-6 shadow-lg">
//         <h1 className="text-2xl font-semibold mb-6">⚙️ Settings</h1>
//         <ul className="space-y-4">
//           {menuItems.map((item) => (
//             <li
//               key={item.id}
//               onClick={() => {
//                 setSelectedMenu(item.id);
//                 setSubMenu(null);
//                 setDetailsContent(null);
//               }}
//               className={`cursor-pointer p-2 rounded-lg ${
//                 selectedMenu === item.id
//                   ? "bg-green-100 text-green-600 font-semibold"
//                   : "text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {item.label}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Content */}
//       <div className="flex-1 p-6">{renderSubMenu()}</div>
//     </div>
//   );
// };

// export default SettingsPage;


// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";

// const menuItems = [
//   { id: "accountPreferences", label: "Account preferences" },
//   { id: "signInSecurity", label: "Sign in & security" },
//   { id: "visibility", label: "Visibility" },
//   { id: "dataPrivacy", label: "Data privacy" },
//   { id: "advertisingData", label: "Advertising data" },
//   { id: "notifications", label: "Notifications" },
// ];

// // Account Preferences Data
// const accountPreferencesData = {
//   main: [
//     { id: "language", label: "Site preferences" },
//     { id: "feed", label: "Feed preferences" },
//     { id: "subscriptions", label: "Subscription & payments" },
//     { id: "syncContacts", label: "Syncing contacts & calendar" },
//   ],
// };

// // Sign-in & Security Data
// const signInSecurityData = {
//   main: [
//     { id: "email", label: "Email addresses", detail: "sharmahoney89176@gmail.com" },
//     { id: "phone", label: "Phone numbers" },
//     { id: "password", label: "Change password" },
//     { id: "passkeys", label: "Passkeys" },
//     { id: "whereSignedIn", label: "Where you're signed in" },
//     { id: "rememberDevices", label: "Devices that remember your password" },
//     { id: "twoStep", label: "Two-step verification", detail: "Off" },
//   ],
// };

// // Visibility Data
// const visibilityData = {
//   main: [
//     { id: "profileViewing", label: "Profile viewing options", detail: "Your name and headline" },
//     { id: "pageVisit", label: "Page visit visibility", detail: "On" },
//     { id: "publicProfile", label: "Edit your public profile" },
//     { id: "emailVisibility", label: "Who can see or download your email address" },
//     { id: "connectionsVisibility", label: "Who can see your connections", detail: "On" },
//     { id: "followVisibility", label: "Who can see members you follow", detail: "Anyone on LinkedIn" },
//     { id: "lastNameVisibility", label: "Who can see your last name" },
//     { id: "organizations", label: "Representing your organizations and interests", detail: "On" },
//     { id: "dataExport", label: "Page owners exporting your data", detail: "Off" },
//     { id: "profileDiscovery", label: "Profile discovery and visibility off LinkedIn" },
//     { id: "emailDiscovery", label: "Profile discovery using email address", detail: "Anyone" },
//   ],
// };

// // Details for Clickable Items
// const details = {
//   email: <p className="text-gray-700">Your email is: sharmahoney89176@gmail.com</p>,
//   password: <p className="text-gray-700">Change your password for security</p>,
//   twoStep: <p className="text-gray-700">Two-step verification is Off</p>,
//   profileViewing: <p className="text-gray-700">You appear as: Name & Headline</p>,
//   pageVisit: <p className="text-gray-700">People can see when you visit</p>,
//   publicProfile: <p className="text-gray-700">Your profile is public</p>,
//   emailVisibility: <p className="text-gray-700">Only connections can see your email</p>,
//   connectionsVisibility: <p className="text-gray-700">Your connections list is visible</p>,
//   followVisibility: <p className="text-gray-700">People can see who you follow</p>,
//   lastNameVisibility: <p className="text-gray-700">Your last name is visible</p>,
//   organizations: <p className="text-gray-700">You represent these organizations</p>,
//   dataExport: <p className="text-gray-700">Page owners cannot export your data</p>,
//   profileDiscovery: <p className="text-gray-700">Your profile is discoverable</p>,
//   emailDiscovery: <p className="text-gray-700">Your email is used for discovery</p>,
// };

// const SettingsPage = () => {
//   const [selectedMenu, setSelectedMenu] = useState("accountPreferences");
//   const [detailsContent, setDetailsContent] = useState(null);

//   const renderContent = () => {
//     if (detailsContent) return detailsContent;

//     switch (selectedMenu) {
//       case "accountPreferences":
//         return (
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Account Preferences</h2>
//             {accountPreferencesData.main.map((item) => (
//               <div
//                 key={item.id}
//                 className="border border-gray-300 rounded-lg p-3 mb-3 cursor-pointer hover:bg-gray-100"
//               >
//                 {item.label}
//               </div>
//             ))}
//           </div>
//         );

//       case "signInSecurity":
//         return (
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Sign in & Security</h2>
//             {signInSecurityData.main.map((item) => (
//               <div
//                 key={item.id}
//                 onClick={() => setDetailsContent(details[item.id])}
//                 className="border border-gray-300 rounded-lg p-3 mb-3 cursor-pointer hover:bg-gray-100 flex justify-between"
//               >
//                 <span>{item.label}</span>
//                 {item.detail && <span className="text-gray-500">{item.detail}</span>}
//               </div>
//             ))}
//           </div>
//         );

//       case "visibility":
//         return (
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Visibility of Your Profile & Network</h2>
//             {visibilityData.main.map((item) => (
//               <div
//                 key={item.id}
//                 onClick={() => setDetailsContent(details[item.id])}
//                 className="border border-gray-300 rounded-lg p-3 mb-3 cursor-pointer hover:bg-gray-100 flex justify-between"
//               >
//                 <span>{item.label}</span>
//                 {item.detail && <span className="text-gray-500">{item.detail}</span>}
//               </div>
//             ))}
//           </div>
//         );

//       default:
//         return <p className="text-gray-500">Coming soon...</p>;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-white p-6 shadow-lg">
//         <h1 className="text-2xl font-semibold mb-6">⚙️ Settings</h1>
//         <ul className="space-y-4">
//           {menuItems.map((item) => (
//             <li
//               key={item.id}
//               onClick={() => {
//                 setSelectedMenu(item.id);
//                 setDetailsContent(null);
//               }}
//               className={`cursor-pointer p-2 rounded-lg ${
//                 selectedMenu === item.id
//                   ? "bg-green-100 text-green-600 font-semibold"
//                   : "text-gray-700 hover:bg-gray-200"
//               }`}
//             >
//               {item.label}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Content */}
//       <div className="flex-1 p-6">{renderContent()}</div>
//     </div>
//   );
// };

// export default SettingsPage;


// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";

// const menuItems = [
//   { id: "accountPreferences", label: "Account preferences" },
//   { id: "signInSecurity", label: "Sign in & security" },
//   { id: "visibility", label: "Visibility" },
//   { id: "dataPrivacy", label: "Data privacy" },
//   { id: "advertisingData", label: "Advertising data" },
//   { id: "notifications", label: "Notifications" },
// ];

// // Data Privacy Data
// const dataPrivacyData = {
//   howLinkedInUsesYourData: [
//     { id: "manageData", label: "Manage your data and activity" },
//     { id: "copyData", label: "Get a copy of your data" },
//     { id: "searchHistory", label: "Search history" },
//     { id: "demographicInfo", label: "Personal demographic information" },
//     { id: "researchData", label: "Social, economic, and workplace research", detail: "On" },
//     { id: "aiData", label: "Data for Generative AI Improvement", detail: "On" },
//   ],
//   whoCanReachYou: [
//     { id: "connectInvites", label: "Invitations to connect" },
//     { id: "networkInvites", label: "Invitations from your network" },
//     { id: "messages", label: "Messages" },
//     { id: "researchInvites", label: "Research invites", detail: "On" },
//   ],
//   yourLinkedInActivity: [
//     { id: "profileViews", label: "Who viewed your profile" },
//     { id: "postInteractions", label: "Interactions with posts" },
//     { id: "adPreferences", label: "Ad preferences" },
//   ],
//   permissionsPreferences: [
//     { id: "thirdPartyAccess", label: "Third-party app access" },
//     { id: "emailPreferences", label: "Email preferences" },
//     { id: "notificationSettings", label: "Notification settings" },
//   ],
// };

// const SettingsPage = () => {
//   const [selectedMenu, setSelectedMenu] = useState("accountPreferences");

//   const renderContent = () => {
//     switch (selectedMenu) {
//       case "dataPrivacy":
//         return (
//           <div className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold mb-4">Data Privacy</h2>
            
//             {/* How LinkedIn Uses Your Data */}
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-2">How LinkedIn Uses Your Data</h3>
//               {dataPrivacyData.howLinkedInUsesYourData.map((item) => (
//                 <div key={item.id} className="border border-gray-300 rounded-lg p-3 mb-3 hover:bg-gray-100 flex justify-between">
//                   <span>{item.label}</span>
//                   {item.detail && <span className="text-gray-500">{item.detail}</span>}
//                 </div>
//               ))}
//             </div>

//             {/* Who Can Reach You */}
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-2">Who Can Reach You</h3>
//               {dataPrivacyData.whoCanReachYou.map((item) => (
//                 <div key={item.id} className="border border-gray-300 rounded-lg p-3 mb-3 hover:bg-gray-100 flex justify-between">
//                   <span>{item.label}</span>
//                   {item.detail && <span className="text-gray-500">{item.detail}</span>}
//                 </div>
//               ))}
//             </div>

//             {/* Your LinkedIn Activity */}
//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-2">Your LinkedIn Activity</h3>
//               {dataPrivacyData.yourLinkedInActivity.map((item) => (
//                 <div key={item.id} className="border border-gray-300 rounded-lg p-3 mb-3 hover:bg-gray-100 flex justify-between">
//                   <span>{item.label}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Permissions & Preferences */}
//             <div>
//               <h3 className="text-lg font-semibold mb-2">Permissions & Preferences</h3>
//               {dataPrivacyData.permissionsPreferences.map((item) => (
//                 <div key={item.id} className="border border-gray-300 rounded-lg p-3 mb-3 hover:bg-gray-100 flex justify-between">
//                   <span>{item.label}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       default:
//         return <p className="text-gray-500">Coming soon...</p>;
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-white p-6 shadow-lg">
//         <h1 className="text-2xl font-semibold mb-6">⚙️ Settings</h1>
//         <ul className="space-y-4">
//           {menuItems.map((item) => (
//             <li
//               key={item.id}
//               onClick={() => setSelectedMenu(item.id)}
//               className={`cursor-pointer p-2 rounded-lg ${selectedMenu === item.id ? "bg-blue-100 text-blue-600 font-semibold" : "text-gray-700 hover:bg-gray-200"}`}
//             >
//               {item.label}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Right Content */}
//       <div className="flex-1 p-6">{renderContent()}</div>
//     </div>
//   );
// };

// export default SettingsPage;


// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const ProfileData = () => {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen flex flex-col gap-6">
//       {/* Profile Data Section */}
//       <div className="bg-white p-4 rounded-2xl shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Profile data</h2>
//         <ul className="space-y-3">
//           {[
//             "Connections",
//             "Companies you follow",
//             "Groups",
//             "Education and Skills",
//             "Job Information",
//             "Employer",
//             "Customized display format",
//             "Profile Location",
//           ].map((item, index) => (
//             <li
//               key={index}
//               className="flex justify-between items-center py-2 border-b last:border-b-0"
//             >
//               <span>{item}</span>
//               <span className="text-blue-500 cursor-pointer">On →</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Activity and Inferred Data Section */}
//       <div className="bg-white p-4 rounded-2xl shadow-md">
//         <h2 className="text-lg font-semibold mb-4">Activity and inferred data</h2>
//         <ul className="space-y-3">
//           {["Inferred city location", "Interests and traits", "Age range"].map(
//             (item, index) => (
//               <li
//                 key={index}
//                 className="flex justify-between items-center py-2 border-b last:border-b-0"
//               >
//                 <span>{item}</span>
//                 <span className="text-blue-500 cursor-pointer">On →</span>
//               </li>
//             )
//           )}
//         </ul>
//       </div>

//       {/* Additional Sections */}
//       {["Settings & Privacy", "Security & Login", "Notifications"].map(
//         (section, index) => (
//           <div key={index} className="bg-white p-4 rounded-2xl shadow-md">
//             <h2 className="text-lg font-semibold mb-4">{section}</h2>
//             <ul className="space-y-3">
//               {[
//                 "Option 1",
//                 "Option 2",
//                 "Option 3",
//                 "Option 4",
//               ].map((item, idx) => (
//                 <li
//                   key={idx}
//                   className="flex justify-between items-center py-2 border-b last:border-b-0"
//                 >
//                   <span>{item}</span>
//                   <span className="text-blue-500 cursor-pointer">On →</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default ProfileData;



// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import { FaChevronRight } from "react-icons/fa";

// const NotificationSettings = () => {
//   const notificationOptions = [
//     "Searching for a job",
//     "Hiring someone",
//     "Connecting with others",
//     "Network catch-up updates",
//     "Posting and commenting",
//     "Messaging",
//     "Groups",
//     "Pages",
//     "Attending events",
//     "News and reports",
//     "Updating your profile",
//     "Verifications",
//     "Games",
//   ];

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Notifications you receive</h2>
//       <div className="divide-y divide-gray-300">
//         {notificationOptions.map((option, index) => (
//           <div
//             key={index}
//             className="flex justify-between items-center py-4 cursor-pointer hover:bg-gray-100 px-4 rounded-lg"
//           >
//             <span className="text-lg">{option}</span>
//             <FaChevronRight className="text-gray-500" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NotificationSettings;

// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import { FaChevronRight } from "react-icons/fa";

// const Sidebar = () => {
//   const menuItems = [
//     "Account Preferences",
//     "Sign in & Security",
//     "Visibility",
//     "Data Privacy",
//     "Advertising Data",
//     "Notifications You Receive"
//   ];

//   return (
//     <aside className="w-64 h-screen bg-gray-100 p-4 border-r">
//       <h2 className="text-xl font-semibold mb-4">Settings</h2>
//       <nav>
//         <ul>
//           {menuItems.map((item, index) => (
//             <li key={index} className="mb-2">
//               <NavLink
//                 to={`/${item.toLowerCase().replace(/ /g, "-")}`}
//                 className={({ isActive }) =>
//                   `block p-2 rounded-lg ${
//                     isActive ? "bg-blue-500 text-white" : "hover:bg-gray-200"
//                   }`
//                 }
//               >
//                 {item}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// const SettingsPage = ({ title, options }) => {
//   return (
//     <div className="p-6 w-full">
//       <h2 className="text-2xl font-bold mb-4">{title}</h2>
//       <div className="bg-white shadow-md rounded-lg p-4">
//         {options.map((option, index) => (
//           <div
//             key={index}
//             className="flex justify-between items-center border-b py-3 last:border-b-0"
//           >
//             <span>{option}</span>
//             <FaChevronRight className="text-gray-500" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const Settings = () => {
//   const pages = {
//     "account-preferences": ["Language", "Content Preferences", "Autoplay Videos"],
//     "sign-in-security": ["Change Password", "Two-Step Verification", "Devices & Activity"],
//     "visibility": ["Profile Viewing Options", "Active Status", "Who Can See Your Email"],
//     "data-privacy": ["Profile Data", "Ad Preferences", "Download Your Data"],
//     "advertising-data": ["Ad Interests", "Ad Interactions", "Third-party Data"],
//     "notifications-you-receive": [
//       "Searching for a Job",
//       "Hiring Someone",
//       "Connecting with Others",
//       "Network Catch-up Updates",
//       "Posting and Commenting",
//       "Messaging",
//       "Groups",
//       "Pages",
//       "Attending Events",
//       "News and Reports",
//       "Updating Your Profile",
//       "Verifications",
//       "Games"
//     ]
//   };

//   // eslint-disable-next-line no-unused-vars
//   const [selectedPage, setSelectedPage] = useState("account-preferences");

//   return (
//     <div className="flex h-screen bg-gray-50">
//       <Sidebar />
//       <SettingsPage title={selectedPage.replace(/-/g, " ")} options={pages[selectedPage]} />
//     </div>
//   );
// };

// export default Settings;




// import { useState } from "react";

// export default function EditIntro() {
//   const [formData, setFormData] = useState({
//     firstName: "Honey",
//     lastName: "Sharma",
//     additionalName: "",
//     country: "India",
//     city: "Bhopal, Madhya Pradesh",
//     website: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   return (
//     <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
//       <h2 className="text-xl font-semibold mb-4">Edit intro</h2>
//       <div className="bg-gray-100 p-4 rounded-lg mb-4">
//         <h3 className="font-medium">Enhance your profile with Premium</h3>
//         <p className="text-sm">Feature profile sections higher, add a custom button, get AI writing assistance and much more.</p>
//         <button className="mt-2 px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg">Try Premium for ₹0</button>
//       </div>
      
//       <div className="mb-4">
//         <label className="block text-sm font-medium">First name*</label>
//         <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-2 border rounded-lg" />
//       </div>
      
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Last name*</label>
//         <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-2 border rounded-lg" />
//       </div>
      
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Additional name</label>
//         <input type="text" name="additionalName" value={formData.additionalName} onChange={handleChange} className="w-full p-2 border rounded-lg" />
//       </div>
      
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Country/Region*</label>
//         <input type="text" name="country" value={formData.country} onChange={handleChange} className="w-full p-2 border rounded-lg" />
//       </div>
      
//       <div className="mb-4">
//         <label className="block text-sm font-medium">City</label>
//         <input type="text" name="city" value={formData.city} onChange={handleChange} className="w-full p-2 border rounded-lg" />
//       </div>
      
//       <div className="mb-4">
//         <label className="block text-sm font-medium">Website</label>
//         <input type="text" name="website" value={formData.website} onChange={handleChange} className="w-full p-2 border rounded-lg" />
//       </div>
      
//       <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg w-full">Save</button>
//     </div>
//   );
// }


// export default function ConnectionsCard() {
//     return (
//       <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-300">
//         {/* Back Button */}
//         <div className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-gray-800">
//           <span className="text-lg">←</span>
//           <span className="text-sm font-medium">Back</span>
//         </div>
  
//         {/* Title */}
//         <h2 className="text-xl font-semibold text-gray-900 mt-4">Connections</h2>
  
//         {/* Description */}
//         <p className="text-gray-700 text-sm mt-2">
//           Can we use information from your 1st-degree connections to show you more tailored ads on LinkedIn?
//         </p>
  
//         {/* Toggle Switch Section */}
//         <div className="flex justify-between items-center mt-6">
//           <span className="text-gray-900 font-medium">Use connections data</span>
//           <label className="relative inline-flex items-center cursor-pointer">
//             <input type="checkbox" className="sr-only peer" defaultChecked />
//             <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer-checked:bg-green-600 peer-checked:after:translate-x-5 transition-all after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
//             <span className="ml-2 text-gray-700">On</span>
//           </label>
//         </div>
  
//         {/* Additional Information */}
//         <p className="text-gray-600 text-xs mt-4">
//           This setting also applies to <span className="font-semibold">Ads outside of LinkedIn</span> if that setting is turned on.
//         </p>
//         <p className="text-gray-600 text-xs mt-2">
//           Turning this off may make your ads less tailored, but won’t reduce the number of ads you see. Changes typically take up to 72 hours to take effect.{" "}
//           <span className="text-blue-600 cursor-pointer hover:underline">Learn more</span>
//         </p>
//       </div>
//     );
//   }
  




// export default function ManageSyncedSources() {
//     return (
//       <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
//         {/* Title & Description */}
//         <h2 className="text-2xl font-semibold text-gray-900">Manage Synced Sources</h2>
//         <p className="text-gray-600 text-sm mt-2">
//           To learn more about our privacy and security practices, visit our{" "}
//           <span className="text-blue-600 cursor-pointer hover:underline font-medium">
//             Privacy Policy
//           </span>{" "}
//           page.
//         </p>
  
//         {/* Contacts Section */}
//         <div className="bg-white shadow-lg rounded-xl border mt-6">
//           <div className="flex justify-between items-center px-5 py-4 border-b">
//             <h3 className="text-lg font-semibold text-gray-900">Contacts</h3>
//             <button className="text-red-500 hover:text-red-700 text-sm font-medium">
//               Remove all
//             </button>
//           </div>
//           <ul className="divide-y">
//             <li className="px-5 py-4 flex items-center space-x-3 hover:bg-gray-100 transition">
//               <span className="text-lg">🔍</span>
//               <span className="text-gray-900 font-medium">Google</span>
//             </li>
//             <li className="px-5 py-4 flex items-center space-x-3 hover:bg-gray-100 transition">
//               <span className="text-lg">💼</span>
//               <span className="text-gray-900 font-medium">Outlook - Personal</span>
//             </li>
//             <li className="px-5 py-4 flex items-center space-x-3 hover:bg-gray-100 transition">
//               <span className="text-lg">💼</span>
//               <span className="text-gray-900 font-medium">Outlook - Work</span>
//             </li>
//             <li className="px-5 py-4 flex items-center space-x-3 hover:bg-gray-100 transition">
//               <span className="text-lg">📱</span>
//               <span className="text-gray-900 font-medium">Phone contacts</span>
//             </li>
//           </ul>
//         </div>
  
//         {/* Calendar Section */}
//         <div className="bg-white shadow-lg rounded-xl border mt-6">
//           <div className="flex justify-between items-center px-5 py-4 border-b">
//             <h3 className="text-lg font-semibold text-gray-900">Calendar</h3>
//             <button className="text-red-500 hover:text-red-700 text-sm font-medium">
//               Remove all
//             </button>
//           </div>
//           <ul className="divide-y">
//             <li className="px-5 py-4 flex items-center space-x-3 hover:bg-gray-100 transition">
//               <span className="text-lg">📅</span>
//               <span className="text-gray-900 font-medium">Google calendar</span>
//             </li>
//             <li className="px-5 py-4 flex items-center space-x-3 hover:bg-gray-100 transition">
//               <span className="text-lg">📱</span>
//               <span className="text-gray-900 font-medium">Phone calendar</span>
//             </li>
//           </ul>
//         </div>
  
//         {/* Back Button */}
//         <div className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-gray-800 mt-6">
//           <span className="text-lg">←</span>
//           <span className="text-sm font-medium">Back to Manage Your Contacts</span>
//         </div>
//       </div>
//     );
//   }
  





// import { useState } from "react";

// export default function ManageActivity() {
//   const activities = [
//     { date: "February 12, 2025", text: "You changed your password", details: "Your password was updated successfully." },
//     { date: "February 10, 2025", text: "Your profile was shared with a company", details: "Your profile was shared with XYZ Corp for hiring purposes." },
//     { date: "February 6, 2025", text: "Your LinkedIn profile was connected to an organization", details: "You linked your profile to ABC Organization." },
//     { date: "January 12, 2025", text: "Your LinkedIn profile was connected to an organization", details: "Your profile was linked with DEF Ltd." },
//     { date: "December 12, 2024", text: "Your profile was shared with a company", details: "Your profile was sent to 123 Technologies." },
//     { date: "December 12, 2024", text: "You applied to a job", details: "You applied for the Software Engineer role at LinkedIn." }
//   ];

//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleDetails = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-gray-50 min-h-screen">
//       {/* Back Button */}
//       <div className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-gray-800 mb-4">
//         <span className="text-lg">←</span>
//         <span className="text-sm font-medium">Back</span>
//       </div>

//       {/* Title & Description */}
//       <h2 className="text-2xl font-semibold text-gray-900">Manage my activity</h2>
//       <p className="text-gray-600 text-sm mt-1">
//         Manage the data permissions that you’ve given to LinkedIn
//       </p>

//       {/* Activity List */}
//       <div className="mt-6 bg-white shadow-lg rounded-xl border divide-y">
//         {activities.map((activity, index) => (
//           <div key={index} className="p-4 cursor-pointer transition" onClick={() => toggleDetails(index)}>
//             <div className="flex justify-between items-center">
//               <div>
//                 <p className="text-sm text-gray-500">{activity.date}</p>
//                 <p className="text-gray-900 font-medium mt-1">{activity.text}</p>
//               </div>
//               <span className="text-gray-500">{openIndex === index ? "▲" : "▼"}</span>
//             </div>
            
//             {/* Details Section (Expands on Click) */}
//             {openIndex === index && (
//               <div className="mt-2 bg-gray-100 p-3 rounded-md text-gray-700 text-sm">
//                 {activity.details}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center items-center space-x-3 mt-6">
//         <button className="text-gray-600 text-lg hover:text-gray-900">←</button>
//         <span className="bg-black text-white text-sm font-medium rounded-full w-6 h-6 flex items-center justify-center">
//           1
//         </span>
//         <button className="text-gray-600 text-lg hover:text-gray-900">→</button>
//       </div>
//     </div>
//   );
// }


// import { useState } from "react";

// export default function GroupNotifications() {
//   const [isNotificationsOn, setIsNotificationsOn] = useState(true);
//   const [selectedSetting, setSelectedSetting] = useState(null);

//   const toggleNotifications = () => {
//     setIsNotificationsOn(!isNotificationsOn);
//   };

//   const settings = [
//     { name: "Group invitations", description: "Push, In-app and Email" },
//     { name: "Group updates", description: "Push, In-app and Email" },
//     { name: "Group recommendations", description: "Push, In-app and Email" },
//     { name: "Group admin updates", description: "Push, In-app and Email" },
//   ];

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-gray-50 min-h-screen">
//       {/* Back Button */}
//       <div className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-gray-800 mb-4">
//         <span className="text-lg">←</span>
//         <span className="text-sm font-medium">Back</span>
//       </div>

//       {/* Header & Toggle */}
//       <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
//         <h2 className="text-lg font-semibold text-gray-900">Allow group notifications</h2>
//         <button
//           className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
//             isNotificationsOn ? "bg-green-600" : "bg-gray-400"
//           }`}
//           onClick={toggleNotifications}
//         >
//           <div
//             className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
//               isNotificationsOn ? "translate-x-7" : "translate-x-0"
//             }`}
//           ></div>
//         </button>
//       </div>

//       {/* Group Notification Settings */}
//       <div className="mt-6 bg-white shadow-md rounded-lg divide-y">
//         {settings.map((item, index) => (
//           <div
//             key={index}
//             className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition"
//             onClick={() => setSelectedSetting(item)}
//           >
//             <div>
//               <p className="text-gray-900 font-medium">{item.name}</p>
//               <p className="text-gray-500 text-sm">{item.description}</p>
//             </div>
//             <span className="text-gray-500">→</span>
//           </div>
//         ))}
//       </div>

//       {/* Modal for settings */}
//       {selectedSetting && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
//             {/* Close Button (X) */}
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
//               onClick={() => setSelectedSetting(null)}
//             >
//               ✖
//             </button>

//             <h3 className="text-lg font-semibold">{selectedSetting.name}</h3>
//             <p className="text-gray-500 text-sm mb-4">{selectedSetting.description}</p>

//             {/* Notification Toggles */}
//             <div className="space-y-3">
//               {["Push", "In-app", "Email"].map((type) => (
//                 <div key={type} className="flex justify-between items-center">
//                   <span className="text-gray-700">{type} Notifications</span>
//                   <input type="checkbox" className="w-5 h-5" defaultChecked />
//                 </div>
//               ))}
//             </div>

//             {/* Save Button */}
//             <button
//               className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//               onClick={() => setSelectedSetting(null)}
//             >
//               Save & Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }







// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";

// export default function GroupNotifications() {
//   const [isNotificationsOn, setIsNotificationsOn] = useState(true);
//   const [selectedSetting, setSelectedSetting] = useState(null);
//   const [currentRoute, setCurrentRoute] = useState("/group-notifications");

//   const toggleNotifications = () => {
//     setIsNotificationsOn(!isNotificationsOn);
//   };

//   const settings = [
//     { name: "Group invitations", description: "Push, In-app and Email", route: "/group-invitations" },
//     { name: "Group updates", description: "Push, In-app and Email", route: "/group-updates" },
//     { name: "Group recommendations", description: "Push, In-app and Email", route: "/group-recommendations" },
//     { name: "Group admin updates", description: "Push, In-app and Email", route: "/group-admin-updates" },
//   ];

//   const handleNavigation = (item) => {
//     setSelectedSetting(item);
//     setCurrentRoute(item.route); // Dummy Route Change
//   };

//   return (
//     <div className="max-w-xl mx-auto p-6 bg-gray-50 min-h-screen">
//       {/* Dummy Route Display */}
//       <div className="text-sm text-gray-500 mb-2">Current Route: <span className="font-semibold text-blue-600">{currentRoute}</span></div>

//       {/* Back Button */}
//       <div className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-gray-800 mb-4">
//         <span className="text-lg">←</span>
//         <span className="text-sm font-medium">Back</span>
//       </div>

//       {/* Header & Toggle */}
//       <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg">
//         <h2 className="text-lg font-semibold text-gray-900">Allow group notifications</h2>
//         <button
//           className={`w-14 h-7 flex items-center rounded-full p-1 transition ${
//             isNotificationsOn ? "bg-green-600" : "bg-gray-400"
//           }`}
//           onClick={toggleNotifications}
//         >
//           <div
//             className={`w-6 h-6 bg-white rounded-full shadow-md transform transition ${
//               isNotificationsOn ? "translate-x-7" : "translate-x-0"
//             }`}
//           ></div>
//         </button>
//       </div>

//       {/* Group Notification Settings */}
//       <div className="mt-6 bg-white shadow-md rounded-lg divide-y">
//         {settings.map((item, index) => (
//           <div
//             key={index}
//             className="p-4 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition"
//             onClick={() => handleNavigation(item)}
//           >
//             <div>
//               <p className="text-gray-900 font-medium">{item.name}</p>
//               <p className="text-gray-500 text-sm">{item.description}</p>
//             </div>
//             <span className="text-gray-500">→</span>
//           </div>
//         ))}
//       </div>

//       {/* Modal for settings */}
//       {selectedSetting && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
//             {/* Close Button (X) */}
//             <button
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
//               onClick={() => setSelectedSetting(null)}
//             >
//               ✖
//             </button>

//             <h3 className="text-lg font-semibold">{selectedSetting.name}</h3>
//             <p className="text-gray-500 text-sm mb-4">{selectedSetting.description}</p>

//             {/* Notification Toggles */}
//             <div className="space-y-3">
//               {["Push", "In-app", "Email"].map((type) => (
//                 <div key={type} className="flex justify-between items-center">
//                   <span className="text-gray-700">{type} Notifications</span>
//                   <input type="checkbox" className="w-5 h-5" defaultChecked />
//                 </div>
//               ))}
//             </div>

//             {/* Save Button */}
//             <button
//               className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//               onClick={() => setSelectedSetting(null)}
//             >
//               Save & Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const LinkedInCard = () => {
//   return (
//     <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 font-sans">
//       <h2 className="text-xl font-bold mb-4">My Apps</h2>
//       <div className="space-y-4">
//         <div>
//           <p className="text-gray-600 font-medium">Talent</p>
//           <div className="ml-4 space-y-2">
//             <p className="text-blue-600 cursor-pointer hover:underline">Post a job</p>
//             <p className="text-blue-600 cursor-pointer hover:underline">Talent Insights</p>
//           </div>
//         </div>
//         <div>
//           <p className="text-gray-600 font-medium">Sales</p>
//           <p className="ml-4 text-blue-600 cursor-pointer hover:underline">Services Marketplace</p>
//         </div>
//         <div>
//           <p className="text-gray-600 font-medium">Marketing</p>
//           <p className="ml-4 text-blue-600 cursor-pointer hover:underline">Advertise</p>
//         </div>
//       </div>

//       <h2 className="text-xl font-bold mt-6 mb-4">Explore More for Business</h2>
//       <div className="space-y-4">
//         {[
//           { title: "Hire on LinkedIn", desc: "Find, attract and recruit talent" },
//           { title: "Sell with LinkedIn", desc: "Build relationships with buyers" },
//           { title: "Post a job for free", desc: "Find quality candidates" },
//           { title: "Advertise on LinkedIn", desc: "Acquire customers and grow your business" },
//           { title: "Get started with Premium", desc: "Expand and leverage your network" },
//           { title: "Learn with LinkedIn", desc: "Courses to develop your employees" },
//           { title: "Admin Center", desc: "Manage Billing and Account Details" }
//         ].map((item, index) => (
//           <div key={index} className="p-3 hover:bg-gray-100 rounded-md cursor-pointer">
//             <p className="text-blue-600 font-semibold hover:underline">{item.title}</p>
//             <p className="text-gray-500 text-sm">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//       <p className="text-blue-600 font-semibold cursor-pointer mt-6 hover:underline">Create a Company Page +</p>
//     </div>
//   );
// };

// export default LinkedInCard;







// // eslint-disable-next-line no-unused-vars
// import React from "react";
// import { MoreHorizontal, MessageCircle, Repeat, Send, ThumbsUp } from "lucide-react";

// const postData = {
//   user: {
//     name: "Shubham Sharma",
//     role: "Group SDE-1 @DP-World | xPaytm | Java | Spring Boot | SQL | System D...",
//     time: "43m",
//     image: "https://via.placeholder.com/50",
//   },
//   content: "Top 15 Java & Spring Boot Concepts Every Software Engineer Must Know, with tutorial links 🔥",
//   postImage: "https://via.placeholder.com/600x400",
//   reactions: 50,
//   comments: 6,
//   reposts: 2,
//   commentor: {
//     name: "Kunika Malhotra",
//     action: "commented on this",
//     link: "#",
//   },
// };

// const Post = () => {
//   return (
//     <div className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-md">
//       <div className="text-sm text-gray-500 mb-2">
//         <a href={postData.commentor.link} className="text-blue-600 font-semibold">{postData.commentor.name}</a> {postData.commentor.action}
//       </div>
//       <div className="flex justify-between items-start">
//         <div className="flex items-center space-x-3">
//           <img src={postData.user.image} alt={postData.user.name} className="w-10 h-10 rounded-full border" />
//           <div>
//             <p className="font-semibold">{postData.user.name}</p>
//             <p className="text-xs text-gray-500">{postData.user.role}</p>
//             <p className="text-xs text-gray-400">{postData.user.time} • 🌍</p>
//           </div>
//         </div>
//         <MoreHorizontal className="text-gray-500 cursor-pointer hover:text-gray-700" />
//       </div>
//       <p className="text-sm text-gray-800 mt-2">{postData.content} <span className="text-blue-500 cursor-pointer">...more</span></p>
//       <img src={postData.postImage} alt="Post" className="w-full rounded-lg my-3" />
//       <div className="flex justify-between text-gray-500 text-sm">
//         <span>👍 {postData.reactions}</span>
//         <span>{postData.comments} comments • {postData.reposts} reposts</span>
//       </div>
//       <div className="border-t mt-2 pt-2 flex justify-between text-gray-500 text-sm">
//         <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500"><ThumbsUp size={16} /> <span>Like</span></div>
//         <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500"><MessageCircle size={16} /> <span>Comment</span></div>
//         <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500"><Repeat size={16} /> <span>Repost</span></div>
//         <div className="flex items-center space-x-1 cursor-pointer hover:text-blue-500"><Send size={16} /> <span>Send</span></div>
//       </div>
//       <div className="mt-2 flex flex-wrap gap-2">
//         {['Very informative', 'Great advice', 'Useful tips', 'Interesting', 'I agree'].map((reaction, index) => (
//           <span key={index} className="px-3 py-1 bg-gray-200 text-sm rounded-full cursor-pointer hover:bg-gray-300">{reaction}</span>
//         ))}
//       </div>
//       <div className="border-t mt-3 pt-3 flex items-center space-x-3">
//         <img src="https://via.placeholder.com/30" alt="User" className="w-8 h-8 rounded-full border" />
//         <input type="text" placeholder="Add a comment..." className="flex-1 text-sm p-2 border rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
//       </div>
//     </div>
//   );
// };

// export default Post;


// import { useState } from "react";

// const JobDashboard = () => {
//   const [activeTab, setActiveTab] = useState("Posted jobs");

//   const tabs = [
//     { name: "Posted jobs", count: 1 },
//     { name: "My jobs", count: 6 },
//     { name: "Saved posts and articles", count: 2 },
//   ];

//   return (
//     <div className="flex w-full p-4 bg-gray-100 min-h-screen">
//       {/* Sidebar */}
//       <div className="w-1/4 bg-white p-4 rounded-lg shadow-md">
//         <h2 className="text-lg font-semibold mb-4">My items</h2>
//         <ul>
//           {tabs.map((tab) => (
//             <li
//               key={tab.name}
//               className={`p-2 cursor-pointer flex justify-between items-center rounded-lg hover:bg-gray-200 ${
//                 activeTab === tab.name ? "bg-blue-100" : ""
//               }`}
//               onClick={() => setActiveTab(tab.name)}
//             >
//               {tab.name} <span className="text-gray-500">{tab.count}</span>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       {/* Content Area */}
//       <div className="w-3/4 p-4">
//         {activeTab === "Posted jobs" && (
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">Posted Jobs</h2>
//             <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm">Draft</span>
//             <div className="mt-4 p-4 border rounded-lg flex justify-between items-center">
//               <div>
//                 <h3 className="text-lg font-semibold">Web Developer</h3>
//                 <p className="text-gray-600">OctaNet Services Pvt Ltd.</p>
//                 <p className="text-gray-500">Bhopal, Madhya Pradesh, India (On-site)</p>
//                 <p className="text-blue-600 cursor-pointer mt-2">Complete draft</p>
//               </div>
//               <span className="cursor-pointer text-gray-500">&#x22EE;</span>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // export default JobDashboard;
// export default function Analytics() {
//   return (
//     <div className="bg-gray-100 min-h-screen flex justify-center py-6">
//       <div className="w-[600px] bg-white p-4 rounded-lg shadow-md">
        
//         {/* Header */}
//         <div className="border rounded-lg p-4 flex items-center space-x-4">
//           <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
//           <div>
//             <h2 className="font-semibold text-lg">Analytics & tools</h2>
//             <p className="text-gray-500 text-sm">Friday, February 14</p>
//           </div>
//         </div>

//         {/* Analytics Section */}
//         <div className="border rounded-lg p-4 mt-3">
//           <h3 className="font-semibold text-lg flex items-center">
//             Analytics <span className="text-gray-400 text-sm ml-1">❓</span>
//           </h3>

//           <div className="grid grid-cols-2 gap-3 mt-3">
//             <div className="border p-4 rounded-lg">
//               <p className="text-2xl font-bold">187</p>
//               <p className="text-sm text-gray-500">Post impressions</p>
//               <p className="text-red-500 text-xs">🔻 39.7% past 7 days</p>
//             </div>
//             <div className="border p-4 rounded-lg">
//               <p className="text-2xl font-bold">2,079</p>
//               <p className="text-sm text-gray-500">Followers</p>
//               <p className="text-green-500 text-xs">🔺 7.5% past 7 days</p>
//             </div>
//             <div className="border p-4 rounded-lg">
//               <p className="text-2xl font-bold">155</p>
//               <p className="text-sm text-gray-500">Profile viewers</p>
//               <p className="text-xs text-gray-400">Past 90 days</p>
//             </div>
//             <div className="border p-4 rounded-lg">
//               <p className="text-2xl font-bold">57</p>
//               <p className="text-sm text-gray-500">Search appearances</p>
//               <p className="text-xs text-gray-400">Previous week</p>
//             </div>
//           </div>
//         </div>

//         {/* Weekly Sharing Tracker */}
//         <div className="border rounded-lg p-4 mt-3">
//           <h3 className="font-semibold text-lg">Weekly sharing tracker</h3>
//           <p className="text-sm text-gray-500">
//             Increase your visibility by posting, commenting, or contributing to collaborative articles. 
//             We suggest taking <strong>3 actions every week.</strong>
//           </p>

//           <div className="flex items-center space-x-3 mt-3">
//             <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
//               📝
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Feb 10 - Feb 16</p>
//               <p className="font-semibold text-lg">0 of 3 actions</p>
//               <p className="text-sm text-gray-500">
//                 No actions yet. Take 3 actions to achieve the weekly sharing goal.
//               </p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }


// import React from "react";

// const userProfile = {
//   id: 1,
//   name: "Honey Sharma",
//   pronouns: "He/Him",
//   title: "||CHUWA, DSA|| Learning: Full Stack Web Development ||👨‍💻",
//   college: "Oriental College of Technology",
//   location: "Bhopal, Madhya Pradesh, India",
//   connections: "500+ connections",
//   profilePic: "profile-pic-url", // Replace with actual profile picture URL
//   coverPhoto: "cover-photo-url", // Replace with actual cover photo URL
//   verification: true,
// };

// const ProfileSection = () => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full relative">
//       {/* Cover Photo */}
//       <div className="relative">
//         <img src={userProfile.coverPhoto} alt="Cover" className="w-full bg-red-800 h-48 object-cover" />
//         <img
//           src={userProfile.profilePic}
//           alt="Profile"
//           className="w-40 bg-red-300 h-40 rounded-full border-2 border-white absolute left-7 top-20"
//         />
//       </div>

//       {/* Profile Content */}
//       <div className="p-6 mt-6">
//         {/* Name, Verification & College */}
//         <div className="flex items-start justify-between">
//           <div className="pl-5">
//             <h2 className="text-xl pt-4 font-semibold flex items-center">
//               {userProfile.name}
//               {userProfile.verification && <span className="ml-2 text-blue-500">✔</span>}
//             </h2>
//             <p className="text-sm text-gray-500">{userProfile.pronouns}</p>
//             <p className="text-sm mt-1">{userProfile.title}</p>
//             <p className="text-sm text-gray-500">{userProfile.location}</p>
//             <p className="text-blue-500 text-sm mt-1">{userProfile.connections}</p>
//           </div>

//           {/* College & Edit Icon */}
//           <div className="flex items-center gap-2">
//             <p className="text-sm text-gray-700 flex items-center">
//               <span className="bg-gray-300 w-6 h-6 rounded-full flex items-center justify-center text-gray-600">🏫</span>
//               {userProfile.college}
//             </p>
//             <button className="p-2 rounded-full hover:bg-gray-200 -mt-20">
//               ✏️
//             </button>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex gap-2 mt-4">
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-full">Open to</button>
//           <button className="bg-gray-200 px-4 py-2 rounded-full">Add profile section</button>
//           <button className="bg-gray-200 px-4 py-2 rounded-full">Enhance profile</button>
//           <button className="bg-gray-200 px-4 py-2 rounded-full">Resources</button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ProfileSection;



// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const userProfile = {
//   id: 1,
//   name: "Honey Sharma",
//   pronouns: "He/Him",
//   title: "||CHUWA, DSA|| Learning: Full Stack Web Development ||👨‍💻",
//   college: "Oriental College of Technology",
//   location: "Bhopal, Madhya Pradesh, India",
//   connections: "500+ connections",
//   profilePic: "profile-pic-url", // Replace with actual profile picture URL
//   coverPhoto: "cover-photo-url", // Replace with actual cover photo URL
//   verification: true,
// };

// const ProfileSection = () => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden max-3xl relative">
//       {/* Cover Photo */}
//       <div className="relative">
//         <img
//           src={userProfile.coverPhoto}
//           alt="Cover"
//           className="w-full bg-gray-500 h-48 object-cover"
//         />
//         <img
//           src={userProfile.profilePic}
//           alt="Profile"
//           className="w-40 h-40 bg-black rounded-full border-4 border-white absolute left-7 top-20"
//         />
//       </div>
//       <div className="h-12 w-full flex justify-end p-2">
//   <span className="p-2 rounded-full hover:bg-gray-200 transition duration-200 inline-flex items-center justify-center">
//     <i className="ri-pencil-line text-2xl"></i>
//   </span>
// </div>

//      {/* Profile Content */}
// <div className="p-6  relative">
//   {/* Edit Button - Responsive Positioning */}
//   <button className="p-2 rounded-full hover:bg-gray-200 absolute top-10 right-2 sm:top-[-40px] sm:right-7 md:right-10 lg:right-14">
   
//   </button>
//         {/* Name & College (Responsive) */}
//         <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between ">
//           {/* Left Side: Name, Pronouns, Title */}
//           <div className="pl-5">
//             <h2 className="text-xl font-semibold flex items-center">
//               {userProfile.name}
//               {userProfile.verification && (
//                 <span className="ml-2 text-blue-500 text-lg"></span>
//               )}
//             </h2>
//             <p className="text-sm text-gray-500">{userProfile.pronouns}</p>
//             <p className="text-sm mt-1">{userProfile.title}</p>
//             <p className="text-sm text-gray-500">{userProfile.location}</p>
//             <p className="text-blue-500 text-sm mt-1">{userProfile.connections}</p>
//           </div>

//           {/* Right Side: College Name (Moves Below in Small Screens) */}
//           <div className="flex sm:flex-row flex-col sm:items-center items-start mt-4 sm:mt-0">
//             <p className="text-sm text-gray-700 flex items-center">
//               <span className="bg-gray-300 w-7 h-7 rounded-full flex items-center justify-center mr-2">
//                 🏫
//               </span>
//               {userProfile.college}
//             </p>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-wrap gap-2 mt-4">
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
//             Open to
//           </button>
//           <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300">
//             Add profile section
//           </button>
//           <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300">
//             Enhance profile
//           </button>
//           <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300">
//             Resources
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSection;



// // eslint-disable-next-line no-unused-vars
// import React from "react";

// const userProfile = {
//   id: 1,
//   name: "Honey Sharma",
//   pronouns: "He/Him",
//   title: "||CHUWA, DSA|| Learning: Full Stack Web Development ||👨‍💻",
//   college: "Oriental College of Technology",
//   location: "Bhopal, Madhya Pradesh, India",
//   connections: "500+ connections",
//   profilePic: "profile-pic-url", // Replace with actual profile picture URL
//   coverPhoto: "cover-photo-url", // Replace with actual cover photo URL
//   verification: true,
// };

// const ProfileSection = () => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full relative">
//       {/* Cover Photo */}
//       <div className="relative">
//         <img
//           src={userProfile.coverPhoto}
//           alt="Cover"
//           className="w-full h-48 object-cover"
//         />
//         <img
//           src={userProfile.profilePic}
//           alt="Profile"
//           className="w-40 h-40 rounded-full border-4 border-white absolute left-7 top-28"
//         />
//       </div>

//       {/* Profile Content */}
//       <div className="p-6 mt-10 relative">
//         {/* Edit Button (Always Right) */}
//         <button className="p-2 rounded-full hover:bg-gray-200 sm:absolute sm:right-6 sm:top-6">
//           ✏️
//         </button>

//         {/* Name & College (Responsive) */}
//         <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
//           {/* Left Side: Name, Pronouns, Title */}
//           <div className="pl-5">
//             <h2 className="text-xl font-semibold flex items-center">
//               {userProfile.name}
//               {userProfile.verification && (
//                 <span className="ml-2 text-blue-500 text-lg">✔</span>
//               )}
//             </h2>
            
//             <p className="text-sm text-gray-500">{userProfile.pronouns}</p>
//             <p className="text-sm mt-1">{userProfile.title}</p>
//             <p className="text-sm text-gray-500">{userProfile.location}</p>
//             <p className="text-blue-500 text-sm mt-1">{userProfile.connections}</p>

//             {/* College (Moves Below in Responsive Mode) */}
//             <div className="mt-4 sm:mt-0">
//               <p className="text-sm text-gray-700 flex items-center">
//                 <span className="bg-gray-300 w-7 h-7 rounded-full flex items-center justify-center mr-2">
//                   🏫
//                 </span>
//                 {userProfile.college}
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="flex flex-wrap gap-2 mt-4">
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
//             Open to
//           </button>
//           <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300">
//             Add profile section
//           </button>
//           <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300">
//             Enhance profile
//           </button>
//           <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300">
//             Resources
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileSection;





// // eslint-disable-next-line no-unused-vars
// import React, { useState } from "react";

// const EducationExperienceForm = () => {
//   const [notify, setNotify] = useState(true);
//   const [formData, setFormData] = useState({
//     school: "",
//     degree: "",
//     fieldOfStudy: "",
//     startMonth: "",
//     startYear: "",
//     endMonth: "",
//     endYear: "",
//     activities: "",
//     description: "",
//     skills: [],
//     media: [],
//   });

//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];
//   const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleAddSkill = () => {
//     const newSkill = prompt("Enter a skill:");
//     if (newSkill?.trim()) {
//       setFormData((prev) => ({
//         ...prev,
//         skills: [...prev.skills, newSkill.trim()],
//       }));
//     }
//   };

//   const handleRemoveSkill = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       skills: prev.skills.filter((_, i) => i !== index),
//     }));
//   };

//   const handleAddMedia = () => {
//     const newMedia = prompt("Enter media URL:");
//     if (newMedia?.trim()) {
//       setFormData((prev) => ({
//         ...prev,
//         media: [...prev.media, newMedia.trim()],
//       }));
//     }
//   };

//   const handleRemoveMedia = (index) => {
//     setFormData((prev) => ({
//       ...prev,
//       media: prev.media.filter((_, i) => i !== index),
//     }));
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <h2 className="text-xl font-semibold mb-4">Add Education & Experience</h2>

//       {/* Notify Network Toggle */}
//       <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md mb-4">
//         <p className="text-sm">Notify your network of key profile changes.</p>
//         <label className="relative inline-flex items-center cursor-pointer">
//           <input
//             type="checkbox"
//             className="sr-only"
//             checked={notify}
//             onChange={() => setNotify(!notify)}
//           />
//           <div className={`w-10 h-5 bg-gray-300 rounded-full transition ${notify ? "bg-green-500" : ""}`}>
//             <div className={`h-4 w-4 bg-white rounded-full transform transition ${notify ? "translate-x-5" : ""}`} />
//           </div>
//         </label>
//       </div>

//       {/* Education Fields */}
//       <label className="block font-medium">School*</label>
//       <input
//         type="text"
//         name="school"
//         placeholder="Ex: Boston University"
//         className="w-full border p-2 rounded-md mb-4"
//         onChange={handleChange}
//       />

//       <label className="block font-medium">Degree</label>
//       <input
//         type="text"
//         name="degree"
//         placeholder="Ex: Bachelor's"
//         className="w-full border p-2 rounded-md mb-4"
//         onChange={handleChange}
//       />

//       <label className="block font-medium">Field of Study</label>
//       <input
//         type="text"
//         name="fieldOfStudy"
//         placeholder="Ex: Business"
//         className="w-full border p-2 rounded-md mb-4"
//         onChange={handleChange}
//       />

//       <label className="block font-medium">Start Date</label>
//       <div className="flex gap-2 mb-4">
//         <select name="startMonth" className="w-1/2 border p-2 rounded-md" onChange={handleChange}>
//           <option value="">Month</option>
//           {months.map((month) => (
//             <option key={month} value={month}>{month}</option>
//           ))}
//         </select>
//         <select name="startYear" className="w-1/2 border p-2 rounded-md" onChange={handleChange}>
//           <option value="">Year</option>
//           {years.map((year) => (
//             <option key={year} value={year}>{year}</option>
//           ))}
//         </select>
//       </div>

//       <label className="block font-medium">End Date (or expected)</label>
//       <div className="flex gap-2 mb-4">
//         <select name="endMonth" className="w-1/2 border p-2 rounded-md" onChange={handleChange}>
//           <option value="">Month</option>
//           {months.map((month) => (
//             <option key={month} value={month}>{month}</option>
//           ))}
//         </select>
//         <select name="endYear" className="w-1/2 border p-2 rounded-md" onChange={handleChange}>
//           <option value="">Year</option>
//           {years.map((year) => (
//             <option key={year} value={year}>{year}</option>
//           ))}
//         </select>
//       </div>

//       {/* Experience Fields */}
//       <label className="block font-medium">Activities and Societies</label>
//       <textarea
//         name="activities"
//         placeholder="Ex: Alpha Phi Omega, Marching Band, Volleyball"
//         maxLength="500"
//         className="w-full border p-2 rounded-md mb-4"
//         onChange={handleChange}
//       />

//       <label className="block font-medium">Description</label>
//       <textarea
//         name="description"
//         maxLength="1000"
//         className="w-full border p-2 rounded-md mb-4"
//         onChange={handleChange}
//       />

//       {/* Skills */}
//       <h2 className="text-lg font-semibold">Skills</h2>
//       <p className="text-sm text-gray-600">Add your top 5 skills.</p>
//       <button
//         onClick={handleAddSkill}
//         className="mt-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100"
//       >
//         + Add skill
//       </button>
//       <ul className="mt-2">
//         {formData.skills.map((skill, index) => (
//           <li key={index} className="flex justify-between items-center text-gray-700">
//             - {skill}
//             <button
//               onClick={() => handleRemoveSkill(index)}
//               className="ml-2 px-2 py-1 text-red-600 border border-red-600 rounded hover:bg-red-100"
//             >
//               ✕
//             </button>
//           </li>
//         ))}
//       </ul>

//       {/* Media */}
//       <h2 className="text-lg font-semibold">Media</h2>
//       <p className="text-sm text-gray-600">Add images, documents, sites, or presentations.</p>
//       <button
//         onClick={handleAddMedia}
//         className="mt-2 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100"
//       >
//         + Add media
//       </button>
//       <ul className="mt-2">
//         {formData.media.map((media, index) => (
//           <li key={index} className="flex justify-between items-center text-blue-600">
//             {media}
//             <button
//               onClick={() => handleRemoveMedia(index)}
//               className="ml-2 px-2 py-1 text-red-600 border border-red-600 rounded hover:bg-red-100"
//             >
//               ✕
//             </button>
//           </li>
//         ))}
//       </ul>

//       {/* Save Button */}
//       <button className="mt-4 px-6 py-2 bg-blue-600 text-white font-medium rounded-lg w-full hover:bg-blue-700">
//         Save
//       </button>
//     </div>
//   );
// };

// export default EducationExperienceForm;



// import React, { useState } from "react";

// const SkillsComponent = () => {
//   const [education, setEducation] = useState({ skills: [] });
//   const [newSkill, setNewSkill] = useState(""); // New state for skill input

//   const handleAddSkill = () => {
//     if (newSkill.trim() && education.skills.length < 5) {
//       setEducation({ ...education, skills: [...education.skills, newSkill] });
//       setNewSkill(""); // Clear input after adding
//     }
//   };

//   const handleRemoveSkill = (index) => {
//     setEducation({
//       ...education,
//       skills: education.skills.filter((_, i) => i !== index),
//     });
//   };

//   return (
//     <div>
//       <h2 className="text-lg font-semibold">Skills</h2>
//       <p className="text-sm text-gray-600">Add your top 5 skills.</p>

//       {/* Input for skill entry */}
//       <div className="flex gap-2 mt-2">
//         <input
//           type="text"
//           value={newSkill}
//           onChange={(e) => setNewSkill(e.target.value)}
//           onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
//           placeholder="Enter a skill"
//           className="w-full border p-2 rounded-md"
//         />
//         <button
//           onClick={handleAddSkill}
//           className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100"
//         >
//           + Add Skill
//         </button>
//       </div>

//       {/* Display added skills */}
//       <ul className="mt-2">
//         {education.skills.map((skill, index) => (
//           <li key={index} className="text-gray-700 flex justify-between items-center border p-2 rounded-md">
//             {skill}
//             <button onClick={() => handleRemoveSkill(index)} className="text-red-600 ml-2">✖</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SkillsComponent;








// import React from 'react';

// function App() {
//   return (
//     <div style={{ fontFamily: 'Roboto, sans-serif', margin: 0, padding: 0 }}>
//       {/* Header */}
//       <header style={{
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//         backgroundColor: '#FFFFFF',
//         borderBottom: '1px solid #F3F2EF',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '10px 20px',
//         zIndex: 1000
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <div style={{ width: '40px', height: '40px', backgroundColor: '#0A66C2', borderRadius: '50%', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 'bold' }}>N</div>
//           <input type="text" placeholder="Search people, jobs, or posts..." style={{ marginLeft: '20px', padding: '8px', borderRadius: '20px', border: '1px solid #F3F2EF', width: '300px' }} />
//         </div>
//         <nav style={{ display: 'flex', gap: '20px' }}>
//           <a href="#" style={{ color: '#0A66C2', textDecoration: 'none' }}>🏠 Home</a>
//           <a href="#" style={{ color: '#0A66C2', textDecoration: 'none' }}>🔗 My Network</a>
//           <a href="#" style={{ color: '#0A66C2', textDecoration: 'none' }}>💼 Jobs</a>
//           <a href="#" style={{ color: '#0A66C2', textDecoration: 'none' }}>📩 Messaging</a>
//           <a href="#" style={{ color: '#0A66C2', textDecoration: 'none' }}>🔔 Notifications</a>
//           <div style={{ width: '40px', height: '40px', backgroundColor: '#F3F2EF', borderRadius: '50%' }}></div>
//         </nav>
//       </header>

//       {/* Main Container */}
//       <div style={{ display: 'flex', marginTop: '60px' }}>
//         {/* Left Sidebar */}
//         <aside style={{ width: '20%', padding: '20px', position: 'fixed', height: '100vh', backgroundColor: '#FFF' }}>
//           <div style={{ backgroundColor: '#F3F2EF', padding: '10px', borderRadius: '8px', marginBottom: '20px' }}>
//             <img src="https://via.placeholder.com/60" alt="Profile" style={{ borderRadius: '50%' }} />
//             <h3 style={{ margin: '10px 0', color: '#0A66C2' }}>John Doe</h3>
//             <p style={{ fontSize: '14px' }}>Software Engineer | 250 Connections</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none' }}>View Profile</a>
//           </div>
//           <div>
//             <h4>My Community</h4>
//             <p style={{ color: '#0A66C2' }}>#ReactDevs</p>
//             <p style={{ color: '#0A66C2' }}>#TechHub</p>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main style={{ width: '60%', marginLeft: '20%', padding: '20px' }}>
//           {/* Hero Section */}
//           <section style={{
//             background: 'linear-gradient(to right, #0A66C2, #F3F2EF)',
//             color: '#FFF',
//             padding: '40px',
//             textAlign: 'center',
//             borderRadius: '8px',
//             marginBottom: '20px'
//           }}>
//             <h1 style={{ fontSize: '36px', margin: '0' }}>Build your professional network. Grow your career.</h1>
//             <div style={{ marginTop: '20px' }}>
//               <button style={{ backgroundColor: '#00C4B4', color: '#FFF', padding: '10px 20px', border: 'none', borderRadius: '20px', marginRight: '10px' }}>Join Now</button>
//               <button style={{ backgroundColor: 'transparent', color: '#FFF', padding: '10px 20px', border: '1px solid #FFF', borderRadius: '20px' }}>Login</button>
//             </div>
//             <p style={{ marginTop: '20px', fontSize: '14px' }}>Join 10M+ professionals worldwide!</p>
//           </section>

//           {/* Trending Section */}
//           <section style={{ backgroundColor: '#F3F2EF', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
//             <h2>Trending & Suggested</h2>
//             <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
//               <div style={{ minWidth: '200px', backgroundColor: '#FFF', padding: '10px', borderRadius: '8px' }}>Jane Smith<br />UI Designer<br /><a href="#" style={{ color: '#00C4B4' }}>Connect</a></div>
//               <div style={{ minWidth: '200px', backgroundColor: '#FFF', padding: '10px', borderRadius: '8px' }}>#TechTrends<br />1.2K posts</div>
//             </div>
//           </section>

//           {/* Newsfeed */}
//           <section>
//             <div style={{ backgroundColor: '#FFF', padding: '20px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #F3F2EF' }}>
//               <div style={{ display: 'flex', alignItems: 'center' }}>
//                 <img src="https://via.placeholder.com/40" alt="User" style={{ borderRadius: '50%', marginRight: '10px' }} />
//                 <div>
//                   <p style={{ margin: '0', fontWeight: 'bold' }}>Alice Brown</p>
//                   <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>2h ago</p>
//                 </div>
//               </div>
//               <p style={{ margin: '10px 0' }}>Excited to share my latest project!</p>
//               <div style={{ display: 'flex', gap: '20px' }}>
//                 <span>❤️ Like</span>
//                 <span>💬 Comment</span>
//                 <span>➡️ Share</span>
//               </div>
//             </div>
//           </section>
//         </main>

//         {/* Right Sidebar */}
//         <aside style={{ width: '20%', padding: '20px' }}>
//           <div style={{ backgroundColor: '#F3F2EF', padding: '10px', borderRadius: '8px', marginBottom: '20px' }}>
//             <h4>Who’s Hiring?</h4>
//             <p>Google - Software Engineer<br /><a href="#" style={{ color: '#00C4B4' }}>Apply</a></p>
//           </div>
//           <div style={{ backgroundColor: '#F3F2EF', padding: '10px', borderRadius: '8px' }}>
//             <h4>People You May Know</h4>
//             <p>Bob Lee<br /><a href="#" style={{ color: '#00C4B4' }}>Connect</a></p>
//           </div>
//         </aside>
//       </div>

//       {/* Footer */}
//       <footer style={{ backgroundColor: '#0A66C2', color: '#FFF', padding: '20px', textAlign: 'center' }}>
//         <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
//           <div>
//             <p>About Us</p>
//             <p>Privacy Policy</p>
//           </div>
//           <div>
//             <p>Help Center</p>
//             <p>Contact Support</p>
//           </div>
//           <div>
//             <p>Follow Us: 🌐</p>
//             <select style={{ padding: '5px', borderRadius: '5px' }}>
//               <option>English</option>
//               <option>Hindi</option>
//             </select>
//           </div>
//         </div>
//         <p>© 2025 NetworkHub</p>
//       </footer>
//     </div>
//   );
// }

// export default App;


// import React from 'react';

// function App() {
//   return (
//     <div style={{ fontFamily: 'Roboto, sans-serif', margin: 0, padding: 0, backgroundColor: '#F3F2EF', minHeight: '100vh' }}>
//       {/* Header */}
//       <header style={{
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//         backgroundColor: '#FFFFFF',
//         boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '10px 30px',
//         zIndex: 1000,
//         height: '60px'
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ 
//             width: '40px', 
//             height: '40px', 
//             backgroundColor: '#0A66C2', 
//             borderRadius: '50%', 
//             color: '#FFF', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'center', 
//             fontSize: '22px', 
//             fontWeight: 'bold' 
//           }}>N</div>
//           <input 
//             type="text" 
//             placeholder="Search people, jobs, or posts..." 
//             style={{ 
//               padding: '8px 15px', 
//               borderRadius: '20px', 
//               border: '1px solid #E0E0E0', 
//               width: '250px', 
//               fontSize: '14px', 
//               outline: 'none' 
//             }} 
//           />
//         </div>
//         <nav style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
//           <a href="#" style={{ color: '#0A66C2', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>🏠 Home</a>
//           <a href="#" style={{ color: '#0A66C2', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>🔗 My Network</a>
//           <a href="#" style={{ color: '#0A66C2', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>💼 Jobs</a>
//           <a href="#" style={{ color: '#0A66C2', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>📩 Messaging</a>
//           <a href="#" style={{ color: '#0A66C2', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>🔔 Notifications</a>
//           <div style={{ 
//             width: '35px', 
//             height: '35px', 
//             backgroundColor: '#E0E0E0', 
//             borderRadius: '50%', 
//             cursor: 'pointer' 
//           }}></div>
//         </nav>
//       </header>

//       {/* Main Container */}
//       <div style={{ display: 'flex', marginTop: '60px', padding: '0 20px' }}>
//         {/* Left Sidebar */}
//         <aside style={{ width: '20%', padding: '20px', position: 'fixed', height: 'calc(100vh - 60px)', overflowY: 'auto' }}>
//           <div style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
//             <img src="https://via.placeholder.com/60" alt="Profile" style={{ borderRadius: '50%' }} />
//             <h3 style={{ margin: '10px 0', color: '#0A66C2', fontSize: '18px' }}>John Doe</h3>
//             <p style={{ fontSize: '14px', color: '#666' }}>Software Engineer | 250 Connections</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>View Profile</a>
//           </div>
//           <div style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>My Community</h4>
//             <p style={{ color: '#0A66C2', fontSize: '14px', margin: '5px 0' }}>#ReactDevs</p>
//             <p style={{ color: '#0A66C2', fontSize: '14px', margin: '5px 0' }}>#TechHub</p>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main style={{ width: '60%', marginLeft: '20%', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           {/* Post Input */}
//           <div style={{ 
//             backgroundColor: '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '30px', 
//             width: '500px' 
//           }}>
//             <input 
//               type="text" 
//               placeholder="Post Title" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 marginBottom: '10px', 
//                 fontSize: '14px' 
//               }} 
//             />
//             <textarea 
//               placeholder="What’s on your mind?" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 resize: 'none', 
//                 height: '50px', 
//                 fontSize: '14px' 
//               }} 
//             ></textarea>
//             <button style={{ 
//               backgroundColor: '#00C4B4', 
//               color: '#FFF', 
//               padding: '6px 15px', 
//               border: 'none', 
//               borderRadius: '20px', 
//               marginTop: '8px', 
//               fontSize: '13px', 
//               cursor: 'pointer' 
//             }}>Post</button>
//           </div>

//           {/* Newsfeed */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '500px' }}>
//             <div style={{ 
//               backgroundColor: '#FFFFFF', 
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//               width: '500px', 
//               height: '500px', 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'space-between', 
//               transition: 'transform 0.2s', 
//               ':hover': { transform: 'scale(1.02)' } 
//             }}>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
//                 <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                 <div>
//                   <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px' }}>Alice Brown</p>
//                   <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>2h ago</p>
//                 </div>
//               </div>
//               <p style={{ margin: '0', fontSize: '16px', flexGrow: 1 }}>Excited to share my latest project!</p>
//               <div style={{ display: 'flex', gap: '20px', color: '#0A66C2', fontSize: '14px', marginTop: '15px' }}>
//                 <span>❤️ Like</span>
//                 <span>💬 Comment</span>
//                 <span>➡️ Share</span>
//               </div>
//             </div>
//             <div style={{ 
//               backgroundColor: '#FFFFFF', 
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//               width: '500px', 
//               height: '500px', 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'space-between', 
//               transition: 'transform 0.2s', 
//               ':hover': { transform: 'scale(1.02)' } 
//             }}>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
//                 <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                 <div>
//                   <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px' }}>Bob Lee</p>
//                   <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>5h ago</p>
//                 </div>
//               </div>
//               <p style={{ margin: '0', fontSize: '16px', flexGrow: 1 }}>Just attended an amazing webinar!</p>
//               <div style={{ display: 'flex', gap: '20px', color: '#0A66C2', fontSize: '14px', marginTop: '15px' }}>
//                 <span>❤️ Like</span>
//                 <span>💬 Comment</span>
//                 <span>➡️ Share</span>
//               </div>
//             </div>
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside style={{ width: '20%', padding: '20px' }}>
//           <div style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Trending & Suggested</h4>
//             <div style={{ marginBottom: '10px' }}>
//               <p style={{ fontSize: '14px', margin: '5px 0' }}>Jane Smith - UI Designer</p>
//               <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Connect</a>
//             </div>
//             <p style={{ color: '#0A66C2', fontSize: '14px', margin: '5px 0' }}>#TechTrends - 1.2K posts</p>
//           </div>
//           <div style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Who’s Hiring?</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0' }}>Google - Software Engineer</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Apply</a>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React from 'react';

// function App() {
//   return (
//     <div style={{ fontFamily: 'Roboto, sans-serif', margin: 0, padding: 0, backgroundColor: '#F3F2EF', minHeight: '100vh' }}>
//       {/* Header */}
//       <header style={{
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//         backgroundColor: '#F3F2EF', // Changed to match site background
//         boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '15px 40px',
//         zIndex: 1000,
//         height: '70px',
//         color: '#1A2A44' // Dark blue text for contrast
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
//           <div style={{ 
//             width: '50px', 
//             height: '50px', 
//             backgroundColor: '#FFD700', // Gold accent retained
//             borderRadius: '50%', 
//             color: '#1A2A44', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'center', 
//             fontSize: '28px', 
//             fontWeight: 'bold',
//             boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
//           }}>N</div>
//           <span style={{ 
//             fontSize: '22px', 
//             fontWeight: '600', 
//             letterSpacing: '1px', 
//             textTransform: 'uppercase',
//             color: '#1A2A44' // Dark blue for visibility
//           }}>NetworkElite</span>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             style={{ 
//               padding: '10px 20px', 
//               borderRadius: '25px', 
//               border: '1px solid #E0E0E0', // Light border for subtle contrast
//               width: '300px', 
//               fontSize: '14px', 
//               backgroundColor: '#FFFFFF', // White input for clarity
//               color: '#1A2A44', 
//               outline: 'none', 
//               transition: 'width 0.3s ease'
//             }} 
//             onFocus={(e) => e.target.style.width = '350px'}
//             onBlur={(e) => e.target.style.width = '300px'}
//           />
//           <nav style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
//             <a href="#" style={{ 
//               color: '#1A2A44', // Dark blue text
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#FFD700'} onMouseLeave={(e) => e.target.style.color = '#1A2A44'}>🏠 Home</a>
//             <a href="#" style={{ 
//               color: '#1A2A44', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#FFD700'} onMouseLeave={(e) => e.target.style.color = '#1A2A44'}>🔗 Network</a>
//             <a href="#" style={{ 
//               color: '#1A2A44', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#FFD700'} onMouseLeave={(e) => e.target.style.color = '#1A2A44'}>💼 Jobs</a>
//             <a href="#" style={{ 
//               color: '#1A2A44', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#FFD700'} onMouseLeave={(e) => e.target.style.color = '#1A2A44'}>📩 Messages</a>
//             <a href="#" style={{ 
//               color: '#1A2A44', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#FFD700'} onMouseLeave={(e) => e.target.style.color = '#1A2A44'}>🔔 Alerts</a>
//             <div style={{ 
//               width: '40px', 
//               height: '40px', 
//               backgroundColor: '#FFD700', 
//               borderRadius: '50%', 
//               cursor: 'pointer', 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center', 
//               fontSize: '18px', 
//               color: '#1A2A44' 
//             }}>JD</div>
//           </nav>
//         </div>
//       </header>

//       {/* Main Container */}
//       <div style={{ display: 'flex', marginTop: '70px', padding: '0 20px' }}>
//         {/* Left Sidebar */}
//         <aside style={{ width: '20%', padding: '20px', position: 'fixed', height: 'calc(100vh - 60px)', overflowY: 'auto' }}>
//           <div style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
//             <img src="https://via.placeholder.com/60" alt="Profile" style={{ borderRadius: '50%' }} />
//             <h3 style={{ margin: '10px 0', color: '#0A66C2', fontSize: '18px' }}>John Doe</h3>
//             <p style={{ fontSize: '14px', color: '#666' }}>Software Engineer | 250 Connections</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>View Profile</a>
//           </div>
//           <div style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>My Community</h4>
//             <p style={{ color: '#0A66C2', fontSize: '14px', margin: '5px 0' }}>#ReactDevs</p>
//             <p style={{ color: '#0A66C2', fontSize: '14px', margin: '5px 0' }}>#TechHub</p>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main style={{ width: '60%', marginLeft: '20%', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           {/* Post Input */}
//           <div style={{ 
//             backgroundColor: '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '30px', 
//             width: '500px' 
//           }}>
//             <input 
//               type="text" 
//               placeholder="Post Title" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 marginBottom: '10px', 
//                 fontSize: '14px' 
//               }} 
//             />
//             <textarea 
//               placeholder="What’s on your mind?" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 resize: 'none', 
//                 height: '50px', 
//                 fontSize: '14px' 
//               }} 
//             ></textarea>
//             <button style={{ 
//               backgroundColor: '#00C4B4', 
//               color: '#FFF', 
//               padding: '6px 15px', 
//               border: 'none', 
//               borderRadius: '20px', 
//               marginTop: '8px', 
//               fontSize: '13px', 
//               cursor: 'pointer' 
//             }}>Post</button>
//           </div>

//           {/* Newsfeed */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '500px' }}>
//             <div style={{ 
//               backgroundColor: '#FFFFFF', 
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//               width: '500px', 
//               height: '500px', 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'space-between', 
//               transition: 'transform 0.2s', 
//               ':hover': { transform: 'scale(1.02)' } 
//             }}>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
//                 <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                 <div>
//                   <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px' }}>Alice Brown</p>
//                   <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>2h ago</p>
//                 </div>
//               </div>
//               <p style={{ margin: '0', fontSize: '16px', flexGrow: '1' }}>Excited to share my latest project!</p>
//               <div style={{ display: 'flex', gap: '20px', color: '#0A66C2', fontSize: '14px', marginTop: '15px' }}>
//                 <span>❤️ Like</span>
//                 <span>💬 Comment</span>
//                 <span>➡️ Share</span>
//               </div>
//             </div>
//             <div style={{ 
//               backgroundColor: '#FFFFFF', 
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//               width: '500px', 
//               height: '500px', 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'space-between', 
//               transition: 'transform 0.2s', 
//               ':hover': { transform: 'scale(1.02)' } 
//             }}>
//               <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
//                 <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                 <div>
//                   <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px' }}>Bob Lee</p>
//                   <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>5h ago</p>
//                 </div>
//               </div>
//               <p style={{ margin: '0', fontSize: '16px', flexGrow: '1' }}>Just attended an amazing webinar!</p>
//               <div style={{ display: 'flex', gap: '20px', color: '#0A66C2', fontSize: '14px', marginTop: '15px' }}>
//                 <span>❤️ Like</span>
//                 <span>💬 Comment</span>
//                 <span>➡️ Share</span>
//               </div>
//             </div>
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside style={{ width: '20%', padding: '20px' }}>
//           <div style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Trending & Suggested</h4>
//             <div style={{ marginBottom: '10px' }}>
//               <p style={{ fontSize: '14px', margin: '5px 0' }}>Jane Smith - UI Designer</p>
//               <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Connect</a>
//             </div>
//             <p style={{ color: '#0A66C2', fontSize: '14px', margin: '5px 0' }}>#TechTrends - 1.2K posts</p>
//           </div>
//           <div style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Who’s Hiring?</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0' }}>Google - Software Engineer</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Apply</a>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React from 'react';

// function App() {
//   return (
//     <div style={{ fontFamily: 'Roboto, sans-serif', margin: 0, padding: 0, backgroundColor: '#F5F7FA', minHeight: '100vh' }}>
//       {/* Header */}
//       <header style={{
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//         backgroundColor: '#F5F7FA',
//         boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '15px 40px',
//         zIndex: 1000,
//         height: '70px',
//         color: '#1976D2'
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ 
//             width: '50px', 
//             height: '50px', 
//             backgroundColor: '#C0C0C0',
//             borderRadius: '50%', 
//             color: '#1976D2', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'center', 
//             fontSize: '28px', 
//             fontWeight: 'bold',
//             boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
//           }}>N</div>
//           <span style={{ 
//             fontSize: '22px', 
//             fontWeight: '600', 
//             letterSpacing: '1px', 
//             textTransform: 'uppercase',
//             color: '#1976D2'
//           }}>NetworkElite</span>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             style={{ 
//               padding: '10px 20px', 
//               borderRadius: '8px',
//               border: '1px solid #E0E0E0',
//               width: '300px', 
//               fontSize: '14px', 
//               backgroundColor: '#FFFFFF',
//               color: '#1976D2', 
//               outline: 'none', 
//               transition: 'width 0.3s ease'
//             }} 
//             onFocus={(e) => e.target.style.width = '350px'}
//             onBlur={(e) => e.target.style.width = '300px'}
//           />
//           <nav style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
//             <a href="#" style={{ 
//               color: '#1976D2', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#1976D2'}>🏠 Home</a>
//             <a href="#" style={{ 
//               color: '#1976D2', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#1976D2'}>🔗 Network</a>
//             <a href="#" style={{ 
//               color: '#1976D2', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#1976D2'}>💼 Jobs</a>
//             <a href="#" style={{ 
//               color: '#1976D2', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#1976D2'}>📩 Messages</a>
//             <a href="#" style={{ 
//               color: '#1976D2', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#1976D2'}>🔔 Alerts</a>
//             <div style={{ 
//               width: '40px', 
//               height: '40px', 
//               backgroundColor: '#C0C0C0',
//               borderRadius: '50%', 
//               cursor: 'pointer', 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center', 
//               fontSize: '18px', 
//               color: '#1976D2' 
//             }}>JD</div>
//           </nav>
//         </div>
//       </header>

//       {/* Main Container */}
//       <div style={{ display: 'flex', marginTop: '70px', padding: '0 20px' }}>
//         {/* Left Sidebar */}
//         <aside style={{ width: '20%', padding: '20px', position: 'fixed', height: 'calc(100vh - 60px)', overflowY: 'auto' }}>
//           <div style={{ 
//             background: 'linear-gradient(135deg, #FFFFFF 0%, #E8ECEF 100%)', 
//             padding: '20px', 
//             borderRadius: '12px', 
//             boxShadow: '0 6px 12px rgba(0,0,0,0.1)', 
//             marginBottom: '20px' 
//           }}>
//             <div style={{ position: 'relative', display: 'inline-block' }}>
//               <img src="https://via.placeholder.com/70" alt="Profile" style={{ borderRadius: '50%', border: '2px solid #C0C0C0' }} />
//               <span style={{ 
//                 position: 'absolute', 
//                 bottom: '0', 
//                 right: '0', 
//                 width: '14px', 
//                 height: '14px', 
//                 backgroundColor: '#00C4B4', 
//                 borderRadius: '50%', 
//                 border: '2px solid #FFF' 
//               }}></span>
//             </div>
//             <h3 style={{ margin: '10px 0 5px', color: '#1976D2', fontSize: '20px', fontWeight: '600' }}>John Doe</h3>
//             <p style={{ fontSize: '14px', color: '#666', margin: '0 0 5px' }}>Software Engineer</p>
//             <p style={{ fontSize: '13px', color: '#888', fontStyle: 'italic', margin: '0 0 10px' }}>"Building the future, one line at a time."</p>
//             <p style={{ fontSize: '13px', color: '#666', margin: '0 0 15px' }}>
//               <span style={{ color: '#1976D2' }}>250</span> Connections • <span style={{ color: '#1976D2' }}>180</span> Following
//             </p>
//             <button style={{ 
//               background: 'linear-gradient(90deg, #1976D2 0%, #00C4B4 100%)', 
//               color: '#FFF', 
//               padding: '8px 20px', 
//               border: 'none', 
//               borderRadius: '20px', 
//               fontSize: '14px', 
//               cursor: 'pointer', 
//               width: '100%', 
//               transition: 'transform 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//               View Profile
//             </button>
//             <div style={{ marginTop: '15px', borderTop: '1px solid #E0E0E0', paddingTop: '15px' }}>
//               <h4 style={{ margin: '0 0 10px', fontSize: '15px', color: '#1976D2' }}>Quick Actions</h4>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//                 <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '13px' }}>📩 Message</a>
//                 <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '13px' }}>🤝 Connect</a>
//                 <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '13px' }}>📁 Portfolio</a>
//               </div>
//             </div>
//           </div>
//           <div style={{ 
//             backgroundColor: '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '12px', 
//             boxShadow: '0 4px 8px rgba(0,0,0,0.05)' 
//           }}>
//             <h4 style={{ margin: '0 0 10px', fontSize: '16px', color: '#1976D2' }}>My Community</h4>
//             <p style={{ 
//               color: '#1976D2', 
//               fontSize: '14px', 
//               margin: '5px 0', 
//               backgroundColor: '#E8ECEF', 
//               padding: '5px 10px', 
//               borderRadius: '15px', 
//               display: 'inline-block' 
//             }}>#ReactDevs</p>
//             <p style={{ 
//               color: '#1976D2', 
//               fontSize: '14px', 
//               margin: '5px 0', 
//               backgroundColor: '#E8ECEF', 
//               padding: '5px 10px', 
//               borderRadius: '15px', 
//               display: 'inline-block' 
//             }}>#TechHub</p>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main style={{ width: '60%', marginLeft: '20%', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           {/* Post Input */}
//           <div style={{ 
//             backgroundColor: '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '30px', 
//             width: '500px'
//           }}>
//             <input 
//               type="text" 
//               placeholder="Post Title" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 marginBottom: '10px', 
//                 fontSize: '14px' 
//               }} 
//             />
//             <textarea 
//               placeholder="What’s on your mind?" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 resize: 'none', 
//                 height: '50px', 
//                 fontSize: '14px' 
//               }} 
//             ></textarea>
//             <button style={{ 
//               backgroundColor: '#00C4B4', 
//               color: '#FFF', 
//               padding: '6px 15px', 
//               border: 'none', 
//               borderRadius: '20px', 
//               marginTop: '8px', 
//               fontSize: '13px', 
//               cursor: 'pointer' 
//             }}>Post</button>
//           </div>

//           {/* Newsfeed */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '500px' }}>
//             <div style={{ 
//               backgroundColor: '#FFFFFF', 
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//               width: '500px', 
//               height: '500px', 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'space-between', 
//               transition: 'transform 0.2s', 
//               position: 'relative'
//             }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                   <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                   <div>
//                     <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px' }}>Alice Brown</p>
//                     <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>2h ago</p>
//                   </div>
//                 </div>
//                 <div style={{ display: 'flex', gap: '10px' }}>
//                   <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="More options">⋯</span>
//                   <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="Close">✖</span>
//                 </div>
//               </div>
//               <p style={{ margin: '0', fontSize: '16px', flexGrow: '1' }}>Excited to share my latest project!</p>
//               <div style={{ display: 'flex', gap: '20px', color: '#1976D2', fontSize: '14px', marginTop: '15px' }}>
//                 <span style={{ cursor: 'pointer' }}>❤️ Like</span>
//                 <span style={{ cursor: 'pointer' }}>💬 Comment</span>
//                 <span style={{ cursor: 'pointer' }}>➡️ Share</span>
//                 <span style={{ cursor: 'pointer' }}>🔄 Repost</span>
//               </div>
//             </div>
//             <div style={{ 
//               backgroundColor: '#FFFFFF', 
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//               width: '500px', 
//               height: '500px', 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'space-between', 
//               transition: 'transform 0.2s', 
//               position: 'relative'
//             }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                   <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                   <div>
//                     <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px' }}>Bob Lee</p>
//                     <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>5h ago</p>
//                   </div>
//                 </div>
//                 <div style={{ display: 'flex', gap: '10px' }}>
//                   <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="More options">⋯</span>
//                   <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="Close">✖</span>
//                 </div>
//               </div>
//               <p style={{ margin: '0', fontSize: '16px', flexGrow: '1' }}>Just attended an amazing webinar!</p>
//               <div style={{ display: 'flex', gap: '20px', color: '#1976D2', fontSize: '14px', marginTop: '15px' }}>
//                 <span style={{ cursor: 'pointer' }}>❤️ Like</span>
//                 <span style={{ cursor: 'pointer' }}>💬 Comment</span>
//                 <span style={{ cursor: 'pointer' }}>➡️ Share</span>
//                 <span style={{ cursor: 'pointer' }}>🔄 Repost</span>
//               </div>
//             </div>
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside style={{ width: '20%', padding: '20px' }}>
//           <div style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Trending & Suggested</h4>
//             <div style={{ marginBottom: '10px' }}>
//               <p style={{ fontSize: '14px', margin: '5px 0' }}>Jane Smith - UI Designer</p>
//               <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Connect</a>
//             </div>
//             <p style={{ color: '#1976D2', fontSize: '14px', margin: '5px 0' }}>#TechTrends - 1.2K posts</p>
//           </div>
//           <div style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Who’s Hiring?</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0' }}>Google - Software Engineer</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Apply</a>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

// export default App;





// import React from 'react';

// function App() {
//   return (
//     <div style={{ fontFamily: 'Roboto, sans-serif', margin: 0, padding: 0, backgroundColor: '#F5F7FA', minHeight: '100vh' }}>
//       {/* Header */}
//       <header style={{
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//         backgroundColor: '#F5F7FA',
//         boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '15px 40px',
//         zIndex: 1000,
//         height: '70px',
//         color: '#1976D2'
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ 
//             width: '50px', 
//             height: '50px', 
//             backgroundColor: '#C0C0C0',
//             borderRadius: '50%', 
//             color: '#1976D2', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'center', 
//             fontSize: '28px', 
//             fontWeight: 'bold',
//             boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
//           }}>N</div>
//           <span style={{ 
//             fontSize: '22px', 
//             fontWeight: '600', 
//             letterSpacing: '1px', 
//             textTransform: 'uppercase',
//             color: '#1976D2'
//           }}>NetworkElite</span>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             style={{ 
//               padding: '10px 20px', 
//               borderRadius: '8px',
//               border: '1px solid #E0E0E0',
//               width: '300px', 
//               fontSize: '14px', 
//               backgroundColor: '#FFFFFF',
//               color: '#1976D2', 
//               outline: 'none', 
//               transition: 'width 0.3s ease'
//             }} 
//             onFocus={(e) => e.target.style.width = '350px'}
//             onBlur={(e) => e.target.style.width = '300px'}
//           />
//           <nav style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
//             <a href="#" style={{ 
//               color: '#1976D2', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#1976D2'}>🏠 Home</a>
//             <a href="#" style={{ 
//               color: '#1976D2', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#1976D2'}>🔗 Network</a>
//             <a href="#" style={{ 
//               color: '#1976D2', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#1976D2'}>💼 Jobs</a>
//             <a href="#" style={{ 
//               color: '#1976D2', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#1976D2'}>📩 Messages</a>
//             <a href="#" style={{ 
//               color: '#1976D2', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#1976D2'}>🔔 Alerts</a>
//             <div style={{ 
//               width: '40px', 
//               height: '40px', 
//               backgroundColor: '#C0C0C0',
//               borderRadius: '50%', 
//               cursor: 'pointer', 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center', 
//               fontSize: '18px', 
//               color: '#1976D2' 
//             }}>JD</div>
//           </nav>
//         </div>
//       </header>

//       {/* Main Container */}
//       <div style={{ display: 'flex', marginTop: '70px', padding: '0 10px' }}>
//         {/* Left Sidebar */}
//         <aside style={{ width: '20%', padding: '20px', position: 'fixed', height: 'calc(100vh - 60px)', overflowY: 'auto' }}>
//           <div style={{ 
//             background: 'linear-gradient(135deg, #FFFFFF 0%, #E8ECEF 100%)', 
//             padding: '20px', 
//             borderRadius: '12px', 
//             boxShadow: '0 6px 12px rgba(0,0,0,0.1)', 
//             marginBottom: '20px' 
//           }}>
//             <div style={{ position: 'relative', display: 'inline-block' }}>
//               <img src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D add profle image" alt="Profile" style={{ borderRadius: '50%', border: '2px solid #C0C0C0' }} />
//               <span style={{ 
//                 position: 'absolute', 
//                 bottom: '0', 
//                 right: '0', 
//                 width: '14px', 
//                 height: '14px', 
//                 backgroundColor: '#00C4B4', 
//                 borderRadius: '50%', 
//                 border: '2px solid #FFF' 
//               }}></span>
//             </div>
//             <h3 style={{ margin: '10px 0 5px', color: '#1976D2', fontSize: '20px', fontWeight: '600' }}>John Doe</h3>
//             <p style={{ fontSize: '14px', color: '#666', margin: '0 0 5px' }}>Software Engineer</p>
//             <p style={{ fontSize: '13px', color: '#888', fontStyle: 'italic', margin: '0 0 10px' }}>"Building the future, one line at a time."</p>
//             <p style={{ fontSize: '13px', color: '#666', margin: '0 0 15px' }}>
//               <span style={{ color: '#1976D2' }}>250</span> Connections • <span style={{ color: '#1976D2' }}>180</span> Following
//             </p>
//             <button style={{ 
//               background: 'linear-gradient(90deg, #1976D2 0%, #00C4B4 100%)', 
//               color: '#FFF', 
//               padding: '8px 20px', 
//               border: 'none', 
//               borderRadius: '20px', 
//               fontSize: '14px', 
//               cursor: 'pointer', 
//               width: '100%', 
//               transition: 'transform 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//               View Profile
//             </button>
//             <div style={{ marginTop: '15px', borderTop: '1px solid #E0E0E0', paddingTop: '15px' }}>
//               <h4 style={{ margin: '0 0 10px', fontSize: '15px', color: '#1976D2' }}>Quick Actions</h4>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//                 <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '13px' }}>📩 Message</a>
//                 <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '13px' }}>🤝 Connect</a>
//                 <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '13px' }}>📁 Portfolio</a>
//               </div>
//             </div>
//           </div>
//           <div style={{ 
//             backgroundColor: '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '12px', 
//             boxShadow: '0 4px 8px rgba(0,0,0,0.05)' 
//           }}>
//             <h4 style={{ margin: '0 0 10px', fontSize: '16px', color: '#1976D2' }}>My Community</h4>
//             <p style={{ 
//               color: '#1976D2', 
//               fontSize: '14px', 
//               margin: '5px 0', 
//               backgroundColor: '#E8ECEF', 
//               padding: '5px 10px', 
//               borderRadius: '15px', 
//               display: 'inline-block' 
//             }}>#ReactDevs</p>
//             <p style={{ 
//               color: '#1976D2', 
//               fontSize: '14px', 
//               margin: '5px 0', 
//               backgroundColor: '#E8ECEF', 
//               padding: '5px 10px', 
//               borderRadius: '15px', 
//               display: 'inline-block' 
//             }}>#TechHub</p>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main style={{ width: '64%', marginLeft: '18%', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           {/* Post Input */}
//           <div style={{ 
//             backgroundColor: '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '30px', 
//             width: '500px'
//           }}>
//             <input 
//               type="text" 
//               placeholder="Post Title" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 marginBottom: '10px', 
//                 fontSize: '14px' 
//               }} 
//             />
//             <textarea 
//               placeholder="What’s on your mind?" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 resize: 'none', 
//                 height: '50px', 
//                 fontSize: '14px' 
//               }} 
//             ></textarea>
//             <button style={{ 
//               backgroundColor: '#00C4B4', 
//               color: '#FFF', 
//               padding: '6px 15px', 
//               border: 'none', 
//               borderRadius: '20px', 
//               marginTop: '8px', 
//               fontSize: '13px', 
//               cursor: 'pointer' 
//             }}>Post</button>
//           </div>

//           {/* Newsfeed */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '500px' }}>
//             <div style={{ 
//               backgroundColor: '#FFFFFF', 
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//               width: '500px', 
//               height: '500px', 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'space-between', 
//               transition: 'transform 0.2s', 
//               position: 'relative'
//             }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                   <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                   <div>
//                     <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px' }}>Alice Brown</p>
//                     <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>2h ago</p>
//                   </div>
//                 </div>
//                 <div style={{ display: 'flex', gap: '10px' }}>
//                   <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="More options">⋯</span>
//                   <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="Close">✖</span>
//                 </div>
//               </div>
//               <p style={{ margin: '0', fontSize: '16px', flexGrow: '1' }}>Excited to share my latest project!</p>
//               <div style={{ display: 'flex', gap: '20px', color: '#1976D2', fontSize: '14px', marginTop: '15px' }}>
//                 <span style={{ cursor: 'pointer' }}>❤️ Like</span>
//                 <span style={{ cursor: 'pointer' }}>💬 Comment</span>
//                 <span style={{ cursor: 'pointer' }}>➡️ Share</span>
//                 <span style={{ cursor: 'pointer' }}>🔄 Repost</span>
//               </div>
//             </div>
//             <div style={{ 
//               backgroundColor: '#FFFFFF', 
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//               width: '500px', 
//               height: '500px', 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'space-between', 
//               transition: 'transform 0.2s', 
//               position: 'relative'
//             }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                   <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                   <div>
//                     <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px' }}>Bob Lee</p>
//                     <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>5h ago</p>
//                   </div>
//                 </div>
//                 <div style={{ display: 'flex', gap: '10px' }}>
//                   <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="More options">⋯</span>
//                   <span style={{ cursor: 'pointer', color: '666', fontSize: '18px' }} title="Close">✖</span>
//                 </div>
//               </div>
//               <p style={{ margin: '0', fontSize: '16px', flexGrow: '1' }}>Just attended an amazing webinar!</p>
//               <div style={{ display: 'flex', gap: '20px', color: '#1976D2', fontSize: '14px', marginTop: '15px' }}>
//                 <span style={{ cursor: 'pointer' }}>❤️ Like</span>
//                 <span style={{ cursor: 'pointer' }}>💬 Comment</span>
//                 <span style={{ cursor: 'pointer' }}>➡️ Share</span>
//                 <span style={{ cursor: 'pointer' }}>🔄 Repost</span>
//               </div>
//             </div>
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside style={{ width: '18%', padding: '20px' }}>
//           <div style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Trending & Suggested</h4>
//             <div style={{ marginBottom: '10px' }}>
//               <p style={{ fontSize: '14px', margin: '5px 0' }}>Jane Smith - UI Designer</p>
//               <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Connect</a>
//             </div>
//             <p style={{ color: '#1976D2', fontSize: '14px', margin: '5px 0' }}>#TechTrends - 1.2K posts</p>
//           </div>
//           <div style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Who’s Hiring?</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0' }}>Google - Software Engineer</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Apply</a>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React from 'react';

// function App() {
//   return (
//     <div style={{ fontFamily: 'Roboto, sans-serif', margin: 0, padding: 0, backgroundColor: '#F5F7FA', minHeight: '100vh' }}>
//       {/* Header */}
//       <header style={{
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//         backgroundColor: '#F5F7FA',
//         boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '15px 40px',
//         zIndex: 1000,
//         height: '70px',
//         color: '#1976D2'
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ 
//             width: '50px', 
//             height: '50px', 
//             backgroundColor: '#C0C0C0',
//             borderRadius: '50%', 
//             color: '#1976D2', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'center', 
//             fontSize: '28px', 
//             fontWeight: 'bold',
//             boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
//           }}>N</div>
//           <span style={{ 
//             fontSize: '22px', 
//             fontWeight: '600', 
//             letterSpacing: '1px', 
//             textTransform: 'uppercase',
//             color: '#1976D2'
//           }}>NetworkElite</span>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <input 
//             type="text" 
//             placeholder="Search..." 
//             style={{ 
//               padding: '10px 20px', 
//               borderRadius: '8px',
//               border: '1px solid #E0E0E0',
//               width: '300px', 
//               fontSize: '14px', 
//               backgroundColor: '#FFFFFF',
//               color: '#1976D2', 
//               outline: 'none', 
//               transition: 'width 0.3s ease'
//             }} 
//             onFocus={(e) => e.target.style.width = '350px'}
//             onBlur={(e) => e.target.style.width = '300px'}
//           />
//           <nav style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
//             <a href="#" style={{ 
//               color: '#1976D2', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#1976D2'}>🏠 Home</a>
//             <a href="#" style={{ 
//               color: '#1976D2', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#1976D2'}>🔗 Network</a>
//             <a href="#" style={{ 
//               color: '#1976D2', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#1976D2'}>💼 Jobs</a>
//             <a href="#" style={{ 
//               color: '#1976D2', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#1976D2'}>📩 Messages</a>
//             <a href="#" style={{ 
//               color: '#1976D2', 
//               textDecoration: 'none', 
//               fontSize: '15px', 
//               fontWeight: '500', 
//               transition: 'color 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.color = '#C0C0C0'} onMouseLeave={(e) => e.target.style.color = '#1976D2'}>🔔 Alerts</a>
//             <div style={{ 
//                width: '40px', 
//                height: '40px', 
//                borderRadius: '50%', 
//                cursor: 'pointer', 
//                overflow: 'hidden', 
//                display: 'flex', 
//                alignItems: 'center', 
//                justifyContent: 'center' 
//              }}>
//                 <img 
//                 src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//                 alt="Profile" 
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
//               />
//            </div>
//           </nav>
//         </div>
//       </header>

//       {/* Main Container */}
//       <div style={{ display: 'flex', marginTop: '70px', padding: '0 10px', overflowY: 'auto', height: 'calc(100vh - 70px)' }}>
//         {/* Left Sidebar */}
//         <aside style={{ width: '18%', padding: '20px' }}>
//           <div style={{ 
//             background: 'linear-gradient(135deg, #FFFFFF 0%, #E8ECEF 100%)', 
//             padding: '20px', 
//             borderRadius: '12px', 
//             boxShadow: '0 6px 12px rgba(0,0,0,0.1)', 
//             marginBottom: '20px' 
//           }}>
//            <div style={{ position: 'relative', display: 'inline-block' }}>
//             <img src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D add profle image" alt="Profile" style={{ borderRadius: '50%', border: '2px solid #C0C0C0' }} />
//                <span style={{ 
//              position: 'absolute', 
//                 bottom: '0', 
//                  right: '0', 
//                  width: '14px', 
//                 height: '14px', 
//                 backgroundColor: '#00C4B4', 
//                 borderRadius: '50%', 
//                 border: '2px solid #FFF' 
//               }}></span>
//             </div>
//             <h3 style={{ margin: '10px 0 5px', color: '#1976D2', fontSize: '20px', fontWeight: '600' }}>John Doe</h3>
//             <p style={{ fontSize: '14px', color: '#666', margin: '0 0 5px' }}>Software Engineer</p>
//             <p style={{ fontSize: '13px', color: '#888', fontStyle: 'italic', margin: '0 0 10px' }}>"Building the future, one line at a time."</p>
//             <p style={{ fontSize: '13px', color: '#666', margin: '0 0 15px' }}>
//               <span style={{ color: '#1976D2' }}>250</span> Connections • <span style={{ color: '#1976D2' }}>180</span> Following
//             </p>
//             <button style={{ 
//               background: 'linear-gradient(90deg, #1976D2 0%, #00C4B4 100%)', 
//               color: '#FFF', 
//               padding: '8px 20px', 
//               border: 'none', 
//               borderRadius: '20px', 
//               fontSize: '14px', 
//               cursor: 'pointer', 
//               width: '100%', 
//               transition: 'transform 0.2s ease' 
//             }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//               View Profile
//             </button>
//             <div style={{ marginTop: '15px', borderTop: '1px solid #E0E0E0', paddingTop: '15px' }}>
//               <h4 style={{ margin: '0 0 10px', fontSize: '15px', color: '#1976D2' }}>Quick Actions</h4>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//                 <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '13px' }}>📩 Message</a>
//                 <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '13px' }}>🤝 Connect</a>
//                 <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '13px' }}>📁 Portfolio</a>
//               </div>
//             </div>
//           </div>
//           <div style={{ 
//             backgroundColor: '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '12px', 
//             boxShadow: '0 4px 8px rgba(0,0,0,0.05)' 
//           }}>
//             <h4 style={{ margin: '0 0 10px', fontSize: '16px', color: '#1976D2' }}>My Community</h4>
//             <p style={{ 
//               color: '#1976D2', 
//               fontSize: '14px', 
//               margin: '5px 0', 
//               backgroundColor: '#E8ECEF', 
//               padding: '5px 10px', 
//               borderRadius: '15px', 
//               display: 'inline-block' 
//             }}>#ReactDevs</p>
//             <p style={{ 
//               color: '#1976D2', 
//               fontSize: '14px', 
//               margin: '5px 0', 
//               backgroundColor: '#E8ECEF', 
//               padding: '5px 10px', 
//               borderRadius: '15px', 
//               display: 'inline-block' 
//             }}>#TechHub</p>
//           </div>
//         </aside>

//         {/* Main Content */}
//         <main style={{ width: '64%', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           {/* Post Input */}
//           <div style={{ 
//             backgroundColor: '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '30px', 
//             width: '500px'
//           }}>
//             <input 
//               type="text" 
//               placeholder="Post Title" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 marginBottom: '10px', 
//                 fontSize: '14px' 
//               }} 
//             />
//             <textarea 
//               placeholder="What’s on your mind?" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 resize: 'none', 
//                 height: '50px', 
//                 fontSize: '14px' 
//               }} 
//             ></textarea>
//             <button style={{ 
//               backgroundColor: '#00C4B4', 
//               color: '#FFF', 
//               padding: '6px 15px', 
//               border: 'none', 
//               borderRadius: '20px', 
//               marginTop: '8px', 
//               fontSize: '13px', 
//               cursor: 'pointer' 
//             }}>Post</button>
//             <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
//   <span style={{ cursor: 'pointer', fontSize: '18px' }} title="Add Image">📷</span>
//   <span style={{ cursor: 'pointer', fontSize: '18px' }} title="Add Poll">📊</span>
// </div>
//           </div>

//           {/* Newsfeed */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '500px' }}>
//             <div style={{ 
//               backgroundColor: '#FFFFFF', 
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//               width: '500px', 
//               height: '500px', 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'space-between', 
//               transition: 'transform 0.2s', 
//               position: 'relative'
//             }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                   <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                   <div>
//                     <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px' }}>Alice Brown</p>
//                     <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>2h ago</p>
//                   </div>
//                 </div>
//                 <div style={{ display: 'flex', gap: '10px' }}>
//                   <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="More options">⋯</span>
//                   <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="Close">✖</span>
//                 </div>
//               </div>
//               <p style={{ margin: '0', fontSize: '16px', flexGrow: '1' }}>Excited to share my latest project!</p>
//               <div style={{ display: 'flex', gap: '20px', color: '#1976D2', fontSize: '14px', marginTop: '15px' }}>
//                 <span style={{ cursor: 'pointer' }}>❤️ Like</span>
//                 <span style={{ cursor: 'pointer' }}>💬 Comment</span>
//                 <span style={{ cursor: 'pointer' }}>➡️ Share</span>
//                 <span style={{ cursor: 'pointer' }}>🔄 Repost</span>
//               </div>
//             </div>
//             <div style={{ 
//               backgroundColor: '#FFFFFF', 
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//               width: '500px', 
//               height: '500px', 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'space-between', 
//               transition: 'transform 0.2s', 
//               position: 'relative'
//             }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                   <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                   <div>
//                     <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px' }}>Bob Lee</p>
//                     <p style={{ margin: '0', fontSize: '12px', color: '#666' }}>5h ago</p>
//                   </div>
//                 </div>
//                 <div style={{ display: 'flex', gap: '10px' }}>
//                   <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="More options">⋯</span>
//                   <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="Close">✖</span>
//                 </div>
//               </div>
//               <p style={{ margin: '0', fontSize: '16px', flexGrow: '1' }}>Just attended an amazing webinar!</p>
//               <div style={{ display: 'flex', gap: '20px', color: '#1976D2', fontSize: '14px', marginTop: '15px' }}>
//                 <span style={{ cursor: 'pointer' }}>❤️ Like</span>
//                 <span style={{ cursor: 'pointer' }}>💬 Comment</span>
//                 <span style={{ cursor: 'pointer' }}>➡️ Share</span>
//                 <span style={{ cursor: 'pointer' }}>🔄 Repost</span>
//               </div>
//             </div>
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside style={{ width: '18%', padding: '20px' }}>
//           <div style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', marginBottom: '20px' }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Trending & Suggested</h4>
//             <div style={{ marginBottom: '10px' }}>
//               <p style={{ fontSize: '14px', margin: '5px 0' }}>Jane Smith - UI Designer</p>
//               <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Connect</a>
//             </div>
//             <p style={{ color: '#1976D2', fontSize: '14px', margin: '5px 0' }}>#TechTrends - 1.2K posts</p>
//           </div>
//           <div style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>Who’s Hiring?</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0' }}>Google - Software Engineer</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Apply</a>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   return (
//     <div style={{ 
//       fontFamily: 'Roboto, sans-serif', 
//       margin: 0, 
//       padding: 0, 
//       backgroundColor: isDarkMode ? '#1A1A1A' : '#F5F7FA', 
//       minHeight: '100vh', 
//       color: isDarkMode ? '#E0E0E0' : '#000' 
//     }}>
//       {/* Header */}
//       <header style={{
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//         backgroundColor: isDarkMode ? '#2A2A2A' : '#F5F7FA',
//         boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '15px 40px',
//         zIndex: 1000,
//         height: '70px',
//         color: '#1976D2'
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           {/* <span 
//             style={{ cursor: 'pointer', fontSize: '24px' }} 
//             onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//           >☰</span> */}
//           <div style={{ 
//             width: '50px', 
//             height: '50px', 
//             backgroundColor: '#C0C0C0',
//             borderRadius: '50%', 
//             color: '#1976D2', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'center', 
//             fontSize: '28px', 
//             fontWeight: 'bold',
//             boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
//           }}>N</div>
//           <span style={{ 
//             fontSize: '22px', 
//             fontWeight: '600', 
//             letterSpacing: '1px', 
//             textTransform: 'uppercase',
//             color: '#1976D2'
//           }}>NetworkElite</span>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ position: 'relative' }}>
//             <input 
//               type="text" 
//               placeholder="Search..." 
//               style={{ 
//                 padding: '10px 20px', 
//                 borderRadius: '8px',
//                 border: '1px solid #E0E0E0',
//                 width: '300px', 
//                 fontSize: '14px', 
//                 backgroundColor: isDarkMode ? '#333' : '#FFFFFF',
//                 color: isDarkMode ? '#E0E0E0' : '#1976D2', 
//                 outline: 'none', 
//                 transition: 'width 0.3s ease'
//               }} 
//               onFocus={(e) => e.target.style.width = '350px'}
//               onBlur={(e) => e.target.style.width = '300px'}
//             />
//             <div style={{
//               position: 'absolute',
//               top: '100%',
//               left: 0,
//               width: '300px',
//               backgroundColor: isDarkMode ? '#333' : '#FFF',
//               boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//               borderRadius: '8px',
//               padding: '10px',
//               zIndex: 1000,
//               display: 'none' // Toggle with JS in real app
//             }}>
//               <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>John Doe</p>
//               <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>#ReactDevs</p>
//             </div>
//           </div>
//           <nav style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🏠 Home</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🔗 Network</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>💼 Jobs</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>📩 Messages</a>
//             <div style={{ position: 'relative' }}>
//               <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🔔 Alerts</a>
//               <span style={{
//                 position: 'absolute',
//                 top: '-5px',
//                 right: '-10px',
//                 backgroundColor: '#FF5252',
//                 color: '#FFF',
//                 borderRadius: '50%',
//                 width: '18px',
//                 height: '18px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: '12px'
//               }}>3</span>
//             </div>
//             <div style={{ 
//               width: '40px', 
//               height: '40px', 
//               borderRadius: '50%', 
//               cursor: 'pointer', 
//               overflow: 'hidden', 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center' 
//             }}>
//               <img 
//                 src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//                 alt="Profile" 
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
//               />
//             </div>
//             <span 
//               style={{ cursor: 'pointer', fontSize: '18px' }} 
//               onClick={() => setIsDarkMode(!isDarkMode)}
//             >{isDarkMode ? '☀️' : '🌙'}</span>
//           </nav>
//         </div>
//       </header>

//       {/* Main Container */}
//       <div style={{ display: 'flex', marginTop: '70px', padding: '0 10px', overflowY: 'auto', height: 'calc(100vh - 70px)' }}>
//         {/* Left Sidebar */}
//         {isSidebarOpen && (
//           <aside style={{ width: '18%', padding: '20px' }}>
//             <div style={{ 
//               background: isDarkMode ? 'linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%)' : 'linear-gradient(135deg, #FFFFFF 0%, #E8ECEF 100%)', 
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 6px 12px rgba(0,0,0,0.1)', 
//               marginBottom: '20px' 
//             }}>

//               <div style={{ position: 'relative', display: 'inline-block' }}>
//             <img src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D add profle image" alt="Profile" style={{ borderRadius: '50%', border: '2px solid #C0C0C0' }} />               <span style={{ 
//              position: 'absolute', 
//                 bottom: '0', 
//                  right: '0', 
//                  width: '14px', 
//                 height: '14px', 
//                 backgroundColor: '#00C4B4', 
//                 borderRadius: '50%', 
//                 border: '2px solid #FFF' 
//               }}></span>
//             </div>
//               <h3 style={{ margin: '10px 0 5px', color: '#1976D2', fontSize: '20px', fontWeight: '600' }}>John Doe</h3>
//               <p style={{ fontSize: '14px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>Software Engineer</p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#888' : '#888', fontStyle: 'italic', margin: '0 0 10px' }}>"Building the future, one line at a time."</p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>
//                 <span style={{ color: '#1976D2' }}>250</span> Connections • <span style={{ color: '#1976D2' }}>180</span> Following
//               </p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 15px' }}>
//                 <span style={{ color: '#1976D2' }}>1.2K</span> Profile Views • <span style={{ color: '#1976D2' }}>3.5K</span> Impressions
//               </p>
//               <button style={{ 
//                 background: 'linear-gradient(90deg, #1976D2 0%, #00C4B4 100%)', 
//                 color: '#FFF', 
//                 padding: '8px 20px', 
//                 border: 'none', 
//                 borderRadius: '20px', 
//                 fontSize: '14px', 
//                 cursor: 'pointer', 
//                 width: '100%', 
//                 transition: 'transform 0.2s ease' 
//               }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                 View Profile
//               </button>
//               <div style={{ marginTop: '15px', borderTop: '1px solid #E0E0E0', paddingTop: '15px' }}>
//                 <h4 style={{ margin: '0 0 10px', fontSize: '15px', color: '#1976D2' }}>Quick Actions</h4>
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//                   <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '13px' }}>📩 Message</a>
//                   <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '13px' }}>🤝 Connect</a>
//                   <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '13px' }}>📁 Portfolio</a>
//                 </div>
//               </div>
//             </div>
//             <div style={{ 
//               backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//               padding: '15px', 
//               borderRadius: '12px', 
//               boxShadow: '0 4px 8px rgba(0,0,0,0.05)' 
//             }}>
//               <h4 style={{ margin: '0 0 10px', fontSize: '16px', color: '#1976D2' }}>My Community</h4>
//               <p style={{ 
//                 color: '#1976D2', 
//                 fontSize: '14px', 
//                 margin: '5px 0', 
//                 backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', 
//                 padding: '5px 10px', 
//                 borderRadius: '15px', 
//                 display: 'inline-block' 
//               }}>#ReactDevs</p>
//               <p style={{ 
//                 color: '#1976D2', 
//                 fontSize: '14px', 
//                 margin: '5px 0', 
//                 backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', 
//                 padding: '5px 10px', 
//                 borderRadius: '15px', 
//                 display: 'inline-block' 
//               }}>#TechHub</p>
//             </div>
//           </aside>
//         )}

//         {/* Main Content */}
//         <main style={{ width: isSidebarOpen ? '64%' : '82%', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//           {/* Featured Content Carousel */}
//           <div style={{
//             display: 'flex',
//             overflowX: 'hidden',
//             gap: '20px',
//             marginBottom: '30px',
//             width: '500px',
//             padding: '10px 0'
//           }}>
//             <div style={{
//               flex: '0 0 200px',
//               height: '100px',
//               backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF',
//               borderRadius: '8px',
//               boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//               padding: '10px',
//               color: isDarkMode ? '#E0E0E0' : '#666'
//             }}>Trending Post #1</div>
//             <div style={{
//               flex: '0 0 200px',
//               height: '100px',
//               backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF',
//               borderRadius: '8px',
//               boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//               padding: '10px',
//               color: isDarkMode ? '#E0E0E0' : '#666'
//             }}>Job Highlight</div>
//             <div style={{
//               flex: '0 0 200px',
//               height: '100px',
//               backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF',
//               borderRadius: '8px',
//               boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//               padding: '10px',
//               color: isDarkMode ? '#E0E0E0' : '#666'
//             }}>Community Spotlight</div>
//           </div>

//           {/* Post Input */}
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '30px', 
//             width: '500px'
//           }}>
//             <input 
//               type="text" 
//               placeholder="Post Title" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 marginBottom: '10px', 
//                 fontSize: '14px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 color: isDarkMode ? '#E0E0E0' : '#000'
//               }} 
//             />
//             <textarea 
//               placeholder="What’s on your mind?" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 resize: 'none', 
//                 height: '50px', 
//                 fontSize: '14px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 color: isDarkMode ? '#E0E0E0' : '#000'
//               }} 
//             ></textarea>
//             <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
//               <span style={{ cursor: 'pointer', fontSize: '18px' }} title="Add Image">📷</span>
//               <span style={{ cursor: 'pointer', fontSize: '18px' }} title="Add Poll">📊</span>
//             </div>
//             <button style={{ 
//               backgroundColor: '#00C4B4', 
//               color: '#FFF', 
//               padding: '6px 15px', 
//               border: 'none', 
//               borderRadius: '20px', 
//               marginTop: '8px', 
//               fontSize: '13px', 
//               cursor: 'pointer' 
//             }}>Post</button>
//           </div>

//           {/* Newsfeed */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '500px' }}>
//             <div style={{ 
//               backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//               width: '500px', 
//               height: '500px', 
//               display: 'flex', 
//               flexDirection: 'column', 
//               justifyContent: 'space-between', 
//               transition: 'transform 0.2s', 
//               position: 'relative'
//             }}>
//               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                   <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                   <div>
//                     <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px', color: isDarkMode ? '#E0E0E0' : '#000' }}>Alice Brown</p>
//                     <p style={{ margin: '0', fontSize: '12px', color: isDarkMode ? '#B0B0B0' : '#666' }}>2h ago</p>
//                   </div>
//                 </div>
//                 <div style={{ display: 'flex', gap: '10px' }}>
//                   <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="More options">⋯</span>
//                   <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="Close">✖</span>
//                 </div>
//               </div>
//               <p style={{ margin: '0', fontSize: '16px', flexGrow: '1', color: isDarkMode ? '#E0E0E0' : '#000' }}>Excited to share my latest project!</p>
//               <div style={{ display: 'flex', gap: '20px', color: '#1976D2', fontSize: '14px', marginTop: '15px' }}>
//                 <span style={{ cursor: 'pointer' }}>❤️ Like</span>
//                 <span style={{ cursor: 'pointer' }}>💬 Comment</span>
//                 <span style={{ cursor: 'pointer' }}>➡️ Share</span>
//                 <span style={{ cursor: 'pointer' }}>🔄 Repost</span>
//               </div>
//             </div>
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside style={{ width: '18%', padding: '20px' }}>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Trending & Suggested</h4>
//             <div style={{ marginBottom: '10px' }}>
//               <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Jane Smith - UI Designer</p>
//               <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Connect</a>
//             </div>
//             <p style={{ color: '#1976D2', fontSize: '14px', margin: '5px 0' }}>#TechTrends - 1.2K posts</p>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Who’s Hiring?</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Google - Software Engineer</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Apply</a>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Quick Widgets</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>🌤️ 28°C, Sunny</p>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>📅 Today: Meeting at 3 PM</p>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   return (
//     <div style={{ 
//       fontFamily: 'Roboto, sans-serif', 
//       margin: 0, 
//       padding: 0, 
//       backgroundColor: isDarkMode ? '#1A1A1A' : '#F5F7FA', 
//       minHeight: '100vh', 
//       color: isDarkMode ? '#E0E0E0' : '#000' 
//     }}>
//       {/* Header */}
//       <header style={{
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//         backgroundColor: isDarkMode ? '#2A2A2A' : '#F5F7FA',
//         boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '15px 40px',
//         zIndex: 1000,
//         height: '70px',
//         color: '#1976D2'
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ 
//             width: '50px', 
//             height: '50px', 
//             backgroundColor: '#C0C0C0',
//             borderRadius: '50%', 
//             color: '#1976D2', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'center', 
//             fontSize: '28px', 
//             fontWeight: 'bold',
//             boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
//           }}>N</div>
//           <span style={{ 
//             fontSize: '22px', 
//             fontWeight: '600', 
//             letterSpacing: '1px', 
//             textTransform: 'uppercase',
//             color: '#1976D2'
//           }}>NetworkElite</span>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ position: 'relative' }}>
//             <input 
//               type="text" 
//               placeholder="Search..." 
//               style={{ 
//                 padding: '10px 20px', 
//                 borderRadius: '8px',
//                 border: '1px solid #E0E0E0',
//                 width: '300px', 
//                 fontSize: '14px', 
//                 backgroundColor: isDarkMode ? '#333' : '#FFFFFF',
//                 color: isDarkMode ? '#E0E0E0' : '#1976D2', 
//                 outline: 'none', 
//                 transition: 'width 0.3s ease'
//               }} 
//               onFocus={(e) => e.target.style.width = '350px'}
//               onBlur={(e) => e.target.style.width = '300px'}
//             />
//             <div style={{
//               position: 'absolute',
//               top: '100%',
//               left: 0,
//               width: '300px',
//               backgroundColor: isDarkMode ? '#333' : '#FFF',
//               boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//               borderRadius: '8px',
//               padding: '10px',
//               zIndex: 1000,
//               display: 'none'
//             }}>
//               <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>John Doe</p>
//               <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>#ReactDevs</p>
//             </div>
//           </div>
//           <nav style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🏠 Home</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🔗 Network</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>💼 Jobs</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>📩 Messages</a>
//             <div style={{ position: 'relative' }}>
//               <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🔔 Alerts</a>
//               <span style={{
//                 position: 'absolute',
//                 top: '-5px',
//                 right: '-10px',
//                 backgroundColor: '#FF5252',
//                 color: '#FFF',
//                 borderRadius: '50%',
//                 width: '18px',
//                 height: '18px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: '12px'
//               }}>3</span>
//             </div>
//             <div style={{ 
//               width: '40px', 
//               height: '40px', 
//               borderRadius: '50%', 
//               cursor: 'pointer', 
//               overflow: 'hidden', 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center' 
//             }}>
//               <img 
//                 src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//                 alt="Profile" 
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
//               />
//             </div>
//             <span 
//               style={{ cursor: 'pointer', fontSize: '18px' }} 
//               onClick={() => setIsDarkMode(!isDarkMode)}
//             >{isDarkMode ? '☀️' : '🌙'}</span>
//           </nav>
//         </div>
//       </header>

//       {/* Main Container */}
//       <div style={{ display: 'flex', marginTop: '70px', padding: '0 10px', height: 'calc(100vh - 70px)' }}>
//         {/* Left Sidebar */}
//         {isSidebarOpen && (
//           <aside style={{ width: '18%', padding: '20px' }}>
//             <div style={{ 
//               background: isDarkMode ? 'linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%)' : 'linear-gradient(135deg, #FFFFFF 0%, #E8ECEF 100%)', 
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 6px 12px rgba(0,0,0,0.1)', 
//               marginBottom: '20px' 
//             }}>
//               <div style={{ position: 'relative', display: 'inline-block' }}>
//                 <img src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" style={{ borderRadius: '50%', border: '2px solid #C0C0C0' }} />               
//                 <span style={{ 
//                   position: 'absolute', 
//                   bottom: '0', 
//                   right: '0', 
//                   width: '14px', 
//                   height: '14px', 
//                   backgroundColor: '#00C4B4', 
//                   borderRadius: '50%', 
//                   border: '2px solid #FFF' 
//                 }}></span>
//               </div>
//               <h3 style={{ margin: '10px 0 5px', color: '#1976D2', fontSize: '20px', fontWeight: '600' }}>John Doe</h3>
//               <p style={{ fontSize: '14px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>Software Engineer</p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#888' : '#888', fontStyle: 'italic', margin: '0 0 10px' }}>"Building the future, one line at a time."</p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>
//                 <span style={{ color: '#1976D2' }}>250</span> Connections • <span style={{ color: '#1976D2' }}>180</span> Following
//               </p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 15px' }}>
//                 <span style={{ color: '#1976D2' }}>1.2K</span> Profile Views • <span style={{ color: '#1976D2' }}>3.5K</span> Impressions
//               </p>
//               <button style={{ 
//                 background: 'linear-gradient(90deg, #1976D2 0%, #00C4B4 100%)', 
//                 color: '#FFF', 
//                 padding: '8px 20px', 
//                 border: 'none', 
//                 borderRadius: '20px', 
//                 fontSize: '14px', 
//                 cursor: 'pointer', 
//                 width: '100%', 
//                 transition: 'transform 0.2s ease' 
//               }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                 View Profile
//               </button>
//               <div style={{ marginTop: '15px', borderTop: '1px solid #E0E0E0', paddingTop: '15px' }}>
//                 <h4 style={{ margin: '0 0 10px', fontSize: '15px', color: '#1976D2' }}>Quick Actions</h4>
//                 <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
//                   <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '13px' }}>📩 Message</a>
//                   <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '13px' }}>🤝 Connect</a>
//                   <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '13px' }}>📁 Portfolio</a>
//                 </div>
//               </div>
//             </div>
//             <div style={{ 
//               backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//               padding: '15px', 
//               borderRadius: '12px', 
//               boxShadow: '0 4px 8px rgba(0,0,0,0.05)' 
//             }}>
//               <h4 style={{ margin: '0 0 10px', fontSize: '16px', color: '#1976D2' }}>My Community</h4>
//               <p style={{ 
//                 color: '#1976D2', 
//                 fontSize: '14px', 
//                 margin: '5px 0', 
//                 backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', 
//                 padding: '5px 10px', 
//                 borderRadius: '15px', 
//                 display: 'inline-block' 
//               }}>#ReactDevs</p>
//               <p style={{ 
//                 color: '#1976D2', 
//                 fontSize: '14px', 
//                 margin: '5px 0', 
//                 backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', 
//                 padding: '5px 10px', 
//                 borderRadius: '15px', 
//                 display: 'inline-block' 
//               }}>#TechHub</p>
//             </div>
//           </aside>
//         )}

//         {/* Main Content */}
//         <main style={{ 
//           width: isSidebarOpen ? '64%' : '82%', 
//           padding: '20px', 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'center',
//           overflowY: 'hidden' 
//         }}>
//           {/* Featured Content Carousel */}
//           <div style={{
//             display: 'flex',
//             overflowX: 'hidden',
//             gap: '20px',
//             marginBottom: '30px',
//             width: '500px',
//             padding: '10px 0'
//           }}>
//           </div>

//           {/* Post Input */}
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '30px', 
//             width: '500px'
//           }}>
//             <input 
//               type="text" 
//               placeholder="Post Title" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 marginBottom: '10px', 
//                 fontSize: '14px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 color: isDarkMode ? '#E0E0E0' : '#000'
//               }} 
//             />
//             <textarea 
//               placeholder="What’s on your mind?" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 resize: 'none', 
//                 height: '50px', 
//                 fontSize: '14px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 color: isDarkMode ? '#E0E0E0' : '#000'
//               }} 
//             ></textarea>
//             <button style={{ 
//               backgroundColor: '#00C4B4', 
//               color: '#FFF', 
//               padding: '6px 15px', 
//               border: 'none', 
//               borderRadius: '20px', 
//               marginTop: '8px', 
//               fontSize: '13px', 
//               cursor: 'pointer' 
//             }}>Post</button>
//           </div>

//           {/* Newsfeed */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '500px' }}>
//             {[1, 2, 3, 4].map((postNum) => (
//               <div key={postNum} style={{ 
//                 backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//                 padding: '20px', 
//                 borderRadius: '12px', 
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//                 width: '500px', 
//                 height: '500px', 
//                 display: 'flex', 
//                 flexDirection: 'column', 
//                 justifyContent: 'space-between', 
//                 transition: 'transform 0.2s', 
//                 position: 'relative'
//               }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
//                   <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                     <div>
//                       <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px', color: isDarkMode ? '#E0E0E0' : '#000' }}>Alice Brown</p>
//                       <p style={{ margin: '0', fontSize: '12px', color: isDarkMode ? '#B0B0B0' : '#666' }}>2h ago</p>
//                     </div>
//                   </div>
//                   <div style={{ display: 'flex', gap: '10px' }}>
//                     <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="More options">⋯</span>
//                     <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="Close">✖</span>
//                   </div>
//                 </div>
//                 <p style={{ margin: '0', fontSize: '16px', flexGrow: '1', color: isDarkMode ? '#E0E0E0' : '#000' }}>Excited to share my latest project!</p>
//                 <div style={{ display: 'flex', gap: '20px', color: '#1976D2', fontSize: '14px', marginTop: '15px' }}>
//                   <span style={{ cursor: 'pointer' }}>❤️ Like</span>
//                   <span style={{ cursor: 'pointer' }}>💬 Comment</span>
//                   <span style={{ cursor: 'pointer' }}>➡️ Share</span>
//                   <span style={{ cursor: 'pointer' }}>🔄 Repost</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside style={{ width: '18%', padding: '20px' }}>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Trending & Suggested</h4>
//             <div style={{ marginBottom: '10px' }}>
//               <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Jane Smith - UI Designer</p>
//               <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Connect</a>
//             </div>
//             <p style={{ color: '#1976D2', fontSize: '14px', margin: '5px 0' }}>#TechTrends - 1.2K posts</p>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Who’s Hiring?</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Google - Software Engineer</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Apply</a>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Quick Widgets</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>🌤️ 28°C, Sunny</p>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>📅 Today: Meeting at 3 PM</p>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const pageBackground = isDarkMode ? '#1A1A1A' : '#F5F7FA';

//   return (
//     <div style={{ 
//       fontFamily: 'Roboto, sans-serif', 
//       margin: 0, 
//       padding: 0, 
//       backgroundColor: pageBackground, 
//       minHeight: '100vh', 
//       color: isDarkMode ? '#E0E0E0' : '#000' 
//     }}>
//       {/* Header */}
//       <header style={{
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//         backgroundColor: pageBackground,
//         boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '15px 40px',
//         zIndex: 1000,
//         height: '70px',
//         color: '#1976D2'
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ 
//             width: '50px', 
//             height: '50px', 
//             backgroundColor: '#C0C0C0',
//             borderRadius: '50%', 
//             color: '#1976D2', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'center', 
//             fontSize: '28px', 
//             fontWeight: 'bold',
//             boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
//           }}>N</div>
//           <span style={{ 
//             fontSize: '22px', 
//             fontWeight: '600', 
//             letterSpacing: '1px', 
//             textTransform: 'uppercase',
//             color: '#1976D2'
//           }}>NetworkElite</span>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ position: 'relative' }}>
//             <input 
//               type="text" 
//               placeholder="Search..." 
//               style={{ 
//                 padding: '10px 20px', 
//                 borderRadius: '8px',
//                 border: '1px solid #E0E0E0',
//                 width: '300px', 
//                 fontSize: '14px', 
//                 backgroundColor: isDarkMode ? '#333' : '#FFFFFF',
//                 color: isDarkMode ? '#E0E0E0' : '#1976D2', 
//                 outline: 'none', 
//                 transition: 'width 0.3s ease'
//               }} 
//               onFocus={(e) => e.target.style.width = '350px'}
//               onBlur={(e) => e.target.style.width = '300px'}
//             />
//             <div style={{
//               position: 'absolute',
//               top: '100%',
//               left: 0,
//               width: '300px',
//               backgroundColor: isDarkMode ? '#333' : '#FFF',
//               boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//               borderRadius: '8px',
//               padding: '10px',
//               zIndex: 1000,
//               display: 'none'
//             }}>
//               <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>John Doe</p>
//               <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>#ReactDevs</p>
//             </div>
//           </div>
//           <nav style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🏠 Home</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🔗 Network</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>💼 Jobs</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>📩 Messages</a>
//             <div style={{ position: 'relative' }}>
//               <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🔔 Alerts</a>
//               <span style={{
//                 position: 'absolute',
//                 top: '-5px',
//                 right: '-10px',
//                 backgroundColor: '#FF5252',
//                 color: '#FFF',
//                 borderRadius: '50%',
//                 width: '18px',
//                 height: '18px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: '12px'
//               }}>3</span>
//             </div>
//             <div style={{ 
//               width: '40px', 
//               height: '40px', 
//               borderRadius: '50%', 
//               cursor: 'pointer', 
//               overflow: 'hidden', 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center' 
//             }}>
//               <img 
//                 src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//                 alt="Profile" 
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
//               />
//             </div>
//             <span 
//               style={{ cursor: 'pointer', fontSize: '18px' }} 
//               onClick={() => setIsDarkMode(!isDarkMode)}
//             >{isDarkMode ? '☀️' : '🌙'}</span>
//           </nav>
//         </div>
//       </header>

//       {/* Main Container */}
//       <div style={{ display: 'flex', marginTop: '70px', padding: '0 10px', height: 'calc(100vh - 70px)', backgroundColor: pageBackground }}>
//         {/* Left Sidebar */}
//         {isSidebarOpen && (
//           <aside style={{ width: '18%', padding: '20px' }}>
//             <div style={{ 
//               background: isDarkMode ? 'linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%)' : 'linear-gradient(135deg, #FFFFFF 0%, #E8ECEF 100%)', 
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 6px 12px rgba(0,0,0,0.1)', 
//               marginBottom: '20px' 
//             }}>
//               <div style={{ position: 'relative', display: 'inline-block' }}>
//                 <img src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" style={{ borderRadius: '50%', border: '2px solid #C0C0C0' }} />               
//                 <span style={{ 
//                   position: 'absolute', 
//                   bottom: '0', 
//                   right: '0', 
//                   width: '14px', 
//                   height: '14px', 
//                   backgroundColor: '#00C4B4', 
//                   borderRadius: '50%', 
//                   border: '2px solid #FFF' 
//                 }}></span>
//               </div>
//               <h3 style={{ margin: '10px 0 5px', color: '#1976D2', fontSize: '20px', fontWeight: '600' }}>John Doe</h3>
//               <p style={{ fontSize: '14px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>Software Engineer</p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#888' : '#888', fontStyle: 'italic', margin: '0 0 10px' }}>"Building the future, one line at a time."</p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>
//                 <span style={{ color: '#1976D2' }}>250</span> Connections • <span style={{ color: '#1976D2' }}>180</span> Following
//               </p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 15px' }}>
//                 <span style={{ color: '#1976D2' }}>1.2K</span> Profile Views • <span style={{ color: '#1976D2' }}>3.5K</span> Impressions
//               </p>
//               <button style={{ 
//                 background: 'linear-gradient(90deg, #1976D2 0%, #00C4B4 100%)', 
//                 color: '#FFF', 
//                 padding: '8px 20px', 
//                 border: 'none', 
//                 borderRadius: '20px', 
//                 fontSize: '14px', 
//                 cursor: 'pointer', 
//                 width: '100%', 
//                 transition: 'transform 0.2s ease' 
//               }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                 View Profile
//               </button>
//               <h4 style={{ 
//                 margin: '20px 0 10px', 
//                 fontSize: '18px', 
//                 color: '#1976D2',
//                 fontWeight: '600',
//                 borderBottom: isDarkMode ? '1px solid #00C4B4' : '1px solid #1976D2',
//                 paddingBottom: '5px'
//               }}>My Community</h4>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                 <p style={{ 
//                   color: '#1976D2', 
//                   fontSize: '15px', 
//                   margin: '0', 
//                   backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', 
//                   padding: '8px 15px', 
//                   borderRadius: '20px',
//                   cursor: 'pointer',
//                   transition: 'transform 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px'
//                 }}
//                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
//                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                   <span>🌟</span> #ReactDevs
//                 </p>
//                 <p style={{ 
//                   color: '#1976D2', 
//                   fontSize: '15px', 
//                   margin: '0', 
//                   backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', 
//                   padding: '8px 15px', 
//                   borderRadius: '20px',
//                   cursor: 'pointer',
//                   transition: 'transform 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px'
//                 }}
//                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
//                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                   <span>🚀</span> #TechHub
//                 </p>
//               </div>
//             </div>
//           </aside>
//         )}

//         {/* Main Content */}
//         <main style={{ 
//           width: isSidebarOpen ? '64%' : '82%', 
//           padding: '20px', 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'center',
//           overflowY: 'hidden',
//           backgroundColor: pageBackground
//         }}>
//           {/* Post Input */}
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '30px', 
//             width: '500px'
//           }}>
//             <input 
//               type="text" 
//               placeholder="Post Title" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 marginBottom: '10px', 
//                 fontSize: '14px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 color: isDarkMode ? '#E0E0E0' : '#000'
//               }} 
//             />
//             <textarea 
//               placeholder="What’s on your mind?" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 resize: 'none', 
//                 height: '50px', 
//                 fontSize: '14px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 color: isDarkMode ? '#E0E0E0' : '#000'
//               }} 
//             ></textarea>
//             <button style={{ 
//               backgroundColor: '#00C4B4', 
//               color: '#FFF', 
//               padding: '6px 15px', 
//               border: 'none', 
//               borderRadius: '20px', 
//               marginTop: '8px', 
//               fontSize: '13px', 
//               cursor: 'pointer' 
//             }}>Post</button>
//           </div>

//           {/* Newsfeed */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '500px' }}>
//             {[1, 2, 3, 4].map((postNum) => (
//               <div key={postNum} style={{ 
//                 backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//                 padding: '20px', 
//                 borderRadius: '12px', 
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//                 width: '500px', 
//                 height: '500px', 
//                 display: 'flex', 
//                 flexDirection: 'column', 
//                 justifyContent: 'space-between', 
//                 transition: 'transform 0.2s', 
//                 position: 'relative'
//               }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
//                   <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                     <div>
//                       <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px', color: isDarkMode ? '#E0E0E0' : '#000' }}>Alice Brown</p>
//                       <p style={{ margin: '0', fontSize: '12px', color: isDarkMode ? '#B0B0B0' : '#666' }}>2h ago</p>
//                     </div>
//                   </div>
//                   <div style={{ display: 'flex', gap: '10px' }}>
//                     <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="More options">⋯</span>
//                     <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="Close">✖</span>
//                   </div>
//                 </div>
//                 <p style={{ margin: '0', fontSize: '16px', flexGrow: '1', color: isDarkMode ? '#E0E0E0' : '#000' }}>Excited to share my latest project!</p>
//                 <div style={{ display: 'flex', gap: '20px', color: '#1976D2', fontSize: '14px', marginTop: '15px' }}>
//                   <span style={{ cursor: 'pointer' }}>❤️ Like</span>
//                   <span style={{ cursor: 'pointer' }}>💬 Comment</span>
//                   <span style={{ cursor: 'pointer' }}>➡️ Share</span>
//                   <span style={{ cursor: 'pointer' }}>🔄 Repost</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside style={{ width: '18%', padding: '20px', backgroundColor: pageBackground }}>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Trending & Suggested</h4>
//             <div style={{ marginBottom: '10px' }}>
//               <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Jane Smith - UI Designer</p>
//               <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Connect</a>
//             </div>
//             <p style={{ color: '#1976D2', fontSize: '14px', margin: '5px 0' }}>#TechTrends - 1.2K posts</p>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Who’s Hiring?</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Google - Software Engineer</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Apply</a>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Quick Widgets</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>🌤️ 28°C, Sunny</p>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>📅 Today: Meeting at 3 PM</p>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

// // export default App;

// import React, { useState } from 'react';

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const pageBackground = isDarkMode ? '#1A1A1A' : '#F5F7FA';

//   return (
//     <div style={{ 
//       fontFamily: 'Roboto, sans-serif', 
//       margin: 0, 
//       padding: 0, 
//       backgroundColor: pageBackground, 
//       minHeight: '100vh', 
//       color: isDarkMode ? '#E0E0E0' : '#000' 
//     }}>
//       {/* Header */}
//       <header style={{
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//         backgroundColor: pageBackground,
//         boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '15px 40px',
//         zIndex: 1000,
//         height: '70px',
//         color: '#1976D2'
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ 
//             width: '50px', 
//             height: '50px', 
//             backgroundColor: '#C0C0C0',
//             borderRadius: '50%', 
//             color: '#1976D2', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'center', 
//             fontSize: '28px', 
//             fontWeight: 'bold',
//             boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
//           }}>N</div>
//           <span style={{ 
//             fontSize: '22px', 
//             fontWeight: '600', 
//             letterSpacing: '1px', 
//             textTransform: 'uppercase',
//             color: '#1976D2'
//           }}>NetworkElite</span>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ position: 'relative' }}>
//             <input 
//               type="text" 
//               placeholder="Search..." 
//               style={{ 
//                 padding: '10px 20px', 
//                 borderRadius: '8px',
//                 border: '1px solid #E0E0E0',
//                 width: '300px', 
//                 fontSize: '14px', 
//                 backgroundColor: isDarkMode ? '#333' : '#FFFFFF',
//                 color: isDarkMode ? '#E0E0E0' : '#1976D2', 
//                 outline: 'none', 
//                 transition: 'width 0.3s ease'
//               }} 
//               onFocus={(e) => e.target.style.width = '350px'}
//               onBlur={(e) => e.target.style.width = '300px'}
//             />
//             <div style={{
//               position: 'absolute',
//               top: '100%',
//               left: 0,
//               width: '300px',
//               backgroundColor: isDarkMode ? '#333' : '#FFF',
//               boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//               borderRadius: '8px',
//               padding: '10px',
//               zIndex: 1000,
//               display: 'none'
//             }}>
//               <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>John Doe</p>
//               <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>#ReactDevs</p>
//             </div>
//           </div>
//           <nav style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🏠 Home</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🔗 Network</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>💼 Jobs</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>📩 Messages</a>
//             <div style={{ position: 'relative' }}>
//               <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🔔 Alerts</a>
//               <span style={{
//                 position: 'absolute',
//                 top: '-5px',
//                 right: '-10px',
//                 backgroundColor: '#FF5252',
//                 color: '#FFF',
//                 borderRadius: '50%',
//                 width: '18px',
//                 height: '18px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: '12px'
//               }}>3</span>
//             </div>
//             <div style={{ 
//               width: '40px', 
//               height: '40px', 
//               borderRadius: '50%', 
//               cursor: 'pointer', 
//               overflow: 'hidden', 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center' 
//             }}>
//               <img 
//                 src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//                 alt="Profile" 
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
//               />
//             </div>
//             <span 
//               style={{ cursor: 'pointer', fontSize: '18px' }} 
//               onClick={() => setIsDarkMode(!isDarkMode)}
//             >{isDarkMode ? '☀️' : '🌙'}</span>
//           </nav>
//         </div>
//       </header>

//       {/* Main Container */}
//       <div style={{ 
//         display: 'flex', 
//         marginTop: '70px', 
//         padding: '0 10px', 
//         height: 'calc(100vh - 70px)', 
//         backgroundColor: pageBackground,
//         overflowY: 'auto' // Scroll bar moved to main container
//       }}>
//         {/* Left Sidebar */}
//         {isSidebarOpen && (
//           <aside style={{ width: '18%', padding: '20px' }}>
//             <div style={{ 
//               backgroundColor: pageBackground,
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 6px 12px rgba(0,0,0,0.1)', 
//               marginBottom: '20px' 
//             }}>
//               <div style={{ position: 'relative', display: 'inline-block' }}>
//                 <img src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" style={{ borderRadius: '50%', border: '2px solid #C0C0C0' }} />               
//                 <span style={{ 
//                   position: 'absolute', 
//                   bottom: '0', 
//                   right: '0', 
//                   width: '14px', 
//                   height: '14px', 
//                   backgroundColor: '#00C4B4', 
//                   borderRadius: '50%', 
//                   border: '2px solid #FFF' 
//                 }}></span>
//               </div>
//               <h3 style={{ margin: '10px 0 5px', color: '#1976D2', fontSize: '20px', fontWeight: '600' }}>John Doe</h3>
//               <p style={{ fontSize: '14px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>Software Engineer</p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#888' : '#888', fontStyle: 'italic', margin: '0 0 10px' }}>"Building the future, one line at a time."</p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>
//                 <span style={{ color: '#1976D2' }}>250</span> Connections • <span style={{ color: '#1976D2' }}>180</span> Following
//               </p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 15px' }}>
//                 <span style={{ color: '#1976D2' }}>1.2K</span> Profile Views • <span style={{ color: '#1976D2' }}>3.5K</span> Impressions
//               </p>
//               <button style={{ 
//                 background: 'linear-gradient(90deg, #1976D2 0%, #00C4B4 100%)', 
//                 color: '#FFF', 
//                 padding: '8px 20px', 
//                 border: 'none', 
//                 borderRadius: '20px', 
//                 fontSize: '14px', 
//                 cursor: 'pointer', 
//                 width: '100%', 
//                 transition: 'transform 0.2s ease' 
//               }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                 View Profile
// faker              </button>
//               <h4 style={{ 
//                 margin: '20px 0 10px', 
//                 fontSize: '18px', 
//                 color: '#1976D2',
//                 fontWeight: '600',
//                 borderBottom: isDarkMode ? '1px solid #00C4B4' : '1px solid #1976D2',
//                 paddingBottom: '5px'
//               }}>My Community</h4>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                 <p style={{ 
//                   color: '#1976D2', 
//                   fontSize: '15px', 
//                   margin: '0', 
//                   backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', 
//                   padding: '8px 15px', 
//                   borderRadius: '20px',
//                   cursor: 'pointer',
//                   transition: 'transform 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px'
//                 }}
//                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
//                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                   <span>🌟</span> #ReactDevs
//                 </p>
//                 <p style={{ 
//                   color: '#1976D2', 
//                   fontSize: '15px', 
//                   margin: '0', 
//                   backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', 
//                   padding: '8px 15px', 
//                   borderRadius: '20px',
//                   cursor: 'pointer',
//                   transition: 'transform 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px'
//                 }}
//                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
//                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                   <span>🚀</span> #TechHub
//                 </p>
//               </div>
//             </div>
//           </aside>
//         )}

//         {/* Main Content */}
//         <main style={{ 
//           width: isSidebarOpen ? '64%' : '82%', 
//           padding: '20px', 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'center',
//           backgroundColor: pageBackground
//         }}>
//           {/* Post Input */}
//           <div style={{ 
//             backgroundColor: pageBackground, 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '30px', 
//             width: '500px'
//           }}>
//             <input 
//               type="text" 
//               placeholder="Post Title" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 marginBottom: '10px', 
//                 fontSize: '14px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 color: isDarkMode ? '#E0E0E0' : '#000'
//               }} 
//             />
//             <textarea 
//               placeholder="What’s on your mind?" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 resize: 'none', 
//                 height: '50px', 
//                 fontSize: '14px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 color: isDarkMode ? '#E0E0E0' : '#000'
//               }} 
//             ></textarea>
//             <button style={{ 
//               backgroundColor: '#00C4B4', 
//               color: '#FFF', 
//               padding: '6px 15px', 
//               border: 'none', 
//               borderRadius: '20px', 
//               marginTop: '8px', 
//               fontSize: '13px', 
//               cursor: 'pointer' 
//             }}>Post</button>
//           </div>

//           {/* Newsfeed */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '500px' }}>
//             {[1, 2, 3, 4].map((postNum) => (
//               <div key={postNum} style={{ 
//                 backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//                 padding: '20px', 
//                 borderRadius: '12px', 
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//                 width: '500px', 
//                 height: '500px', 
//                 display: 'flex', 
//                 flexDirection: 'column', 
//                 justifyContent: 'space-between', 
//                 transition: 'transform 0.2s', 
//                 position: 'relative'
//               }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
//                   <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                     <div>
//                       <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px', color: isDarkMode ? '#E0E0E0' : '#000' }}>Alice Brown</p>
//                       <p style={{ margin: '0', fontSize: '12px', color: isDarkMode ? '#B0B0B0' : '#666' }}>2h ago</p>
//                     </div>
//                   </div>
//                   <div style={{ display: 'flex', gap: '10px' }}>
//                     <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="More options">⋯</span>
//                     <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="Close">✖</span>
//                   </div>
//                 </div>
//                 <p style={{ margin: '0', fontSize: '16px', flexGrow: '1', color: isDarkMode ? '#E0E0E0' : '#000' }}>Excited to share my latest project!</p>
//                 <div style={{ display: 'flex', gap: '20px', color: '#1976D2', fontSize: '14px', marginTop: '15px' }}>
//                   <span style={{ cursor: 'pointer' }}>❤️ Like</span>
//                   <span style={{ cursor: 'pointer' }}>💬 Comment</span>
//                   <span style={{ cursor: 'pointer' }}>➡️ Share</span>
//                   <span style={{ cursor: 'pointer' }}>🔄 Repost</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside style={{ width: '18%', padding: '20px', backgroundColor: pageBackground }}>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Trending & Suggested</h4>
//             <div style={{ marginBottom: '10px' }}>
//               <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Jane Smith - UI Designer</p>
//               <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Connect</a>
//             </div>
//             <p style={{ color: '#1976D2', fontSize: '14px', margin: '5px 0' }}>#TechTrends - 1.2K posts</p>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Who’s Hiring?</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Google - Software Engineer</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Apply</a>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Quick Widgets</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>🌤️ 28°C, Sunny</p>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>📅 Today: Meeting at 3 PM</p>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const pageBackground = isDarkMode ? '#1A1A1A' : '#F5F7FA';

//   return (
//     <div style={{ 
//       fontFamily: 'Roboto, sans-serif', 
//       margin: 0, 
//       padding: 0, 
//       backgroundColor: pageBackground, 
//       minHeight: '100vh', 
//       color: isDarkMode ? '#E0E0E0' : '#000' 
//     }}>
//       {/* Header */}
//       <header style={{
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//         backgroundColor: pageBackground,
//         boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '15px 40px',
//         zIndex: 1000,
//         height: '70px',
//         color: '#1976D2'
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ 
//             width: '50px', 
//             height: '50px', 
//             backgroundColor: '#C0C0C0',
//             borderRadius: '50%', 
//             color: '#1976D2', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'center', 
//             fontSize: '28px', 
//             fontWeight: 'bold',
//             boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
//           }}>N</div>
//           <span style={{ 
//             fontSize: '22px', 
//             fontWeight: '600', 
//             letterSpacing: '1px', 
//             textTransform: 'uppercase',
//             color: '#1976D2'
//           }}>NetworkElite</span>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ position: 'relative' }}>
//             <input 
//               type="text" 
//               placeholder="Search..." 
//               style={{ 
//                 padding: '10px 20px', 
//                 borderRadius: '8px',
//                 border: '1px solid #E0E0E0',
//                 width: '300px', 
//                 fontSize: '14px', 
//                 backgroundColor: isDarkMode ? '#333' : '#FFFFFF',
//                 color: isDarkMode ? '#E0E0E0' : '#1976D2', 
//                 outline: 'none', 
//                 transition: 'width 0.3s ease'
//               }} 
//               onFocus={(e) => e.target.style.width = '350px'}
//               onBlur={(e) => e.target.style.width = '300px'}
//             />
//             <div style={{
//               position: 'absolute',
//               top: '100%',
//               left: 0,
//               width: '300px',
//               backgroundColor: isDarkMode ? '#333' : '#FFF',
//               boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//               borderRadius: '8px',
//               padding: '10px',
//               zIndex: 1000,
//               display: 'none'
//             }}>
//               <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>John Doe</p>
//               <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>#ReactDevs</p>
//             </div>
//           </div>
//           <nav style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🏠 Home</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🔗 Network</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>💼 Jobs</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>📩 Messages</a>
//             <div style={{ position: 'relative' }}>
//               <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🔔 Alerts</a>
//               <span style={{
//                 position: 'absolute',
//                 top: '-5px',
//                 right: '-10px',
//                 backgroundColor: '#FF5252',
//                 color: '#FFF',
//                 borderRadius: '50%',
//                 width: '18px',
//                 height: '18px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: '12px'
//               }}>3</span>
//             </div>
//             <div style={{ 
//               width: '40px', 
//               height: '40px', 
//               borderRadius: '50%', 
//               cursor: 'pointer', 
//               overflow: 'hidden', 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center' 
//             }}>
//               <img 
//                 src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//                 alt="Profile" 
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
//               />
//             </div>
//             <span 
//               style={{ cursor: 'pointer', fontSize: '18px' }} 
//               onClick={() => setIsDarkMode(!isDarkMode)}
//             >{isDarkMode ? '☀️' : '🌙'}</span>
//           </nav>
//         </div>
//       </header>

//       {/* Main Container */}
//       <div style={{ 
//         display: 'flex', 
//         marginTop: '70px', 
//         padding: '0 10px', 
//         height: 'calc(100vh - 70px)', 
//         backgroundColor: pageBackground,
//         overflowY: 'auto', // Scroll bar present but will be hidden
//         scrollbarWidth: 'none', // Firefox
//         msOverflowStyle: 'none', // IE and Edge
//         WebkitOverflowScrolling: 'touch' // Smooth scrolling on touch devices
//       }}>
//         {/* Hide scrollbar for Webkit browsers (Chrome, Safari) */}
//         <style>
//           {`
//             div::-webkit-scrollbar {
//               display: none;
//             }
//           `}
//         </style>

//         {/* Left Sidebar */}
//         {isSidebarOpen && (
//           <aside style={{ width: '18%', padding: '20px' }}>
//             <div style={{ 
//               backgroundColor: pageBackground,
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 6px 12px rgba(0,0,0,0.1)', 
//               marginBottom: '20px' 
//             }}>
//               <div style={{ position: 'relative', display: 'inline-block' }}>
//                 <img src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" style={{ borderRadius: '50%', border: '2px solid #C0C0C0' }} />               
//                 <span style={{ 
//                   position: 'absolute', 
//                   bottom: '0', 
//                   right: '0', 
//                   width: '14px', 
//                   height: '14px', 
//                   backgroundColor: '#00C4B4', 
//                   borderRadius: '50%', 
//                   border: '2px solid #FFF' 
//                 }}></span>
//               </div>
//               <h3 style={{ margin: '10px 0 5px', color: '#1976D2', fontSize: '20px', fontWeight: '600' }}>John Doe</h3>
//               <p style={{ fontSize: '14px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>Software Engineer</p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#888' : '#888', fontStyle: 'italic', margin: '0 0 10px' }}>"Building the future, one line at a time."</p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>
//                 <span style={{ color: '#1976D2' }}>250</span> Connections • <span style={{ color: '#1976D2' }}>180</span> Following
//               </p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 15px' }}>
//                 <span style={{ color: '#1976D2' }}>1.2K</span> Profile Views • <span style={{ color: '#1976D2' }}>3.5K</span> Impressions
//               </p>
//               <button style={{ 
//                 background: 'linear-gradient(90deg, #1976D2 0%, #00C4B4 100%)', 
//                 color: '#FFF', 
//                 padding: '8px 20px', 
//                 border: 'none', 
//                 borderRadius: '20px', 
//                 fontSize: '14px', 
//                 cursor: 'pointer', 
//                 width: '100%', 
//                 transition: 'transform 0.2s ease' 
//               }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                 View Profile
//               </button>
//               <h4 style={{ 
//                 margin: '20px 0 10px', 
//                 fontSize: '18px', 
//                 color: '#1976D2',
//                 fontWeight: '600',
//                 borderBottom: isDarkMode ? '1px solid #00C4B4' : '1px solid #1976D2',
//                 paddingBottom: '5px'
//               }}>My Community</h4>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                 <p style={{ 
//                   color: '#1976D2', 
//                   fontSize: '15px', 
//                   margin: '0', 
//                   backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', 
//                   padding: '8px 15px', 
//                   borderRadius: '20px',
//                   cursor: 'pointer',
//                   transition: 'transform 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px'
//                 }}
//                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
//                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                   <span>🌟</span> #ReactDevs
//                 </p>
//                 <p style={{ 
//                   color: '#1976D2', 
//                   fontSize: '15px', 
//                   margin: '0', 
//                   backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', 
//                   padding: '8px 15px', 
//                   borderRadius: '20px',
//                   cursor: 'pointer',
//                   transition: 'transform 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px'
//                 }}
//                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
//                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                   <span>🚀</span> #TechHub
//                 </p>
//               </div>
//             </div>
//           </aside>
//         )}

//         {/* Main Content */}
//         <main style={{ 
//           width: isSidebarOpen ? '64%' : '82%', 
//           padding: '20px', 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'center',
//           backgroundColor: pageBackground
//         }}>
//           {/* Post Input */}
//           <div style={{ 
//             backgroundColor: pageBackground, 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '30px', 
//             width: '500px'
//           }}>
//             <input 
//               type="text" 
//               placeholder="Post Title" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 marginBottom: '10px', 
//                 fontSize: '14px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 color: isDarkMode ? '#E0E0E0' : '#000'
//               }} 
//             />
//             <textarea 
//               placeholder="What’s on your mind?" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 resize: 'none', 
//                 height: '50px', 
//                 fontSize: '14px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 color: isDarkMode ? '#E0E0E0' : '#000'
//               }} 
//             ></textarea>
//             <button style={{ 
//               backgroundColor: '#00C4B4', 
//               color: '#FFF', 
//               padding: '6px 15px', 
//               border: 'none', 
//               borderRadius: '20px', 
//               marginTop: '8px', 
//               fontSize: '13px', 
//               cursor: 'pointer' 
//             }}>Post</button>
//           </div>

//           {/* Newsfeed */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '500px' }}>
//             {[1, 2, 3, 4].map((postNum) => (
//               <div key={postNum} style={{ 
//                 backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//                 padding: '20px', 
//                 borderRadius: '12px', 
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//                 width: '500px', 
//                 height: '500px', 
//                 display: 'flex', 
//                 flexDirection: 'column', 
//                 justifyContent: 'space-between', 
//                 transition: 'transform 0.2s', 
//                 position: 'relative'
//               }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
//                   <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                     <div>
//                       <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px', color: isDarkMode ? '#E0E0E0' : '#000' }}>Alice Brown</p>
//                       <p style={{ margin: '0', fontSize: '12px', color: isDarkMode ? '#B0B0B0' : '#666' }}>2h ago</p>
//                     </div>
//                   </div>
//                   <div style={{ display: 'flex', gap: '10px' }}>
//                     <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="More options">⋯</span>
//                     <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="Close">✖</span>
//                   </div>
//                 </div>
//                 <p style={{ margin: '0', fontSize: '16px', flexGrow: '1', color: isDarkMode ? '#E0E0E0' : '#000' }}>Excited to share my latest project!</p>
//                 <div style={{ display: 'flex', gap: '20px', color: '#1976D2', fontSize: '14px', marginTop: '15px' }}>
//                   <span style={{ cursor: 'pointer' }}>❤️ Like</span>
//                   <span style={{ cursor: 'pointer' }}>💬 Comment</span>
//                   <span style={{ cursor: 'pointer' }}>➡️ Share</span>
//                   <span style={{ cursor: 'pointer' }}>🔄 Repost</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside style={{ width: '18%', padding: '20px', backgroundColor: pageBackground }}>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Trending & Suggested</h4>
//             <div style={{ marginBottom: '10px' }}>
//               <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Jane Smith - UI Designer</p>
//               <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Connect</a>
//             </div>
//             <p style={{ color: '#1976D2', fontSize: '14px', margin: '5px 0' }}>#TechTrends - 1.2K posts</p>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Who’s Hiring?</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Google - Software Engineer</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Apply</a>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Quick Widgets</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>🌤️ 28°C, Sunny</p>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>📅 Today: Meeting at 3 PM</p>
//           </div>
//         </aside>
//       </div>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [likes, setLikes] = useState([0, 0, 0, 0]); // Like counts for 4 posts
//   const [notifications, setNotifications] = useState(3); // Notification count

//   const pageBackground = isDarkMode ? '#1A1A1A' : '#F5F7FA';

//   const handleLike = (index) => {
//     const newLikes = [...likes];
//     newLikes[index] += 1;
//     setLikes(newLikes);
//   };

//   return (
//     <div style={{ 
//       fontFamily: 'Roboto, sans-serif', 
//       margin: 0, 
//       padding: 0, 
//       backgroundColor: pageBackground, 
//       minHeight: '100vh', 
//       color: isDarkMode ? '#E0E0E0' : '#000',
//       transition: 'background-color 0.3s ease' // Smooth dark mode transition
//     }}>
//       {/* Loading Animation */}
//       {false && ( // Set to true to see loading animation initially
//         <div style={{
//           position: 'fixed',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundColor: 'rgba(0,0,0,0.5)',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           zIndex: 2000
//         }}>
//           <div style={{
//             width: '50px',
//             height: '50px',
//             border: '5px solid #1976D2',
//             borderTop: '5px solid transparent',
//             borderRadius: '50%',
//             animation: 'spin 1s linear infinite'
//           }}></div>
//           <style>{`
//             @keyframes spin {
//               0% { transform: rotate(0deg); }
//               100% { transform: rotate(360deg); }
//             }
//           `}</style>
//         </div>
//       )}

//       {/* Header */}
//       <header style={{
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//         backgroundColor: pageBackground,
//         boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '15px 40px',
//         zIndex: 1000,
//         height: '70px',
//         color: '#1976D2'
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ 
//             width: '50px', 
//             height: '50px', 
//             backgroundColor: '#C0C0C0',
//             borderRadius: '50%', 
//             color: '#1976D2', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'center', 
//             fontSize: '28px', 
//             fontWeight: 'bold',
//             boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
//           }}>N</div>
//           <span style={{ 
//             fontSize: '22px', 
//             fontWeight: '600', 
//             letterSpacing: '1px', 
//             textTransform: 'uppercase',
//             color: '#1976D2'
//           }}>NetworkElite</span>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ position: 'relative' }}>
//             <input 
//               type="text" 
//               placeholder="Search People, Posts, Jobs..." 
//               style={{ 
//                 padding: '10px 20px', 
//                 borderRadius: '8px',
//                 border: '1px solid #E0E0E0',
//                 width: '300px', 
//                 fontSize: '14px', 
//                 backgroundColor: isDarkMode ? '#333' : '#FFFFFF',
//                 color: isDarkMode ? '#E0E0E0' : '#1976D2', 
//                 outline: 'none', 
//                 transition: 'width 0.3s ease'
//               }} 
//               onFocus={(e) => e.target.style.width = '350px'}
//               onBlur={(e) => e.target.style.width = '300px'}
//             />
//           </div>
//           <nav style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🏠 Home</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🔗 Network</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>💼 Jobs</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>📩 Messages</a>
//             <div style={{ position: 'relative' }}>
//               <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🔔 Alerts</a>
//               <span style={{
//                 position: 'absolute',
//                 top: '-5px',
//                 right: '-10px',
//                 backgroundColor: '#FF5252',
//                 color: '#FFF',
//                 borderRadius: '50%',
//                 width: '18px',
//                 height: '18px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: '12px'
//               }}>{notifications}</span>
//               <div style={{
//                 position: 'absolute',
//                 top: '100%',
//                 right: 0,
//                 width: '250px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//                 borderRadius: '8px',
//                 padding: '10px',
//                 zIndex: 1000,
//                 marginTop: '5px',
//                 display: 'none' // Change to block on hover/click via CSS/JS
//               }}>
//                 <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Jane liked your post</p>
//                 <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>New job posted by Google</p>
//                 <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Mike commented on your post</p>
//               </div>
//             </div>
//             <div style={{ 
//               width: '40px', 
//               height: '40px', 
//               borderRadius: '50%', 
//               cursor: 'pointer', 
//               overflow: 'hidden', 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center' 
//             }}>
//               <img 
//                 src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//                 alt="Profile" 
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
//               />
//             </div>
//             <span 
//               style={{ cursor: 'pointer', fontSize: '18px', transition: 'transform 0.3s ease' }} 
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               onMouseEnter={(e) => e.target.style.transform = 'rotate(180deg)'}
//               onMouseLeave={(e) => e.target.style.transform = 'rotate(0deg)'}
//             >{isDarkMode ? '☀️' : '🌙'}</span>
//           </nav>
//         </div>
//       </header>

//       {/* Main Container */}
//       <div style={{ 
//         display: 'flex', 
//         marginTop: '70px', 
//         padding: '0 10px', 
//         backgroundColor: pageBackground,
//         overflowY: 'auto',
//         scrollbarWidth: 'none',
//         msOverflowStyle: 'none',
//         WebkitOverflowScrolling: 'touch'
//       }}>
//         <style>{`div::-webkit-scrollbar { display: none; }`}</style>

//         {/* Left Sidebar */}
//         {isSidebarOpen && (
//           <aside style={{ width: '18%', padding: '20px' }}>
//             <div style={{ 
//               backgroundColor: pageBackground,
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 6px 12px rgba(0,0,0,0.1)', 
//               marginBottom: '20px' 
//             }}>
//               <div style={{ position: 'relative', display: 'inline-block' }}>
//                 <img src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" style={{ borderRadius: '50%', border: '2px solid #C0C0C0' }} />               
//                 <span style={{ 
//                   position: 'absolute', 
//                   bottom: '0', 
//                   right: '0', 
//                   width: '14px', 
//                   height: '14px', 
//                   backgroundColor: '#00C4B4', 
//                   borderRadius: '50%', 
//                   border: '2px solid #FFF' 
//                 }}></span>
//               </div>
//               <h3 style={{ margin: '10px 0 5px', color: '#1976D2', fontSize: '20px', fontWeight: '600' }}>John Doe</h3>
//               <p style={{ fontSize: '14px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>Software Engineer</p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#888' : '#888', fontStyle: 'italic', margin: '0 0 10px' }}>"Building the future, one line at a time."</p>
//               <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
//                 <span style={{ fontSize: '13px', color: '#00C4B4', backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', padding: '4px 8px', borderRadius: '12px' }}>Top Contributor</span>
//                 <span style={{ fontSize: '13px', color: '#00C4B4', backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', padding: '4px 8px', borderRadius: '12px' }}>Verified</span>
//               </div>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>
//                 <span style={{ color: '#1976D2' }}>250</span> Connections • <span style={{ color: '#1976D2' }}>180</span> Following
//               </p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 15px' }}>
//                 <span style={{ color: '#1976D2' }}>1.2K</span> Profile Views • <span style={{ color: '#1976D2' }}>3.5K</span> Impressions
//               </p>
//               <div style={{ marginBottom: '15px' }}>
//                 <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>Your Posts This Week: <span style={{ color: '#1976D2' }}>5</span></p>
//                 <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0' }}>Engagement: <span style={{ color: '#00C4B4' }}>+20%</span></p>
//               </div>
//               <button style={{ 
//                 background: 'linear-gradient(90deg, #1976D2 0%, #00C4B4 100%)', 
//                 color: '#FFF', 
//                 padding: '8px 20px', 
//                 border: 'none', 
//                 borderRadius: '20px', 
//                 fontSize: '14px', 
//                 cursor: 'pointer', 
//                 width: '100%', 
//                 transition: 'transform 0.2s ease' 
//               }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                 View Profile
//               </button>
//               <h4 style={{ 
//                 margin: '20px 0 10px', 
//                 fontSize: '18px', 
//                 color: '#1976D2',
//                 fontWeight: '600',
//                 borderBottom: isDarkMode ? '1px solid #00C4B4' : '1px solid #1976D2',
//                 paddingBottom: '5px'
//               }}>My Community</h4>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                 <p style={{ 
//                   color: '#1976D2', 
//                   fontSize: '15px', 
//                   margin: '0', 
//                   backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', 
//                   padding: '8px 15px', 
//                   borderRadius: '20px',
//                   cursor: 'pointer',
//                   transition: 'transform 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px'
//                 }}
//                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
//                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                   <span>🌟</span> #ReactDevs
//                 </p>
//                 <p style={{ 
//                   color: '#1976D2', 
//                   fontSize: '15px', 
//                   margin: '0', 
//                   backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', 
//                   padding: '8px 15px', 
//                   borderRadius: '20px',
//                   cursor: 'pointer',
//                   transition: 'transform 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px'
//                 }}
//                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
//                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                   <span>🚀</span> #TechHub
//                 </p>
//               </div>
//             </div>
//           </aside>
//         )}

//         {/* Main Content */}
//         <main style={{ 
//           width: isSidebarOpen ? '64%' : '82%', 
//           padding: '20px', 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'center',
//           backgroundColor: pageBackground
//         }}>
//           {/* Post Input */}
//           <div style={{ 
//             backgroundColor: pageBackground, 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '30px', 
//             width: '500px'
//           }}>
//             <input 
//               type="text" 
//               placeholder="Post Title" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 marginBottom: '10px', 
//                 fontSize: '14px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 color: isDarkMode ? '#E0E0E0' : '#000'
//               }} 
//             />
//             <textarea 
//               placeholder="What’s on your mind?" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 resize: 'vertical', 
//                 height: '80px', 
//                 fontSize: '14px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 color: isDarkMode ? '#E0E0E0' : '#000'
//               }} 
//             ></textarea>
//             <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
//               <button style={{ 
//                 backgroundColor: '#1976D2', 
//                 color: '#FFF', 
//                 padding: '6px 12px', 
//                 border: 'none', 
//                 borderRadius: '20px', 
//                 fontSize: '13px', 
//                 cursor: 'pointer' 
//               }}>B</button>
//               <button style={{ 
//                 backgroundColor: '#1976D2', 
//                 color: '#FFF', 
//                 padding: '6px 12px', 
//                 border: 'none', 
//                 borderRadius: '20px', 
//                 fontSize: '13px', 
//                 cursor: 'pointer' 
//               }}>I</button>
//               <button style={{ 
//                 backgroundColor: '#1976D2', 
//                 color: '#FFF', 
//                 padding: '6px 12px', 
//                 border: 'none', 
//                 borderRadius: '20px', 
//                 fontSize: '13px', 
//                 cursor: 'pointer' 
//               }}>📷 Media</button>
//               <button style={{ 
//                 backgroundColor: '#00C4B4', 
//                 color: '#FFF', 
//                 padding: '6px 15px', 
//                 border: 'none', 
//                 borderRadius: '20px', 
//                 fontSize: '13px', 
//                 cursor: 'pointer',
//                 marginLeft: 'auto'
//               }}>Post</button>
//             </div>
//           </div>

//           {/* Newsfeed */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '500px' }}>
//             {[1, 2, 3, 4].map((postNum, index) => (
//               <div key={postNum} style={{ 
//                 backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//                 padding: '20px', 
//                 borderRadius: '12px', 
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//                 width: '500px', 
//                 height: '500px', 
//                 display: 'flex', 
//                 flexDirection: 'column', 
//                 justifyContent: 'space-between', 
//                 transition: 'transform 0.2s', 
//                 position: 'relative'
//               }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
//                   <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
//                     <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                     <div>
//                       <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px', color: isDarkMode ? '#E0E0E0' : '#000', cursor: 'pointer' }}
//                         onMouseEnter={(e) => e.target.nextElementSibling.style.display = 'block'}
//                         onMouseLeave={(e) => e.target.nextElementSibling.style.display = 'none'}
//                       >Alice Brown</p>
//                       <div style={{
//                         position: 'absolute',
//                         top: '100%',
//                         left: 0,
//                         width: '250px',
//                         backgroundColor: isDarkMode ? '#333' : '#FFF',
//                         boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//                         borderRadius: '8px',
//                         padding: '10px',
//                         zIndex: 1000,
//                         display: 'none'
//                       }}>
//                         <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginBottom: '5px' }} />
//                         <p style={{ margin: '0', fontWeight: 'bold', color: isDarkMode ? '#E0E0E0' : '#000' }}>Alice Brown</p>
//                         <p style={{ margin: '0', fontSize: '12px', color: isDarkMode ? '#B0B0B0' : '#666' }}>UI Designer</p>
//                         <button style={{ 
//                           backgroundColor: '#00C4B4', 
//                           color: '#FFF', 
//                           padding: '5px 10px', 
//                           border: 'none', 
//                           borderRadius: '20px', 
//                           fontSize: '12px', 
//                           cursor: 'pointer', 
//                           marginTop: '5px' 
//                         }}>Connect</button>
//                       </div>
//                       <p style={{ margin: '0', fontSize: '12px', color: isDarkMode ? '#B0B0B0' : '#666' }}>2h ago {postNum === 1 && <span style={{ color: '#00C4B4', marginLeft: '5px' }}>Live</span>}</p>
//                     </div>
//                   </div>
//                   <div style={{ display: 'flex', gap: '10px' }}>
//                     <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="More options">⋯</span>
//                     <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="Close">✖</span>
//                   </div>
//                 </div>
//                 <p style={{ margin: '0', fontSize: '16px', flexGrow: '1', color: isDarkMode ? '#E0E0E0' : '#000' }}>Excited to share my latest project!</p>
//                 <div style={{ marginTop: '15px' }}>
//                   <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 10px' }}>"Great work!" - Jane</p>
//                   <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0' }}>"Love this!" - Mike</p>
//                 </div>
//                 <div style={{ display: 'flex', gap: '20px', color: '#1976D2', fontSize: '14px', marginTop: '15px' }}>
//                   <span style={{ cursor: 'pointer' }} onClick={() => handleLike(index)}>❤️ {likes[index]} Likes</span>
//                   <span style={{ cursor: 'pointer' }}>💬 5 Comments</span>
//                   <span style={{ cursor: 'pointer' }}>➡️ Share</span>
//                   <span style={{ cursor: 'pointer' }}>🔄 Repost</span>
//                   <span style={{ cursor: 'pointer', marginLeft: 'auto' }}>⭐ Save</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside style={{ width: '18%', padding: '20px', backgroundColor: pageBackground }}>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Trending Now <span style={{ color: '#00C4B4', fontSize: '12px' }}>Live</span></h4>
//             <div style={{ marginBottom: '10px' }}>
//               <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Jane Smith - UI Designer</p>
//               <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Connect</a>
//             </div>
//             <p style={{ color: '#1976D2', fontSize: '14px', margin: '5px 0' }}>#TechTrends - 1.2K posts</p>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Job Recommendations</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Google - Software Engineer</p>
//             <p style={{ fontSize: '12px', color: isDarkMode ? '#B0B0B0' : '#888', margin: '0 0 5px' }}>Based on your skills</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Apply</a>
//             <p style={{ fontSize: '14px', margin: '10px 0 5px', color: isDarkMode ? '#E0E0E0' : '#666' }}>Amazon - UI Designer</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Apply</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '14px', display: 'block', marginTop: '10px' }}>See All Jobs</a>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Recent Activity</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>John shared a post 1h ago</p>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Mike liked your comment</p>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Quick Widgets</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>🌤️ 28°C, Sunny</p>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>📅 Today: Meeting at 3 PM</p>
//           </div>
//         </aside>
//       </div>

//       {/* Footer */}
//       <footer style={{
//         backgroundColor: isDarkMode ? '#333' : '#E8ECEF',
//         padding: '20px 40px',
//         textAlign: 'center',
//         color: isDarkMode ? '#E0E0E0' : '#666',
//         fontSize: '14px',
//         borderTop: '1px solid #E0E0E0'
//       }}>
//         <p style={{ margin: '0 0 10px' }}>© 2025 NetworkElite | Valued at 50,000 Cr</p>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
//           <a href="#" style={{ color: '#1976D2', textDecoration: 'none' }}>About</a>
//           <a href="#" style={{ color: '#1976D2', textDecoration: 'none' }}>Contact</a>
//           <a href="#" style={{ color: '#1976D2', textDecoration: 'none' }}>Privacy</a>
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '10px' }}>
//           <span style={{ fontSize: '20px', cursor: 'pointer' }}>🐦</span>
//           <span style={{ fontSize: '20px', cursor: 'pointer' }}>📘</span>
//           <span style={{ fontSize: '20px', cursor: 'pointer' }}>📸</span>
//         </div>
//       </footer>

//       {/* Mobile Responsiveness */}
//       <style>{`
//         @media (max-width: 768px) {
//           header { flex-direction: column; height: auto; padding: 10px; }
//           nav { flex-wrap: wrap; gap: 10px; justify-content: center; }
//           input[type="text"] { width: 100%; }
//           .main-container { flex-direction: column; }
//           aside, main { width: 100%; padding: 10px; }
//           footer { padding: 10px; }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default App;



// import React, { useState } from 'react';

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [likes, setLikes] = useState([0, 0, 0, 0]);
//   const [notifications, setNotifications] = useState(3);

//   const pageBackground = isDarkMode ? '#1A1A1A' : '#F5F7FA';

//   const handleLike = (index) => {
//     const newLikes = [...likes];
//     newLikes[index] += 1;
//     setLikes(newLikes);
//   };

//   return (
//     <div style={{ 
//       fontFamily: 'Roboto, sans-serif', 
//       margin: 0, 
//       padding: 0, 
//       backgroundColor: pageBackground, 
//       minHeight: '100vh', 
//       color: isDarkMode ? '#E0E0E0' : '#000',
//       transition: 'background-color 0.3s ease'
//     }}>
//       {/* Header */}
//       <header style={{
//         position: 'fixed',
//         top: 0,
//         width: '100%',
//         backgroundColor: pageBackground,
//         boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         padding: '15px 40px',
//         zIndex: 1000,
//         height: '70px',
//         color: '#1976D2'
//       }}>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ 
//             width: '50px', 
//             height: '50px', 
//             backgroundColor: '#C0C0C0',
//             borderRadius: '50%', 
//             color: '#1976D2', 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'center', 
//             fontSize: '28px', 
//             fontWeight: 'bold',
//             boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
//           }}>N</div>
//           <span style={{ 
//             fontSize: '22px', 
//             fontWeight: '600', 
//             letterSpacing: '1px', 
//             textTransform: 'uppercase',
//             color: '#1976D2'
//           }}>NetworkElite</span>
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
//           <div style={{ position: 'relative' }}>
//             <input 
//               type="text" 
//               placeholder="Search..." 
//               style={{ 
//                 padding: '10px 20px', 
//                 borderRadius: '8px',
//                 border: '1px solid #E0E0E0',
//                 width: '300px', 
//                 fontSize: '14px', 
//                 backgroundColor: isDarkMode ? '#333' : '#FFFFFF',
//                 color: isDarkMode ? '#E0E0E0' : '#1976D2', 
//                 outline: 'none', 
//                 transition: 'width 0.3s ease'
//               }} 
//               onFocus={(e) => e.target.style.width = '350px'}
//               onBlur={(e) => e.target.style.width = '300px'}
//             />
//           </div>
//           <nav style={{ display: 'flex', alignItems: 'center', gap: '35px' }}>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🏠 Home</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🔗 Network</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>💼 Jobs</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>📩 Messages</a>
//             <div style={{ position: 'relative' }}>
//               <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>🔔 Alerts</a>
//               <span style={{
//                 position: 'absolute',
//                 top: '-5px',
//                 right: '-10px',
//                 backgroundColor: '#FF5252',
//                 color: '#FFF',
//                 borderRadius: '50%',
//                 width: '18px',
//                 height: '18px',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: '12px'
//               }}>{notifications}</span>
//               <div style={{
//                 position: 'absolute',
//                 top: '100%',
//                 right: 0,
//                 width: '250px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//                 borderRadius: '8px',
//                 padding: '10px',
//                 zIndex: 1000,
//                 marginTop: '5px',
//                 display: 'none'
//               }}>
//                 <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Jane liked your post</p>
//                 <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>New job posted by Google</p>
//                 <p style={{ margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Mike commented on your post</p>
//               </div>
//             </div>
//             <div style={{ 
//               width: '40px', 
//               height: '40px', 
//               borderRadius: '50%', 
//               cursor: 'pointer', 
//               overflow: 'hidden', 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center' 
//             }}>
//               <img 
//                 src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
//                 alt="Profile" 
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
//               />
//             </div>
//             <span 
//               style={{ cursor: 'pointer', fontSize: '18px', transition: 'transform 0.3s ease' }} 
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               onMouseEnter={(e) => e.target.style.transform = 'rotate(180deg)'}
//               onMouseLeave={(e) => e.target.style.transform = 'rotate(0deg)'}
//             >{isDarkMode ? '☀️' : '🌙'}</span>
//           </nav>
//         </div>
//       </header>

//       {/* Main Container */}
//       <div style={{ 
//         display: 'flex', 
//         marginTop: '70px', 
//         padding: '0 10px', 
//         backgroundColor: pageBackground,
//         overflowY: 'auto',
//         scrollbarWidth: 'none',
//         msOverflowStyle: 'none',
//         WebkitOverflowScrolling: 'touch'
//       }}>
//         <style>{`div::-webkit-scrollbar { display: none; }`}</style>

//         {/* Left Sidebar */}
//         {isSidebarOpen && (
//           <aside style={{ width: '18%', padding: '20px', position: 'relative' }}>
//             <div style={{ 
//               backgroundColor: pageBackground,
//               padding: '20px', 
//               borderRadius: '12px', 
//               boxShadow: '0 6px 12px rgba(0,0,0,0.1)', 
//               marginBottom: '20px' 
//             }}>
//               <div style={{ position: 'relative', display: 'inline-block' }}>
//                 <img src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" style={{ borderRadius: '50%', border: '2px solid #C0C0C0' }} />               
//                 <span style={{ 
//                   position: 'absolute', 
//                   bottom: '0', 
//                   right: '0', 
//                   width: '14px', 
//                   height: '14px', 
//                   backgroundColor: '#00C4B4', 
//                   borderRadius: '50%', 
//                   border: '2px solid #FFF' 
//                 }}></span>
//               </div>
//               <h3 style={{ margin: '10px 0 5px', color: '#1976D2', fontSize: '20px', fontWeight: '600' }}>John Doe</h3>
//               <p style={{ fontSize: '14px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>Software Engineer</p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#888' : '#888', fontStyle: 'italic', margin: '0 0 10px' }}>"Building the future, one line at a time."</p>
//               <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
//                 <span style={{ fontSize: '13px', color: '#00C4B4', backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', padding: '4px 8px', borderRadius: '12px' }}>Top Contributor</span>
//                 <span style={{ fontSize: '13px', color: '#00C4B4', backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', padding: '4px 8px', borderRadius: '12px' }}>Verified</span>
//               </div>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>
//                 <span style={{ color: '#1976D2' }}>250</span> Connections • <span style={{ color: '#1976D2' }}>180</span> Following
//               </p>
//               <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 15px' }}>
//                 <span style={{ color: '#1976D2' }}>1.2K</span> Profile Views • <span style={{ color: '#1976D2' }}>3.5K</span> Impressions
//               </p>
//               <div style={{ marginBottom: '15px' }}>
//                 <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 5px' }}>Your Posts This Week: <span style={{ color: '#1976D2' }}>5</span></p>
//                 <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0' }}>Engagement: <span style={{ color: '#00C4B4' }}>+20%</span></p>
//               </div>
//               <button style={{ 
//                 background: 'linear-gradient(90deg, #1976D2 0%, #00C4B4 100%)', 
//                 color: '#FFF', 
//                 padding: '8px 20px', 
//                 border: 'none', 
//                 borderRadius: '20px', 
//                 fontSize: '14px', 
//                 cursor: 'pointer', 
//                 width: '100%', 
//                 transition: 'transform 0.2s ease' 
//               }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                 View Profile
//               </button>
//               <h4 style={{ 
//                 margin: '20px 0 10px', 
//                 fontSize: '18px', 
//                 color: '#1976D2',
//                 fontWeight: '600',
//                 borderBottom: isDarkMode ? '1px solid #00C4B4' : '1px solid #1976D2',
//                 paddingBottom: '5px'
//               }}>My Community</h4>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//                 <p style={{ 
//                   color: '#1976D2', 
//                   fontSize: '15px', 
//                   margin: '0', 
//                   backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', 
//                   padding: '8px 15px', 
//                   borderRadius: '20px',
//                   cursor: 'pointer',
//                   transition: 'transform 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px'
//                 }}
//                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
//                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                   <span>🌟</span> #ReactDevs
//                 </p>
//                 <p style={{ 
//                   color: '#1976D2', 
//                   fontSize: '15px', 
//                   margin: '0', 
//                   backgroundColor: isDarkMode ? '#3A3A3A' : '#E8ECEF', 
//                   padding: '8px 15px', 
//                   borderRadius: '20px',
//                   cursor: 'pointer',
//                   transition: 'transform 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px'
//                 }}
//                 onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
//                 onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
//                   <span>🚀</span> #TechHub
//                 </p>
//               </div>
//             </div>
//             {/* Footer Section */}
//             <footer style={{
//               backgroundColor: isDarkMode ? '#333' : '#E8ECEF',
//               padding: '15px 20px',
//               color: isDarkMode ? '#E0E0E0' : '#666',
//               fontSize: '13px',
//               borderRadius: '8px',
//               boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//               textAlign: 'left'
//             }}>
//               <p style={{ margin: '0 0 8px', fontWeight: 'bold' }}>NetworkElite</p>
//               <p style={{ margin: '0 0 5px' }}>© 2025 | 50,000 Cr</p>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
//                 <a href="#" style={{ color: '#1976D2', textDecoration: 'none' }}>About</a>
//                 <a href="#" style={{ color: '#1976D2', textDecoration: 'none' }}>Contact</a>
//                 <a href="#" style={{ color: '#1976D2', textDecoration: 'none' }}>Privacy</a>
//               </div>
//               <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
//                 <span style={{ fontSize: '16px', cursor: 'pointer' }}>🐦</span>
//                 <span style={{ fontSize: '16px', cursor: 'pointer' }}>📘</span>
//                 <span style={{ fontSize: '16px', cursor: 'pointer' }}>📸</span>
//               </div>
//             </footer>
//           </aside>
//         )}

//         {/* Main Content */}
//         <main style={{ 
//           width: isSidebarOpen ? '64%' : '82%', 
//           padding: '20px', 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'center',
//           backgroundColor: pageBackground
//         }}>
//           {/* Post Input */}
//           <div style={{ 
//             backgroundColor: pageBackground, 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '30px', 
//             width: '500px'
//           }}>
//             <input 
//               type="text" 
//               placeholder="Post Title" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 marginBottom: '10px', 
//                 fontSize: '14px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 color: isDarkMode ? '#E0E0E0' : '#000'
//               }} 
//             />
//             <textarea 
//               placeholder="What’s on your mind?" 
//               style={{ 
//                 width: '100%', 
//                 padding: '8px', 
//                 borderRadius: '8px', 
//                 border: '1px solid #E0E0E0', 
//                 resize: 'vertical', 
//                 height: '80px', 
//                 fontSize: '14px',
//                 backgroundColor: isDarkMode ? '#333' : '#FFF',
//                 color: isDarkMode ? '#E0E0E0' : '#000'
//               }} 
//             ></textarea>
//             <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
//               <button style={{ 
//                 backgroundColor: '#1976D2', 
//                 color: '#FFF', 
//                 padding: '6px 12px', 
//                 border: 'none', 
//                 borderRadius: '20px', 
//                 fontSize: '13px', 
//                 cursor: 'pointer' 
//               }}>B</button>
//               <button style={{ 
//                 backgroundColor: '#1976D2', 
//                 color: '#FFF', 
//                 padding: '6px 12px', 
//                 border: 'none', 
//                 borderRadius: '20px', 
//                 fontSize: '13px', 
//                 cursor: 'pointer' 
//               }}>I</button>
//               <button style={{ 
//                 backgroundColor: '#1976D2', 
//                 color: '#FFF', 
//                 padding: '6px 12px', 
//                 border: 'none', 
//                 borderRadius: '20px', 
//                 fontSize: '13px', 
//                 cursor: 'pointer' 
//               }}>📷 Media</button>
//               <button style={{ 
//                 backgroundColor: '#00C4B4', 
//                 color: '#FFF', 
//                 padding: '6px 15px', 
//                 border: 'none', 
//                 borderRadius: '20px', 
//                 fontSize: '13px', 
//                 cursor: 'pointer',
//                 marginLeft: 'auto'
//               }}>Post</button>
//             </div>
//           </div>

//           {/* Newsfeed */}
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', width: '500px' }}>
//             {[1, 2, 3, 4].map((postNum, index) => (
//               <div key={postNum} style={{ 
//                 backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//                 padding: '20px', 
//                 borderRadius: '12px', 
//                 boxShadow: '0 4px 8px rgba(0,0,0,0.05)', 
//                 width: '500px', 
//                 height: '500px', 
//                 display: 'flex', 
//                 flexDirection: 'column', 
//                 justifyContent: 'space-between', 
//                 transition: 'transform 0.2s', 
//                 position: 'relative'
//               }}>
//                 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
//                   <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
//                     <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginRight: '15px' }} />
//                     <div>
//                       <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px', color: isDarkMode ? '#E0E0E0' : '#000', cursor: 'pointer' }}
//                         onMouseEnter={(e) => e.target.nextElementSibling.style.display = 'block'}
//                         onMouseLeave={(e) => e.target.nextElementSibling.style.display = 'none'}
//                       >Alice Brown</p>
//                       <div style={{
//                         position: 'absolute',
//                         top: '100%',
//                         left: 0,
//                         width: '250px',
//                         backgroundColor: isDarkMode ? '#333' : '#FFF',
//                         boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//                         borderRadius: '8px',
//                         padding: '10px',
//                         zIndex: 1000,
//                         display: 'none'
//                       }}>
//                         <img src="https://via.placeholder.com/50" alt="User" style={{ borderRadius: '50%', marginBottom: '5px' }} />
//                         <p style={{ margin: '0', fontWeight: 'bold', color: isDarkMode ? '#E0E0E0' : '#000' }}>Alice Brown</p>
//                         <p style={{ margin: '0', fontSize: '12px', color: isDarkMode ? '#B0B0B0' : '#666' }}>UI Designer</p>
//                         <button style={{ 
//                           backgroundColor: '#00C4B4', 
//                           color: '#FFF', 
//                           padding: '5px 10px', 
//                           border: 'none', 
//                           borderRadius: '20px', 
//                           fontSize: '12px', 
//                           cursor: 'pointer', 
//                           marginTop: '5px' 
//                         }}>Connect</button>
//                       </div>
//                       <p style={{ margin: '0', fontSize: '12px', color: isDarkMode ? '#B0B0B0' : '#666' }}>2h ago {postNum === 1 && <span style={{ color: '#00C4B4', marginLeft: '5px' }}>Live</span>}</p>
//                     </div>
//                   </div>
//                   <div style={{ display: 'flex', gap: '10px' }}>
//                     <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="More options">⋯</span>
//                     <span style={{ cursor: 'pointer', color: '#666', fontSize: '18px' }} title="Close">✖</span>
//                   </div>
//                 </div>
//                 <p style={{ margin: '0', fontSize: '16px', flexGrow: '1', color: isDarkMode ? '#E0E0E0' : '#000' }}>Excited to share my latest project!</p>
//                 <div style={{ marginTop: '15px' }}>
//                   <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0 0 10px' }}>"Great work!" - Jane</p>
//                   <p style={{ fontSize: '13px', color: isDarkMode ? '#B0B0B0' : '#666', margin: '0' }}>"Love this!" - Mike</p>
//                 </div>
//                 <div style={{ display: 'flex', gap: '20px', color: '#1976D2', fontSize: '14px', marginTop: '15px' }}>
//                   <span style={{ cursor: 'pointer' }} onClick={() => handleLike(index)}>❤️ {likes[index]} Likes</span>
//                   <span style={{ cursor: 'pointer' }}>💬 5 Comments</span>
//                   <span style={{ cursor: 'pointer' }}>➡️ Share</span>
//                   <span style={{ cursor: 'pointer' }}>🔄 Repost</span>
//                   <span style={{ cursor: 'pointer', marginLeft: 'auto' }}>⭐ Save</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside style={{ width: '18%', padding: '20px', backgroundColor: pageBackground }}>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Trending Now <span style={{ color: '#00C4B4', fontSize: '12px' }}>Live</span></h4>
//             <div style={{ marginBottom: '10px' }}>
//               <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Jane Smith - UI Designer</p>
//               <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Connect</a>
//             </div>
//             <p style={{ color: '#1976D2', fontSize: '14px', margin: '5px 0' }}>#TechTrends - 1.2K posts</p>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Job Recommendations</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Google - Software Engineer</p>
//             <p style={{ fontSize: '12px', color: isDarkMode ? '#B0B0B0' : '#888', margin: '0 0 5px' }}>Based on your skills</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Apply</a>
//             <p style={{ fontSize: '14px', margin: '10px 0 5px', color: isDarkMode ? '#E0E0E0' : '#666' }}>Amazon - UI Designer</p>
//             <a href="#" style={{ color: '#00C4B4', textDecoration: 'none', fontSize: '14px' }}>Apply</a>
//             <a href="#" style={{ color: '#1976D2', textDecoration: 'none', fontSize: '14px', display: 'block', marginTop: '10px' }}>See All Jobs</a>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)', 
//             marginBottom: '20px' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Recent Activity</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>John shared a post 1h ago</p>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>Mike liked your comment</p>
//           </div>
//           <div style={{ 
//             backgroundColor: isDarkMode ? '#2A2A2A' : '#FFFFFF', 
//             padding: '15px', 
//             borderRadius: '8px', 
//             boxShadow: '0 2px 4px rgba(0,0,0,0.05)' 
//           }}>
//             <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#1976D2' }}>Quick Widgets</h4>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>🌤️ 28°C, Sunny</p>
//             <p style={{ fontSize: '14px', margin: '5px 0', color: isDarkMode ? '#E0E0E0' : '#666' }}>📅 Today: Meeting at 3 PM</p>
//           </div>
//         </aside>
//       </div>

//       {/* Mobile Responsiveness */}
//       <style>{`
//         @media (max-width: 768px) {
//           header { flex-direction: column; height: auto; padding: 10px; }
//           nav { flex-wrap: wrap; gap: 10px; justify-content: center; }
//           input[type="text"] { width: 100%; }
//           .main-container { flex-direction: column; }
//           aside, main { width: 100%; padding: 10px; }
//           footer { padding: 10px; width: 100%; }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default App;


// // App.jsx
// import React from 'react';

// function App() {
//   // Dummy data to mimic the image
//   const user = {
//     name: 'Abdul Hakim',
//     title: 'UI/UX Designer',
//     joinDate: 'Joined on 30 Sep 2018',
//     followers: '82,638 followers',
//     connections: '500+ connections',
//     profilePic: 'https://via.placeholder.com/100', // Placeholder image
//     coverPhoto: 'https://via.placeholder.com/800x200', // Placeholder cover photo
//     socialMedia: ['facebook', 'instagram', 'twitter'],
//   };

//   const courses = [
//     {
//       title: 'Modern and Contemporary 3D Design and Modeling',
//       instructor: 'Oliver Smith',
//       gpa: 'GPA: A',
//       lessons: '7/10',
//       assignments: '8/12',
//       lastScore: 'A',
//       time: '25h',
//       progress: 70,
//       image: 'https://via.placeholder.com/100?text=3D+Design',
//     },
//     {
//       title: 'The University of Sydney Positive Psychiatry and...',
//       instructor: 'James Johnson',
//       gpa: 'GPA: C',
//       lessons: '5/10',
//       assignments: '4/8',
//       lastScore: 'B',
//       time: '32h',
//       progress: 50,
//       image: 'https://via.placeholder.com/100?text=Psychology',
//     },
//   ];

//   const sessionHistory = [
//     { name: 'Harry Bender', location: 'Paris', time: 'Sep 12, 13:00' },
//     { name: 'Katy Fuller', location: 'New York', time: 'Sep 12, 13:00' },
//     { name: 'Jonathan Kelly', location: 'Victoria', time: 'Sep 12, 13:00' },
//     { name: 'Billie Wright', location: 'Paris', time: 'Sep 12, 13:00' },
//     { name: 'Sarah Page', location: 'Perth', time: 'Sep 12, 13:00' },
//     { name: 'Erica Wyatt', location: 'Paris', time: 'Sep 12, 13:00' },
//   ];

//   return (
//     <div className="bg-gray-200 min-h-screen p-5 flex justify-center">
//       <div className="max-w-5xl w-full">
//         {/* User Profile Section */}
//         <div className="bg-white rounded-lg shadow-md relative text-center">
//           <img
//             src={user.coverPhoto}
//             alt="Cover"
//             className="w-full h-48 object-cover rounded-t-lg"
//           />
//           <img
//             src={user.profilePic}
//             alt="Profile"
//             className="w-24 h-24 rounded-full absolute top-32 left-1/2 transform -translate-x-1/2 border-4 border-white"
//           />
//           <div className="pt-16 pb-5">
//             <h2 className="text-2xl font-bold">
//               {user.name} <span className="text-green-500">✔</span>
//             </h2>
//             <p className="text-gray-600">{user.title}</p>
//             <p className="text-gray-600">{user.joinDate}</p>
//             <p className="text-gray-600">
//               {user.followers} • {user.connections}
//             </p>
//             <div className="flex justify-center gap-3 mt-3">
//               {user.socialMedia.map((platform, index) => (
//                 <span
//                   key={index}
//                   className={`text-lg ${
//                     platform === 'facebook'
//                       ? 'text-blue-600'
//                       : platform === 'instagram'
//                       ? 'text-pink-500'
//                       : 'text-blue-400'
//                   }`}
//                 >
//                   {platform.charAt(0).toUpperCase() + platform.slice(1)}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Content Section */}
//         <div className="flex gap-5 mt-5">
//           {/* Course Cards Section */}
//           <div className="flex-2 flex flex-col gap-5">
//             {courses.map((course, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-4 rounded-lg shadow-md flex gap-3"
//               >
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-24 h-24 object-cover"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold">{course.title}</h3>
//                   <p className="text-gray-600">{course.instructor}</p>
//                   <p className="text-gray-600">{course.gpa}</p>
//                   <p className="text-gray-600">Lessons: {course.lessons}</p>
//                   <p className="text-gray-600">
//                     Assignment: {course.assignments}
//                   </p>
//                   <p className="text-gray-600">
//                     Last score: {course.lastScore} | Time: {course.time}
//                   </p>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full"
//                       style={{ width: `${course.progress}%` }}
//                     ></div>
//                   </div>
//                   <p className="text-gray-600 mt-1">{course.progress}%</p>
//                 </div>
//               </div>
//             ))}
//             <button className="bg-purple-600 text-white px-5 py-2 rounded-lg self-start">
//               resume
//             </button>
//           </div>

//           {/* Sidebar Section */}
//           <div className="flex-1 flex flex-col gap-5">
//             {/* Security Status */}
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h3 className="text-lg font-semibold">Security status</h3>
//               <div className="w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center mx-auto my-3">
//                 <span className="text-2xl font-bold">78%</span>
//               </div>
//               <p className="text-center text-gray-600">High Risk</p>
//             </div>

//             {/* Session History */}
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold">Session History</h3>
//                 <p className="text-gray-600">2/8</p>
//               </div>
//               {sessionHistory.map((session, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 mt-3"
//                 >
//                   <img
//                     src="https://via.placeholder.com/40"
//                     alt={session.name}
//                     className="w-10 h-10 rounded-full"
//                   />
//                   <div className="flex-1">
//                     <p className="font-medium">{session.name}</p>
//                     <p className="text-gray-600">{session.time}</p>
//                   </div>
//                   <span className="text-gray-600">{session.location}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// // App.jsx
// import React from 'react';

// // Unsplash images provided earlier
// const sunsetImage = 'https://images.unsplash.com/photo-1725609959854-ab81563bedb8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
// const profileImage = 'https://images.unsplash.com/photo-1740890226776-3984f860a92f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

// function App() {
//   // Data for the first dashboard (from previous image)
//   const totalViews = '57,892 K';
//   const publicProfileUrl = 'www.linkedin.com/in/honey-sharma-228451249';
//   const socialPost = {
//     author: 'Jordan Warmoes-Nielsen with Valentine Basser',
//     date: 'January 10, 2017',
//     location: 'Santorini',
//     content: 'Finally in holidays! Enjoying this incredible sunset in Santorini!',
//     image: sunsetImage,
//   };
//   const course = {
//     title: 'Creative Writing',
//     description: 'This Specialization covers elements of three major...',
//     month: 'June',
//     score: 'F',
//     progress: 2,
//   };
//   const balance = '$96,720.00';
//   const recentActivity = [
//     { name: 'Annie Patel', action: 'bought for 0.069 ETH', time: '15m ago', image: 'https://via.placeholder.com/40?text=Annie' },
//     { name: 'Frida Cordova', action: 'bought for 0.069 ETH', time: '15m ago', image: 'https://via.placeholder.com/40?text=Frida' },
//     { name: 'Madelyn Steadman', action: 'bought for 0.069 ETH', time: '15m ago', image: 'https://via.placeholder.com/40?text=Madelyn' },
//     { name: 'Daniole Bullock', action: 'bought for 0.069 ETH', time: '15m ago', image: 'https://via.placeholder.com/40?text=Daniole' },
//   ];

//   // Data for the new dashboard (from the latest image)
//   const inventoryValues = {
//     soldUnits: '32%',
//     totalUnits: '68%',
//   };
//   const badges = [
//     { name: '365 Days Badge', image: 'https://via.placeholder.com/40?text=365' },
//     { name: 'Most Recent Badge', image: 'https://via.placeholder.com/40?text=Recent' },
//   ];
//   const currentProject = {
//     name: 'Apple Store',
//     status: 'In Progress',
//     manager: 'Laura P.',
//     lead: 'Arthur G.',
//     timeline: '12/10/2022 - 01/04/2023',
//     description: 'Implementation guideline in a detailed scale',
//     teamCount: 8,
//   };
//   const activeMembers = [
//     { name: 'Lindsey Mcgowan', role: 'Team Leader', image: 'https://via.placeholder.com/40?text=Lindsey' },
//     { name: 'Soto Edwards', role: 'Team Leader', image: 'https://via.placeholder.com/40?text=Soto' },
//     { name: 'Marcia Greer', role: 'Team Leader', image: 'https://via.placeholder.com/40?text=Marcia' },
//     { name: 'Mendoza Carver', role: 'Team Leader', image: 'https://via.placeholder.com/40?text=Mendoza' },
//     { name: 'Drake Morin', role: 'Team Leader', image: 'https://via.placeholder.com/40?text=Drake' },
//     { name: 'Stafford Carrillo', role: 'Team Leader', image: 'https://via.placeholder.com/40?text=Stafford' },
//     { name: 'Janice Wilder', role: 'Team Leader', image: 'https://via.placeholder.com/40?text=Janice' },
//   ];

//   return (
//     <div className="bg-gray-200 min-h-screen p-5 flex flex-col gap-10">
//       {/* First Dashboard (from previous image) */}
//       <div className="max-w-6xl w-full flex gap-5">
//         {/* Left Column */}
//         <div className="flex-1 flex flex-col gap-5">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-sm font-semibold text-gray-600">TOTAL VIEWS THIS MONTH</h3>
//             <p className="text-3xl font-bold mt-2">Monthly Page Views</p>
//             <p className="text-4xl font-bold text-gray-800">{totalViews}</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h3 className="text-sm font-semibold text-gray-600">PUBLIC PROFILE & URL</h3>
//               <span className="text-gray-500">✏️</span>
//             </div>
//             <p className="text-blue-600 mt-2 break-all">{publicProfileUrl}</p>
//           </div>
//         </div>

//         {/* Center Column */}
//         <div className="flex-2 flex flex-col gap-5">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <div className="flex items-center gap-3">
//               <img
//                 src={profileImage}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <p className="font-semibold">{socialPost.author}</p>
//                 <p className="text-sm text-gray-600">{socialPost.date} • {socialPost.location}</p>
//               </div>
//             </div>
//             <p className="mt-3 text-gray-800">{socialPost.content}</p>
//             <img
//               src={socialPost.image}
//               alt="Sunset"
//               className="w-full h-64 object-cover rounded-lg mt-3"
//             />
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
//             <div className="relative w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
//               <span className="text-gray-500 text-2xl">{course.progress}</span>
//               <span className="absolute top-0 left-0 bg-orange-500 text-white text-xs rounded-full px-2 py-1">Retake</span>
//               <span className="absolute bottom-0 right-0 bg-green-500 text-white text-xs rounded-full px-2 py-1">Done</span>
//             </div>
//             <div className="flex-1">
//               <h3 className="text-lg font-semibold">{course.title}</h3>
//               <p className="text-gray-600">{course.description}</p>
//               <p className="text-gray-600">{course.month}</p>
//             </div>
//             <div>
//               <p className="text-lg font-semibold">Score: {course.score}</p>
//             </div>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">About</h3>
//             <p className="text-gray-600 mt-2">Add your About content here...</p>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="flex-1 flex flex-col gap-5">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">Balance</h3>
//             <p className="text-3xl font-bold text-gray-800 mt-2">{balance}</p>
//             <img
//               src="https://via.placeholder.com/300x100?text=Graph"
//               alt="Graph"
//               className="w-full h-24 object-cover mt-3"
//             />
//             <div className="flex justify-between text-sm text-gray-600 mt-2">
//               <span>Mon</span>
//               <span>Tue</span>
//               <span>Wed</span>
//               <span>Thu</span>
//               <span>Fri</span>
//               <span>Sat</span>
//               <span>Sun</span>
//             </div>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h3 className="text-lg font-semibold">Recent Activity</h3>
//               <a href="#" className="text-blue-600 text-sm">VIEW ALL</a>
//             </div>
//             {recentActivity.map((activity, index) => (
//               <div key={index} className="flex items-center gap-3 mt-3">
//                 <img
//                   src={activity.image}
//                   alt={activity.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div className="flex-1">
//                   <p className="font-semibold">{activity.name}</p>
//                   <p className="text-gray-600">{activity.action}</p>
//                 </div>
//                 <span className="text-green-500 text-sm">{activity.time}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* New Dashboard (from the latest image) */}
//       <div className="max-w-6xl w-full flex gap-5">
//         {/* Left Column */}
//         <div className="flex-1 flex flex-col gap-5">
//           {/* Inventory Values */}
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-sm font-semibold text-gray-600">Inventory Values</h3>
//             <div className="w-32 h-32 mx-auto mt-4">
//               <svg className="w-full h-full">
//                 <circle
//                   cx="50%"
//                   cy="50%"
//                   r="40%"
//                   fill="none"
//                   stroke="#e0e0e0"
//                   strokeWidth="10"
//                 />
//                 <circle
//                   cx="50%"
//                   cy="50%"
//                   r="40%"
//                   fill="none"
//                   stroke="#4b5563"
//                   strokeWidth="10"
//                   strokeDasharray="251.2"
//                   strokeDashoffset="171.82" // 68% of circumference (251.2 * 0.68)
//                   transform="rotate(-90 50 50)"
//                 />
//               </svg>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//                 <p className="text-sm text-gray-600">Sold units</p>
//                 <p className="text-sm text-gray-600">32%</p>
//                 <p className="text-sm text-gray-600">Total units</p>
//                 <p className="text-sm text-gray-600">68%</p>
//               </div>
//             </div>
//           </div>

//           {/* Badges */}
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-sm font-semibold text-gray-600">Badges</h3>
//             <p className="text-2xl font-bold mt-2">15</p>
//             <div className="flex gap-2 mt-2">
//               {badges.map((badge, index) => (
//                 <img
//                   key={index}
//                   src={badge.image}
//                   alt={badge.name}
//                   className="w-10 h-10 object-cover rounded"
//                 />
//               ))}
//             </div>
//             <p className="text-sm text-gray-600 mt-2">Most Recent Badge</p>
//             <p className="text-sm text-gray-600">365 Days Badge</p>
//           </div>
//         </div>

//         {/* Center Column */}
//         <div className="flex-2 flex flex-col gap-5">
//           {/* Current Project */}
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h3 className="text-sm font-semibold text-gray-600">Current Project</h3>
//               <a href="#" className="text-blue-600 text-sm">See All</a>
//             </div>
//             <h2 className="text-xl font-semibold mt-2">Project Name</h2>
//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-lg">🍎</span>
//               <span className="text-lg font-semibold">Apple Store</span>
//               <span className="bg-yellow-400 text-xs text-white px-2 py-1 rounded-full">In Progress</span>
//             </div>
//             <div className="flex gap-4 mt-2">
//               <div>
//                 <p className="text-sm text-gray-600">Project Manager</p>
//                 <p className="font-semibold">Laura P.</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Design Lead</p>
//                 <p className="font-semibold">Arthur G.</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-lg">⏰</span>
//               <p className="text-sm text-gray-600">{currentProject.timeline}</p>
//             </div>
//             <p className="text-sm text-gray-600 mt-2">{currentProject.description}</p>
//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-lg">👥</span>
//               <p className="text-sm text-gray-600">{currentProject.teamCount} people</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="flex-1 flex flex-col gap-5">
//           {/* Active Members */}
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-sm font-semibold text-gray-600">Active Members (17)</h3>
//             {activeMembers.map((member, index) => (
//               <div key={index} className="flex items-center gap-2 mt-2">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="font-semibold">{member.name}</p>
//                   <p className="text-sm text-gray-600">{member.role}</p>
//                 </div>
//                 <span className="text-green-500 text-sm">✔</span>
//               </div>
//             ))}
//             <button className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded-lg w-full">
//               View All
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// // App.jsx
// import React from 'react';

// // Unsplash images provided earlier
// const sunsetImage = 'https://images.unsplash.com/photo-1725609959854-ab81563bedb8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
// const profileImage = 'https://images.unsplash.com/photo-1740890226776-3984f860a92f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

// function App() {
//   // Data for User Profile Dashboard
//   const user = {
//     name: 'Abdul Hakim',
//     title: 'UI/UX Designer',
//     joinDate: 'Joined on 30 Sep 2018',
//     followers: '82,638 followers',
//     connections: '500+ connections',
//     profilePic: profileImage,
//     coverPhoto: sunsetImage,
//     socialMedia: ['facebook', 'instagram', 'twitter'],
//   };

//   const courses = [
//     {
//       title: 'Modern and Contemporary 3D Design and Modeling',
//       instructor: 'Oliver Smith',
//       gpa: 'GPA: A',
//       lessons: '7/10',
//       assignments: '8/12',
//       lastScore: 'A',
//       time: '25h',
//       progress: 70,
//       image: 'https://via.placeholder.com/100?text=3D+Design',
//     },
//     {
//       title: 'The University of Sydney Positive Psychiatry and...',
//       instructor: 'James Johnson',
//       gpa: 'GPA: C',
//       lessons: '5/10',
//       assignments: '4/8',
//       lastScore: 'B',
//       time: '32h',
//       progress: 50,
//       image: 'https://via.placeholder.com/100?text=Psychology',
//     },
//   ];

//   const sessionHistory = [
//     { name: 'Harry Bender', location: 'Paris', time: 'Sep 12, 13:00', image: profileImage },
//     { name: 'Katy Fuller', location: 'New York', time: 'Sep 12, 13:00', image: profileImage },
//     { name: 'Jonathan Kelly', location: 'Victoria', time: 'Sep 12, 13:00', image: profileImage },
//     { name: 'Billie Wright', location: 'Paris', time: 'Sep 12, 13:00', image: profileImage },
//     { name: 'Sarah Page', location: 'Perth', time: 'Sep 12, 13:00', image: profileImage },
//     { name: 'Erica Wyatt', location: 'Paris', time: 'Sep 12, 13:00', image: profileImage },
//   ];

//   // Data for Social Media/Balance Dashboard
//   const totalViews = '57,892 K';
//   const publicProfileUrl = 'www.linkedin.com/in/honey-sharma-228451249';
//   const socialPost = {
//     author: 'Jordan Warmoes-Nielsen with Valentine Basser',
//     date: 'January 10, 2017',
//     location: 'Santorini',
//     content: 'Finally in holidays! Enjoying this incredible sunset in Santorini!',
//     image: sunsetImage,
//   };
//   const courseSingle = {
//     title: 'Creative Writing',
//     description: 'This Specialization covers elements of three major...',
//     month: 'June',
//     score: 'F',
//     progress: 2,
//   };
//   const balance = '$96,720.00';
//   const recentActivity = [
//     { name: 'Annie Patel', action: 'bought for 0.069 ETH', time: '15m ago', image: profileImage },
//     { name: 'Frida Cordova', action: 'bought for 0.069 ETH', time: '15m ago', image: profileImage },
//     { name: 'Madelyn Steadman', action: 'bought for 0.069 ETH', time: '15m ago', image: profileImage },
//     { name: 'Daniole Bullock', action: 'bought for 0.069 ETH', time: '15m ago', image: profileImage },
//   ];

//   // Data for Inventory/Project/Members Dashboard
//   const inventoryValues = {
//     soldUnits: '32%',
//     totalUnits: '68%',
//   };
//   const badges = [
//     { name: '365 Days Badge', image: 'https://via.placeholder.com/40?text=365' },
//     { name: 'Most Recent Badge', image: 'https://via.placeholder.com/40?text=Recent' },
//   ];
//   const currentProject = {
//     name: 'Apple Store',
//     status: 'In Progress',
//     manager: 'Laura P.',
//     lead: 'Arthur G.',
//     timeline: '12/10/2022 - 01/04/2023',
//     description: 'Implementation guideline in a detailed scale',
//     teamCount: 8,
//   };
//   const activeMembers = [
//     { name: 'Lindsey Mcgowan', role: 'Team Leader', image: profileImage },
//     { name: 'Soto Edwards', role: 'Team Leader', image: profileImage },
//     { name: 'Marcia Greer', role: 'Team Leader', image: profileImage },
//     { name: 'Mendoza Carver', role: 'Team Leader', image: profileImage },
//     { name: 'Drake Morin', role: 'Team Leader', image: profileImage },
//     { name: 'Stafford Carrillo', role: 'Team Leader', image: profileImage },
//     { name: 'Janice Wilder', role: 'Team Leader', image: profileImage },
//   ];

//   return (
//     <div className="bg-gray-200 min-h-screen p-5 flex flex-col gap-10">
//       {/* User Profile Dashboard */}
//       <div className="max-w-5xl w-full mx-auto">
//         {/* User Profile Section */}
//         <div className="bg-white rounded-lg shadow-md relative text-center">
//           <img
//             src={user.coverPhoto}
//             alt="Cover"
//             className="w-full h-48 object-cover rounded-t-lg"
//           />
//           <img
//             src={user.profilePic}
//             alt="Profile"
//             className="w-24 h-24 rounded-full absolute top-32 left-1/2 transform -translate-x-1/2 border-4 border-white object-cover"
//           />
//           <div className="pt-16 pb-5">
//             <h2 className="text-2xl font-bold">
//               {user.name} <span className="text-green-500">✔</span>
//             </h2>
//             <p className="text-gray-600">{user.title}</p>
//             <p className="text-gray-600">{user.joinDate}</p>
//             <p className="text-gray-600">
//               {user.followers} • {user.connections}
//             </p>
//             <div className="flex justify-center gap-3 mt-3">
//               {user.socialMedia.map((platform, index) => (
//                 <span
//                   key={index}
//                   className={`text-lg ${
//                     platform === 'facebook'
//                       ? 'text-blue-600'
//                       : platform === 'instagram'
//                       ? 'text-pink-500'
//                       : 'text-blue-400'
//                   }`}
//                 >
//                   {platform.charAt(0).toUpperCase() + platform.slice(1)}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Content Section */}
//         <div className="flex gap-5 mt-5">
//           {/* Course Cards Section */}
//           <div className="flex-2 flex flex-col gap-5">
//             {courses.map((course, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-4 rounded-lg shadow-md flex gap-3"
//               >
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-24 h-24 object-cover rounded-md"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold">{course.title}</h3>
//                   <p className="text-gray-600">{course.instructor}</p>
//                   <p className="text-gray-600">{course.gpa}</p>
//                   <p className="text-gray-600">Lessons: {course.lessons}</p>
//                   <p className="text-gray-600">Assignment: {course.assignments}</p>
//                   <p className="text-gray-600">
//                     Last score: {course.lastScore} | Time: {course.time}
//                   </p>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full"
//                       style={{ width: `${course.progress}%` }}
//                     ></div>
//                   </div>
//                   <p className="text-gray-600 mt-1">{course.progress}%</p>
//                 </div>
//               </div>
//             ))}
//             <button className="bg-purple-600 text-white px-5 py-2 rounded-lg self-start hover:bg-purple-700 transition">
//               Resume
//             </button>
//           </div>

//           {/* Sidebar Section */}
//           <div className="flex-1 flex flex-col gap-5">
//             {/* Security Status */}
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h3 className="text-lg font-semibold">Security Status</h3>
//               <div className="w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center mx-auto my-3">
//                 <span className="text-2xl font-bold">78%</span>
//               </div>
//               <p className="text-center text-gray-600">High Risk</p>
//             </div>

//             {/* Session History */}
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold">Session History</h3>
//                 <p className="text-gray-600">2/8</p>
//               </div>
//               {sessionHistory.map((session, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 mt-3"
//                 >
//                   <img
//                     src={session.image}
//                     alt={session.name}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <div className="flex-1">
//                     <p className="font-medium">{session.name}</p>
//                     <p className="text-gray-600">{session.time}</p>
//                   </div>
//                   <span className="text-gray-600">{session.location}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Social Media/Balance Dashboard */}
//       <div className="max-w-6xl w-full mx-auto flex gap-5">
//         {/* Left Column */}
//         <div className="flex-1 flex flex-col gap-5">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-sm font-semibold text-gray-600">TOTAL VIEWS THIS MONTH</h3>
//             <p className="text-3xl font-bold mt-2">Monthly Page Views</p>
//             <p className="text-4xl font-bold text-gray-800">{totalViews}</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h3 className="text-sm font-semibold text-gray-600">PUBLIC PROFILE & URL</h3>
//               <span className="text-gray-500">✏️</span>
//             </div>
//             <p className="text-blue-600 mt-2 break-all">{publicProfileUrl}</p>
//           </div>
//         </div>

//         {/* Center Column */}
//         <div className="flex-2 flex flex-col gap-5">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <div className="flex items-center gap-3">
//               <img
//                 src={profileImage}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <p className="font-semibold">{socialPost.author}</p>
//                 <p className="text-sm text-gray-600">{socialPost.date} • {socialPost.location}</p>
//               </div>
//             </div>
//             <p className="mt-3 text-gray-800">{socialPost.content}</p>
//             <img
//               src={socialPost.image}
//               alt="Sunset"
//               className="w-full h-64 object-cover rounded-lg mt-3"
//             />
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
//             <div className="relative w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
//               <span className="text-gray-500 text-2xl">{courseSingle.progress}</span>
//               <span className="absolute top-0 left-0 bg-orange-500 text-white text-xs rounded-full px-2 py-1">Retake</span>
//               <span className="absolute bottom-0 right-0 bg-green-500 text-white text-xs rounded-full px-2 py-1">Done</span>
//             </div>
//             <div className="flex-1">
//               <h3 className="text-lg font-semibold">{courseSingle.title}</h3>
//               <p className="text-gray-600">{courseSingle.description}</p>
//               <p className="text-gray-600">{courseSingle.month}</p>
//             </div>
//             <div>
//               <p className="text-lg font-semibold">Score: {courseSingle.score}</p>
//             </div>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">About</h3>
//             <p className="text-gray-600 mt-2">Add your About content here...</p>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="flex-1 flex flex-col gap-5">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">Balance</h3>
//             <p className="text-3xl font-bold text-gray-800 mt-2">{balance}</p>
//             <img
//               src="https://via.placeholder.com/300x100?text=Graph"
//               alt="Graph"
//               className="w-full h-24 object-cover mt-3"
//             />
//             <div className="flex justify-between text-sm text-gray-600 mt-2">
//               <span>Mon</span>
//               <span>Tue</span>
//               <span>Wed</span>
//               <span>Thu</span>
//               <span>Fri</span>
//               <span>Sat</span>
//               <span>Sun</span>
//             </div>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h3 className="text-lg font-semibold">Recent Activity</h3>
//               <a href="#" className="text-blue-600 text-sm">VIEW ALL</a>
//             </div>
//             {recentActivity.map((activity, index) => (
//               <div key={index} className="flex items-center gap-3 mt-3">
//                 <img
//                   src={activity.image}
//                   alt={activity.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div className="flex-1">
//                   <p className="font-semibold">{activity.name}</p>
//                   <p className="text-gray-600">{activity.action}</p>
//                 </div>
//                 <span className="text-green-500 text-sm">{activity.time}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Inventory/Project/Members Dashboard */}
//       <div className="max-w-6xl w-full mx-auto flex gap-5">
//         {/* Left Column */}
//         <div className="flex-1 flex flex-col gap-5">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-sm font-semibold text-gray-600">Inventory Values</h3>
//             <div className="w-32 h-32 mx-auto mt-4 relative">
//               <svg className="w-full h-full">
//                 <circle
//                   cx="50%"
//                   cy="50%"
//                   r="40%"
//                   fill="none"
//                   stroke="#e0e0e0"
//                   strokeWidth="10"
//                 />
//                 <circle
//                   cx="50%"
//                   cy="50%"
//                   r="40%"
//                   fill="none"
//                   stroke="#4b5563"
//                   strokeWidth="10"
//                   strokeDasharray="251.2"
//                   strokeDashoffset="171.82"
//                   transform="rotate(-90 50 50)"
//                 />
//               </svg>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//                 <p className="text-sm text-gray-600">Sold units</p>
//                 <p className="text-sm text-gray-600">32%</p>
//                 <p className="text-sm text-gray-600">Total units</p>
//                 <p className="text-sm text-gray-600">68%</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-sm font-semibold text-gray-600">Badges</h3>
//             <p className="text-2xl font-bold mt-2">15</p>
//             <div className="flex gap-2 mt-2">
//               {badges.map((badge, index) => (
//                 <img
//                   key={index}
//                   src={badge.image}
//                   alt={badge.name}
//                   className="w-10 h-10 object-cover rounded"
//                 />
//               ))}
//             </div>
//             <p className="text-sm text-gray-600 mt-2">Most Recent Badge</p>
//             <p className="text-sm text-gray-600">365 Days Badge</p>
//           </div>
//         </div>

//         {/* Center Column */}
//         <div className="flex-2 flex flex-col gap-5">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h3 className="text-sm font-semibold text-gray-600">Current Project</h3>
//               <a href="#" className="text-blue-600 text-sm">See All</a>
//             </div>
//             <h2 className="text-xl font-semibold mt-2">Project Name</h2>
//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-lg">🍎</span>
//               <span className="text-lg font-semibold">Apple Store</span>
//               <span className="bg-yellow-400 text-xs text-white px-2 py-1 rounded-full">In Progress</span>
//             </div>
//             <div className="flex gap-4 mt-2">
//               <div>
//                 <p className="text-sm text-gray-600">Project Manager</p>
//                 <p className="font-semibold">Laura P.</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Design Lead</p>
//                 <p className="font-semibold">Arthur G.</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-lg">⏰</span>
//               <p className="text-sm text-gray-600">{currentProject.timeline}</p>
//             </div>
//             <p className="text-sm text-gray-600 mt-2">{currentProject.description}</p>
//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-lg">👥</span>
//               <p className="text-sm text-gray-600">{currentProject.teamCount} people</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="flex-1 flex flex-col gap-5">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-sm font-semibold text-gray-600">Active Members (17)</h3>
//             {activeMembers.map((member, index) => (
//               <div key={index} className="flex items-center gap-2 mt-2">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="font-semibold">{member.name}</p>
//                   <p className="text-sm text-gray-600">{member.role}</p>
//                 </div>
//                 <span className="text-green-500 text-sm">✔</span>
//               </div>
//             ))}
//             <button className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded-lg w-full hover:bg-yellow-500 transition">
//               View All
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// // App.jsx
// import React, { useState } from 'react';
// // import ReactCrop from 'react-image-crop';  
// // import 'react-image-crop/dist/ReactCrop.css';

// // Unsplash images
// const sunsetImage = 'https://images.unsplash.com/photo-1725609959854-ab81563bedb8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
// const profileImage = 'https://images.unsplash.com/photo-1740890226776-3984f860a92f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

// function App() {
//   // Data for User Profile Dashboard
//   const [user, setUser] = useState({
//     name: 'Abdul Hakim',
//     title: 'UI/UX Designer',
//     joinDate: 'Joined on 30 Sep 2018',
//     followers: '82,638 followers',
//     connections: '500+ connections',
//     profilePic: profileImage,
//     coverPhoto: sunsetImage,
//     socialMedia: ['facebook', 'instagram', 'twitter'],
//   });

//   const courses = [
//     {
//       title: 'Modern and Contemporary 3D Design and Modeling',
//       instructor: 'Oliver Smith',
//       gpa: 'GPA: A',
//       lessons: '7/10',
//       assignments: '8/12',
//       lastScore: 'A',
//       time: '25h',
//       progress: 70,
//       image: 'https://via.placeholder.com/100?text=3D+Design',
//     },
//     {
//       title: 'The University of Sydney Positive Psychiatry and...',
//       instructor: 'James Johnson',
//       gpa: 'GPA: C',
//       lessons: '5/10',
//       assignments: '4/8',
//       lastScore: 'B',
//       time: '32h',
//       progress: 50,
//       image: 'https://via.placeholder.com/100?text=Psychology',
//     },
//   ];

//   const sessionHistory = [
//     { name: 'Harry Bender', location: 'Paris', time: 'Sep 12, 13:00', image: profileImage },
//     { name: 'Katy Fuller', location: 'New York', time: 'Sep 12, 13:00', image: profileImage },
//     { name: 'Jonathan Kelly', location: 'Victoria', time: 'Sep 12, 13:00', image: profileImage },
//     { name: 'Billie Wright', location: 'Paris', time: 'Sep 12, 13:00', image: profileImage },
//     { name: 'Sarah Page', location: 'Perth', time: 'Sep 12, 13:00', image: profileImage },
//     { name: 'Erica Wyatt', location: 'Paris', time: 'Sep 12, 13:00', image: profileImage },
//   ];

//   // Data for Social Media/Balance Dashboard
//   const totalViews = '57,892 K';
//   const publicProfileUrl = 'www.linkedin.com/in/honey-sharma-228451249';
//   const socialPost = {
//     author: 'Jordan Warmoes-Nielsen with Valentine Basser',
//     date: 'January 10, 2017',
//     location: 'Santorini',
//     content: 'Finally in holidays! Enjoying this incredible sunset in Santorini!',
//     image: sunsetImage,
//   };
//   const courseSingle = {
//     title: 'Creative Writing',
//     description: 'This Specialization covers elements of three major...',
//     month: 'June',
//     score: 'F',
//     progress: 2,
//   };
//   const balance = '$96,720.00';
//   const recentActivity = [
//     { name: 'Annie Patel', action: 'bought for 0.069 ETH', time: '15m ago', image: profileImage },
//     { name: 'Frida Cordova', action: 'bought for 0.069 ETH', time: '15m ago', image: profileImage },
//     { name: 'Madelyn Steadman', action: 'bought for 0.069 ETH', time: '15m ago', image: profileImage },
//     { name: 'Daniole Bullock', action: 'bought for 0.069 ETH', time: '15m ago', image: profileImage },
//   ];

//   // Data for Inventory/Project/Members Dashboard
//   const inventoryValues = {
//     soldUnits: '32%',
//     totalUnits: '68%',
//   };
//   const badges = [
//     { name: '365 Days Badge', image: 'https://via.placeholder.com/40?text=365' },
//     { name: 'Most Recent Badge', image: 'https://via.placeholder.com/40?text=Recent' },
//   ];
//   const currentProject = {
//     name: 'Apple Store',
//     status: 'In Progress',
//     manager: 'Laura P.',
//     lead: 'Arthur G.',
//     timeline: '12/10/2022 - 01/04/2023',
//     description: 'Implementation guideline in a detailed scale',
//     teamCount: 8,
//   };
//   const activeMembers = [
//     { name: 'Lindsey Mcgowan', role: 'Team Leader', image: profileImage },
//     { name: 'Soto Edwards', role: 'Team Leader', image: profileImage },
//     { name: 'Marcia Greer', role: 'Team Leader', image: profileImage },
//     { name: 'Mendoza Carver', role: 'Team Leader', image: profileImage },
//     { name: 'Drake Morin', role: 'Team Leader', image: profileImage },
//     { name: 'Stafford Carrillo', role: 'Team Leader', image: profileImage },
//     { name: 'Janice Wilder', role: 'Team Leader', image: profileImage },
//   ];

//   // State for Profile Photo Upload
//   const [image, setImage] = useState(null);
//   const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 1 });
//   const [croppedImageUrl, setCroppedImageUrl] = useState(user.profilePic);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onload = () => setImage(reader.result);
//     reader.readAsDataURL(file);
//   };

//   const handleCropComplete = (crop) => {
//     if (image && crop.width && crop.height) {
//       const canvas = document.createElement('canvas');
//       const scaleX = image.naturalWidth / image.width;
//       const scaleY = image.naturalHeight / image.height;
//       canvas.width = crop.width;
//       canvas.height = crop.height;
//       const ctx = canvas.getContext('2d');
//       ctx.drawImage(
//         image,
//         crop.x * scaleX,
//         crop.y * scaleY,
//         crop.width * scaleX,
//         crop.height * scaleY,
//         0,
//         0,
//         crop.width,
//         crop.height
//       );
//       const newUrl = canvas.toDataURL();
//       setCroppedImageUrl(newUrl);
//       setUser({ ...user, profilePic: newUrl }); // Update user state
//     }
//   };

//   // State for Skills
//   const [skills, setSkills] = useState([
//     { name: 'UI Design', progress: 85 },
//     { name: '3D Modeling', progress: 70 },
//   ]);

//   const updateSkillProgress = (index, value) => {
//     const newSkills = [...skills];
//     newSkills[index].progress = Math.min(100, Math.max(0, value)); // Clamp between 0 and 100
//     setSkills(newSkills);
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen p-5 flex flex-col gap-10">
//       {/* User Profile Dashboard */}
//       <div className="max-w-5xl w-full mx-auto">
//         {/* User Profile Section */}
//         <div className="bg-white rounded-lg shadow-md relative text-center">
//           <img
//             src={user.coverPhoto}
//             alt="Cover"
//             className="w-full h-48 object-cover rounded-t-lg"
//           />
//           <img
//             src={croppedImageUrl}
//             alt="Profile"
//             className="w-24 h-24 rounded-full absolute top-32 left-1/2 transform -translate-x-1/2 border-4 border-white object-cover"
//           />
//           <div className="pt-16 pb-5">
//             <h2 className="text-2xl font-bold">
//               {user.name} <span className="text-green-500">✔</span>
//             </h2>
//             <p className="text-gray-600">{user.title}</p>
//             <p className="text-gray-600">{user.joinDate}</p>
//             <p className="text-gray-600">
//               {user.followers} • {user.connections}
//             </p>
//             <div className="flex justify-center gap-3 mt-3">
//               {user.socialMedia.map((platform, index) => (
//                 <span
//                   key={index}
//                   className={`text-lg ${
//                     platform === 'facebook'
//                       ? 'text-blue-600'
//                       : platform === 'instagram'
//                       ? 'text-pink-500'
//                       : 'text-blue-400'
//                   }`}
//                 >
//                   {platform.charAt(0).toUpperCase() + platform.slice(1)}
//                 </span>
//               ))}
//             </div>
//             {/* Photo Upload and Crop */}
//             <div className="mt-5">
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 className="mb-2 p-1 border rounded"
//               />
//               {image && (
//                 <ReactCrop crop={crop} onChange={setCrop} onComplete={handleCropComplete}>
//                   <img src={image} alt="Crop" className="max-w-full" />
//                 </ReactCrop>
//               )}
//               {croppedImageUrl && (
//                 <img
//                   src={croppedImageUrl}
//                   alt="Cropped Profile"
//                   className="w-24 h-24 rounded-full mt-2 object-cover"
//                 />
//               )}
//             </div>
//             {/* Dynamic Skill Progress Bars */}
//             <div className="mt-5">
//               <h3 className="text-lg font-semibold">Skills</h3>
//               {skills.map((skill, index) => (
//                 <div key={index} className="mb-3">
//                   <div className="flex justify-between">
//                     <label className="text-gray-600">{skill.name}</label>
//                     <input
//                       type="number"
//                       min="0"
//                       max="100"
//                       value={skill.progress}
//                       onChange={(e) => updateSkillProgress(index, e.target.value)}
//                       className="w-16 p-1 border rounded"
//                     />
//                   </div>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full"
//                       style={{ width: `${skill.progress}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//               <button
//                 className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700 transition"
//                 onClick={() => setSkills([...skills, { name: 'New Skill', progress: 0 }])}
//               >
//                 Add Skill
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Main Content Section */}
//         <div className="flex gap-5 mt-5">
//           {/* Course Cards Section */}
//           <div className="flex-2 flex flex-col gap-5">
//             {courses.map((course, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-4 rounded-lg shadow-md flex gap-3"
//               >
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="w-24 h-24 object-cover rounded-md"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-lg font-semibold">{course.title}</h3>
//                   <p className="text-gray-600">{course.instructor}</p>
//                   <p className="text-gray-600">{course.gpa}</p>
//                   <p className="text-gray-600">Lessons: {course.lessons}</p>
//                   <p className="text-gray-600">Assignment: {course.assignments}</p>
//                   <p className="text-gray-600">
//                     Last score: {course.lastScore} | Time: {course.time}
//                   </p>
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full"
//                       style={{ width: `${course.progress}%` }}
//                     ></div>
//                   </div>
//                   <p className="text-gray-600 mt-1">{course.progress}%</p>
//                 </div>
//               </div>
//             ))}
//             <button className="bg-purple-600 text-white px-5 py-2 rounded-lg self-start hover:bg-purple-700 transition">
//               Resume
//             </button>
//           </div>

//           {/* Sidebar Section */}
//           <div className="flex-1 flex flex-col gap-5">
//             {/* Security Status */}
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <h3 className="text-lg font-semibold">Security Status</h3>
//               <div className="w-24 h-24 bg-yellow-300 rounded-full flex items-center justify-center mx-auto my-3">
//                 <span className="text-2xl font-bold">78%</span>
//               </div>
//               <p className="text-center text-gray-600">High Risk</p>
//             </div>

//             {/* Session History */}
//             <div className="bg-white p-4 rounded-lg shadow-md">
//               <div className="flex justify-between items-center">
//                 <h3 className="text-lg font-semibold">Session History</h3>
//                 <p className="text-gray-600">2/8</p>
//               </div>
//               {sessionHistory.map((session, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 mt-3"
//                 >
//                   <img
//                     src={session.image}
//                     alt={session.name}
//                     className="w-10 h-10 rounded-full object-cover"
//                   />
//                   <div className="flex-1">
//                     <p className="font-medium">{session.name}</p>
//                     <p className="text-gray-600">{session.time}</p>
//                   </div>
//                   <span className="text-gray-600">{session.location}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Social Media/Balance Dashboard */}
//       <div className="max-w-6xl w-full mx-auto flex gap-5">
//         {/* Left Column */}
//         <div className="flex-1 flex flex-col gap-5">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-sm font-semibold text-gray-600">TOTAL VIEWS THIS MONTH</h3>
//             <p className="text-3xl font-bold mt-2">Monthly Page Views</p>
//             <p className="text-4xl font-bold text-gray-800">{totalViews}</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h3 className="text-sm font-semibold text-gray-600">PUBLIC PROFILE & URL</h3>
//               <span className="text-gray-500">✏️</span>
//             </div>
//             <p className="text-blue-600 mt-2 break-all">{publicProfileUrl}</p>
//           </div>
//         </div>

//         {/* Center Column */}
//         <div className="flex-2 flex flex-col gap-5">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <div className="flex items-center gap-3">
//               <img
//                 src={profileImage}
//                 alt="Profile"
//                 className="w-10 h-10 rounded-full object-cover"
//               />
//               <div>
//                 <p className="font-semibold">{socialPost.author}</p>
//                 <p className="text-sm text-gray-600">{socialPost.date} • {socialPost.location}</p>
//               </div>
//             </div>
//             <p className="mt-3 text-gray-800">{socialPost.content}</p>
//             <img
//               src={socialPost.image}
//               alt="Sunset"
//               className="w-full h-64 object-cover rounded-lg mt-3"
//             />
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-3">
//             <div className="relative w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
//               <span className="text-gray-500 text-2xl">{courseSingle.progress}</span>
//               <span className="absolute top-0 left-0 bg-orange-500 text-white text-xs rounded-full px-2 py-1">Retake</span>
//               <span className="absolute bottom-0 right-0 bg-green-500 text-white text-xs rounded-full px-2 py-1">Done</span>
//             </div>
//             <div className="flex-1">
//               <h3 className="text-lg font-semibold">{courseSingle.title}</h3>
//               <p className="text-gray-600">{courseSingle.description}</p>
//               <p className="text-gray-600">{courseSingle.month}</p>
//             </div>
//             <div>
//               <p className="text-lg font-semibold">Score: {courseSingle.score}</p>
//             </div>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">About</h3>
//             <p className="text-gray-600 mt-2">Add your About content here...</p>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="flex-1 flex flex-col gap-5">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">Balance</h3>
//             <p className="text-3xl font-bold text-gray-800 mt-2">{balance}</p>
//             <img
//               src="https://via.placeholder.com/300x100?text=Graph"
//               alt="Graph"
//               className="w-full h-24 object-cover mt-3"
//             />
//             <div className="flex justify-between text-sm text-gray-600 mt-2">
//               <span>Mon</span>
//               <span>Tue</span>
//               <span>Wed</span>
//               <span>Thu</span>
//               <span>Fri</span>
//               <span>Sat</span>
//               <span>Sun</span>
//             </div>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h3 className="text-lg font-semibold">Recent Activity</h3>
//               <a href="#" className="text-blue-600 text-sm">VIEW ALL</a>
//             </div>
//             {recentActivity.map((activity, index) => (
//               <div key={index} className="flex items-center gap-3 mt-3">
//                 <img
//                   src={activity.image}
//                   alt={activity.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div className="flex-1">
//                   <p className="font-semibold">{activity.name}</p>
//                   <p className="text-gray-600">{activity.action}</p>
//                 </div>
//                 <span className="text-green-500 text-sm">{activity.time}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Inventory/Project/Members Dashboard */}
//       <div className="max-w-6xl w-full mx-auto flex gap-5">
//         {/* Left Column */}
//         <div className="flex-1 flex flex-col gap-5">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-sm font-semibold text-gray-600">Inventory Values</h3>
//             <div className="w-32 h-32 mx-auto mt-4 relative">
//               <svg className="w-full h-full">
//                 <circle
//                   cx="50%"
//                   cy="50%"
//                   r="40%"
//                   fill="none"
//                   stroke="#e0e0e0"
//                   strokeWidth="10"
//                 />
//                 <circle
//                   cx="50%"
//                   cy="50%"
//                   r="40%"
//                   fill="none"
//                   stroke="#4b5563"
//                   strokeWidth="10"
//                   strokeDasharray="251.2"
//                   strokeDashoffset="171.82"
//                   transform="rotate(-90 50 50)"
//                 />
//               </svg>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//                 <p className="text-sm text-gray-600">Sold units</p>
//                 <p className="text-sm text-gray-600">32%</p>
//                 <p className="text-sm text-gray-600">Total units</p>
//                 <p className="text-sm text-gray-600">68%</p>
//               </div>
//             </div>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-sm font-semibold text-gray-600">Badges</h3>
//             <p className="text-2xl font-bold mt-2">15</p>
//             <div className="flex gap-2 mt-2">
//               {badges.map((badge, index) => (
//                 <img
//                   key={index}
//                   src={badge.image}
//                   alt={badge.name}
//                   className="w-10 h-10 object-cover rounded"
//                 />
//               ))}
//             </div>
//             <p className="text-sm text-gray-600 mt-2">Most Recent Badge</p>
//             <p className="text-sm text-gray-600">365 Days Badge</p>
//           </div>
//         </div>

//         {/* Center Column */}
//         <div className="flex-2 flex flex-col gap-5">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <div className="flex justify-between items-center">
//               <h3 className="text-sm font-semibold text-gray-600">Current Project</h3>
//               <a href="#" className="text-blue-600 text-sm">See All</a>
//             </div>
//             <h2 className="text-xl font-semibold mt-2">Project Name</h2>
//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-lg">🍎</span>
//               <span className="text-lg font-semibold">Apple Store</span>
//               <span className="bg-yellow-400 text-xs text-white px-2 py-1 rounded-full">In Progress</span>
//             </div>
//             <div className="flex gap-4 mt-2">
//               <div>
//                 <p className="text-sm text-gray-600">Project Manager</p>
//                 <p className="font-semibold">Laura P.</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-600">Design Lead</p>
//                 <p className="font-semibold">Arthur G.</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-lg">⏰</span>
//               <p className="text-sm text-gray-600">{currentProject.timeline}</p>
//             </div>
//             <p className="text-sm text-gray-600 mt-2">{currentProject.description}</p>
//             <div className="flex items-center gap-2 mt-2">
//               <span className="text-lg">👥</span>
//               <p className="text-sm text-gray-600">{currentProject.teamCount} people</p>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="flex-1 flex flex-col gap-5">
//           <div className="bg-white p-4 rounded-lg shadow-md">
//             <h3 className="text-sm font-semibold text-gray-600">Active Members (17)</h3>
//             {activeMembers.map((member, index) => (
//               <div key={index} className="flex items-center gap-2 mt-2">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="font-semibold">{member.name}</p>
//                   <p className="text-sm text-gray-600">{member.role}</p>
//                 </div>
//                 <span className="text-green-500 text-sm">✔</span>
//               </div>
//             ))}
//             <button className="mt-4 bg-yellow-400 text-white px-4 py-2 rounded-lg w-full hover:bg-yellow-500 transition">
//               View All
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;\


// import React, { useState } from 'react';

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [likes, setLikes] = useState([0, 0, 0, 0]);
//   const [notifications, setNotifications] = useState(3);

//   const handleLike = (index) => {
//     const newLikes = [...likes];
//     newLikes[index] += 1;
//     setLikes(newLikes);
//   };

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
//       {/* Header */}
    //   <header className="fixed top-0 w-full z-10 glassmorphism shadow-lg py-4 px-6 md:px-12 flex justify-between items-center">
    //     <div className="flex items-center space-x-4">
    //       <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md">
    //         N
    //       </div>
    //       <span className="text-xl font-semibold text-blue-600 tracking-wide">NetworkElite</span>
    //     </div>
    //     <div className="flex items-center space-x-6">
    //       <div className="relative">
    //         <input
    //           type="text"
    //           placeholder="Search..."
    //           className={`py-2 px-4 rounded-lg border ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 w-64 md:w-80`}
    //           onFocus={(e) => e.target.classList.add('w-96')}
    //           onBlur={(e) => e.target.classList.remove('w-96')}
    //         />
    //       </div>
    //       <nav className="hidden md:flex items-center space-x-8">
    //         <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">🏠 Home</a>
    //         <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">🔗 Network</a>
    //         <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">💼 Jobs</a>
    //         <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">📩 Messages</a>
    //         <div className="relative group">
    //           <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">🔔 Alerts</a>
    //           <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{notifications}</span>
    //           <div className={`absolute top-full right-0 mt-2 w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg p-4 hidden group-hover:block`}>
    //             <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>Jane liked your post</p>
    //             <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>New job posted by Google</p>
    //             <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Mike commented on your post</p>
    //           </div>
    //         </div>
    //       </nav>
    //       <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
    //         <img
    //           src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //           alt="Profile"
    //           className="w-full h-full object-cover"
    //         />
    //       </div>
    //       <span
    //         className="text-xl cursor-pointer transform transition-transform duration-300 hover:rotate-180"
    //         onClick={() => setIsDarkMode(!isDarkMode)}
    //       >
    //         {isDarkMode ? '☀️' : '🌙'}
    //       </span>
    //     </div>
    //   </header>

//       {/* Main Container */}
//       <div className="flex mt-20 px-4 md:px-8 scrollbar-hidden overflow-y-auto">
//         {/* Left Sidebar */}
//         {isSidebarOpen && (
//           <aside className="w-full md:w-1/5 p-4">
//             <div className={`p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mb-6`}>
//           <div className="relative inline-block mb-4 ml-4">
//            <img
//              src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//              alt="Profile"
//              className="w-28 h-28 rounded-full border-2 border-gray-300 shadow-md hover:scale-105 transition-transform duration-200 object-cover"
//            />
//            <span className="absolute bottom-1 right-3 w-5 h-5 bg-teal-400 rounded-full border-2 border-white"></span>
//          </div>
//               <h3 className="text-lg font-semibold text-blue-600 mt-2">John Doe</h3>
//               <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Software Engineer</p>
//               <p className={`text-xs italic ${isDarkMode ? 'text-gray-500' : 'text-gray-700'} mb-2`}>"Building the future, one line at a time."</p>
//               <div className="flex space-x-2 mb-2">
//                 <span className={`text-xs text-teal-500 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} px-2 py-1 rounded-full`}>Top Contributor</span>
//                 <span className={`text-xs text-teal-500 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} px-2 py-1 rounded-full`}>Verified</span>
//               </div>
//               <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>
//                 <span className="text-blue-600">250</span> Connections • <span className="text-blue-600">180</span> Following
//               </p>
//               <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
//                 <span className="text-blue-600">1.2K</span> Profile Views • <span className="text-blue-600">3.5K</span> Impressions
//               </p>
//               <div className="mb-4">
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-1`}>Your Posts This Week: <span className="text-blue-600">5</span></p>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Engagement: <span className="text-teal-500">+20%</span></p>
//               </div>
//               <button className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white py-2 rounded-full hover:scale-105 transition-transform duration-200">
//                 View Profile
//               </button>
//               <h4 className={`mt-4 text-lg font-semibold text-blue-600 border-b ${isDarkMode ? 'border-teal-500' : 'border-blue-600'} pb-2`}>My Community</h4>
//               <div className="flex flex-col space-y-2 mt-2">
//                 <p className={`text-sm text-blue-600 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} px-4 py-2 rounded-full cursor-pointer hover:scale-105 transition-transform duration-200 flex items-center space-x-2`}>
//                   <span>🌟</span><span>#ReactDevs</span>
//                 </p>
//                 <p className={`text-sm text-blue-600 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} px-4 py-2 rounded-full cursor-pointer hover:scale-105 transition-transform duration-200 flex items-center space-x-2`}>
//                   <span>🚀</span><span>#TechHub</span>
//                 </p>
//               </div>
//             </div>
//             {/* Footer */}
//             <footer className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} shadow-sm`}>
//               <p className={`text-sm font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>NetworkElite</p>
//               <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>© 2025 | 50,000 Cr</p>
//               <div className="flex flex-col space-y-1">
//                 <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">About</a>
//                 <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Contact</a>
//                 <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">Privacy</a>
//               </div>
//               <div className="flex space-x-4 mt-2">
//                 <span className="text-lg cursor-pointer hover:text-blue-600">🐦</span>
//                 <span className="text-lg cursor-pointer hover:text-blue-600">📘</span>
//                 <span className="text-lg cursor-pointer hover:text-blue-600">📸</span>
//               </div>
//             </footer>
//           </aside>
//         )}

//         {/* Main Content */}
//         <main className={`w-full ${isSidebarOpen ? 'md:w-3/5' : 'md:w-4/5'} p-4 flex flex-col items-center`}>
//           {/* Post Input */}
//           <div className={`p-4 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mb-8 w-full max-w-lg`}>
//             <input
//               type="text"
//               placeholder="Post Title"
//               className={`w-full py-2 px-4 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             />
//             <textarea
//               placeholder="What’s on your mind?"
//               className={`w-full py-2 px-4 rounded-lg border ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-gray-300 text-gray-900'} resize-y h-24 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
//             ></textarea>
//             <div className="flex space-x-2">
//               <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700">B</button>
//               <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700">I</button>
//               <button className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-700">📷 Media</button>
//               <button className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm hover:bg-teal-600 ml-auto">Post</button>
//             </div>
//           </div>

//           {/* Newsfeed */}
//           <div className="flex flex-col space-y-8 w-full max-w-lg">
//             {[1, 2, 3, 4].map((postNum, index) => (
//               <div
//                 key={postNum}
//                 className={`p-6 rounded-xl shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} hover:scale-105 transition-transform duration-200 flex flex-col justify-between`}
//               >
//                 <div className="flex justify-between items-center mb-4">
//                   <div className="flex items-center relative group">
//                     <img src="https://via.placeholder.com/50" alt="User" className="w-12 h-12 rounded-full mr-4" />
//                     <div>
//                       <p
//                         className={`font-bold text-base ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} cursor-pointer`}
//                         onMouseEnter={(e) => e.target.nextElementSibling.style.display = 'block'}
//                         onMouseLeave={(e) => e.target.nextElementSibling.style.display = 'none'}
//                       >
//                         Alice Brown
//                       </p>
//                       <div
//                         className={`absolute top-full left-0 w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg p-4 z-10 hidden`}
//                       >
//                         <img src="https://via.placeholder.com/50" alt="User" className="w-12 h-12 rounded-full mb-2" />
//                         <p className={`font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Alice Brown</p>
//                         <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>UI Designer</p>
//                         <button className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs mt-2 hover:bg-teal-600">
//                           Connect
//                         </button>
//                       </div>
//                       <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                         2h ago {postNum === 1 && <span className="text-teal-500 ml-2">Live</span>}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex space-x-4">
//                     <span className={`cursor-pointer ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-600`} title="More options">
//                       ⋯
//                     </span>
//                     <span className={`cursor-pointer ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-600`} title="Close">
//                       ✖
//                     </span>
//                   </div>
//                 </div>
//                 <p className={`text-base flex-grow ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Excited to share my latest project!</p>
//                 <div className="mt-4">
//                   <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>"Great work!" - Jane</p>
//                   <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>"Love this!" - Mike</p>
//                 </div>
//                 <div className="flex space-x-6 text-blue-600 text-sm mt-4">
//                   <span className="cursor-pointer hover:text-blue-800" onClick={() => handleLike(index)}>
//                     ❤️ {likes[index]} Likes
//                   </span>
//                   <span className="cursor-pointer hover:text-blue-800">💬 5 Comments</span>
//                   <span className="cursor-pointer hover:text-blue-800">➡️ Share</span>
//                   <span className="cursor-pointer hover:text-blue-800">🔄 Repost</span>
//                   <span className="cursor-pointer hover:text-blue-800 ml-auto">⭐ Save</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside className="w-full md:w-1/5 p-4">
//           <div className={`p-4 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mb-6`}>
//             <h4 className="text-base font-semibold text-blue-600 mb-2">
//               Trending Now <span className="text-teal-500 text-xs">Live</span>
//             </h4>
//             <div className="mb-2">
//               <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>Jane Smith - UI Designer</p>
//               <a href="#" className="text-teal-500 hover:text-teal-600 text-sm">Connect</a>
//             </div>
//             <p className="text-sm text-blue-600 mb-1">#TechTrends - 1.2K posts</p>
//           </div>
//           <div className={`p-4 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mb-6`}>
//             <h4 className="text-base font-semibold text-blue-600 mb-2">Job Recommendations</h4>
//             <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>Google - Software Engineer</p>
//             <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-700'} mb-1`}>Based on your skills</p>
//             <a href="#" className="text-teal-500 hover:text-teal-600 text-sm">Apply</a>
//             <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-2 mb-1`}>Amazon - UI Designer</p>
//             <a href="#" className="text-teal-500 hover:text-teal-600 text-sm">Apply</a>
//             <a href="#" className="text-blue-600 hover:text-blue-800 text-sm block mt-2">See All Jobs</a>
//           </div>
//           <div className={`p-4 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} mb-6`}>
//             <h4 className="text-base font-semibold text-blue-600 mb-2">Recent Activity</h4>
//             <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>John shared a post 1h ago</p>
//             <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Mike liked your comment</p>
//           </div>
//           <div className={`p-4 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
//             <h4 className="text-base font-semibold text-blue-600 mb-2">Quick Widgets</h4>
//             <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>🌤️ 28°C, Sunny</p>
//             <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>📅 Today: Meeting at 3 PM</p>
//           </div>
//         </aside>
//       </div>

//       {/* Mobile Responsiveness and Custom Styles */}
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
//         body { font-family: 'Inter', sans-serif; }
//         .glassmorphism {
//           background: rgba(255, 255, 255, 0.1);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.2);
//         }
//         .scrollbar-hidden::-webkit-scrollbar { display: none; }
//         .scrollbar-hidden { scrollbar-width: none; }
//         @media (max-width: 768px) {
//           header { flex-direction: column; padding: 1rem; }
//           nav { flex-wrap: wrap; gap: 0.5rem; justify-content: center; }
//           input[type="text"] { width: 100%; }
//           .flex.mt-20 { flex-direction: column; }
//           aside, main { width: 100%; padding: 1rem; }
//           footer { padding: 1rem; width: 100%; }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default App;




// import React, { useState } from 'react';

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [likes, setLikes] = useState([0, 0, 0, 0]);
//   const [notifications, setNotifications] = useState(3);

//   const handleLike = (index) => {
//     const newLikes = [...likes];
//     newLikes[index] += 1;
//     setLikes(newLikes);
//   };

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100' : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900'} overflow-hidden`}>
//       {/* Header */}

//       {/* Main Container */}
//       <div className="flex mt-20 px-4 md:px-12 max-w-7xl mx-auto">
//         {/* Left Sidebar */}
//         {isSidebarOpen && (
//           <aside className="w-full md:w-1/4 p-6">
//             <div className={`p-8 rounded-2xl shadow-2xl ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} glassmorphism mb-8 transform hover:-translate-y-2 transition-transform duration-300`}>
//               <div className="relative inline-block mb-6">
//                 <img
//                   src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Profile"
//                   className="w-28 h-28 rounded-full border-4 border-indigo-300 shadow-xl object-cover transform hover:scale-110 transition-transform duration-300"
//                 />
//                 <span className="absolute bottom-2 right-2 w-6 h-6 bg-teal-400 rounded-full border-3 border-white shadow-md"></span>
//               </div>
//               <h3 className="text-xl font-bold text-indigo-600 mb-2">John Doe</h3>
//               <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Senior Software Engineer</p>
//               <p className={`text-xs italic ${isDarkMode ? 'text-gray-500' : 'text-gray-700'} mb-4`}>Crafting the future with code</p>
//               <div className="flex space-x-3 mb-4">
//                 <span className={`text-xs font-semibold text-teal-500 ${isDarkMode ? 'bg-gray-700' : 'bg-indigo-100'} px-3 py-1 rounded-full shadow-sm`}>Top Contributor</span>
//                 <span className={`text-xs font-semibold text-teal-500 ${isDarkMode ? 'bg-gray-700' : 'bg-indigo-100'} px-3 py-1 rounded-full shadow-sm`}>Verified</span>
//               </div>
//               <div className="grid grid-cols-2 gap-2 mb-4">
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}><span className="text-indigo-500 font-semibold">250</span> Connections</p>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}><span className="text-indigo-500 font-semibold">180</span> Following</p>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}><span className="text-indigo-500 font-semibold">1.2K</span> Profile Views</p>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}><span className="text-indigo-500 font-semibold">3.5K</span> Impressions</p>
//               </div>
//               <div className="mb-6">
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Posts This Week: <span className="text-indigo-500 font-semibold">5</span></p>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Engagement: <span className="text-teal-500 font-semibold">+20%</span></p>
//               </div>
//               <button className="w-full bg-gradient-to-r from-indigo-500 to-teal-500 text-white py-3 rounded-full font-semibold hover:bg-gradient-to-l hover:shadow-xl transition-all duration-300">
//                 View Profile
//               </button>
//               <h4 className={`mt-6 text-lg font-semibold text-indigo-600 border-b ${isDarkMode ? 'border-teal-500' : 'border-indigo-500'} pb-2`}>My Communities</h4>
//               <div className="flex flex-col space-y-3 mt-4">
//                 {['🌟 #ReactDevs', '🚀 #TechHub'].map((community, idx) => (
//                   <p
//                     key={idx}
//                     className={`text-sm font-medium text-indigo-600 ${isDarkMode ? 'bg-gray-700/50' : 'bg-indigo-100/50'} px-4 py-2 rounded-full cursor-pointer hover:scale-105 hover:shadow-md transition-all duration-200 flex items-center space-x-2`}
//                   >
//                     <span>{community.split(' ')[0]}</span><span>{community.split(' ')[1]}</span>
//                   </p>
//                 ))}
//               </div>
//             </div>
//             <footer className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} glassmorphism shadow-xl`}>
//               <p className={`text-base font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-3`}>ConnectSphere</p>
//               <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>© 2025 | 10M+ Users</p>
//               <div className="flex flex-col space-y-2 mb-4">
//                 {['About', 'Contact', 'Privacy'].map((link, idx) => (
//                   <a key={idx} href="#" className="text-indigo-500 hover:text-indigo-700 text-sm font-medium">{link}</a>
//                 ))}
//               </div>
//               <div className="flex space-x-6">
//                 {['🐦', '📘', '📸'].map((icon, idx) => (
//                   <span key={idx} className="text-xl cursor-pointer hover:text-indigo-500 transition-colors duration-200">{icon}</span>
//                 ))}
//               </div>
//             </footer>
//           </aside>
//         )}

//         {/* Main Content */}
//         <main className={`w-full ${isSidebarOpen ? 'md:w-2/4' : 'md:w-3/4'} p-6 flex flex-col items-center`}>
//           {/* Post Input */}
//           <div className={`p-6 rounded-2xl shadow-2xl ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} glassmorphism mb-10 w-full max-w-2xl transform hover:-translate-y-2 transition-transform duration-300`}>
//             <input
//               type="text"
//               placeholder="Post Title"
//               className={`w-full py-3 px-5 rounded-full border-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-indigo-200 text-gray-900'} mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm`}
//             />
//             <textarea
//               placeholder="What's on your mind?"
//               className={`w-full py-3 px-5 rounded-xl border-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white border-indigo-200 text-gray-900'} resize-y h-32 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm`}
//             ></textarea>
//             <div className="flex space-x-4">
//               {['B', 'I', '📷 Media'].map((btn, idx) => (
//                 <button key={idx} className="bg-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-600 transition-colors duration-200">
//                   {btn}
//                 </button>
//               ))}
//               <button className="bg-gradient-to-r from-teal-500 to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-xl transition-all duration-200 ml-auto">
//                 Post
//               </button>
//             </div>
//           </div>

//           {/* Newsfeed */}
//           <div className="flex flex-col space-y-10 w-full max-w-2xl">
//             {[1, 2, 3, 4].map((postNum, index) => (
//               <div
//                 key={postNum}
//                 className={`p-8 rounded-2xl shadow-2xl ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} glassmorphism hover:-translate-y-2 transition-transform duration-300`}
//               >
//                 <div className="flex justify-between items-center mb-6">
//                   <div className="flex items-center relative group">
//                     <img src="https://via.placeholder.com/50" alt="User" className="w-14 h-14 rounded-full mr-4 border-2 border-indigo-300 shadow-sm" />
//                     <div>
//                       <p
//                         className={`font-bold text-lg ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} cursor-pointer`}
//                         onMouseEnter={(e) => e.target.nextElementSibling.style.display = 'block'}
//                         onMouseLeave={(e) => e.target.nextElementSibling.style.display = 'none'}
//                       >
//                         Alice Brown
//                       </p>
//                       <div
//                         className={`absolute top-full left-0 w-80 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl rounded-xl p-6 z-10 hidden border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
//                       >
//                         <img src="https://via.placeholder.com/50" alt="User" className="w-16 h-16 rounded-full mb-3 border-2 border-indigo-300" />
//                         <p className={`font-bold text-base ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>Alice Brown</p>
//                         <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>UI/UX Designer</p>
//                         <button className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-teal-600 transition-colors duration-200">
//                           Connect
//                         </button>
//                       </div>
//                       <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                         2h ago {postNum === 1 && <span className="text-teal-500 ml-2 font-semibold">Live</span>}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex space-x-4">
//                     <span className={`cursor-pointer text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-indigo-500`} title="More options">
//                       ⋯
//                     </span>
//                     <span className={`cursor-pointer text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-indigo-500`} title="Close">
//                       ✖
//                     </span>
//                   </div>
//                 </div>
//                 <p className={`text-base font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-900'} mb-6`}>Excited to share my latest project! 🚀 Check out the new UI design!</p>
//                 <div className="mb-6">
//                   <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Absolutely stunning! - Jane</p>
//                   <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Can t wait to try this! - Mike</p>
//                 </div>
//                 <div className="flex space-x-8 text-indigo-500 text-sm font-semibold">
//                   <span className="cursor-pointer hover:text-indigo-700 transition-colors duration-200" onClick={() => handleLike(index)}>
//                     ❤️ {likes[index]} Likes
//                   </span>
//                   <span className="cursor-pointer hover:text-indigo-700 transition-colors duration-200">💬 5 Comments</span>
//                   <span className="cursor-pointer hover:text-indigo-700 transition-colors duration-200">➡️ Share</span>
//                   <span className="cursor-pointer hover:text-indigo-700 transition-colors duration-200">🔄 Repost</span>
//                   <span className="cursor-pointer hover:text-indigo-700 transition-colors duration-200 ml-auto">⭐ Save</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside className="w-full md:w-1/4 p-6">
//           <div className={`p-6 rounded-2xl shadow-2xl ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} glassmorphism mb-8 transform hover:-translate-y-2 transition-transform duration-300`}>
//             <h4 className="text-lg font-semibold text-indigo-600 mb-4">
//               Trending Now <span className="text-teal-500 text-xs font-bold">Live</span>
//             </h4>
//             <div className="mb-4">
//               <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>Jane Smith - UI/UX Designer</p>
//               <a href="#" className="text-teal-500 hover:text-teal-600 text-sm font-semibold">Connect</a>
//             </div>
//             <p className="text-sm font-semibold text-indigo-600 mb-2">#TechTrends - 1.2K posts</p>
//           </div>
//           <div className={`p-6 rounded-2xl shadow-2xl ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} glassmorphism mb-8 transform hover:-translate-y-2 transition-transform duration-300`}>
//             <h4 className="text-lg font-semibold text-indigo-600 mb-4">Job Recommendations</h4>
//             <div className="mb-4">
//               <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Google - Senior Software Engineer</p>
//               <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Based on your skills</p>
//               <a href="#" className="text-teal-500 hover:text-teal-600 text-sm font-semibold">Apply</a>
//             </div>
//             <div className="mb-4">
//               <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>Amazon - UI/UX Designer</p>
//               <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Matches your profile</p>
//               <a href="#" className="text-teal-500 hover:text-teal-600 text-sm font-semibold">Apply</a>
//             </div>
//             <a href="#" className="text-indigo-500 hover:text-indigo-700 text-sm font-semibold block">See All Jobs</a>
//           </div>
//           <div className={`p-6 rounded-2xl shadow-2xl ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} glassmorphism mb-8 transform hover:-translate-y-2 transition-transform duration-300`}>
//             <h4 className="text-lg font-semibold text-indigo-600 mb-4">Recent Activity</h4>
//             <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>John shared a post 1h ago</p>
//             <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Mike liked your comment</p>
//           </div>
//           <div className={`p-6 rounded-2xl shadow-2xl ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/90'} glassmorphism transform hover:-translate-y-2 transition-transform duration-300`}>
//             <h4 className="text-lg font-semibold text-indigo-600 mb-4">Quick Widgets</h4>
//             <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>🌤️ 28°C, Sunny</p>
//             <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>📅 Today: Meeting at 3 PM</p>
//           </div>
//         </aside>
//       </div>

//       {/* Custom Styles */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
//         body { font-family: 'Inter', sans-serif; }
//         .glassmorphism {
//           background: rgba(255, 255, 255, 0.05);
//           backdrop-filter: blur(15px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//         }
//         .scrollbar-hidden::-webkit-scrollbar { display: none; }
//         .scrollbar-hidden { scrollbar-width: none; }
//         @media (max-width: 768px) {
//           header { flex-direction: column; padding: 1rem; gap: 1rem; }
//           nav { flex-wrap: wrap; gap: 0.75rem; justify-content: center; }
//           input[type="text"] { width: 100%; }
//           .flex.mt-20 { flex-direction: column; }
//           aside, main { width: 100%; padding: 1rem; }
//           footer { padding: 1rem; width: 100%; }
//           .max-w-2xl { max-width: 100%; }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default App;


