
// //  eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';

// function App() {
//   const [isSidebarOpen] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [likes, setLikes] = useState([0, 0, 0, 0]);
//   const [notifications] = useState(3);

//   const handleLike = (index) => {
//     const newLikes = [...likes];
//     newLikes[index] += 1;
//     setLikes(newLikes);
//   };

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100' : 'bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900'} overflow-hidden`}>
//       {/* Header */}
//       <header className="fixed top-0 w-full z-20 glassmorphism py-4 px-6 md:px-12 flex justify-between items-center shadow-xl">
//         <div className="flex items-center space-x-4">
//           <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-full flex items-center justify-center text-white text-3xl font-extrabold shadow-lg transform hover:scale-110 transition-transform duration-300">
//             N
//           </div>
//           <span className="text-2xl font-bold text-indigo-600 tracking-tight">ConnectSphere</span>
//         </div>
//         <div className="flex items-center space-x-6">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search for people, posts..."
//               className={`py-3 px-5 rounded-full border-2 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-indigo-200 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 w-72 md:w-96 shadow-sm`}
//             />
//             <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>
//           </div>
//           <nav className="hidden md:flex items-center space-x-10">
//             {['🏠 Home', '🔗 Network', '💼 Jobs', '📩 Messages', '🔔 Alerts'].map((item, idx) => (
//               <div key={idx} className="relative group">
//                 <a href="#" className="text-indigo-500 hover:text-indigo-700 text-base font-semibold transition-colors duration-200">
//                   {item}
//                 </a>
//                 {item === '🔔 Alerts' && (
//                   <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center shadow-md">{notifications}</span>
//                 )}
//                 {item === '🔔 Alerts' && (
//                   <div className={`absolute top-full right-0 mt-3 w-72 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl rounded-xl p-5 hidden group-hover:block border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
//                     <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>Jane liked your post</p>
//                     <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>New job posted by Google</p>
//                     <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Mike commented on your post</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>
//           <div className="w-12 h-12 rounded-full overflow-hidden cursor-pointer shadow-lg transform hover:scale-110 transition-transform duration-300">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <span
//             className="text-2xl cursor-pointer transform transition-transform duration-300 hover:rotate-180"
//             onClick={() => setIsDarkMode(!isDarkMode)}
//           >
//             {isDarkMode ? '☀️' : '🌙'}
//           </span>
//         </div>
//       </header>

//       {/* Main Container */}
//       <div className="flex mt-20 px-4 md:px-12 max-w-7xl mx-auto">
//         {/* Left Sidebar */}
// {isSidebarOpen && (
//   <aside className="w-full md:w-1/4 p-6">
//     <div
//       className={`p-8 rounded-3xl shadow-3xl ${isDarkMode ? 'bg-gray-900/70' : 'bg-white/95'} backdrop-blur-2xl border border-opacity-20 ${isDarkMode ? 'border-teal-500/30' : 'border-indigo-300/50'} glassmorphism-premium mb-10 transform hover:-translate-y-3 hover:scale-105 hover:rotate-[0.5deg] transition-all duration-500 ease-out relative overflow-hidden`}
//     >
//       {/* Background Glow Effect */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 opacity-50 blur-3xl pointer-events-none`}
//       ></div>

//       {/* Profile Section */}
//       <div className="relative z-10 flex flex-col items-center mb-8 animate-fade-in">
//         <div className="relative group">
//           <img
//             src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wx莽3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="Profile"
//             className="w-32 h-32 rounded-full border-4 border-gradient-to-r from-teal-400 to-cyan-500 shadow-2xl object-cover transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
//           />
//           <span
//             className="absolute bottom-2 right-2 w-7 h-7 bg-teal-400 rounded-full border-3 border-white shadow-lg animate-pulse"
//           ></span>
//           <div
//             className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
//           ></div>
//         </div>
//         <h3
//           className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400 mt-4 mb-1 tracking-tight"
//         >
//           John Doe
//         </h3>
//         <p className={`text-sm font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-2 tracking-wide`}>
//           Senior Software Engineer
//         </p>
//         <p className={`text-xs italic ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-xs text-center`}>
//           "Crafting the future with code"
//         </p>
//       </div>

//       {/* Communities Section */}
//       <div className="relative z-10">
//         <h4
//           className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400 border-b ${isDarkMode ? 'border-teal-500' : 'border-indigo-300'} pb-3 text-center mb-6 animate-fade-in`}
//         >
//           My Communities
//         </h4>
//         <div className="flex flex-col space-y-4 animate-fade-in animation-delay-200">
//           {['🌟 #ReactDevs', '🚀 #TechHub'].map((community, idx) => (
//             <p
//               key={idx}
//               className={`text-sm font-semibold text-indigo-600 ${isDarkMode ? 'bg-gray-800/50' : 'bg-indigo-100/50'} px-6 py-3 rounded-full cursor-pointer hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center space-x-3 border border-gradient-to-r from-teal-400 to-cyan-500 shadow-inner`}
//             >
//               <span className="text-lg">{community.split(' ')[0]}</span>
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400">
//                 {community.split(' ')[1]}
//               </span>
//             </p>
//           ))}
//         </div>
//       </div>

//       {/* Badges */}
//       <div className="relative z-10 flex justify-center space-x-4 mt-6 mb-6 animate-fade-in animation-delay-400">
//         <span
//           className={`text-xs font-bold text-white bg-gradient-to-r from-teal-400 to-cyan-500 px-4 py-2 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200`}
//         >
//           Top Contributor
//         </span>
//         <span
//           className={`text-xs font-bold text-white bg-gradient-to-r from-indigo-500 to-teal-500 px-4 py-2 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200`}
//         >
//           Verified
//         </span>
//       </div>

//       {/* Stats Grid */}
//       <div className="relative z-10 grid grid-cols-2 gap-4 mb-8 animate-fade-in animation-delay-600">
//         {[
//           { label: 'Connections', value: '250', color: 'teal-400' },
//           { label: 'Following', value: '180', color: 'cyan-500' },
//           { label: 'Profile Views', value: '1.2K', color: 'indigo-500' },
//           { label: 'Impressions', value: '3.5K', color: 'teal-400' },
//         ].map((stat, idx) => (
//           <div
//             key={idx}
//             className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-indigo-100/50'} shadow-inner hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center`}
//           >
//             <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{stat.label}</p>
//             <p className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-${stat.color} to-cyan-500`}>
//               {stat.value}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Engagement Stats */}
//       <div className="relative z-10 mb-8 text-center animate-fade-in animation-delay-800">
//         <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-2`}>
//           Posts This Week: <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400">5</span>
//         </p>
//         <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
//           Engagement: <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-500">+20%</span>
//         </p>
//       </div>

//       {/* View Profile Button */}
//       <button
//         className="relative z-10 w-full bg-gradient-to-r from-teal-400 to-cyan-500 text-white py-4 rounded-full font-bold text-lg hover:bg-gradient-to-l hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-1000"
//       >
//         View Profile
//       </button>
//     </div>

//     {/* Footer */}
//     <footer
//       className={`p-6 rounded-3xl ${isDarkMode ? 'bg-gray-900/70' : 'bg-white/95'} backdrop-blur-2xl shadow-3xl glassmorphism-premium flex flex-col items-center border border-opacity-20 ${isDarkMode ? 'border-teal-500/30' : 'border-indigo-300/50'}`}
//     >
//       <p
//         className={`text-lg font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400 mb-3 animate-fade-in`}
//       >
//         ConnectSphere
//       </p>
//       <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 animate-fade-in animation-delay-200`}>
//         © 2025 | 10M+ Users
//       </p>
//       <div className="flex space-x-4 mb-4 animate-fade-in animation-delay-400">
//         {['About', 'Contact', 'Privacy'].map((link, idx) => (
//           <a
//             key={idx}
//             href="#"
//             className="relative text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors duration-300 group"
//           >
//             {link}
//             <span
//               className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 group-hover:w-full transition-all duration-300"
//             ></span>
//           </a>
//         ))}
//       </div>
//       <div className="flex space-x-6 animate-fade-in animation-delay-600">
//         {['🐦', '📘', '📸'].map((icon, idx) => (
//           <span
//             key={idx}
//             className={`text-xl cursor-pointer w-10 h-10 flex items-center justify-center rounded-full ${isDarkMode ? 'bg-gray-800/50' : 'bg-indigo-100/50'} hover:bg-gradient-to-r hover:from-teal-400 hover:to-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-md`}
//           >
//             {icon}
//           </span>
//         ))}
//       </div>
//     </footer>
//   </aside>
// )}

//         {/* Main Content */}
//         <main className={`w-full ${isSidebarOpen ? 'md:w-2/4' : 'md:w-3/4'} p-6 flex flex-col items-center`}>
//           <div className={`p-6 rounded-3xl shadow-2xl ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-white to-indigo-50'} relative overflow-hidden mb-10 w-full max-w-3xl mx-auto transform hover:-translate-y-3 transition-transform duration-500`}>
//   {/* Background Glow Effect */}
//   <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/30 to-teal-500/30 opacity-60 blur-3xl"></div>
  
//   {/* Post Input Card */}
//   <div className="relative z-10 animate-fade-in">
//   <input
//     type="text"
//     placeholder="What's the big idea?"
//     className={`w-full py-4 px-6 rounded-full border-2 ${isDarkMode ? 'bg-gray-900/70 border-teal-500/50 text-gray-100' : 'bg-white/95 border-indigo-300/50 text-gray-900'} backdrop-blur-md mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent shadow-lg placeholder:${isDarkMode ? 'text-gray-400' : 'text-gray-500'} placeholder:transition-all placeholder:duration-300 hover:placeholder:scale-105 hover:shadow-xl focus:shadow-xl transition-all duration-300`}
//   />
//   <textarea
//     placeholder="Share your thoughts..."
//     className={`w-full py-4 px-6 rounded-2xl border-2 ${isDarkMode ? 'bg-gray-900/70 border-teal-500/50 text-gray-100' : 'bg-white/95 border-indigo-300/50 text-gray-900'} backdrop-blur-md resize-y h-24 mb-4 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent shadow-lg placeholder:${isDarkMode ? 'text-gray-400' : 'text-gray-500'} placeholder:transition-all placeholder:duration-300 hover:placeholder:scale-105 hover:shadow-xl focus:shadow-xl transition-all duration-300`}
//   ></textarea>
//   <div className="flex items-center justify-between">
//     <div className="flex space-x-3">
//       {[
//         { label: 'B', icon: '📝', title: 'Bold' },
//         { label: 'I', icon: '📜', title: 'Italic' },
//         { label: '📷 Media', icon: '📷', title: 'Add Media' },
//       ].map((btn, idx) => (
//         <button
//           key={idx}
//           title={btn.title}
//           className={`relative bg-gradient-to-r from-teal-500 to-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold hover:bg-gradient-to-l hover:shadow-2xl hover:scale-125 transition-all duration-300 shadow-lg ${isDarkMode ? 'shadow-teal-500/50' : 'shadow-indigo-300/50'} animate-bounce-slow`}
//         >
//           <span className="relative z-10">{btn.icon}</span>
//           <div
//             className="absolute inset-0 bg-gradient-to-r from-teal-400 to-indigo-500 opacity-0 hover:opacity-30 rounded-full transition-opacity duration-300"
//           ></div>
//           <div
//             className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-indigo-500 opacity-20 blur-md"
//           ></div>
//         </button>
//       ))}
//     </div>
//     <button
//       className="relative bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-8 py-3 rounded-full text-lg font-extrabold hover:bg-gradient-to-l hover:shadow-2xl hover:scale-110 transition-all duration-500 shadow-xl animate-glow"
//     >
//       <span className="relative z-10">Post</span>
//       <div
//         className="absolute inset-0 bg-gradient-to-r from-teal-400 to-cyan-500 opacity-0 hover:opacity-40 rounded-full animate-ripple"
//       ></div>
//       <div
//         className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-500 opacity-20 blur-md"
//       ></div>
//     </button>
//   </div>
// </div>
// </div>

//           {/* Newsfeed */}
//         <div className="flex flex-col space-y-10 w-full max-w-2xl">
//   {[1, 2, 3, 4].map((postNum, index) => (
//     <div
//       key={postNum}
//       className={`p-8 rounded-3xl shadow-3xl ${isDarkMode ? 'bg-gray-900/70' : 'bg-white/95'} backdrop-blur-2xl border border-opacity-20 ${isDarkMode ? 'border-teal-500/30' : 'border-indigo-300/50'} glassmorphism-premium hover:-translate-y-3 hover:scale-105 hover:rotate-[0.5deg] transition-all duration-500 ease-out relative overflow-hidden`}
//     >
//       <div className="relative z-10">
//         {/* Headline Section */}
//         <div className="flex justify-between items-center mb-6">
//           <div className="flex items-center relative group">
//             <img
//               src="https://via.placeholder.com/50"
//               alt="User"
//               className="w-14 h-14 rounded-full mr-4 border-2 border-teal-400 shadow-md transition-transform duration-300 group-hover:scale-110"
//             />
//             <div>
//               <p
//                 className={`font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400 cursor-pointer tracking-tight`}
//                 onMouseEnter={(e) => (e.target.nextElementSibling.style.display = 'block')}
//                 onMouseLeave={(e) => (e.target.nextElementSibling.style.display = 'none')}
//               >
//                 Alice Brown
//               </p>
//               <div
//                 className={`absolute top-full left-0 w-80 ${isDarkMode ? 'bg-gray-900/90' : 'bg-white/95'} shadow-2xl rounded-xl p-6 z-20 hidden border ${isDarkMode ? 'border-teal-500/30' : 'border-indigo-300/50'} backdrop-blur-md transition-opacity duration-300`}
//               >
//                 <img
//                   src="https://via.placeholder.com/50"
//                   alt="User"
//                   className="w-16 h-16 rounded-full mb-3 border-2 border-teal-400"
//                 />
//                 <p className={`font-bold text-base ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
//                   Alice Brown
//                 </p>
//                 <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
//                   UI/UX Designer
//                 </p>
//                 <button className="bg-gradient-to-r from-teal-400 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-gradient-to-r hover:from-teal-500 hover:to-cyan-600 transition-all duration-200">
//                   Connect
//                 </button>
//               </div>
//               <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                 2h ago{' '}
//                 {postNum === 1 && (
//                   <span className="text-white bg-gradient-to-r from-teal-400 to-cyan-500 px-2 py-1 rounded-full text-xs font-semibold ml-2 animate-pulse">
//                     Live
//                   </span>
//                 )}
//               </p>
//             </div>
//           </div>
//           <div className="flex space-x-4">
//             <span
//               className={`cursor-pointer text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-teal-400 transition-colors duration-200`}
//               title="More options"
//             >
//               ⋯
//             </span>
//             <span
//               className={`cursor-pointer text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-teal-400 transition-colors duration-200`}
//               title="Close"
//             >
//               ✖
//             </span>
//           </div>
//         </div>

//         {/* Empty Space for Post Content */}
//         <div className="mb-6 h-24"></div>

//         {/* Comments Section */}
//         <div className="mb-6 space-y-3 animate-fade-in">
//           <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'} shadow-inner hover:shadow-md transition-shadow duration-300`}>
//             <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//               "Absolutely stunning!" - Jane
//             </p>
//           </div>
//           <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'} shadow-inner hover:shadow-md transition-shadow duration-300`}>
//             <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//               "Can't wait to try this!" - Mike
//             </p>
//           </div>
//         </div>

//         {/* Interaction Buttons */}
//         <div className="flex space-x-8 text-sm font-semibold animate-fade-in animation-delay-200">
//           <span
//             className="relative cursor-pointer text-teal-400 hover:text-teal-300 transition-colors duration-300 group"
//             onClick={() => handleLike(index)}
//           >
//             ❤️ {likes[index]} Likes
//             <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from(teal-400 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
//           </span>
//           <span className="relative cursor-pointer text-teal-400 hover:text-teal-300 transition-colors duration-300 group">
//             💬 5 Comments
//             <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
//           </span>
//           <span className="relative cursor-pointer text-teal-400 hover:text-teal-300 transition-colors duration-300 group">
//             ➡️ Share
//             <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
//           </span>
//           <span className="relative cursor-pointer text-teal-400 hover:text-teal-300 transition-colors duration-300 group">
//             🔄 Repost
//             <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
//           </span>
//           <span className="relative cursor-pointer text-teal-400 hover:text-teal-300 transition-colors duration-300 group ml-auto">
//             ⭐ Save
//             <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
//           </span>
//         </div>
//       </div>
//       <div
//         className={`absolute inset-0 rounded-3xl ${isDarkMode ? 'bg-gradient-to-br from-teal-500/10 to-indigo-500/10' : 'bg-gradient-to-br from-indigo-200/10 to-teal-200/10'} pointer-events-none`}
//       ></div>
//     </div>
//   ))}
// </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside className="w-full md:w-1/4 p-6">
//           <div className={`p-8 rounded-3xl shadow-3xl ${isDarkMode ? 'bg-gray-900/70' : 'bg-white/95'} backdrop-blur-2xl border border-opacity-20 ${isDarkMode ? 'border-teal-500/30' : 'border-indigo-300/50'} glassmorphism-premium mb-10 transform hover:-translate-y-3 hover:scale-105 hover:rotate-[0.5deg] transition-all duration-500 ease-out`}>
//          <div className="relative">
//             <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400 mb-5 tracking-tight">
//               Trending Now 
//               <span className="ml-2 text-xs font-extrabold text-white bg-gradient-to-r from-teal-400 to-cyan-500 px-2 py-1 rounded-full animate-pulse">
//               Live
//               </span>
//             </h4>
//          <div className="mb-6">
//           <p className={`text-base font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-3 tracking-wide`}>
//              Jane Smith - UI/UX Designer
//           </p>
//           <a 
//            href="#" 
//                 className="relative text-teal-400 text-sm font-semibold hover:text-teal-300 transition-colors duration-300 group"
//                >
//         Connect
//         <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
//       </a>
//     </div>
//     <p className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400 tracking-tight">
//       #TechTrends - 1.2K posts
//     </p>
//   </div>
//   <div className={`absolute inset-0 rounded-3xl ${isDarkMode ? 'bg-gradient-to-br from-teal-500/10 to-indigo-500/10' : 'bg-gradient-to-br from-indigo-200/10 to-teal-200/10'} pointer-events-none`}></div>
// </div>
//          <div className={`p-8 rounded-3xl shadow-3xl ${isDarkMode ? 'bg-gray-900/70' : 'bg-white/95'} backdrop-blur-2xl border border-opacity-20 ${isDarkMode ? 'border-teal-500/30' : 'border-indigo-300/50'} glassmorphism-premium mb-10 transform hover:-translate-y-3 hover:scale-105 hover:rotate-[0.5deg] transition-all duration-500 ease-out relative overflow-hidden`}>
//   <div className="relative z-10">
//     <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400 mb-6 tracking-tight">
//       Job Recommendations
//     </h4>
//     <div className="mb-6 animate-fade-in">
//       <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'} shadow-inner hover:shadow-md transition-shadow duration-300`}>
//         <p className={`text-base font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-1 tracking-wide`}>
//           Google - Senior Software Engineer
//         </p>
//         <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
//           Based on your skills
//         </p>
//         <a 
//           href="#" 
//           className="relative text-teal-400 text-sm font-semibold hover:text-teal-300 transition-colors duration-300 group"
//         >
//           Apply
//           <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
//         </a>
//       </div>
//     </div>
//     <div className="mb-6 animate-fade-in animation-delay-200">
//       <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'} shadow-inner hover:shadow-md transition-shadow duration-300`}>
//         <p className={`text-base font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-1 tracking-wide`}>
//           Amazon - UI/UX Designer
//         </p>
//         <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
//           Matches your profile
//         </p>
//         <a 
//           href="#" 
//           className="relative text-teal-400 text-sm font-semibold hover:text-teal-300 transition-colors duration-300 group"
//         >
//           Apply
//           <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
//         </a>
//       </div>
//     </div>
//     <a 
//       href="#" 
//       className="relative text-indigo-400 text-sm font-semibold hover:text-indigo-300 transition-colors duration-300 group block"
//     >
//       See All Jobs
//       <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-teal-500 group-hover:w-full transition-all duration-300"></span>
//     </a>
//   </div>
//   <div className={`absolute inset-0 rounded-3xl ${isDarkMode ? 'bg-gradient-to-br from-teal-500/10 to-indigo-500/10' : 'bg-gradient-to-br from-indigo-200/10 to-teal-200/10'} pointer-events-none`}></div>
// </div>
//        <div className={`p-8 rounded-3xl shadow-3xl ${isDarkMode ? 'bg-gray-900/70' : 'bg-white/95'} backdrop-blur-2xl border border-opacity-20 ${isDarkMode ? 'border-teal-500/30' : 'border-indigo-300/50'} glassmorphism-premium mb-10 transform hover:-translate-y-3 hover:scale-105 hover:rotate-[0.5deg] transition-all duration-500 ease-out relative overflow-hidden`}>
//   <div className="relative z-10">
//     <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400 mb-6 tracking-tight">
//       Recent Activity
//     </h4>
//     <div className="space-y-4">
//       <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'} shadow-inner hover:shadow-md transition-shadow duration-300 animate-fade-in`}>
//         <p className={`text-base font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} tracking-wide`}>
//           John shared a post 1h ago
//         </p>
//       </div>
//       <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'} shadow-inner hover:shadow-md transition-shadow duration-300 animate-fade-in animation-delay-200`}>
//         <p className={`text-base font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} tracking-wide`}>
//           Mike liked your comment
//         </p>
//       </div>
//     </div>
//   </div>
//   <div className={`absolute inset-0 rounded-3xl ${isDarkMode ? 'bg-gradient-to-br from-teal-500/10 to-indigo-500/10' : 'bg-gradient-to-br from-indigo-200/10 to-teal-200/10'} pointer-events-none`}></div>
// </div>
//         <div className={`p-8 rounded-3xl shadow-3xl ${isDarkMode ? 'bg-gray-900/70' : 'bg-white/95'} backdrop-blur-2xl border border-opacity-20 ${isDarkMode ? 'border-teal-500/30' : 'border-indigo-300/50'} glassmorphism-premium mb-10 transform hover:-translate-y-3 hover:scale-105 hover:rotate-[0.5deg] transition-all duration-500 ease-out relative overflow-hidden`}>
//   <div className="relative z-10">
//     <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400 mb-6 tracking-tight">
//       Quick Widgets
//     </h4>
//     <div className="space-y-4">
//       <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'} shadow-inner hover:shadow-md transition-shadow duration-300 animate-fade-in`}>
//         <p className={`text-base font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} tracking-wide`}>
//           🌤️ 28°C, Sunny
//         </p>
//       </div>
//       <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'} shadow-inner hover:shadow-md transition-shadow duration-300 animate-fade-in animation-delay-200`}>
//         <p className={`text-base font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} tracking-wide`}>
//           📅 Today: Meeting at 3 PM
//         </p>
//       </div>
//     </div>
//   </div>
//   <div className={`absolute inset-0 rounded-3xl ${isDarkMode ? 'bg-gradient-to-br from-teal-500/10 to-indigo-500/10' : 'bg-gradient-to-br from-indigo-200/10 to-teal-200/10'} pointer-events-none`}></div>
//  </div>
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




//--------------------------------------------------------------------------------------------------------------------------------------------------



// /* eslint-disable react/no-unescaped-entities */

// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';

// function App() {
//   const [isSidebarOpen] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [likes, setLikes] = useState([0, 0, 0, 0]);
//   const [notifications] = useState(3);

//   const handleLike = (index) => {
//     const newLikes = [...likes];
//     newLikes[index] += 1;
//     setLikes(newLikes);
//   };

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#d3cabf] text-gray-100' : 'bg-[#e1dcce] text-gray-900'} overflow-hidden`}>
//       {/* Header */}
//       <header className="fixed top-0 w-full z-20 glassmorphism py-4 px-6 md:px-12 flex justify-between items-center shadow-xl">
//         <div className="flex items-center space-x-4">
//           <div className="w-14 h-14 bg-[#EAE4D5] rounded-full flex items-center justify-center text-gray-900 text-3xl font-extrabold shadow-lg transform hover:scale-110 transition-transform duration-300">
//             N
//           </div>
//           <span className="text-2xl font-bold text-gray-900 tracking-tight">ConnectSphere</span>
//         </div>
//         <div className="flex items-center space-x-6">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search for people, posts..."
//               className={`py-3 px-5 rounded-full border-2 ${isDarkMode ? 'bg-[#d3cabf] border-gray-700 text-gray-100' : 'bg-[#EAE4D5] border-gray-300 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 w-72 md:w-96 shadow-sm`}
//             />
//             <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>
//           </div>
//           <nav className="hidden md:flex items-center space-x-10">
//             {['🏠 Home', '🔗 Network', '💼 Jobs', '📩 Messages', '🔔 Alerts'].map((item, idx) => (
//               <div key={idx} className="relative group">
//                 <a href="#" className="text-gray-700 hover:text-gray-900 text-base font-semibold transition-colors duration-200">
//                   {item}
//                 </a>
//                 {item === '🔔 Alerts' && (
//                   <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center shadow-md">{notifications}</span>
//                 )}
//                 {item === '🔔 Alerts' && (
//                   <div className={`absolute top-full right-0 mt-3 w-72 ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} shadow-2xl rounded-xl p-5 hidden group-hover:block border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
//                     <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>Jane liked your post</p>
//                     <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-3`}>New job posted by Google</p>
//                     <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Mike commented on your post</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </nav>
//           <div className="w-12 h-12 rounded-full overflow-hidden cursor-pointer shadow-lg transform hover:scale-110 transition-transform duration-300">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Profile"
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <span
//             className="text-2xl cursor-pointer transform transition-transform duration-300 hover:rotate-180"
//             onClick={() => setIsDarkMode(!isDarkMode)}
//           >
//             {isDarkMode ? '☀️' : '🌙'}
//           </span>
//         </div>
//       </header>

//       {/* Main Container */}
//       <div className="flex mt-20 px-4 md:px-12 max-w-7xl mx-auto">
//         {/* Left Sidebar */}
//         {isSidebarOpen && (
//           <aside className="w-full md:w-1/4 p-6">
//             <div
//               className={`p-8 rounded-3xl shadow-3xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} backdrop-blur-2xl border border-opacity-20 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} glassmorphism-transform hover:-translate-y-3 hover:scale-105 hover:rotate-[0.5deg] transition-all duration-500 ease-out relative overflow-hidden`}
//             >
//               {/* Background Glow Effect */}
//               <div
//                 className={`absolute inset-0 bg-[#EAE4D5] opacity-50 blur-3xl pointer-events-none`}
//               ></div>

//               {/* Profile Section */}
//               <div className="relative z-10 flex flex-col items-center mb-8 animate-fade-in">
//                 <div className="relative group">
//                   <img
//                     src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                     alt="Profile"
//                     className="w-32 h-32 rounded-full border-4 border-gray-400 shadow-2xl object-cover transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
//                   />
//                   <span
//                     className="absolute bottom-2 right-2 w-7 h-7 bg-gray-400 rounded-full border-3 border-white shadow-lg animate-pulse"
//                   ></span>
//                   <div
//                     className="absolute inset-0 rounded-full bg-[#EAE4D5] opacity-0 group-hover:opacity-20 transition-opacity duration-300"
//                   ></div>
//                 </div>
//                 <h3
//                   className="text-2xl font-extrabold text-gray-900 mt-4 mb-1 tracking-tight"
//                 >
//                   John Doe
//                 </h3>
//                 <p className={`text-sm font-semibold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-2 tracking-wide`}>
//                   Senior Software Engineer
//                 </p>
//                 <p className={`text-xs italic ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-xs text-center`}>
//                   "Crafting the future with code"
//                 </p>
//               </div>

//               {/* Communities Section */}
//               <div className="relative z-10">
//                 <h4
//                   className={`text-lg font-bold text-gray-900 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} pb-3 text-center mb-6 animate-fade-in`}
//                 >
//                   My Communities
//                 </h4>
//                 <div className="flex flex-col space-y-4 animate-fade-in animation-delay-200">
//                   {['🌟 #ReactDevs', '🚀 #TechHub'].map((community, idx) => (
//                     <p
//                       key={idx}
//                       className={`text-sm font-semibold text-gray-900 ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} px-6 py-3 rounded-full cursor-pointer hover:shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center space-x-3 border border-gray-400 shadow-inner`}
//                     >
//                       <span className="text-lg">{community.split(' ')[0]}</span>
//                       <span className="text-gray-900">
//                         {community.split(' ')[1]}
//                       </span>
//                     </p>
//                   ))}
//                 </div>
//               </div>

//               {/* Badges */}
//               <div className="relative z-10 flex justify-center space-x-4 mt-6 mb-6 animate-fade-in animation-delay-400">
//                 <span
//                   className={`text-xs font-bold text-gray-900 bg-[#EAE4D5] px-4 py-2 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200`}
//                 >
//                   Top Contributor
//                 </span>
//                 <span
//                   className={`text-xs font-bold text-gray-900 bg-[#EAE4D5] px-4 py-2 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200`}
//                 >
//                   Verified
//                 </span>
//               </div>

//               {/* Stats Grid */}
//               <div className="relative z-10 grid grid-cols-2 gap-4 mb-8 animate-fade-in animation-delay-600">
//                 {[
//                   { label: 'Connections', value: '250', color: 'gray-400' },
//                   { label: 'Following', value: '180', color: 'gray-400' },
//                   { label: 'Profile Views', value: '1.2K', color: 'gray-400' },
//                   { label: 'Impressions', value: '3.5K', color: 'gray-400' },
//                 ].map((stat, idx) => (
//                   <div
//                     key={idx}
//                     className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} shadow-inner hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center`}
//                   >
//                     <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>{stat.label}</p>
//                     <p className={`text-lg font-bold text-gray-900`}>
//                       {stat.value}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               {/* Engagement Stats */}
//               <div className="relative z-10 mb-8 text-center animate-fade-in animation-delay-800">
//                 <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-2`}>
//                   Posts This Week: <span className="font-bold text-gray-900">5</span>
//                 </p>
//                 <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
//                   Engagement: <span className="font-bold text-gray-900">+20%</span>
//                 </p>
//               </div>

//               {/* View Profile Button */}
//               <button
//                 className="relative z-10 w-full bg-[#EAE4D5] text-gray-900 py-4 rounded-full font-bold text-lg hover:bg-gray-300 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-fade-in animation-delay-1000"
//               >
//                 View Profile
//               </button>
//             </div>

//             {/* Footer */}
//             <footer
//               className={`p-6 rounded-3xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} backdrop-blur-2xl shadow-3xl glassmorphism-premium flex flex-col items-center border border-opacity-20 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}
//             >
//               <p
//                 className={`text-lg font-extrabold text-gray-900 mb-3 animate-fade-in`}
//               >
//                 ConnectSphere
//               </p>
//               <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 animate-fade-in animation-delay-200`}>
//                 © 2025 | 10M+ Users
//               </p>
//               <div className="flex space-x-4 mb-4 animate-fade-in animation-delay-400">
//                 {['About', 'Connect', 'Privacy'].map((link, idx) => (
//                   <a
//                     key={idx}
//                     href="#"
//                     className="relative text-gray-700 hover:text-gray-900 text-sm font-semibold transition-colors duration-300 group"
//                   >
//                     {link}
//                     <span
//                       className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"
//                     ></span>
//                   </a>
//                 ))}
//               </div>
//               <div className="flex space-x-6 animate-fade-in animation-delay-600">
//                 {['🐦', '📘', '📸'].map((icon, idx) => (
//                   <span
//                     key={idx}
//                     className={`text-xl cursor-pointer w-10 h-10 flex items-center justify-center rounded-full ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} hover:bg-gray-300 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:shadow-md`}
//                   >
//                     {icon}
//                   </span>
//                 ))}
//               </div>
//             </footer>
//           </aside>
//         )}

//         {/* Main Content */}
//         <main className={`w-full ${isSidebarOpen ? 'md:w-2/4' : 'md:w-3/4'} p-6 flex flex-col items-center`}>
//           <div className={`p-6 rounded-3xl shadow-2xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} relative overflow-hidden mb-10 w-full max-w-3xl mx-auto transform hover:-translate-y-3 transition-transform duration-500`}>
//             {/* Background Glow Effect */}
//             <div className="absolute inset-0 bg-[#EAE4D5] opacity-60 blur-3xl"></div>
            
//             {/* Post Input Card */}
//             <div className="relative z-10 animate-fade-in">
//               <input
//                 type="text"
//                 placeholder="What's the big idea?"
//                 className={`w-full py-4 px-6 rounded-full border-2 ${isDarkMode ? 'bg-[#d3cabf] border-gray-700 text-gray-100' : 'bg-[#EAE4D5] border-gray-300 text-gray-900'} backdrop-blur-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent shadow-lg placeholder:${isDarkMode ? 'text-gray-400' : 'text-gray-500'} placeholder:transition-all placeholder:duration-300 hover:placeholder:scale-105 hover:shadow-xl focus:shadow-xl transition-all duration-300`}
//               />
//               <textarea
//                 placeholder="Share your thoughts..."
//                 className={`w-full py-4 px-6 rounded-2xl border-2 ${isDarkMode ? 'bg-[#d3cabf] border-gray-700 text-gray-100' : 'bg-[#EAE4D5] border-gray-300 text-gray-900'} backdrop-blur-md resize-y h-24 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent shadow-lg placeholder:${isDarkMode ? 'text-gray-400' : 'text-gray-500'} placeholder:transition-all placeholder:duration-300 hover:placeholder:scale-105 hover:shadow-xl focus:shadow-xl transition-all duration-300`}
//               ></textarea>
//               <div className="flex items-center justify-between">
//                 <div className="flex space-x-3">
//                   {[
//                     { label: 'B', icon: '📝', title: 'Bold' },
//                     { label: 'I', icon: '📜', title: 'Italic' },
//                     { label: '📷 Media', icon: '📷', title: 'Add Media' },
//                   ].map((btn, idx) => (
//                     <button
//                       key={idx}
//                       title={btn.title}
//                       className={`relative bg-[#EAE4D5] text-gray-900 w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold hover:bg-gray-300 hover:shadow-2xl hover:scale-125 transition-all duration-300 shadow-lg ${isDarkMode ? 'shadow-gray-700' : 'shadow-gray-300'} animate-bounce-slow`}
//                     >
//                       <span className="relative z-10">{btn.icon}</span>
//                       <div
//                         className="absolute inset-0 bg-[#EAE4D5] opacity-0 hover:opacity-30 rounded-full transition-opacity duration-300"
//                       ></div>
//                       <div
//                         className="absolute -inset-1 bg-[#EAE4D5] opacity-20 blur-md"
//                       ></div>
//                     </button>
//                   ))}
//                 </div>
//                 <button
//                   className="relative bg-[#EAE4D5] text-gray-900 px-8 py-3 rounded-full text-lg font-extrabold hover:bg-gray-300 hover:shadow-2xl hover:scale-110 transition-all duration-500 shadow-xl animate-glow"
//                 >
//                   <span className="relative z-10">Post</span>
//                   <div
//                     className="absolute inset-0 bg-[#EAE4D5] opacity-0 hover:opacity-40 rounded-full animate-ripple"
//                   ></div>
//                   <div
//                     className="absolute -inset-1 bg-[#EAE4D5] opacity-20 blur-md"
//                   ></div>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Newsfeed */}
//           <div className="flex flex-col space-y-10 w-full max-w-2xl">
//             {[1, 2, 3, 4].map((postNum, index) => (
//               <div
//                 key={postNum}
//                 className={`p-8 rounded-3xl shadow-3xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} backdrop-blur-2xl borderics border border-opacity-20 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} glassmorphism-premium hover:-translate-y-3 hover:scale-105 hover:rotate-[0.5deg] transition-all duration-500 ease-out relative overflow-hidden`}
//               >
//                 <div className="relative z-10">
//                   {/* Headline Section */}
//                   <div className="flex justify-between items-center mb-6">
//                     <div className="flex items-center relative group">
//                       <img
//                         src="https://via.placeholder.com/50"
//                         alt="User"
//                         className="w-14 h-14 rounded-full mr-4 border-2 border-gray-400 shadow-md transition-transform duration-300 group-hover:scale-110"
//                       />
//                       <div>
//                         <p
//                           className={`font-bold text-lg text-gray-900 cursor-pointer tracking-tight`}
//                           onMouseEnter={(e) => (e.target.nextElementSibling.style.display = 'block')}
//                           onMouseLeave={(e) => (e.target.nextElementSibling.style.display = 'none')}
//                         >
//                           Alice Brown
//                         </p>
//                         <div
//                           className={`absolute top-full left-0 w-80 ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} shadow-2xl rounded-xl p-6 z-20 hidden border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} backdrop-blur-md transition-opacity duration-300`}
//                         >
//                           <img
//                             src="https://via.placeholder.com/50"
//                             alt="User"
//                             className="w-16 h-16 rounded-full mb-3 border-2 border-gray-400"
//                           />
//                           <p className={`font-bold text-base ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
//                             Alice Brown
//                           </p>
//                           <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>
//                             UI/UX Designer
//                           </p>
//                           <button className="bg-[#EAE4D5] text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-300 transition-all duration-200">
//                             Connect
//                           </button>
//                         </div>
//                         <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                           2h ago{' '}
//                           {postNum === 1 && (
//                             <span className="text-gray-900 bg-[#EAE4D5] px-2 py-1 rounded-full text-xs font-semibold ml-2 animate-pulse">
//                               Live
//                             </span>
//                           )}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex space-x-4">
//                       <span
//                         className={`cursor-pointer text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-gray-900 transition-colors duration-200`}
//                         title="More options"
//                       >
//                         ⋯
//                       </span>
//                       <span
//                         className={`cursor-pointer text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-gray-900 transition-colors duration-200`}
//                         title="Close"
//                       >
//                         ✖
//                       </span>
//                     </div>
//                   </div>

//                   {/* Empty Space for Post Content */}
//                   <div className="mb-6 h-24"></div>

//                   {/* Comments Section */}
//                   <div className="mb-6 space-y-3 animate-fade-in">
//                     <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} shadow-inner hover:shadow-md transition-shadow duration-300`}>
//                       <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                         "Absolutely stunning!" - Jane
//                       </p>
//                     </div>
//                     <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} shadow-inner hover:shadow-md transition-shadow duration-300`}>
//                       <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//                         "Can't wait to try this!" - Mike
//                       </p>
//                     </div>
//                   </div>

//                   {/* Interaction Buttons */}
//                   <div className="flex space-x-8 text-sm font-semibold animate-fade-in animation-delay-200">
//                     <span
//                       className="relative cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-300 group"
//                       onClick={() => handleLike(index)}
//                     >
//                       ❤️ {likes[index]} Likes
//                       <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
//                     </span>
//                     <span className="relative cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-300 group">
//                       💬 5 Comments
//                       <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
//                     </span>
//                     <span className="relative cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-300 group">
//                       ➡️ Share
//                       <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
//                     </span>
//                     <span className="relative cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-300 group">
//                       🔄 Repost
//                       <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
//                     </span>
//                     <span className="relative cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-300 group ml-auto">
//                       ⭐ Save
//                       <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
//                     </span>
//                   </div>
//                 </div>
//                 <div
//                   className={`absolute inset-0 rounded-3xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} pointer-events-none`}
//                 ></div>
//               </div>
//             ))}
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside className="w-full md:w-1/4 p-6">
//           <div className={`p-8 rounded-3xl shadow-3xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} backdrop-blur-2xl border border-opacity-20 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} glassmorphism-premium mb-10 transform hover:-translate-y-3 hover:scale-105 hover:rotate-[0.5deg] transition-all duration-500 ease-out`}>
//             <div className="relative">
//               <h4 className="text-xl font-bold text-gray-900 mb-5 tracking-tight">
//                 Trending Now 
//                 <span className="ml-2 text-xs font-extrabold text-gray-900 bg-[#EAE4D5] px-2 py-1 rounded-full animate-pulse">
//                   Live
//                 </span>
//               </h4>
//               <div className="mb-6">
//                 <p className={`text-base font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-3 tracking-wide`}>
//                   Jane Smith - UI/UX Designer
//                 </p>
//                 <a 
//                   href="#" 
//                   className="relative text-gray-700 text-sm font-semibold hover:text-gray-900 transition-colors duration-300 group"
//                 >
//                   Connect
//                   <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
//                 </a>
//               </div>
//               <p className="text-sm font-semibold text-gray-900 tracking-tight">
//                 #TechTrends - 1.2K posts
//               </p>
//             </div>
//             <div className={`absolute inset-0 rounded-3xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} pointer-events-none`}></div>
//           </div>
//           <div className={`p-8 rounded-3xl shadow-3xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} backdrop-blur-2xl border border-opacity-20 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} glassmorphism-premium mb-10 transform hover:-translate-y-3 hover:scale-105 hover:rotate-[0.5deg] transition-all duration-500 ease-out relative overflow-hidden`}>
//             <div className="relative z-10">
//               <h4 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">
//                 Job Recommendations
//               </h4>
//               <div className="mb-6 animate-fade-in">
//                 <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} shadow-inner hover:shadow-md transition-shadow duration-300`}>
//                   <p className={`text-base font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-1 tracking-wide`}>
//                     Google - Senior Software Engineer
//                   </p>
//                   <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
//                     Based on your skills
//                   </p>
//                   <a 
//                     href="#" 
//                     className="relative text-gray-700 text-sm font-semibold hover:text-gray-900 transition-colors duration-300 group"
//                   >
//                     Apply
//                     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
//                   </a>
//                 </div>
//               </div>
//               <div className="mb-6 animate-fade-in animation-delay-200">
//                 <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} shadow-inner hover:shadow-md transition-shadow duration-300`}>
//                   <p className={`text-base font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-1 tracking-wide`}>
//                     Amazon - UI/UX Designer
//                   </p>
//                   <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
//                     Matches your profile
//                   </p>
//                   <a 
//                     href="#" 
//                     className="relative text-gray-700 text-sm font-semibold hover:text-gray-900 transition-colors duration-300 group"
//                   >
//                     Apply
//                     <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
//                   </a>
//                 </div>
//               </div>
//               <a 
//                 href="#" 
//                 className="relative text-gray-700 text-sm font-semibold hover:text-gray-900 transition-colors duration-300 group block"
//               >
//                 See All Jobs
//                 <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300"></span>
//               </a>
//             </div>
//             <div className={`absolute inset-0 rounded-3xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} pointer-events-none`}></div>
//           </div>
//           <div className={`p-8 rounded-3xl shadow-3xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} backdrop-blur-2xl border border-opacity-20 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} glassmorphism-premium mb-10 transform hover:-translate-y-3 hover:scale-105 hover:rotate-[0.5deg] transition-all duration-500 ease-out relative overflow-hidden`}>
//             <div className="relative z-10">
//               <h4 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">
//                 Recent Activity
//               </h4>
//               <div className="space-y-4">
//                 <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} shadow-inner hover:shadow-md transition-shadow duration-300 animate-fade-in`}>
//                   <p className={`text-base font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} tracking-wide`}>
//                     John shared a post 1h ago
//                   </p>
//                 </div>
//                 <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} shadow-inner hover:shadow-md transition-shadow duration-300 animate-fade-in animation-delay-200`}>
//                   <p className={`text-base font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} tracking-wide`}>
//                     Mike liked your comment
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className={`absolute inset-0 rounded-3xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} pointer-events-none`}></div>
//           </div>
//           <div className={`p-8 rounded-3xl shadow-3xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} backdrop-blur-2xl border border-opacity-20 ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} glassmorphism-premium mb-10 transform hover:-translate-y-3 hover:scale-105 hover:rotate-[0.5deg] transition-all duration-500 ease-out relative overflow-hidden`}>
//             <div className="relative z-10">
//               <h4 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">
//                 Quick Widgets
//               </h4>
//               <div className="space-y-4">
//                 <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} shadow-inner hover:shadow-md transition-shadow duration-300 animate-fade-in`}>
//                   <p className={`text-base font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} tracking-wide`}>
//                     🌤️ 28°C, Sunny
//                   </p>
//                 </div>
//                 <div className={`p-4 rounded-xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} shadow-inner hover:shadow-md transition-shadow duration-300 animate-fade-in animation-delay-200`}>
//                   <p className={`text-base font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} tracking-wide`}>
//                     📅 Today: Meeting at 3 PM
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className={`absolute inset-0 rounded-3xl ${isDarkMode ? 'bg-[#d3cabf]' : 'bg-[#EAE4D5]'} pointer-events-none`}></div>
//           </div>
//         </aside>
//       </div>

//       {/* Custom Styles */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
//         body { font-family: 'Inter', sans-serif; background-color: #EAE4D5; }
//         .glassmorphism {
//           background: rgba(234, 228, 213, 0.8);
//           backdrop-filter: blur(15px);
//           border: 1px solid rgba(234, 228, 213, 0.5);
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


///------------------------------------------------====================================================================================================\



// ProfilePage.jsx
// // eslint-disable-next-line no-unused-vars
// import React from 'react';

// const App = () => {
//   const profileImage = 'https://i.pinimg.com/736x/f6/61/ea/f661ea61616909838a9fbfeda0d2ea14.jpg';
//   const bannerImage = 'https://plus.unsplash.com/premium_photo-1700929226395-fbab2b0f29b2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#EAE4D5] to-gray-200 py-10 px-4">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
//         {/* Main Content (Left) */}
//         <div className="flex-1">
//           {/* Profile Card with Banner */}
//           <div className="relative bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 mb-8 overflow-hidden">
//             {/* Banner with Parallax Effect */}
//             <div className="relative h-48 w-full overflow-hidden">
//               <img
//                 src={bannerImage}
//                 alt="Banner"
//                 className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//             </div>

//             {/* Profile Info */}
//             <div className="relative px-8 pb-8">
//               <div className="flex flex-col md:flex-row items-center md:items-start gap-6 -mt-16">
//                 {/* Profile Image with Glow */}
//                 <div className="relative w-32 h-32">
//                   <img
//                     src={profileImage}
//                     alt="Profile"
//                     className="w-full h-full rounded-full border-4 border-[#EAE4D5] shadow-lg object-cover"
//                   />
//                   <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-yellow-400 to-orange-500 opacity-50 animate-pulse"></div>
//                 </div>

//                 <div className="flex-1 text-center md:text-left">
//                   <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2 justify-center md:justify-start">
//                     Honey Sharma
//                     <span className="text-sm text-gray-500 font-normal">(He/Him)</span>
//                   </h1>
//                   <h2 className="text-lg text-gray-600 mt-1">Co-Founder @Throne8</h2>
//                   <p className="text-sm text-gray-500 mt-2 leading-relaxed">
//                     Empowering Professional Networking for Millions with AI, Security, and Scalable Innovation
//                   </p>
//                   <p className="text-sm text-gray-600 mt-2">
//                     <span className="font-semibold">Location:</span> Bhopal, Madhya Pradesh, India
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     <span className="font-semibold">Stats:</span> 3,282 followers • 500+ connections
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     <span className="font-semibold">Company:</span> Thronet Technology Private Limited (Throne8)
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     <span className="font-semibold">Education:</span> Oriental College of Technology
//                   </p>

//                   {/* Action Buttons */}
//                   <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
//                     <button className="px-4 py-2 bg-gray-800 text-[#EAE4D5] rounded-full shadow-md hover:bg-gray-700 transition-all duration-300">
//                       Open to
//                     </button>
//                     <button className="px-4 py-2 bg-transparent border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300">
//                       Add profile section
//                     </button>
//                     <button className="px-4 py-2 bg-transparent border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300">
//                       Enhance profile
//                     </button>
//                     <button className="px-4 py-2 bg-transparent border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300">
//                       Resources
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Analytics Section */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Analytics</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//               <div>
//                 <p className="text-2xl font-bold text-gray-800">426</p>
//                 <p className="text-sm text-gray-600">Profile views</p>
//                 <p className="text-xs text-gray-500">Discover  viewed your profile.</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-gray-800">999</p>
//                 <p className="text-sm text-gray-600">Post impressions</p>
//                 <p className="text-xs text-gray-500">Check out who s engaging with your posts.</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-gray-800">98</p>
//                 <p className="text-sm text-gray-600">Search appearances</p>
//                 <p className="text-xs text-gray-500">See how often you appear in search results.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar (Right) - Who Your Viewers Also Viewed */}
//         <div className="w-full md:w-80">
//           <div className="sticky top-10 bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Who Your Viewers Also Viewed</h3>
//             <div className="space-y-4">
//               {/* Suggestion 1 */}
//               <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//                   Image
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-gray-800">Adarsh Gupta • 2nd</p>
//                   <p className="text-xs text-gray-600">Co-founder at The Sheryians Coding School</p>
//                   <button className="mt-2 px-3 py-1 bg-gray-800 text-[#EAE4D5] rounded-full text-xs hover:bg-gray-700 transition-all duration-300">
//                     Following
//                   </button>
//                 </div>
//               </div>

//               {/* Suggestion 2 */}
//               <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//                   Image
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-gray-800">Chandra Prakash Ojha • 2nd</p>
//                   <p className="text-xs text-gray-600">Full stack Developer | MLSA @Microsoft | Building...</p>
//                   <button className="mt-2 px-3 py-1 bg-gray-800 text-[#EAE4D5] rounded-full text-xs hover:bg-gray-700 transition-all duration-300">
//                     Message
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default App; // Memoized for performance











// // App.jsx
// // eslint-disable-next-line no-unused-vars
// import React from 'react';

// const App = () => {
//   const profileImage = 'https://i.pinimg.com/736x/f6/61/ea/f661ea61616909838a9fbfeda0d2ea14.jpg';
//   const bannerImage = 'https://plus.unsplash.com/premium_photo-1700929226395-fbab2b0f29b2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#EAE4D5] to-gray-200 py-10 px-4">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
//         {/* Main Content (Left) */}
//         <div className="flex-1">
//           {/* Profile Card with Banner */}
//           <div className="relative bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 mb-8 overflow-hidden transform hover:shadow-[0_0_20px_5px_rgba(255,215,0,0.5)] transition-all duration-500">
//             {/* Banner with Parallax Effect */}
//             <div className="relative h-48 w-full overflow-hidden">
//               <img
//                 src={bannerImage}
//                 alt="Banner"
//                 className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105 filter brightness-90"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//             </div>

//             {/* Profile Info */}
//             <div className="relative px-8 pb-8">
//               <div className="flex flex-col md:flex-row items-center md:items-start gap-6 -mt-12">
//                 {/* Profile Image with Glow */}
//                 <div className="relative w-32 h-32">
//                   <img
//                     src={profileImage}
//                     alt="Profile"
//                     className="w-full h-full rounded-full border-4 border-[#EAE4D5] shadow-lg object-cover"
//                   />
//                   <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-yellow-400 to-orange-500 opacity-50 animate-pulse"></div>
//                 </div>

//                 <div className="flex-1 text-center md:text-left pt-4">
//                   <h1 className="text-3xl font-bold text-gray-1000 flex items-center gap-2 justify-center md:justify-start">
//                     Honey Sharma
//                     <span className="text-sm text-gray-800 font-normal">(He/Him)</span>
//                   </h1>
//                   <h2 className="text-lg text-gray-600 mt-2">Co-Founder @Throne8</h2>
//                   <p className="text-sm text-gray-500 mt-2 leading-relaxed">
//                     Empowering Professional Networking for Millions with AI, Security, and Scalable Innovation
//                   </p>
//                   <p className="text-sm text-gray-600 mt-2">
//                     <span className="font-semibold">Location:</span> Bhopal, Madhya Pradesh, India
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     <span className="font-semibold">Stats:</span> 3,282 followers • 500+ connections
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     <span className="font-semibold">Company:</span> Thronet Technology Private Limited (Throne8)
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     <span className="font-semibold">Education:</span> Oriental College of Technology
//                   </p>

//                   {/* Action Buttons */}
//                   <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
//                     <button className="px-4 py-2 bg-gray-800 text-[#EAE4D5] rounded-full shadow-md hover:bg-gray-700 transition-all duration-300">
//                       Open to
//                     </button>
//                     <button className="px-4 py-2 bg-transparent border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300">
//                       Add profile section
//                     </button>
//                     <button className="px-4 py-2 bg-transparent border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300">
//                       Enhance profile
//                     </button>
//                     <button className="px-4 py-2 bg-transparent border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300">
//                       Resources
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Features Section */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Features</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2 text-gray-600 text-xs">
//                   Icon
//                 </div>
//                 <h4 className="text-sm font-semibold text-gray-800">AI Networking</h4>
//                 <p className="text-xs text-gray-500 mt-1">Connect smarter with AI-driven insights.</p>
//               </div>
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2 text-gray-600 text-xs">
//                   Icon
//                 </div>
//                 <h4 className="text-sm font-semibold text-gray-800">Security First</h4>
//                 <p className="text-xs text-gray-500 mt-1">Protect your data with top-tier security.</p>
//               </div>
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2 text-gray-600 text-xs">
//                   Icon
//                 </div>
//                 <h4 className="text-sm font-semibold text-gray-800">Scalable Innovation</h4>
//                 <p className="text-xs text-gray-500 mt-1">Built to grow with your ambitions.</p>
//               </div>
//             </div>
//           </div>

//           {/* Analytics Section */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Analytics</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//               <div>
//                 <p className="text-2xl font-bold text-gray-800">426</p>
//                 <p className="text-sm text-gray-600">Profile views</p>
//                 <p className="text-xs text-gray-500">Discover who viewed your profile.</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-gray-800">999</p>
//                 <p className="text-sm text-gray-600">Post impressions</p>
//                 <p className="text-xs text-gray-500">Check out who s engaging with your posts.</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-gray-800">98</p>
//                 <p className="text-sm text-gray-600">Search appearances</p>
//                 <p className="text-xs text-gray-500">See how often you appear in search results.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar (Right) - Who Your Viewers Also Viewed */}
//         <div className="w-full md:w-80">
//           <div className="sticky top-10 bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Who Your Viewers Also Viewed</h3>
//             <div className="space-y-4">
//               {/* Suggestion 1 */}
//               <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//                   Image
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-gray-800">Adarsh Gupta • 2nd</p>
//                   <p className="text-xs text-gray-600">Co-founder at The Sheryians Coding School</p>
//                   <button className="mt-2 px-3 py-1 bg-gray-800 text-[#EAE4D5] rounded-full text-xs hover:bg-gray-700 transition-all duration-300">
//                     Following
//                   </button>
//                 </div>
//               </div>

//               {/* Suggestion 2 */}
//               <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//                   Image
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-gray-800">Chandra Prakash Ojha • 2nd</p>
//                   <p className="text-xs text-gray-600">Full stack Developer | MLSA @Microsoft | Building...</p>
//                   <button className="mt-2 px-3 py-1 bg-gray-800 text-[#EAE4D5] rounded-full text-xs hover:bg-gray-700 transition-all duration-300">
//                     Message
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;




// App.jsx
// eslint-disable-next-line no-unused-vars
// import React from 'react';

// const App = () => {
//   const profileImage = 'https://i.pinimg.com/736x/f6/61/ea/f661ea61616909838a9fbfeda0d2ea14.jpg';
//   const bannerImage = 'https://plus.unsplash.com/premium_photo-1700929226395-fbab2b0f29b2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#EAE4D5] to-gray-200 py-10 px-4">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
//         {/* Main Content (Left) */}
//         <div className="flex-1">
//           {/* Profile Card with Banner */}
//           <div className="relative bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 mb-8 overflow-hidden">
//             {/* Banner with Parallax Effect */}
//             <div className="relative h-48 w-full overflow-hidden">
//               <img
//                 src={bannerImage}
//                 alt="Banner"
//                 className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105 filter brightness-90"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//             </div>

//             {/* Profile Info */}
//             <div className="relative px-8 pb-8">
//               <div className="flex flex-col md:flex-row items-start gap-6 -mt-12">
//                 {/* Profile Image with Glow */}
//                 <div className="relative w-32 h-32">
//                   <img
//                     src={profileImage}
//                     alt="Profile"
//                     className="w-full h-full rounded-full border-4 border-[#EAE4D5] shadow-lg object-cover"
//                   />
//                   <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-yellow-400 to-orange-500 opacity-50 animate-pulse"></div>
//                 </div>

//                 <div className="flex-1 text-center md:text-left pt-2">
//                   {/* <div>
//                     <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2 justify-center md:justify-start">
//                       Honey Sharma
//                       <span className="text-sm text-gray-500 font-normal">(He/Him)</span>
//                     </h1>
//                     <h2 className="text-lg text-gray-600 mt-2">Co-Founder @Throne8</h2>
//                     <p className="text-sm text-gray-500 mt-2 leading-relaxed">
//                       Empowering Professional Networking for Millions with AI, Security, and Scalable Innovation
//                     </p>
//                     <p className="text-sm text-gray-600 mt-2">
//                       <span className="font-semibold">Location:</span> Bhopal, Madhya Pradesh, India
//                     </p>
//                     <div className="flex gap-3 mt-2 justify-center md:justify-start">
//                       <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm hover:bg-gray-300 transition-all duration-300">
//                         3,282 followers
//                       </button>
//                       <button className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm hover:bg-gray-300 transition-all duration-300">
//                         500+ connections
//                       </button>
//                     </div>
//                   </div> */}
//                   <div className="space-y-3">
//   {/* Name - Moved Lower with Gradient and Premium Styling */}
//   <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 flex items-center gap-2 justify-center md:justify-start mt-9">
//     Honey Sharma
//     <span className="text-sm text-gray-500 font-normal">(He/Him)</span>
//   </h1>

//   {/* Title */}
//   <h2 className="text-lg font-semibold text-gray-600">Co-Founder @Throne8</h2>

//   {/* Tagline with Shadow */}
//   <p className="text-sm text-gray-500 leading-relaxed drop-shadow-sm">
//     Empowering Professional Networking for Millions with AI, Security, and Scalable Innovation
//   </p>

//   {/* Location with Icon */}
//   <div className="flex items-center gap-2">
//     {/* <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//       Icon
//     </div> */}
//     <p className="text-sm text-gray-600">
//       <span className="font-semibold">Location:</span> Bhopal, Madhya Pradesh, India
//     </p>
//   </div>

//   {/* Followers and Connections with Neumorphic Buttons */}
//   <div className="flex gap-3 justify-center md:justify-start">
//     <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] hover:bg-gray-200 transition-all duration-300 flex items-center gap-2">
//       {/* <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//         Icon
//       </div> */}
//       3,282 followers
//     </button>
//     <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] hover:bg-gray-200 transition-all duration-300 flex items-center gap-2">
//       {/* <div className="w-5 h-5 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//         Icon
//       </div> */}
//       500+ connections
//     </button>
//   </div>
// </div>

//                   {/* Action Buttons */}
//                   <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
//                     <button className="px-4 py-2 bg-gray-800 text-[#EAE4D5] rounded-full shadow-md hover:bg-gray-700 transition-all duration-300">
//                       Open to
//                     </button>
//                     <button className="px-4 py-2 bg-transparent border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300">
//                       Add profile section
//                     </button>
//                     <button className="px-4 py-2 bg-transparent border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300">
//                       Enhance profile
//                     </button>
//                     <button className="px-4 py-2 bg-transparent border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300">
//                       Resources
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* New Div for Company and Education */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Details</h3>
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//                   Icon
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-gray-800">Company</p>
//                   <p className="text-xs text-gray-600">Thronet Technology Private Limited (Throne8)</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3">
//                 <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//                   Icon
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-gray-800">Education</p>
//                   <p className="text-xs text-gray-600">Oriental College of Technology</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Features Section */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Features</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2 text-gray-600 text-xs">
//                   Icon
//                 </div>
//                 <h4 className="text-sm font-semibold text-gray-800">AI Networking</h4>
//                 <p className="text-xs text-gray-500 mt-1">Connect smarter with AI-driven insights.</p>
//               </div>
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2 text-gray-600 text-xs">
//                   Icon
//                 </div>
//                 <h4 className="text-sm font-semibold text-gray-800">Security First</h4>
//                 <p className="text-xs text-gray-500 mt-1">Protect your data with top-tier security.</p>
//               </div>
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2 text-gray-600 text-xs">
//                   Icon
//                 </div>
//                 <h4 className="text-sm font-semibold text-gray-800">Scalable Innovation</h4>
//                 <p className="text-xs text-gray-500 mt-1">Built to grow with your ambitions.</p>
//               </div>
//             </div>
//           </div>

//           {/* Analytics Section */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Analytics</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
//               <div>
//                 <p className="text-2xl font-bold text-gray-800">426</p>
//                 <p className="text-sm text-gray-600">Profile views</p>
//                 <p className="text-xs text-gray-500">Discover who viewed your profile.</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-gray-800">999</p>
//                 <p className="text-sm text-gray-600">Post impressions</p>
//                 <p className="text-xs text-gray-500">Check out who s engaging with your posts.</p>
//               </div>
//               <div>
//                 <p className="text-2xl font-bold text-gray-800">98</p>
//                 <p className="text-sm text-gray-600">Search appearances</p>
//                 <p className="text-xs text-gray-500">See how often you appear in search results.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sidebar (Right) - Who Your Viewers Also Viewed */}
//         <div className="w-full md:w-80">
//           <div className="sticky top-10 bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Who Your Viewers Also Viewed</h3>
//             <div className="space-y-4">
//               {/* Suggestion 1 */}
//               <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//                   Image
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-gray-800">Adarsh Gupta • 2nd</p>
//                   <p className="text-xs text-gray-600">Co-founder at The Sheryians Coding School</p>
//                   <button className="mt-2 px-3 py-1 bg-gray-800 text-[#EAE4D5] rounded-full text-xs hover:bg-gray-700 transition-all duration-300">
//                     Following
//                   </button>
//                 </div>
//               </div>

//               {/* Suggestion 2 */}
//               <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//                   Image
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-gray-800">Chandra Prakash Ojha • 2nd</p>
//                   <p className="text-xs text-gray-600">Full stack Developer | MLSA @Microsoft | Building...</p>
//                   <button className="mt-2 px-3 py-1 bg-gray-800 text-[#EAE4D5] rounded-full text-xs hover:bg-gray-700 transition-all duration-300">
//                     Message
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App; 





// // // eslint-disable-next-line no-unused-vars

// const App = () => {
//   const profileImage = 'https://i.pinimg.com/736x/f6/61/ea/f661ea61616909838a9fbfeda0d2ea14.jpg';
//   const bannerImage = 'https://plus.unsplash.com/premium_photo-1700929226395-fbab2b0f29b2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#EAE4D5] to-gray-200 py-10 px-4">
//                 <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
//                   {/* Navbar */}
//           <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg z-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="flex items-center justify-between h-16">
//                 {/* Logo */}
//                 <div className="flex-shrink-0">
//                   <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
//                     Throne8
//                   </h1>
//                 </div>
          
//                 {/* Navigation Links - Hidden on small screens */}
//                 <div className="hidden md:flex items-center space-x-6">
//                   <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-yellow-400 transition-colors duration-300">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//                     </svg>
//                     Home
//                   </a>
//                   <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-yellow-400 transition-colors duration-300">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                     </svg>
//                     Network
//                   </a>
//                   <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-yellow-400 transition-colors duration-300">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                     Jobs
//                   </a>
//                   <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-yellow-400 transition-colors duration-300">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                     </svg>
//                     Messaging
//                   </a>
//                   <a href="#" className="flex items-center gap-2 text-sm font-medium hover:text-yellow-400 transition-colors duration-300">
//                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//                     </svg>
//                     Notifications
//                   </a>
//                 </div>
          
//                 {/* Right Section: Search and Profile */}
//                 <div className="flex items-center space-x-4">
//                   {/* Search Bar */}
//                   <div className="hidden md:flex items-center bg-gray-700 rounded-full px-3 py-1">
//                     <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                     </svg>
//                     <input
//                       type="text"
//                       placeholder="Search"
//                       className="bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none ml-2"
//                     />
//                   </div>
          
//                   {/* Profile Dropdown */}
//                   <div className="relative group">
//                     <button className="flex items-center gap-2">
//                       <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//                         <img src="https://images.unsplash.com/photo-1745252279105-f5c6e2785889?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
//                       </div>
//                       <span className="text-sm font-medium hidden md:inline">Honey</span>
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                       </svg>
//                     </button>
//                     {/* Dropdown Menu */}
//                     <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
//                       <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">View Profile</a>
//                       <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Settings</a>
//                       <a href="#" className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100">Logout</a>
//                     </div>
//                   </div>
          
//                   {/* Hamburger Menu - Visible on small screens */}
//                   <div className="md:hidden">
//                     <button className="text-white focus:outline-none">
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </nav>
//         {/* Main Content (Left) */}
//         <div className="flex-1">
//           {/* Profile Card with Banner */}
//           <div className="relative bg-white/30 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 mb-8 overflow-hidden">
//             {/* Banner with Parallax Effect */}
//             <div className="relative h-48 w-full overflow-hidden">
//               <img
//                 src={bannerImage}
//                 alt="Banner"
//                 className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105 filter brightness-90"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//             </div>

//             {/* Profile Info */}
//             <div className="relative px-8 pb-8">
//               <div className="flex flex-col md:flex-row items-start gap-6 -mt-12">
//                 {/* Profile Image with Glow */}
//                 <div className="relative w-32 h-32">
//                   <img
//                     src={profileImage}
//                     alt="Profile"
//                     className="w-full h-full rounded-full border-4 border-[#EAE4D5] shadow-lg object-cover"
//                   />
//                   <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-yellow-400 to-orange-500 opacity-50 animate-pulse"></div>
//                 </div>

//                 <div className="flex-1 text-center md:text-left pt-2">
//                   <div className="space-y-3">
//                     {/* Name with Gradient */}
//                     <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 flex items-center gap-2 justify-center md:justify-start mt-9">
//                       Honey Sharma
//                       <span className="text-sm text-gray-500 font-normal">(He/Him)</span>
//                     </h1>
//                     {/* Title */}
//                     <h2 className="text-lg font-semibold text-gray-600">Co-Founder @Throne8</h2>
//                     {/* Tagline */}
//                     <p className="text-sm text-gray-500 leading-relaxed drop-shadow-sm">
//                       Empowering Professional Networking for Millions with AI, Security, and Scalable Innovation
//                     </p>
//                     {/* Location */}
//                     <div className="flex items-center gap-2">
//                       <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                       </svg>
//                       <p className="text-sm text-gray-600">
//                         <span className="font-semibold">Location:</span> Bhopal, Madhya Pradesh, India
//                       </p>
//                     </div>
//                     {/* Followers and Connections */}
//                     <div className="flex gap-3 justify-center md:justify-start">
//                       <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] hover:bg-gray-200 transition-all duration-300 flex items-center gap-2">
//                         <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                         </svg>
//                         3,282 followers
//                       </button>
//                       <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.7)] hover:bg-gray-200 transition-all duration-300 flex items-center gap-2">
//                         <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                         </svg>
//                         500+ connections
//                       </button>
//                     </div>
//                   </div>
//                   {/* Action Buttons */}
//                   <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
//                     <button className="px-4 py-2 bg-gray-800 text-[#EAE4D5] rounded-full shadow-md hover:bg-gray-700 transition-all duration-300">
//                       Open to
//                     </button>
//                     <button className="px-4 py-2 bg-transparent border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300">
//                       Add profile section
//                     </button>
//                     <button className="px-4 py-2 bg-transparent border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300">
//                       Enhance profile
//                     </button>
//                     <button className="px-4 py-2 bg-transparent border border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300">
//                       Resources
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Enhanced Professional Details */}
//           <div className="bg-gradient-to-br from-white/50 to-gray-100/50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4 relative">
//               Professional Details
//               <span className="absolute left-0 bottom-0 h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
//             </h3>
//             <div className="space-y-4">
//               <div className="flex items-center gap-3 p-4 bg-white/70 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                 <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-gray-800">Company</p>
//                   <p className="text-xs text-gray-600">Thronet Technology Private Limited (Throne8)</p>
//                 </div>
//               </div>
//               <div className="flex items-center gap-3 p-4 bg-white/70 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                 <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="text-sm font-semibold text-gray-800">Education</p>
//                   <p className="text-xs text-gray-600">Oriental College of Technology</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* About Section */}
// <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//   <h3 className="text-xl font-semibold text-gray-800 mb-4 relative">
//     About
//     <span className="absolute left-0 bottom-0 h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
//   </h3>
//   <p className="text-sm text-gray-600 leading-relaxed bg-white/70 p-4 rounded-lg shadow-sm">
//     Passionate about leveraging AI and technology to build scalable solutions that connect professionals worldwide. As Co-Founder of Throne8, I focus on creating secure, innovative platforms that empower millions. With a background in technology and entrepreneurship, I thrive on solving complex challenges and driving impact.
//   </p>
// </div>

//           {/* Experience Section */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4 relative">
//               Experience
//               <span className="absolute left-0 bottom-0 h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
//             </h3>
//             <div className="space-y-6">
//               <div className="relative pl-8 before:content-[''] before:absolute before:left-2 before:top-0 before:bottom-0 before:w-1 before:bg-gray-300">
//                 <div className="absolute left-0 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full -ml-1 mt-1"></div>
//                 <div className="p-4 bg-white/70 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//                   <p className="text-sm font-semibold text-gray-800">Co-Founder</p>
//                   <p className="text-xs text-gray-600">Thronet Technology Private Limited (Throne8) • 2022 - Present</p>
//                   <p className="text-xs text-gray-500 mt-2">
//                     Leading the development of AI-driven networking platforms, focusing on scalability, security, and user experience.
//                   </p>
//                 </div>
//               </div>
//               <div className="relative pl-8 before:content-[''] before:absolute before:left-2 before:top-0 before:bottom-0 before:w-1 before:bg-gray-300">
//                 <div className="absolute left-0 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full -ml-1 mt-1"></div>
//                 <div className="p-4 bg-white/70 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//                   <p className="text-sm font-semibold text-gray-800">Tech Lead</p>
//                   <p className="text-xs text-gray-600">InnovateX Solutions • 2020 - 2022</p>
//                   <p className="text-xs text-gray-500 mt-2">
//                     Managed a team of developers to build secure, high-performance web applications for global clients.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Education Section */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4 relative">
//               Education
//               <span className="absolute left-0 bottom-0 h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
//             </h3>
//             <div className="space-y-4">
//               <div className="p-4 bg-white/70 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                 <p className="text-sm font-semibold text-gray-800">B.Tech in Computer Science</p>
//                 <p className="text-xs text-gray-600">Oriental College of Technology • 2016 - 2020</p>
//                 <p className="text-xs text-gray-500 mt-2">Specialized in AI and software engineering, with a focus on scalable system design.</p>
//               </div>
//             </div>
//           </div>

//           {/* Features Section */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//             <h3 className="text-xl font-semibold text-gray-800 mb-4">Features</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
//                 <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                   </svg>
//                 </div>
//                 <h4 className="text-sm font-semibold text-gray-800">AI Networking</h4>
//                 <p className="text-xs text-gray-500 mt-1">Connect smarter with AI-driven insights.</p>
//               </div>
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
//                 <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm-6 0c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm-6 0c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z" />
//                   </svg>
//                 </div>
//                 <h4 className="text-sm font-semibold text-gray-800">Security First</h4>
//                 <p className="text-xs text-gray-500 mt-1">Protect your data with top-tier security.</p>
//               </div>
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-center">
//                 <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//                   </svg>
//                 </div>
//                 <h4 className="text-sm font-semibold text-gray-800">Scalable Innovation</h4>
//                 <p className="text-xs text-gray-500 mt-1">Built to grow with your ambitions.</p>
//               </div>
//             </div>
//           </div>
//           {/* Activity Section */}
// <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//   <div className="flex justify-between items-center mb-4">
//     <h3 className="text-xl font-semibold text-gray-800 relative">
//       Activity
//       <span className="absolute left-0 bottom-0 h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
//     </h3>
//     <p className="text-sm text-gray-600">3,282 followers</p>
//   </div>
//   <div className="flex justify-between items-center mb-4">
//     <div className="border-b border-gray-300">
//       <button className="pb-2 text-sm font-semibold text-green-600 border-b-2 border-green-600">Posts</button>
//       <button className="pb-2 text-sm font-semibold text-gray-600 ml-4">Comments</button>
//       <button className="pb-2 text-sm font-semibold text-gray-600 ml-4">Videos</button>
//       <button className="pb-2 text-sm font-semibold text-gray-600 ml-4">Images</button>
//       <button className="pb-2 text-sm font-semibold text-gray-600 ml-4">Documents</button>
//     </div>
//     <button className="px-4 py-1 bg-transparent border border-blue-600 text-blue-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2">
//       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//       </svg>
//       Create a post
//     </button>
//   </div>
//   <div className="space-y-4">
//     {/* Post 1 */}
//     <div className="p-4 bg-white/50 rounded-lg shadow-md">
//       <div className="flex items-center gap-3 mb-2">
//         <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//           Image
//         </div>
//         <div>
//           <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
//             Honey Sharma
//             <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </p>
//           <p className="text-xs text-gray-600">Co-Founder @Throne8 | Empowering Pro...</p>
//         </div>
//         <button className="ml-auto text-gray-600">
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
//           </svg>
//         </button>
//       </div>
//       <p className="text-sm text-gray-800 mb-2">
//         End of an Era <span className="text-pink-500">🥺👑</span><br />
//         Thank you, King Kohli, for redefining Test cricket for our generation. <span className="text-pink-500">💯</span> ...<span className="text-blue-600 hover:underline">more</span>
//       </p>
//       <img
//         src="https://images.unsplash.com/photo-1593941703671-9a436e02c9d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
//         alt="Post 1"
//         className="w-full h-48 object-cover rounded-lg mb-2"
//       />
//       <div className="flex gap-4 text-gray-600">
//         <button className="flex items-center gap-1 text-xs">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//           </svg>
//           12
//         </button>
//         <button className="flex items-center gap-1 text-xs">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//           </svg>
//         </button>
//         <button className="flex items-center gap-1 text-xs">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//           </svg>
//         </button>
//         <button className="flex items-center gap-1 text-xs">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
//           </svg>
//         </button>
//       </div>
//     </div>
//     {/* Post 2 */}
//     <div className="p-4 bg-white/50 rounded-lg shadow-md">
//       <div className="flex items-center gap-3 mb-2">
//         <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//           Image
//         </div>
//         <div>
//           <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
//             Honey Sharma
//             <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </p>
//           <p className="text-xs text-gray-600">Co-Founder @Throne8 | Empowering Pro...</p>
//         </div>
//         <button className="ml-auto text-gray-600">
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
//           </svg>
//         </button>
//       </div>
//       <p className="text-sm text-gray-800 mb-2">
//         Even the sound of the sirens on the news can send a chill down your spine. Now imagine the courage it takes to walk with the fire — not away from it. ...<span className="text-blue-600 hover:underline">more</span>
//       </p>
//       <img
//         src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
//         alt="Post 2"
//         className="w-full h-48 object-cover rounded-lg mb-2"
//       />
//       <div className="flex gap-4 text-gray-600">
//         <button className="flex items-center gap-1 text-xs">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//           </svg>
//           9
//         </button>
//         <button className="flex items-center gap-1 text-xs">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//           </svg>
//           1
//         </button>
//         <button className="flex items-center gap-1 text-xs">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//           </svg>
//           1 repost
//         </button>
//         <button className="flex items-center gap-1 text-xs">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
//           {/* Skills Section */}
// <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//   <h3 className="text-xl font-semibold text-gray-800 mb-4 relative">
//     Skills
//     <span className="absolute left-0 bottom-0 h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
//   </h3>
//   <div className="space-y-4">
//     <div className="flex items-center gap-3">
//       <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//         </svg>
//       </div>
//       <div>
//         <p className="text-sm font-semibold text-gray-800">Entrepreneurship</p>
//         <p className="text-xs text-gray-600">Co-Founder at Thronet Technology Private Limited (Throne8)</p>
//       </div>
//     </div>
//     <div className="flex items-center gap-3">
//       <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600">
//         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//         </svg>
//       </div>
//       <div>
//         <p className="text-sm font-semibold text-gray-800">Startup Leadership</p>
//         <p className="text-xs text-gray-600">Co-Founder at Thronet Technology Private Limited (Throne8)</p>
//       </div>
//     </div>
//   </div>
//   <a href="#" className="text-sm text-blue-600 hover:underline mt-4 block">
//     Show all 36 skills →
//   </a>
// </div>

// {/* Interests Section */}
//        <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//          <h3 className="text-xl font-semibold text-gray-800 mb-4 relative">
//            Interests
//            <span className="absolute left-0 bottom-0 h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
//          </h3>
//          <div className="border-b border-gray-300 mb-4">
//            <button className="pb-2 text-sm font-semibold text-green-600 border-b-2 border-green-600">Top Voices</button>
//            <button className="pb-2 text-sm font-semibold text-gray-600 ml-4">Companies</button>
//            <button className="pb-2 text-sm font-semibold text-gray-600 ml-4">Groups</button>
//            <button className="pb-2 text-sm font-semibold text-gray-600 ml-4">Newsletters</button>
//            <button className="pb-2 text-sm font-semibold text-gray-600 ml-4">Schools</button>
//   </div>
//   <div className="space-y-4">
//     <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//         Image
//       </div>
//       <div className="flex-1">
//         <p className="text-sm font-semibold text-gray-800">Anushree Jain • 2nd</p>
//         <p className="text-xs text-gray-600">Co-founder, SocialTAG | Helping brands with Strategy-led influencer marketing campaigns</p>
//         <p className="text-xs text-gray-500 mt-1">159,847 followers</p>
//         <button className="mt-2 px-3 py-1 bg-transparent border border-gray-800 text-gray-800 rounded-full text-xs hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300 flex items-center gap-2">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//           </svg>
//           Following
//         </button>
//       </div>
//     </div>
//     <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//         Image
//       </div>
//       <div className="flex-1">
//         <p className="text-sm font-semibold text-gray-800">Ayush Wadhwa • 2nd</p>
//         <p className="text-xs text-gray-600">Founder, OWLED | Forbes 30u30 | Mastering Content Creation + Influencer Marketing, Ad Films & AI/AR | Angel Investor</p>
//         <p className="text-xs text-gray-500 mt-1">58,018 followers</p>
//         <button className="mt-2 px-3 py-1 bg-transparent border border-gray-800 text-gray-800 rounded-full text-xs hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300 flex items-center gap-2">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//           </svg>
//           Following
//         </button>
//       </div>
//     </div>
//   </div>
//   <a href="#" className="text-sm text-blue-600 hover:underline mt-4 block">
//     Show all Top Voices →
//   </a>
//        </div>
//           {/* Analytics Section */}
//        <div className="bg-gradient-to-br from-white/40 to-gray-100/40 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//   <h3 className="text-xl font-semibold text-gray-800 mb-6 relative">
//     Analytics
//     <span className="absolute left-0 bottom-0 h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
//   </h3>
//   <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//     {/* Profile Views */}
//     <div className="relative p-5 bg-white/60 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
//         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//         </svg>
//       </div>
//       <p className="text-3xl font-bold text-gray-800 mt-6">426</p>
//       <p className="text-sm font-medium text-gray-600 mt-1">Profile Views</p>
//       <div className="mt-3 w-full h-1 bg-gray-200 rounded-full">
//         <div className="h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: '42.6%' }}></div>
//       </div>
//       <p className="text-xs text-gray-500 mt-2">Discover who viewed your profile.</p>
//     </div>
//     {/* Post Impressions */}
//     <div className="relative p-5 bg-white/60 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
//         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
//         </svg>
//       </div>
//       <p className="text-3xl font-bold text-gray-800 mt-6">999</p>
//       <p className="text-sm font-medium text-gray-600 mt-1">Post Impressions</p>
//       <div className="mt-3 w-full h-1 bg-gray-200 rounded-full">
//         <div className="h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: '99.9%' }}></div>
//       </div>
//       <p className="text-xs text-gray-500 mt-2">Check out who s engaging with your posts.</p>
//     </div>
//     {/* Search Appearances */}
//     <div className="relative p-5 bg-white/60 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
//         <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//         </svg>
//       </div>
//       <p className="text-3xl font-bold text-gray-800 mt-6">98</p>
//       <p className="text-sm font-medium text-gray-600 mt-1">Search Appearances</p>
//       <div className="mt-3 w-full h-1 bg-gray-200 rounded-full">
//         <div className="h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" style={{ width: '9.8%' }}></div>
//       </div>
//       <p className="text-xs text-gray-500 mt-2">See how often you appear in search results.</p>
//     </div>
//   </div>
// </div>
//         </div>
//         {/* Sidebar (Right) - Who Your Viewers Also Viewed */}
//         <div className="w-full md:w-80">
//         <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//   <h3 className="text-xl font-semibold text-gray-800 mb-4">Who Your Viewers Also Viewed</h3>
//   <div className="space-y-4">
//     {/* Suggestion 1 */}
//     <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//         Image
//       </div>
//       <div>
//         <p className="text-sm font-semibold text-gray-800">Adarsh Gupta • 2nd</p>
//         <p className="text-xs text-gray-600">Co-founder at The Sheryians Coding School</p>
//         <button className="mt-2 px-3 py-1 bg-gray-800 text-[#EAE4D5] rounded-full text-xs hover:bg-gray-700 transition-all duration-300">
//           Following
//         </button>
//       </div>
//     </div>
//     {/* Suggestion 2 */}
//     <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//         Image
//       </div>
//       <div>
//         <p className="text-sm font-semibold text-gray-800">Chandra Prakash Ojha • 2nd</p>
//         <p className="text-xs text-gray-600">Full stack Developer | MLSA @Microsoft | Building...</p>
//         <button className="mt-2 px-3 py-1 bg-gray-800 text-[#EAE4D5] rounded-full text-xs hover:bg-gray-700 transition-all duration-300">
//           Message
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
//           {/* People You May Know Section */}
// <div className="sticky top-10 bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mt-8">
//   <h3 className="text-xl font-semibold text-gray-800 mb-4">People You May Know</h3>
//   <p className="text-sm text-gray-600 mb-4">From your industry</p>
//   <div className="space-y-4">
//     {/* Person 1 */}
//     <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//         Image
//       </div>
//       <div className="flex-1">
//         <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
//           Chhavi Arora
//           <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//         </p>
//         <p className="text-xs text-gray-600">AWS Cloud & DevOps | IoT Solutions | Sophomore @ IIIT...</p>
//         <button className="mt-2 px-3 py-1 bg-transparent border border-gray-800 text-gray-800 rounded-full text-xs hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300 flex items-center gap-2">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//           </svg>
//           Connect
//         </button>
//       </div>
//     </div>
//     {/* Person 2 */}
//     <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//         Image
//       </div>
//       <div className="flex-1">
//         <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
//           Manan Telrandhe
//           <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//         </p>
//         <p className="text-xs text-gray-600">Tech-savvy Software Developer</p>
//         <button className="mt-2 px-3 py-1 bg-transparent border border-gray-800 text-gray-800 rounded-full text-xs hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300 flex items-center gap-2">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//           </svg>
//           Connect
//         </button>
//       </div>
//     </div>
//     {/* Person 3 */}
//     <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//         Image
//       </div>
//       <div className="flex-1">
//         <p className="text-sm font-semibold text-gray-800 flex items-center gap-2">
//           Ankit Shinde
//           <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//           </svg>
//         </p>
//         <p className="text-xs text-gray-600">Software Engineer @Techvalens || Nodejs Developer ||...</p>
//         <button className="mt-2 px-3 py-1 bg-transparent border border-gray-800 text-gray-800 rounded-full text-xs hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300 flex items-center gap-2">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//           </svg>
//           Connect
//         </button>
//       </div>
//     </div>
//     {/* Person 4 */}
//     <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 text-xs">
//         Image
//       </div>
//       <div className="flex-1">
//         <p className="text-sm font-semibold text-gray-800">Harshit Kushwah</p>
//         <p className="text-xs text-gray-600">Software Engineer @NIMBLEdGE | Former iOS...</p>
//         <button className="mt-2 px-3 py-1 bg-transparent border border-gray-800 text-gray-800 rounded-full text-xs hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300 flex items-center gap-2">
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//           </svg>
//           Connect
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
//         </div>
        
//       </div>
//     </div>
//   );
// };

// export default App;






// // // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';

// function Test() {
//   const [isSidebarOpen] = useState(true);
//   const [isDarkMode] = useState(false);
//   const [likes, setLikes] = useState([0, 0, 0, 0]);

//   const handleLike = (index) => {
//     const newLikes = [...likes];
//     newLikes[index] += 1;
//     setLikes(newLikes);
//   };

//   return (
//     <div
//       className={`min-h-screen transition-colors duration-300 ${
//         isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100' : 'bg-gradient-to-br from-[#EAE4D5] to-gray-200 text-gray-900'
//       } overflow-hidden`}
//     >
//       {/* Main Container */}
//       <div className="flex mt-20 px-4 md:px-12 max-w-7xl mx-auto">
        
//         {/* Left Sidebar */}
//         {isSidebarOpen && (
//           <aside className="w-full md:w-1/4 p-6">
//             {/* Profile Section */}
//             <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//               <div className="relative inline-block mb-6">
//                 <img
//                   src="https://plus.unsplash.com/premium_photo-1673039393866-130d3d092b66?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                   alt="Profile"
//                   className="w-28 h-28 rounded-full border-4 border-gradient-to-r from-yellow-400 to-orange-500 shadow-xl object-cover transform hover:scale-110 transition-transform duration-300"
//                 />
//                 <span className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-3 border-white shadow-md"></span>
//               </div>
//               <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
//               <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Senior Software Engineer</p>
//               <p className={`text-xs italic ${isDarkMode ? 'text-gray-500' : 'text-gray-700'} mb-4`}>Crafting the future with code</p>
//               <div className="flex space-x-3 mb-4">
//                 <span className={`text-xs font-semibold text-gray-800 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} px-3 py-1 rounded-full shadow-sm`}>
//                   Top Contributor
//                 </span>
//                 <span className={`text-xs font-semibold text-gray-800 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} px-3 py-1 rounded-full shadow-sm`}>Verified</span>
//               </div>
//               <div className="grid grid-cols-2 gap-2 mb-4">
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                   <span className="text-gray-800 font-semibold">250</span> Connections
//                 </p>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                   <span className="text-gray-800 font-semibold">180</span> Following
//                 </p>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                   <span className="text-gray-800 font-semibold">1.2K</span> Profile Views
//                 </p>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                   <span className="text-gray-800 font-semibold">3.5K</span> Impressions
//                 </p>
//               </div>
//               <div className="mb-6">
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
//                   Posts This Week: <span className="text-gray-800 font-semibold">5</span>
//                 </p>
//                 <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                   Engagement: <span className="text-green-500 font-semibold">+20%</span>
//                 </p>
//               </div>
//               <button className="w-full border border-gray-800 text-gray-800 py-3 rounded-full font-semibold hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300">
//                 View Profile
//               </button>
//               <h4 className={`mt-6 text-lg font-semibold text-gray-800 border-b border-gray-300 pb-2 relative`}>
//                 My Communities
//                 <span className="absolute left-0 bottom-0 h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
//               </h4>
//               <div className="flex flex-col space-y-3 mt-4">
//                 {['🌟 #ReactDevs', '🚀 #TechHub'].map((community, idx) => (
//                   <div
//                     key={idx}
//                     className={`p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2 text-sm font-medium text-gray-800 cursor-pointer`}
//                   >
//                     <span>{community.split(' ')[0]}</span>
//                     <span>{community.split(' ')[1]}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* Footer Section */}
//             <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//               <p className={`text-base font-bold ${isDarkMode ? 'text-gray-200' : 'text-gray-800'} mb-3`}>ConnectSphere</p>
//               <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>© 2025 | 10M+ Users</p>
//               <div className="flex flex-col space-y-2 mb-4">
//                 {['About', 'Contact', 'Privacy'].map((link, idx) => (
//                   <div
//                     key={idx}
//                     className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
//                   >
//                     <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
//                       {link}
//                     </a>
//                   </div>
//                 ))}
//               </div>
//               <div className="flex space-x-6">
//                 {['🐦', '📘', '📸'].map((icon, idx) => (
//                   <div
//                     key={idx}
//                     className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
//                   >
//                     <span className="text-xl cursor-pointer hover:text-blue-600 transition-colors duration-200">{icon}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </aside>
//         )}

//         {/* Main Content */}
//         <main className={`w-full ${isSidebarOpen ? 'md:w-2/4' : 'md:w-3/4'} p-6 flex flex-col items-center`}>
//           {/* Post Input */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-10 w-full max-w-2xl">
//             <input
//               type="text"
//               placeholder="Post Title"
//               className={`w-full py-3 px-5 rounded-full border-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white/70 border-gray-200 text-gray-900'} mb-4 focus:outline-none focus:ring-2 focus:ring-gray-800 shadow-sm`}
//             />
//             <textarea
//               placeholder="What's on your mind?"
//               className={`w-full py-3 px-5 rounded-xl border-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-100' : 'bg-white/70 border-gray-200 text-gray-900'} resize-y h-32 mb-4 focus:outline-none focus:ring-2 focus:ring-gray-800 shadow-sm`}
//             ></textarea>
//             <div className="flex space-x-4">
//               {['B', 'I', '📷 Media'].map((btn, idx) => (
//                 <div
//                   key={idx}
//                   className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
//                 >
//                   <button className="border border-gray-800 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300">
//                     {btn}
//                   </button>
//                 </div>
//               ))}
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 ml-auto">
//                 <button className="border border-gray-800 text-gray-800 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300">
//                   Post
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Newsfeed */}
//           <div className="flex flex-col space-y-10 w-full max-w-2xl">
//             {[1, 2, 3, 4].map((postNum, index) => (
//               <div
//                 key={postNum}
//                 className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20"
//               >
//                 <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                   <div className="flex justify-between items-center mb-6">
//                     <div className="flex items-center relative group">
//                       <img src="https://via.placeholder.com/50" alt="User" className="w-14 h-14 rounded-full mr-4 border-2 border-gray-200 shadow-sm" />
//                       <div>
//                         <p
//                           className={`font-semibold text-lg ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} cursor-pointer`}
//                           onMouseEnter={(e) => (e.target.nextElementSibling.style.display = 'block')}
//                           onMouseLeave={(e) => (e.target.nextElementSibling.style.display = 'none')}
//                         >
//                           Alice Brown
//                         </p>
//                         <div
//                           className={`absolute top-full left-0 w-80 ${isDarkMode ? 'bg-gray-800' : 'bg-white/70'} shadow-2xl rounded-xl p-6 z-10 hidden border ${
//                             isDarkMode ? 'border-gray-700' : 'border-gray-200'
//                           }`}
//                         >
//                           <img src="https://via.placeholder.com/50" alt="User" className="w-16 h-16 rounded-full mb-3 border-2 border-gray-200" />
//                           <p className={`font-semibold text-base ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Alice Brown</p>
//                           <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-3`}>UI/UX Designer</p>
//                           <button className="border border-gray-800 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 hover:text-[#EAE4D5] transition-all duration-300 flex items-center gap-2">
//                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//                             </svg>
//                             Connect
//                           </button>
//                         </div>
//                         <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
//                           2h ago {postNum === 1 && <span className="text-green-500 ml-2 font-semibold">Live</span>}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="flex space-x-4">
//                       <span className={`cursor-pointer text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-600`} title="More options">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
//                         </svg>
//                       </span>
//                       <span className={`cursor-pointer text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-blue-600`} title="Close">
//                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                       </span>
//                     </div>
//                   </div>
//                   <p className={`text-base font-medium ${isDarkMode ? 'text-gray-100' : 'text-gray-800'} mb-6`}>Excited to share my latest project! 🚀 Check out the new UI design!</p>
//                   <div className="mb-6">
//                     <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                       <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Absolutely stunning! - Jane</p>
//                       <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Can’t wait to try this! - Mike</p>
//                     </div>
//                   </div>
//                   <div className="flex space-x-8 text-gray-600 text-sm font-semibold">
//                     <button className="flex items-center gap-1 text-xs" onClick={() => handleLike(index)}>
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                       </svg>
//                       {likes[index]} Likes
//                     </button>
//                     <button className="flex items-center gap-1 text-xs">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                       </svg>
//                       5 Comments
//                     </button>
//                     <button className="flex items-center gap-1 text-xs">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
//                       </svg>
//                       Share
//                     </button>
//                     <button className="flex items-center gap-1 text-xs">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                       </svg>
//                       Repost
//                     </button>
//                     <button className="flex items-center gap-1 text-xs ml-auto">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
//                       </svg>
//                       Save
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside className="w-full md:w-1/4 p-6">
//           {/* Trending Now */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//             <h4 className="text-lg font-semibold text-gray-800 mb-4 relative">
//               Trending Now <span className="text-green-500 text-xs font-bold">Live</span>
//               <span className="absolute left-0 bottom-0 h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
//             </h4>
//             <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4">
//               <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} mb-2`}>Jane Smith - UI/UX Designer</p>
//               <a href="#" className="text-blue-600 hover:underline text-sm font-semibold flex items-center gap-2">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//                 </svg>
//                 Connect
//               </a>
//             </div>
//             <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//               <p className="text-sm font-semibold text-gray-800 mb-2">#TechTrends - 1.2K posts</p>
//             </div>
//           </div>
//           {/* Job Recommendations */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//             <h4 className="text-lg font-semibold text-gray-800 mb-4 relative">
//               Job Recommendations
//               <span className="absolute left-0 bottom-0 h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
//             </h4>
//             <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4">
//               <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} mb-1`}>Google - Senior Software Engineer</p>
//               <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Based on your skills</p>
//               <a href="#" className="text-blue-600 hover:underline text-sm font-semibold">Apply</a>
//             </div>
//             <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4">
//               <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} mb-1`}>Amazon - UI/UX Designer</p>
//               <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-2`}>Matches your profile</p>
//               <a href="#" className="text-blue-600 hover:underline text-sm font-semibold">Apply</a>
//             </div>
//             <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//               <a href="#" className="text-blue-600 hover:underline text-sm font-semibold block">See All Jobs</a>
//             </div>
//           </div>
//           {/* Recent Activity */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mb-8">
//             <h4 className="text-lg font-semibold text-gray-800 mb-4 relative">
//               Recent Activity
//               <span className="absolute left-0 bottom-0 h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
//             </h4>
//             <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mb-2">
//               <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>John shared a post 1h ago</p>
//             </div>
//             <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//               <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>Mike liked your comment</p>
//             </div>
//           </div>
//           {/* Quick Widgets */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h4 className="text-lg font-semibold text-gray-800 mb-4 relative">
//               Quick Widgets
//               <span className="absolute left-0 bottom-0 h-1 w-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></span>
//             </h4>
//             <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mb-2">
//               <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>🌤️ 28°C, Sunny</p>
//             </div>
//             <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//               <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>📅 Today: Meeting at 3 PM</p>
//             </div>
//           </div>
//         </aside>
//       </div>

//       {/* Custom Styles */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
//         body { font-family: 'Inter', sans-serif; }
//         .scrollbar-hidden::-webkit-scrollbar { display: none; }
//         .scrollbar-hidden { scrollbar-width: none; }
//         @media (max-width: 768px) {
//           .flex.mt-20 { flex-direction: column; }
//           aside, main { width: 100%; padding: 1rem; }
//           .max-w-2xl { max-width: 100%; }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Test;






///=========================================================================================================================================================



// eslint-disable-next-line no-unused-vars
// import React from 'react';

// const dummySuggestions = [
//   {
//     id: 1,
//     name: "Sakshi Pandey",
//     title: "Attended Technocrats Institute Of Technology",
//     mutuals: "Ankit and 51 other mutual connections",
//     image: "https://randomuser.me/api/portraits/women/65.jpg"
//   },
//   {
//     id: 2,
//     name: "Shreyansh Khatarkar",
//     title: "SCADA, IoT, Power System",
//     mutuals: "Ankit and 23 other mutual connections",
//     image: "https://randomuser.me/api/portraits/men/45.jpg"
//   },
//   {
//     id: 3,
//     name: "Chinmay Yadav",
//     title: "Student | Learner | SGSITS",
//     mutuals: "Deepak and 6 other mutual connections",
//     image: "https://randomuser.me/api/portraits/men/52.jpg"
//   },
//   {
//     id: 4,
//     name: "Amisha Patel",
//     title: "Pre-Final Year",
//     mutuals: "Ankit and 45 other mutual connections",
//     image: "https://randomuser.me/api/portraits/women/48.jpg"
//   }
// ];

// const NetworkPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-white text-gray-900 font-sans p-4 md:p-6">
//       <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-6">
//        <div className="w-full max-w-sm mx-auto bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//   <h2 className="text-xl font-semibold mb-4">Manage my network</h2>

//   <div className="flex flex-col gap-3">
//     {[
//       { label: 'Connections', count: 3288 },
//       { label: 'Contacts', count: 523 },
//       { label: 'Following & followers' },
//       { label: 'Groups', count: 7 },
//       { label: 'Events', count: 3 },
//       { label: 'Pages', count: 168 },
//       { label: 'Newsletters', count: 51 }
//     ].map((item, index) => (
//       <div
//         key={index}
//         className="flex justify-between items-center p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
//       >
//         <span className="text-gray-800 font-medium">{item.label}</span>
//         {item.count !== undefined && (
//           <span className="text-sm text-gray-600 font-semibold">{item.count}</span>
//         )}
//       </div>
//     ))}
//   </div>
// </div>


//         <div className="flex-1 flex flex-col gap-6">
//           <div className="flex justify-between bg-white/30 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/20">
//             <div className="flex gap-4">
//               <button className="text-blue-700 font-semibold border-b-2 border-blue-700 pb-1">Grow</button>
//               <button className="text-gray-600 hover:text-blue-700 transition">Catch up</button>
//             </div>
//             <div className="text-red-500 font-bold">●</div>
//           </div>

//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/20">
//             <h3 className="text-lg font-semibold mb-2">Complete the puzzle!</h3>
//             <p className="text-sm text-gray-700 mb-4">We need a few more pieces of your profile to suggest the best people to connect with.</p>
//             <div className="flex items-center justify-between">
//               <button className="bg-blue-700 text-white py-2 px-4 rounded-xl hover:bg-blue-800">Add Connections</button>
//               <span className="text-sm text-gray-600">12% complete</span>
//             </div>
//           </div>

//           <div className="bg-gradient-to-r from-[#f2f9ff] to-[#e6f2ff] p-4 rounded-2xl border border-blue-200 shadow-lg">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h4 className="text-blue-800 font-bold mb-1">See who’s viewed your profile</h4>
//                 <p className="text-sm text-gray-700">Upgrade to Premium to unlock this feature and more insights.</p>
//               </div>
//               <button className="text-sm text-blue-700 font-semibold hover:underline">Try Premium</button>
//             </div>
//           </div>

//      <div className="w-full bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mt-8">
//   <h4 className="text-xl font-semibold text-gray-900 mb-6">People You May Know</h4>

//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//     {dummySuggestions.map(person => (
//       <div
//         key={person.id}
//         className="bg-white/70 rounded-xl p-5 shadow-lg flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
//       >
//         <img
//           src={person.image}
//           alt={person.name}
//           className="w-20 h-20 rounded-full object-cover mb-4"
//         />
//         <h3 className="font-semibold text-gray-800 text-lg">{person.name}</h3>
//         <p className="text-sm text-gray-600 line-clamp-2">{person.title}</p>

//         <p className="text-xs text-gray-500 mb-4">{person.mutuals}</p>

//         <button className="w-full bg-blue-700 text-white py-2 rounded-full text-sm font-medium hover:bg-blue-800 transition">
//           Connect
//         </button>
//       </div>
//     ))}
//   </div>
//      </div>

//        <div className="w-full bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mt-8">
//   <h2 className="text-xl font-semibold text-gray-900 mb-6">Explore Premium Profiles</h2>

//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//     {[
//       {
//         name: "Ashwin Raghavan",
//         title: "Design Generalist | Independent Creative",
//         img: "/avatars/ashwin.jpg",
//         status: "follow"
//       },
//       {
//         name: "JAMI ESWAR ANIL KUMAR",
//         title: "Multifaceted Professional | HR",
//         img: "/avatars/jami.jpg",
//         status: "following"
//       },
//       {
//         name: "Chinmay Wahi",
//         title: "Founder at Krunk.ai | D2C Enthusiast",
//         img: "/avatars/chinmay.jpg",
//         status: "pending"
//       },
//       {
//         name: "Amit Kumar Paul",
//         title: "Business Owner @ Kumar & Sons",
//         img: "/avatars/amit.jpg",
//         status: "follow"
//       }
//     ].map((user, index) => (
//       <div
//         key={index}
//         className="bg-white/70 rounded-xl p-5 shadow-lg flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
//       >
//         <img
//           src={user.img}
//           alt={user.name}
//           className="w-20 h-20 rounded-full object-cover mb-4"
//         />
//         <h3 className="font-semibold text-gray-800 text-lg">{user.name}</h3>
//         <p className="text-sm text-gray-600 line-clamp-2">{user.title}</p>

//         {user.status === "follow" && (
//           <button className="mt-3 px-4 py-1 border border-blue-600 text-blue-600 rounded-full text-sm hover:bg-blue-50 transition">
//             + Follow
//           </button>
//         )}
//         {user.status === "following" && (
//           <button className="mt-3 px-4 py-1 border border-gray-400 text-gray-700 rounded-full text-sm cursor-default">
//             ✓ Following
//           </button>
//         )}
//         {user.status === "pending" && (
//           <button className="mt-3 px-4 py-1 border border-gray-400 text-gray-700 rounded-full text-sm cursor-default">
//             ⏳ Pending
//           </button>
//         )}
//       </div>
//     ))}
//   </div>
//         </div>
//         {/* === Existing LinkedIn-style Suggestion Section === */}
//                 <div className="w-full bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//   <h2 className="text-base font-semibold mb-4 text-gray-700">
//     People who are in the Technology, Information and Internet industry also follow these people
//     <span className="float-right text-blue-600 hover:underline cursor-pointer text-sm">Show all</span>
//   </h2>

//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
//     {/* Card 1 */}
//     <div className="bg-white rounded-xl shadow hover:shadow-md transition">
//       <div className="relative h-20 w-full">
//         <img src="/banner1.jpg" className="w-full h-full object-cover rounded-t-xl" alt="Banner" />
//         <button className="absolute top-2 right-2 bg-black/60 text-white text-xs rounded-full px-1">✕</button>
//       </div>
//       <div className="flex flex-col items-center p-4 -mt-8">
//         <img src="https://images.unsplash.com/photo-1556740749-887f6717d7e4" className="w-16 h-16 rounded-full border-4 border-white object-cover shadow" />
//         <h3 className="font-semibold mt-2">Kushal Vijay <span className="text-blue-600">✔</span></h3>
//         <p className="text-sm text-gray-600 text-center">Software Engineer 2 @Microsoft • 165K LinkedIn</p>
//         <p className="text-xs text-gray-500 mt-1">Aman, Muskan and 198 others you know followed</p>
//         <button className="mt-3 px-4 py-1 text-sm border border-blue-600 rounded-full text-blue-600 hover:bg-blue-50">+ Follow</button>
//       </div>
//     </div>

//     {/* Repeat other cards similarly (Vanshika, Yugali...) */}
//   </div>
//               </div>

// {/* === New Section Below: Explore Premium Profiles === */}
//           <div className="w-full bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 mt-8">
//   <h2 className="text-xl font-bold text-gray-800 mb-4">Explore Premium Profiles</h2>

//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
//     {/* Sample Premium Card */}
//     <div className="bg-gradient-to-r from-yellow-100 to-pink-100 rounded-xl shadow-lg p-5">
//       <img src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33" className="w-16 h-16 rounded-full border-2 border-yellow-500 mb-3" />
//       <h3 className="text-lg font-semibold">Ananya Dev <span className="text-yellow-500">★</span></h3>
//       <p className="text-sm text-gray-700 mt-1">AI Researcher • 120K followers • Speaker at Google DevFest</p>
//       <button className="mt-4 w-full px-4 py-2 rounded-full bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition">View Profile</button>
//     </div>

//     {/* Add more premium cards as needed */}
//   </div>
//            </div>


//         </div>
//       </div>
//     </div>
//   );
// };

// export default NetworkPage;
//=============================================================================================================================


// // eslint-disable-next-line no-unused-vars
// import React from 'react';

// const dummySuggestions = [
//   {
//     id: 1,
//     name: "Sakshi Pandey",
//     title: "Attended Technocrats Institute Of Technology",
//     mutuals: "Ankit and 51 other mutual connections",
//     image: "https://randomuser.me/api/portraits/women/65.jpg"
//   },
//   {
//     id: 2,
//     name: "Shreyansh Khatarkar",
//     title: "SCADA, IoT, Power System",
//     mutuals: "Ankit and 23 other mutual connections",
//     image: "https://randomuser.me/api/portraits/men/45.jpg"
//   },
//   {
//     id: 3,
//     name: "Chinmay Yadav",
//     title: "Student | Learner | SGSITS",
//     mutuals: "Deepak and 6 other mutual connections",
//     image: "https://randomuser.me/api/portraits/men/52.jpg"
//   },
//   {
//     id: 4,
//     name: "RK", // Added "RK" user
//     title: "Full-Stack Developer",
//     mutuals: "Ankit and 45 other mutual connections",
//     image: "https://randomuser.me/api/portraits/men/88.jpg" // Replace with your RK image URL
//   }
// ];

// const NetworkPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans p-4 md:p-8">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
//         {/* Sidebar: Manage My Network */}
//         <div className="w-full lg:w-80 bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/30">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage My Network</h2>
//           <div className="flex flex-col gap-4">
//             {[
//               { label: 'Connections', count: 3288 },
//               { label: 'Contacts', count: 523 },
//               { label: 'Following & Followers' },
//               { label: 'Groups', count: 7 },
//               { label: 'Events', count: 3 },
//               { label: 'Pages', count: 168 },
//               { label: 'Newsletters', count: 51 }
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className="flex justify-between items-center p-4 bg-white/60 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
//               >
//                 <span className="text-gray-800 font-medium">{item.label}</span>
//                 {item.count !== undefined && (
//                   <span className="text-sm text-gray-600 font-semibold">{item.count}</span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col gap-8">
//           {/* Tabs: Grow & Catch Up */}
//           <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-5 shadow-xl border border-white/30">
//             <div className="flex gap-6">
//               <button className="text-blue-700 font-semibold border-b-2 border-blue-700 pb-2">Grow</button>
//               <button className="text-gray-600 hover:text-blue-700 transition">Catch Up</button>
//             </div>
//           </div>

//           {/* Profile Completion */}
//           <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/30">
//             <h3 className="text-xl font-bold text-gray-800 mb-3">Complete Your Profile!</h3>
//             <p className="text-sm text-gray-700 mb-4">Add more details to your profile to connect with the right people.</p>
//             <div className="flex items-center justify-between">
//               <button className="bg-blue-600 text-white py-2 px-6 rounded-xl hover:bg-blue-700 transition">Add Connections</button>
//               <span className="text-sm text-gray-600">12% complete</span>
//             </div>
//           </div>

//           {/* Premium Banner */}
//           <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-3xl border border-blue-200 shadow-lg">
//             <div className="flex justify-between items-start">
//               <div>
//                 <h4 className="text-blue-800 font-bold text-lg mb-2">Who’s Viewed Your Profile?</h4>
//                 <p className="text-sm text-gray-700">Unlock Premium to see profile viewers and more insights.</p>
//               </div>
//               <button className="text-sm text-blue-700 font-semibold hover:underline">Try Premium</button>
//             </div>
//           </div>

//           {/* People You May Know */}
//           <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/30">
//             <h4 className="text-2xl font-bold text-gray-800 mb-6">People You May Know</h4>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {dummySuggestions.map(person => (
//                 <div
//                   key={person.id}
//                   className="bg-white/80 rounded-xl p-5 shadow-lg flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <img
//                     src={person.image}
//                     alt={person.name}
//                     className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-100"
//                     onError={(e) => { e.target.src = 'https://via.placeholder.com/80'; }}
//                   />
//                   <h3 className="font-semibold text-gray-800 text-lg">{person.name}</h3>
//                   <p className="text-sm text-gray-600 line-clamp-2">{person.title}</p>
//                   <p className="text-xs text-gray-500 mt-2 mb-4">{person.mutuals}</p>
//                   <button className="w-full bg-blue-600 text-white py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
//                     Connect
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Explore Premium Profiles */}
//           <div className="w-full bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/30">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Premium Profiles</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {[
//                 {
//                   name: "Ashwin Raghavan",
//                   title: "Design Generalist | Independent Creative",
//                   img: "https://randomuser.me/api/portraits/men/30.jpg",
//                   status: "follow"
//                 },
//                 {
//                   name: "JAMI ESWAR ANIL KUMAR",
//                   title: "Multifaceted Professional | HR",
//                   img: "https://randomuser.me/api/portraits/men/31.jpg",
//                   status: "following"
//                 },
//                 {
//                   name: "Chinmay Wahi",
//                   title: "Founder at Krunk.ai | D2C Enthusiast",
//                   img: "https://randomuser.me/api/portraits/men/32.jpg",
//                   status: "pending"
//                 },
//                 {
//                   name: "Amit Kumar Paul",
//                   title: "Business Owner @ Kumar & Sons",
//                   img: "https://randomuser.me/api/portraits/men/33.jpg",
//                   status: "follow"
//                 }
//               ].map((user, index) => (
//                 <div
//                   key={index}
//                   className="bg-white/80 rounded-xl p-5 shadow-lg flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <img
//                     src={user.img}
//                     alt={user.name}
//                     className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-gray-100"
//                     onError={(e) => { e.target.src = 'https://via.placeholder.com/80'; }}
//                   />
//                   <h3 className="font-semibold text-gray-800 text-lg">{user.name}</h3>
//                   <p className="text-sm text-gray-600 line-clamp-2">{user.title}</p>
//                   {user.status === "follow" && (
//                     <button className="mt-3 px-4 py-1 border border-blue-600 text-blue-600 rounded-full text-sm hover:bg-blue-50 transition">
//                       + Follow
//                     </button>
//                   )}
//                   {user.status === "following" && (
//                     <button className="mt-3 px-4 py-1 border border-gray-400 text-gray-700 rounded-full text-sm cursor-default">
//                       ✓ Following
//                     </button>
//                   )}
//                   {user.status === "pending" && (
//                     <button className="mt-3 px-4 py-1 border border-gray-400 text-gray-700 rounded-full text-sm cursor-default">
//                       ⏳ Pending
//                     </button>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* LinkedIn-style Suggestion Section */}
//           <div className="w-full bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/30">
//             <h2 className="text-xl font-bold text-gray-800 mb-6">
//               People in Technology, Information, and Internet Industry
//               <span className="float-right text-blue-600 hover:underline cursor-pointer text-sm">Show all</span>
//             </h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 {
//                   name: "Kushal Vijay",
//                   title: "Software Engineer 2 @Microsoft • 165K LinkedIn",
//                   mutuals: "Aman, Muskan and 198 others you know followed",
//                   profileImg: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
//                   bannerImg: "/banner1.jpg"
//                 },
//                 {
//                   name: "RK", // Added "RK" user
//                   title: "Full-Stack Developer • 50K followers",
//                   mutuals: "Ankit and 45 others you know followed",
//                   profileImg: "https://randomuser.me/api/portraits/men/88.jpg", // Replace with your RK image URL
//                   bannerImg: "/banner2.jpg"
//                 },
//                 {
//                   name: "Vanshika Sharma",
//                   title: "Product Manager @Google • 80K LinkedIn",
//                   mutuals: "Deepak and 30 others you know followed",
//                   profileImg: "https://randomuser.me/api/portraits/women/50.jpg",
//                   bannerImg: "/banner3.jpg"
//                 }
//               ].map((person, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <div className="relative h-24 w-full">
//                     <img
//                       src={person.bannerImg}
//                       alt="Banner"
//                       className="w-full h-full object-cover rounded-t-xl"
//                       onError={(e) => { e.target.src = 'https://via.placeholder.com/300x96'; }}
//                     />
//                     <button className="absolute top-2 right-2 bg-black/60 text-white text-xs rounded-full px-2 py-1 hover:bg-black/80 transition">
//                       ✕
//                     </button>
//                   </div>
//                   <div className="flex flex-col items-center p-5 -mt-10">
//                     <img
//                       src={person.profileImg}
//                       alt={person.name}
//                       className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-md"
//                       onError={(e) => { e.target.src = 'https://via.placeholder.com/64'; }}
//                     />
//                     <h3 className="font-semibold text-gray-800 mt-3 flex items-center">
//                       {person.name} <span className="text-blue-600 ml-1">✔</span>
//                     </h3>
//                     <p className="text-sm text-gray-600 text-center line-clamp-2">{person.title}</p>
//                     <p className="text-xs text-gray-500 mt-2">{person.mutuals}</p>
//                     <button className="mt-4 px-4 py-1 text-sm border border-blue-600 rounded-full text-blue-600 hover:bg-blue-50 transition">
//                       + Follow
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Explore Premium Profiles (Updated) */}
//           <div className="w-full bg-white/40 backdrop-blur-xl rounded-3xl p-6 shadow-xl border border-white/30 mt-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Premium Profiles</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 {
//                   name: "Ananya Dev",
//                   title: "AI Researcher • 120K followers • Speaker at Google DevFest",
//                   img: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33"
//                 },
//                 {
//                   name: "Rohan Kapoor",
//                   title: "CTO @TechStartup • 90K followers",
//                   img: "https://randomuser.me/api/portraits/men/75.jpg"
//                 },
//                 {
//                   name: "Priya Mehra",
//                   title: "Data Scientist • 150K followers • TEDx Speaker",
//                   img: "https://randomuser.me/api/portraits/women/60.jpg"
//                 }
//               ].map((user, index) => (
//                 <div
//                   key={index}
//                   className="bg-gradient-to-r from-yellow-50 to-pink-50 rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
//                 >
//                   <img
//                     src={user.img}
//                     alt={user.name}
//                     className="w-16 h-16 rounded-full border-2 border-yellow-500 mb-4 object-cover"
//                     onError={(e) => { e.target.src = 'https://via.placeholder.com/64'; }}
//                   />
//                   <h3 className="text-lg font-semibold text-gray-800 flex items-center">
//                     {user.name} <span className="text-yellow-500 ml-1">★</span>
//                   </h3>
//                   <p className="text-sm text-gray-700 mt-2 line-clamp-2">{user.title}</p>
//                   <button className="mt-4 w-full px-4 py-2 rounded-full bg-yellow-500 text-white font-medium hover:bg-yellow-600 transition">
//                     View Profile
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NetworkPage;


//=======================================================================================================================

// // JobsPage.js

// // eslint-disable-next-line no-unused-vars
// import React from 'react';

// const JobsPage = () => {
//   const suggestedSearches = [
//     { term: "Co-Founder" },
//     { term: "Founder" },
//     { term: "Entrepreneur In Residence" },
//     { term: "Founding BOARD Member" },
//   ];

//   const premiumJobs = [
//     {
//       id: 1,
//       title: "Co-Founder",
//       company: "Klayworkz",
//       location: "Brista-KlayBar Art Cafe · Karnataka, India (REMOTE)",
//       match: "Matches your Easy Apply preferences",
//     },
//     {
//       id: 2,
//       title: "Startup Founder",
//       company: "Pashet India",
//       location: "REMOTE",
//       match: "2 weeks ago · Easy Apply",
//     },
//   ];

//   const applyItems = [
//     {
//       id: 1,
//       title: "Senior Developer",
//       company: "TechCorp",
//       status: "Applied 2 days ago",
//       action: "View Application",
//     },
//     {
//       id: 2,
//       title: "Product Manager",
//       company: "InnovateX",
//       status: "Applied 5 days ago",
//       action: "View Application",
//     },
//     {
//       id: 3,
//       title: "UX Designer",
//       company: "DesignLabs",
//       status: "Applied 1 week ago",
//       action: "View Application",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 py-6 px-4">
//         {/* Sidebar */}
//         <div className="w-full lg:w-64 flex flex-col gap-4">
//           {/* Profile Section */}
//         <div className="w-full lg:w-64 flex flex-col gap-4">
//   <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 h-fit">
//     <div className="p-4 bg-gradient-to-br from-white/60 to-blue-50/60 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="flex items-center">
//         <img
//           src="https://randomuser.me/api/portraits/men/88.jpg" // Replace with your "rk" image URL
//           alt="Profile"
//           className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300"
//           onError={(e) => { e.target.src = 'https://via.placeholder.com/48'; }}
//         />
//         <div>
//           <h2 className="text-base font-semibold text-gray-900">
//             Honey Sharma <span className="text-blue-600">●</span>
//           </h2>
//           <p className="text-sm text-gray-700">
//             Co-Founder @Throne8 | Empowering Professional Networking for Millions with AI
//           </p>
//           <p className="text-xs text-gray-600 mt-1">Bhopal, Madhya Pradesh</p>
//           <p className="text-xs text-gray-600">Throne Technology Private Limited (Throne8)</p>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Navigation Section */}
// </div>

//           {/* Navigation Section */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 h-fit">
//             <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//               <ul className="space-y-2">
//                 {[
//                   { label: "Preferences", icon: "⚙️", active: true },
//                   { label: "My jobs", icon: "📌" },
//                   { label: "My career insights", icon: "📊", highlight: true },
//                   { label: "Post a free job", icon: "📝", active: true },
//                   { label: "Manage job posts", icon: "📋" },
//                 ].map((item, index) => (
//                   <li
//                     key={index}
//                     className={`flex items-center p-2 rounded-md text-sm ${
//                       item.active ? 'bg-gray-100 text-blue-600 font-semibold' : 'text-gray-700 hover:bg-gray-100'
//                     }`}
//                   >
//                     <span className="mr-2">{item.icon}</span>
//                     <span>{item.label}</span>
//                     {item.highlight && (
//                       <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
//                         NEW
//                       </span>
//                     )}
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-4 text-xs text-gray-500">
//                 <p>About · Accessibility · Help Center</p>
//                 <p>Privacy & Terms · Ad Choices</p>
//                 <p>Advertising · Business Services</p>
//                 <p className="mt-2 flex items-center">
//                   <img
//                     src="https://via.placeholder.com/20"
//                     alt="LinkedIn"
//                     className="w-5 h-5 mr-1"
//                   />
//                   Get the LinkedIn app · More
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col gap-6">
//           {/* Suggested Job Searches */}
//          <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//   <h2 className="text-lg font-semibold text-gray-800 mb-4">Suggested job searches</h2>
//   <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//     <div className="flex flex-wrap gap-2">
//       {suggestedSearches.map((search, index) => (
//         <button
//           key={index}
//           className="flex items-center px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full hover:bg-gray-300 transition"
//         >
//           <span className="mr-1">🔍</span> {search.term}
//         </button>
//       ))}
//     </div>
//   </div>
//          </div>

//           {/* Premium Jobs Section */}
//            <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//   <div className="flex items-center mb-4">
//     <span className="bg-orange-600 text-white text-xs font-semibold px-2 py-1 rounded mr-2">PREMIUM</span>
//     <h2 className="text-lg font-semibold text-gray-800">
//       Jobs where you’re more likely to hear back
//     </h2>
//   </div>
//   <p className="text-sm text-gray-700 mb-4">
//     Stand out to recruiters with these jobs personalized for you by Abhinav and millions of other members.
//   </p>
//   <button className="w-full bg-blue-700 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-800 transition mb-4">
//     Try Premium for ₹0
//   </button>
//   <p className="text-xs text-gray-600 mb-4">
//     1-month free trial. Cancel anytime. We’ll remind you 7 days before your trial ends.
//   </p>

//   <div className="space-y-4">
//     {premiumJobs.map((job) => (
//       <div
//         key={job.id}
//         className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
//       >
//         <div className="flex items-start">
//           <img
//             src={`https://via.placeholder.com/40?text=${job.company[0]}`}
//             alt={job.company}
//             className="w-10 h-10 rounded-md mr-3"
//           />
//           <div className="flex-1">
//             <h3 className="text-sm font-semibold text-blue-600 hover:underline cursor-pointer">
//               {job.title}
//             </h3>
//             <p className="text-sm text-gray-700">{job.company}</p>
//             <p className="text-xs text-gray-600">{job.location}</p>
//             <p className="text-xs text-gray-600 mt-1">{job.match}</p>
//           </div>
//           <button className="text-gray-600 hover:text-gray-800">✕</button>
//         </div>
//       </div>
//     ))}
//   </div>

//   <button className="w-full text-blue-600 text-sm font-semibold hover:underline mt-4">
//     Show all →
//   </button>
//            </div>

//           {/* Apply Section: Box Inside Box Design */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h2 className="text-xl font-bold text-gray-800 mb-6">Your Applications</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//               {applyItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
//                 >
//                   <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
//                   <p className="text-xs text-gray-600 mt-1">{item.company}</p>
//                   <p className="text-xs text-gray-500 mt-2">{item.status}</p>
//                   <button className="mt-3 w-full bg-blue-600 text-white py-1 rounded-md text-sm font-medium hover:bg-blue-700 transition">
//                     {item.action}
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//           {/* Explore with Job Collections */}
//          <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//   <h2 className="text-xl font-bold text-gray-800 mb-4">Explore with job collections</h2>
//   <div className="space-y-4">
//     {/* Job Collection 1 */}
//     <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="flex items-start">
//         <img
//           src="https://via.placeholder.com/40"
//           alt="Job Icon"
//           className="w-10 h-10 rounded-md mr-3"
//         />
//         <div className="flex-1">
//           <h3 className="text-sm font-semibold text-blue-600 hover:underline cursor-pointer">
//             Remote FullStack Developer
//           </h3>
//           <p className="text-sm text-gray-600">Turing · Kolkata, West Bengal, India (REMOTE)</p>
//           <p className="text-xs text-gray-500 mt-1">Promoted · Be an early applicant</p>
//         </div>
//         <button className="text-gray-500 hover:text-gray-700">✕</button>
//       </div>
//     </div>

//     {/* Job Collection 2 */}
//     <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="flex items-start">
//         <img
//           src="https://via.placeholder.com/40"
//           alt="Job Icon"
//           className="w-10 h-10 rounded-md mr-3"
//         />
//         <div className="flex-1">
//           <h3 className="text-sm font-semibold text-blue-600 hover:underline cursor-pointer">
//             Full Stack Developer Trainee (ReactJs + Nodejs + Mongodb+SQL)
//           </h3>
//           <p className="text-sm text-gray-600">Appsierra · Noida, Uttar Pradesh, India (REMOTE) · ₹1Y – ₹2Y</p>
//           <p className="text-xs text-gray-500 mt-1">1 month ago</p>
//         </div>
//         <button className="text-gray-500 hover:text-gray-700">✕</button>
//       </div>
//     </div>
//   </div>
//   <button className="w-full text-blue-600 text-sm font-semibold hover:underline mt-4">
//     Show all →
//   </button>
//           </div>

//            {/* Top Job Picks for You */}
//            <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//   <h2 className="text-xl font-bold text-gray-800 mb-2">Top job picks for you</h2>
//   <p className="text-sm text-gray-600 mb-4">
//     Based on your profile, preferences, and activity like applies, searches, and saves
//   </p>
//   <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//     <div className="flex items-start">
//       <img
//         src="https://via.placeholder.com/40"
//         alt="Job Icon"
//         className="w-10 h-10 rounded-md mr-3"
//       />
//       <div className="flex-1">
//         <h3 className="text-sm font-semibold text-blue-600 hover:underline cursor-pointer">
//           Build in Web3 | Founders, Creators, Dreamers wanted (Unpaid opportunity, experience & growth potential)
//         </h3>
//         <p className="text-sm text-gray-600">Rakoon.fun · Bengaluru, Karnataka, India (REMOTE)</p>
//         <p className="text-xs text-gray-500 mt-1 flex items-center">
//           <span className="mr-1">✅</span> Actively reviewing applicants
//         </p>
//         <p className="text-xs text-gray-500 mt-1">Promoted · <span className="text-blue-600">In</span> Easy Apply</p>
//       </div>
//       <button className="text-gray-500 hover:text-gray-700">✕</button>
//     </div>
//   </div>
//   <button className="w-full text-blue-600 text-sm font-semibold hover:underline mt-4">
//     Search for more jobs →
//   </button>
//          </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobsPage;



// // NotificationsPage.js
// // eslint-disable-next-line no-unused-vars
// import React from 'react';

// const NotificationsPage = () => {
//   const notifications = [
//     {
//       id: 1,
//       user: "Abhishek Shukla",
//       secondaryUser: "Sanjay Sharma",
//       action: 'liked your post: "I am thrilled to announce..."',
//       time: "3h ago",
//       image: "https://randomuser.me/api/portraits/men/20.jpg",
//     },
//     {
//       id: 2,
//       user: "Priya Mehra",
//       action: 'commented on your post: "Great insights! Looking forward to more updates."',
//       time: "5h ago",
//       image: "https://randomuser.me/api/portraits/women/30.jpg",
//     },
//     {
//       id: 3,
//       user: "Rohan Kapoor",
//       action: 'mentioned you in a comment: "Hey Honey, what do you think about this?"',
//       time: "1d ago",
//       image: "https://randomuser.me/api/portraits/men/40.jpg",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900 font-sans">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 py-6 px-4">
//         {/* Sidebar */}
//         <div className="w-full lg:w-64 flex flex-col gap-4">
//           {/* Profile Section */}
//          <div className="w-full lg:w-64 flex flex-col gap-4">
//   <div className="bg-gradient-to-br from-indigo-50/80 to-purple-50/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-indigo-200/50 h-fit">
//     <div className="p-4 bg-white/70 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
//       <div className="flex flex-col items-center">
//         <div className="relative mb-4">
//           <div className="absolute inset-0 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full blur-md opacity-70"></div>
//           <img
//             src="https://randomuser.me/api/portraits/men/88.jpg"
//             alt="Profile"
//             className="relative w-16 h-16 rounded-full object-cover border-2 border-white shadow-md hover:border-indigo-400 transition-all duration-300"
//             onError={(e) => { e.target.src = 'https://via.placeholder.com/64'; }}
//           />
//         </div>
//         <div className="text-center">
//           <div className="flex items-center justify-center gap-2">
//             <h2 className="text-lg font-bold text-gray-800 hover:text-gray-700 transition-all duration-300">
//               Honey Sharma
//             </h2>
//             <span className="text-blue-600 animate-pulse">●</span>
//           </div>
//           <p className="text-sm font-medium text-gray-600 mt-1">
//             Co-Founder @Throne8
//           </p>
//           <p className="text-xs text-gray-600 mt-1">
//             Empowering Professional Networking for Millions with AI
//           </p>
//           <p className="text-xs text-gray-500 mt-1">Bhopal, Madhya Pradesh</p>
//           <p className="text-xs text-gray-500">Throne Technology Private Limited (Throne8)</p>
//         </div>
//       </div>
//     </div>
//   </div>
//   {/* Navigation Section */}
// </div>

//           {/* Navigation Section */}
//           <div className="bg-gradient-to-br from-indigo-50/80 to-purple-50/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-indigo-200/50 h-fit">
//             <div className="p-4 bg-white/70 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
//               <ul className="space-y-2">
//                 {[
//                   { label: "All notifications", icon: "🔔", active: true },
//                   { label: "My posts", icon: "📝" },
//                   { label: "Mentions", icon: "💬", highlight: true },
//                   { label: "Connections", icon: "👥" },
//                   { label: "Messages", icon: "✉️" },
//                 ].map((item, index) => (
//                   <li
//                     key={index}
//                     className={`flex items-center p-2 rounded-md text-sm ${
//                       item.active ? 'bg-indigo-100 text-indigo-700 font-semibold' : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'
//                     } transition-all duration-300`}
//                   >
//                     <span className="mr-2">{item.icon}</span>
//                     <span>{item.label}</span>
//                     {item.highlight && (
//                       <span className="ml-auto bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
//                         NEW
//                       </span>
//                     )}
//                   </li>
//                 ))}
//               </ul>

//               <div className="mt-4 text-xs text-indigo-600">
//                 <p>About · Accessibility · Help Center</p>
//                 <p>Privacy & Terms · Ad Choices</p>
//                 <p>Advertising · Business Services</p>
//                 <p className="mt-2 flex items-center">
//                   <img
//                     src="https://via.placeholder.com/20"
//                     alt="LinkedIn"
//                     className="w-5 h-5 mr-1"
//                   />
//                   Get the LinkedIn app · More
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col gap-6">
//           {/* Notifications Section */}
//           <div className="bg-gradient-to-br from-indigo-50/80 to-purple-50/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-indigo-200/50">
//             <div className="p-4 bg-white/70 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500">
//               {/* Header */}
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-xl font-bold text-indigo-900">All notifications</h2>
//                 <button className="text-indigo-600 hover:text-indigo-800 text-sm font-semibold transition">
//                   Mark all as read
//                 </button>
//               </div>

//               {/* Tabs */}
//               <div className="flex gap-4 mb-4 border-b border-indigo-200">
//                 <button className="pb-2 text-indigo-700 font-semibold border-b-2 border-indigo-700">
//                   All
//                 </button>
//                 <button className="pb-2 text-gray-600 hover:text-indigo-700 transition">
//                   My posts
//                 </button>
//                 <button className="pb-2 text-gray-600 hover:text-indigo-700 transition">
//                   Mentions
//                 </button>
//               </div>

//               {/* Notification Cards */}
//               <div className="space-y-4">
//                 {notifications.map((notification) => (
//                   <div
//                     key={notification.id}
//                     className="flex items-start p-3 bg-indigo-50/50 rounded-lg hover:bg-indigo-100/70 transition-all duration-300 group"
//                   >
//                     <img
//                       src={notification.image}
//                       alt={notification.user}
//                       className="w-10 h-10 rounded-full object-cover mr-3 group-hover:ring-2 group-hover:ring-indigo-400 transition-all duration-300"
//                       onError={(e) => { e.target.src = 'https://via.placeholder.com/40'; }}
//                     />
//                     <div className="flex-1">
//                       <p className="text-sm text-gray-800">
//                         <span className="font-semibold text-indigo-800">{notification.user}</span>
//                         {notification.secondaryUser && (
//                           <>
//                             {' '}and{' '}
//                             <span className="font-semibold text-indigo-800">{notification.secondaryUser}</span>
//                           </>
//                         )}
//                         {' '}{notification.action}
//                       </p>
//                       <p className="text-xs text-indigo-600 mt-1">{notification.time}</p>
//                     </div>
//                     <button className="text-gray-600 hover:text-gray-800 transition">
//                       ✕
//                     </button>
//                   </div>
//                 ))}
//               </div>

//               {/* Show More Button */}
//               <button className="w-full text-indigo-600 text-sm font-semibold hover:underline mt-4">
//                 Show more →
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotificationsPage;



// SettingsNotifications.jsx
// eslint-disable-next-line no-unused-vars
// import React from 'react';

// const SettingsNotifications = () => {
//   const sidebarItems = [
//     { name: 'Account preferences', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
//     { name: 'Sign in & security', icon: 'M12 11c0-1.1.9-2 2-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4zm-4 0c0-1.1.9-2 2-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4zm-4 0c0-1.1.9-2 2-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4z' },
//     { name: 'Visibility', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
//     { name: 'Data privacy', icon: 'M12 11c0-1.1.9-2 2-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4zm-4 0c0-1.1.9-2 2-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4zm-4 0c0-1.1.9-2 2-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4z' },
//     { name: 'Advertising data', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
//     { name: 'Notifications', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', active: true },
//   ];

//   const notificationItems = [
//     'Searching for a job',
//     'Hiring someone',
//     'Connecting with others',
//     'Network catch-up updates',
//     'Posting and commenting',
//     'Messaging',
//     'Groups',
//     'Pages',
//     'Attending events',
//     'News and reports',
//     'Updating your profile',
//     'Verifications',
//     'Games',
//   ];

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="flex w-full max-w-4xl bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//         {/* Sidebar */}
//         <div className="w-1/4 pr-6 border-r border-gray-200">
//           <h2 className="text-xl font-semibold mb-6 text-gray-800">Settings</h2>
//           <ul className="space-y-4">
//             {sidebarItems.map((item, index) => (
//               <li
//                 key={index}
//                 className={`flex items-center space-x-3 cursor-pointer ${
//                   item.active ? 'text-green-600 font-semibold' : 'text-gray-600 hover:text-gray-900'
//                 }`}
//               >
//                 <svg
//                   className="w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                 </svg>
//                 <span>{item.name}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="w-3/4 pl-6">
//           <h2 className="text-xl font-semibold mb-6 text-gray-800">Notifications you receive</h2>
//           <div className="grid grid-cols-2 gap-4">
//             {notificationItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex justify-between items-center"
//               >
//                 <span className="text-gray-700">{item}</span>
//                 <svg
//                   className="w-5 h-5 text-gray-500"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                 </svg>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsNotifications;








// // eslint-disable-next-line no-unused-vars
// import  { useState } from 'react';

// const SettingsNotifications = () => {
//   const accountPreferencesItems = [
//     { name: 'Profile Settings', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
//     { name: 'Email Preferences', icon: 'M16 12h2a4 4 0 010 8h-2m-8-8H6a4 4 0 010-8h2m4 8v8m0-16v8' },
//   ];

//   const signInSecurityItems = [
//     { name: 'Password', icon: 'M12 11c0-1.1.9-2 2-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4zm-4 0c0-1.1.9-2 2-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4zm-4 0c0-1.1.9-2 2-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4z' },
//     { name: 'Two-Factor Auth', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
//   ];

//   const visibilityItems = [
//     { name: 'Profile Visibility', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
//     { name: 'Activity Status', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
//   ];

//   const dataPrivacyItems = [
//     { name: 'Data Sharing', icon: 'M12 11c0-1.1.9-2 2-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4zm-4 0c0-1.1.9-2 2-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4zm-4 0c0-1.1.9-2 2-2h1a2 2 0 012 2v4a2 2 0 01-2 2h-1a2 2 0 01-2-2v-4z' },
//     { name: 'Privacy Settings', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
//   ];

//   const advertisingDataItems = [
//     { name: 'Ad Preferences', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
//     { name: 'Ad Tracking', icon: 'M9 5h6a2 2 0 012 2v10a2 2 0 01-2 2H9a2 2 0 01-2-2V7a2 2 0 012-2zm0 0V3m6 0v2' },
//   ];

//   const notificationItems = [
//     { name: 'Searching for a job', active: false },
//     { name: 'Hiring someone', active: false },
//     { name: 'Connecting with others', active: false },
//     { name: 'Network catch-up updates', active: false },
//     { name: 'Posting and commenting', active: false },
//     { name: 'Messaging', active: false },
//     { name: 'Groups', active: false },
//     { name: 'Pages', active: false },
//     { name: 'Attending events', active: false },
//     { name: 'News and reports', active: false },
//     { name: 'Updating your profile', active: false },
//     { name: 'Verifications', active: false },
//     { name: 'Games', active: false },
//   ];

//   const premiumItems = [
//     { name: 'Premium Features', icon: 'M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm7 14a3 3 0 110-6 3 3 0 010 6z' },
//     { name: 'Subscription Plans', icon: 'M12 8c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2s2-.9 2-2v-4c0-1.1-.9-2-2-2z' },
//     { name: 'Exclusive Benefits', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l9-5-9-5-9 5 9 5zm-9 5v-2l9-5 9 5v2H3z' },
//   ];

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="flex w-full max-w-5xl bg-white/30 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
//         {/* Sidebar */}
//         <div className="w-1/4 pr-6 border-r border-gray-200/50">
//           <h2 className="text-2xl font-semibold mb-8 text-gray-800">Settings</h2>
          
//           {/* Account Preferences Box */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Account preferences</h3>
//             <ul className="space-y-3">
//               {accountPreferencesItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
//                 >
//                   <svg
//                     className="w-5 h-5 text-gray-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                   </svg>
//                   <span className="text-base font-medium text-gray-700">{item.name}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Sign in & Security Box */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Sign in & security</h3>
//             <ul className="space-y-3">
//               {signInSecurityItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
//                 >
//                   <svg
//                     className="w-5 h-5 text-gray-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                   </svg>
//                   <span className="text-base font-medium text-gray-700">{item.name}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Visibility Box */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Visibility</h3>
//             <ul className="space-y-3">
//               {visibilityItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
//                 >
//                   <svg
//                     className="w-5 h-5 text-gray-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                   </svg>
//                   <span className="text-base font-medium text-gray-700">{item.name}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Data Privacy Box */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Data privacy</h3>
//             <ul className="space-y-3">
//               {dataPrivacyItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
//                 >
//                   <svg
//                     className="w-5 h-5 text-gray-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                   </svg>
//                   <span className="text-base font-medium text-gray-700">{item.name}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Advertising Data Box */}
//           <div className="mb-6">
//             <h3 className="text-lg font-semibold mb-4 text-gray-800">Advertising data</h3>
//             <ul className="space-y-3">
//               {advertisingDataItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
//                 >
//                   <svg
//                     className="w-5 h-5 text-gray-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                   </svg>
//                   <span className="text-base font-medium text-gray-700">{item.name}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Premium Section */}
//           <div className="pt-6 border-t border-gray-200/50">
//             <h3 className="text-xl font-semibold mb-6 text-gray-800">Premium</h3>
//             <ul className="space-y-3">
//               {premiumItems.map((item, index) => (
//                 <li
//                   key={index}
//                   className="flex items-center space-x-3 p-3 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
//                 >
//                   <svg
//                     className="w-5 h-5 text-gray-600"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                   </svg>
//                   <span className="text-base font-medium text-gray-700">{item.name}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="w-3/4 pl-6">
//           <h2 className="text-2xl font-semibold mb-8 text-gray-800">Notifications you receive</h2>
//           <div className="space-y-4">
//             {notificationItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="p-5 bg-white/50 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300 flex justify-between items-center border border-gray-100/50"
//               >
//                 <span className="text-gray-700 text-lg font-medium">{item.name}</span>
//                 <svg
//                   className="w-5 h-5 text-gray-500 hover:text-gray-700 transition-colors duration-300"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                 </svg>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsNotifications;


// eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';

// const SettingsPage = () => {
//   // State for toggling settings
//   const [autoplayVideos, setAutoplayVideos] = useState(true);
//   const [soundEffects, setSoundEffects] = useState(true);

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       {/* Outer Container without Scroll */}
//       <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 w-full max-w-lg">
//         {/* Profile Information Section */}
//         <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-3">Profile Information</h2>
//           <div className="space-y-3">
//             <div className="flex justify-between items-center cursor-pointer hover:text-blue-600">
//               <p className="text-gray-700">Name, location, and industry</p>
//               <span className="text-gray-500">→</span>
//             </div>
//             <div className="flex justify-between items-center cursor-pointer hover:text-blue-600">
//               <p className="text-gray-700">Personal demographic information</p>
//               <span className="text-gray-500">→</span>
//             </div>
//             <div className="flex justify-between items-center cursor-pointer hover:text-blue-600">
//               <p className="text-gray-700">Verifications</p>
//               <span className="text-gray-500">→</span>
//             </div>
//           </div>
//         </div>

//         {/* Display Section */}
//         <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-3">Display</h2>
//           <div className="flex justify-between items-center cursor-pointer hover:text-blue-600">
//             <p className="text-gray-700">Dark mode</p>
//             <span className="text-gray-500">→</span>
//           </div>
//         </div>

//         {/* General Preferences Section */}
//         <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-3">General Preferences</h2>
//           <div className="space-y-3">
//             <div className="flex justify-between items-center cursor-pointer hover:text-blue-600">
//               <p className="text-gray-700">Language</p>
//               <span className="text-gray-500">→</span>
//             </div>
//             <div className="flex justify-between items-center cursor-pointer hover:text-blue-600">
//               <p className="text-gray-700">Content language</p>
//               <span className="text-gray-500">→</span>
//             </div>
//             <div className="flex justify-between items-center cursor-pointer">
//               <p className="text-gray-700">Autoplay videos</p>
//               <div
//                 className="flex items-center space-x-2"
//                 onClick={() => setAutoplayVideos(!autoplayVideos)}
//               >
//                 <span className="text-gray-500">{autoplayVideos ? 'On' : 'Off'}</span>
//                 <span className="text-gray-500">→</span>
//               </div>
//             </div>
//             <div className="flex justify-between items-center cursor-pointer">
//               <p className="text-gray-700">Sound effects</p>
//               <div
//                 className="flex items-center space-x-2"
//                 onClick={() => setSoundEffects(!soundEffects)}
//               >
//                 <span className="text-gray-500">{soundEffects ? 'On' : 'Off'}</span>
//                 <span className="text-gray-500">→</span>
//               </div>
//             </div>
//             <div className="flex justify-between items-center cursor-pointer hover:text-blue-600">
//               <p className="text-gray-700">Showing profile photos</p>
//               <span className="text-gray-500">All LinkedIn members →</span>
//             </div>
//             <div className="flex justify-between items-center cursor-pointer hover:text-blue-600">
//               <p className="text-gray-700">Preferred Feed View</p>
//               <span className="text-gray-500">Most relevant posts (recommended) →</span>
//             </div>
//           </div>
//         </div>


//         {/* Syncing Options Section */}
//         <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-3">Syncing Options</h2>
//           <div className="space-y-3">
//             <div className="flex justify-between items-center cursor-pointer hover:text-blue-600">
//               <p className="text-gray-700">Sync calendar</p>
//               <span className="text-gray-500">→</span>
//             </div>
//             <div className="flex justify-between items-center cursor-pointer hover:text-blue-600">
//               <p className="text-gray-700">Sync contacts</p>
//               <span className="text-gray-500">→</span>
//             </div>
//           </div>
//         </div>

//         {/* Subscriptions & Payments Section */}
//         <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-3">Subscriptions & Payments</h2>
//           <div className="space-y-3">
//             <div className="flex justify-between items-center cursor-pointer hover:text-blue-600">
//               <p className="text-gray-700">Upgrade for FREE</p>
//               <span className="text-gray-500">→</span>
//             </div>
//             <div className="flex justify-between items-center cursor-pointer hover:text-blue-600">
//               <p className="text-gray-700">View purchase history</p>
//               <span className="text-gray-500">→</span>
//             </div>
//           </div>
//         </div>

//         {/* Partners & Services Section */}
//         <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-3">Partners & Services</h2>
//           <div className="flex justify-between items-center cursor-pointer hover:text-blue-600">
//             <p className="text-gray-700">Microsoft</p>
//             <span className="text-gray-500">→</span>
//           </div>
//         </div>

//         {/* Account Management Section */}
//         <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 mb-4">
//           <h2 className="text-lg font-bold text-gray-800 mb-3">Account Management</h2>
//           <div className="space-y-3">
//             <div className="flex justify-between items-center cursor-pointer hover:text-blue-600">
//               <p className="text-gray-700">Hibernate account</p>
//               <span className="text-gray-500">→</span>
//             </div>
//             <div className="flex justify-between items-center cursor-pointer hover:text-blue-600">
//               <p className="text-gray-700">Close account</p>
//               <span className="text-gray-500">→</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;

// eslint-disable-next-line no-unused-vars
// import React from 'react';

// const ProfileSettings = () => {
//   // Sample data for the settings sections
//   const profileData = [
//     { label: 'Connections', status: 'On' },
//     { label: 'Companies you follow', status: 'On' },
//     { label: 'Groups', status: 'On' },
//     { label: 'Education and skills', status: 'Schools & 4 more' },
//     { label: 'Job', status: 'Current job & 1 more' },
//     { label: 'Employer', status: 'Current company & 1 more' },
//     { label: 'Customized display format', status: 'On' },
//     { label: 'Profile location', status: 'On' },
//   ];

//   const activityData = [
//     { label: 'Inferred city location', status: 'On' },
//     { label: 'Interests and traits', status: 'On' },
//     { label: 'Age range', status: 'On' },
//     { label: 'Gender', status: 'On' },
//   ];

//   const thirdPartyData = [
//     { label: 'Ads by LinkedIn', status: 'On' },
//     { label: 'Interactions with businesses', status: 'On' },
//     { label: 'Ad-related actions', status: 'On' },
//   ];

//   // Section component for rendering each category
//   const Section = ({ title, items }) => (
//     <div className="mb-6">
//       <h2 className="text-lg font-semibold text-gray-800 mb-3">{title}</h2>
//       <div className="space-y-3">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex justify-between items-center"
//           >
//             <span className="text-gray-700">{item.label}</span>
//             <div className="flex items-center space-x-2">
//               <span className="text-gray-500">{item.status}</span>
//               <svg
//                 className="w-4 h-4 text-gray-500"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       {/* Outer container with Box Inside Box design */}
//       <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 w-full max-w-md">

//         {/* Profile Data Section */}
//         <Section title="Profile Data" items={profileData} />

//         {/* Activity and Inferred Data Section */}
//         <Section title="Activity and Inferred Data" items={activityData} />

//         {/* Third-Party Data Section */}
//         <Section title="Third-Party Data" items={thirdPartyData} />
//       </div>
//     </div>
//   );
// };

// export default ProfileSettings;


// eslint-disable-next-line no-unused-vars
// import React from 'react';

// const AccountAccess = () => {
//   // Data for the account access settings
//   const accountAccessData = [
//     { label: 'Email addresses', value: 'chaemasboneric0iTB6@gheril.com' },
//     { label: 'Phone numbers', value: '' },
//     { label: 'Change password', value: '' },
//     { label: 'Passkeys', value: '' },
//     { label: 'Where you\'re signed in', value: '' },
//     { label: 'Devices that remember your password', value: '' },
//     { label: 'Two-step verification', value: 'Off' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center p-4">
//       {/* Outer container */}
//       <div className="bg-[#F8F6F3] rounded-2xl p-6 shadow-2xl border border-gray-200 w-full max-w-md">
//         <h1 className="text-xl font-semibold text-[#333] mb-4">Account Access</h1>

//         {/* Inner cards container */}
//         <div className="space-y-3">
//           {accountAccessData.map((item, index) => (
//             <div
//               key={index}
//               className="p-4 bg-[#F9F9F9] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex justify-between items-center"
//             >
//               <div className="flex flex-col">
//                 <span className="text-[#333] font-medium">{item.label}</span>
//                 {item.value && (
//                   <span className="text-sm text-[#666]">{item.value}</span>
//                 )}
//               </div>
//               <div className="flex items-center space-x-2">
//                 {item.label === 'Two-step verification' && (
//                   <span className="text-sm text-[#D32F2F] font-medium">{item.value}</span>
//                 )}
//                 <svg
//                   className="w-4 h-4 text-[#666]"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountAccess;


// eslint-disable-next-line no-unused-vars
// import React from 'react';

// const ProfileAndActivityVisibility = () => {
//   // Data for the Profile & Network Visibility settings
//   const profileVisibilityData = [
//     { label: 'Profile viewing options', value: 'Your name and headline' },
//     { label: 'Page visit visibility', value: 'On' },
//     { label: 'Edit your public profile', value: '' },
//     { label: 'Who can see or download your email address', value: '' },
//     { label: 'Who can see your connections', value: 'On' },
//     { label: 'Who can see members you follow', value: 'Anyone on LinkedIn' },
//     { label: 'Who can see your last name', value: '' },
//     { label: 'Representing your organizations and interests', value: 'On' },
//     { label: 'Page owners exporting your data', value: 'Off' },
//     { label: 'Profile discovery and visibility off LinkedIn', value: '' },
//     { label: 'Profile discovery using email address', value: 'Anyone' },
//     { label: 'Profile discovery using phone number', value: 'Everyone' },
//     { label: 'Blocking', value: '' },
//   ];

//   // Data for the LinkedIn Activity Visibility settings
//   const activityData = [
//     { label: 'Manage active status', value: 'Your connections only' },
//     { label: 'Share job changes, education changes, and work anniversaries from profile', value: 'On' },
//     { label: 'Notify connections when you’re in the news', value: 'On' },
//     { label: 'Mentioned by others', value: 'On' },
//     { label: 'Followers', value: '' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F5F5F5] flex flex-col items-center justify-center p-4 space-y-6">
//       {/* Profile Visibility Section */}
//       <div className="bg-[#F8F6F3] rounded-2xl p-6 shadow-2xl border border-gray-200 w-full max-w-md">
//         <h1 className="text-xl font-semibold text-[#333] mb-4">Visibility of Your Profile & Network</h1>
//         <div className="space-y-3">
//           {profileVisibilityData.map((item, index) => (
//             <div
//               key={`profile-${index}`}
//               className="p-4 bg-[#F9F9F9] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex justify-between items-center"
//             >
//               <div className="flex flex-col">
//                 <span className="text-[#333] font-medium">{item.label}</span>
//                 {item.value && (
//                   <span className="text-sm text-[#666]">{item.value}</span>
//                 )}
//               </div>
//               <div className="flex items-center space-x-2">
//                 {item.label === 'Page owners exporting your data' && (
//                   <span className="text-sm text-[#D32F2F] font-medium">{item.value}</span>
//                 )}
//                 <svg
//                   className="w-4 h-4 text-[#666]"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* LinkedIn Activity Visibility Section */}
//       <div className="bg-[#F8F6F3] rounded-2xl p-6 shadow-2xl border border-gray-200 w-full max-w-md">
//         <h1 className="text-xl font-semibold text-[#333] mb-4">Visibility of Your LinkedIn Activity</h1>
//         <div className="space-y-3">
//           {activityData.map((item, index) => (
//             <div
//               key={`activity-${index}`}
//               className="p-4 bg-[#F9F9F9] rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex justify-between items-center"
//             >
//               <div className="flex flex-col">
//                 <span className="text-[#333] font-medium">{item.label}</span>
//                 {item.value && (
//                   <span className="text-sm text-[#666]">{item.value}</span>
//                 )}
//               </div>
//               <div className="flex items-center space-x-2">
//                 <svg
//                   className="w-4 h-4 text-[#666]"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileAndActivityVisibility;




//===========================================================================================================

// eslint-disable-next-line no-unused-vars
// import React from 'react';

// const ProfileViewers = () => {
//   // Data for "Viewers You Might Be Interested In"
//   const viewersData = [
//     { count: 8, company: 'OctaNet Services Pvt Ltd.' },
//     { count: 5, company: 'Vision Waves' },
//     { count: 4, company: 'Oriental Group of Institutes' },
//   ];

//   // Data for "Viewers You Can Browse for Free"
//   const freeViewersData = [
//     {
//       name: 'Sameer Chighariya',
//       rank: '1st',
//       title: 'Student at Oriental Group of Institutes',
//       time: '2h ago',
//       canMessage: true,
//     },
//     {
//       name: 'Shailendra Rai',
//       rank: '2nd',
//       title: 'Technical Architect',
//       time: '22h ago',
//       canMessage: false,
//     },
//     {
//       name: 'Rinku Tripathi',
//       rank: '1st',
//       title: 'Aspiring Software Developer | Python & AI Enthusiast | IOT | Expertise in Django & Flask | Open to Intern & Full-Time Roles',
//       time: '23h ago',
//       canMessage: true,
//     },
//   ];

//   // Data for "All Other Viewers" (10 users, including provided user IDs)
//   const allOtherViewersData = [
//     { title: 'User with ID 345ghjk67890abcdy3', userId: '345ghjk67890abcdy3' },
//     { title: 'User with ID 345ghjk67890abcdy4', userId: '345ghjk67890abcdy4' },
//     { title: 'Software Engineer at TechCorp', userId: 'user12345' },
//     { title: 'Data Analyst at DataWorks', userId: 'user67890' },
//     { title: 'Product Manager at InnovateLabs', userId: 'user11223' },
//     { title: 'Designer at CreativeStudio', userId: 'user44556' },
//     { title: 'Developer at CodeMasters', userId: 'user78901' },
//     { title: 'Marketing Specialist at BrandBoost', userId: 'user23456' },
//     { title: 'AI Researcher at FutureTech', userId: 'user56789' },
//     { title: 'Project Lead at NextGen', userId: 'user90123' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F3F2EF] p-6 flex flex-col md:flex-row items-start justify-between relative font-sans">
//       {/* Main Content (Left Side) */}
//       <div className="flex flex-col space-y-10 md:w-3/4 w-full mr-auto ml-4">
//         {/* Section 1: Who's Viewed Your Profile */}
//         <div className="bg-[#FFFFFF] rounded-2xl p-8 shadow-xl border border-[#E5E7EB] w-full max-w-xl">
//           <h1 className="text-3xl font-semibold text-[#0A66C2] mb-4">Who s Viewed Your Profile</h1>
//           <div className="flex items-center justify-between mb-6">
//             <button className="bg-[#10B981] text-white text-base font-medium px-5 py-2 rounded-lg shadow-sm hover:bg-gradient-to-r hover:from-[#10B981] hover:to-[#059669] transition-all duration-300">
//               Past 90 Days
//             </button>
//             <div>
//               <p className="text-4xl font-bold text-[#0A66C2]">445</p>
//               <p className="text-sm text-[#6B7280]">Profile viewers in the past 90 days</p>
//             </div>
//           </div>
//           <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">Viewers You Might Be Interested In</h2>
//           <div className="space-y-4">
//             {viewersData.map((viewer, index) => (
//               <div
//                 key={index}
//                 className="p-8 bg-[#F9FAFB] rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-[#F3F2EF] transition-all duration-300 flex items-center justify-between min-h-[100px]"
//               >
//                 <div className="flex items-center space-x-4">
//                   {/* Replace with actual image path */}
//                   <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
//                     <span className="text-gray-500 text-sm">Image</span>
//                   </div>
//                   <div>
//                     <p className="text-[#0A66C2] font-medium">{viewer.count} work at {viewer.company}</p>
//                   </div>
//                 </div>
//                 <button className="bg-[#0A66C2] text-white text-base font-medium px-5 py-1 rounded-lg shadow-sm hover:bg-gradient-to-r hover:from-[#0A66C2] hover:to-[#004182] transition-all duration-300">
//                   View
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Section 2: Viewers You Can Browse for Free */}
//         <div className="bg-[#FFFFFF] rounded-2xl p-8 shadow-xl border border-[#E5E7EB] w-full max-w-xl">
//           <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">Viewers You Can Browse for Free</h2>
//           <div className="space-y-4">
//             {freeViewersData.map((viewer, index) => (
//               <div
//                 key={`free-${index}`}
//                 className="p-8 bg-[#F9FAFB] rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-[#F3F2EF] transition-all duration-300 flex items-center justify-between min-h-[100px]"
//               >
//                 <div className="flex items-center space-x-4">
//                   {/* Replace with actual image path */}
//                   <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
//                     <span className="text-gray-500 text-sm">Image</span>
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center space-x-2">
//                       <p className="text-[#0A66C2] font-medium">{viewer.name}</p>
//                       <span className="text-[#6B7280] text-sm">• {viewer.rank}</span>
//                       {viewer.canMessage && (
//                         <svg
//                           className="w-4 h-4 text-[#10B981]"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             strokeWidth="2"
//                             d="M5 13l4 4L19 7"
//                           />
//                         </svg>
//                       )}
//                     </div>
//                     <p className="text-[#6B7280] text-sm">{viewer.title}</p>
//                     <p className="text-[#6B7280] text-xs">Viewed {viewer.time}</p>
//                   </div>
//                 </div>
//                 <button
//                   className={`text-base font-medium px-5 py-1 rounded-lg shadow-sm transition-all duration-300 flex items-center space-x-2 ${
//                     viewer.canMessage
//                       ? 'bg-[#0A66C2] text-white hover:bg-gradient-to-r hover:from-[#0A66C2] hover:to-[#004182]'
//                       : 'border border-[#E5E7EB] text-[#0A66C2] hover:bg-[#F3F2EF]'
//                   }`}
//                 >
//                   {viewer.canMessage ? (
//                     <svg
//                       className="w-4 h-4"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                       />
//                     </svg>
//                   ) : (
//                     <svg
//                       className="w-4 h-4"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2c0 .738.402 1.376 1 1.723V15a1 1 0 001 1h2a1 1 0 001-1v-2.277c.598-.347 1-.985 1-1.723zm-2-5a5 5 0 00-5 5c0 1.523.672 2.887 1.73 3.807l-.717 2.153A1 1 0 007 18h2.277c.347.598.985 1 1.723 1a2 2 0 002-2v-.277c.92-.598 1.558-1.598 1.723-2.723A5 5 0 0010 6z"
//                       />
//                     </svg>
//                   )}
//                   <span>Message</span>
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Section 3: All Other Viewers */}
//         <div className="bg-[#FFFFFF] rounded-2xl p-8 shadow-xl border border-[#E5E7EB] w-full max-w-xl">
//           <h2 className="text-2xl font-semibold text-[#0A66C2] mb-4">All Other Viewers</h2>
//           <p className="text-sm text-[#6B7280] mb-4">Unlock the list with Premium</p>
//           <div className="space-y-4">
//             {allOtherViewersData.map((viewer, index) => (
//               <div
//                 key={`other-${index}`}
//                 className="p-8 bg-[#F9FAFB] rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-[#F3F2EF] transition-all duration-300 flex items-center justify-between min-h-[100px]"
//               >
//                 <div className="flex items-center space-x-4">
//                   {/* Replace with actual image path */}
//                   <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
//                     <span className="text-gray-500 text-sm">Image</span>
//                   </div>
//                   <div>
//                     <p className="text-[#0A66C2] font-medium">{viewer.title}</p>
//                     {viewer.userId && (
//                       <p className="text-[#6B7280] text-xs">ID: {viewer.userId}</p>
//                     )}
//                   </div>
//                 </div>
//                 <button className="bg-[#0A66C2] text-white text-base font-medium px-5 py-1 rounded-lg shadow-sm hover:bg-gradient-to-r hover:from-[#0A66C2] hover:to-[#004182] transition-all duration-300">
//                   View
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Footer Links (Top-Right) */}
//       <div className="md:w-1/4 w-full text-right md:sticky md:top-4 mt-4 md:mt-0">
//         <div className="text-sm text-[#6B7280]">
//           <div className="flex flex-col space-y-2">
//             <a href="#" className="hover:underline hover:text-[#0A66C2]">About</a>
//             <a href="#" className="hover:underline hover:text-[#0A66C2]">Accessibility</a>
//             <a href="#" className="hover:underline hover:text-[#0A66C2]">Help Center</a>
//             <a href="#" className="hover:underline hover:text-[#0A66C2]">Privacy & Terms</a>
//             <a href="#" className="hover:underline hover:text-[#0A66C2]">Ad Choices</a>
//             <a href="#" className="hover:underline hover:text-[#0A66C2]">Advertising</a>
//             <a href="#" className="hover:underline hover:text-[#0A66C2]">Business Services</a>
//             <a href="#" className="hover:underline hover:text-[#0A66C2]">Get the LinkedIn App</a>
//             <a href="#" className="hover:underline hover:text-[#0A66C2]">More</a>
//           </div>
//           <p className="mt-2">LinkedIn Corporation © 2025</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileViewers;



// import React from 'react';

// const ProfileViewers = () => {
//   const viewersData = [
//     { count: 8, company: 'OctaNet Services Pvt Ltd.' },
//     { count: 5, company: 'Vision Waves' },
//     { count: 4, company: 'Oriental Group of Institutes' },
//   ];

//   const freeViewersData = [
//     { name: 'Sameer Chighariya', rank: '1st', title: 'Student at Oriental Group of Institutes', time: '2h ago', canMessage: true },
//     { name: 'Shailendra Rai', rank: '2nd', title: 'Technical Architect', time: '22h ago', canMessage: false },
//     { name: 'Rinku Tripathi', rank: '1st', title: 'Aspiring Software Developer | Python & AI Enthusiast | IOT | Expertise in Django & Flask | Open to Intern & Full-Time Roles', time: '23h ago', canMessage: true },
//   ];

//   const allOtherViewersData = [
//     { title: 'User with ID 345ghjk67890abcdy3', userId: '345ghjk67890abcdy3' },
//     { title: 'User with ID 345ghjk67890abcdy4', userId: '345ghjk67890abcdy4' },
//     { title: 'Software Engineer at TechCorp', userId: 'user12345' },
//     { title: 'Data Analyst at DataWorks', userId: 'user67890' },
//     { title: 'Product Manager at InnovateLabs', userId: 'user11223' },
//     { title: 'Designer at CreativeStudio', userId: 'user44556' },
//     { title: 'Developer at CodeMasters', userId: 'user78901' },
//     { title: 'Marketing Specialist at BrandBoost', userId: 'user23456' },
//     { title: 'AI Researcher at FutureTech', userId: 'user56789' },
//     { title: 'Project Lead at NextGen', userId: 'user90123' },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#F3F2EF] to-[#E5E7EB] p-6 flex flex-col items-center font-sans">
//       <div className="w-full max-w-5xl mx-auto flex flex-col space-y-10">
//         <header className="bg-[#FFFFFF] shadow-sm rounded-lg p-4 text-center">
//           <h1 className="text-3xl font-bold text-[#0A66C2] tracking-tight">Profile Viewers</h1>
//         </header>

//         <div className="bg-[#FFFFFF] rounded-2xl p-8 shadow-xl border border-[#E5E7EB] w-full max-w-3xl mx-auto">
//           <h1 className="text-3xl font-bold text-[#0A66C2] tracking-tight mb-4">Who s Viewed Your Profile</h1>
//           <div className="flex items-center justify-between mb-6">
//             <button className="bg-[#10B981] text-white text-base font-medium px-5 py-2 rounded-lg shadow-sm hover:bg-gradient-to-r hover:from-[#10B981] hover:to-[#059669] hover:scale-105 focus:ring-2 focus:ring-[#10B981] focus:ring-opacity-50 transition-all duration-300">
//               Past 90 Days
//             </button>
//             <div>
//               <p className="text-4xl font-bold text-[#0A66C2]">445</p>
//               <p className="text-sm text-[#6B7280]">Profile viewers in the past 90 days</p>
//             </div>
//           </div>
//           <h2 className="text-2xl font-bold text-[#0A66C2] tracking-tight mb-4">Viewers You Might Be Interested In</h2>
//           <div className="space-y-4">
//             {viewersData.map((viewer, index) => (
//               <div key={index} className="p-8 bg-[#F9FAFB] rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-[#F3F2EF] transition-all duration-300 flex items-center justify-between min-h-[100px]">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
//                     <span className="text-gray-500 text-sm">Image</span>
//                   </div>
//                   <div>
//                     <p className="text-[#0A66C2] font-medium">{viewer.count} work at {viewer.company}</p>
//                   </div>
//                 </div>
//                 <button className="bg-[#0A66C2] text-white text-base font-medium px-5 py-1 rounded-lg shadow-sm hover:bg-gradient-to-r hover:from-[#0A66C2] hover:to-[#004182] hover:scale-105 focus:ring-2 focus:ring-[#0A66C2] focus:ring-opacity-50 transition-all duration-300">
//                   View
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-[#FFFFFF] rounded-2xl p-8 shadow-xl border border-[#E5E7EB] w-full max-w-3xl mx-auto">
//           <h2 className="text-2xl font-bold text-[#0A66C2] tracking-tight mb-4">Viewers You Can Browse for Free</h2>
//           <div className="space-y-4">
//             {freeViewersData.map((viewer, index) => (
//               <div key={`free-${index}`} className="p-8 bg-[#F9FAFB] rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-[#F3F2EF] transition-all duration-300 flex items-center justify-between min-h-[100px]">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
//                     <span className="text-gray-500 text-sm">Image</span>
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex items-center space-x-2">
//                       <p className="text-[#0A66C2] font-medium">{viewer.name}</p>
//                       <span className="text-[#6B7280] text-sm">• {viewer.rank}</span>
//                       {viewer.canMessage && (
//                         <svg className="w-4 h-4 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                         </svg>
//                       )}
//                     </div>
//                     <p className="text-[#6B7280] text-sm">{viewer.title}</p>
//                     <p className="text-[#6B7280] text-xs">Viewed {viewer.time}</p>
//                   </div>
//                 </div>
//                 <button
//                   className={`text-base font-medium px-5 py-1 rounded-lg shadow-sm transition-all duration-300 flex items-center space-x-2 ${
//                     viewer.canMessage
//                       ? 'bg-[#0A66C2] text-white hover:bg-gradient-to-r hover:from-[#0A66C2] hover:to-[#004182] hover:scale-105 focus:ring-2 focus:ring-[#0A66C2] focus:ring-opacity-50'
//                       : 'border border-[#E5E7EB] text-[#0A66C2] hover:bg-[#F3F2EF] hover:scale-105 focus:ring-2 focus:ring-[#0A66C2] focus:ring-opacity-50'
//                   }`}
//                 >
//                   {viewer.canMessage ? (
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                     </svg>
//                   ) : (
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2c0 .738.402 1.376 1 1.723V15a1 1 0 001 1h2a1 1 0 001-1v-2.277c.598-.347 1-.985 1-1.723zm-2-5a5 5 0 00-5 5c0 1.523.672 2.887 1.73 3.807l-.717 2.153A1 1 0 007 18h2.277c.347.598.985 1 1.723 1a2 2 0 002-2v-.277c.92-.598 1.558-1.598 1.723-2.723A5 5 0 0010 6z" />
//                     </svg>
//                   )}
//                   <span>Message</span>
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-[#FFFFFF] rounded-2xl p-8 shadow-xl border border-[#E5E7EB] w-full max-w-3xl mx-auto">
//           <h2 className="text-2xl font-bold text-[#0A66C2] tracking-tight mb-4">All Other Viewers</h2>
//           <p className="text-sm text-[#6B7280] mb-4">Unlock the list with Premium</p>
//           <div className="space-y-4">
//             {allOtherViewersData.map((viewer, index) => (
//               <div key={`other-${index}`} className="p-8 bg-[#F9FAFB] rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-[#F3F2EF] transition-all duration-300 flex items-center justify-between min-h-[100px]">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center">
//                     <span className="text-gray-500 text-sm">Image</span>
//                   </div>
//                   <div>
//                     <p className="text-[#0A66C2] font-medium">{viewer.title}</p>
//                     {viewer.userId && <p className="text-[#6B7280] text-xs">ID: {viewer.userId}</p>}
//                   </div>
//                 </div>
//                 <button className="bg-[#0A66C2] text-white text-base font-medium px-5 py-1 rounded-lg shadow-sm hover:bg-gradient-to-r hover:from-[#0A66C2] hover:to-[#004182] hover:scale-105 focus:ring-2 focus:ring-[#0A66C2] focus:ring-opacity-50 transition-all duration-300">
//                   View
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <footer className="mt-10 text-center text-sm text-[#6B7280] w-full max-w-5xl mx-auto">
//         <div className="flex flex-wrap justify-center gap-4">
//           <a href="#" className="hover:underline hover:text-[#0A66C2]">About</a>
//           <a href="#" className="hover:underline hover:text-[#0A66C2]">Accessibility</a>
//           <a href="#" className="hover:underline hover:text-[#0A66C2]">Help Center</a>
//           <a href="#" className="hover:underline hover:text-[#0A66C2]">Privacy & Terms</a>
//           <a href="#" className="hover:underline hover:text-[#0A66C2]">Ad Choices</a>
//           <a href="#" className="hover:underline hover:text-[#0A66C2]">Advertising</a>
//           <a href="#" className="hover:underline hover:text-[#0A66C2]">Business Services</a>
//           <a href="#" className="hover:underline hover:text-[#0A66C2]">Get the LinkedIn App</a>
//           <a href="#" className="hover:underline hover:text-[#0A66C2]">More</a>
//         </div>
//         <p className="mt-2">LinkedIn Corporation © 2025</p>
//       </footer>
//     </div>
//   );
// };

// export default ProfileViewers;



//=================================================================================================



// // eslint-disable-next-line no-unused-vars
// import React from 'react';
// import { FaUserCircle, FaSignOutAlt, FaCog, FaQuestionCircle, FaGlobe, FaBuilding, FaBriefcase } from 'react-icons/fa';

// const ProfileDropdown = () => {
//   return (
//     <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
//       {/* Outer Container (Solid Background) */}
//       <div className="bg-gray-100 rounded-2xl p-6 shadow-2xl border border-gray-300 w-full max-w-sm">
//         {/* Profile Header (Inner Card Style) */}
//         <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-3 mb-6">
//           <FaUserCircle className="text-4xl" style={{ color: '#D3D3D3' }} />
//           <div className="flex-1">
//             <h2 className="text-lg font-semibold text-gray-800">Honey Sharma</h2>
//             <p className="text-sm text-gray-600">Co-Founder @Throne8</p>
//             <p className="text-xs text-gray-500">
//               Empowering Professional Networking for Millions with AI, Security, and Scalable Innovation
//             </p>
//           </div>
//         </div>

//         {/* Dropdown Content (Always Visible) */}
//         <div className="space-y-6">
//           {/* Account Section */}
//           <div>
//             <h3 className="text-sm font-semibold text-gray-700 mb-3">Account</h3>
//             <div className="space-y-3">
//               <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
//                 <FaCog style={{ color: '#D3D3D3' }} />
//                 <span className="text-gray-700">Settings & Privacy</span>
//               </div>
//               <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
//                 <FaQuestionCircle style={{ color: '#D3D3D3' }} />
//                 <span className="text-gray-700">Help</span>
//               </div>
//               <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
//                 <FaGlobe style={{ color: '#D3D3D3' }} />
//                 <span className="text-gray-700">Language</span>
//               </div>
//             </div>
//           </div>

//           {/* Manage Section */}
//           <div>
//             <h3 className="text-sm font-semibold text-gray-700 mb-3">Manage</h3>
//             <div className="space-y-3">
//               <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
//                 <FaBuilding style={{ color: '#D3D3D3' }} />
//                 <span className="text-gray-700">Company: CodeRoom</span>
//               </div>
//               <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
//                 <FaBriefcase style={{ color: '#D3D3D3' }} />
//                 <span className="text-gray-700">Job Posting Account</span>
//               </div>
//             </div>
//           </div>

//           {/* Sign Out */}
//           <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
//             <FaSignOutAlt style={{ color: '#D3D3D3' }} />
//             <span className="text-gray-700">Sign Out</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileDropdown;


//===================================================================================================



// // eslint-disable-next-line no-unused-vars
// import React from 'react';

// const SocialPlatformPage = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex justify-center items-start py-8">
//       {/* Main Container */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl w-full px-4">
//         {/* Left Sidebar - On This Page */}
//         <div className="md:col-span-1">
//           <div className="bg-[#edede9] backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h2 className="text-lg font-semibold text-gray-800 mb-4">Explore Sections</h2>
//             <ul className="space-y-3">
//               {['People', 'Companies', 'Posts', 'Courses', 'Jobs', 'Groups', 'Products'].map((item) => (
//                 <li
//                   key={item}
//                   className="p-3 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 text-gray-700 hover:text-indigo-600 cursor-pointer"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Middle Section */}
//         <div className="md:col-span-2 space-y-6">
//           {/* Company Info */}
//           <div className="bg-[#edede9] backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <div className="flex items-center space-x-4">
//               <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
//                 G
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-gray-800">Google Software</h1>
//                 <p className="text-sm text-gray-600">Mountain View, CA</p>
//                 <p className="text-sm text-gray-600">377M followers</p>
//               </div>
//             </div>
//             <div className="flex space-x-3 mt-4">
//               <button className="p-3 bg-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                 Follow
//               </button>
//               <button className="p-3 bg-white/50 text-gray-700 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                 View Page
//               </button>
//             </div>
//           </div>

//           {/* People Section */}
//           <div className="bg-[#edede9] backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <div className="flex space-x-2 mb-4">
//               <button className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full">1st</button>
//               <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">2nd</button>
//               <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full">3rd+</button>
//               <button className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full flex items-center">
//                 <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span> Actively Hiring
//               </button>
//             </div>
//             <div className="space-y-4">
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
//                 <div>
//                   <h3 className="text-gray-800 font-semibold">Sourav Dang • 2nd</h3>
//                   <p className="text-sm text-gray-600">Bhopal Engineering College [BE(CSE)] | Advanced Java | JDBC...</p>
//                   <p className="text-xs text-gray-500">Utkarsh Gupta and 29 other mutual connections</p>
//                 </div>
//                 <button className="ml-auto p-2 bg-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//                   Connect
//                 </button>
//               </div>
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-4">
//                 <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
//                 <div>
//                   <h3 className="text-gray-800 font-semibold">Anurag Singh • 2nd</h3>
//                   <p className="text-sm text-gray-600">SWE-III @ Google | ex - Razorpay | SIH 19 WINNER |...</p>
//                 </div>
//                 <button className="ml-auto p-2 bg-indigo-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
//                   Connect
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="bg-[#edede9] backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//   <h2 className="text-lg font-semibold text-gray-800 mb-4">Courses</h2>
//   <div className="flex flex-wrap gap-2 mb-4">
//     <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//       Beginner
//     </button>
//     <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//       Intermediate
//     </button>
//     <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//       1 hour
//     </button>
//     <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//       3+ hours
//     </button>
//   </div>
//   <div className="space-y-6">
//     <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="flex items-start space-x-4">
//         <div className="w-16 h-12 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-sm font-semibold">
//           GC
//         </div>
//         <div className="flex-1">
//           <div className="flex justify-between items-start">
//             <div>
//               <h3 className="text-gray-800 font-semibold">Intro to Google Sheets</h3>
//               <p className="text-sm text-gray-600">Course • 46m</p>
//               <p className="text-sm text-gray-600">By: Google Cloud • Released Jun 15, 2023</p>
//             </div>
//             <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="flex items-start space-x-4">
//         <div className="w-16 h-12 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-sm font-semibold">
//           GC
//         </div>
//         <div className="flex-1">
//           <div className="flex justify-between items-start">
//             <div>
//               <h3 className="text-gray-800 font-semibold">Intro to Google Meet</h3>
//               <p className="text-sm text-gray-600">Course • 39m</p>
//               <p className="text-sm text-gray-600">By: Google Cloud • Released Jun 12, 2023</p>
//             </div>
//             <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="flex items-start space-x-4">
//         <div className="w-16 h-12 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-sm font-semibold">
//           BB
//         </div>
//         <div className="flex-1">
//           <div className="flex justify-between items-start">
//             <div>
//               <h3 className="text-gray-800 font-semibold">Google Ads Essential Training</h3>
//               <p className="text-sm text-gray-600">Course • 2h 24m</p>
//               <p className="text-sm text-gray-600">By: Brad Batesole • Released Oct 17, 2024</p>
//             </div>
//             <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//               Save
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <button className="mt-4 text-indigo-600 text-sm font-semibold hover:underline">
//     See all course results
//   </button>
//           </div>
//           {/* Groups Section */}
//           <div className="bg-[#edede9] backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">  
//   <h2 className="text-lg font-semibold text-gray-800 mb-4">Groups</h2>
//   <div className="space-y-6">
//     <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="flex items-start space-x-4">
//         <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center text-white text-xl font-bold">
//           GA
//         </div>
//         <div className="flex-1">
//           <div className="flex justify-between items-start">
//             <div>
//               <h3 className="text-gray-800 font-semibold">Google Analytics 4 (GA4)</h3>
//               <p className="text-sm text-gray-600">276K members</p>
//               <p className="text-sm text-gray-600 mt-1">
//                 For all who want to share Google Analytics 4 knowledge! It doesn’t matter if you are Google Analytics individual qualification (IQ), see...
//               </p>
//             </div>
//             <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//               Join
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="flex items-start space-x-4">
//         <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-white text-xl font-bold">
//           C
//         </div>
//         <div className="flex-1">
//           <div className="flex justify-between items-start">
//             <div>
//               <h3 className="text-gray-800 font-semibold">Cloud Computing • Amazon Web Services (AWS) | Google Cloud | IBM Cloud | Oracle | Alibaba</h3>
//               <p className="text-sm text-gray-600">141K members</p>
//               <p className="text-sm text-gray-600 mt-1">
//                 The Cloud Computing LinkedIn group is a community of professionals who are interested in the field of cloud computing and its applications...
//               </p>
//             </div>
//             <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//               Join
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="flex items-start space-x-4">
//         <div className="w-12 h-12 bg-blue-400 rounded-lg flex items-center justify-center text-white text-xl font-bold">
//           S
//         </div>
//         <div className="flex-1">
//           <div className="flex justify-between items-start">
//             <div>
//               <h3 className="text-gray-800 font-semibold">SEO, Google Ads, and Digital Marketing</h3>
//               <p className="text-sm text-gray-600">108K members</p>
//               <p className="text-sm text-gray-600 mt-1">
//                 Breaking news, updates, trends, and the latest information about search engines, SEO, Google Ads, and digital marketing. This group is owned...
//               </p>
//             </div>
//             <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//               Join
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <button className="mt-4 text-indigo-600 text-sm font-semibold hover:underline">
//     See all group results
//   </button>
//           </div>

//           {/* Products Section */}
//           <div className="bg-[#edede9] backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//   <h2 className="text-lg font-semibold text-gray-800 mb-4">Products</h2>
//   <div className="space-y-6">
//     <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="flex items-start space-x-4">
//         <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
//           G
//         </div>
//         <div className="flex-1">
//           <div className="flex justify-between items-start">
//             <div>
//               <h3 className="text-gray-800 font-semibold">Google Kubernetes Engine</h3>
//               <p className="text-sm text-gray-600">Container Management Software by Google Cloud</p>
//               <p className="text-sm text-gray-600 mt-1">
//                 Ready environment for running containerized applications. Top Features: Access Control, Network Isolation, Packaging, and Container Networking
//               </p>
//               <p className="text-xs text-gray-500 mt-1">14 people to ask about this product</p>
//             </div>
//             <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//               View page
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//       <div className="flex items-start space-x-4">
//         <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
//           G
//         </div>
//         <div className="flex-1">
//           <div className="flex justify-between items-start">
//             <div>
//               <h3 className="text-gray-800 font-semibold">Google Ads</h3>
//               <p className="text-sm text-gray-600">Campaign Management Software by Google Ads</p>
//               <p className="text-sm text-gray-600 mt-1">
//                 Get more customers on the phone, on your site, and in the...
//               </p>
//             </div>
//             <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//               View page
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//           </div>

//           {/* Companies Section - Added Box Inside Box */}
//           <div className="bg-[#edede9] backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h2 className="text-lg font-semibold text-gray-800 mb-4">Companies</h2>
//             <div className="space-y-6">
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
//                     G
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h3 className="text-gray-800 font-semibold">Google Cloud</h3>
//                         <p className="text-sm text-gray-600">Software Development • Mountain View, California</p>
//                         <p className="text-sm text-gray-600">3M followers</p>
//                       </div>
//                       <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//                         Message
//                       </button>
//                     </div>
//                     <p className="text-sm text-gray-600 mt-2">
//                       Google Cloud accelerates every organization s ability to digitally transform...
//                     </p>
//                     <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-gray-500">
//                       <span className="flex items-center">
//                         <span className="mr-1">🟦</span> Page by Google
//                       </span>
//                       <span className="text-gray-400">•</span>
//                       <span className="flex items-center">
//                         <span className="mr-1">🔲</span> Google Cloud Summit Jakarta 2025
//                       </span>
//                       <span className="text-gray-400">•</span>
//                       <span>Thu, May 22, 8:00 AM IST • Online event</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
//                     G
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h3 className="text-gray-800 font-semibold">Google for Developers</h3>
//                         <p className="text-sm text-gray-600">Technology, Information and Internet • Mountain View...</p>
//                         <p className="text-sm text-gray-600">2M followers</p>
//                       </div>
//                       <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//                         Following
//                       </button>
//                     </div>
//                     <p className="text-sm text-gray-600 mt-2">
//                       Join a community of creative developers and learn how to use the latest in technology...
//                     </p>
//                     <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-gray-500">
//                       <span className="flex items-center">
//                         <span className="mr-1">🟦</span> Page by Google
//                       </span>
//                       <span className="text-gray-400">•</span>
//                       <span className="flex items-center">
//                         <span className="mr-1">🔲</span> Google I/O 2025
//                       </span>
//                       <span className="text-gray-400">•</span>
//                       <span>Tue, May 20 – Thu, May 22 • Online event</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button className="mt-4 text-indigo-600 text-sm font-semibold hover:underline">
//               See all company results
//             </button>
//           </div>

//           {/* Jobs Section - Added Box Inside Box */}
//           <div className="bg-[#edede9] backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h2 className="text-lg font-semibold text-gray-800 mb-4">Jobs</h2>
//             <div className="flex flex-wrap gap-2 mb-4">
//               <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//                 Remote
//               </button>
//               <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//                 Easy apply
//               </button>
//               <button className="px-4 py-1 border border-gray-300 text-yellow-700 rounded-full flex items-center hover:bg-gray-100 transition-all duration-300">
//                 <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span> Top Applicant
//               </button>
//               <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//                  10 Applicants
//               </button>
//             </div>
//             <div className="space-y-6">
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center text-gray-600 text-sm font-semibold">
//                     SL
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h3 className="text-gray-800 font-semibold">Google Ads Intern in Delhi</h3>
//                         <p className="text-sm text-gray-600">Socio Labs • Delhi, India (On-site)</p>
//                         <p className="text-xs text-gray-500 mt-1">2 weeks ago</p>
//                       </div>
//                       <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//                         Save
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//                 <div className="flex items-start space-x-4">
//                   <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center text-white text-sm font-semibold">
//                     E
//                   </div>
//                   <div className="flex-1">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h3 className="text-gray-800 font-semibold">Google Ads Intern in Gurgaon</h3>
//                         <p className="text-sm text-gray-600">Enout • Gurgaon, Haryana, India (On-site)</p>
//                       </div>
//                       <button className="px-4 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//                         Save
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Sidebar - Jobs and People Also Viewed */}
//         <div className="md:col-span-1 space-y-6">
//           <div className="bg-[#edede9] backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h2 className="text-lg font-semibold text-gray-800 mb-4">Explore Opportunities</h2>
//             <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white text-lg font-bold">
//                   G
//                 </div>
//                 <div>
//                   <h3 className="text-gray-800 font-semibold">Google Software</h3>
//                   <p className="text-sm text-gray-600">Find jobs that match your skills</p>
//                 </div>
//               </div>
//               <button className="mt-3 w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300">
//                 See Jobs
//               </button>
//             </div>
//           </div>

//           <div className="bg-[#edede9] backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h2 className="text-lg font-semibold text-gray-800 mb-4">You Might Be Interested</h2>
//             <div className="space-y-4">
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg font-bold">M</div>
//                 <div>
//                   <h3 className="text-gray-800 font-semibold">Meta</h3>
//                   <p className="text-sm text-gray-600">Software Development • Menlo...</p>
//                 </div>
//                 <button className="ml-auto px-3 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm">
//                   Follow
//                 </button>
//               </div>
//               <div className="p-4 bg-white/50 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-3">
//                 <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white text-lg font-bold">N</div>
//                 <div>
//                   <h3 className="text-gray-800 font-semibold">Netflix</h3>
//                   <p className="text-sm text-gray-600">Entertainment Providers • Los...</p>
//                 </div>
//                 <button className="ml-auto px-3 py-1 border border-gray-300 text-gray-700 rounded-full hover:bg-gray-100 transition-all duration-300 text-sm">
//                   Follow
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div> 
//       </div>
//     </div>
//   );
// };

// export default SocialPlatformPage;


//===========================================================================================================================


// eslint-disable-next-line no-unused-vars
// import React from 'react';

// const AmazonCompanyHeader = () => {
//   return (
//     <div className="relative bg-gradient-to-tr from-gray-100 to-white min-h-screen py-12 font-sans">
//       {/* Main Container with Two Columns */}
//       <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-6 px-4">
//         {/* Left Column: Header, About, and Posts */}
//         <div className="flex-1 space-y-8">
//           {/* Header Section */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <div className="relative bg-gradient-to-r from-[#f2f9ff] to-[#e6f2ff] rounded-xl p-6 shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-500 border border-blue-200/50">
//               <div className="absolute inset-0 rounded-xl border-2 border-transparent animate-pulse bg-gradient-to-r from-blue-200/30 via-blue-300/30 to-blue-200/30 opacity-50 blur-sm"></div>
//               <div className="relative flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
//                 <div className="relative w-20 h-20 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center transform hover:rotate-6 transition-transform duration-300 shadow-md">
//                   <span className="text-4xl text-white font-bold drop-shadow-lg">A</span>
//                   <div className="absolute inset-0 rounded-full border-2 border-white/40 opacity-60 shadow-inner"></div>
//                 </div>
//                 <div className="flex-1 text-center md:text-left">
//                   <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Amazon</h1>
//                   <p className="text-sm text-gray-600 mt-1 leading-relaxed">
//                     Software Development • Seattle, WA • 34M followers • 10K+ employees
//                   </p>
//                   <p className="text-sm text-gray-600 mt-2 flex items-center justify-center md:justify-start">
//                     <span className="mr-2 text-blue-500">🏆</span> Ranked on LinkedIn Top Companies
//                   </p>
//                   <p className="text-sm text-gray-600 mt-1 flex items-center justify-center md:justify-start">
//                     <span className="mr-2 text-blue-500">👥</span> Abdul Zaid & 17 other connections work here
//                   </p>
//                 </div>
//                 <div className="flex space-x-3">
//                   <button className="px-5 py-2 bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 tracking-wide font-medium">
//                     Following
//                   </button>
//                   <button className="px-5 py-2 border border-blue-600 text-blue-600 rounded-full shadow-md hover:bg-blue-50 hover:scale-105 transition-all duration-300 tracking-wide font-medium">
//                     Visit Website
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
//               {['Home', 'About', 'Posts', 'Jobs', 'Life', 'People'].map((tab) => (
//                 <button
//                   key={tab}
//                   className="px-5 py-2 text-gray-700 rounded-full bg-white/40 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 relative group shadow-sm font-medium"
//                 >
//                   <span className="relative z-10">{tab}</span>
//                   <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* About Section */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h2 className="text-xl font-semibold text-gray-900 mb-6 tracking-tight">About</h2>
//             <div className="space-y-4">
//               <div className="bg-white/50 rounded-xl shadow-md p-5">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Overview</h3>
//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   Amazon is a global technology company focused on e-commerce, cloud computing, digital streaming, and artificial intelligence. Founded in 1994 by Jeff Bezos, Amazon has grown to become one of the world’s largest online retailers and a leader in cloud services through Amazon Web Services (AWS). Headquartered in Seattle, Washington, Amazon employs over 1.5 million people worldwide and is committed to innovation, customer satisfaction, and sustainability.
//                 </p>
//               </div>
//               <div className="bg-white/50 rounded-xl shadow-md p-5">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Details</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
//                   <div>
//                     <p><span className="font-medium text-gray-800">Website:</span> <a href="https://www.amazon.com" className="text-blue-600 hover:underline">www.amazon.com</a></p>
//                     <p><span className="font-medium text-gray-800">Industry:</span> Technology, E-commerce</p>
//                     <p><span className="font-medium text-gray-800">Founded:</span> 1994</p>
//                   </div>
//                   <div>
//                     <p><span className="font-medium text-gray-800">Headquarters:</span> Seattle, WA</p>
//                     <p><span className="font-medium text-gray-800">Employees:</span> 1.5M+ globally</p>
//                     <p><span className="font-medium text-gray-800">Specialties:</span> E-commerce, Cloud Computing, AI</p>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-white/50 rounded-xl shadow-md p-5">
//                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Mission & Vision</h3>
//                 <p className="text-sm text-gray-600 leading-relaxed">
//                   Amazon’s mission is to be Earth’s most customer-centric company, where customers can find and discover anything they might want to buy online. Its vision is to leverage technology and innovation to provide the best shopping experience, while also advancing sustainability and community impact through initiatives like Amazon Smile and carbon-neutral goals by 2040.
//                 </p>
//               </div>
//             </div>
//             <button className="mt-6 text-blue-600 text-sm font-semibold hover:underline tracking-wide">
//               Learn more about Amazon
//             </button>
//           </div>

//           {/* Posts Section */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h2 className="text-xl font-semibold text-gray-900 mb-6 tracking-tight">Posts</h2>
//             <div className="space-y-6">
//               <div className="bg-white/50 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 p-5">
//                 <div className="flex items-start space-x-4">
//                   <img
//                     src="https://randomuser.me/api/portraits/men/32.jpg"
//                     alt="User"
//                     className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
//                   />
//                   <div className="flex-1">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h3 className="text-gray-800 font-semibold text-base">Amit Sharma • 1st</h3>
//                         <p className="text-sm text-gray-600">Software Engineer at Amazon • 2d ago</p>
//                       </div>
//                       <button className="text-gray-600 hover:text-blue-700 text-sm font-medium">Follow</button>
//                     </div>
//                     <p className="text-gray-700 mt-2 leading-relaxed">
//                       Excited to share that I’ve completed my first year at Amazon! 🚀 It’s been an incredible journey working on cutting-edge projects with an amazing team. #WorkHard #AmazonLife
//                     </p>
//                     <img
//                       src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
//                       alt="Post image"
//                       className="w-full h-64 object-cover rounded-lg mt-3 shadow-sm"
//                     />
//                     <div className="flex items-center space-x-4 mt-4 text-sm text-gray-600">
//                       <button className="flex items-center hover:text-blue-700 transition-all duration-200">
//                         <span className="mr-1">👍</span> Like • 124
//                       </button>
//                       <button className="flex items-center hover:text-blue-700 transition-all duration-200">
//                         <span className="mr-1">💬</span> Comment • 45
//                       </button>
//                       <button className="flex items-center hover:text-blue-700 transition-all duration-200">
//                         <span className="mr-1">🔄</span> Share • 12
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-white/50 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 p-5">
//                 <div className="flex items-start space-x-4">
//                   <img
//                     src="https://randomuser.me/api/portraits/women/44.jpg"
//                     alt="User"
//                     className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
//                   />
//                   <div className="flex-1">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h3 className="text-gray-800 font-semibold text-base">Priya Kapoor • 2nd</h3>
//                         <p className="text-sm text-gray-600">Product Manager at Amazon • 1w ago</p>
//                       </div>
//                       <button className="text-gray-600 hover:text-blue-700 text-sm font-medium">Follow</button>
//                     </div>
//                     <p className="text-gray-700 mt-2 leading-relaxed">
//                       Amazon’s culture of innovation never ceases to amaze me! Attended an internal hackathon last week and saw some groundbreaking ideas. Can’t wait to see these projects come to life! #Innovation #Amazon
//                     </p>
//                     <div className="flex items-center space-x-4 mt-4 text-sm text-gray-600">
//                       <button className="flex items-center hover:text-blue-700 transition-all duration-200">
//                         <span className="mr-1">👍</span> Like • 89
//                       </button>
//                       <button className="flex items-center hover:text-blue-700 transition-all duration-200">
//                         <span className="mr-1">💬</span> Comment • 32
//                       </button>
//                       <button className="flex items-center hover:text-blue-700 transition-all duration-200">
//                         <span className="mr-1">🔄</span> Share • 8
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-white/50 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 p-5">
//                 <div className="flex items-start space-x-4">
//                   <img
//                     src="https://randomuser.me/api/portraits/men/55.jpg"
//                     alt="User"
//                     className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
//                   />
//                   <div className="flex-1">
//                     <div className="flex justify-between items-start">
//                       <div>
//                         <h3 className="text-gray-800 font-semibold text-base">Rohan Gupta • 3rd</h3>
//                         <p className="text-sm text-gray-600">Data Scientist at Amazon • 3d ago</p>
//                       </div>
//                       <button className="text-gray-600 hover:text-blue-700 text-sm font-medium">Follow</button>
//                     </div>
//                     <p className="text-gray-700 mt-2 leading-relaxed">
//                       Thrilled to announce that our team at Amazon just launched a new AI-driven feature for personalized recommendations! It’s live now—check it out! #AI #AmazonTech
//                     </p>
//                     <img
//                       src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481"
//                       alt="Post image"
//                       className="w-full h-64 object-cover rounded-lg mt-3 shadow-sm"
//                     />
//                     <div className="flex items-center space-x-4 mt-4 text-sm text-gray-600">
//                       <button className="flex items-center hover:text-blue-700 transition-all duration-200">
//                         <span className="mr-1">👍</span> Like • 156
//                       </button>
//                       <button className="flex items-center hover:text-blue-700 transition-all duration-200">
//                         <span className="mr-1">💬</span> Comment • 67
//                       </button>
//                       <button className="flex items-center hover:text-blue-700 transition-all duration-200">
//                         <span className="mr-1">🔄</span> Share • 19
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <button className="mt-6 text-blue-600 text-sm font-semibold hover:underline tracking-wide">
//               See all posts
//             </button>
//           </div>
//         </div>

//         {/* Right Column: People and Featured Employees */}
//         <div className="w-full md:w-80 space-y-6">
//           {/* People Section as a Sticky Card */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20 sticky top-6">
//             <h2 className="text-xl font-semibold text-gray-900 mb-6 tracking-tight">People</h2>
//             <div className="flex flex-wrap gap-2 mb-6">
//               <button className="px-4 py-1.5 border border-gray-300 text-gray-700 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 font-medium">
//                 1st
//               </button>
//               <button className="px-4 py-1.5 border border-gray-300 text-gray-700 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 font-medium">
//                 2nd
//               </button>
//               <button className="px-4 py-1.5 border border-gray-300 text-gray-700 rounded-full hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 font-medium">
//                 3rd+
//               </button>
//               <button className="px-4 py-1.5 border border-gray-300 text-gray-700 rounded-full flex items-center hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 font-medium">
//                 <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span> Amazon Employees
//               </button>
//             </div>
//             <div className="space-y-4">
//               <div className="p-4 bg-white/50 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex items-center space-x-4">
//                 <img
//                   src="https://randomuser.me/api/portraits/men/78.jpg"
//                   alt="User"
//                   className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-gray-800 font-semibold text-base">Rahul Mehra • 1st</h3>
//                   <p className="text-sm text-gray-600 leading-relaxed">Senior Software Engineer at Amazon | AWS Certified</p>
//                   <p className="text-xs text-gray-500 mt-1">Amit and 12 other mutual connections</p>
//                 </div>
//               </div>
//               <div className="p-4 bg-white/50 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex items-center space-x-4">
//                 <img
//                   src="https://randomuser.me/api/portraits/women/29.jpg"
//                   alt="User"
//                   className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-gray-800 font-semibold text-base">Sneha Patel • 2nd</h3>
//                   <p className="text-sm text-gray-600 leading-relaxed">Product Manager at Amazon | Ex-Google</p>
//                   <p className="text-xs text-gray-500 mt-1">Priya and 8 other mutual connections</p>
//                 </div>
//               </div>
//               <div className="p-4 bg-white/50 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex items-center space-x-4">
//                 <img
//                   src="https://randomuser.me/api/portraits/men/19.jpg"
//                   alt="User"
//                   className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-gray-800 font-semibold text-base">Vikram Singh • 3rd</h3>
//                   <p className="text-sm text-gray-600 leading-relaxed">Data Scientist at Amazon | Machine Learning Expert</p>
//                   <p className="text-xs text-gray-500 mt-1">Rohan and 5 other mutual connections</p>
//                 </div>
//               </div>
//             </div>
//             <button className="mt-6 text-blue-600 text-sm font-semibold hover:underline tracking-wide w-full text-center">
//               See all people results
//             </button>
//           </div>

//           {/* Featured Employees Section */}
//           <div className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-white/20">
//             <h2 className="text-xl font-semibold text-gray-900 mb-6 tracking-tight">Featured Employees</h2>
//             <div className="space-y-4">
//               <div className="p-4 bg-white/50 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex items-center space-x-4">
//                 <img
//                   src="https://randomuser.me/api/portraits/men/45.jpg"
//                   alt="Employee"
//                   className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-gray-800 font-semibold text-base">Arjun Verma</h3>
//                   <p className="text-sm text-gray-600 leading-relaxed">Director of Engineering at Amazon</p>
//                   <p className="text-xs text-gray-500 mt-1">Led the development of Amazon Prime’s recommendation engine</p>
//                 </div>
//               </div>
//               <div className="p-4 bg-white/50 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex items-center space-x-4">
//                 <img
//                   src="https://randomuser.me/api/portraits/women/56.jpg"
//                   alt="Employee"
//                   className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-gray-800 font-semibold text-base">Neha Gupta</h3>
//                   <p className="text-sm text-gray-600 leading-relaxed">Senior Product Manager at Amazon</p>
//                   <p className="text-xs text-gray-500 mt-1">Launched Amazon Fresh in 10+ countries</p>
//                 </div>
//               </div>
//               <div className="p-4 bg-white/50 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex items-center space-x-4">
//                 <img
//                   src="https://randomuser.me/api/portraits/men/67.jpg"
//                   alt="Employee"
//                   className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
//                 />
//                 <div className="flex-1">
//                   <h3 className="text-gray-800 font-semibold text-base">Karan Singh</h3>
//                   <p className="text-sm text-gray-600 leading-relaxed">Principal Data Scientist at Amazon</p>
//                   <p className="text-xs text-gray-500 mt-1">Pioneered AI-driven logistics optimization</p>
//                 </div>
//               </div>
//             </div>
//             <button className="mt-6 text-blue-600 text-sm font-semibold hover:underline tracking-wide w-full text-center">
//               See more featured employees
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Floating Badge */}
//       <div className="absolute top-4 right-4 bg-gradient-to-r from-[#f2f9ff] to-[#e6f2ff] text-gray-700 rounded-lg px-4 py-2 shadow-lg animate-pulse border border-blue-200/50">
//         <p className="text-sm font-semibold tracking-wide">Top Companies 2023 • United States</p>
//       </div>
//     </div>
//   );
// };

// export default AmazonCompanyHeader;



