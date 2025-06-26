/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-case-declarations */
// eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';

// function App() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [likes, setLikes] = useState([0, 0, 0, 0]);
//   const [notifications] = useState(3);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [postContent, setPostContent] = useState('');

//   const maxPostLength = 500;

//   const handleLike = (index) => {
//     setLikes((prevLikes) => {
//       const newLikes = [...prevLikes];
//       newLikes[index] += 1;
//       return newLikes;
//     });
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   const handleSearch = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const handlePostSubmit = () => {
//     if (postContent.trim() && postContent.length <= maxPostLength) {
//       console.log('Posting:', postContent);
//       setPostContent('');
//     }
//   };

//   return (
//     <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900' : 'bg-gradient-to-br from-[#f8f6f3] to-[#e0d8cf]'} font-['Poppins'] overflow-hidden`}>
//       {/* Header */}
//       <header className={`fixed top-0 w-full z-30 backdrop-blur-xl py-3 px-4 md:px-8 flex justify-between items-center shadow-xl border-b ${isDarkMode ? 'bg-slate-900/80 border-slate-700/50' : 'bg-white/90 border-[#4a3728]/10'}`}>
//         <div className="flex items-center space-x-3">
//           <div className={`w-12 h-12 bg-gradient-to-br from-[#4a3728] to-[#8b7355] rounded-xl flex items-center justify-center text-white text-xl font-black shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden`}>
//             <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
//             <span className="relative z-10">C</span>
//           </div>
//           <div>
//             <span className={`text-2xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-[#4a3728]'}`}>
//               Connect<span className="bg-gradient-to-r from-[#6b5643] to-[#8b7355] bg-clip-text text-transparent">Sphere</span>
//             </span>
//             <p className={`text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-[#4a3728]/60'} tracking-wide uppercase`}>
//               Premium Network
//             </p>
//           </div>
//         </div>

//         <div className="flex items-center space-x-4">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search content..."
//               value={searchQuery}
//               onChange={handleSearch}
//               className={`py-2 px-4 pr-10 rounded-xl border transition-all duration-300 ${isDarkMode ? 'bg-slate-800/60 border-slate-600/50 text-white placeholder-slate-300' : 'bg-white/80 border-[#4a3728]/20 text-[#4a3728] placeholder-[#4a3728]/50'} focus:outline-none focus:ring-2 focus:ring-[#6b5643] focus:border-transparent w-64 md:w-80 shadow-md hover:shadow-lg`}
//               aria-label="Search content"
//             />
//             <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6b5643] text-lg">
//               🔍
//             </div>
//           </div>

//           <nav className="hidden md:flex items-center space-x-6">
//             {[
//               { icon: '🏠', label: 'Home', active: true },
//               { icon: '🌐', label: 'Network' },
//               { icon: '💼', label: 'Jobs' },
//               { icon: '💬', label: 'Messages' },
//               { icon: '🔔', label: 'Notifications', count: notifications },
//             ].map((item, idx) => (
//               <div key={idx} className="relative group">
//                 <a
//                   href="#"
//                   className={`flex items-center space-x-2 px-3 py-2 rounded-xl font-medium transition-all duration-300 ${
//                     item.active
//                       ? 'bg-gradient-to-r from-[#4a3728] to-[#6b5643] text-white shadow-md'
//                       : isDarkMode
//                         ? 'text-slate-300 hover:text-white hover:bg-slate-700/50'
//                         : 'text-[#4a3728] hover:text-[#4a3728] hover:bg-[#f6ede8]/50'
//                   }`}
//                   aria-label={item.label}
//                 >
//                   <span className="text-lg">{item.icon}</span>
//                   <span className="text-sm">{item.label}</span>
//                 </a>
//                 {item.count && (
//                   <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-md animate-pulse">
//                     {item.count}
//                   </span>
//                 )}
//               </div>
//             ))}
//           </nav>

//           <div className="flex items-center space-x-3">
//             <div className="w-10 h-10 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 border border-[#6b5643]/50">
//               <img
//                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
//                 alt="Profile"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <button
//               className={`p-2 rounded-xl transition-all duration-300 ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-white/80 hover:bg-[#e0d8cf]'} shadow-md hover:shadow-lg`}
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
//             >
//               <span className="text-xl">{isDarkMode ? '☀️' : '🌙'}</span>
//             </button>
//             <button
//               className={`p-2 rounded-xl transition-all duration-300 ${isDarkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-white/80 hover:bg-[#e0d8cf]'} shadow-md hover:shadow-lg md:hidden`}
//               onClick={toggleSidebar}
//               aria-label={isSidebarOpen ? 'Close sidebar' : 'Open sidebar'}
//             >
//               <span className="text-xl">{isSidebarOpen ? '✖️' : '☰'}</span>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Container */}
//       <div className="flex mt-16 px-4 md:px-8 max-w-7xl mx-auto gap-6">
//         {/* Left Sidebar */}
//         {isSidebarOpen && (
//           <aside className={`w-full md:w-64 space-y-6 transition-all duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
//             {/* Profile Card */}
//             <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 ${isDarkMode ? 'bg-slate-800/70 border-slate-700/50' : 'bg-white/95 border-[#4a3728]/10'} relative overflow-hidden group`}>
//               <div className="absolute inset-0 bg-gradient-to-br from-[#6b5643]/5 to-[#8b7355]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
//               <div className="relative z-10 text-center">
//                 <div className="relative inline-block mb-4">
//                   <img
//                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face"
//                     alt="Profile"
//                     className="w-24 h-24 rounded-2xl object-cover border-3 border-[#6b5643] shadow-lg"
//                   />
//                   <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-md animate-pulse"></div>
//                 </div>
//                 <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-[#4a3728]'}`}>John Anderson</h3>
//                 <p className="text-sm font-medium bg-gradient-to-r from-[#6b5643] to-[#8b7355] bg-clip-text text-transparent">Senior Software Engineer</p>
//                 <p className={`text-xs italic ${isDarkMode ? 'text-slate-400' : 'text-[#4a3728]/60'} mb-4`}>Building tomorrow s digital experiences</p>
//                 <div className="grid grid-cols-2 gap-3 mb-4">
//                   {[
//                     { label: 'Connections', value: '2.5K', color: 'from-[#6b5643] to-[#8b7355]' },
//                     { label: 'Following', value: '892', color: 'from-[#8b7355] to-[#9d8466]' },
//                     { label: 'Posts', value: '456', color: 'from-[#4a3728] to-[#6b5643]' },
//                     { label: 'Likes', value: '8.9K', color: 'from-[#6b5643] to-[#4a3728]' },
//                   ].map((stat, idx) => (
//                     <div key={idx} className={`p-3 rounded-xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-slate-700/40 border-slate-600/30' : 'bg-white/50 border-[#4a3728]/10'}`}>
//                       <p className={`text-lg font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>{stat.value}</p>
//                       <p className={`text-xs font-medium ${isDarkMode ? 'text-slate-400' : 'text-[#4a3728]/60'} uppercase`}>{stat.label}</p>
//                     </div>
//                   ))}
//                 </div>
//                 <button className="w-full bg-gradient-to-r from-[#4a3728] to-[#6b5643] text-white py-2 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group">
//                   <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <span className="relative z-10">View Full Profile</span>
//                 </button>
//               </div>
//             </div>

//             {/* Communities Card */}
//             <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 ${isDarkMode ? 'bg-slate-800/70 border-slate-700/50' : 'bg-white/95 border-[#4a3728]/10'}`}>
//               <h4 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#4a3728]'}`}>My Communities</h4>
//               <div className="space-y-3">
//                 {[
//                   { name: 'React Developers', icon: '⚛️', members: '45K' },
//                   { name: 'UI/UX Design', icon: '🎨', members: '28K' },
//                   { name: 'Tech Innovators', icon: '🚀', members: '67K' },
//                 ].map((community, idx) => (
//                   <div key={idx} className={`flex items-center justify-between p-3 rounded-xl transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-slate-700/40 hover:bg-slate-700/60' : 'bg-white/50 hover:bg-white/70'}`}>
//                     <div className="flex items-center space-x-3">
//                       <span className="text-xl">{community.icon}</span>
//                       <div>
//                         <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#4a3728]'}`}>{community.name}</p>
//                         <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-[#4a3728]/60'}`}>{community.members} members</p>
//                       </div>
//                     </div>
//                     <button className="text-[#6b5643] hover:text-[#4a3728] font-semibold text-sm transition-colors duration-300">View</button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </aside>
//         )}

//         {/* Main Content */}
//         <main className="flex-1 max-w-2xl space-y-6">
//           {/* Post Creator */}
//           <div className={`p-4 rounded-2xl shadow-xl backdrop-blur-xl border transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] ${isDarkMode ? 'bg-slate-800/70 border-slate-700/50' : 'bg-white/95 border-[#4a3728]/10'} relative overflow-hidden group`}>
//             <div className="absolute inset-0 bg-gradient-to-br from-[#6b5643]/5 to-[#8b7355]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
//             <div className="relative z-10">
//               <div className="flex items-center space-x-3 mb-3">
//                 <img
//                   src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
//                   alt="Your avatar"
//                   className="w-10 h-10 rounded-xl object-cover border-2 border-[#6b5643] shadow-md"
//                 />
//                 <input
//                   type="text"
//                   placeholder="What's inspiring you today?"
//                   className={`flex-1 py-2 px-4 rounded-xl border transition-all duration-300 font-medium ${isDarkMode ? 'bg-slate-700/60 border-slate-600/50 text-white placeholder-slate-300' : 'bg-white/80 border-[#4a3728]/20 text-[#4a3728] placeholder-[#4a3728]/50'} focus:outline-none focus:ring-2 focus:ring-[#6b5643] focus:border-transparent shadow-md hover:shadow-lg`}
//                   aria-label="Post title"
//                 />
//               </div>
//               <textarea
//                 placeholder="Share your thoughts, ideas, or experiences..."
//                 rows="3"
//                 value={postContent}
//                 onChange={(e) => setPostContent(e.target.value)}
//                 className={`w-full py-2 px-4 rounded-xl border transition-all duration-300 font-medium resize-none ${isDarkMode ? 'bg-slate-700/60 border-slate-600/50 text-white placeholder-slate-300' : 'bg-white/80 border-[#4a3728]/20 text-[#4a3728] placeholder-[#4a3728]/50'} focus:outline-none focus:ring-2 focus:ring-[#6b5643] focus:border-transparent shadow-md hover:shadow-lg`}
//                 aria-label="Post content"
//               ></textarea>
//               <div className="flex items-center justify-between mt-3">
//                 <div className="flex items-center space-x-2">
//                   <button className="flex items-center space-x-1 text-[#6b5643] hover:text-[#4a3728] font-semibold text-sm px-3 py-1.5 rounded-xl hover:bg-[#e0d8cf]/50 transition-all duration-300">
//                     <span>📸</span>
//                     <span>Photo</span>
//                   </button>
//                   <button className="flex items-center space-x-1 text-[#6b5643] hover:text-[#4a3728] font-semibold text-sm px-3 py-1.5 rounded-xl hover:bg-[#e0d8cf]/50 transition-all duration-300">
//                     <span>🎥</span>
//                     <span>Video</span>
//                   </button>
//                   <button className="flex items-center space-x-1 text-[#6b5643] hover:text-[#4a3728] font-semibold text-sm px-3 py-1.5 rounded-xl hover:bg-[#e0d8cf]/50 transition-all duration-300">
//                     <span>📊</span>
//                     <span>Poll</span>
//                   </button>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <span className={`text-sm ${postContent.length > maxPostLength ? 'text-red-500' : isDarkMode ? 'text-slate-400' : 'text-[#4a3728]/60'}`}>
//                     {postContent.length}/{maxPostLength}
//                   </span>
//                   <button
//                     onClick={handlePostSubmit}
//                     disabled={!postContent.trim() || postContent.length > maxPostLength}
//                     className={`px-4 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden ${
//                       postContent.trim() && postContent.length <= maxPostLength
//                         ? 'bg-gradient-to-r from-[#4a3728] to-[#6b5643] text-white hover:scale-105'
//                         : 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                     }`}
//                     aria-label="Share post"
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-50 hover:opacity-100 transition-opacity duration-300"></div>
//                     <span className="relative z-10">Share Post</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Posts Feed */}
//           <div className="space-y-6">
//             {[
//               {
//                 user: 'Sarah Wilson',
//                 avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
//                 role: 'Product Designer',
//                 time: '2h ago',
//                 content: 'Just launched our new design system! 🎨 Working with an amazing team to create consistent, beautiful experiences across all our products.',
//                 image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
//                 likes: 247,
//                 comments: 18,
//                 shares: 8,
//               },
//               {
//                 user: 'Michael Chen',
//                 avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
//                 role: 'Tech Lead',
//                 time: '4h ago',
//                 content: 'Excited to share that our AI-powered recommendation engine just hit 94% accuracy! 🚀 Big thanks to the entire ML team.',
//                 likes: 189,
//                 comments: 25,
//                 shares: 8,
//               },
//             ].map((post, index) => (
//               <div key={index} className={`p-6 rounded-2xl shadow-xl backdrop-blur-xl border transition-all duration-500 hover:shadow-2xl hover:scale-[1.01] ${isDarkMode ? 'bg-slate-800/70 border-slate-700/50' : 'bg-white/95 border-[#4a3728]/10'} relative overflow-hidden group`}>
//                 <div className="absolute inset-0 bg-gradient-to-br from-[#6b5643]/3 to-[#8b7355]/3 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <div className="relative z-10">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="flex items-center space-x-3">
//                       <img
//                         src={post.avatar}
//                         alt={`${post.user}'s avatar`}
//                         className="w-12 h-12 rounded-xl object-cover border-2 border-[#6b5643] shadow-md"
//                       />
//                       <div>
//                         <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-[#4a3728]'}`}>{post.user}</h4>
//                         <p className="text-sm font-medium bg-gradient-to-r from-[#6b5643] to-[#8b7355] bg-clip-text text-transparent">{post.role}</p>
//                         <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-[#4a3728]/60'}`}>{post.time}</p>
//                       </div>
//                     </div>
//                     <button className={`p-2 rounded-xl transition-all duration-300 ${isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-[#e0d8cf]/50'}`} aria-label="More options">
//                       <span className="text-lg">⋯</span>
//                     </button>
//                   </div>
//                   <p className={`text-base font-medium leading-relaxed mb-4 ${isDarkMode ? 'text-slate-200' : 'text-[#4a3728]'}`}>{post.content}</p>
//                   {post.image && (
//                     <div className="mb-4 rounded-xl overflow-hidden">
//                       <img
//                         src={post.image}
//                         alt="Post content"
//                         className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
//                       />
//                     </div>
//                   )}
//                   <div className="flex items-center justify-between pt-4 border-t border-[#4a3728]/10">
//                     <div className="flex items-center space-x-6">
//                       <button
//                         className="flex items-center space-x-1 text-rose-500 hover:text-rose-600 transition-colors duration-300"
//                         onClick={() => handleLike(index)}
//                         aria-label={`Like post by ${post.user}`}
//                       >
//                         <span className="text-lg">❤️</span>
//                         <span className="font-semibold">{post.likes + likes[index]}</span>
//                       </button>
//                       <button className="flex items-center space-x-1 text-blue-500 hover:text-blue-600 transition-colors duration-300" aria-label="Comment on post">
//                         <span className="text-lg">💬</span>
//                         <span className="font-semibold">{post.comments}</span>
//                       </button>
//                       <button className="flex items-center space-x-1 text-green-500 hover:text-green-600 transition-colors duration-300" aria-label="Share post">
//                         <span className="text-lg">🔄</span>
//                         <span className="font-semibold">{post.shares}</span>
//                       </button>
//                     </div>
//                     <button className="text-[#6b5643] hover:text-[#4a3728] transition-colors duration-300" aria-label="Bookmark post">
//                       <span className="text-lg">🔖</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>

//         {/* Right Sidebar */}
//         <aside className="hidden md:block w-64 space-y-6">
//           <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 ${isDarkMode ? 'bg-slate-800/70 border-slate-700/50' : 'bg-white/95 border-[#4a3728]/10'}`}>
//             <div className="flex items-center justify-between mb-4">
//               <h4 className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-[#4a3728]'}`}>Trending Now</h4>
//               <span className="px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-semibold rounded-full animate-pulse">LIVE</span>
//             </div>
//             <div className="space-y-3">
//               {[
//                 { topic: '#TechInnovation', posts: '12.5K posts' },
//                 { topic: '#DesignThinking', posts: '8.3K posts' },
//                 { topic: '#StartupLife', posts: '15.7K posts' },
//               ].map((trend, idx) => (
//                 <div key={idx} className={`p-3 rounded-xl transition-all duration-300 hover:scale-105 ${isDarkMode ? 'hover:bg-slate-700/40' : 'hover:bg-[#e0d8cf]/50'}`}>
//                   <p className="font-semibold bg-gradient-to-r from-[#6b5643] to-[#8b7355] bg-clip-text text-transparent">{trend.topic}</p>
//                   <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-[#4a3728]/60'}`}>{trend.posts}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 ${isDarkMode ? 'bg-slate-800/70 border-slate-700/50' : 'bg-white/95 border-[#4a3728]/10'}`}>
//             <h4 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#4a3728]'}`}>People You May Know</h4>
//             <div className="space-y-3">
//               {[
//                 { name: 'Emma Thompson', role: 'UX Designer', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face', mutualConnections: 5 },
//                 { name: 'David Rodriguez', role: 'Frontend Developer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face', mutualConnections: 12 },
//               ].map((person, idx) => (
//                 <div key={idx} className={`p-3 rounded-xl border transition-all duration-300 hover:scale-105 ${isDarkMode ? 'bg-slate-700/40 border-slate-600/30' : 'bg-white/50 border-[#4a3728]/10'}`}>
//                   <div className="flex items-center space-x-3 mb-2">
//                     <img src={person.avatar} alt={`${person.name}'s avatar`} className="w-10 h-10 rounded-xl object-cover border-2 border-[#6b5643]" />
//                     <div>
//                       <p className={`font-semibold ${isDarkMode ? 'text-white' : 'text-[#4a3728]'}`}>{person.name}</p>
//                       <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-[#4a3728]/60'}`}>{person.role}</p>
//                       <p className={`text-xs ${isDarkMode ? 'text-slate-500' : 'text-[#4a3728]/50'}`}>{person.mutualConnections} mutual connections</p>
//                     </div>
//                   </div>
//                   <button className="w-full bg-gradient-to-r from-[#4a3728] to-[#6b5643] text-white py-2 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">Connect</button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className={`p-6 rounded-2xl shadow-xl backdrop-blur-xl border transition-all duration-500 hover:shadow-2xl hover:scale-105 ${isDarkMode ? 'bg-slate-800/70 border-slate-700/50' : 'bg-white/95 border-[#4a3728]/10'}`}>
//             <h4 className={`text-lg font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-[#4a3728]'}`}>Your Week</h4>
//             <div className="space-y-3">
//               <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-slate-700/40' : 'bg-white/50'}`}>
//                 <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-[#4a3728]/60'} mb-1`}>Profile Views</p>
//                 <p className="text-lg font-bold bg-gradient-to-r from-[#6b5643] to-[#8b7355] bg-clip-text text-transparent">+24%</p>
//               </div>
//               <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-slate-700/40' : 'bg-white/50'}`}>
//                 <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-[#4a3728]/60'} mb-1`}>Post Engagement</p>
//                 <p className="text-lg font-bold bg-gradient-to-r from-[#8b7355] to-[#6b5643] bg-clip-text text-transparent">+18%</p>
//               </div>
//             </div>
//           </div>
//         </aside>
//       </div>

//       {/* Custom Styles */}
//       <style>{`
//         :root {
//           --primary-dark: #4a3728;
//           --primary-light: #8b7355;
//           --secondary-dark: #6b5643;
//           --bg-light: #f8f6f3;
//           --bg-dark: #1a202c;
//         }

//         @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

//         html, body {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//           scroll-behavior: smooth;
//         }

//         * {
//           box-sizing: inherit;
//         }

//         ::-webkit-scrollbar {
//           width: 6px;
//         }

//         ::-webkit-scrollbar-track {
//           background: ${isDarkMode ? 'var(--bg-dark)' : 'var(--bg-light)'};
//         }

//         ::-webkit-scrollbar-thumb {
//           background: linear-gradient(to bottom, var(--primary-dark), var(--primary-light));
//           border-radius: 3px;
//         }

//         ::-webkit-scrollbar-thumb:hover {
//           background: linear-gradient(to bottom, var(--secondary-dark), #9d8466);
//         }

//         button {
//           cursor: pointer;
//         }

//         input, textarea {
//           transition: all 0.3s ease;
//         }

//         input:focus, textarea:focus {
//           transform: scale(1.01);
//         }

//         @media (max-width: 768px) {
//           aside {
//             position: fixed;
//             top: 0;
//             left: 0;
//             height: 100%;
//             z-index: 20;
//             background: ${isDarkMode ? 'var(--bg-dark)' : 'var(--bg-light)'};
//             overflow-y: auto;
//             width: 80%;
//             max-width: 300px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default App;

//==============================================================================


// import { useState } from 'react';

// const App = () => {
//   const profileImage = 'https://i.pinimg.com/736x/f6/61/ea/f661ea61616909838a9fbfeda0d2ea14.jpg';
//   const bannerImage = 'https://plus.unsplash.com/premium_photo-1700929226395-fbab2b0f29b2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3';

//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const getIconPath = (index) => {
//     const paths = [
//       'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
//       'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
//       'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
//       'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
//       'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
//     ];
//     return paths[index];
//   };

//   return (
//     <div className="min-h-screen bg-[#f6ede8] py-12 px-4 font-sans">
//       <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8 flex-nowrap">
//         {/* Navbar */}

//         <nav className="fixed top-0 left-0 w-full bg-[#e0d8cf] text-[#4a3728] shadow-md z-50">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//     <div className="flex items-center justify-between h-16">
//       <div className="flex-shrink-0">
//         <h1 className="text-2xl font-bold text-[#4a3728]">Throne8</h1>
//       </div>
//       <div className="hidden md:flex items-center space-x-6">
//         {['Home', 'Network', 'Jobs', 'Messaging', 'Notifications'].map((item, idx) => (
//           <a
//             key={item}
//             href="#"
//             className="flex items-center gap-2 text-sm font-medium text-[#4a3728] hover:text-[#7a5c3e] transition-colors duration-300"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={getIconPath(idx)} />
//             </svg>
//             {item}
//           </a>
//         ))}
//       </div>
//       <div className="flex items-center space-x-4">
//         <div className="hidden md:flex items-center bg-[#f6ede8] rounded-full px-3 py-1 shadow-sm">
//           <svg className="w-5 h-5 text-[#4a3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-transparent text-sm text-[#4a3728] placeholder-[#7a5c3e] focus:outline-none ml-2 w-32 sm:w-48"
//           />
//         </div>
//         <div className="relative group">
//           <button className="flex items-center gap-2">
//             <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#e0d8cf] shadow-sm">
//               <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
//             </div>
//             <span className="text-sm font-medium hidden md:inline text-[#4a3728]">Honey</span>
//             <svg className="w-4 h-4 text-[#4a3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//             </svg>
//           </button>
//           <div className="absolute right-0 mt-2 w-48 bg-[#f6ede8] rounded-lg shadow-lg py-2 hidden group-hover:block border border-[#e0d8cf] z-50">
//             {['View Profile', 'Settings', 'Logout'].map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="block px-4 py-2 text-sm text-[#4a3728] hover:bg-[#e0d8cf] transition-colors duration-300"
//               >
//                 {item}
//               </a>
//             ))}
//           </div>
//         </div>
//         <div className="md:hidden">
//           <button
//             className="text-[#4a3728] focus:outline-none"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//     {isMobileMenuOpen && (
//       <div className="md:hidden bg-[#e0d8cf] px-4 py-2">
//         {['Home', 'Network', 'Jobs', 'Messaging', 'Notifications'].map((item) => (
//           <a
//             key={item}
//             href="#"
//             className="block py-2 text-sm font-medium text-[#4a3728] hover:text-[#7a5c3e] transition-colors duration-300"
//           >
//             {item}
//           </a>
//         ))}
//         <div className="flex items-center bg-[#f6ede8] rounded-full px-3 py-1 mt-2 shadow-sm">
//           <svg className="w-5 h-5 text-[#4a3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//           </svg>
//           <input
//             type="text"
//             placeholder="Search"
//             className="bg-transparent text-sm text-[#4a3728] placeholder-[#7a5c3e] focus:outline-none ml-2 w-full"
//           />
//         </div>
//       </div>
//     )}
//   </div>
// </nav>
//         {/* Main Content (Left) */}
//         <div className="flex-1 pt-20">
//           {/* <div className="relative h-48 w-full overflow-hidden group">
//             <img
//               src={bannerImage}
//               alt="Banner"
//               className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#4a3728]/40 to-transparent"></div>
//             <div className="absolute bottom-28 left-4 rounded-full border-2 text-white/80 text-xs font-medium bg-black/20 px-2 py-1 backdrop-blur-sm">
//               ✨ Professional Networker
//             </div>
//           </div> */}
//           <div className="relative w-full overflow-hidden group">
//             <img
//               src={bannerImage}
//               alt="Profile banner"
//               className="w-full h-48 sm:h-64 md:h-80 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
//               loading="lazy"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-[#4a3728]/40 to-transparent"></div>
//             <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-full border-2 border-white/80 text-white/80 text-xs sm:text-sm font-medium bg-black/20 px-3 py-1.5 backdrop-blur-sm">
//               ✨ Professional Networker
//             </div>
//           </div>

//           <div className="relative px-6 pb-6">
//             <div className="flex flex-col md:flex-row items-start gap-6 -mt-12">
//               <div className="relative w-36 h-36 group">
//                 <img
//                   src={profileImage}
//                   alt="Profile"
//                   className="w-full h-full rounded-2xl border-4 border-white shadow-xl object-cover transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105"
//                 />
//                 <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
//                   <div className="w-3 h-3 bg-white rounded-full"></div>
//                 </div>
//                 <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500/20 to-purple-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
//               </div>
//               <div className="border border-[#e0d8cf] rounded-3xl p-6 shadow-xl bg-white/60 backdrop-blur-sm flex-1">
//                 <div className="space-y-3">
//                   <div className="relative">
//                     <h1 className="text-3xl font-bold text-[#4a3728] flex items-center gap-2 justify-center md:justify-start hover:text-[#5a4738] transition-colors duration-300">
//                       Honey Sharma
//                       <span className="text-sm text-[#4a3728]/70 font-normal bg-[#f6ede8] px-2 py-1 rounded-full border">
//                         (He/Him)
//                       </span>
//                       <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping ml-2"></div>
//                     </h1>
//                   </div>
//                   <div className="relative">
//                     <h2 className="text-lg font-semibold text-[#4a3728]">
//                       Co-Founder @Throne8
//                     </h2>
//                   </div>
//                   <p className="text-sm text-[#4a3728]/80 leading-relaxed relative">
//                     Empowering Professional Networking for Millions with AI, Security, and Scalable Innovation
//                     <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#4a3728]/20 to-transparent rounded-full"></div>
//                   </p>
//                   <div className="flex items-center gap-2 justify-center md:justify-start bg-white/50 rounded-full px-3 py-2 backdrop-blur-sm border border-[#e0d8cf]/50">
//                     <svg className="w-5 h-5 text-[#4a3728] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                     <p className="text-sm text-[#4a3728]">
//                       <span className="font-semibold">Location:</span> Bhopal, Madhya Pradesh, India
//                     </p>
//                   </div>
//                   <div className="flex gap-3 justify-center md:justify-start">
//                     <button className="group px-4 py-2 bg-white text-[#4a3728] rounded-full text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-[#e0d8cf] hover:scale-105 hover:bg-gradient-to-r hover:from-[#f6ede8] hover:to-white">
//                       <svg className="w-5 h-5 text-[#4a3728] group-hover:animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//                       </svg>
//                       <span className="font-semibold">3,282</span> followers
//                       <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-1"></div>
//                     </button>
//                     <button className="group px-4 py-2 bg-white text-[#4a3728] rounded-full text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 border border-[#e0d8cf] hover:scale-105 hover:bg-gradient-to-r hover:from-[#f6ede8] hover:to-white">
//                       <svg className="w-5 h-5 text-[#4a3728] group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                       </svg>
//                       <span className="font-semibold">500+</span> connections
//                       <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse ml-1"></div>
//                     </button>
//                   </div>
//                   <div className="flex gap-2 justify-center md:justify-start pt-2">
//                     <div className="w-8 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
//                     <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse delay-200"></div>
//                     <div className="w-6 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-500"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Action Buttons Section */}
//           <div className="bg-gradient-to-br from-[#f6ede8] to-[#e0d8cf] backdrop-blur-lg rounded-2xl shadow-xl p-6 mb-8 border border-[#e0d8cf]/50">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {['Open to', 'Add profile section', 'Enhance profile', 'Resources'].map((item, index) => (
//                 <button
//                   key={item}
//                   className="px-6 py-3 bg-[#4a3728] text-[#f6ede8] font-medium rounded-xl shadow-md hover:bg-[#6b4e31] hover:shadow-[0_0_15px_rgba(224,216,207,0.3)] transition-all duration-300 transform hover:scale-105 active:scale-95"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Professional Details */}

//           <div className="bg-[#f6ede8]/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-[#e0d8cf]/50 mb-8 relative overflow-hidden">
//             {/* Decorative elements */}
//             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#4a3728]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
//             <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#4a3728]/5 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

//             <div className="relative z-10">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="w-8 h-8 bg-gradient-to-r from-[#4a3728] to-[#6b4e3d] rounded-lg flex items-center justify-center">
//                   <svg className="w-5 h-5 text-[#f6ede8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#4a3728] tracking-wide">Professional Details</h3>
//               </div>

//               <div className="grid gap-5">
//                 {[
//                   {
//                     icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
//                     title: 'Company',
//                     subtitle: 'Thronet Technology Private Limited (Throne8)',
//                     gradient: 'from-[#4a3728] to-[#6b4e3d]'
//                   },
//                   {
//                     icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
//                     title: 'Education',
//                     subtitle: 'Oriental College of Technology',
//                     gradient: 'from-[#6b4e3d] to-[#8b6f47]'
//                   },
//                 ].map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="group relative flex items-center gap-4 p-5 bg-gradient-to-r from-[#e0d8cf]/70 to-[#e0d8cf]/40 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer border border-[#e0d8cf]/30"
//                   >
//                     {/* Hover glow effect */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-[#4a3728]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                     <div className={`relative w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-[#f6ede8] shadow-lg group-hover:shadow-xl group-hover:rotate-3 transition-all duration-500`}>
//                       <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                       </svg>
//                     </div>

//                     <div className="flex-1 relative">
//                       <p className="text-base font-bold text-[#4a3728] mb-1 group-hover:text-[#6b4e3d] transition-colors duration-300">{item.title}</p>
//                       <p className="text-sm text-[#4a3728]/75 leading-relaxed group-hover:text-[#4a3728]/90 transition-colors duration-300">{item.subtitle}</p>
//                     </div>

//                     {/* Arrow indicator */}
//                     <div className="w-6 h-6 text-[#4a3728]/40 group-hover:text-[#4a3728]/70 group-hover:translate-x-1 transition-all duration-300">
//                       <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                       </svg>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* About Section */}


//           <div className="bg-[#f6ede8]/80 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-[#e0d8cf]/50 mb-8 relative overflow-hidden group">
//             {/* Animated background elements */}
//             <div className="absolute top-0 left-0 w-full h-full">
//               <div className="absolute top-4 right-8 w-20 h-20 bg-gradient-to-br from-[#4a3728]/8 to-transparent rounded-full animate-pulse"></div>
//               <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-tr from-[#4a3728]/5 to-transparent rounded-full animate-pulse delay-1000"></div>
//               <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[#4a3728]/10 rounded-full animate-bounce delay-500"></div>
//               <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#4a3728]/15 rounded-full animate-bounce delay-700"></div>

//               {/* Flowing lines */}
//               {/* <div className="absolute inset-0 opacity-30">
//       <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
//         <path d="M0,20 Q50,0 100,30" stroke="url(#gradient1)" strokeWidth="0.5" fill="none" className="animate-pulse"/>
//         <path d="M0,60 Q30,40 100,70" stroke="url(#gradient2)" strokeWidth="0.3" fill="none" className="animate-pulse delay-300"/>
//         <defs>
//           <linearGradient id="gradient1">
//             <stop offset="0%" stopColor="#4a3728" stopOpacity="0"/>
//             <stop offset="50%" stopColor="#4a3728" stopOpacity="0.1"/>
//             <stop offset="100%" stopColor="#4a3728" stopOpacity="0"/>
//           </linearGradient>
//           <linearGradient id="gradient2">
//             <stop offset="0%" stopColor="#6b4e3d" stopOpacity="0"/>
//             <stop offset="50%" stopColor="#6b4e3d" stopOpacity="0.08"/>
//             <stop offset="100%" stopColor="#6b4e3d" stopOpacity="0"/>
//           </linearGradient>
//         </defs>
//       </svg>
//     </div> */}
//             </div>

//             <div className="relative z-10">
//               {/* Enhanced Header */}
//               <div className="flex items-center gap-4 mb-6">
//                 <div className="relative">
//                   <div className="w-12 h-12 bg-gradient-to-br from-[#4a3728] via-[#6b4e3d] to-[#8b6f47] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:rotate-6">
//                     <svg className="w-6 h-6 text-[#f6ede8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                   </div>
//                   {/* Floating indicator */}
//                   <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-[#4a3728] to-[#6b4e3d] rounded-full flex items-center justify-center animate-ping">
//                     <div className="w-2 h-2 bg-[#f6ede8] rounded-full"></div>
//                   </div>
//                 </div>

//                 <div>
//                   <h3 className="text-2xl font-bold text-[#4a3728] tracking-wide group-hover:text-[#6b4e3d] transition-colors duration-300">About</h3>
//                   <div className="w-16 h-1 bg-gradient-to-r from-[#4a3728] to-transparent rounded-full mt-1 group-hover:w-24 transition-all duration-500"></div>
//                 </div>
//               </div>

//               {/* Enhanced Content Card */}
//               <div className="relative">
//                 {/* Content container with multiple layers */}
//                 <div className="relative bg-gradient-to-br from-[#e0d8cf]/80 via-[#e0d8cf]/60 to-[#e0d8cf]/40 p-6 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 border border-[#e0d8cf]/30 backdrop-blur-sm">

//                   {/* Quote marks */}
//                   <div className="absolute top-3 left-4 text-4xl text-[#4a3728]/20 font-serif leading-none"></div>
//                   <div className="absolute bottom-3 right-4 text-4xl text-[#4a3728]/20 font-serif leading-none rotate-180"></div>

//                   {/* Main content */}
//                   <div className="relative z-10 pt-4 pb-4">
//                     <p className="text-base text-[#4a3728]/90 leading-relaxed font-medium tracking-wide">
//                       <span className="inline-block animate-pulse bg-gradient-to-r from-[#4a3728] to-[#6b4e3d] bg-clip-text text-transparent font-semibold">Passionate</span> about leveraging AI and technology to build scalable solutions that connect professionals worldwide.
//                       As <span className="relative inline-block">
//                         <span className="bg-gradient-to-r from-[#4a3728] to-[#6b4e3d] bg-clip-text text-transparent font-semibold">Co-Founder of Throne8</span>
//                         {/* <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#4a3728]/50 to-transparent"></span> */}
//                       </span>, I focus on creating secure, innovative platforms that empower millions. With a
//                       background in technology and entrepreneurship, I thrive on solving complex challenges and driving impact.
//                     </p>

//                     {/* Floating keywords */}
//                     <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#4a3728]/10">
//                       {['AI', 'Technology', 'Innovation', 'Leadership'].map((tag, idx) => (
//                         <span
//                           key={idx}
//                           className="px-3 py-1 bg-gradient-to-r from-[#4a3728]/10 to-[#6b4e3d]/10 text-[#4a3728]/80 text-xs font-medium rounded-full border border-[#4a3728]/20 hover:scale-105 transition-transform duration-300 cursor-default"
//                           style={{ animationDelay: `${idx * 200}ms` }}
//                         >
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Hover glow effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#4a3728]/5 via-transparent to-[#6b4e3d]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
//                 </div>

//                 {/* Side accent */}
//                 <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-[#4a3728] via-[#6b4e3d] to-[#4a3728] rounded-full group-hover:w-1.5 transition-all duration-500"></div>
//               </div>
//             </div>
//           </div>

//           {/* Experience Section */}


//           <div className="bg-[#f6ede8]/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-[#e0d8cf]/50 mb-8">
//             <h3 className="text-xl font-semibold text-[#4a3728] mb-6">Experience</h3>

//             <div className="relative space-y-6">
//               {/* Timeline line */}
//               <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4a3728] to-[#6b4e3d] rounded-full"></div>

//               {[
//                 {
//                   title: 'Co-Founder',
//                   company: 'Thronet Technology Private Limited (Throne8)',
//                   period: '2022 - Present',
//                   description: 'Leading the development of AI-driven networking platforms, focusing on scalability, security, and user experience.',
//                   current: true
//                 },
//                 {
//                   title: 'Tech Lead',
//                   company: 'InnovateX Solutions',
//                   period: '2020 - 2022',
//                   description: 'Managed a team of developers to build secure, high-performance web applications for global clients.',
//                   current: false
//                 },
//               ].map((item, idx) => (
//                 <div key={idx} className="relative flex gap-4">
//                   {/* Timeline dot */}
//                   <div className="relative">
//                     <div className={`w-3 h-3 rounded-full ${item.current ? 'bg-[#4a3728] ring-4 ring-[#4a3728]/20' : 'bg-[#6b4e3d]'} mt-2`}>
//                       {item.current && <div className="absolute inset-0 bg-[#4a3728] rounded-full animate-pulse"></div>}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="flex-1 pb-2">
//                     <div className="bg-[#e0d8cf]/70 p-4 rounded-lg shadow-md hover:shadow-lg hover:bg-[#e0d8cf]/80 transition-all duration-300">
//                       <div className="flex items-start justify-between mb-2">
//                         <h4 className="font-semibold text-[#4a3728]">{item.title}</h4>
//                         {item.current && (
//                           <span className="px-2 py-1 bg-[#4a3728] text-[#f6ede8] text-xs rounded-full">Current</span>
//                         )}
//                       </div>

//                       <p className="text-sm text-[#4a3728]/80 font-medium mb-1">{item.company}</p>
//                       <p className="text-xs text-[#4a3728]/60 mb-3">{item.period}</p>
//                       <p className="text-sm text-[#4a3728]/70 leading-relaxed">{item.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Education Section */}

//           <div className="relative bg-[#f6ede8]/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-[#e0d8cf]/30 mb-8 overflow-hidden">
//             {/* Decorative background elements */}
//             <div className="absolute top-0 right-0 w-40 h-40 bg-[#e0d8cf]/20 rounded-full blur-2xl animate-pulse"></div>
//             <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#d4c2b1]/25 rounded-full blur-xl"></div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#4a3728]/10 rounded-full animate-ping"></div>

//             <div className="relative z-10">
//               <div className="flex items-center gap-4 mb-7">
//                 <div className="w-12 h-12 bg-gradient-to-br from-[#4a3728] to-[#6b4e3d] rounded-2xl flex items-center justify-center shadow-xl transform hover:rotate-3 transition-transform duration-300">
//                   <svg className="w-6 h-6 text-[#f6ede8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-[#4a3728] mb-1">Education</h3>
//                   <div className="w-16 h-1 bg-gradient-to-r from-[#4a3728] to-[#e0d8cf] rounded-full"></div>
//                 </div>
//               </div>

//               <div className="group relative bg-[#e0d8cf]/60 backdrop-blur-sm rounded-2xl p-7 shadow-lg hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500 border border-[#d4c2b1]/40">
//                 {/* Hover glow effect */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#4a3728]/5 to-[#6b4e3d]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                 <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"></div>

//                 <div className="relative z-10">
//                   <div className="flex items-start justify-between mb-4">
//                     <div>
//                       <h4 className="text-xl font-bold text-[#4a3728] group-hover:text-[#3d2e21] transition-colors duration-300 mb-1">
//                         B.Tech in Computer Science
//                       </h4>
//                       <div className="w-8 h-0.5 bg-[#4a3728]/30 group-hover:w-12 group-hover:bg-[#4a3728] transition-all duration-300"></div>
//                     </div>
//                     <div className="flex flex-col items-end">
//                       <div className="w-4 h-4 bg-gradient-to-r from-[#4a3728] to-[#6b4e3d] rounded-full animate-pulse shadow-lg"></div>
//                       <div className="text-xs text-[#4a3728]/60 mt-1 font-medium">Active</div>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-3 mb-4 p-3 bg-[#f6ede8]/50 rounded-xl">
//                     <svg className="w-5 h-5 text-[#4a3728]/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-2 4h2M9 15h2" />
//                     </svg>
//                     <div className="flex-1">
//                       <p className="text-sm font-bold text-[#4a3728]/90">Oriental College of Technology</p>
//                       <span className="text-xs px-3 py-1 bg-[#4a3728]/10 text-[#4a3728]/80 rounded-full font-semibold border border-[#4a3728]/20">2016 - 2020</span>
//                     </div>
//                   </div>

//                   <div className="relative">
//                     <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-[#4a3728] to-[#e0d8cf] rounded-full"></div>
//                     <p className="text-sm text-[#4a3728]/80 leading-relaxed pl-6 pr-2 py-2 bg-[#f6ede8]/40 rounded-r-xl font-medium">
//                       Specialized in AI and software engineering, with a focus on scalable system design.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Features Section */}


//           <div className="relative bg-[#f6ede8]/95 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-[#e0d8cf]/40 mb-8 overflow-hidden">
//             {/* Premium background elements */}
//             <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#e0d8cf]/15 via-[#d4c2b1]/10 to-transparent rounded-full blur-3xl"></div>
//             <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-[#4a3728]/8 via-[#6b4e3d]/5 to-transparent rounded-full blur-2xl"></div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#4a3728]/20 rounded-full animate-ping"></div>

//             {/* Floating decorative elements */}
//             <div className="absolute top-6 right-6 w-3 h-3 bg-[#4a3728]/20 rounded-full animate-pulse"></div>
//             <div className="absolute bottom-8 right-12 w-2 h-2 bg-[#e0d8cf]/40 rounded-full animate-bounce"></div>

//             <div className="relative z-10">
//               {/* Premium Header Section */}
//               <div className="text-center mb-12">
//                 <div className="inline-flex items-center gap-4 mb-6">
//                   <div className="w-16 h-16 bg-gradient-to-br from-[#4a3728] via-[#6b4e3d] to-[#4a3728] rounded-2xl flex items-center justify-center shadow-2xl transform hover:rotate-6 transition-all duration-500 relative">
//                     <div className="absolute inset-0 bg-gradient-to-br from-[#f6ede8]/20 to-transparent rounded-2xl"></div>
//                     <svg className="w-8 h-8 text-[#f6ede8] relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h3 className="text-3xl font-bold text-[#4a3728] mb-2">Premium Features</h3>
//                     <div className="flex items-center justify-center gap-2">
//                       <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#4a3728] rounded-full"></div>
//                       <div className="w-2 h-2 bg-[#4a3728] rounded-full"></div>
//                       <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#4a3728] rounded-full"></div>
//                     </div>
//                   </div>
//                 </div>

//                 <p className="text-[#4a3728]/70 text-lg font-medium max-w-2xl mx-auto">
//                   Enterprise-grade solutions designed for industry leaders
//                 </p>
//               </div>

//               {/* Premium Features Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {[
//                   {
//                     icon: 'M13 10V3L4 14h7v7l9-11h-7z',
//                     title: 'AI Networking',
//                     description: 'Connect smarter with AI-driven insights and predictive analytics.',
//                     badge: 'Advanced',
//                   },
//                   {
//                     icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
//                     title: 'Security First',
//                     description: 'Military-grade encryption with multi-layer security protocols.',
//                     badge: 'Enterprise',
//                   },
//                   {
//                     icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
//                     title: 'Scalable Innovation',
//                     description: 'Built to handle millions of operations with seamless growth.',
//                     badge: 'Pro',
//                   },
//                 ].map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="group relative bg-[#e0d8cf]/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.05] hover:-translate-y-2 transition-all duration-700 border border-[#d4c2b1]/30 overflow-hidden"
//                   >
//                     {/* Card hover effects */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-[#4a3728]/5 to-[#6b4e3d]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4a3728] via-[#6b4e3d] to-[#4a3728] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

//                     <div className="relative z-10 text-center">
//                       {/* Premium Badge */}
//                       <div className="absolute -top-2 -right-2 px-3 py-1 bg-gradient-to-r from-[#4a3728] to-[#6b4e3d] text-[#f6ede8] text-xs font-bold rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300">
//                         {item.badge}
//                       </div>

//                       {/* Icon Container */}
//                       <div className="relative mx-auto mb-6 w-20 h-20">
//                         <div className="absolute inset-0 bg-gradient-to-br from-[#4a3728] to-[#6b4e3d] rounded-2xl shadow-xl group-hover:shadow-2xl transition-shadow duration-300"></div>
//                         <div className="absolute inset-0.5 bg-gradient-to-br from-[#f6ede8]/10 to-transparent rounded-2xl"></div>
//                         <div className="relative w-full h-full flex items-center justify-center text-[#f6ede8] group-hover:scale-110 transition-transform duration-300">
//                           <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                           </svg>
//                         </div>
//                       </div>

//                       {/* Content */}
//                       <h4 className="text-xl font-bold text-[#4a3728] mb-3 group-hover:text-[#3d2e21] transition-colors duration-300">
//                         {item.title}
//                       </h4>

//                       <div className="w-12 h-0.5 bg-[#4a3728]/30 mx-auto mb-4 group-hover:w-16 group-hover:bg-[#4a3728] transition-all duration-300"></div>

//                       <p className="text-sm text-[#4a3728]/80 leading-relaxed font-medium px-2">
//                         {item.description}
//                       </p>

//                       {/* Bottom accent */}
//                       <div className="mt-6 flex justify-center">
//                         <div className="flex gap-1">
//                           <div className="w-2 h-2 bg-[#4a3728]/20 rounded-full group-hover:bg-[#4a3728] transition-colors duration-300"></div>
//                           <div className="w-1 h-1 bg-[#4a3728]/30 rounded-full mt-0.5 group-hover:bg-[#4a3728] transition-colors duration-300 delay-100"></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Premium Footer */}
//               <div className="text-center mt-12 pt-8 border-t border-[#e0d8cf]/50">
//                 <p className="text-[#4a3728]/60 text-sm font-medium">
//                   Trusted by Fortune 500 companies worldwide
//                 </p>
//                 <div className="flex justify-center gap-2 mt-3">
//                   {[...Array(5)].map((_, i) => (
//                     <div key={i} className="w-1.5 h-1.5 bg-[#4a3728]/30 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Activity Section */}


//           <div className="bg-gradient-to-br from-[#f6ede8]/90 via-[#f6ede8]/80 to-[#e0d8cf]/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-[#e0d8cf]/60 mb-8 relative overflow-hidden">
//             {/* Decorative background elements */}
//             <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#e0d8cf]/20 to-transparent rounded-full blur-3xl"></div>
//             <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-[#4a3728]/10 to-transparent rounded-full blur-2xl"></div>

//             {/* Header */}
//             <div className="flex justify-between items-center mb-6 relative z-10">
//               <div className="flex items-center gap-3">
//                 <div className="w-2 h-8 bg-gradient-to-b from-[#4a3728] to-[#7a5c3e] rounded-full"></div>
//                 <h3 className="text-2xl font-bold text-[#4a3728] tracking-tight">Activity</h3>
//               </div>
//               <div className="flex items-center gap-2 bg-[#4a3728]/10 px-4 py-2 rounded-full backdrop-blur-sm">
//                 <div className="w-2 h-2 bg-[#4a3728] rounded-full animate-pulse"></div>
//                 <p className="text-sm font-semibold text-[#4a3728]">3,282 followers</p>
//               </div>
//             </div>

//             {/* Navigation and Create Post */}
//             <div className="flex justify-between items-center mb-8 relative z-10">
//               <div className="bg-[#e0d8cf]/50 backdrop-blur-sm rounded-2xl p-1">
//                 <div className="flex">
//                   {['Posts', 'Comments', 'Videos', 'Images', 'Documents'].map((item) => (
//                     <button
//                       key={item}
//                       className={`px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 relative ${item === 'Posts'
//                           ? 'text-[#f6ede8] bg-[#4a3728] shadow-lg transform scale-105'
//                           : 'text-[#4a3728]/70 hover:text-[#4a3728] hover:bg-[#e0d8cf]/30'
//                         }`}
//                     >
//                       {item}
//                       {item === 'Posts' && (
//                         <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-[#4a3728] rounded-full"></div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               <button className="group px-6 py-3 bg-gradient-to-r from-[#4a3728] to-[#7a5c3e] text-[#f6ede8] rounded-2xl text-sm font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#7a5c3e] to-[#4a3728] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <svg className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
//                 </svg>
//                 <span className="relative z-10">Create a post</span>
//               </button>
//             </div>

//             {/* Posts */}
//             <div className="space-y-6 relative z-10">
//               {[
//                 {
//                   text: 'End of an Era 🥺👑<br />Thank you, King Kohli, for redefining Test cricket for our generation. 💯 ...<span class="text-[#7a5c3e] hover:underline cursor-pointer font-medium">more</span>',
//                   image: 'https://images.unsplash.com/photo-1593941703671-9a436e02c9d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
//                   likes: 12,
//                   comments: 0,
//                   reposts: 0,
//                   time: '2h ago'
//                 },
//                 {
//                   text: 'Even the sound of the sirens on the news can send a chill down your spine. Now imagine the courage it takes to walk with the fire — not away from it. ...<span class="text-[#7a5c3e] hover:underline cursor-pointer font-medium">more</span>',
//                   image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
//                   likes: 9,
//                   comments: 1,
//                   reposts: 1,
//                   time: '4h ago'
//                 },
//               ].map((post, idx) => (
//                 <div key={idx} className="group bg-gradient-to-br from-[#e0d8cf]/60 via-[#e0d8cf]/40 to-[#f6ede8]/30 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500 border border-[#e0d8cf]/40 relative overflow-hidden">
//                   {/* Post decorative element */}
//                   <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#4a3728]/5 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

//                   {/* User Info */}
//                   <div className="flex items-center gap-4 mb-4 relative z-10">
//                     <div className="relative">
//                       <div className="w-12 h-12 rounded-2xl overflow-hidden border-3 border-[#e0d8cf] shadow-lg">
//                         <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" alt="Profile" className="w-full h-full object-cover" />
//                       </div>
//                       <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#f6ede8] animate-pulse"></div>
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex items-center gap-2">
//                         <p className="text-base font-bold text-[#4a3728]">Honey Sharma</p>
//                         <svg className="w-5 h-5 text-[#4a3728]" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                       <p className="text-sm text-[#4a3728]/70 font-medium">Co-Founder @Throne8 | Empowering Pro...</p>
//                       <p className="text-xs text-[#4a3728]/50 mt-1">{post.time}</p>
//                     </div>
//                     <button className="p-2 text-[#4a3728]/60 hover:text-[#4a3728] hover:bg-[#e0d8cf]/30 rounded-xl transition-all duration-200">
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
//                       </svg>
//                     </button>
//                   </div>

//                   {/* Post Content */}
//                   <div className="relative z-10">
//                     <p className="text-[#4a3728] mb-6 text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: post.text }} />
//                     <div className="relative group-hover:scale-[1.01] transition-transform duration-500">
//                       <img src={post.image} alt={`Post ${idx + 1}`} className="w-full h-72 object-cover rounded-2xl shadow-lg" />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                     </div>
//                   </div>

//                   {/* Interaction Buttons */}
//                   <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#e0d8cf]/30 relative z-10">
//                     <div className="flex gap-6">
//                       <button className="group/btn flex items-center gap-2 text-[#4a3728]/70 hover:text-red-500 transition-all duration-200">
//                         <div className="p-2 rounded-xl group-hover/btn:bg-red-50 transition-colors duration-200">
//                           <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                           </svg>
//                         </div>
//                         <span className="text-sm font-semibold">{post.likes}</span>
//                       </button>

//                       <button className="group/btn flex items-center gap-2 text-[#4a3728]/70 hover:text-blue-500 transition-all duration-200">
//                         <div className="p-2 rounded-xl group-hover/btn:bg-blue-50 transition-colors duration-200">
//                           <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                           </svg>
//                         </div>
//                         <span className="text-sm font-semibold">{post.comments}</span>
//                       </button>

//                       <button className="group/btn flex items-center gap-2 text-[#4a3728]/70 hover:text-green-500 transition-all duration-200">
//                         <div className="p-2 rounded-xl group-hover/btn:bg-green-50 transition-colors duration-200">
//                           <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                           </svg>
//                         </div>
//                         <span className="text-sm font-semibold">{post.reposts}</span>
//                       </button>
//                     </div>

//                     <button className="group/btn flex items-center gap-2 text-[#4a3728]/70 hover:text-[#4a3728] transition-all duration-200">
//                       <div className="p-2 rounded-xl group-hover/btn:bg-[#e0d8cf]/30 transition-colors duration-200">
//                         <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
//                         </svg>
//                       </div>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Skills Section */}


//           <div className="relative bg-gradient-to-br from-[#f6ede8]/90 via-[#f6ede8]/80 to-[#e0d8cf]/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-[#e0d8cf]/50 mb-8 overflow-hidden group">
//             {/* Animated background elements */}
//             <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#e0d8cf]/30 to-[#4a3728]/10 rounded-full blur-2xl animate-pulse"></div>
//             <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-[#7a5c3e]/20 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-1000"></div>

//             {/* Floating particles */}
//             <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-[#4a3728]/20 rounded-full animate-bounce"></div>
//             <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-[#7a5c3e]/30 rounded-full animate-ping"></div>

//             <div className="relative z-10">
//               {/* Enhanced Header */}
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center gap-3">
//                   <div className="relative">
//                     <div className="w-12 h-12 bg-gradient-to-br from-[#4a3728] to-[#7a5c3e] rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-500">
//                       <svg className="w-6 h-6 text-[#f6ede8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                       </svg>
//                     </div>
//                     <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-[#4a3728] tracking-tight">Skills</h3>
//                     <p className="text-sm text-[#4a3728]/60 font-medium">Professional Expertise</p>
//                   </div>
//                 </div>
//                 <div className="bg-[#4a3728]/10 px-4 py-2 rounded-full backdrop-blur-sm">
//                   <span className="text-sm font-bold text-[#4a3728]">36 Total</span>
//                 </div>
//               </div>

//               {/* Skills Grid */}
//               <div className="space-y-6">
//                 {[
//                   {
//                     title: 'Entrepreneurship',
//                     subtitle: 'Co-Founder at Thronet Technology Private Limited (Throne8)',
//                     icon: (
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                       </svg>
//                     ),
//                     color: 'from-purple-500 to-indigo-600',
//                     bgColor: 'bg-purple-50'
//                   },
//                   {
//                     title: 'Startup Leadership',
//                     subtitle: 'Co-Founder at Thronet Technology Private Limited (Throne8)',
//                     icon: (
//                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                       </svg>
//                     ),
//                     color: 'from-emerald-500 to-teal-600',
//                     bgColor: 'bg-emerald-50'
//                   },
//                 ].map((skill, idx) => (
//                   <div key={idx} className="group/skill relative">
//                     {/* Skill Card */}
//                     <div className="bg-gradient-to-r from-[#e0d8cf]/40 via-[#e0d8cf]/20 to-transparent backdrop-blur-sm rounded-2xl p-6 border border-[#e0d8cf]/40 hover:border-[#4a3728]/30 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
//                       {/* Card background effect */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4a3728]/5 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500"></div>

//                       <div className="flex items-start gap-4 relative z-10">
//                         {/* Icon Container */}
//                         <div className="relative">
//                           <div className="w-14 h-14 bg-gradient-to-br from-[#4a3728] to-[#7a5c3e] rounded-2xl flex items-center justify-center text-[#f6ede8] shadow-lg group-hover/skill:scale-110 group-hover/skill:rotate-3 transition-all duration-300">
//                             {skill.icon}
//                           </div>
//                           {/* Skill level indicator */}
//                           <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-md">
//                             <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                             </svg>
//                           </div>
//                         </div>

//                         {/* Content */}
//                         <div className="flex-1 min-w-0">
//                           <div className="flex items-center justify-between mb-2">
//                             <h4 className="text-lg font-bold text-[#4a3728] group-hover/skill:text-[#7a5c3e] transition-colors duration-300">{skill.title}</h4>
//                             <div className="flex items-center gap-1">
//                               {[...Array(5)].map((_, i) => (
//                                 <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-[#4a3728]' : 'bg-[#e0d8cf]'}`}></div>
//                               ))}
//                             </div>
//                           </div>
//                           <p className="text-sm text-[#4a3728]/70 leading-relaxed mb-3">{skill.subtitle}</p>

//                           {/* Progress bar */}
//                           <div className="w-full bg-[#e0d8cf]/50 rounded-full h-2 overflow-hidden">
//                             <div className="h-full bg-gradient-to-r from-[#4a3728] to-[#7a5c3e] rounded-full transform scale-x-0 group-hover/skill:scale-x-full transition-transform duration-1000 origin-left" style={{ transform: 'scaleX(0.85)' }}></div>
//                           </div>

//                           {/* Years of experience */}
//                           <div className="flex items-center justify-between mt-3">
//                             <span className="text-xs text-[#4a3728]/60 font-medium">Expert Level</span>
//                             <span className="text-xs text-[#4a3728]/60 font-medium">5+ Years</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Enhanced Show All Button */}
//               <div className="mt-8 text-center">
//                 <button className="group/btn relative inline-flex items-center gap-3 bg-gradient-to-r from-[#4a3728] to-[#7a5c3e] text-[#f6ede8] px-8 py-4 rounded-2xl font-semibold text-sm hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
//                   {/* Button background animation */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#7a5c3e] to-[#4a3728] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

//                   <span className="relative z-10">Show all 36 skills</span>
//                   <svg className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>

//                   {/* Ripple effect */}
//                   <div className="absolute inset-0 rounded-2xl opacity-0 group-hover/btn:animate-ping">
//                     <div className="absolute inset-0 rounded-2xl bg-white/20"></div>
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Interests Section */}


//           <div className="relative bg-gradient-to-br from-[#f6ede8]/95 via-[#f6ede8]/85 to-[#e0d8cf]/70 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-[#e0d8cf]/60 mb-8 overflow-hidden group">
//             {/* Dynamic background elements */}
//             <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-radial from-[#4a3728]/10 via-[#7a5c3e]/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
//             <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-conic from-[#e0d8cf]/30 via-[#4a3728]/10 to-transparent rounded-full blur-2xl group-hover:rotate-180 transition-transform duration-[3000ms]"></div>

//             {/* Floating elements */}
//             <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce opacity-60"></div>
//             <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse opacity-50"></div>

//             <div className="relative z-10">
//               {/* Premium Header Design */}
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center gap-4">
//                   <div className="relative">
//                     {/* Animated icon container */}
//                     <div className="w-16 h-16 bg-gradient-to-br from-[#4a3728] via-[#7a5c3e] to-[#4a3728] rounded-3xl flex items-center justify-center shadow-xl transform -rotate-3 group-hover:rotate-3 transition-all duration-700">
//                       <svg className="w-8 h-8 text-[#f6ede8] animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                       </svg>
//                     </div>
//                     {/* Notification dot */}
//                     <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
//                       <span className="text-xs text-white font-bold">3</span>
//                     </div>
//                     {/* Glow effect */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-[#4a3728]/20 to-[#7a5c3e]/20 rounded-3xl blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                   </div>
//                   <div>
//                     <h3 className="text-3xl font-bold text-[#4a3728] tracking-tight mb-1">Interests</h3>
//                     <p className="text-sm text-[#4a3728]/60 font-medium">People & Topics You Follow</p>
//                   </div>
//                 </div>

//                 {/* Stats badge */}
//                 <div className="bg-gradient-to-r from-[#4a3728]/10 to-[#7a5c3e]/10 px-5 py-3 rounded-2xl backdrop-blur-sm border border-[#e0d8cf]/50">
//                   <div className="text-center">
//                     <p className="text-lg font-bold text-[#4a3728]">127</p>
//                     <p className="text-xs text-[#4a3728]/70 font-medium">Following</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Enhanced Navigation Tabs */}
//               <div className="mb-8">
//                 <div className="bg-gradient-to-r from-[#e0d8cf]/40 via-[#e0d8cf]/30 to-[#e0d8cf]/20 backdrop-blur-sm rounded-2xl p-2 shadow-inner">
//                   <div className="flex">
//                     {['Top Voices', 'Companies', 'Groups', 'Newsletters', 'Schools'].map((item) => (
//                       <button
//                         key={item}
//                         className={`relative flex-1 py-3 px-4 text-sm font-semibold rounded-xl transition-all duration-500 ${item === 'Top Voices'
//                             ? 'text-[#f6ede8] bg-gradient-to-r from-[#4a3728] to-[#7a5c3e] shadow-lg transform scale-105'
//                             : 'text-[#4a3728]/60 hover:text-[#4a3728] hover:bg-[#e0d8cf]/20'
//                           }`}
//                       >
//                         {item}
//                         {item === 'Top Voices' && (
//                           <>
//                             {/* Active indicator */}
//                             <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-[#f6ede8] rounded-full"></div>
//                             {/* Glow effect */}
//                             <div className="absolute inset-0 bg-gradient-to-r from-[#4a3728]/20 to-[#7a5c3e]/20 rounded-xl blur-lg scale-110 opacity-50"></div>
//                           </>
//                         )}
//                         {/* Badge for some tabs */}
//                         {(item === 'Companies' || item === 'Groups') && (
//                           <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
//                             {item === 'Companies' ? '5' : '2'}
//                           </span>
//                         )}
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Premium Interest Cards */}
//               <div className="space-y-6">
//                 {[
//                   {
//                     name: 'Anushree Jain',
//                     connection: '• 2nd',
//                     title: 'Co-founder, SocialTAG | Helping brands with Strategy-led influencer marketing campaigns',
//                     followers: '159,847 followers',
//                     image: 'https://images.unsplash.com/photo-1494790108755-2616b2cd96c4?w=150&h=150&fit=crop&crop=face',
//                     verified: true,
//                     growth: '+12%',
//                     expertise: ['Marketing', 'Strategy', 'Branding']
//                   },
//                   {
//                     name: 'Ayush Wadhwa',
//                     connection: '• 2nd',
//                     title: 'Founder, OWLED | Forbes 30u30 | Mastering Content Creation + Influencer Marketing, Ad Films & AI/AR | Angel Investor',
//                     followers: '58,018 followers',
//                     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
//                     verified: true,
//                     growth: '+8%',
//                     expertise: ['AI/AR', 'Content', 'Investment']
//                   },
//                 ].map((interest, idx) => (
//                   <div
//                     key={idx}
//                     className="group/card relative bg-gradient-to-r from-[#e0d8cf]/50 via-[#e0d8cf]/30 to-transparent backdrop-blur-sm rounded-3xl p-6 border border-[#e0d8cf]/40 hover:border-[#4a3728]/30 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
//                   >
//                     {/* Card background animation */}
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4a3728]/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

//                     {/* Growth indicator */}
//                     <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
//                       {interest.growth}
//                     </div>

//                     <div className="flex items-start gap-5 relative z-10">
//                       {/* Enhanced Profile Image */}
//                       <div className="relative">
//                         <div className="w-16 h-16 rounded-2xl overflow-hidden border-3 border-[#e0d8cf] shadow-xl group-hover/card:scale-110 group-hover/card:rotate-3 transition-all duration-500">
//                           <img src={interest.image} alt="Profile" className="w-full h-full object-cover" />
//                         </div>
//                         {/* Online status */}
//                         <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-[#f6ede8] animate-pulse"></div>
//                         {/* Verified badge */}
//                         {interest.verified && (
//                           <div className="absolute -top-1 -left-1 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
//                             <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
//                               <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                             </svg>
//                           </div>
//                         )}
//                       </div>

//                       {/* Content */}
//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-center gap-2 mb-2">
//                           <h4 className="text-lg font-bold text-[#4a3728] group-hover/card:text-[#7a5c3e] transition-colors duration-300">
//                             {interest.name}
//                           </h4>
//                           <span className="text-sm text-[#4a3728]/60 font-medium">{interest.connection}</span>
//                         </div>

//                         <p className="text-sm text-[#4a3728]/70 leading-relaxed mb-3 line-clamp-2">{interest.title}</p>

//                         {/* Expertise tags */}
//                         <div className="flex flex-wrap gap-2 mb-3">
//                           {interest.expertise.map((tag, tagIdx) => (
//                             <span key={tagIdx} className="px-2 py-1 bg-[#4a3728]/10 text-[#4a3728] text-xs font-medium rounded-lg">
//                               {tag}
//                             </span>
//                           ))}
//                         </div>

//                         <div className="flex items-center justify-between mb-4">
//                           <p className="text-xs text-[#4a3728]/60 font-medium flex items-center gap-1">
//                             <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                             </svg>
//                             {interest.followers}
//                           </p>

//                           {/* Activity indicator */}
//                           <div className="flex items-center gap-1 text-xs text-green-600">
//                             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                             <span className="font-medium">Active now</span>
//                           </div>
//                         </div>

//                         {/* Enhanced Following Button */}
//                         <button className="group/btn relative px-6 py-2 bg-gradient-to-r from-[#4a3728] to-[#7a5c3e] text-[#f6ede8] rounded-2xl text-sm font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 overflow-hidden">
//                           <div className="absolute inset-0 bg-gradient-to-r from-[#7a5c3e] to-[#4a3728] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
//                           <svg className="w-4 h-4 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                           </svg>
//                           <span className="relative z-10">Following</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Premium Show All Button */}
//               <div className="mt-8 text-center">
//                 <button className="group/show relative inline-flex items-center gap-4 bg-gradient-to-r from-transparent via-[#e0d8cf]/30 to-transparent backdrop-blur-sm border-2 border-[#4a3728]/20 hover:border-[#4a3728] text-[#4a3728] px-8 py-4 rounded-2xl font-bold text-sm hover:shadow-2xl transform hover:scale-105 transition-all duration-500 overflow-hidden">
//                   {/* Background ripple effect */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#4a3728]/5 via-[#7a5c3e]/5 to-[#4a3728]/5 opacity-0 group-hover/show:opacity-100 transition-opacity duration-300"></div>

//                   <div className="relative z-10 flex items-center gap-3">
//                     <span>Show all Top Voices</span>
//                     <div className="w-8 h-8 bg-gradient-to-r from-[#4a3728] to-[#7a5c3e] rounded-full flex items-center justify-center group-hover/show:rotate-180 transition-transform duration-500">
//                       <svg className="w-4 h-4 text-[#f6ede8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                       </svg>
//                     </div>
//                   </div>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Analytics Section */}
//           <div className="bg-[#f6ede8]/80 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-[#e0d8cf]/50 mb-8">
//             <h3 className="text-xl font-semibold text-[#4a3728] mb-6">Analytics</h3>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//               {[
//                 {
//                   icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
//                   value: 426,
//                   label: 'Profile Views',
//                   description: 'Discover who viewed your profile.',
//                   progress: '42.6%',
//                 },
//                 {
//                   icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
//                   value: 999,
//                   label: 'Post Impressions',
//                   description: 'Check out who’s engaging with your posts.',
//                   progress: '99.9%',
//                 },
//                 {
//                   icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
//                   value: 98,
//                   label: 'Search Appearances',
//                   description: 'See how often you appear in search results.',
//                   progress: '9.8%',
//                 },
//               ].map((item, idx) => (
//                 <div
//                   key={idx}
//                   className="relative p-5 bg-[#e0d8cf]/70 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
//                 >
//                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#4a3728] rounded-full flex items-center justify-center">
//                     <svg className="w-6 h-6 text-[#f6ede8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                     </svg>
//                   </div>
//                   <p className="text-3xl font-bold text-[#4a3728] mt-6">{item.value}</p>
//                   <p className="text-sm font-medium text-[#4a3728]/80 mt-1">{item.label}</p>
//                   <div className="mt-3 w-full h-1 bg-[#e0d8cf] rounded-full">
//                     <div className="h-1 bg-[#4a3728] rounded-full" style={{ width: item.progress }}></div>
//                   </div>
//                   <p className="text-xs text-[#4a3728]/70 mt-2">{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Sidebar (Right) */}
//         <div className="w-full md:w-80 md:min-w-[20rem]">
//           {/* Profile Progress Section */}
//           <div className="bg-[#f6ede8]/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-[#e0d8cf]/50 mb-8 relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-[#f6ede8]/50 to-[#e0d8cf]/50 rounded-3xl"></div>
//             <div className="relative z-10">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-2 bg-[#4a3728] rounded-xl text-[#f6ede8]">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#4a3728]">
//                   Profile Progress
//                 </h3>
//               </div>

//               <div className="space-y-6">
//                 {[
//                   {
//                     label: 'Profile Completion',
//                     progress: 85,
//                     description: 'Add more skills to reach 100%',
//                     color: 'bg-[#4a3728]',
//                     icon: (
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                       </svg>
//                     )
//                   },
//                   {
//                     label: 'Network Growth',
//                     progress: 60,
//                     description: 'Connect with 20 more professionals',
//                     color: 'bg-[#4a3728]',
//                     icon: (
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                       </svg>
//                     )
//                   },
//                   {
//                     label: 'Content Engagement',
//                     progress: 40,
//                     description: 'Share 3 more posts this week',
//                     color: 'bg-[#4a3728]',
//                     icon: (
//                       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//                       </svg>
//                     )
//                   },
//                 ].map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="group relative p-6 bg-[#e0d8cf]/70 backdrop-blur-sm rounded-2xl shadow-lg border border-[#e0d8cf]/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer"
//                   >
//                     <div className={`absolute inset-0 bg-[#4a3728]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

//                     <div className="relative z-10">
//                       <div className="flex items-center justify-between mb-4">
//                         <div className="flex items-center gap-3">
//                           <div className={`p-2 ${item.color} rounded-xl text-[#f6ede8] shadow-lg`}>
//                             {item.icon}
//                           </div>
//                           <span className="text-lg font-bold text-[#4a3728]">{item.label}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <span className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent">
//                             {item.progress}%
//                           </span>
//                         </div>
//                       </div>

//                       <div className="relative mb-4">
//                         <div className="w-full bg-[#4a3728]/20 rounded-full h-3 overflow-hidden">
//                           <div
//                             className="h-3 rounded-full bg-[#4a3728] shadow-lg transition-all duration-1000 ease-out relative group-hover:animate-pulse"
//                             style={{ width: `${item.progress}%` }}
//                           >
//                             <div className="absolute inset-0 bg-white/30 rounded-full"></div>
//                           </div>
//                         </div>
//                       </div>

//                       <p className="text-sm text-[#4a3728]/70 font-medium">{item.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* People You May Know Section */}
//           <div className="sticky top-20 bg-[#f6ede8]/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-[#e0d8cf]/50 relative overflow-hidden">
//             <div className="absolute inset-0 bg-gradient-to-br from-[#f6ede8]/50 to-[#e0d8cf]/50 rounded-3xl"></div>
//             <div className="relative z-10">
//               <div className="flex items-center gap-3 mb-4">
//                 <div className="p-2 bg-[#4a3728] rounded-xl text-[#f6ede8]">
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-[#4a3728]">
//                   People You May Know
//                 </h3>
//               </div>
//               <p className="text-sm text-[#4a3728]/70 mb-6 font-medium">From your industry</p>

//               <div className="space-y-4">
//                 {[
//                   {
//                     name: 'Chhavi Arora',
//                     title: 'AWS Cloud & DevOps | IoT Solutions | Sophomore @ IIIT...',
//                     avatar: 'CA'
//                   },
//                   {
//                     name: 'Manan Telrandhe',
//                     title: 'Tech-savvy Software Developer',
//                     avatar: 'MT'
//                   },
//                   {
//                     name: 'Ankit Shinde',
//                     title: 'Software Engineer @Techvalens || Nodejs Developer ||...',
//                     avatar: 'AS'
//                   },
//                   {
//                     name: 'Harshit Kushwah',
//                     title: 'Software Engineer @NIMBLEdGE | Former iOS...',
//                     avatar: 'HK'
//                   },
//                 ].map((person, idx) => (
//                   <div
//                     key={idx}
//                     className="group flex items-center gap-4 p-5 bg-[#e0d8cf]/70 backdrop-blur-sm rounded-2xl shadow-lg border border-[#e0d8cf]/50 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer"
//                   >
//                     <div className="relative">
//                       <div className="w-14 h-14 bg-[#4a3728] rounded-2xl flex items-center justify-center text-[#f6ede8] font-bold text-lg shadow-lg">
//                         {person.avatar}
//                       </div>
//                       <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
//                     </div>

//                     <div className="flex-1">
//                       <div className="flex items-center gap-2 mb-1">
//                         <p className="text-lg font-bold text-[#4a3728]">{person.name}</p>
//                         <svg className="w-5 h-5 text-[#4a3728]" fill="currentColor" viewBox="0 0 24 24">
//                           <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                         </svg>
//                       </div>
//                       <p className="text-sm text-[#4a3728]/70 mb-3 line-clamp-2">{person.title}</p>

//                       <button className="group-hover:scale-105 px-4 py-2 bg-transparent border border-[#4a3728] text-[#4a3728] rounded-xl text-sm font-semibold shadow-lg hover:bg-[#4a3728] hover:text-[#f6ede8] transition-all duration-300 flex items-center gap-2">
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//                         </svg>
//                         Connect
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;



//=============================================================================================


// import { useState } from 'react';

// const dummySuggestions = [
//   {
//     id: 1,
//     name: "Sakshi Pandey",
//     title: "Attended Technocrats Institute Of Technology",
//     mutuals: "Ankit and 51 other mutual connections",
//     image: "https://randomuser.me/api/portraits/women/65.jpg",
//     location: "Indore, MP"
//   },
//   {
//     id: 2,
//     name: "Shreyansh Khatarkar",
//     title: "SCADA, IoT, Power System",
//     mutuals: "Ankit and 23 other mutual connections",
//     image: "https://randomuser.me/api/portraits/men/45.jpg",
//     location: "Bhopal, MP"
//   },
//   {
//     id: 3,
//     name: "Chinmay Yadav",
//     title: "Student | Learner | SGSITS",
//     mutuals: "Deepak and 6 other mutual connections",
//     image: "https://randomuser.me/api/portraits/men/52.jpg",
//     location: "Indore, MP"
//   },
//   {
//     id: 4,
//     name: "RK",
//     title: "Full-Stack Developer",
//     mutuals: "Ankit and 45 other mutual connections",
//     image: "https://randomuser.me/api/portraits/men/88.jpg",
//     location: "Mumbai, MH"
//   }
// ];

// const NetworkPage = () => {
//   const [activeTab, setActiveTab] = useState('grow');
//   const [connectedUsers, setConnectedUsers] = useState(new Set());

//   const handleConnect = (userId) => {
//     setConnectedUsers(prev => new Set([...prev, userId]));
//   };

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: '#f6ede8' }}>
//       {/* Floating Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-5" style={{ backgroundColor: '#4a3728' }}></div>
//         <div className="absolute top-60 right-20 w-24 h-24 rounded-full opacity-5" style={{ backgroundColor: '#4a3728' }}></div>
//         <div className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full opacity-5" style={{ backgroundColor: '#4a3728' }}></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 p-6">
//         {/* Sidebar: Manage My Network */}
//         <div className="w-full lg:w-80">
//           <div className="rounded-3xl shadow-2xl border-2 overflow-hidden transform hover:scale-105 transition-all duration-300"
//             style={{ backgroundColor: '#e0d8cf', borderColor: '#4a3728', borderOpacity: 0.1 }}>
//             <div className="p-8 relative overflow-hidden">
//               <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-10"></div>
//               <div className="relative z-10">
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ backgroundColor: '#f6ede8' }}>
//                     🌐
//                   </div>
//                   <div>
//                     <h2 className="text-2xl font-black" style={{ color: '#4a3728' }}>My Network</h2>
//                     <p className="text-sm opacity-70" style={{ color: '#4a3728' }}>Build meaningful connections</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="p-6 space-y-4">
//               {[
//                 { label: 'Connections', count: 3288, icon: '👥', gradient: 'from-blue-400 to-purple-500' },
//                 { label: 'Contacts', count: 523, icon: '📱', gradient: 'from-green-400 to-blue-500' },
//                 { label: 'Following & Followers', icon: '👤', gradient: 'from-pink-400 to-red-500' },
//                 { label: 'Groups', count: 7, icon: '🔗', gradient: 'from-yellow-400 to-orange-500' },
//                 { label: 'Events', count: 3, icon: '📅', gradient: 'from-purple-400 to-pink-500' },
//                 { label: 'Pages', count: 168, icon: '📄', gradient: 'from-indigo-400 to-purple-500' },
//                 { label: 'Newsletters', count: 51, icon: '📬', gradient: 'from-teal-400 to-green-500' }
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300"
//                   style={{ backgroundColor: '#f6ede8' }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300"
//                     style={{ background: `linear-gradient(135deg, #4a3728, #6b4e3d)` }}></div>
//                   <div className="relative p-4 flex justify-between items-center">
//                     <div className="flex items-center gap-4">
//                       <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shadow-lg"
//                         style={{ backgroundColor: '#e0d8cf' }}>
//                         {item.icon}
//                       </div>
//                       <span className="font-bold group-hover:translate-x-2 transition-transform duration-300"
//                         style={{ color: '#4a3728' }}>{item.label}</span>
//                     </div>
//                     {item.count !== undefined && (
//                       <div className="relative">
//                         <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-orange-400 rounded-full blur opacity-30"></div>
//                         <span className="relative text-sm font-black px-3 py-1 rounded-full shadow-lg"
//                           style={{ color: '#4a3728', backgroundColor: '#e0d8cf' }}>
//                           {item.count}
//                         </span>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 space-y-8">
//           {/* Enhanced Tabs */}
//           {/* <div className="rounded-3xl shadow-2xl p-8 border-2 relative overflow-hidden" 
//                style={{backgroundColor: '#e0d8cf', borderColor: '#4a3728', borderOpacity: 0.1}}>
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"></div>
//             <div className="relative flex gap-8">
//               {['grow', 'catchup'].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`relative font-black text-lg pb-4 transition-all duration-300 ${
//                     activeTab === tab ? 'transform scale-110' : 'opacity-60 hover:opacity-100'
//                   }`}
//                   style={{color: '#4a3728'}}
//                 >
//                   {tab === 'grow' ? ' Grow' : ' Catch Up'}
//                   {activeTab === tab && (
//                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full shadow-lg"></div>
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div> */}
//           <div className="max-w-4xl mx-auto p-6 space-y-8">
//             {/* Tab Navigation Section */}
//             <div className="rounded-3xl shadow-2xl p-8 border-2 relative overflow-hidden"
//               style={{ backgroundColor: '#e0d8cf', borderColor: '#4a3728', borderOpacity: 0.1 }}>
//               <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-5"></div>
//               <div className="relative flex gap-8">
//                 {['grow', 'catchup'].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`relative font-black text-lg pb-4 transition-all duration-300 ${activeTab === tab ? 'transform scale-110' : 'opacity-60 hover:opacity-100'
//                       }`}
//                     style={{ color: '#4a3728' }}
//                   >
//                     {tab === 'grow' ? ' Grow' : ' Catch Up'}
//                     {activeTab === tab && (
//                       <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full shadow-lg"></div>
//                     )}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Profile Viewer Card Section */}
//             <div className="rounded-3xl shadow-2xl p-8 border-2 relative overflow-hidden"
//               style={{ backgroundColor: '#f6ede8', borderColor: '#e0d8cf' }}>
//               <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-transparent to-orange-100 opacity-30"></div>
//               <div className="relative flex justify-between items-center">
//                 <div className="flex items-center gap-4">
//                   <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl"
//                     style={{ backgroundColor: '#e0d8cf' }}>
//                     👁️
//                   </div>
//                   <div>
//                     <h4 className="font-black text-xl mb-2" style={{ color: '#4a3728' }}>
//                       Who s Viewed Your Profile?
//                     </h4>
//                     <p className="text-sm opacity-70" style={{ color: '#4a3728' }}>
//                       Discover who s interested in your professional journey
//                     </p>
//                   </div>
//                 </div>
//                 <button className="group relative overflow-hidden px-6 py-3 rounded-2xl font-black shadow-xl transform hover:scale-105 transition-all duration-300"
//                   style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}>
//                   <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <span className="relative group-hover:text-white">🌟 Try Premium</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Enhanced People You May Know - MOVED UP */}
//           {/* <div className="rounded-3xl shadow-2xl p-8 border-2"
//             style={{ backgroundColor: '#e0d8cf', borderColor: '#4a3728', borderOpacity: 0.1 }}>
//             <div className="flex justify-between items-center mb-8">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
//                   style={{ backgroundColor: '#f6ede8' }}>
//                   🤝
//                 </div>
//                 <h4 className="text-3xl font-black" style={{ color: '#4a3728' }}>People You May Know</h4>
//               </div>
//               <button className="text-sm font-bold opacity-70 hover:opacity-100 transition-opacity px-4 py-2 rounded-xl"
//                 style={{ color: '#4a3728', backgroundColor: '#f6ede8' }}>
//                 See all →
//               </button>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//               {dummySuggestions.map((person) => (
//                 <div
//                   key={person.id}
//                   className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-700 transform hover:scale-105"
//                   style={{ backgroundColor: '#f6ede8' }}
//                 >



//                   <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
//                     <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-bl-3xl"></div>
//                   </div>

//                   <div className="relative p-5">
//                     <div className="flex flex-col items-center text-center">

//                       <div className="relative mb-4 group-hover:animate-pulse">
//                         <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
//                         <div className="relative">
//                           <img
//                             src={person.image}
//                             alt={person.name}
//                             className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-xl relative z-10"
//                             onError={(e) => { e.target.src = 'https://via.placeholder.com/64'; }}
//                           />

//                         </div>
//                       </div>


//                       <h3 className="font-bold text-base mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-pink-600 transition-all duration-500"
//                         style={{ color: '#4a3728' }}>
//                         {person.name}
//                       </h3>


//                       <p className="text-xs opacity-75 mb-2 font-medium leading-tight" style={{ color: '#4a3728' }}>
//                         {person.title}
//                       </p>


//                       <div className="flex items-center gap-1 mb-2">
//                         <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full"></div>
//                         <span className="text-xs opacity-60 font-medium" style={{ color: '#4a3728' }}>{person.location}</span>
//                       </div>


//                       <div className="flex items-center gap-1 mb-4">
//                         <div className="flex -space-x-1">
//                           <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border border-white"></div>
//                           <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border border-white"></div>
//                           <div className="w-4 h-4 bg-gradient-to-r from-pink-400 to-red-400 rounded-full border border-white"></div>
//                         </div>
//                         <span className="text-xs opacity-50 font-medium ml-1" style={{ color: '#4a3728' }}>
//                           {person.mutuals}
//                         </span>
//                       </div>


//                       <button
//                         onClick={() => handleConnect(person.id)}
//                         disabled={connectedUsers.has(person.id)}
//                         className={`w-full py-2.5 px-4 rounded-xl text-sm font-bold shadow-lg transform transition-all duration-300 ${connectedUsers.has(person.id)
//                             ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white cursor-default scale-95'
//                             : 'text-white hover:scale-105 hover:shadow-xl active:scale-95'
//                           }`}
//                         style={{
//                           background: connectedUsers.has(person.id)
//                             ? 'linear-gradient(135deg, #10b981, #14b8a6)'
//                             : 'linear-gradient(135deg, #8b5cf6, #a855f7, #ec4899)'
//                         }}
//                       >
//                         <span className="flex items-center justify-center gap-2">
//                           {connectedUsers.has(person.id) ? (
//                             <>
//                               <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
//                                 <span className="text-emerald-500 text-xs">✓</span>
//                               </span>
//                               Connected
//                             </>
//                           ) : (
//                             <>
//                               <span className="animate-pulse">✨</span>
//                               Connect
//                             </>
//                           )}
//                         </span>
//                       </button>
//                     </div>
//                   </div>

//                   <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//                     <div className="absolute top-4 left-4 w-1 h-1 bg-violet-400 rounded-full animate-ping"></div>
//                     <div className="absolute top-8 right-6 w-1 h-1 bg-pink-400 rounded-full animate-ping animation-delay-200"></div>
//                     <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-400"></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div> */}


//           <div className="rounded-3xl shadow-2xl p-8 border-2"
//   style={{ backgroundColor: '#e0d8cf', borderColor: '#4a3728', borderOpacity: 0.1 }}>
//   <div className="flex justify-between items-center mb-8">
//     <div className="flex items-center gap-4">
//       <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
//         style={{ backgroundColor: '#f6ede8' }}>
//         🤝
//       </div>
//       <h4 className="text-3xl font-black" style={{ color: '#4a3728' }}>People You May Know</h4>
//     </div>
//     <button className="text-sm font-bold opacity-70 hover:opacity-100 transition-opacity px-4 py-2 rounded-xl"
//       style={{ color: '#4a3728', backgroundColor: '#f6ede8' }}>
//       See all →
//     </button>
//   </div>

//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//     {dummySuggestions.map((person) => (
//       <div
//         key={person.id}
//         className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-700 transform hover:-translate-y-1 hover:border-[#4a3728] hover:shadow-[0_0_15px_rgba(74,55,40,0.3)]"
//         style={{ backgroundColor: '#f6ede8' }}
//       >
//         <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
//           <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-bl-3xl"></div>
//         </div>

//         <div className="relative p-5">
//           <div className="flex flex-col items-center text-center">
//             <div className="relative mb-4 group-hover:animate-pulse">
//               <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
//               <div className="relative">
//                 <img
//                   src={person.image}
//                   alt={person.name}
//                   className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-xl relative z-10"
//                   onError={(e) => { e.target.src = 'https://via.placeholder.com/64'; }}
//                 />
//               </div>
//             </div>

//             <h3 className="font-bold text-base mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-600 group-hover:to-pink-600 transition-all duration-500"
//               style={{ color: '#4a3728' }}>
//               {person.name}
//             </h3>

//             <p className="text-xs opacity-75 mb-2 font-medium leading-tight" style={{ color: '#4a3728' }}>
//               {person.title}
//             </p>

//             <div className="flex items-center gap-1 mb-2">
//               <div className="w-2 h-2 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full"></div>
//               <span className="text-xs opacity-60 font-medium" style={{ color: '#4a3728' }}>{person.location}</span>
//             </div>

//             <div className="flex items-center gap-1 mb-4">
//               <div className="flex -space-x-1">
//                 <div className="w-4 h-4 bg-[#f6ede8] rounded-full border border-white"></div>
//                 <div className="w-4 h-4 bg-[#e0d8cf] rounded-full border border-white"></div>
//                 <div className="w-4 h-4 bg-[#f6ede8] rounded-full border border-white"></div>
//               </div>
//               <span className="text-xs opacity-50 font-medium ml-1" style={{ color: '#4a3728' }}>
//                 {person.mutuals}
//               </span>
//             </div>

//             <button
//               onClick={() => handleConnect(person.id)}
//               disabled={connectedUsers.has(person.id)}
//               className={`w-full py-2.5 px-4 rounded-xl text-sm font-bold shadow-lg transform transition-all duration-300 ${connectedUsers.has(person.id)
//                   ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white cursor-default scale-95'
//                   : 'text-[#4a3728] hover:bg-[#f6ede8] hover:border hover:border-[#4a3728] hover:shadow-md hover:opacity-90 active:scale-95'
//                 }`}
//               style={{
//                 background: connectedUsers.has(person.id)
//                   ? 'linear-gradient(135deg, #10b981, #14b8a6)'
//                   : '#e0d8cf'
//               }}
//             >
//               <span className="flex items-center justify-center gap-2">
//                 {connectedUsers.has(person.id) ? (
//                   <>
//                     <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
//                       <span className="text-emerald-500 text-xs">✓</span>
//                     </span>
//                     Connected
//                   </>
//                 ) : (
//                   <>
//                     <span className="animate-pulse">✨</span>
//                     Connect
//                   </>
//                 )}
//               </span>
//             </button>
//           </div>
//         </div>

//         <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//           <div className="absolute top-4 left-4 w-1 h-3 bg-[#f6ede8] rounded-full animate-pulse"></div>
//           <div className="absolute top-8 right-6 w-1 h-3 bg-[#e0d8cf] rounded-full animate-pulse"></div>
//           <div className="absolute bottom-6 left-6 w-1 h-3 bg-[#f6ede8] rounded-full animate-pulse"></div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>




//           {/* Redesigned Technology Industry Section */}
//           <div className="rounded-3xl shadow-2xl p-8 border-2"
//             style={{ backgroundColor: '#e0d8cf', borderColor: '#4a3728', borderOpacity: 0.1 }}>
//             <div className="flex justify-between items-center mb-8">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
//                   style={{ backgroundColor: '#f6ede8' }}>
//                   💻
//                 </div>
//                 <h2 className="text-2xl font-black" style={{ color: '#4a3728' }}>
//                   Tech Industry Leaders
//                 </h2>
//               </div>
//               <button className="text-sm font-bold opacity-70 hover:opacity-100 transition-opacity px-4 py-2 rounded-xl"
//                 style={{ color: '#4a3728', backgroundColor: '#f6ede8' }}>
//                 Show all →
//               </button>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//               {[
//                 {
//                   name: "Kushal Vijay",
//                   title: "Software Engineer 2 @Microsoft",
//                   followers: "165K LinkedIn",
//                   mutuals: "Aman, Muskan and 198 others followed",
//                   profileImg: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
//                   verified: true,
//                   specialty: "Cloud Architecture"
//                 },
//                 {
//                   name: "RK",
//                   title: "Full-Stack Developer",
//                   followers: "50K followers",
//                   mutuals: "Ankit and 45 others followed",
//                   profileImg: "https://randomuser.me/api/portraits/men/88.jpg",
//                   verified: true,
//                   specialty: "React & Node.js"
//                 },
//                 {
//                   name: "Vanshika Sharma",
//                   title: "Product Manager @Google",
//                   followers: "80K LinkedIn",
//                   mutuals: "Deepak and 30 others followed",
//                   profileImg: "https://randomuser.me/api/portraits/women/50.jpg",
//                   verified: true,
//                   specialty: "AI Products"
//                 }
//               ].map((person, index) => (
//                 <div
//                   key={index}
//                   className="group relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 transform hover:scale-105"
//                   style={{ backgroundColor: '#f6ede8' }}
//                 >
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>

//                   <div className="relative p-6 border-b" style={{ borderColor: '#e0d8cf' }}>
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="px-3 py-1 rounded-full text-xs font-black"
//                         style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}>
//                         {person.specialty}
//                       </div>
//                       {person.verified && (
//                         <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
//                           <span className="text-white text-xs font-bold">✓</span>
//                         </div>
//                       )}
//                     </div>

//                     <div className="flex items-center gap-4">
//                       <div className="relative">
//                         <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur opacity-40"></div>
//                         <img
//                           src={person.profileImg}
//                           alt={person.name}
//                           className="relative w-16 h-16 rounded-full border-4 border-white object-cover shadow-xl"
//                           onError={(e) => { e.target.src = 'https://via.placeholder.com/64'; }}
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-black text-lg mb-1" style={{ color: '#4a3728' }}>{person.name}</h3>
//                         <p className="text-sm opacity-80 font-medium" style={{ color: '#4a3728' }}>{person.title}</p>
//                         <p className="text-xs opacity-60" style={{ color: '#4a3728' }}>{person.followers}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="p-6">
//                     <p className="text-xs opacity-60 mb-4 font-medium text-center" style={{ color: '#4a3728' }}>
//                       {person.mutuals}
//                     </p>
//                     <button className="w-full py-3 rounded-2xl text-sm font-black border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group-hover:border-transparent group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-600"
//                       style={{ borderColor: '#4a3728', color: '#4a3728' }}>
//                       <span className="group-hover:hidden">+ Follow</span>
//                       <span className="hidden group-hover:inline">🚀 Follow Now</span>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Premium Profiles with Enhanced Design */}
//           <div className="rounded-3xl shadow-2xl p-8 border-2"
//             style={{ backgroundColor: '#e0d8cf', borderColor: '#4a3728', borderOpacity: 0.1 }}>
//             <div className="flex justify-between items-center mb-8">
//               <div className="flex items-center gap-4">
//                 <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
//                   style={{ backgroundColor: '#f6ede8' }}>
//                   ⭐
//                 </div>
//                 <h2 className="text-3xl font-black" style={{ color: '#4a3728' }}>
//                   Premium Spotlight
//                 </h2>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[
//                 {
//                   name: "Ananya Dev",
//                   title: "AI Researcher & Innovation Leader",
//                   stats: "120K followers • Google DevFest Speaker",
//                   img: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33",
//                   badge: "AI Pioneer",
//                   achievements: ["TEDx Speaker", "Published Author", "Forbes 30 Under 30"]
//                 },
//                 {
//                   name: "Rohan Kapoor",
//                   title: "CTO & Startup Mentor",
//                   stats: "90K followers • 5 Successful Exits",
//                   img: "https://randomuser.me/api/portraits/men/75.jpg",
//                   badge: "Tech Visionary",
//                   achievements: ["Y Combinator", "Angel Investor", "Tech Advisor"]
//                 },
//                 {
//                   name: "Priya Mehra",
//                   title: "Data Science & ML Expert",
//                   stats: "150K followers • TEDx Speaker",
//                   img: "https://randomuser.me/api/portraits/women/60.jpg",
//                   badge: "Data Queen",
//                   achievements: ["Kaggle Grandmaster", "MIT Graduate", "AI Researcher"]
//                 }
//               ].map((user, index) => (
//                 <div
//                   key={index}
//                   className="group relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 transform hover:scale-105"
//                   style={{ backgroundColor: '#f6ede8' }}
//                 >
//                   {/* Premium gradient border */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 p-0.5 rounded-2xl">
//                     <div className="w-full h-full rounded-2xl" style={{ backgroundColor: '#f6ede8' }}></div>
//                   </div>

//                   <div className="relative p-5">
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="relative">
//                         <img
//                           src={user.img}
//                           alt={user.name}
//                           className="w-14 h-14 rounded-full border-3 border-amber-300 object-cover shadow-lg"
//                           onError={(e) => { e.target.src = 'https://via.placeholder.com/56'; }}
//                         />
//                       </div>
//                       <div className="px-2 py-1 rounded-full text-xs font-bold text-amber-800 bg-gradient-to-r from-amber-200 to-orange-200">
//                         ⭐ {user.badge}
//                       </div>
//                     </div>

//                     <h3 className="text-lg font-bold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300"
//                       style={{ color: '#4a3728' }}>
//                       {user.name}
//                     </h3>

//                     <p className="text-sm opacity-80 mb-2 font-medium" style={{ color: '#4a3728' }}>
//                       {user.title}
//                     </p>

//                     <p className="text-xs opacity-60 mb-3" style={{ color: '#4a3728' }}>
//                       {user.stats}
//                     </p>

//                     <div className="mb-4">
//                       <div className="flex flex-wrap gap-1">
//                         {user.achievements.slice(0, 2).map((achievement, i) => (
//                           <span key={i}
//                             className="text-xs px-2 py-1 rounded-full font-medium opacity-80"
//                             style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}>
//                             {achievement}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     <button className="w-full px-3 py-2 rounded-xl font-bold text-white shadow-lg transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
//                       <span className="flex items-center justify-center gap-1 text-sm">
//                         ⭐ View Profile
//                       </span>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Redesigned Profile Completion - MOVED DOWN */}
//           <div className="rounded-3xl shadow-2xl border-2 overflow-hidden"
//             style={{ backgroundColor: '#e0d8cf', borderColor: '#4a3728', borderOpacity: 0.1 }}>
//             <div className="relative p-8">
//               <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
//                 style={{ backgroundColor: '#4a3728', transform: 'translate(50%, -50%)' }}></div>
//               <div className="relative flex items-start justify-between">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-3 mb-4">
//                     <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
//                       style={{ backgroundColor: '#f6ede8' }}>
//                       ✨
//                     </div>
//                     <div>
//                       <h3 className="text-2xl font-black" style={{ color: '#4a3728' }}>Complete Your Profile!</h3>
//                       <p className="text-sm opacity-70" style={{ color: '#4a3728' }}>Unlock more networking opportunities</p>
//                     </div>
//                   </div>

//                   <div className="relative mb-6">
//                     <div className="w-full h-3 rounded-full overflow-hidden" style={{ backgroundColor: '#f6ede8' }}>
//                       <div className="h-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 rounded-full shadow-inner transition-all duration-1000"
//                         style={{ width: '12%' }}></div>
//                     </div>
//                   </div>

//                   <button className="group relative overflow-hidden px-8 py-4 rounded-2xl font-black text-white shadow-2xl transform hover:scale-105 transition-all duration-300"
//                     style={{ background: 'linear-gradient(135deg, #4a3728 0%, #6b4e3d 50%, #8b6f47 100%)' }}>
//                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
//                     <span className="relative">🎯 Boost My Profile</span>
//                   </button>
//                 </div>

//                 <div className="text-center">
//                   <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black shadow-2xl mb-2"
//                     style={{ backgroundColor: '#f6ede8', color: '#4a3728' }}>
//                     12%
//                   </div>
//                   <div className="text-xs font-bold opacity-60" style={{ color: '#4a3728' }}>Profile Score</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Premium Banner Redesign - MOVED DOWN */}
//           {/* <div className="rounded-3xl shadow-2xl p-8 border-2 relative overflow-hidden" 
//                style={{backgroundColor: '#f6ede8', borderColor: '#e0d8cf'}}>
//             <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-transparent to-orange-100 opacity-30"></div>
//             <div className="relative flex justify-between items-center">
//               <div className="flex items-center gap-4">
//                 <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl" 
//                      style={{backgroundColor: '#e0d8cf'}}>
//                   👁️
//                 </div>
//                 <div>
//                   <h4 className="font-black text-xl mb-2" style={{color: '#4a3728'}}>
//                     Who s Viewed Your Profile?
//                   </h4>
//                   <p className="text-sm opacity-70" style={{color: '#4a3728'}}>
//                     Discover who s interested in your professional journey
//                   </p>
//                 </div>
//               </div>
//               <button className="group relative overflow-hidden px-6 py-3 rounded-2xl font-black shadow-xl transform hover:scale-105 transition-all duration-300"
//                       style={{backgroundColor: '#e0d8cf', color: '#4a3728'}}>
//                 <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <span className="relative group-hover:text-white">🌟 Try Premium</span>
//               </button>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NetworkPage;

//====================================================================================================================

// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';

// const JobsPage = () => {
//   const [hoveredJob, setHoveredJob] = useState(null);


//   const premiumJobs = [
//     {
//       id: 1,
//       title: "Co-Founder",
//       company: "Klayworkz",
//       location: "Brista-KlayBar Art Cafe · Karnataka, India (REMOTE)",
//       match: "Matches your Easy Apply preferences",
//       color: "from-amber-400 to-orange-500"
//     },
//     {
//       id: 2,
//       title: "Startup Founder",
//       company: "Pashet India",
//       location: "REMOTE",
//       match: "2 weeks ago · Easy Apply",
//       color: "from-purple-400 to-pink-500"
//     },
//   ];

//   const applyItems = [
//     {
//       id: 1,
//       title: "Senior Developer",
//       company: "TechCorp",
//       status: "Applied 2 days ago",
//       action: "View Application",
//       progress: 75
//     },
//     {
//       id: 2,
//       title: "Product Manager",
//       company: "InnovateX",
//       status: "Applied 5 days ago",
//       action: "View Application",
//       progress: 50
//     },
//     {
//       id: 3,
//       title: "UX Designer",
//       company: "DesignLabs",
//       status: "Applied 1 week ago",
//       action: "View Application",
//       progress: 25
//     },
//   ];

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: '#f6ede8' }}>
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 py-8 px-6">
//         {/* Sidebar */}
//         <div className="w-full lg:w-80 flex flex-col gap-6">
//           {/* Profile Section */}
//           <div className="relative group cursor-pointer max-w-md">
//             {/* Outer glow effect */}
//             <div className="absolute -inset-3 bg-gradient-to-r from-amber-300/30 via-orange-300/30 to-yellow-300/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

//             {/* Main card container */}
//             <div
//               className="relative rounded-2xl p-6 shadow-lg border border-gray-200 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1 overflow-hidden"
//               style={{ backgroundColor: '#f6ede8' }}
//             >
//               {/* Subtle background pattern */}
//               <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-amber-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               {/* Content wrapper */}
//               <div className="relative z-10">
//                 {/* Header section with profile */}
//                 <div className="flex items-start space-x-4 mb-4">
//                   {/* Profile image section */}
//                   <div className="relative flex-shrink-0">
//                     <img
//                       src="https://randomuser.me/api/portraits/men/88.jpg"
//                       alt="Profile"
//                       className="w-16 h-16 rounded-lg object-cover border-3 border-white shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105"
//                       onError={(e) => { e.target.src = 'https://via.placeholder.com/64'; }}
//                     />
//                     {/* Online status */}
//                     <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white">
//                       <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse"></div>
//                     </div>
//                   </div>

//                   {/* Name and status */}
//                   <div className="flex-1 min-w-0">
//                     <div className="flex items-center space-x-2 mb-1">
//                       <h3 className="text-lg font-bold truncate transition-colors duration-300 group-hover:opacity-80"
//                         style={{ color: '#4a3728' }}>
//                         Honey Sharma
//                       </h3>
//                       <span className="text-green-500 text-xs animate-pulse">●</span>
//                     </div>
//                     <p className="text-sm font-medium transition-colors duration-300 group-hover:opacity-80"
//                       style={{ color: '#4a3728' }}>
//                       Co-Founder @Throne8
//                     </p>
//                   </div>
//                 </div>

//                 {/* Divider line */}
//                 <div className="w-full h-px mb-4 transition-all duration-300"
//                   style={{ background: 'linear-gradient(to right, transparent, #e0d8cf, transparent)' }}></div>

//                 {/* Description section */}
//                 <div className="space-y-2">
//                   <div className="flex items-center space-x-2">
//                     <div className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-110"
//                       style={{ backgroundColor: '#4a3728' }}></div>
//                     <p className="text-sm font-medium transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-80"
//                       style={{ color: '#4a3728' }}>
//                       Empowering Professional Networking
//                     </p>
//                   </div>

//                   <div className="flex items-center space-x-2">
//                     <div className="w-2 h-2 rounded-full transition-all duration-300 group-hover:scale-110"
//                       style={{ backgroundColor: '#4a3728' }}></div>
//                     <p className="text-sm transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-80"
//                       style={{ color: '#4a3728' }}>
//                       📍 Bhopal, Madhya Pradesh
//                     </p>
//                   </div>
//                 </div>

//                 {/* Bottom section with stats */}
//                 <div className="mt-6 pt-4 transition-colors duration-300"
//                   style={{ borderTop: '1px solid #e0d8cf' }}>
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-4">
//                       <div className="text-center">
//                         <div className="text-lg font-bold transition-colors duration-300 group-hover:opacity-80"
//                           style={{ color: '#4a3728' }}>
//                           2.5k
//                         </div>
//                         <div className="text-xs transition-colors duration-300 group-hover:opacity-80"
//                           style={{ color: '#4a3728' }}>
//                           Followers
//                         </div>
//                       </div>
//                       <div className="w-px h-8 transition-colors duration-300"
//                         style={{ backgroundColor: '#e0d8cf' }}></div>
//                       <div className="text-center">
//                         <div className="text-lg font-bold transition-colors duration-300 group-hover:opacity-80"
//                           style={{ color: '#4a3728' }}>
//                           1.2k
//                         </div>
//                         <div className="text-xs transition-colors duration-300 group-hover:opacity-80"
//                           style={{ color: '#4a3728' }}>
//                           Following
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex items-center space-x-2">
//                       <div className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105"
//                         style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}>
//                         Available
//                       </div>
//                       <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
//                         style={{ backgroundColor: '#4a3728' }}>
//                         <span className="text-white text-sm">⚙️</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative elements */}
//               <div className="absolute top-3 right-3 w-8 h-8 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-pulse"
//                 style={{ backgroundColor: '#e0d8cf' }}></div>
//               <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"
//                 style={{ backgroundColor: '#e0d8cf' }}></div>
//             </div>
//           </div>

//           {/* Navigation Section */}
//           <div className="relative group">
//             {/* Outer glow effect */}
//             <div className="absolute -inset-2 bg-gradient-to-r from-amber-200/40 via-orange-200/40 to-yellow-200/40 rounded-[2rem] blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

//             {/* Main container */}
//             <div
//               className="relative rounded-3xl p-6 shadow-xl border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
//               style={{ backgroundColor: '#e0d8cf', borderColor: '#d4c5b5' }}
//             >
//               {/* Background overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-amber-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               {/* Moving light effect */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
//                 <div className="absolute top-0 -left-full h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12 group-hover:animate-pulse"></div>
//               </div>

//               {/* Content */}
//               <div className="relative z-10">
//                 {/* Header */}
//                 <div className="mb-6">
//                   <h3 className="text-lg font-bold mb-2 transition-colors duration-300"
//                     style={{ color: '#4a3728' }}>
//                     Quick Actions
//                   </h3>
//                   <div className="w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full transition-all duration-500 group-hover:w-20"></div>
//                 </div>

//                 {/* Menu items */}
//                 <ul className="space-y-2">
//                   {[
//                     { label: "Preferences", icon: "⚙️", active: true },
//                     { label: "My jobs", icon: "📌" },
//                     { label: "My career insights", icon: "📊", highlight: true },
//                     { label: "Post a free job", icon: "📝", active: true },
//                     { label: "Manage job posts", icon: "📋" },
//                   ].map((item, index) => (
//                     <li
//                       key={index}
//                       className={`group/item relative flex items-center p-4 rounded-2xl text-sm font-medium transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${item.active
//                           ? 'shadow-lg border-l-4 hover:shadow-xl'
//                           : 'hover:shadow-md'
//                         }`}
//                       style={{
//                         backgroundColor: item.active ? '#f6ede8' : 'transparent',
//                         borderLeftColor: item.active ? '#4a3728' : 'transparent',
//                         color: item.active ? '#4a3728' : '#6b5745'
//                       }}
//                     >
//                       {/* Icon with animation */}
//                       <span className="mr-4 text-xl transition-all duration-300 group-hover/item:scale-110 group-hover/item:rotate-12">
//                         {item.icon}
//                       </span>

//                       {/* Label */}
//                       <span className="flex-1 transition-all duration-300 group-hover/item:translate-x-1">
//                         {item.label}
//                       </span>

//                       {/* Highlight badge */}
//                       {item.highlight && (
//                         <span className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-md transition-all duration-300 hover:scale-110">
//                           <span className="relative">
//                             NEW
//                             <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full animate-ping opacity-75"></span>
//                           </span>
//                         </span>
//                       )}

//                       {/* Active indicator */}
//                       {item.active && (
//                         <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
//                           <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse"></div>
//                         </div>
//                       )}

//                       {/* Hover effect background */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Divider with animation */}
//                 <div className="my-6 relative">
//                   <div className="h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20 transition-opacity duration-300 group-hover:opacity-40"
//                     style={{ color: '#d4c5b5' }}>
//                   </div>
//                   <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
//                 </div>

//                 {/* Footer links */}
//                 <div className="text-xs space-y-2 transition-all duration-300 group-hover:translate-y-[-2px]"
//                   style={{ color: '#8b7355' }}>
//                   <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
//                     {["About", "Accessibility", "Help Center"].map((link, index) => (
//                       <a key={index}
//                         href="#"
//                         className="hover:underline transition-all duration-300 hover:scale-105"
//                         style={{ color: '#8b7355' }}>
//                         {link}
//                       </a>
//                     ))}
//                   </div>
//                   <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
//                     {["Privacy & Terms", "Ad Choices"].map((link, index) => (
//                       <a key={index}
//                         href="#"
//                         className="hover:underline transition-all duration-300 hover:scale-105"
//                         style={{ color: '#8b7355' }}>
//                         {link}
//                       </a>
//                     ))}
//                   </div>
//                   <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
//                     {["Advertising", "Business Services"].map((link, index) => (
//                       <a key={index}
//                         href="#"
//                         className="hover:underline transition-all duration-300 hover:scale-105"
//                         style={{ color: '#8b7355' }}>
//                         {link}
//                       </a>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Decorative elements */}
//                 <div className="absolute top-4 right-4 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce"
//                   style={{ backgroundColor: '#f6ede8' }}></div>
//                 <div className="absolute bottom-8 left-4 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700"
//                   style={{ backgroundColor: '#d4c5b5' }}></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col gap-8">
//           {/* Suggested Job Searches */}
//           <div className="relative group">
//             {/* Outer glow effect */}
//             <div className="absolute -inset-3 bg-gradient-to-r from-amber-300/30 via-orange-300/30 to-yellow-300/30 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

//             {/* Main container */}
//             <div
//               className="relative rounded-3xl p-8 shadow-xl border-2 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.01] overflow-hidden bg-[#e0d8cf] border-[#d4c5b5]"
//             >
//               {/* Background effects */}
//               <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-amber-50/20 to-orange-50/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//               {/* Floating light effect */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
//                 <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/15 to-transparent transform skew-x-12 animate-pulse"></div>
//               </div>

//               {/* Content */}
//               <div className="relative z-10">
//                 {/* Header section */}
//                 <div className="mb-8">
//                   <div className="flex items-center space-x-3 mb-4">
//                     <div className="w-10 h-10 rounded-full bg-[#4a3728] flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
//                       <span className="text-white text-xl">🔍</span>
//                     </div>
//                     <h2 className="text-2xl font-bold text-[#4a3728] transition-all duration-300 group-hover:translate-x-2">
//                       Suggested job searches
//                     </h2>
//                   </div>

//                   {/* Animated underline */}
//                   <div className="relative">
//                     <div className="h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full transition-all duration-500 group-hover:from-amber-500 group-hover:to-orange-500 w-[60px]">
//                     </div>
//                     <div className="absolute top-0 h-1 bg-gradient-to-r from-yellow-300 to-amber-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 w-[120px]">
//                     </div>
//                   </div>
//                 </div>

//                 {/* Search buttons grid */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {[
//                     { term: "Frontend Developer", icon: "💻" },
//                     { term: "UI/UX Designer", icon: "🎨" },
//                     { term: "Data Scientist", icon: "📊" },
//                     { term: "Product Manager", icon: "📋" },
//                     { term: "DevOps Engineer", icon: "⚙️" },
//                     { term: "Full Stack Developer", icon: "🚀" }
//                   ].map((search, index) => (
//                     <button
//                       key={index}
//                       className="group/btn relative flex items-center justify-center px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 transform overflow-hidden bg-[#f6ede8] text-[#4a3728] border-2 border-[#d4c5b5] hover:bg-[#e8ddd6]"
//                     >
//                       {/* Button background effect */}
//                       <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>

//                       {/* Content wrapper with higher z-index */}
//                       <div className="relative z-20 flex items-center">
//                         {/* Icon with animation */}
//                         <span className="mr-3 text-xl transition-all duration-300 group-hover/btn:scale-125 group-hover/btn:rotate-12">
//                           {search.icon}
//                         </span>

//                         {/* Text */}
//                         <span className="transition-all duration-300 group-hover/btn:translate-x-1">
//                           {search.term}
//                         </span>
//                       </div>
//                     </button>
//                   ))}
//                 </div>

//                 {/* Bottom section */}
//                 <div className="mt-8 pt-6 border-t border-[#d4c5b5] transition-colors duration-300">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
//                       <span className="text-sm font-medium text-[#4a3728] transition-colors duration-300 group-hover:opacity-80">
//                         Updated daily with trending jobs
//                       </span>
//                     </div>

//                     <button className="flex items-center space-x-2 px-4 py-2 rounded-xl font-medium bg-[#4a3728] text-white transition-all duration-300 hover:scale-105 hover:shadow-md">
//                       <span>View All</span>
//                       <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative floating elements */}
//               <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#f6ede8] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:animate-bounce"></div>
//               <div className="absolute bottom-6 left-6 w-4 h-4 rounded-full bg-[#d4c5b5] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
//               <div className="absolute top-1/2 right-8 w-2 h-2 rounded-full bg-[#4a3728] opacity-0 group-hover:opacity-100 transition-all duration-900 group-hover:animate-ping"></div>
//             </div>
//           </div>
//           {/* Premium Jobs Section */}
//           <div
//             className="rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl"
//             style={{ backgroundColor: '#e0d8cf', borderColor: '#d4c5b5' }}
//           >
//             {/* Header Section */}
//             <div className="flex items-center mb-6">
//               <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-4 py-2 rounded-full mr-4 shadow-lg animate-pulse">
//                 PREMIUM
//               </span>
//               <h2 className="text-2xl font-bold" style={{ color: '#4a3728' }}>
//                 Jobs where you re more likely to hear back
//               </h2>
//             </div>

//             <p className="text-base mb-6" style={{ color: '#6b5745' }}>
//               Stand out to recruiters with these jobs personalized for you.
//             </p>

//             <button className="w-full text-white py-4 rounded-2xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] mb-4 hover:opacity-90" style={{ backgroundColor: '#4a3728' }}>
//               Try Premium for ₹0
//             </button>

//             <p className="text-sm mb-6" style={{ color: '#8b7355' }}>
//               1-month free trial. Cancel anytime. We ll remind you 7 days before your trial ends.
//             </p>

//             {/* Job Cards Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {premiumJobs.map((job) => (
//                 <div
//                   key={job.id}
//                   className="relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] cursor-pointer overflow-hidden border border-gray-100"
//                   onMouseEnter={() => setHoveredJob(job.id)}
//                   onMouseLeave={() => setHoveredJob(null)}
//                 >
//                   {/* Card Header */}
//                   <div className="p-6 pb-4">
//                     <div className="flex items-start justify-between mb-4">
//                       <div className="flex items-center">
//                         <div className={`w-12 h-12 rounded-xl mr-3 flex items-center justify-center text-white font-bold bg-gradient-to-r ${job.color} shadow-lg`}>
//                           {job.company[0]}
//                         </div>
//                         <div>
//                           <h3 className="text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors duration-300" style={{ color: '#4a3728' }}>
//                             {job.title}
//                           </h3>
//                           <p className="text-sm font-semibold" style={{ color: '#6b5745' }}>{job.company}</p>
//                         </div>
//                       </div>
//                       <button className="text-gray-300 hover:text-red-500 transition-colors duration-300 text-lg p-1 hover:bg-red-50 rounded-lg">
//                         ×
//                       </button>
//                     </div>

//                     {/* Location & Time */}
//                     <div className="flex items-center justify-between mb-3">
//                       <div className="flex items-center">
//                         <span className="text-gray-400 mr-2">📍</span>
//                         <p className="text-sm" style={{ color: '#8b7355' }}>{job.location}</p>
//                       </div>
//                       <div className="flex items-center">
//                         <span className="text-gray-400 mr-2">⏰</span>
//                         <p className="text-sm" style={{ color: '#8b7355' }}>2 days ago</p>
//                       </div>
//                     </div>

//                     {/* Match Score */}
//                     <div className="flex items-center mb-4">
//                       <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
//                       <p className="text-sm font-medium text-green-600">{job.match}</p>
//                     </div>

//                     {/* Tags */}
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
//                         ₹15-25 LPA
//                       </span>
//                       <span className="bg-purple-50 text-purple-600 px-3 py-1 rounded-full text-xs font-medium">
//                         3-5 years
//                       </span>
//                       <span className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-medium">
//                         Remote
//                       </span>
//                     </div>
//                   </div>

//                   {/* Card Footer */}
//                   <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
//                     <div className="flex gap-3">
//                       <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] text-sm">
//                         Apply Now
//                       </button>
//                       <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:border-blue-400 hover:text-blue-600 transition-all duration-300 font-medium text-sm">
//                         Save
//                       </button>
//                     </div>
//                   </div>

//                   {/* Hover Effect */}
//                   {hoveredJob === job.id && (
//                     <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Show All Button */}
//             <button className="w-full text-blue-600 text-lg font-bold hover:text-blue-800 transition-colors duration-300 mt-6 hover:underline">
//               Show all →
//             </button>
//           </div>
//           {/* Your Applications */}
//           <div
//             className="rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
//             style={{ backgroundColor: '#e0d8cf', borderColor: '#d4c5b5' }}
//           >
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-5">
//               <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl"></div>
//               <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-2xl"></div>
//             </div>

//             {/* Header Section */}
//             <div className="relative z-10 flex items-center justify-between mb-8">
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
//                   <span className="text-white text-xl">📊</span>
//                 </div>
//                 <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
//                   Your Applications
//                 </h2>
//               </div>
//               <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/30">
//                 <span className="text-sm font-medium" style={{ color: '#4a3728' }}>
//                   {applyItems.length} Active
//                 </span>
//               </div>
//             </div>

//             {/* Applications Grid */}
//             <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {applyItems.map((item, index) => (
//                 <div
//                   key={item.id}
//                   className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/50 overflow-hidden"
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   {/* Card Background Gradient */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                   {/* Status Indicator */}
//                   <div className="relative z-10 flex items-center justify-between mb-4">
//                     <div className="flex items-center">
//                       <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse mr-2 shadow-sm"></div>
//                       <span className="text-xs font-medium text-green-600">Active</span>
//                     </div>
//                     <div className="flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-3 py-1 shadow-sm">
//                       <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2"></span>
//                       <span className="text-xs font-bold text-blue-700">
//                         {item.progress}% Match
//                       </span>
//                     </div>
//                   </div>

//                   {/* Company Logo Placeholder */}
//                   <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
//                     <span className="text-white font-bold text-lg">
//                       {item.company.charAt(0)}
//                     </span>
//                   </div>

//                   {/* Job Details */}
//                   <div className="relative z-10">
//                     <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2" style={{ color: '#4a3728' }}>
//                       {item.title}
//                     </h3>
//                     <p className="text-base font-semibold mb-2 text-gray-700">{item.company}</p>
//                     <div className="flex items-center mb-4">
//                       <span className="text-sm px-3 py-1 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 rounded-full font-medium">
//                         {item.status}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Enhanced Progress Bar */}
//                   <div className="relative z-10 mb-6">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-xs font-medium text-gray-600">Application Progress</span>
//                       <span className="text-xs font-bold text-blue-600">{item.progress}%</span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
//                       <div
//                         className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
//                         style={{ width: `${item.progress}%` }}
//                       >
//                         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Action Button */}
//                   <button className="relative z-10 w-full text-white py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 overflow-hidden group">
//                     <span className="relative z-10">{item.action}</span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
//                   </button>

//                   {/* Hover Border Effect */}
//                   <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
//                 </div>
//               ))}
//             </div>

//             {/* Bottom Stats */}
//             <div className="relative z-10 mt-8 flex justify-center">
//               <div className="bg-white/30 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/40 shadow-lg">
//                 <div className="flex items-center space-x-6">
//                   <div className="flex items-center">
//                     <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
//                     <span className="text-sm font-medium" style={{ color: '#4a3728' }}>
//                       {applyItems.filter(item => item.progress > 50).length} Promising
//                     </span>
//                   </div>
//                   <div className="flex items-center">
//                     <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
//                     <span className="text-sm font-medium" style={{ color: '#4a3728' }}>
//                       {applyItems.filter(item => item.progress <= 50).length} In Progress
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Explore with Job Collections */}
//           {/* <div 
//             className="rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl"
//             style={{ backgroundColor: '#e0d8cf', borderColor: '#d4c5b5' }}
//           >
//             <h2 className="text-2xl font-bold mb-6" style={{ color: '#4a3728' }}>Explore with job collections</h2>
//             <div className="space-y-6">
//               {[
//                 {
//                   title: "Remote FullStack Developer",
//                   company: "Turing · Kolkata, West Bengal, India (REMOTE)",
//                   note: "Promoted · Be an early applicant",
//                   gradient: "from-blue-400 to-purple-500"
//                 },
//                 {
//                   title: "Full Stack Developer Trainee (ReactJs + Nodejs + Mongodb+SQL)",
//                   company: "Appsierra · Noida, Uttar Pradesh, India (REMOTE) · ₹1Y – ₹2Y",
//                   note: "1 month ago",
//                   gradient: "from-green-400 to-teal-500"
//                 }
//               ].map((job, index) => (
//                 <div
//                   key={index}
//                   className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer"
//                 >
//                   <div className="flex items-start">
//                     <div className={`w-12 h-12 rounded-xl mr-4 flex items-center justify-center text-white font-bold bg-gradient-to-r ${job.gradient} shadow-lg`}>
//                       💻
//                     </div>
//                     <div className="flex-1">
//                       <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300" style={{ color: '#4a3728' }}>
//                         {job.title}
//                       </h3>
//                       <p className="text-sm mb-2" style={{ color: '#6b5745' }}>{job.company}</p>
//                       <div className="flex items-center">
//                         <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
//                         <p className="text-sm" style={{ color: '#8b7355' }}>{job.note}</p>
//                       </div>
//                     </div>
//                     <button className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-xl">×</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <button className="w-full text-blue-600 text-lg font-bold hover:text-blue-800 transition-colors duration-300 mt-6 hover:underline">
//               Show all →
//             </button>
//           </div> */}
//           <div className="relative group">
//             {/* Outer glow effect */}
//             <div className="absolute -inset-4 bg-gradient-to-r from-blue-300/20 via-purple-300/20 to-teal-300/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

//             {/* Main container */}
//             <div
//               className="rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl overflow-hidden"
//               style={{ backgroundColor: '#e0d8cf', borderColor: '#d4c5b5' }}
//             >
//               {/* Animated background gradient overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-amber-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

//               {/* Decorative floating elements */}
//               <div className="absolute top-6 right-6 w-16 h-16 rounded-full opacity-5 group-hover:opacity-10 transition-all duration-1000 group-hover:rotate-45"
//                 style={{ backgroundColor: '#4a3728' }}></div>
//               <div className="absolute bottom-8 left-8 w-8 h-8 rounded-full opacity-5 group-hover:opacity-15 transition-all duration-1200 group-hover:-rotate-12"
//                 style={{ backgroundColor: '#4a3728' }}></div>

//               {/* Content wrapper */}
//               <div className="relative z-10">
//                 {/* Header section */}
//                 <div className="flex items-center justify-between mb-8">
//                   <div className="flex items-center space-x-3">
//                     <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
//                     <h2 className="text-3xl font-bold transition-all duration-300 group-hover:scale-105"
//                       style={{ color: '#4a3728' }}>
//                       Explore with job collections
//                     </h2>
//                   </div>
//                   <div className="flex items-center space-x-2">
//                     <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
//                     <span className="text-sm font-medium" style={{ color: '#6b5745' }}>Live Updates</span>
//                   </div>
//                 </div>

//                 {/* Jobs list */}
//                 <div className="space-y-6">
//                   {[
//                     {
//                       title: "Remote FullStack Developer",
//                       company: "Turing",
//                       location: "Kolkata, West Bengal, India",
//                       type: "REMOTE",
//                       note: "Promoted · Be an early applicant",
//                       gradient: "from-blue-500 via-blue-600 to-purple-600",
//                       icon: "🚀",
//                       badge: "HOT",
//                       badgeColor: "from-red-500 to-orange-500",
//                       skills: ["React", "Node.js", "MongoDB", "Express"],
//                       experience: "2-5 years",
//                       postedTime: "2 hours ago"
//                     },
//                     {
//                       title: "Full Stack Developer Trainee",
//                       subtitle: "ReactJs + Nodejs + MongoDB + SQL",
//                       company: "Appsierra",
//                       location: "Noida, Uttar Pradesh, India",
//                       type: "REMOTE",
//                       salary: "₹1L – ₹2L",
//                       note: "1 month ago",
//                       gradient: "from-emerald-500 via-teal-500 to-cyan-600",
//                       icon: "💻",
//                       badge: "NEW",
//                       badgeColor: "from-green-500 to-emerald-500",
//                       skills: ["ReactJs", "NodeJs", "MongoDB", "SQL"],
//                       experience: "0-1 years",
//                       postedTime: "1 month ago"
//                     }
//                   ].map((job, index) => (
//                     <div
//                       key={index}
//                       className="group/job relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-2 cursor-pointer border border-white/50 hover:border-white/80"
//                     >
//                       {/* Job card glow effect */}
//                       <div className="absolute -inset-1 bg-gradient-to-r opacity-0 group-hover/job:opacity-30 transition-opacity duration-500 rounded-2xl blur-sm"
//                         style={{ background: `linear-gradient(45deg, ${job.gradient.split(' ')[1]}, ${job.gradient.split(' ')[3]})` }}></div>

//                       <div className="relative flex items-start">
//                         {/* Icon section */}
//                         <div className="relative flex-shrink-0 mr-6">
//                           <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold bg-gradient-to-r ${job.gradient} shadow-xl transition-all duration-300 group-hover/job:shadow-2xl group-hover/job:scale-110`}>
//                             {job.icon}
//                           </div>
//                           {/* Badge */}
//                           <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${job.badgeColor} shadow-lg animate-pulse`}>
//                             {job.badge}
//                           </div>
//                         </div>

//                         {/* Content section */}
//                         <div className="flex-1 min-w-0">
//                           <div className="flex items-start justify-between mb-3">
//                             <div className="flex-1 pr-4">
//                               <h3 className="text-xl font-bold group-hover/job:text-blue-600 transition-all duration-300 leading-tight mb-1"
//                                 style={{ color: '#4a3728' }}>
//                                 {job.title}
//                               </h3>
//                               {job.subtitle && (
//                                 <p className="text-sm font-medium text-gray-600 mb-2">{job.subtitle}</p>
//                               )}
//                             </div>
//                             <button className="text-gray-400 hover:text-red-500 hover:scale-125 transition-all duration-300 text-2xl font-bold">
//                               ×
//                             </button>
//                           </div>

//                           {/* Company info */}
//                           <div className="flex items-center flex-wrap gap-2 mb-3">
//                             <span className="font-semibold" style={{ color: '#6b5745' }}>{job.company}</span>
//                             <span className="text-gray-400">•</span>
//                             <span className="text-sm" style={{ color: '#6b5745' }}>{job.location}</span>
//                             <div className="flex items-center space-x-2">
//                               <span className={`px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${job.gradient} text-white shadow-md`}>
//                                 {job.type}
//                               </span>
//                               {job.salary && (
//                                 <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 border border-green-200">
//                                   {job.salary}
//                                 </span>
//                               )}
//                               <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200">
//                                 {job.experience}
//                               </span>
//                             </div>
//                           </div>

//                           {/* Skills section */}
//                           <div className="mb-3">
//                             <div className="flex flex-wrap gap-2">
//                               {job.skills.map((skill, skillIndex) => (
//                                 <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border hover:bg-gray-200 transition-colors duration-200">
//                                   {skill}
//                                 </span>
//                               ))}
//                             </div>
//                           </div>

//                           {/* Status indicator */}
//                           <div className="flex items-center justify-between">
//                             <div className="flex items-center">
//                               <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse shadow-lg"></div>
//                               <p className="text-sm font-medium" style={{ color: '#8b7355' }}>{job.note}</p>
//                             </div>
//                             <span className="text-xs text-gray-500">{job.postedTime}</span>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Bottom border animation */}
//                       <div
//                         className="absolute bottom-0 left-0 h-1 bg-gradient-to-r opacity-0 group-hover/job:opacity-100 transition-all duration-500 rounded-b-2xl group-hover/job:w-full"
//                         style={{ background: `linear-gradient(90deg, ${job.gradient.split(' ')[1]}, ${job.gradient.split(' ')[3]})`, width: '0%' }}
//                       ></div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Call to action button */}
//                 <div className="mt-8 text-center">
//                   <button className="group/btn relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
//                     style={{ backgroundColor: '#4a3728' }}>
//                     <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
//                       style={{ backgroundColor: '#3a2a1f' }}></span>
//                     <span className="relative flex items-center space-x-2">
//                       <span>Show all jobs</span>
//                       <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Top Job Picks */}
//           {/* <div 
//             className="rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl"
//             style={{ backgroundColor: '#e0d8cf', borderColor: '#d4c5b5' }}
//           >
//             <h2 className="text-2xl font-bold mb-2" style={{ color: '#4a3728' }}>Top job picks for you</h2>
//             <p className="text-base mb-6" style={{ color: '#6b5745' }}>
//               Based on your profile, preferences, and activity like applies, searches, and saves
//             </p>

//             <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 cursor-pointer group">
//               <div className="flex items-start">
//                 <div className="w-12 h-12 rounded-xl mr-4 flex items-center justify-center text-white font-bold bg-gradient-to-r from-purple-400 to-pink-500 shadow-lg">
//                   🚀
//                 </div>
//                 <div className="flex-1">
//                   <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300" style={{ color: '#4a3728' }}>
//                     Build in Web3 | Founders, Creators, Dreamers wanted
//                   </h3>
//                   <p className="text-sm mb-2" style={{ color: '#6b5745' }}>Rakoon.fun · Bengaluru, Karnataka, India (REMOTE)</p>
//                   <div className="flex items-center mb-2">
//                     <span className="text-green-500 mr-2">✅</span>
//                     <p className="text-sm font-medium" style={{ color: '#6b5745' }}>Actively reviewing applicants</p>
//                   </div>
//                   <p className="text-sm" style={{ color: '#8b7355' }}>
//                     Promoted · <span className="text-blue-600 font-bold">Easy Apply</span>
//                   </p>
//                 </div>
//                 <button className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-xl">×</button>
//               </div>
//             </div>

//             <button className="w-full text-blue-600 text-lg font-bold hover:text-blue-800 transition-colors duration-300 mt-6 hover:underline">
//               Search for more jobs →
//             </button>
//           </div> */}
//           <div className="relative group">
//             {/* Outer glow effect */}
//             <div className="absolute -inset-4 bg-gradient-to-r from-purple-300/20 via-pink-300/20 to-amber-300/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>

//             {/* Main container */}
//             <div
//               className="relative rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
//               style={{ backgroundColor: '#e0d8cf', borderColor: '#d4c5b5' }}
//             >
//               {/* Animated background overlay */}
//               <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-purple-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

//               {/* Decorative elements */}
//               <div className="absolute top-4 right-4 w-12 h-12 rounded-full opacity-5 group-hover:opacity-10 transition-all duration-1000 group-hover:rotate-12"
//                 style={{ backgroundColor: '#4a3728' }}></div>
//               <div className="absolute bottom-6 left-6 w-6 h-6 rounded-full opacity-5 group-hover:opacity-15 transition-all duration-1200 group-hover:-rotate-45"
//                 style={{ backgroundColor: '#4a3728' }}></div>

//               {/* Content wrapper */}
//               <div className="relative z-10">
//                 {/* Header section */}
//                 <div className="mb-6">
//                   <div className="flex items-center space-x-3 mb-3">
//                     <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
//                     <h2 className="text-3xl font-bold transition-all duration-300 group-hover:scale-105"
//                       style={{ color: '#4a3728' }}>
//                       Top job picks for you
//                     </h2>
//                     <div className="flex items-center space-x-1 ml-auto">
//                       <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
//                       <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
//                       <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
//                     </div>
//                   </div>
//                   <p className="text-base leading-relaxed" style={{ color: '#6b5745' }}>
//                     Based on your profile, preferences, and activity like applies, searches, and saves
//                   </p>
//                 </div>

//                 {/* Job card */}
//                 <div className="relative group/job bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-2 cursor-pointer border border-white/50 hover:border-white/80 mb-6">
//                   {/* Job card glow effect */}
//                   <div className="absolute -inset-1 bg-gradient-to-r from-purple-400/30 to-pink-500/30 opacity-0 group-hover/job:opacity-50 transition-opacity duration-500 rounded-2xl blur-sm"></div>

//                   <div className="relative flex items-start">
//                     {/* Icon section */}
//                     <div className="relative flex-shrink-0 mr-6">
//                       <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 shadow-xl transition-all duration-300 group-hover/job:shadow-2xl group-hover/job:scale-110">
//                         🚀
//                       </div>
//                       {/* Animated ring */}
//                       <div className="absolute inset-0 rounded-2xl border-2 border-purple-400 opacity-0 group-hover/job:opacity-100 group-hover/job:scale-110 transition-all duration-300"></div>

//                       {/* Featured badge */}
//                       {/* <div className="absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg animate-bounce">
//                TOP
//             </div> */}
//                     </div>

//                     {/* Content section */}
//                     <div className="flex-1 min-w-0">
//                       <div className="flex items-start justify-between mb-3">
//                         <h3 className="text-xl font-bold group-hover/job:text-purple-600 transition-all duration-300 leading-tight pr-4"
//                           style={{ color: '#4a3728' }}>
//                           Build in Web3 | Founders, Creators, Dreamers wanted
//                         </h3>
//                         <button className="text-gray-400 hover:text-red-500 hover:scale-125 transition-all duration-300 text-2xl font-bold">
//                           ×
//                         </button>
//                       </div>

//                       {/* Company info */}
//                       <div className="flex items-center flex-wrap gap-2 mb-3">
//                         <span className="font-semibold" style={{ color: '#6b5745' }}>Rakoon.fun</span>
//                         <span className="text-gray-400">•</span>
//                         <span className="text-sm" style={{ color: '#6b5745' }}>Bengaluru, Karnataka, India</span>
//                         <span className="px-2 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md">
//                           REMOTE
//                         </span>
//                         <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200">
//                           Web3 • Startup
//                         </span>
//                       </div>

//                       {/* Status indicators */}
//                       <div className="space-y-2 mb-3">
//                         <div className="flex items-center">
//                           <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse shadow-lg"></div>
//                           <p className="text-sm font-medium" style={{ color: '#6b5745' }}>Actively reviewing applicants</p>
//                         </div>
//                         <div className="flex items-center">
//                           <span className="text-purple-500 mr-2 text-sm">🎯</span>
//                           <p className="text-sm" style={{ color: '#8b7355' }}>
//                             Promoted · <span className="text-purple-600 font-bold">Easy Apply</span>
//                           </p>
//                         </div>
//                       </div>

//                       {/* Skills/Tags */}
//                       <div className="flex flex-wrap gap-2">
//                         {["Web3", "Blockchain", "Startup", "Remote"].map((tag, index) => (
//                           <span key={index} className="px-2 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium border border-purple-200 hover:bg-purple-100 transition-colors duration-200">
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Bottom progress bar */}
//                   <div
//                     className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover/job:opacity-100 transition-all duration-500 rounded-b-2xl group-hover/job:w-full"
//                     style={{ width: '0%' }}
//                   ></div>
//                 </div>

//                 {/* Call to action button */}
//                 <div className="text-center">
//                   <button className="group/btn relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
//                     style={{ backgroundColor: '#4a3728' }}>
//                     <span className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
//                       style={{ backgroundColor: '#3a2a1f' }}></span>
//                     <span className="relative flex items-center space-x-2">
//                       <span>Search for more jobs</span>
//                       <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
//                     </span>
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

// export default JobsPage;


//=====================================================================================================================


// import { useState } from 'react';
// import { Bell, User, MessageCircle, Users, Mail, Settings, Search, Filter, MoreHorizontal, X, Heart, MessageSquare, UserPlus, CheckCircle, TrendingUp, Clock, Archive, Star } from 'lucide-react';

// const NotificationsPage = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedNotifications, setSelectedNotifications] = useState([]);

//   const notifications = [
//     {
//       id: 1,
//       type: 'like',
//       user: "Abhishek Shukla",
//       secondaryUser: "Sanjay Sharma",
//       action: 'liked your post',
//       content: '"I am thrilled to announce..."',
//       time: "3h ago",
//       image: "https://randomuser.me/api/portraits/men/20.jpg",
//       unread: true,
//       icon: Heart,
//       priority: 'high'
//     },
//     {
//       id: 2,
//       type: 'comment',
//       user: "Priya Mehra",
//       action: 'commented on your post',
//       content: '"Great insights! Looking forward to more updates."',
//       time: "5h ago",
//       image: "https://randomuser.me/api/portraits/women/30.jpg",
//       unread: true,
//       icon: MessageSquare,
//       priority: 'medium'
//     },
//     {
//       id: 3,
//       type: 'mention',
//       user: "Rohan Kapoor",
//       action: 'mentioned you in a comment',
//       content: '"Hey Honey, what do you think about this?"',
//       time: "1d ago",
//       image: "https://randomuser.me/api/portraits/men/40.jpg",
//       unread: false,
//       icon: MessageCircle,
//       priority: 'low'
//     },
//     {
//       id: 4,
//       type: 'connection',
//       user: "Anita Desai",
//       action: 'wants to connect with you',
//       content: 'Product Manager at TechCorp',
//       time: "2d ago",
//       image: "https://randomuser.me/api/portraits/women/25.jpg",
//       unread: false,
//       icon: UserPlus,
//       priority: 'medium'
//     },
//     {
//       id: 5,
//       type: 'achievement',
//       user: "LinkedIn",
//       action: 'congratulated you on your work anniversary',
//       content: '5 years at Throne8 - A milestone worth celebrating!',
//       time: "3d ago",
//       image: "https://randomuser.me/api/portraits/men/50.jpg",
//       unread: false,
//       icon: Star,
//       priority: 'high'
//     },
//     {
//       id: 6,
//       type: 'trending',
//       user: "Rahul Verma",
//       action: 'your post is trending',
//       content: '500+ views in the last 24 hours',
//       time: "1w ago",
//       image: "https://randomuser.me/api/portraits/men/60.jpg",
//       unread: false,
//       icon: TrendingUp,
//       priority: 'medium'
//     }
//   ];

//   const stats = [
//     { label: 'Total', count: 24, active: true, icon: Bell, color: '#4a3728' },
//     { label: 'Unread', count: 8, icon: Clock, color: '#d97706' },
//     { label: 'This Week', count: 15, icon: TrendingUp, color: '#059669' },
//     { label: 'Archived', count: 5, icon: Archive, color: '#6b7280' }
//   ];

//   const sidebarItems = [
//     { icon: Bell, label: 'All Notifications', key: 'all', count: 24 },
//     { icon: User, label: 'My Posts', key: 'posts', count: 12 },
//     { icon: MessageCircle, label: 'Mentions', key: 'mentions', count: 5 },
//     { icon: Users, label: 'Connections', key: 'connections', count: 7 },
//     { icon: Mail, label: 'Messages', key: 'messages', count: 0 },
//     { icon: Star, label: 'Important', key: 'important', count: 3 }
//   ];

//   const toggleNotificationSelection = (id) => {
//     setSelectedNotifications(prev => 
//       prev.includes(id) 
//         ? prev.filter(notifId => notifId !== id)
//         : [...prev, id]
//     );
//   };

//   const getPriorityColor = (priority) => {
//     switch(priority) {
//       case 'high': return '#dc2626';
//       case 'medium': return '#d97706';
//       case 'low': return '#059669';
//       default: return '#6b7280';
//     }
//   };

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: '#f6ede8', color: '#4a3728' }}>
//       {/* Enhanced Top Navigation */}
//       <div className="sticky top-0 z-50 backdrop-blur-xl border-b shadow-sm" style={{ backgroundColor: 'rgba(224, 216, 207, 0.95)', borderColor: '#e0d8cf' }}>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center space-x-6">
//               <div className="flex items-center space-x-3">
//                 <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm" style={{ backgroundColor: '#4a3728' }}>
//                   <Bell className="w-5 h-5 text-white" />
//                 </div>
//                 <div>
//                   <h1 className="text-xl font-bold">Notifications</h1>
//                   <p className="text-xs opacity-60">Stay connected with your network</p>
//                 </div>
//               </div>

//               {/* Quick Stats */}
//               <div className="hidden md:flex items-center space-x-4">
//                 <div className="flex items-center space-x-2 px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 55, 40, 0.1)' }}>
//                   <div className="w-2 h-2 rounded-full bg-red-500"></div>
//                   <span className="text-sm font-medium">8 new</span>
//                 </div>
//                 <div className="flex items-center space-x-2 px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(74, 55, 40, 0.1)' }}>
//                   <TrendingUp className="w-3 h-3" />
//                   <span className="text-sm font-medium">↑ 15%</span>
//                 </div>
//               </div>
//             </div>

//             <div className="flex items-center space-x-3">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-60" />
//                 <input
//                   type="text"
//                   placeholder="Search notifications..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10 pr-4 py-2 rounded-xl border-0 focus:ring-2 focus:outline-none text-sm w-64 shadow-sm"
//                   style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', color: '#4a3728' }}
//                 />
//               </div>
//               <div className="flex items-center space-x-2">
//                 <button className="p-2 rounded-xl hover:bg-opacity-80 transition-all duration-200 shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//                   <Filter className="w-4 h-4" />
//                 </button>
//                 <button className="p-2 rounded-xl hover:bg-opacity-80 transition-all duration-200 shadow-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//                   <Settings className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

//           {/* Enhanced Sidebar */}
//           <div className="lg:col-span-1 space-y-6">
//             {/* Enhanced Profile Card */}
//             <div className="rounded-2xl p-6 shadow-lg border-0 backdrop-blur-sm relative overflow-hidden" style={{ backgroundColor: 'rgba(224, 216, 207, 0.7)' }}>
//               <div className="absolute top-0 right-0 w-20 h-20 rounded-full -mr-10 -mt-10 opacity-10" style={{ backgroundColor: '#4a3728' }}></div>
//               <div className="relative text-center">
//                 <div className="relative inline-block mb-4">
//                   <img
//                     src="https://randomuser.me/api/portraits/men/88.jpg"
//                     alt="Profile"
//                     className="w-16 h-16 rounded-full object-cover shadow-lg ring-4 ring-white"
//                     onError={(e) => { e.target.src = 'https://via.placeholder.com/64'; }}
//                   />
//                   <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-white animate-pulse" style={{ backgroundColor: '#059669' }}></div>
//                 </div>
//                 <h3 className="font-bold text-lg mb-1">Honey Sharma</h3>
//                 <p className="text-sm opacity-75 mb-2">Co-Founder @Throne8</p>
//                 <p className="text-xs opacity-60 mb-3">Bhopal, Madhya Pradesh</p>
//                 <div className="flex justify-center space-x-2">
//                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
//                   <span className="text-xs opacity-60">Active now</span>
//                 </div>
//               </div>
//             </div>

//             {/* Enhanced Stats Cards */}
//             <div className="grid grid-cols-2 gap-3">
//               {stats.map((stat, index) => {
//                 const Icon = stat.icon;
//                 return (
//                   <div key={index} className="rounded-xl p-4 shadow-sm border-0 backdrop-blur-sm hover:shadow-md transition-all duration-200 group cursor-pointer" style={{ backgroundColor: 'rgba(224, 216, 207, 0.5)' }}>
//                     <div className="flex items-center space-x-2 mb-2">
//                       <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" style={{ color: stat.color }} />
//                       <div className="text-lg font-bold">{stat.count}</div>
//                     </div>
//                     <div className="text-xs opacity-75">{stat.label}</div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Enhanced Navigation */}
//             <nav className="space-y-2">
//               {sidebarItems.map((item) => {
//                 const Icon = item.icon;
//                 return (
//                   <button
//                     key={item.key}
//                     onClick={() => setActiveTab(item.key)}
//                     className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-200 group ${
//                       activeTab === item.key 
//                         ? 'shadow-lg border-0 transform scale-105' 
//                         : 'hover:shadow-md hover:scale-102'
//                     }`}
//                     style={{ 
//                       backgroundColor: activeTab === item.key 
//                         ? 'rgba(74, 55, 40, 0.15)' 
//                         : 'rgba(224, 216, 207, 0.4)' 
//                     }}
//                   >
//                     <div className="flex items-center space-x-3">
//                       <Icon className={`w-5 h-5 transition-all duration-200 ${activeTab === item.key ? 'text-opacity-100' : 'text-opacity-70 group-hover:text-opacity-100'}`} />
//                       <span className="font-medium">{item.label}</span>
//                     </div>
//                     {item.count > 0 && (
//                       <span className={`text-xs px-2 py-1 rounded-full font-medium transition-all duration-200 ${
//                         activeTab === item.key ? 'animate-pulse' : ''
//                       }`} style={{ backgroundColor: '#4a3728', color: 'white' }}>
//                         {item.count}
//                       </span>
//                     )}
//                   </button>
//                 );
//               })}
//             </nav>

//             {/* Activity Timeline */}
//             <div className="rounded-xl p-4 shadow-sm border-0 backdrop-blur-sm" style={{ backgroundColor: 'rgba(224, 216, 207, 0.4)' }}>
//               <h4 className="font-semibold mb-3 flex items-center">
//                 <Clock className="w-4 h-4 mr-2" />
//                 Recent Activity
//               </h4>
//               <div className="space-y-2">
//                 <div className="flex items-center space-x-2 text-xs">
//                   <div className="w-2 h-2 rounded-full bg-green-500"></div>
//                   <span className="opacity-75">5 new connections today</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-xs">
//                   <div className="w-2 h-2 rounded-full bg-blue-500"></div>
//                   <span className="opacity-75">12 post views this hour</span>
//                 </div>
//                 <div className="flex items-center space-x-2 text-xs">
//                   <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
//                   <span className="opacity-75">3 comments pending</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Enhanced Main Content */}
//           <div className="lg:col-span-3 space-y-6">
//             {/* Enhanced Header */}
//             <div className="rounded-2xl p-6 shadow-sm border-0 backdrop-blur-sm" style={{ backgroundColor: 'rgba(224, 216, 207, 0.5)' }}>
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//                 <div>
//                   <h2 className="text-2xl font-bold mb-2 flex items-center">
//                     All Notifications
//                     <span className="ml-3 px-2 py-1 rounded-full text-xs font-medium bg-red-500 text-white animate-pulse">
//                       8 new
//                     </span>
//                   </h2>
//                   <p className="text-sm opacity-75">Stay updated with your latest activities and connections</p>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <button className="px-4 py-2 rounded-xl text-sm font-medium hover:shadow-md transition-all duration-200 flex items-center space-x-2" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//                     <CheckCircle className="w-4 h-4" />
//                     <span>Mark all read</span>
//                   </button>
//                   <button className="p-2 rounded-xl hover:shadow-md transition-all duration-200" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
//                     <MoreHorizontal className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Enhanced Notifications */}
//             <div className="space-y-4">
//               {notifications.map((notification) => {
//                 const Icon = notification.icon;
//                 const isSelected = selectedNotifications.includes(notification.id);
//                 return (
//                   <div
//                     key={notification.id}
//                     className={`group rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-0 backdrop-blur-sm cursor-pointer transform hover:scale-102 ${
//                       notification.unread ? 'ring-2' : ''
//                     } ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
//                     style={{ 
//                       backgroundColor: notification.unread 
//                         ? 'rgba(224, 216, 207, 0.8)' 
//                         : 'rgba(224, 216, 207, 0.5)',
//                       ringColor: notification.unread && !isSelected ? '#4a3728' : 'transparent'
//                     }}
//                     onClick={() => toggleNotificationSelection(notification.id)}
//                   >
//                     <div className="flex items-start space-x-4">
//                       {/* Enhanced Profile Image */}
//                       <div className="relative flex-shrink-0">
//                         <img
//                           src={notification.image}
//                           alt={notification.user}
//                           className="w-12 h-12 rounded-full object-cover shadow-md ring-2 ring-white"
//                           onError={(e) => { e.target.src = 'https://via.placeholder.com/48'; }}
//                         />
//                         <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center shadow-md ring-2 ring-white" style={{ backgroundColor: '#4a3728' }}>
//                           <Icon className="w-3 h-3 text-white" />
//                         </div>
//                         {/* Priority Indicator */}
//                         <div 
//                           className="absolute -top-1 -left-1 w-4 h-4 rounded-full border-2 border-white shadow-sm"
//                           style={{ backgroundColor: getPriorityColor(notification.priority) }}
//                         ></div>
//                       </div>

//                       {/* Enhanced Content */}
//                       <div className="flex-1 min-w-0">
//                         <div className="flex items-start justify-between">
//                           <div className="flex-1">
//                             <div className="flex items-center space-x-2 mb-1">
//                               <p className="text-sm font-medium">
//                                 <span className="font-semibold">{notification.user}</span>
//                                 {notification.secondaryUser && (
//                                   <>
//                                     {' '}and{' '}
//                                     <span className="font-semibold">{notification.secondaryUser}</span>
//                                   </>
//                                 )}
//                                 {' '}{notification.action}
//                               </p>
//                               <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: getPriorityColor(notification.priority), color: 'white' }}>
//                                 {notification.priority}
//                               </span>
//                             </div>
//                             {notification.content && (
//                               <p className="text-sm opacity-75 italic mb-2 p-2 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
//                                 {notification.content}
//                               </p>
//                             )}
//                             <div className="flex items-center space-x-4 text-xs opacity-60">
//                               <span className="flex items-center space-x-1">
//                                 <Clock className="w-3 h-3" />
//                                 <span>{notification.time}</span>
//                               </span>
//                               <span className="flex items-center space-x-1">
//                                 <span className="capitalize">{notification.type}</span>
//                               </span>
//                             </div>
//                           </div>

//                           {/* Enhanced Actions */}
//                           <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//                             <button className="p-2 rounded-full hover:bg-opacity-20 hover:bg-black transition-all duration-200">
//                               <Star className="w-4 h-4" />
//                             </button>
//                             <button className="p-2 rounded-full hover:bg-opacity-20 hover:bg-black transition-all duration-200">
//                               <X className="w-4 h-4" />
//                             </button>
//                           </div>
//                         </div>

//                         {/* Enhanced Unread Indicator */}
//                         {notification.unread && (
//                           <div className="flex items-center justify-between mt-4 p-2 rounded-lg" style={{ backgroundColor: 'rgba(74, 55, 40, 0.1)' }}>
//                             <div className="flex items-center">
//                               <div className="w-2 h-2 rounded-full mr-2 animate-pulse" style={{ backgroundColor: '#4a3728' }}></div>
//                               <span className="text-xs font-medium opacity-75">New notification</span>
//                             </div>
//                             <button className="text-xs font-medium hover:underline" style={{ color: '#4a3728' }}>
//                               Mark as read
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Enhanced Load More */}
//             <div className="text-center">
//               <button className="px-8 py-4 rounded-2xl font-medium hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 mx-auto" style={{ backgroundColor: '#4a3728', color: 'white' }}>
//                 <span>Load More Notifications</span>
//                 <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//               </button>
//               <p className="text-xs opacity-60 mt-2">Showing 6 of 24 notifications</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NotificationsPage;


// import { useState, useEffect, useCallback, useMemo } from 'react';
// import { Bell, User, MessageCircle, Users, Mail, Settings, Search, Filter, MoreHorizontal, X, Heart, MessageSquare, UserPlus, CheckCircle, TrendingUp, Clock, Archive, Star, ChevronDown, Calendar, AlertCircle, Zap, Shield, Eye, EyeOff, Trash2, Pin, Volume2, VolumeX } from 'lucide-react';
// import clsx from 'clsx'; // Added for class name management

// const NotificationsPage = () => {
//   const [activeTab, setActiveTab] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedNotifications, setSelectedNotifications] = useState([]);
//   const [sortBy, setSortBy] = useState('recent');
//   const [filterPriority, setFilterPriority] = useState('all');
//   const [showFilters, setShowFilters] = useState(false);
//   const [viewMode, setViewMode] = useState('detailed');
//   const [mutedNotifications, setMutedNotifications] = useState([]);
//   const [notifications, setNotifications] = useState([
//     {
//       id: 1,
//       type: 'like',
//       user: "Abhishek Shukla",
//       secondaryUsers: ["Sanjay Sharma", "Priya Patel"],
//       action: 'liked your post',
//       content: '"I am thrilled to announce our new product launch that will revolutionize..."',
//       time: "3h ago",
//       timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000),
//       image: "https://randomuser.me/api/portraits/men/20.jpg",
//       unread: true,
//       icon: Heart,
//       priority: 'high',
//       category: 'engagement',
//       postId: 'post_123',
//       reactions: { likes: 45, comments: 12, shares: 5 },
//       isPinned: false
//     },
//     // ... (other notifications remain the same)
//     {
//       id: 2,
//       type: 'comment',
//       user: "Priya Mehra",
//       action: 'commented on your post',
//       content: '"Great insights! Looking forward to more updates on this project."',
//       time: "5h ago",
//       timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
//       image: "https://randomuser.me/api/portraits/women/30.jpg",
//       unread: true,
//       icon: MessageSquare,
//       priority: 'medium',
//       category: 'engagement',
//       postId: 'post_122',
//       isPinned: true
//     },
//     {
//       id: 3,
//       type: 'mention',
//       user: "Rohan Kapoor",
//       action: 'mentioned you in a comment',
//       content: '"Hey @Honey, what do you think about implementing this feature?"',
//       time: "1d ago",
//       timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
//       image: "https://randomuser.me/api/portraits/men/40.jpg",
//       unread: false,
//       icon: MessageCircle,
//       priority: 'low',
//       category: 'mentions',
//       postId: 'post_121',
//       isPinned: false
//     },
//     {
//       id: 4,
//       type: 'connection',
//       user: "Anita Desai",
//       action: 'wants to connect with you',
//       content: 'Product Manager at TechCorp • 500+ connections',
//       time: "2d ago",
//       timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000),
//       image: "https://randomuser.me/api/portraits/women/25.jpg",
//       unread: false,
//       icon: UserPlus,
//       priority: 'medium',
//       category: 'network',
//       mutualConnections: 12,
//       isPinned: false
//     },
//     {
//       id: 5,
//       type: 'achievement',
//       user: "LinkedIn",
//       action: 'congratulated you on your work anniversary',
//       content: '5 years at Throne8 - A milestone worth celebrating! 🎉',
//       time: "3d ago",
//       timestamp: new Date(Date.now() - 72 * 60 * 60 * 1000),
//       image: "https://randomuser.me/api/portraits/men/50.jpg",
//       unread: false,
//       icon: Star,
//       priority: 'high',
//       category: 'system',
//       milestone: '5 years',
//       isPinned: false
//     },
//     {
//       id: 6,
//       type: 'trending',
//       user: "Rahul Verma",
//       action: 'your post is trending',
//       content: '500+ views in the last 24 hours • Top 5% of posts this week',
//       time: "1w ago",
//       timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
//       image: "https://randomuser.me/api/portraits/men/60.jpg",
//       unread: false,
//       icon: TrendingUp,
//       priority: 'medium',
//       category: 'analytics',
//       stats: { views: 523, engagement: '12.4%', reach: 2100 },
//       isPinned: false
//     }
//   ]);

//   // Professional color system
//   const colors = {
//     primary: '#4a3728',
//     secondary: '#e0d8cf',
//     background: '#f6ede8',
//     cardBg: 'rgba(224, 216, 207, 0.7)',
//     hover: 'rgba(74, 55, 40, 0.1)',
//     text: '#4a3728',
//     success: '#059669',
//     warning: '#d97706',
//     danger: '#dc2626',
//     info: '#3b82f6'
//   };

//   // Enhanced stats with trends
//   const stats = [
//     { label: 'Total', count: 24, trend: '+12%', active: true, icon: Bell, color: colors.primary },
//     { label: 'Unread', count: 8, trend: '-3', icon: Clock, color: colors.warning },
//     { label: 'This Week', count: 15, trend: '+5', icon: TrendingUp, color: colors.success },
//     { label: 'Important', count: 3, trend: '0', icon: Star, color: colors.info }
//   ];

//   // Professional sidebar navigation
//   const sidebarItems = [
//     { icon: Bell, label: 'All Notifications', key: 'all', count: 24, color: colors.primary },
//     { icon: Heart, label: 'Engagement', key: 'engagement', count: 12, color: colors.danger },
//     { icon: MessageCircle, label: 'Mentions', key: 'mentions', count: 5, color: colors.info },
//     { icon: Users, label: 'Network', key: 'connections', count: 7, color: colors.success },
//     { icon: TrendingUp, label: 'Analytics', key: 'analytics', count: 3, color: colors.warning },
//     { icon: Shield, label: 'System', key: 'system', count: 2, color: colors.primary }
//   ];

//   // Professional filter options
//   const filterOptions = {
//     priority: ['all', 'high', 'medium', 'low'],
//     time: ['today', 'this_week', 'this_month', 'older'],
//     status: ['all', 'unread', 'read', 'archived']
//   };

//   // Enhanced notification actions
//   const handleNotificationAction = useCallback((action, notificationId) => {
//     switch (action) {
//       case 'pin':
//         setNotifications(prev =>
//           prev.map(n =>
//             n.id === notificationId ? { ...n, isPinned: !n.isPinned } : n
//           )
//         );
//         break;
//       case 'mute':
//         setMutedNotifications(prev =>
//           prev.includes(notificationId)
//             ? prev.filter(id => id !== notificationId)
//             : [...prev, notificationId]
//         );
//         break;
//       case 'delete':
//         setNotifications(prev => prev.filter(n => n.id !== notificationId));
//         break;
//       case 'archive':
//         setNotifications(prev => prev.filter(n => n.id !== notificationId)); // Simulate archiving by removing
//         break;
//       case 'markAsRead':
//         setNotifications(prev =>
//           prev.map(n =>
//             n.id === notificationId ? { ...n, unread: false } : n
//           )
//         );
//         break;
//       default:
//         break;
//     }
//   }, []);

//   // Professional notification card component
//   const NotificationCard = ({ notification }) => {
//     const Icon = notification.icon;
//     const isSelected = selectedNotifications.includes(notification.id);
//     const isMuted = mutedNotifications.includes(notification.id);
//     const [showActions, setShowActions] = useState(false);

//     const handleSelect = () => {
//       setSelectedNotifications(prev =>
//         prev.includes(notification.id)
//           ? prev.filter(id => id !== notification.id)
//           : [...prev, notification.id]
//       );
//     };

//     return (
//       <div
//         className={clsx(
//           'group relative rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-0 backdrop-blur-sm cursor-pointer transform hover:scale-[1.02]',
//           {
//             'ring-2 ring-blue-500': isSelected,
//             'ring-2': notification.unread && !isSelected,
//             'order-first': notification.isPinned
//           }
//         )}
//         style={{
//           backgroundColor: notification.unread
//             ? 'rgba(224, 216, 207, 0.9)'
//             : 'rgba(224, 216, 207, 0.6)',
//           ringColor: notification.unread && !isSelected ? colors.primary : 'transparent',
//           opacity: isMuted ? 0.6 : 1
//         }}
//         onMouseEnter={() => setShowActions(true)}
//         onMouseLeave={() => setShowActions(false)}
//         onClick={handleSelect}
//         role="button"
//         tabIndex={0}
//         aria-label={`Notification from ${notification.user}`}
//       >
//         {/* Pin indicator */}
//         {notification.isPinned && (
//           <div className="absolute top-2 right-2 p-1 rounded-full" style={{ backgroundColor: colors.warning }}>
//             <Pin className="w-3 h-3 text-white" />
//           </div>
//         )}

//         <div className="flex items-start space-x-4">
//           {/* Enhanced profile section */}
//           <div className="relative flex-shrink-0">
//             <div className="relative">
//               <img
//                 src={notification.image}
//                 alt={`Profile picture of ${notification.user}`}
//                 className="w-14 h-14 rounded-2xl object-cover shadow-lg ring-2 ring-white"
//                 onError={(e) => { e.target.src = 'https://via.placeholder.com/56'; e.target.alt = 'Placeholder profile picture'; }}
//               />
//               <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-xl flex items-center justify-center shadow-lg ring-2 ring-white"
//                 style={{ backgroundColor: colors.primary }}>
//                 <Icon className="w-4 h-4 text-white" />
//               </div>
//             </div>

//             {/* Priority badge */}
//             <div className="absolute -top-1 -left-1">
//               <div
//                 className="w-4 h-4 rounded-full border-2 border-white shadow-sm animate-pulse"
//                 style={{
//                   backgroundColor: notification.priority === 'high'
//                     ? colors.danger
//                     : notification.priority === 'medium'
//                     ? colors.warning
//                     : colors.success
//                 }}
//               />
//             </div>
//           </div>

//           {/* Enhanced content section */}
//           <div className="flex-1 min-w-0">
//             <div className="flex items-start justify-between mb-2">
//               <div className="flex-1">
//                 <div className="flex items-center space-x-2 mb-1">
//                   <p className="text-sm font-medium flex items-center flex-wrap gap-1">
//                     <span className="font-bold text-base">{notification.user}</span>
//                     {notification.secondaryUsers && notification.secondaryUsers.length > 0 && (
//                       <span className="text-xs px-2 py-1 rounded-full"
//                         style={{ backgroundColor: colors.hover }}>
//                         +{notification.secondaryUsers.length} others
//                       </span>
//                     )}
//                     <span className="text-sm opacity-75">{notification.action}</span>
//                   </p>
//                 </div>

//                 {/* Content preview */}
//                 {notification.content && (
//                   <div className="mb-3 p-3 rounded-xl" style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}>
//                     <p className="text-sm italic line-clamp-2">{notification.content}</p>
//                   </div>
//                 )}

//                 {/* Metadata row */}
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center space-x-4 text-xs opacity-60">
//                     <span className="flex items-center space-x-1">
//                       <Clock className="w-3 h-3" />
//                       <span>{notification.time}</span>
//                     </span>
//                     <span className="flex items-center space-x-1">
//                       <span className="px-2 py-1 rounded-full capitalize"
//                         style={{ backgroundColor: colors.hover }}>
//                         {notification.category}
//                       </span>
//                     </span>
//                     {notification.mutualConnections && (
//                       <span className="flex items-center space-x-1">
//                         <Users className="w-3 h-3" />
//                         <span>{notification.mutualConnections} mutual</span>
//                       </span>
//                     )}
//                   </div>

//                   {/* Stats for engagement notifications */}
//                   {notification.reactions && (
//                     <div className="flex items-center space-x-3 text-xs">
//                       <span className="flex items-center space-x-1">
//                         <Heart className="w-3 h-3" />
//                         <span>{notification.reactions.likes}</span>
//                       </span>
//                       <span className="flex items-center space-x-1">
//                         <MessageSquare className="w-3 h-3" />
//                         <span>{notification.reactions.comments}</span>
//                       </span>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Professional action menu */}
//               <div className={clsx(
//                 'flex items-center space-x-1 transition-all duration-200',
//                 { 'opacity-100': showActions, 'opacity-0': !showActions }
//               )}>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleNotificationAction('pin', notification.id);
//                   }}
//                   className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-black transition-all duration-200"
//                   title="Pin notification"
//                   aria-label="Pin notification"
//                 >
//                   <Pin className="w-4 h-4" />
//                 </button>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleNotificationAction('mute', notification.id);
//                   }}
//                   className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-black transition-all duration-200"
//                   title={isMuted ? "Unmute" : "Mute"}
//                   aria-label={isMuted ? "Unmute notification" : "Mute notification"}
//                 >
//                   {isMuted ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
//                 </button>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleNotificationAction('archive', notification.id);
//                   }}
//                   className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-black transition-all duration-200"
//                   title="Archive"
//                   aria-label="Archive notification"
//                 >
//                   <Archive className="w-4 h-4" />
//                 </button>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleNotificationAction('delete', notification.id);
//                   }}
//                   className="p-2 rounded-lg hover:bg-opacity-20 hover:bg-red-500 transition-all duration-200"
//                   title="Delete"
//                   aria-label="Delete notification"
//                 >
//                   <Trash2 className="w-4 h-4" />
//                 </button>
//               </div>
//             </div>

//             {/* Unread indicator with actions */}
//             {notification.unread && (
//               <div className="flex items-center justify-between mt-3 p-3 rounded-xl"
//                 style={{ backgroundColor: colors.hover }}>
//                 <div className="flex items-center">
//                   <div className="w-2 h-2 rounded-full mr-2 animate-pulse"
//                     style={{ backgroundColor: colors.primary }} />
//                   <span className="text-xs font-medium opacity-75">New notification</span>
//                 </div>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleNotificationAction('markAsRead', notification.id);
//                   }}
//                   className="text-xs font-medium hover:underline"
//                   style={{ color: colors.primary }}
//                   aria-label="Mark notification as read"
//                 >
//                   Mark as read
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Professional header component
//   const Header = () => (
//     <div className="sticky top-0 z-50 backdrop-blur-xl border-b shadow-lg"
//       style={{ backgroundColor: 'rgba(224, 216, 207, 0.95)', borderColor: colors.secondary }}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           <div className="flex items-center space-x-8">
//             {/* Logo and title */}
//             <div className="flex items-center space-x-4">
//               <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
//                 style={{ backgroundColor: colors.primary }}>
//                 <Bell className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold">Notifications</h1>
//                 <p className="text-sm opacity-60">Stay connected with your network</p>
//               </div>
//             </div>

//             {/* Quick stats */}
//             <div className="hidden lg:flex items-center space-x-6">
//               {stats.slice(0, 3).map((stat, index) => (
//                 <div key={index} className="flex items-center space-x-3">
//                   <div className="flex items-center space-x-2 px-4 py-2 rounded-xl"
//                     style={{ backgroundColor: colors.hover }}>
//                     <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
//                     <span className="font-bold text-lg">{stat.count}</span>
//                     <span className="text-xs opacity-60">{stat.label}</span>
//                     {stat.trend && (
//                       <span className={clsx(
//                         'text-xs font-medium',
//                         stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
//                       )}>
//                         {stat.trend}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Search and actions */}
//           <div className="flex items-center space-x-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 opacity-60" />
//               <input
//                 type="text"
//                 placeholder="Search notifications..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-12 pr-4 py-3 rounded-2xl border-0 focus:ring-2 focus:outline-none text-sm w-80 shadow-inner"
//                 style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', color: colors.text }}
//                 aria-label="Search notifications"
//               />
//             </div>

//             <button
//               onClick={() => setShowFilters(!showFilters)}
//               className="p-3 rounded-2xl hover:shadow-lg transition-all duration-200 relative"
//               style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
//               aria-label="Toggle filters"
//             >
//               <Filter className="w-5 h-5" />
//               {filterPriority !== 'all' && (
//                 <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
//                   style={{ backgroundColor: colors.danger }} />
//               )}
//             </button>

//             <button className="p-3 rounded-2xl hover:shadow-lg transition-all duration-200"
//               style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
//               aria-label="Open settings"
//             >
//               <Settings className="w-5 h-5" />
//             </button>
//           </div>
//         </div>

//         {/* Advanced filters dropdown */}
//         {showFilters && (
//           <div className="absolute right-4 top-full mt-2 w-80 rounded-2xl shadow-2xl border-0 p-6 z-50"
//             style={{ backgroundColor: 'rgba(255, 255, 255, 0.98)' }}>
//             <h3 className="font-bold mb-4">Advanced Filters</h3>

//             <div className="space-y-4">
//               <div>
//                 <label className="text-sm font-medium opacity-75 block mb-2">Priority</label>
//                 <select
//                   value={filterPriority}
//                   onChange={(e) => setFilterPriority(e.target.value)}
//                   className="w-full p-2 rounded-xl border-0"
//                   style={{ backgroundColor: colors.secondary }}
//                   aria-label="Filter by priority"
//                 >
//                   {filterOptions.priority.map(option => (
//                     <option key={option} value={option}>
//                       {option.charAt(0).toUpperCase() + option.slice(1)}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label className="text-sm font-medium opacity-75 block mb-2">Sort By</label>
//                 <select
//                   value={sortBy}
//                   onChange={(e) => setSortBy(e.target.value)}
//                   className="w-full p-2 rounded-xl border-0"
//                   style={{ backgroundColor: colors.secondary }}
//                   aria-label="Sort notifications"
//                 >
//                   <option value="recent">Most Recent</option>
//                   <option value="priority">Priority</option>
//                   <option value="unread">Unread First</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="text-sm font-medium opacity-75 block mb-2">View Mode</label>
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => setViewMode('detailed')}
//                     className={clsx(
//                       'flex-1 p-2 rounded-xl text-sm font-medium transition-all duration-200',
//                       viewMode === 'detailed' ? 'text-white' : ''
//                     )}
//                     style={{
//                       backgroundColor: viewMode === 'detailed' ? colors.primary : colors.secondary
//                     }}
//                     aria-label="Switch to detailed view"
//                   >
//                     Detailed
//                   </button>
//                   <button
//                     onClick={() => setViewMode('compact')}
//                     className={clsx(
//                       'flex-1 p-2 rounded-xl text-sm font-medium transition-all duration-200',
//                       viewMode === 'compact' ? 'text-white' : ''
//                     )}
//                     style={{
//                       backgroundColor: viewMode === 'compact' ? colors.primary : colors.secondary
//                     }}
//                     aria-label="Switch to compact view"
//                   >
//                     Compact
//                   </button>
//                 </div>
//               </div>

//               <div className="pt-4 flex space-x-2">
//                 <button
//                   onClick={() => {
//                     setFilterPriority('all');
//                     setSortBy('recent');
//                     setShowFilters(false);
//                   }}
//                   className="flex-1 p-2 rounded-xl text-sm font-medium"
//                   style={{ backgroundColor: colors.secondary }}
//                   aria-label="Reset filters"
//                 >
//                   Reset
//                 </button>
//                 <button
//                   onClick={() => setShowFilters(false)}
//                   className="flex-1 p-2 rounded-xl text-sm font-medium text-white"
//                   style={{ backgroundColor: colors.primary }}
//                   aria-label="Apply filters"
//                 >
//                   Apply
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );

//   // Professional sidebar component
//   const Sidebar = () => (
//     <div className="space-y-6">
//       {/* Enhanced profile card */}
//       <div className="rounded-2xl p-6 shadow-xl border-0 backdrop-blur-sm relative overflow-hidden group"
//         style={{ backgroundColor: colors.cardBg }}>
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16"
//             style={{ backgroundColor: colors.primary }} />
//           <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full -ml-12 -mb-12"
//             style={{ backgroundColor: colors.primary }} />
//         </div>

//         <div className="relative text-center">
//           <div className="relative inline-block mb-4">
//             <img
//               src="https://randomuser.me/api/portraits/men/88.jpg"
//               alt="Profile picture of Honey Sharma"
//               className="w-20 h-20 rounded-2xl object-cover shadow-xl ring-4 ring-white"
//               onError={(e) => { e.target.src = 'https://via.placeholder.com/80'; e.target.alt = 'Placeholder profile picture'; }}
//             />
//             <div className="absolute -bottom-2 -right-2 px-2 py-1 rounded-full border-2 border-white shadow-lg flex items-center space-x-1"
//               style={{ backgroundColor: colors.success }}>
//               <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
//               <span className="text-xs font-medium text-white">Active</span>
//             </div>
//           </div>

//           <h3 className="font-bold text-xl mb-1">Honey Sharma</h3>
//           <p className="text-sm opacity-75 mb-1">Co-Founder @Throne8</p>
//           <p className="text-xs opacity-60 mb-4">Bhopal, Madhya Pradesh</p>

//           <div className="flex justify-center space-x-4 pt-4 border-t" style={{ borderColor: colors.hover }}>
//             <div className="text-center">
//               <div className="font-bold text-lg">2.5K</div>
//               <div className="text-xs opacity-60">Followers</div>
//             </div>
//             <div className="text-center">
//               <div className="font-bold text-lg">500+</div>
//               <div className="text-xs opacity-60">Connections</div>
//             </div>
//             <div className="text-center">
//               <div className="font-bold text-lg">48</div>
//               <div className="text-xs opacity-60">Posts</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation menu */}
//       <nav className="space-y-2">
//         {sidebarItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = activeTab === item.key;

//           return (
//             <button
//               key={item.key}
//               onClick={() => setActiveTab(item.key)}
//               className={clsx(
//                 'w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group',
//                 {
//                   'shadow-lg transform scale-105': isActive,
//                   'hover:shadow-md hover:scale-102': !isActive
//                 }
//               )}
//               style={{
//                 backgroundColor: isActive ? colors.hover : 'rgba(224, 216, 207, 0.4)',
//                 borderLeft: isActive ? `4px solid ${item.color}` : '4px solid transparent'
//               }}
//               aria-label={`Filter notifications by ${item.label}`}
//             >
//               <div className="flex items-center space-x-3">
//                 <div className={clsx(
//                   'p-2 rounded-xl transition-all duration-200',
//                   isActive ? 'shadow-md' : 'group-hover:shadow-sm'
//                 )} style={{ backgroundColor: isActive ? item.color : colors.hover }}>
//                   <Icon className={clsx('w-5 h-5', { 'text-white': isActive })} />
//                 </div>
//                 <span className={clsx('font-medium', { 'text-lg': isActive })}>
//                   {item.label}
//                 </span>
//               </div>
//               {item.count > 0 && (
//                 <span className={clsx(
//                   'text-xs px-3 py-1 rounded-full font-bold transition-all duration-200',
//                   { 'text-white animate-pulse': isActive }
//                 )} style={{
//                   backgroundColor: isActive ? item.color : colors.hover,
//                   color: isActive ? 'white' : colors.text
//                 }}>
//                   {item.count}
//                 </span>
//               )}
//             </button>
//           );
//         })}
//       </nav>

//       {/* Quick actions card */}
//       <div className="rounded-2xl p-6 shadow-sm border-0" style={{ backgroundColor: colors.cardBg }}>
//         <h4 className="font-bold mb-4 flex items-center">
//           <Zap className="w-5 h-5 mr-2" style={{ color: colors.warning }} />
//           Quick Actions
//         </h4>
//         <div className="space-y-3">
//           <button className="w-full p-3 rounded-xl text-sm font-medium hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2"
//             style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
//             onClick={() => setNotifications(prev => prev.map(n => ({ ...n, unread: false })))}
//             aria-label="Mark all notifications as read"
//           >
//             <CheckCircle className="w-4 h-4" />
//             <span>Mark all as read</span>
//           </button>
//           <button className="w-full p-3 rounded-xl text-sm font-medium hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2"
//             style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
//             onClick={() => setNotifications(prev => prev.filter(n => n.unread))}
//             aria-label="Archive read notifications"
//           >
//             <Archive className="w-4 h-4" />
//             <span>Archive read</span>
//           </button>
//           <button className="w-full p-3 rounded-xl text-sm font-medium hover:shadow-md transition-all duration-200 flex items-center justify-center space-x-2"
//             style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
//             aria-label="Open notification preferences"
//           >
//             <Settings className="w-4 h-4" />
//             <span>Preferences</span>
//           </button>
//         </div>
//       </div>

//       {/* Activity insights */}
//       <div className="rounded-2xl p-6 shadow-sm border-0" style={{ backgroundColor: colors.cardBg }}>
//         <h4 className="font-bold mb-4 flex items-center">
//           <TrendingUp className="w-5 h-5 mr-2" style={{ color: colors.success }} />
//           Activity Insights
//         </h4>
//         <div className="space-y-3">
//           <div className="flex items-center justify-between">
//             <span className="text-sm opacity-75">Peak Activity</span>
//             <span className="text-sm font-medium">3-5 PM</span>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-sm opacity-75">Response Rate</span>
//             <span className="text-sm font-medium">89%</span>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-sm opacity-75">Avg. Response Time</span>
//             <span className="text-sm font-medium">2.5 hrs</span>
//           </div>
//           <div className="w-full h-2 rounded-full overflow-hidden mt-4" style={{ backgroundColor: colors.hover }}>
//             <div className="h-full rounded-full transition-all duration-500"
//               style={{ width: '89%', backgroundColor: colors.success }} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Main content area
//   const MainContent = () => {
//     // Filter and sort notifications
//     const filteredNotifications = useMemo(() => {
//       let filtered = [...notifications];

//       // Apply search filter
//       if (searchTerm) {
//         filtered = filtered.filter(n =>
//           n.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           n.content?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           n.action.toLowerCase().includes(searchTerm.toLowerCase())
//         );
//       }

//       // Apply priority filter
//       if (filterPriority !== 'all') {
//         filtered = filtered.filter(n => n.priority === filterPriority);
//       }

//       // Apply category filter based on active tab
//       if (activeTab !== 'all') {
//         filtered = filtered.filter(n => n.category === activeTab);
//       }

//       // Sort notifications
//       switch (sortBy) {
//         case 'priority':
//           const priorityOrder = { high: 0, medium: 1, low: 2 };
//           filtered.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
//           break;
//         case 'unread':
//           filtered.sort((a, b) => (b.unread ? 1 : 0) - (a.unread ? 1 : 0));
//           break;
//         default: // recent
//           filtered.sort((a, b) => b.timestamp - a.timestamp);
//       }

//       // Pinned items always come first
//       filtered.sort((a, b) => (b.isPinned ? 1 : 0) - (a.isPinned ? 1 : 0));

//       return filtered;
//     }, [searchTerm, filterPriority, activeTab, sortBy, notifications]);

//     return (
//       <div className="space-y-6">
//         {/* Content header */}
//         <div className="rounded-2xl p-6 shadow-sm border-0 backdrop-blur-sm"
//           style={{ backgroundColor: 'rgba(224, 216, 207, 0.5)' }}>
//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//             <div>
//               <h2 className="text-2xl font-bold mb-2 flex items-center">
//                 {sidebarItems.find(item => item.key === activeTab)?.label || 'All Notifications'}
//                 {filteredNotifications.filter(n => n.unread).length > 0 && (
//                   <span className="ml-3 px-3 py-1 rounded-full text-sm font-medium bg-red-500 text-white animate-pulse">
//                     {filteredNotifications.filter(n => n.unread).length} new
//                   </span>
//                 )}
//               </h2>
//               <p className="text-sm opacity-75">
//                 Showing {filteredNotifications.length} of {notifications.length} notifications
//               </p>
//             </div>

//             <div className="flex items-center space-x-3">
//               {selectedNotifications.length > 0 && (
//                 <div className="flex items-center space-x-2 px-4 py-2 rounded-xl"
//                   style={{ backgroundColor: colors.info }}>
//                   <span className="text-sm font-medium text-white">
//                     {selectedNotifications.length} selected
//                   </span>
//                   <button
//                     onClick={() => setSelectedNotifications([])}
//                     className="p-1 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-200"
//                     aria-label="Clear selected notifications"
//                   >
//                     <X className="w-4 h-4 text-white" />
//                   </button>
//                 </div>
//               )}

//               <button className="px-4 py-2 rounded-xl text-sm font-medium hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
//                 style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
//                 aria-label={`View mode: ${viewMode}`}
//               >
//                 <Eye className="w-4 h-4" />
//                 <span>View: {viewMode}</span>
//               </button>

//               <button className="p-2 rounded-xl hover:shadow-lg transition-all duration-200"
//                 style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
//                 aria-label="More options"
//               >
//                 <MoreHorizontal className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Notifications list */}
//         <div className="space-y-4">
//           {filteredNotifications.length === 0 ? (
//             <div className="text-center py-16 rounded-2xl"
//               style={{ backgroundColor: colors.cardBg }}>
//               <AlertCircle className="w-16 h-16 mx-auto mb-4 opacity-30" />
//               <h3 className="text-lg font-medium mb-2">No notifications found</h3>
//               <p className="text-sm opacity-60">
//                 {searchTerm ? 'Try adjusting your search or filters' : 'You\'re all caught up!'}
//               </p>
//             </div>
//           ) : (
//             filteredNotifications.map((notification) => (
//               <NotificationCard key={notification.id} notification={notification} />
//             ))
//           )}
//         </div>

//         {/* Load more button */}
//         {filteredNotifications.length > 0 && (
//           <div className="text-center pt-6">
//             <button className="px-8 py-4 rounded-2xl font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 mx-auto group"
//               style={{ backgroundColor: colors.primary, color: 'white' }}
//               aria-label="Load more notifications"
//             >
//               <span>Load More Notifications</span>
//               <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
//             </button>
//             <p className="text-xs opacity-60 mt-3">
//               Showing {filteredNotifications.length} of {notifications.length} • Updated just now
//             </p>
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: colors.background, color: colors.text }}>
//       <Header />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           <div className="lg:col-span-1">
//             <Sidebar />
//           </div>

//           <div className="lg:col-span-3">
//             <MainContent />
//           </div>
//         </div>
//       </div>

//       {/* Floating action button for mobile */}
//       <div className="fixed bottom-6 right-6 lg:hidden">
//         <button className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center group"
//           style={{ backgroundColor: colors.primary }}
//           aria-label="Toggle sidebar"
//           onClick={() => setShowFilters(!showFilters)} // Example action
//         >
//           <Bell className="w-6 h-6 text-white group-hover:animate-bounce" />
//           {notifications.filter(n => n.unread).length > 0 && (
//             <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold bg-red-500 text-white animate-pulse">
//               {notifications.filter(n => n.unread).length}
//             </div>
//           )}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default NotificationsPage;


//==============================================================================================================================

// import { useState } from 'react';

// const SettingsNotifications = () => {
//   // eslint-disable-next-line no-unused-vars
//   const [activeSection, setActiveSection] = useState('notifications');

//   const accountPreferencesItems = [
//     { name: 'Profile Settings', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
//     { name: 'Email Preferences', icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
//   ];

//   const signInSecurityItems = [
//     { name: 'Password', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
//     { name: 'Two-Factor Auth', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
//   ];

//   const visibilityItems = [
//     { name: 'Profile Visibility', icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' },
//     { name: 'Activity Status', icon: 'M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z' },
//   ];

//   const dataPrivacyItems = [
//     { name: 'Data Sharing', icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z' },
//     { name: 'Privacy Settings', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
//   ];

//   const advertisingDataItems = [
//     { name: 'Ad Preferences', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
//     { name: 'Ad Tracking', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
//   ];

//   const notificationItems = [
//     { name: 'Job Search Notifications', description: 'Updates about new job opportunities', active: true },
//     { name: 'Recruitment Alerts', description: 'Notifications when hiring for your company', active: false },
//     { name: 'Network Activity', description: 'Updates from your professional connections', active: true },
//     { name: 'Weekly Digest', description: 'Summary of network updates and activity', active: false },
//     { name: 'Content Engagement', description: 'Likes, comments, and shares on your posts', active: true },
//     { name: 'Direct Messages', description: 'New messages and conversation updates', active: true },
//     { name: 'Group Discussions', description: 'Updates from groups you\'ve joined', active: false },
//     { name: 'Company Updates', description: 'News from companies you follow', active: false },
//     { name: 'Event Invitations', description: 'Professional events and webinars', active: true },
//     { name: 'Industry News', description: 'Latest news and insights from your industry', active: false },
//     { name: 'Profile Updates', description: 'Suggestions to improve your profile', active: true },
//     { name: 'Skill Assessments', description: 'Invitations to showcase your skills', active: false },
//     { name: 'Learning Recommendations', description: 'Courses and content suggestions', active: true },
//   ];

//   const premiumItems = [
//     { name: 'Premium Features', icon: 'M5 3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H5zm7 14l-3-3h2V9h2v5h2l-3 3z' },
//     { name: 'Subscription Plans', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' },
//     { name: 'Exclusive Benefits', icon: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
//   ];

//   const toggleNotification = (index) => {
//     // In a real app, this would update the notification state
//     console.log(`Toggling notification ${index}`);
//   };

//   return (
//     <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f6ede8 0%, #e0d8cf 100%)' }}>
//       <div className="container mx-auto px-6 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold mb-2" style={{ color: '#4a3728' }}>Account Settings</h1>
//           <p className="text-lg opacity-80" style={{ color: '#4a3728' }}>
//             Manage your preferences and security settings
//           </p>
//         </div>

//         <div className="flex gap-8">
//           {/* Enhanced Sidebar */}
//           <div className="w-80 flex-shrink-0">
//             <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">

//               {/* Account Preferences */}
//               <div className="mb-8">
//                 <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200/50" style={{ color: '#4a3728' }}>
//                   Account Preferences
//                 </h3>
//                 <div className="space-y-2">
//                   {accountPreferencesItems.map((item, index) => (
//                     <button
//                       key={index}
//                       className="w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/50 hover:shadow-md hover:scale-[1.02] group"
//                     >
//                       <div className="p-2 rounded-lg bg-white/50 group-hover:bg-white/70 transition-colors">
//                         <svg className="w-5 h-5" style={{ color: '#4a3728' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                         </svg>
//                       </div>
//                       <span className="text-base font-medium" style={{ color: '#4a3728' }}>{item.name}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Sign in & Security */}
//               <div className="mb-8">
//                 <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200/50" style={{ color: '#4a3728' }}>
//                   Sign in & Security
//                 </h3>
//                 <div className="space-y-2">
//                   {signInSecurityItems.map((item, index) => (
//                     <button
//                       key={index}
//                       className="w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/50 hover:shadow-md hover:scale-[1.02] group"
//                     >
//                       <div className="p-2 rounded-lg bg-white/50 group-hover:bg-white/70 transition-colors">
//                         <svg className="w-5 h-5" style={{ color: '#4a3728' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                         </svg>
//                       </div>
//                       <span className="text-base font-medium" style={{ color: '#4a3728' }}>{item.name}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Visibility */}
//               <div className="mb-8">
//                 <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200/50" style={{ color: '#4a3728' }}>
//                   Visibility
//                 </h3>
//                 <div className="space-y-2">
//                   {visibilityItems.map((item, index) => (
//                     <button
//                       key={index}
//                       className="w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/50 hover:shadow-md hover:scale-[1.02] group"
//                     >
//                       <div className="p-2 rounded-lg bg-white/50 group-hover:bg-white/70 transition-colors">
//                         <svg className="w-5 h-5" style={{ color: '#4a3728' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                         </svg>
//                       </div>
//                       <span className="text-base font-medium" style={{ color: '#4a3728' }}>{item.name}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Data Privacy */}
//               <div className="mb-8">
//                 <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200/50" style={{ color: '#4a3728' }}>
//                   Data Privacy
//                 </h3>
//                 <div className="space-y-2">
//                   {dataPrivacyItems.map((item, index) => (
//                     <button
//                       key={index}
//                       className="w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/50 hover:shadow-md hover:scale-[1.02] group"
//                     >
//                       <div className="p-2 rounded-lg bg-white/50 group-hover:bg-white/70 transition-colors">
//                         <svg className="w-5 h-5" style={{ color: '#4a3728' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                         </svg>
//                       </div>
//                       <span className="text-base font-medium" style={{ color: '#4a3728' }}>{item.name}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Advertising Data */}
//               <div className="mb-8">
//                 <h3 className="text-xl font-bold mb-4 pb-2 border-b border-gray-200/50" style={{ color: '#4a3728' }}>
//                   Advertising Data
//                 </h3>
//                 <div className="space-y-2">
//                   {advertisingDataItems.map((item, index) => (
//                     <button
//                       key={index}
//                       className="w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/50 hover:shadow-md hover:scale-[1.02] group"
//                     >
//                       <div className="p-2 rounded-lg bg-white/50 group-hover:bg-white/70 transition-colors">
//                         <svg className="w-5 h-5" style={{ color: '#4a3728' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                         </svg>
//                       </div>
//                       <span className="text-base font-medium" style={{ color: '#4a3728' }}>{item.name}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Premium Section */}
//               <div className="pt-6 border-t-2 border-orange-200/50">
//                 <h3 className="text-xl font-bold mb-4 flex items-center" style={{ color: '#4a3728' }}>
//                   <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Premium</span>
//                   <span className="ml-2 px-2 py-1 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-xs rounded-full">PRO</span>
//                 </h3>
//                 <div className="space-y-2">
//                   {premiumItems.map((item, index) => (
//                     <button
//                       key={index}
//                       className="w-full flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:shadow-md hover:scale-[1.02] group"
//                     >
//                       <div className="p-2 rounded-lg bg-gradient-to-r from-orange-100 to-orange-200 group-hover:from-orange-200 group-hover:to-orange-300 transition-all">
//                         <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
//                         </svg>
//                       </div>
//                       <span className="text-base font-medium" style={{ color: '#4a3728' }}>{item.name}</span>
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Enhanced Main Content */}
//           <div className="flex-1">
//             <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/30">
//               <div className="mb-6">
//                 <h2 className="text-3xl font-bold mb-3" style={{ color: '#4a3728' }}>
//                   Notification Preferences
//                 </h2>
//                 <p className="text-lg opacity-80" style={{ color: '#4a3728' }}>
//                   Choose which notifications you d like to receive to stay informed about what matters most to you.
//                 </p>
//               </div>

//               <div className="space-y-4">
//                 {notificationItems.map((item, index) => (
//                   <div
//                     key={index}
//                     className="p-6 bg-white/50 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-white/30 group"
//                   >
//                     <div className="flex items-center justify-between">
//                       <div className="flex-1">
//                         <h4 className="text-lg font-semibold mb-1" style={{ color: '#4a3728' }}>
//                           {item.name}
//                         </h4>
//                         <p className="text-sm opacity-70" style={{ color: '#4a3728' }}>
//                           {item.description}
//                         </p>
//                       </div>

//                       <div className="flex items-center gap-4">
//                         <span className={`px-3 py-1 rounded-full text-xs font-medium ${
//                           item.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
//                         }`}>
//                           {item.active ? 'Active' : 'Inactive'}
//                         </span>

//                         <button
//                           onClick={() => toggleNotification(index)}
//                           className={`relative w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
//                             item.active ? 'bg-green-500' : 'bg-gray-300'
//                           }`}
//                         >
//                           <div
//                             className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
//                               item.active ? 'translate-x-6' : 'translate-x-0.5'
//                             }`}
//                           />
//                         </button>

//                         <button className="p-2 rounded-xl hover:bg-white/50 transition-colors group-hover:bg-white/70">
//                           <svg className="w-5 h-5 opacity-60 hover:opacity-100 transition-opacity" style={{ color: '#4a3728' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Action Buttons */}
//               <div className="mt-8 flex gap-4">
//                 <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-md hover:shadow-lg">
//                   Save Changes
//                 </button>
//                 <button className="px-6 py-3 bg-white/70 font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 shadow-md hover:shadow-lg" style={{ color: '#4a3728' }}>
//                   Reset to Default
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsNotifications;


//=================================================================================================================

// import { useState } from 'react';
// // eslint-disable-next-line no-unused-vars
// import { ChevronRight, User, Bell, Shield, Palette, Globe, Smartphone, CreditCard, HelpCircle, LogOut, Settings } from 'lucide-react';

// const SettingsPage = () => {
//   const [activeTab, setActiveTab] = useState('account');
//   const [autoplayVideos, setAutoplayVideos] = useState(true);
//   const [soundEffects, setSoundEffects] = useState(true);
//   const [notifications, setNotifications] = useState(true);
//   const [darkMode, setDarkMode] = useState(false);

//   const ToggleSwitch = ({ isOn, onToggle }) => (
//     <div
//       onClick={onToggle}
//       className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out cursor-pointer ${
//         isOn ? 'bg-[#4a3728]' : 'bg-gray-300'
//       }`}
//     >
//       <span
//         className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
//           isOn ? 'translate-x-6' : 'translate-x-1'
//         }`}
//       />
//     </div>
//   );

//   const TabButton = ({ id, label, icon: Icon, isActive, onClick }) => (
//     <button
//       onClick={() => onClick(id)}
//       className={`flex items-center space-x-3 w-full p-4 rounded-xl transition-all duration-200 ${
//         isActive 
//           ? 'bg-[#4a3728] text-white shadow-lg' 
//           : 'text-[#4a3728] hover:bg-[#e0d8cf]'
//       }`}
//     >
//       <Icon className="w-5 h-5" />
//       <span className="font-medium">{label}</span>
//     </button>
//   );

//   const SettingItem = ({ label, description, value, onClick, hasToggle = false, toggleState, onToggle, isDangerous = false }) => (
//     <div 
//       className={`flex justify-between items-center p-4 rounded-lg hover:bg-[#e0d8cf] transition-colors duration-200 cursor-pointer group border border-transparent hover:border-[#4a3728]/10 ${isDangerous ? 'hover:bg-red-50 hover:border-red-200' : ''}`}
//       onClick={onClick}
//     >
//       <div className="flex-1">
//         <p className={`font-medium ${isDangerous ? 'text-red-600' : 'text-[#4a3728]'} group-hover:text-[#2d1f18]`}>
//           {label}
//         </p>
//         {description && (
//           <p className="text-sm text-[#4a3728]/60 mt-1">{description}</p>
//         )}
//       </div>
//       <div className="flex items-center space-x-3">
//         {hasToggle ? (
//           <ToggleSwitch isOn={toggleState} onToggle={(e) => { e.stopPropagation(); onToggle(); }} />
//         ) : (
//           <>
//             {value && <span className="text-[#4a3728] text-sm opacity-70">{value}</span>}
//             <ChevronRight className="w-4 h-4 text-[#4a3728] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
//           </>
//         )}
//       </div>
//     </div>
//   );

//   const SettingSection = ({ title, children, className = "" }) => (
//     <div className={`bg-[#f6ede8] rounded-xl p-6 shadow-sm border border-[#e0d8cf] ${className}`}>
//       <h3 className="text-lg font-semibold text-[#4a3728] mb-4">{title}</h3>
//       <div className="space-y-2">
//         {children}
//       </div>
//     </div>
//   );

//   const tabs = [
//     { id: 'account', label: 'Account', icon: User },
//     { id: 'preferences', label: 'Preferences', icon: Settings },
//     { id: 'notifications', label: 'Notifications', icon: Bell },
//     { id: 'privacy', label: 'Privacy', icon: Shield },
//     { id: 'appearance', label: 'Appearance', icon: Palette },
//     { id: 'billing', label: 'Billing', icon: CreditCard },
//   ];

//   const renderContent = () => {
//     switch (activeTab) {
//       case 'account':
//         return (
//           <div className="space-y-6">
//             <SettingSection title="Profile Information">
//               <SettingItem 
//                 label="Personal Details" 
//                 description="Name, location, and industry information"
//               />
//               <SettingItem 
//                 label="Professional Information" 
//                 description="Work experience and skills"
//               />
//               <SettingItem 
//                 label="Contact Information" 
//                 description="Email, phone, and social links"
//               />
//               <SettingItem 
//                 label="Verifications" 
//                 description="Verify your identity and credentials"
//               />
//             </SettingSection>

//             <SettingSection title="Account Security">
//               <SettingItem 
//                 label="Change Password" 
//                 description="Update your account password"
//               />
//               <SettingItem 
//                 label="Two-Factor Authentication" 
//                 description="Add an extra layer of security"
//                 value="Disabled"
//               />
//               <SettingItem 
//                 label="Login Activity" 
//                 description="See where you're logged in"
//               />
//             </SettingSection>
//           </div>
//         );

//       case 'preferences':
//         return (
//           <div className="space-y-6">
//             <SettingSection title="Content Preferences">
//               <SettingItem 
//                 label="Language" 
//                 description="Choose your preferred language"
//                 value="English"
//               />
//               <SettingItem 
//                 label="Content Language" 
//                 description="Language for posts and articles"
//                 value="English"
//               />
//               <SettingItem 
//                 label="Feed Preferences" 
//                 description="Customize what you see in your feed"
//                 value="Most relevant"
//               />
//             </SettingSection>

//             <SettingSection title="Media Settings">
//               <SettingItem 
//                 label="Autoplay Videos" 
//                 description="Automatically play videos in your feed"
//                 hasToggle={true}
//                 toggleState={autoplayVideos}
//                 onToggle={() => setAutoplayVideos(!autoplayVideos)}
//               />
//               <SettingItem 
//                 label="Sound Effects" 
//                 description="Play sounds for notifications and interactions"
//                 hasToggle={true}
//                 toggleState={soundEffects}
//                 onToggle={() => setSoundEffects(!soundEffects)}
//               />
//             </SettingSection>

//             <SettingSection title="Sync & Integration">
//               <SettingItem 
//                 label="Calendar Sync" 
//                 description="Sync your calendar with LinkedIn events"
//               />
//               <SettingItem 
//                 label="Contact Sync" 
//                 description="Import contacts from your address book"
//               />
//               <SettingItem 
//                 label="Microsoft Integration" 
//                 description="Connect with Microsoft services"
//               />
//             </SettingSection>
//           </div>
//         );

//       case 'notifications':
//         return (
//           <div className="space-y-6">
//             <SettingSection title="Push Notifications">
//               <SettingItem 
//                 label="Enable Notifications" 
//                 description="Receive push notifications on this device"
//                 hasToggle={true}
//                 toggleState={notifications}
//                 onToggle={() => setNotifications(!notifications)}
//               />
//               <SettingItem 
//                 label="Messages" 
//                 description="New messages and replies"
//                 value="Enabled"
//               />
//               <SettingItem 
//                 label="Network Updates" 
//                 description="Updates from your network"
//                 value="Enabled"
//               />
//             </SettingSection>

//             <SettingSection title="Email Notifications">
//               <SettingItem 
//                 label="Weekly Digest" 
//                 description="Weekly summary of network activity"
//               />
//               <SettingItem 
//                 label="Job Recommendations" 
//                 description="Get job suggestions via email"
//               />
//             </SettingSection>
//           </div>
//         );

//       case 'privacy':
//         return (
//           <div className="space-y-6">
//             <SettingSection title="Profile Visibility">
//               <SettingItem 
//                 label="Profile Photo Visibility" 
//                 description="Who can see your profile photo"
//                 value="All members"
//               />
//               <SettingItem 
//                 label="Profile Discoverability" 
//                 description="Make your profile discoverable"
//               />
//               <SettingItem 
//                 label="Activity Status" 
//                 description="Show when you're online"
//               />
//             </SettingSection>

//             <SettingSection title="Data & Privacy">
//               <SettingItem 
//                 label="Download Your Data" 
//                 description="Get a copy of your LinkedIn data"
//               />
//               <SettingItem 
//                 label="Data Usage" 
//                 description="How LinkedIn uses your data"
//               />
//             </SettingSection>
//           </div>
//         );

//       case 'appearance':
//         return (
//           <div className="space-y-6">
//             <SettingSection title="Display Settings">
//               <SettingItem 
//                 label="Dark Mode" 
//                 description="Switch to dark theme"
//                 hasToggle={true}
//                 toggleState={darkMode}
//                 onToggle={() => setDarkMode(!darkMode)}
//               />
//               <SettingItem 
//                 label="Font Size" 
//                 description="Adjust text size for better readability"
//                 value="Medium"
//               />
//               <SettingItem 
//                 label="Compact Mode" 
//                 description="Show more content in less space"
//               />
//             </SettingSection>
//           </div>
//         );

//       case 'billing':
//         return (
//           <div className="space-y-6">
//             <SettingSection title="Subscription">
//               <SettingItem 
//                 label="Current Plan" 
//                 description="LinkedIn Free"
//                 value="Active"
//               />
//               <SettingItem 
//                 label="Upgrade Account" 
//                 description="Get premium features"
//               />
//             </SettingSection>

//             <SettingSection title="Payment & Billing">
//               <SettingItem 
//                 label="Payment Methods" 
//                 description="Manage your payment options"
//               />
//               <SettingItem 
//                 label="Purchase History" 
//                 description="View your transaction history"
//               />
//               <SettingItem 
//                 label="Billing Information" 
//                 description="Update billing address and details"
//               />
//             </SettingSection>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f6ede8] to-[#e0d8cf]">
//       {/* Header */}
//       <div className="bg-white/70 backdrop-blur-sm border-b border-[#e0d8cf] sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-2xl font-bold text-[#4a3728]">Settings</h1>
//               <p className="text-[#4a3728]/60 text-sm">Manage your account and preferences</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="flex items-center space-x-2 px-4 py-2 bg-[#f6ede8] text-[#4a3728] rounded-lg hover:bg-[#e0d8cf] transition-colors">
//                 <HelpCircle className="w-4 h-4" />
//                 <span>Help</span>
//               </button>
//               <button className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
//                 <LogOut className="w-4 h-4" />
//                 <span>Sign Out</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Sidebar Navigation */}
//           <div className="lg:col-span-1">
//             <div className="bg-white/50 backdrop-blur-sm rounded-xl p-4 sticky top-24 border border-[#e0d8cf]">
//               <nav className="space-y-2">
//                 {tabs.map((tab) => (
//                   <TabButton
//                     key={tab.id}
//                     id={tab.id}
//                     label={tab.label}
//                     icon={tab.icon}
//                     isActive={activeTab === tab.id}
//                     onClick={setActiveTab}
//                   />
//                 ))}
//               </nav>

//               {/* Danger Zone */}
//               <div className="mt-8 pt-6 border-t border-[#e0d8cf]">
//                 <h4 className="text-sm font-medium text-[#4a3728] mb-3">Account Actions</h4>
//                 <div className="space-y-2">
//                   <button className="w-full text-left p-3 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors text-sm">
//                     Hibernate Account
//                   </button>
//                   <button className="w-full text-left p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors text-sm">
//                     Delete Account
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Content Area */}
//           <div className="lg:col-span-3">
//             <div className="min-h-[600px]">
//               {renderContent()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsPage;





//======================================================================================================================================================

// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';

// const ProfileAndActivityVisibility = () => {
//   const [activeTab, setActiveTab] = useState('profile');
//   const [expandedItems, setExpandedItems] = useState({});

//   // Data for the Profile & Network Visibility settings
//   const profileVisibilityData = [
//     { 
//       id: 'profile-viewing',
//       label: 'Profile viewing options', 
//       value: 'Your name and headline',
//       description: 'Control how your profile appears to others when you view their profiles'
//     },
//     { 
//       id: 'page-visit',
//       label: 'Page visit visibility', 
//       value: 'On',
//       description: 'Let others see when you visit their profiles and pages'
//     },
//     { 
//       id: 'public-profile',
//       label: 'Edit your public profile', 
//       value: 'Customize',
//       description: 'Manage what information appears on your public LinkedIn profile'
//     },
//     { 
//       id: 'email-visibility',
//       label: 'Who can see or download your email address', 
//       value: 'Connections only',
//       description: 'Control who has access to view or download your email address'
//     },
//     { 
//       id: 'connections-visibility',
//       label: 'Who can see your connections', 
//       value: 'On',
//       description: 'Show your professional network and connections to other users'
//     },
//     { 
//       id: 'following-visibility',
//       label: 'Who can see members you follow', 
//       value: 'Anyone on LinkedIn',
//       description: 'Control visibility of the people and companies you follow'
//     },
//     { 
//       id: 'lastname-visibility',
//       label: 'Who can see your last name', 
//       value: 'Everyone',
//       description: 'Manage who can see your full name on your profile'
//     },
//     { 
//       id: 'organization-rep',
//       label: 'Representing your organizations and interests', 
//       value: 'On',
//       description: 'Show your organizational affiliations and professional interests'
//     },
//   ];

//   // Data for the LinkedIn Activity Visibility settings
//   const activityData = [
//     { 
//       id: 'active-status',
//       label: 'Manage active status', 
//       value: 'Your connections only',
//       description: 'Control who can see when you are actively using LinkedIn'
//     },
//     { 
//       id: 'profile-changes',
//       label: 'Share job changes, education changes, and work anniversaries from profile', 
//       value: 'On',
//       description: 'Automatically notify your network when you update your profile with new roles or achievements'
//     },
//     { 
//       id: 'news-mentions',
//       label: 'Notify connections when you are in the news', 
//       value: 'On',
//       description: 'Share news articles and mentions that feature you with your professional network'
//     },
//     { 
//       id: 'mentioned-by-others',
//       label: 'Mentioned by others', 
//       value: 'On',
//       description: 'Allow other LinkedIn members to mention and tag you in their posts and updates'
//     },
//     { 
//       id: 'followers',
//       label: 'Followers', 
//       value: 'Public',
//       description: 'Manage who can follow your LinkedIn activity and updates'
//     },
//   ];

//   const toggleExpand = (id) => {
//     setExpandedItems(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   const currentData = activeTab === 'profile' ? profileVisibilityData : activityData;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f6ede8] via-[#e0d8cf] to-[#f6ede8] p-6">
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-10">
//           <h1 className="text-5xl font-bold text-[#4a3728] mb-4">Privacy & Visibility Settings</h1>
//           <p className="text-[#4a3728]/80 text-xl max-w-2xl mx-auto leading-relaxed">
//             Take control of your LinkedIn presence and manage how you appear to your professional network
//           </p>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-2 shadow-xl border border-[#4a3728]/15">
//             <button
//               onClick={() => setActiveTab('profile')}
//               className={`px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
//                 activeTab === 'profile'
//                   ? 'bg-[#4a3728] text-white shadow-lg transform scale-105'
//                   : 'text-[#4a3728] hover:bg-white/70 hover:text-[#4a3728]'
//               }`}
//             >
//               Profile & Network
//             </button>
//             <button
//               onClick={() => setActiveTab('activity')}
//               className={`px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
//                 activeTab === 'activity'
//                   ? 'bg-[#4a3728] text-white shadow-lg transform scale-105'
//                   : 'text-[#4a3728] hover:bg-white/70 hover:text-[#4a3728]'
//               }`}
//             >
//               Activity Visibility
//             </button>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="space-y-6">
//           {currentData.map((item) => (
//             <div
//               key={item.id}
//               className="group relative overflow-hidden"
//             >
//               <div 
//                 className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-[#4a3728]/15 hover:shadow-2xl hover:bg-white/90 transition-all duration-500 cursor-pointer"
//                 onClick={() => toggleExpand(item.id)}
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex-1">
//                     {/* Title and Current Setting */}
//                     <div className="flex items-center space-x-4 mb-3">
//                       <h3 className="font-bold text-[#4a3728] text-xl leading-tight flex-1">
//                         {item.label}
//                       </h3>
//                       <div className="flex items-center space-x-3">
//                         {/* Status Indicator */}
//                         <div className={`w-4 h-4 rounded-full ${
//                           item.value === 'On' || item.value === 'Everyone' || item.value === 'Anyone on LinkedIn' || item.value === 'Public'
//                             ? 'bg-green-500 shadow-lg shadow-green-500/30' 
//                             : item.value === 'Off' 
//                             ? 'bg-red-500 shadow-lg shadow-red-500/30' 
//                             : 'bg-blue-500 shadow-lg shadow-blue-500/30'
//                         }`}></div>

//                         {/* Current Value */}
//                         <span className="bg-[#4a3728]/15 text-[#4a3728] px-4 py-2 rounded-xl text-sm font-semibold min-w-fit">
//                           {item.value || 'Not set'}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Expandable Description */}
//                     <div className={`overflow-hidden transition-all duration-500 ${
//                       expandedItems[item.id] ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
//                     }`}>
//                       <div className="pt-4 border-t border-[#4a3728]/20">
//                         <p className="text-[#4a3728]/80 text-base leading-relaxed mb-4">
//                           {item.description}
//                         </p>
//                         <div className="flex space-x-3">
//                           <button className="bg-[#4a3728] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#4a3728]/90 transition-colors">
//                             Edit Setting
//                           </button>
//                           <button className="bg-white/80 text-[#4a3728] px-6 py-2 rounded-lg text-sm font-medium border border-[#4a3728]/30 hover:bg-white transition-colors">
//                             Learn More
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Expand/Collapse Arrow */}
//                   <div className="ml-6">
//                     <svg
//                       className={`w-6 h-6 text-[#4a3728]/60 transition-transform duration-300 ${
//                         expandedItems[item.id] ? 'rotate-180' : ''
//                       }`}
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </div>
//                 </div>

//                 {/* Hover Effect Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#4a3728]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Summary Stats */}
//         <div className="mt-16 text-center">
//           <div className="inline-flex items-center space-x-8 bg-white/70 backdrop-blur-lg rounded-2xl px-12 py-6 shadow-xl border border-[#4a3728]/15">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-[#4a3728] mb-1">
//                 {currentData.filter(item => item.value === 'On' || item.value === 'Everyone' || item.value === 'Anyone on LinkedIn' || item.value === 'Public').length}
//               </div>
//               <div className="text-sm text-[#4a3728]/70 font-medium">Active Settings</div>
//             </div>
//             <div className="w-px h-12 bg-[#4a3728]/30"></div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-[#4a3728] mb-1">
//                 {currentData.filter(item => item.value === 'Off').length}
//               </div>
//               <div className="text-sm text-[#4a3728]/70 font-medium">Disabled Settings</div>
//             </div>
//             <div className="w-px h-12 bg-[#4a3728]/30"></div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-[#4a3728] mb-1">{currentData.length}</div>
//               <div className="text-sm text-[#4a3728]/70 font-medium">Total Settings</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default ProfileAndActivityVisibility;


// import  { useState } from 'react';

// const ProfileAndActivityVisibility = () => {
//   const [activeTab, setActiveTab] = useState('profile');
//   const [expandedItems, setExpandedItems] = useState({});
//   // eslint-disable-next-line no-unused-vars
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showNotification, setShowNotification] = useState(false);

//   // Data for the Profile & Network Visibility settings
//   const profileVisibilityData = [
//     { 
//       id: 'profile-viewing',
//       label: 'Profile viewing options', 
//       value: 'Your name and headline',
//       description: 'Control how your profile appears to others when you view their profiles',
//       category: 'visibility',
//       icon: '👁️'
//     },
//     { 
//       id: 'page-visit',
//       label: 'Page visit visibility', 
//       value: 'On',
//       description: 'Let others see when you visit their profiles and pages',
//       category: 'tracking',
//       icon: '🔍'
//     },
//     { 
//       id: 'public-profile',
//       label: 'Edit your public profile', 
//       value: 'Customize',
//       description: 'Manage what information appears on your public LinkedIn profile',
//       category: 'profile',
//       icon: '🌐'
//     },
//     { 
//       id: 'email-visibility',
//       label: 'Who can see or download your email address', 
//       value: 'Connections only',
//       description: 'Control who has access to view or download your email address',
//       category: 'contact',
//       icon: '📧'
//     },
//     { 
//       id: 'connections-visibility',
//       label: 'Who can see your connections', 
//       value: 'On',
//       description: 'Show your professional network and connections to other users',
//       category: 'network',
//       icon: '🤝'
//     },
//     { 
//       id: 'following-visibility',
//       label: 'Who can see members you follow', 
//       value: 'Anyone on LinkedIn',
//       description: 'Control visibility of the people and companies you follow',
//       category: 'social',
//       icon: '👥'
//     },
//     { 
//       id: 'lastname-visibility',
//       label: 'Who can see your last name', 
//       value: 'Everyone',
//       description: 'Manage who can see your full name on your profile',
//       category: 'identity',
//       icon: '🏷️'
//     },
//     { 
//       id: 'organization-rep',
//       label: 'Representing your organizations and interests', 
//       value: 'On',
//       description: 'Show your organizational affiliations and professional interests',
//       category: 'professional',
//       icon: '🏢'
//     },
//   ];

//   // Data for the LinkedIn Activity Visibility settings
//   const activityData = [
//     { 
//       id: 'active-status',
//       label: 'Manage active status', 
//       value: 'Your connections only',
//       description: 'Control who can see when you are actively using LinkedIn',
//       category: 'status',
//       icon: '🟢'
//     },
//     { 
//       id: 'profile-changes',
//       label: 'Share job changes, education changes, and work anniversaries from profile', 
//       value: 'On',
//       description: 'Automatically notify your network when you update your profile with new roles or achievements',
//       category: 'updates',
//       icon: '📢'
//     },
//     { 
//       id: 'news-mentions',
//       label: 'Notify connections when you are in the news', 
//       value: 'On',
//       description: 'Share news articles and mentions that feature you with your professional network',
//       category: 'news',
//       icon: '📰'
//     },
//     { 
//       id: 'mentioned-by-others',
//       label: 'Mentioned by others', 
//       value: 'On',
//       description: 'Allow other LinkedIn members to mention and tag you in their posts and updates',
//       category: 'social',
//       icon: '@'
//     },
//     { 
//       id: 'followers',
//       label: 'Followers', 
//       value: 'Public',
//       description: 'Manage who can follow your LinkedIn activity and updates',
//       category: 'following',
//       icon: '👁️‍🗨️'
//     },
//   ];

//   const toggleExpand = (id) => {
//     setExpandedItems(prev => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   // eslint-disable-next-line no-unused-vars
//   const handleSettingChange = (id) => {
//     setShowNotification(true);
//     setTimeout(() => setShowNotification(false), 3000);
//   };

//   const currentData = activeTab === 'profile' ? profileVisibilityData : activityData;

//   const filteredData = currentData.filter(item => 
//     item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
//     item.description.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const getStatusColor = (value) => {
//     if (value === 'On' || value === 'Everyone' || value === 'Anyone on LinkedIn' || value === 'Public') {
//       return { bg: 'bg-emerald-500', shadow: 'shadow-emerald-500/30', text: 'text-emerald-700' };
//     }
//     if (value === 'Off') {
//       return { bg: 'bg-red-500', shadow: 'shadow-red-500/30', text: 'text-red-700' };
//     }
//     return { bg: 'bg-amber-500', shadow: 'shadow-amber-500/30', text: 'text-amber-700' };
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f6ede8] via-[#e0d8cf] to-[#f6ede8] p-6">
//       {/* Notification Toast */}
//       {showNotification && (
//         <div className="fixed top-6 right-6 z-50 animate-[slideInRight_0.3s_ease-out] bg-[#4a3728] text-white px-6 py-4 rounded-xl shadow-2xl border border-[#4a3728]/20">
//           <div className="flex items-center space-x-3">
//             <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
//               <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//               </svg>
//             </div>
//             <span className="font-medium">Setting updated successfully!</span>
//           </div>
//         </div>
//       )}

//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-[#4a3728]/10 rounded-3xl mb-6">
//             <svg className="w-10 h-10 text-[#4a3728]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
//             </svg>
//           </div>
//           <h1 className="text-6xl font-bold text-[#4a3728] mb-4 tracking-tight">Privacy & Visibility</h1>
//           <p className="text-[#4a3728]/80 text-xl max-w-3xl mx-auto leading-relaxed">
//             Take complete control of your LinkedIn presence and manage how you appear to your professional network
//           </p>
//         </div>


//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-3 shadow-2xl border border-[#4a3728]/20">
//             <button 
//               onClick={() => setActiveTab('profile')}
//               className={`px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-500 relative overflow-hidden ${
//                 activeTab === 'profile' 
//                   ? 'bg-[#4a3728] text-white shadow-2xl transform scale-105' 
//                   : 'text-[#4a3728] hover:bg-white/80 hover:scale-102'
//               }`}

//             >
//               <span className="relative z-10 flex items-center space-x-3">
//                 <span>👤</span>
//                 <span>Profile & Network</span>
//               </span>
//               {activeTab === 'profile' && (
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#4a3728] to-[#5d4a3a] animate-pulse"></div>
//               )}
//             </button>
//             <button 
//               onClick={() => setActiveTab('activity')}
//               className={`px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-500 relative overflow-hidden ${
//                 activeTab === 'activity' 
//                   ? 'bg-[#4a3728] text-white shadow-2xl transform scale-105' 
//                   : 'text-[#4a3728] hover:bg-white/80 hover:scale-102'
//               }`}
//             >
//               <span className="relative z-10 flex items-center space-x-3">
//                 <span>📊</span>
//                 <span>Activity Visibility</span>
//               </span>
//               {activeTab === 'activity' && (
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#4a3728] to-[#5d4a3a] animate-pulse"></div>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="grid gap-6">
//           {filteredData.map((item, index) => {
//             const statusColor = getStatusColor(item.value);
//             return (
//               <div 
//                 key={item.id}
//                 className="group relative overflow-hidden animate-[fadeInUp_0.5s_ease-out] opacity-0"
//                 style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
//               >
//                 <div 
//                   className="bg-white/85 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-[#4a3728]/20 hover:shadow-xl hover:bg-white/95 hover:scale-[1.01] transition-all duration-300 ease-in-out cursor-pointer group-hover:border-[#4a3728]/30 w-[95%] mx-auto"
//                   onClick={() => toggleExpand(item.id)}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex-1">
//                       {/* Title and Current Setting */}
//                       <div className="flex items-center justify-between mb-4">
//                         <div className="flex items-center space-x-4">
//                           <div className="w-10 h-10 bg-[#4a3728]/10 rounded-2xl flex items-center justify-center text-lg group-hover:bg-[#4a3728]/20 transition-colors">
//                             {item.icon}
//                           </div>
//                           <h3 className="font-bold text-[#4a3728] text-lg leading-tight">
//                             {item.label}
//                           </h3>
//                         </div>
//                         <div className="flex items-center space-x-4">
//                           {/* Status Indicator */}
//                           <div className={`w-4 h-4 rounded-full ${statusColor.bg} ${statusColor.shadow} shadow-md animate-pulse`}></div>

//                           {/* Current Value */}
//                           <span className={`bg-[#4a3728]/15 text-[#4a3728] px-4 py-2 rounded-2xl text-xs font-bold min-w-fit border border-[#4a3728]/10 group-hover:bg-[#4a3728]/20 transition-colors`}>
//                             {item.value || 'Not set'}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Quick Preview */}
//                       <p className="text-[#4a3728]/70 text-sm mb-4 line-clamp-1">
//                         {item.description}
//                       </p>

//                       {/* Expandable Description */}
//                       <div className={`overflow-hidden transition-all duration-700 ease-in-out ${
//                         expandedItems[item.id] ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
//                       }`}>
//                         <div className="pt-6 border-t border-[#4a3728]/20">
//                           <p className="text-[#4a3728]/80 text-base leading-relaxed mb-6">
//                             {item.description}
//                           </p>
//                           <div className="flex flex-wrap gap-3">
//                             <button 
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 handleSettingChange(item.id);
//                               }}
//                               className="bg-[#4a3728] text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-[#4a3728]/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
//                             >
//                               Edit Setting
//                             </button>
//                             <button className="bg-white/90 text-[#4a3728] px-6 py-2 rounded-xl text-sm font-bold border-2 border-[#4a3728]/20 hover:bg-white hover:border-[#4a3728]/40 hover:scale-105 transition-all duration-300">
//                               Learn More
//                             </button>
//                             <button className="bg-[#4a3728]/10 text-[#4a3728] px-6 py-2 rounded-xl text-sm font-bold hover:bg-[#4a3728]/20 hover:scale-105 transition-all duration-300">
//                               Reset to Default
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Expand/Collapse Arrow */}
//                     <div className="ml-6 flex flex-col items-center space-y-2">
//                       <svg 
//                         className={`w-6 h-6 text-[#4a3728]/70 transition-all duration-300 group-hover:text-[#4a3728] ${
//                           expandedItems[item.id] ? 'rotate-180 scale-105' : 'group-hover:scale-105'
//                         }`} 
//                         fill="none" 
//                         stroke="currentColor" 
//                         viewBox="0 0 24 24"
//                       >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
//                       </svg>
//                       <div className="text-xs text-[#4a3728]/50 font-medium">
//                         {expandedItems[item.id] ? 'Less' : 'More'}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Hover Effect Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-[#4a3728]/5 via-transparent to-[#4a3728]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl pointer-events-none"></div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Enhanced Summary Stats */}
//         <div className="mt-20 text-center">
//           <div className="inline-flex items-center space-x-12 bg-white/80 backdrop-blur-xl rounded-3xl px-16 py-8 shadow-2xl border border-[#4a3728]/20">
//             <div className="text-center group hover:scale-110 transition-transform duration-300">
//               <div className="text-4xl font-black text-[#4a3728] mb-2 group-hover:text-[#5d4a3a] transition-colors">
//                 {currentData.filter(item => item.value === 'On' || item.value === 'Everyone' || item.value === 'Anyone on LinkedIn' || item.value === 'Public').length}
//               </div>
//               <div className="text-sm text-[#4a3728]/80 font-bold uppercase tracking-wider">Active Settings</div>
//               <div className="w-8 h-1 bg-emerald-500 rounded-full mx-auto mt-2"></div>
//             </div>
//             <div className="w-px h-16 bg-[#4a3728]/30"></div>
//             <div className="text-center group hover:scale-110 transition-transform duration-300">
//               <div className="text-4xl font-black text-[#4a3728] mb-2 group-hover:text-[#5d4a3a] transition-colors">
//                 {currentData.filter(item => item.value === 'Off').length}
//               </div>
//               <div className="text-sm text-[#4a3728]/80 font-bold uppercase tracking-wider">Disabled Settings</div>
//               <div className="w-8 h-1 bg-red-500 rounded-full mx-auto mt-2"></div>
//             </div>
//             <div className="w-px h-16 bg-[#4a3728]/30"></div>
//             <div className="text-center group hover:scale-110 transition-transform duration-300">
//               <div className="text-4xl font-black text-[#4a3728] mb-2 group-hover:text-[#5d4a3a] transition-colors">
//                 {currentData.length}
//               </div>
//               <div className="text-sm text-[#4a3728]/80 font-bold uppercase tracking-wider">Total Settings</div>
//               <div className="w-8 h-1 bg-amber-500 rounded-full mx-auto mt-2"></div>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-16 text-center text-[#4a3728]/60 text-sm">
//           <p>Last updated: {new Date().toLocaleDateString()} • Privacy settings are saved automatically</p>
//         </div>
//       </div>

//       <style>{`
//         @keyframes slideInRight {
//           from {
//             transform: translateX(100%);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             transform: translateY(30px);
//             opacity: 0;
//           }
//           to {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         .line-clamp-1 {
//           display: -webkit-box;
//           -webkit-line-clamp: 1;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProfileAndActivityVisibility;





// eslint-disable-next-line no-unused-vars
// import React from 'react';
// import { FaUserCircle, FaSignOutAlt, FaCog, FaGlobe, FaBuilding, FaBriefcase } from 'react-icons/fa';

// const ProfileCard = () => {
//   return (
//     <div className="w-full max-w-sm mx-auto bg-[#f6ede8] rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl p-6">
//       {/* Profile Header */}
//       <div className="bg-[#e0d8cf] rounded-xl p-6">
//         <div className="flex items-center space-x-5">
//           <div className="relative flex-shrink-0">
//             <div className="w-16 h-16 flex items-center justify-center bg-[#f6ede8] rounded-lg overflow-hidden">
//               <FaUserCircle className="text-6xl text-[#4a3728]" />
//             </div>
//             <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#4a3728] rounded-full border-2 border-[#f6ede8]" />
//           </div>
//           <div className="flex-1">
//             <h1 className="text-2xl font-bold text-[#4a3728]">Honey Sharma</h1>
//             <p className="text-sm font-medium text-[#4a3728] opacity-90">Co-Founder @Throne8</p>
//             <p className="text-xs text-[#4a3728] mt-2 leading-relaxed">
//               Empowering Professional Networking for Millions with AI, Security, and Scalable Innovation
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="p-6 space-y-3">
//         <div className="grid grid-cols-2 gap-3">
//           {[
//             { icon: FaCog, text: 'Settings & Privacy' },
//             { icon: FaGlobe, text: 'Language' },
//             { icon: FaBuilding, text: 'Company: CodeRoom' },
//             { icon: FaBriefcase, text: 'Job Posting Account' },
//           ].map((item, index) => (
//             <button
//               key={index}
//               className="flex items-center space-x-3 p-3 bg-[#e0d8cf] rounded-lg hover:bg-[#d9ccc2] transition-all duration-200 text-[#4a3728] text-sm font-medium"
//             >
//               <item.icon className="text-lg" />
//               <span>{item.text}</span>
//             </button>
//           ))}
//         </div>

//         {/* Sign Out Button */}
//         <button className="w-full flex items-center justify-between p-3 bg-[#e0d8cf] rounded-lg border border-dashed border-[#4a3728] hover:bg-[#d9ccc2] transition-all duration-200 text-[#4a3728] text-sm font-medium">
//           <div className="flex items-center space-x-3">
//             <FaSignOutAlt className="text-lg" />
//             <span>Sign Out</span>
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };
// export default ProfileCard;

//==================================================================================================================

// eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';

// const SocialPlatformPage = () => {
//   const [activeFilter, setActiveFilter] = useState('People');

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50" style={{backgroundColor: '#f6ede8'}}>
//       {/* Filter Navigation */}
//       <div className="max-w-7xl mx-auto px-6 py-6">
//         <div className="rounded-2xl p-6 shadow-lg border-2 mb-8" style={{backgroundColor: '#f6ede8', borderColor: '#e0d8cf'}}>
//           <div className="flex flex-wrap gap-3 items-center justify-center">
//             {['People', 'Posts', 'Companies', 'Groups', 'Jobs', 'Products', 'Services', 'Events', 'Courses', 'Schools'].map((filter) => (
//               <button
//                 key={filter}
//                 className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${
//                   activeFilter === filter ? 'text-white shadow-lg' : 'border-2'
//                 }`}
//                 style={activeFilter === filter ? 
//                   {backgroundColor: '#4a3728'} : 
//                   {color: '#4a3728', borderColor: '#e0d8cf', backgroundColor: '#e0d8cf'}
//                 }
//                 onClick={() => setActiveFilter(filter)}
//               >
//                 {filter}
//               </button>
//             ))}
//             <button
//               className="px-6 py-3 rounded-full font-bold border-2 transition-all duration-300 hover:scale-105 hover:shadow-md"
//               style={{color: '#4a3728', borderColor: '#4a3728', backgroundColor: 'transparent'}}
//               onClick={() => console.log('Clicked on All filters')}
//             >
//               All filters
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

//           {/* Left Sidebar */}
//           <div className="lg:col-span-3">
//             <div className="sticky top-24 space-y-6">
//               {/* Company Profile Card */}
//               <div className="rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl" style={{backgroundColor: '#f6ede8', borderColor: '#e0d8cf'}}>
//                 <div className="text-center">
//                   <img 
//                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" 
//                     alt="Google Logo" 
//                     className="w-20 h-20 mx-auto rounded-2xl object-contain mb-4 shadow-lg bg-white p-2"
//                   />
//                   <h2 className="text-xl font-bold mb-2" style={{color: '#4a3728'}}>Google Software</h2>
//                   <p className="text-sm mb-1" style={{color: '#4a3728', opacity: 0.8}}>Mountain View, CA</p>
//                   <p className="text-sm mb-4" style={{color: '#4a3728', opacity: 0.8}}>377M followers</p>
//                   <div className="flex space-x-2">
//                     <button className="flex-1 py-2 px-4 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 shadow-md" style={{backgroundColor: '#4a3728'}}>
//                       Follow
//                     </button>
//                     <button className="flex-1 py-2 px-4 rounded-lg font-medium border-2 transition-all duration-300 hover:scale-105" style={{color: '#4a3728', borderColor: '#e0d8cf', backgroundColor: '#e0d8cf'}}>
//                       Message
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick Navigation */}
//               <div className="rounded-2xl p-6 shadow-lg border-2" style={{backgroundColor: '#f6ede8', borderColor: '#e0d8cf'}}>
//                 <h3 className="text-lg font-bold mb-4" style={{color: '#4a3728'}}>Quick Access</h3>
//                 <div className="space-y-2">
//                   {['People', 'Companies', 'Jobs', 'Courses', 'Groups', 'Products'].map((item) => (
//                     <button
//                       key={item}
//                       className="w-full text-left p-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
//                       style={{backgroundColor: '#e0d8cf', color: '#4a3728'}}
//                     >
//                       {item}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content Area */}
//           <div className="lg:col-span-6 space-y-8">

//             {/* People Section */}
//             <div className="rounded-2xl p-6 shadow-lg border-2" style={{backgroundColor: '#f6ede8', borderColor: '#e0d8cf'}}>
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold" style={{color: '#4a3728'}}>Connect with People</h2>
//                 <div className="flex space-x-2">
//                   <button className="px-4 py-2 rounded-full text-sm font-medium text-white shadow-md" style={{backgroundColor: '#4a3728'}}>1st</button>
//                   <button className="px-4 py-2 rounded-full text-sm font-medium border-2" style={{color: '#4a3728', borderColor: '#e0d8cf', backgroundColor: '#e0d8cf'}}>2nd</button>
//                   <button className="px-4 py-2 rounded-full text-sm font-medium border-2" style={{color: '#4a3728', borderColor: '#e0d8cf', backgroundColor: '#e0d8cf'}}>3rd+</button>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <div className="p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105" style={{backgroundColor: '#e0d8cf', borderColor: '#f6ede8'}}>
//                   <div className="flex items-center space-x-4">
//                     <img 
//                       src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" 
//                       alt="Sourav Dang" 
//                       className="w-16 h-16 rounded-full object-cover shadow-md"
//                     />
//                     <div className="flex-1">
//                       <h3 className="font-bold text-lg" style={{color: '#4a3728'}}>Sourav Dang • 2nd</h3>
//                       <p className="text-sm mb-1" style={{color: '#4a3728', opacity: 0.8}}>Bhopal Engineering College [BE(CSE)] | Advanced Java | JDBC...</p>
//                       <p className="text-xs" style={{color: '#4a3728', opacity: 0.6}}>Utkarsh Gupta and 29 other mutual connections</p>
//                     </div>
//                     <button className="px-6 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 shadow-md" style={{backgroundColor: '#4a3728'}}>
//                       Connect
//                     </button>
//                   </div>
//                 </div>

//                 <div className="p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105" style={{backgroundColor: '#e0d8cf', borderColor: '#f6ede8'}}>
//                   <div className="flex items-center space-x-4">
//                     <img 
//                       src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
//                       alt="Anurag Singh" 
//                       className="w-16 h-16 rounded-full object-cover shadow-md"
//                     />
//                     <div className="flex-1">
//                       <h3 className="font-bold text-lg" style={{color: '#4a3728'}}>Anurag Singh • 2nd</h3>
//                       <p className="text-sm" style={{color: '#4a3728', opacity: 0.8}}>SWE-III @ Google | ex - Razorpay | SIH 19 WINNER |...</p>
//                     </div>
//                     <button className="px-6 py-2 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 shadow-md" style={{backgroundColor: '#4a3728'}}>
//                       Connect
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Jobs Section */}
//             <div className="rounded-2xl p-6 shadow-lg border-2" style={{backgroundColor: '#f6ede8', borderColor: '#e0d8cf'}}>
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold" style={{color: '#4a3728'}}>Featured Jobs</h2>
//                 <button className="text-sm font-medium underline" style={{color: '#4a3728'}}>View all</button>
//               </div>

//               <div className="flex flex-wrap gap-2 mb-6">
//                 <button className="px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-300 hover:scale-105" style={{color: '#4a3728', borderColor: '#e0d8cf', backgroundColor: '#e0d8cf'}}>
//                   Remote
//                 </button>
//                 <button className="px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-300 hover:scale-105" style={{color: '#4a3728', borderColor: '#e0d8cf', backgroundColor: '#e0d8cf'}}>
//                   Easy Apply
//                 </button>
//                 <button className="px-4 py-2 rounded-full text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105" style={{backgroundColor: '#4a3728'}}>
//                   Top Applicant
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 <div className="p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105" style={{backgroundColor: '#e0d8cf', borderColor: '#f6ede8'}}>
//                   <div className="flex items-start space-x-4">
//                     <img 
//                       src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop" 
//                       alt="Socio Labs" 
//                       className="w-12 h-12 rounded-lg object-cover shadow-md"
//                     />
//                     <div className="flex-1">
//                       <h3 className="font-bold text-lg" style={{color: '#4a3728'}}>Google Ads Intern</h3>
//                       <p className="text-sm mb-1" style={{color: '#4a3728', opacity: 0.8}}>Socio Labs • Delhi, India (On-site)</p>
//                       <p className="text-xs" style={{color: '#4a3728', opacity: 0.6}}>2 weeks ago • 10+ applicants</p>
//                     </div>
//                     <button className="px-4 py-2 rounded-lg font-medium border-2 transition-all duration-300 hover:scale-105" style={{color: '#4a3728', borderColor: '#4a3728'}}>
//                       Apply
//                     </button>
//                   </div>
//                 </div>

//                 <div className="p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105" style={{backgroundColor: '#e0d8cf', borderColor: '#f6ede8'}}>
//                   <div className="flex items-start space-x-4">
//                     <img 
//                       src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop" 
//                       alt="Enout" 
//                       className="w-12 h-12 rounded-lg object-cover shadow-md"
//                     />
//                     <div className="flex-1">
//                       <h3 className="font-bold text-lg" style={{color: '#4a3728'}}>Google Ads Specialist</h3>
//                       <p className="text-sm mb-1" style={{color: '#4a3728', opacity: 0.8}}>Enout • Gurgaon, Haryana, India (On-site)</p>
//                       <p className="text-xs" style={{color: '#4a3728', opacity: 0.6}}>1 week ago • 25+ applicants</p>
//                     </div>
//                     <button className="px-4 py-2 rounded-lg font-medium border-2 transition-all duration-300 hover:scale-105" style={{color: '#4a3728', borderColor: '#4a3728'}}>
//                       Apply
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Companies Section */}
//             <div className="rounded-2xl p-6 shadow-lg border-2" style={{backgroundColor: '#f6ede8', borderColor: '#e0d8cf'}}>
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold" style={{color: '#4a3728'}}>Related Companies</h2>
//                 <button className="text-sm font-medium underline" style={{color: '#4a3728'}}>Explore more</button>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div className="p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105" style={{backgroundColor: '#e0d8cf', borderColor: '#f6ede8'}}>
//                   <div className="flex items-center space-x-3 mb-3">
//                     <img 
//                       src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/256px-Google_Cloud_logo.svg.png" 
//                       alt="Google Cloud" 
//                       className="w-12 h-12 rounded-lg object-contain bg-white p-1 shadow-md"
//                     />
//                     <div>
//                       <h3 className="font-bold" style={{color: '#4a3728'}}>Google Cloud</h3>
//                       <p className="text-sm" style={{color: '#4a3728', opacity: 0.8}}>3M followers</p>
//                     </div>
//                   </div>
//                   <p className="text-sm mb-3" style={{color: '#4a3728', opacity: 0.8}}>
//                     Google Cloud accelerates every organization's ability to digitally transform...
//                   </p>
//                   <button className="w-full py-2 rounded-lg font-medium border-2 transition-all duration-300 hover:scale-105" style={{color: '#4a3728', borderColor: '#4a3728'}}>
//                     Follow
//                   </button>
//                 </div>

//                 <div className="p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-105" style={{backgroundColor: '#e0d8cf', borderColor: '#f6ede8'}}>
//                   <div className="flex items-center space-x-3 mb-3">
//                     <img 
//                       src="https://developers.google.com/static/site-assets/logo-google-developers.svg" 
//                       alt="Google for Developers" 
//                       className="w-12 h-12 rounded-lg object-contain bg-white p-1 shadow-md"
//                     />
//                     <div>
//                       <h3 className="font-bold" style={{color: '#4a3728'}}>Google for Developers</h3>
//                       <p className="text-sm" style={{color: '#4a3728', opacity: 0.8}}>2M followers</p>
//                     </div>
//                   </div>
//                   <p className="text-sm mb-3" style={{color: '#4a3728', opacity: 0.8}}>
//                     Join a community of creative developers and learn the latest technology...
//                   </p>
//                   <button className="w-full py-2 rounded-lg font-medium text-white transition-all duration-300 hover:scale-105 shadow-md" style={{backgroundColor: '#4a3728'}}>
//                     Following
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Sidebar */}
//           <div className="lg:col-span-3">
//             <div className="sticky top-24 space-y-6">

//               {/* Courses Section */}
//               <div className="rounded-2xl p-6 shadow-lg border-2" style={{backgroundColor: '#f6ede8', borderColor: '#e0d8cf'}}>
//                 <h3 className="text-lg font-bold mb-4" style={{color: '#4a3728'}}>Recommended Courses</h3>
//                 <div className="space-y-4">
//                   <div className="p-3 rounded-lg border-2 transition-all duration-300 hover:shadow-md hover:scale-105" style={{backgroundColor: '#e0d8cf', borderColor: '#f6ede8'}}>
//                     <div className="flex items-start space-x-3">
//                       <img 
//                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Google_Sheets_2020_Logo.svg/64px-Google_Sheets_2020_Logo.svg.png" 
//                         alt="Google Sheets" 
//                         className="w-10 h-8 rounded object-contain bg-white p-1"
//                       />
//                       <div className="flex-1">
//                         <h4 className="font-semibold text-sm" style={{color: '#4a3728'}}>Intro to Google Sheets</h4>
//                         <p className="text-xs" style={{color: '#4a3728', opacity: 0.8}}>46m • Google Cloud</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="p-3 rounded-lg border-2 transition-all duration-300 hover:shadow-md hover:scale-105" style={{backgroundColor: '#e0d8cf', borderColor: '#f6ede8'}}>
//                     <div className="flex items-start space-x-3">
//                       <img 
//                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/64px-Google_Ads_logo.svg.png" 
//                         alt="Google Ads" 
//                         className="w-10 h-8 rounded object-contain bg-white p-1"
//                       />
//                       <div className="flex-1">
//                         <h4 className="font-semibold text-sm" style={{color: '#4a3728'}}>Google Ads Training</h4>
//                         <p className="text-xs" style={{color: '#4a3728', opacity: 0.8}}>2h 24m • Expert Level</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <button className="w-full mt-4 py-2 rounded-lg font-medium border-2 transition-all duration-300 hover:scale-105" style={{color: '#4a3728', borderColor: '#4a3728'}}>
//                   View All Courses
//                 </button>
//               </div>

//               {/* Groups Section */}
//               <div className="rounded-2xl p-6 shadow-lg border-2" style={{backgroundColor: '#f6ede8', borderColor: '#e0d8cf'}}>
//                 <h3 className="text-lg font-bold mb-4" style={{color: '#4a3728'}}>Suggested Groups</h3>
//                 <div className="space-y-4">
//                   <div className="p-3 rounded-lg border-2 transition-all duration-300 hover:shadow-md hover:scale-105" style={{backgroundColor: '#e0d8cf', borderColor: '#f6ede8'}}>
//                     <div className="flex items-center space-x-3">
//                       <img 
//                         src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/GAnalytics.svg/64px-GAnalytics.svg.png" 
//                         alt="Google Analytics" 
//                         className="w-10 h-10 rounded-lg object-contain bg-white p-1"
//                       />
//                       <div className="flex-1">
//                         <h4 className="font-semibold text-sm" style={{color: '#4a3728'}}>Google Analytics 4</h4>
//                         <p className="text-xs" style={{color: '#4a3728', opacity: 0.8}}>276K members</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="p-3 rounded-lg border-2 transition-all duration-300 hover:shadow-md hover:scale-105" style={{backgroundColor: '#e0d8cf', borderColor: '#f6ede8'}}>
//                     <div className="flex items-center space-x-3">
//                       <img 
//                         src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=100&h=100&fit=crop" 
//                         alt="SEO Marketing" 
//                         className="w-10 h-10 rounded-lg object-cover"
//                       />
//                       <div className="flex-1">
//                         <h4 className="font-semibold text-sm" style={{color: '#4a3728'}}>SEO & Digital Marketing</h4>
//                         <p className="text-xs" style={{color: '#4a3728', opacity: 0.8}}>108K members</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <button className="w-full mt-4 py-2 rounded-lg font-medium border-2 transition-all duration-300 hover:scale-105" style={{color: '#4a3728', borderColor: '#4a3728'}}>
//                   Discover Groups
//                 </button>
//               </div>

//               {/* You May Also Like */}
//               <div className="rounded-2xl p-6 shadow-lg border-2" style={{backgroundColor: '#f6ede8', borderColor: '#e0d8cf'}}>
//                 <h3 className="text-lg font-bold mb-4" style={{color: '#4a3728'}}>You May Also Like</h3>
//                 <div className="space-y-3">
//                   <div className="flex items-center space-x-3 p-3 rounded-lg border-2 transition-all duration-300 hover:shadow-md hover:scale-105" style={{backgroundColor: '#e0d8cf', borderColor: '#f6ede8'}}>
//                     <img 
//                       src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/64px-Meta_Platforms_Inc._logo.svg.png" 
//                       alt="Meta" 
//                       className="w-8 h-8 rounded-full object-contain bg-white p-1"
//                     />
//                     <div className="flex-1">
//                       <h4 className="font-semibold text-sm" style={{color: '#4a3728'}}>Meta</h4>
//                       <p className="text-xs" style={{color: '#4a3728', opacity: 0.8}}>Tech Company</p>
//                     </div>
//                     <button className="px-3 py-1 rounded-full text-xs font-medium border" style={{color: '#4a3728', borderColor: '#4a3728'}}>
//                       Follow
//                     </button>
//                   </div>

//                   <div className="flex items-center space-x-3 p-3 rounded-lg border-2 transition-all duration-300 hover:shadow-md hover:scale-105" style={{backgroundColor: '#e0d8cf', borderColor: '#f6ede8'}}>
//                     <img 
//                       src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/64px-Netflix_2015_logo.svg.png" 
//                       alt="Netflix" 
//                       className="w-8 h-8 rounded-full object-contain bg-white p-1"
//                     />
//                     <div className="flex-1">
//                       <h4 className="font-semibold text-sm" style={{color: '#4a3728'}}>Netflix</h4>
//                       <p className="text-xs" style={{color: '#4a3728', opacity: 0.8}}>Entertainment</p>
//                     </div>
//                     <button className="px-3 py-1 rounded-full text-xs font-medium border" style={{color: '#4a3728', borderColor: '#4a3728'}}>
//                       Follow
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SocialPlatformPage;



//=================================================================================================

// AmazonCompanyHeader.jsx
// eslint-disable-next-line no-unused-vars
// import React, { useState, useCallback } from 'react';
// import {
//   Zap,
//   Globe,
//   Users,
//   ShoppingCart,
//   Package,
//   Heart,
//   MessageSquare,
//   Share2,
//   BookOpen,
//   Rocket,
//   Target,
//   Cloud,
//   Play,
//   Activity,
//   Award,
//   ArrowRight,
//   Sparkles,
//   TrendingUp,
//   Star,
// } from 'lucide-react';

// const AmazonCompanyHeader = () => {
//   const [activeSection, setActiveSection] = useState('overview');
//   const [hoveredCard, setHoveredCard] = useState(null);

//   const stats = [
//     { label: 'Global Reach', value: '200+', unit: 'Countries', icon: Globe },
//     { label: 'Employees', value: '1.5M', unit: 'Worldwide', icon: Users },
//     { label: 'Customers', value: '300M', unit: 'Active Users', icon: ShoppingCart },
//     { label: 'Products', value: '12M+', unit: 'Available', icon: Package },
//   ];

//   const services = [
//     { name: 'Prime', icon: Zap, color: '#FF9900', description: 'Fast delivery & entertainment' },
//     { name: 'AWS', icon: Cloud, color: '#232F3E', description: 'Cloud computing services' },
//     { name: 'Alexa', icon: Activity, color: '#00CAFF', description: 'AI voice assistant' },
//     { name: 'Prime Video', icon: Play, color: '#00A8E1', description: 'Streaming platform' },
//   ];

//   const navItems = [
//     { id: 'overview', label: 'Overview', icon: BookOpen },
//     { id: 'culture', label: 'Culture', icon: Heart },
//     { id: 'innovation', label: 'Innovation', icon: Rocket },
//     { id: 'careers', label: 'Careers', icon: Target },
//     { id: 'impact', label: 'Impact', icon: Award },
//   ];

//   const posts = [
//     {
//       type: 'announcement',
//       title: 'Amazon announces 100,000 new jobs',
//       content: 'We’re excited to create 100,000 new full-time jobs across our fulfillment and logistics network.',
//       author: 'Amazon News',
//       time: '2 hours ago',
//       engagement: { likes: 12453, comments: 892, shares: 2341 },
//     },
//     {
//       type: 'achievement',
//       title: 'Climate Pledge Progress',
//       content: 'Amazon has ordered over 100,000 electric delivery vehicles, the largest order ever of electric delivery vehicles.',
//       author: 'Sustainability Team',
//       time: '1 day ago',
//       image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64',
//       engagement: { likes: 8921, comments: 567, shares: 1892 },
//     },
//     {
//       type: 'innovation',
//       title: 'New AI Features in AWS',
//       content: 'Introducing Amazon Bedrock: Build and scale generative AI applications with foundation models.',
//       author: 'AWS Team',
//       time: '3 days ago',
//       engagement: { likes: 15672, comments: 1203, shares: 3456 },
//     },
//   ];

//   const employees = [
//     { name: 'Andy Jassy', role: 'CEO', avatar: 'https://randomuser.me/api/portraits/men/91.jpg' },
//     { name: 'Werner Vogels', role: 'CTO', avatar: 'https://randomuser.me/api/portraits/men/92.jpg' },
//     { name: 'Dave Clark', role: 'CEO Worldwide Consumer', avatar: 'https://randomuser.me/api/portraits/men/93.jpg' },
//   ];

//   const handleSectionChange = useCallback((sectionId) => {
//     setActiveSection(sectionId);
//   }, []);

//   const handleHover = useCallback((cardName) => {
//     setHoveredCard(cardName);
//   }, []);

//   return (
//     <div className="min-h-screen relative overflow-hidden bg-[#f6ede8] font-sans">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div
//           className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-5 blur-[40px] bg-[#4a3728]"
//           aria-hidden="true"
//         />
//         <div
//           className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 blur-[60px] bg-[#4a3728]"
//           aria-hidden="true"
//         />
//         <div
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[100px] bg-[#4a3728]"
//           aria-hidden="true"
//         />
//       </div>

//       {/* Floating Shapes */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
//         {[...Array(6)].map((_, i) => (
//           <div
//             key={`float-${i}`}
//             className="absolute animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${i * 0.5}s`,
//               animationDuration: `${10 + i * 2}s`,
//             }}
//           >
//             <div className="w-2 h-2 rounded-full opacity-20 bg-[#4a3728]" />
//           </div>
//         ))}
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
//         {/* Hero Section */}
//         <header className="mb-12">
//           <div className="flex items-center justify-between mb-8">
//             <div className="flex items-center space-x-2">
//               <Award className="w-5 h-5 text-[#4a3728]" aria-hidden="true" />
//               <span
//                 className="text-sm font-medium px-3 py-1 rounded-full bg-[#e0d8cf] text-[#4a3728]"
//                 aria-label="Fortune 500 Ranking"
//               >
//                 Fortune 500 #2
//               </span>
//             </div>
//             <div className="flex items-center space-x-6">
//               <button
//                 className="text-sm font-medium hover:opacity-70 transition-opacity text-[#4a3728]"
//                 aria-label="Share Profile"
//               >
//                 Share Profile
//               </button>
//               <button
//                 className="text-sm font-medium hover:opacity-70 transition-opacity text-[#4a3728]"
//                 aria-label="Save Profile"
//               >
//                 Save
//               </button>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
//             {/* Logo and Title Section */}
//             <div className="lg:col-span-8">
//               <div className="flex items-start space-x-6">
//                 <div className="relative group">
//                   <div
//                     className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"
//                     style={{
//                       background: `radial-gradient(circle at center, ${
//                         hoveredCard === 'logo' ? 'rgba(255, 153, 0, 0.2)' : 'rgba(74, 55, 40, 0.1)'
//                       }, transparent)`,
//                       transform: 'scale(1.2)',
//                     }}
//                     aria-hidden="true"
//                   />
//                   <div
//                     className="relative w-24 h-24 rounded-3xl flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110 hover:rotate-3 bg-[#4a3728] shadow-[0_20px_40px_rgba(74,55,40,0.3)]"
//                     onMouseEnter={() => handleHover('logo')}
//                     onMouseLeave={() => handleHover(null)}
//                     role="img"
//                     aria-label="Amazon Logo"
//                   >
//                     <span className="text-5xl font-bold text-white">a</span>
//                     <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
//                       <Sparkles className="w-4 h-4 text-white" aria-hidden="true" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex-1">
//                   <div className="flex items-center space-x-3 mb-2">
//                     <h1 className="text-4xl lg:text-5xl font-bold text-[#4a3728]">amazon</h1>
//                     <div
//                       className="px-3 py-1 rounded-full text-xs font-medium animate-pulse bg-[#4a3728] text-[#f6ede8]"
//                       aria-label="Hiring Status"
//                     >
//                       HIRING
//                     </div>
//                   </div>
//                   <p className="text-xl mb-4 text-[#4a3728] opacity-80">
//                     Earth’s most customer-centric company
//                   </p>

//                   <div className="flex flex-wrap gap-3">
//                     <button
//                       className="px-6 py-3 rounded-2xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 bg-gradient-to-br from-[#4a3728] to-[#5a4738] hover:scale-105"
//                       aria-label="Follow Amazon"
//                     >
//                       <Users className="w-4 h-4" aria-hidden="true" />
//                       <span>Follow</span>
//                     </button>
//                     <button
//                       className="px-6 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 border-2 border-[#4a3728] text-[#4a3728] bg-transparent hover:scale-105"
//                       aria-label="Visit Amazon Website"
//                     >
//                       <Globe className="w-4 h-4" aria-hidden="true" />
//                       <span>Visit amazon.com</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats */}
//             <div className="lg:col-span-4">
//               <div className="grid grid-cols-2 gap-3">
//                 {stats.slice(0, 2).map((stat, index) => {
//                   const Icon = stat.icon;
//                   return (
//                     <div
//                       key={`stat-${index}`}
//                       className="p-4 rounded-2xl text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105 bg-[#e0d8cf]"
//                       role="region"
//                       aria-label={`${stat.label} Statistic`}
//                     >
//                       <Icon className="w-6 h-6 mx-auto mb-2 text-[#4a3728]" aria-hidden="true" />
//                       <div className="text-2xl font-bold text-[#4a3728]">{stat.value}</div>
//                       <div className="text-xs text-[#4a3728] opacity-70">{stat.unit}</div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </header>

//         {/* Navigation Pills */}
//         <nav className="mb-8 overflow-x-auto" aria-label="Company Sections">
//           <div className="flex space-x-2 min-w-max">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               const isActive = activeSection === item.id;
//               return (
//                 <button
//                   key={item.id}
//                   onClick={() => handleSectionChange(item.id)}
//                   className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
//                     isActive ? 'shadow-lg transform scale-105' : 'hover:shadow-md hover:scale-105'
//                   }`}
//                   style={{
//                     backgroundColor: isActive ? '#4a3728' : '#e0d8cf',
//                     color: isActive ? '#f6ede8' : '#4a3728',
//                   }}
//                   aria-current={isActive ? 'page' : undefined}
//                   aria-label={`Navigate to ${item.label} section`}
//                 >
//                   <Icon className="w-4 h-4" aria-hidden="true" />
//                   <span>{item.label}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </nav>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content Area */}
//           <main className="lg:col-span-2 space-y-8">
//             {/* Services Showcase */}
//             <section className="rounded-3xl overflow-hidden shadow-2xl bg-white" aria-labelledby="services-heading">
//               <div className="p-8">
//                 <h2
//                   id="services-heading"
//                   className="text-2xl font-bold mb-6 flex items-center space-x-2 text-[#4a3728]"
//                 >
//                   <Zap className="w-6 h-6" aria-hidden="true" />
//                   <span>Our Services</span>
//                 </h2>
//                 <div className="grid grid-cols-2 gap-4">
//                   {services.map((service, index) => {
//                     const Icon = service.icon;
//                     return (
//                       <div
//                         key={`service-${index}`}
//                         className="p-6 rounded-2xl hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 group bg-[#f6ede8]"
//                         onMouseEnter={() => handleHover(service.name)}
//                         onMouseLeave={() => handleHover(null)}
//                         role="article"
//                         aria-label={`${service.name} Service`}
//                       >
//                         <div className="flex items-start space-x-4">
//                           <div
//                             className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
//                             style={{ backgroundColor: service.color }}
//                           >
//                             <Icon className="w-6 h-6 text-white" aria-hidden="true" />
//                           </div>
//                           <div className="flex-1">
//                             <h3 className="font-semibold mb-1 text-[#4a3728]">{service.name}</h3>
//                             <p className="text-sm text-[#4a3728] opacity-70">{service.description}</p>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </section>

//             {/* Recent Updates */}
//             <section className="space-y-6" aria-labelledby="updates-heading">
//               <h2 id="updates-heading" className="sr-only">Recent Updates</h2>
//               {posts.map((post, index) => (
//                 <article
//                   key={`post-${index}`}
//                   className="rounded-3xl overflow-hidden shadow-xl transition-all duration-75 hover:shadow-2xl bg-white"
//                 >
//                   <div className="p-6">
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center space-x-3">
//                         <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#e0d8cf]">
//                           {post.type === 'announcement' && (
//                             <MessageSquare className="w-5 h-5 text-[#4a3728]" aria-hidden="true" />
//                           )}
//                           {post.type === 'achievement' && (
//                             <Award className="w-5 h-5 text-[#4a3728]" aria-hidden="true" />
//                           )}
//                           {post.type === 'innovation' && (
//                             <Rocket className="w-5 h-5 text-[#4a3728]" aria-hidden="true" />
//                           )}
//                         </div>
//                         <div>
//                           <h3 className="font-semibold text-[#4a3728]">{post.author}</h3>
//                           <time
//                             className="text-sm text-[#4a3728] opacity-60"
//                             dateTime={post.time}
//                           >
//                             {post.time}
//                           </time>
//                         </div>
//                       </div>
//                       <button
//                         className="text-sm font-medium hover:text-blue-600 transition-colors text-[#4a3728]"
//                         aria-label={`Follow ${post.author}`}
//                       >
//                         Follow
//                       </button>
//                     </div>
//                     <h4 className="text-lg font-semibold mb-2 text-[#4a3728]">{post.title}</h4>
//                     <p className="mb-4 text-[#4a3728]">{post.content}</p>
//                     {post.image && (
//                       <img
//                         src={post.image}
//                         alt={post.title}
//                         className="w-full h-48 object-cover rounded-2xl mb-4"
//                         loading="lazy"
//                       />
//                     )}
//                     <div
//                       className="flex items-center justify-between pt-4 border-t border-[#e0d8cf]"
//                     >
//                       <div className="flex items-center space-x-6">
//                         <button
//                           className="flex items-center space-x-2 hover:opacity-70 transition-all"
//                           aria-label={`Like ${post.title}: ${post.engagement.likes.toLocaleString()} likes`}
//                         >
//                           <Heart className="w-5 h-5 text-[#4a3728]" aria-hidden="true" />
//                           <span className="text-sm text-[#4a3728]">
//                             {post.engagement.likes.toLocaleString()}
//                           </span>
//                         </button>
//                         <button
//                           className="flex items-center space-x-2 hover:opacity-70 transition-all"
//                           aria-label={`Comment on ${post.title}: ${post.engagement.comments.toLocaleString()} comments`}
//                         >
//                           <MessageSquare className="w-5 h-5 text-[#4a3728]" aria-hidden="true" />
//                           <span className="text-sm text-[#4a3728]">
//                             {post.engagement.comments.toLocaleString()}
//                           </span>
//                         </button>
//                         <button
//                           className="flex items-center space-x-2 hover:opacity-70 transition-all"
//                           aria-label={`Share ${post.title}: ${post.engagement.shares.toLocaleString()} shares`}
//                         >
//                           <Share2 className="w-5 h-5 text-[#4a3728]" aria-hidden="true" />
//                           <span className="text-sm text-[#4a3728]">
//                             {post.engagement.shares.toLocaleString()}
//                           </span>
//                         </button>
//                       </div>
//                       <ArrowRight
//                         className="w-5 h-5 text-[#4a3728] opacity-50"
//                         aria-hidden="true"
//                       />
//                     </div>
//                   </div>
//                 </article>
//               ))}
//             </section>
//           </main>

//           {/* Sidebar */}
//           <aside className="space-y-6">
//             {/* Company Stats */}
//             <section
//               className="rounded-3xl overflow-hidden shadow-xl bg-white"
//               aria-labelledby="metrics-heading"
//             >
//               <div className="p-6">
//                 <h3
//                   id="metrics-heading"
//                   className="text-lg font-bold mb-6 flex items-center space-x-2 text-[#4a3728]"
//                 >
//                   <TrendingUp className="w-5 h-5" aria-hidden="true" />
//                   <span>Company Metrics</span>
//                 </h3>
//                 <div className="space-y-4">
//                   {stats.map((stat, index) => {
//                     const Icon = stat.icon;
//                     return (
//                       <div
//                         key={`metric-${index}`}
//                         className="flex items-center justify-between p-4 rounded-xl hover:shadow-md transition-all duration-200 bg-[#f6ede8]"
//                         role="row"
//                       >
//                         <div className="flex items-center space-x-3">
//                           <Icon className="w-5 h-5 text-[#4a3728]" aria-hidden="true" />
//                           <span className="text-sm font-medium text-[#4a3728]">
//                             {stat.label}
//                           </span>
//                         </div>
//                         <div className="text-right">
//                           <div className="font-semibold text-[#4a3728]">{stat.value}</div>
//                           <div className="text-xs text-[#4a3728] opacity-60">{stat.unit}</div>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </section>

//             {/* Featured Employees */}
//             <section
//               className="rounded-3xl overflow-hidden shadow-xl sticky top-6 bg-white"
//               aria-labelledby="employees-heading"
//             >
//               <div className="p-6">
//                 <h3
//                   id="employees-heading"
//                   className="text-lg font-bold mb-6 flex items-center space-x-2 text-[#4a3728]"
//                 >
//                   <Star className="w-5 h-5" aria-hidden="true" />
//                   <span>Amazonians</span>
//                 </h3>
//                 <div className="space-y-3">
//                   {employees.map((person, index) => (
//                     <div
//                       key={`employee-${index}`}
//                       className="flex items-center space-x-3 p-3 rounded-xl hover:shadow-md transition-all duration-300 cursor-pointer bg-[#f6ede8]"
//                       role="article"
//                       aria-label={`Profile of ${person.name}`}
//                     >
//                       <img
//                         src={person.avatar}
//                         alt={`${person.name}'s avatar`}
//                         className="w-10 h-10 rounded-full object-cover"
//                         loading="lazy"
//                       />
//                       <div className="flex-1">
//                         <h4 className="font-medium text-sm text-[#4a3728]">{person.name}</h4>
//                         <p className="text-xs text-[#4a3728] opacity-60">{person.role}</p>
//                       </div>
//                       <ArrowRight
//                         className="w-4 h-4 text-[#4a3728] opacity-30"
//                         aria-hidden="true"
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 <button
//                   className="w-full mt-4 text-sm font-medium hover:underline text-[#4a3728]"
//                   aria-label="View all Amazon employees"
//                 >
//                   View all employees →
//                 </button>
//               </div>
//             </section>
//           </aside>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0px) translateX(0px);
//           }
//           33% {
//             transform: translateY(-20px) translateX(10px);
//           }
//           66% {
//             transform: translateY(10px) translateX(-10px);
//           }
//         }
//         .animate-float {
//           animation: float 10s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AmazonCompanyHeader;


//========================================================================================================================================



// import { Users, MapPin, Calendar, Briefcase, Building, Globe, Star, ChevronRight, Heart, MessageCircle, Share2, ExternalLink } from 'lucide-react';
// import { useState } from 'react';

// const EnhancedNetflixProfile = () => {
//   const [activeTab, setActiveTab] = useState('Home');
//   const [ setHoveredPost] = useState(null);
//   const tabs = ['Home', 'About', 'Posts', 'Jobs', 'People', 'Insights'];


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-slate-100" style={{background: 'linear-gradient(to bottom right, #f6ede8, #e0d8cf, #f6ede8)'}}>
//       {/* Floating particles background */}
//       {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 rounded-full animate-pulse"
//             style={{
//               backgroundColor: '#4a3728',
//               opacity: '0.1',
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${3 + Math.random() * 2}s`
//             }}
//           />
//         ))}
//       </div> */}

//       {/* Header */}
//       <div className="bg-white/80 backdrop-blur-md shadow-lg border-b sticky top-0 z-50" style={{borderColor: '#e0d8cf'}}>
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg" style={{backgroundColor: '#4a3728'}}>
//                 <span className="text-white font-bold text-lg">in</span>
//               </div>
//               <span className="text-2xl font-bold" style={{color: '#4a3728'}}>
//                 LinkedIn
//               </span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="px-6 py-3 text-white rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" style={{backgroundColor: '#4a3728'}}>
//                 Sign in
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3 space-y-8">
//             {/* Company Header */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
//               {/* Enhanced Cover Image */}
//               <div className="h-64 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-black"></div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

//                 {/* Animated Netflix Pattern */}
//                 <div className="absolute inset-0 opacity-30">
//                   <div className="grid grid-cols-16 gap-1 h-full p-6">
//                     {[...Array(80)].map((_, i) => (
//                       <div 
//                         key={i} 
//                         className="bg-white/20 rounded-sm animate-pulse hover:bg-white/40 transition-colors" 
//                         style={{
//                           animationDelay: `${i * 0.05}s`,
//                           animationDuration: `${2 + Math.random()}s`
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//                 {/* Netflix Logo with Glow */}
//                 <div className="absolute top-8 right-8">
//                   {/* <div className="text-white font-black text-6xl drop-shadow-2xl filter">
//                     NETFLIX
//                   </div> */}
//                 </div>

//                 {/* Floating Play Button */}
//                 {/* <div className="absolute bottom-8 right-8">
//                   <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
//                     <Play className="w-8 h-8 text-white ml-1" fill="white" />
//                   </div>
//                 </div> */}
//               </div>

//               {/* Enhanced Company Info */}
//               <div className="p-8" style={{backgroundColor: '#f6ede8'}}>
//                 <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
//                   <div className="relative -mt-20 md:-mt-16">
//                     <div className="w-32 h-32 rounded-3xl border-4 border-white shadow-2xl bg-gradient-to-br from-red-600 to-black flex items-center justify-center relative overflow-hidden hover:scale-105 transition-transform duration-300">
//                       <div className="text-white font-black text-5xl drop-shadow-lg">N</div>
//                       <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-transparent"></div>
//                       {/* <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
//                         <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                       </div> */}
//                     </div>
//                   </div>

//                   <div className="flex-1">
//                     <div className="flex items-center space-x-3 mb-3">
//                       <h1 className="text-4xl font-black bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
//                         Netflix
//                       </h1>
//                       <div className="text-white px-3 py-1 rounded-full text-xs font-bold" style={{backgroundColor: '#4a3728'}}>
//                         VERIFIED
//                       </div>
//                     </div>

//                     <p className="text-xl mb-4 font-medium" style={{color: '#4a3728'}}>
//                        Global Entertainment Leader • Los Gatos, CA
//                     </p>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                       <div className="flex items-center space-x-2 rounded-xl p-3" style={{backgroundColor: '#e0d8cf'}}>
//                         <Users className="w-5 h-5" style={{color: '#4a3728'}} />
//                         <div>
//                           <p className="font-bold" style={{color: '#4a3728'}}>270M+</p>
//                           <p className="text-xs" style={{color: '#4a3728', opacity: '0.7'}}>Members</p>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2 rounded-xl p-3" style={{backgroundColor: '#e0d8cf'}}>
//                         <Globe className="w-5 h-5" style={{color: '#4a3728'}} />
//                         <div>
//                           <p className="font-bold" style={{color: '#4a3728'}}>190+</p>
//                           <p className="text-xs" style={{color: '#4a3728', opacity: '0.7'}}>Countries</p>
//                         </div>
//                       </div>
//                       <div className="flex items-center space-x-2 rounded-xl p-3" style={{backgroundColor: '#e0d8cf'}}>
//                         <Building className="w-5 h-5" style={{color: '#4a3728'}} />
//                         <div>
//                           <p className="font-bold" style={{color: '#4a3728'}}>15K+</p>
//                           <p className="text-xs" style={{color: '#4a3728', opacity: '0.7'}}>Employees</p>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex flex-wrap gap-4">
//                       <button className="px-8 py-3 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2" style={{backgroundColor: '#4a3728'}}>
//                         <span>+ Follow</span>
//                         <Users className="w-4 h-4" />
//                       </button>
//                       <button className="px-8 py-3 border-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 hover:bg-opacity-10" style={{borderColor: '#4a3728', color: '#4a3728'}}>
//                         <span>Visit website</span>
//                         <ExternalLink className="w-4 h-4" />
//                       </button>
//                       <button className="px-6 py-3 border-2 rounded-full font-semibold transition-all duration-300" style={{borderColor: '#e0d8cf', color: '#4a3728'}}>
//                         More
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Enhanced Navigation */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6">
//               <div className="flex space-x-2 overflow-x-auto">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
//                       activeTab === tab
//                         ? 'text-white shadow-lg'
//                         : 'hover:bg-opacity-10'
//                     }`}
//                     style={activeTab === tab 
//                       ? {backgroundColor: '#4a3728'} 
//                       : {color: '#4a3728', backgroundColor: 'transparent'}
//                     }
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced About Section */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
//               <div className="flex items-center space-x-3 mb-6">
//                 <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#4a3728'}}>
//                   <Building className="w-5 h-5 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold" style={{color: '#4a3728'}}>About Netflix</h2>
//               </div>

//               <div className="rounded-2xl p-6 mb-6" style={{backgroundColor: '#f6ede8'}}>
//                 <p className="leading-relaxed text-lg" style={{color: '#4a3728'}}>
//                   Netflix is one of the world's leading entertainment services with over 270 million paid memberships in more than 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {[
//                   { icon: Globe, label: 'Website', value: 'netflix.com' },
//                   { icon: Building, label: 'Industry', value: 'Entertainment' },
//                   { icon: Users, label: 'Company size', value: '10,001+ employees' }
//                 ].map((item, index) => (
//                   <div key={index} className="flex items-center space-x-4 rounded-xl p-4 transition-colors" style={{backgroundColor: '#e0d8cf'}}>
//                     <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center">
//                       <item.icon className="w-6 h-6" style={{color: '#4a3728'}} />
//                     </div>
//                     <div>
//                       <p className="font-semibold" style={{color: '#4a3728'}}>{item.label}</p>
//                       <p style={{color: '#4a3728', opacity: '0.7'}}>{item.value}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Recent Posts */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#4a3728'}}>
//                     <MessageCircle className="w-5 h-5 text-white" />
//                   </div>
//                   <h2 className="text-3xl font-bold" style={{color: '#4a3728'}}>Recent Posts</h2>
//                 </div>
//                 <div className="flex space-x-2">
//                   <button className="w-10 h-10 rounded-full transition-colors flex items-center justify-center" style={{backgroundColor: '#e0d8cf', color: '#4a3728'}}>
//                     <span className="text-xl">←</span>
//                   </button>
//                   <button className="w-10 h-10 rounded-full transition-colors flex items-center justify-center" style={{backgroundColor: '#e0d8cf', color: '#4a3728'}}>
//                     <span className="text-xl">→</span>
//                   </button>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {[
//                   {
//                     id: 1,
//                     content: "🎬 Exciting news! We're expanding our content library with 50+ new original series coming this year. Stay tuned for more updates!",
//                     image: "NEW SERIES",
//                     gradient: "from-red-600 to-red-800",
//                     reactions: "2,547",
//                     comments: "184",
//                     reposts: "892",
//                     time: "2h"
//                   },
//                   {
//                     id: 2,
//                     content: "🎭 Behind the scenes of our latest blockbuster series! Our incredible team worked tirelessly to bring this story to life.",
//                     image: "BEHIND THE SCENES",
//                     gradient: "from-gray-800 to-gray-900",
//                     reactions: "1,892",
//                     comments: "67",
//                     reposts: "445",
//                     time: "1d"
//                   }
//                 ].map((post) => (
//                   <div
//                     key={post.id}
//                     className="border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white"
//                     style={{borderColor: '#e0d8cf'}}
//                     onMouseEnter={() => setHoveredPost(post.id)}
//                     onMouseLeave={() => setHoveredPost(null)}
//                   >
//                     <div className="flex items-center mb-4">
//                       <div className="w-12 h-12 rounded-xl mr-4 bg-gradient-to-br from-red-600 to-black flex items-center justify-center shadow-lg">
//                         <span className="text-white font-bold">N</span>
//                       </div>
//                       <div>
//                         <p className="font-bold" style={{color: '#4a3728'}}>Netflix</p>
//                         <p className="text-sm" style={{color: '#4a3728', opacity: '0.6'}}>15M followers • {post.time}</p>
//                       </div>
//                     </div>

//                     <p className="mb-4 text-lg leading-relaxed" style={{color: '#4a3728'}}>
//                       {post.content}
//                     </p>

//                     <div className={`w-full h-48 bg-gradient-to-r ${post.gradient} rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden group`}>
//                       {post.id === 1 ? (
//                         <div className="w-full h-full bg-cover bg-center relative" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1489599904593-130ba0a4934b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")'}}>
//                           <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                             <span className="text-white text-xl font-bold drop-shadow-lg">{post.image}</span>
//                           </div>
//                         </div>
//                       ) : (
//                         <div className="w-full h-full bg-cover bg-center relative" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80")'}}>
//                           <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                             <span className="text-white text-xl font-bold drop-shadow-lg">{post.image}</span>
//                           </div>
//                         </div>
//                       )}
//                       {/* {hoveredPost === post.id && (
//                         <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
//                           <Play className="w-12 h-12 text-white" fill="white" />
//                         </div>
//                       )} */}
//                     </div>

//                     <div className="flex items-center justify-between pt-4 border-t" style={{borderColor: '#e0d8cf'}}>
//                       <div className="flex items-center space-x-4">
//                         <button className="flex items-center space-x-1 transition-colors" style={{color: '#4a3728', opacity: '0.7'}}>
//                           <Heart className="w-5 h-5" />
//                           <span className="text-sm font-medium">{post.reactions}</span>
//                         </button>
//                         <button className="flex items-center space-x-1 transition-colors" style={{color: '#4a3728', opacity: '0.7'}}>
//                           <MessageCircle className="w-5 h-5" />
//                           <span className="text-sm font-medium">{post.comments}</span>
//                         </button>
//                         <button className="flex items-center space-x-1 transition-colors" style={{color: '#4a3728', opacity: '0.7'}}>
//                           <Share2 className="w-5 h-5" />
//                           <span className="text-sm font-medium">{post.reposts}</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Job Openings */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center space-x-3">
//                   <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: '#4a3728'}}>
//                     <Briefcase className="w-5 h-5 text-white" />
//                   </div>
//                   <h2 className="text-3xl font-bold" style={{color: '#4a3728'}}>Job Openings</h2>
//                 </div>
//                 <a href="#" className="font-semibold transition-colors flex items-center space-x-1" style={{color: '#4a3728'}}>
//                   <span>View all 248 jobs</span>
//                   <ChevronRight className="w-4 h-4" />
//                 </a>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {[
//                   { title: 'Senior Software Engineer', location: 'Los Gatos, CA', posted: '2 days ago', type: 'Full-time' },
//                   { title: 'Product Manager', location: 'Remote', posted: '5 days ago', type: 'Full-time' }
//                 ].map((job, index) => (
//                   <div key={index} className="border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 bg-white" style={{borderColor: '#e0d8cf'}}>
//                     <div className="flex items-start space-x-4">
//                       <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{backgroundColor: '#f6ede8'}}>
//                         <Briefcase className="w-6 h-6" style={{color: '#4a3728'}} />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-bold text-lg mb-2" style={{color: '#4a3728'}}>{job.title}</h3>
//                         <div className="flex items-center space-x-4 text-sm mb-3" style={{color: '#4a3728', opacity: '0.7'}}>
//                           <span className="flex items-center space-x-1">
//                             <MapPin className="w-4 h-4" />
//                             <span>{job.location}</span>
//                           </span>
//                           <span className="flex items-center space-x-1">
//                             <Calendar className="w-4 h-4" />
//                             <span>{job.posted}</span>
//                           </span>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{backgroundColor: '#e0d8cf', color: '#4a3728'}}>
//                             {job.type}
//                           </span>
//                           <button className="font-semibold transition-colors" style={{color: '#4a3728'}}>
//                             Apply Now
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Company Insights */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
//               <h2 className="text-3xl font-bold mb-8" style={{color: '#4a3728'}}>Company Insights</h2>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="text-center p-6 rounded-2xl" style={{backgroundColor: '#f6ede8'}}>
//                   <p className="text-3xl font-bold mb-2" style={{color: '#4a3728'}}>+5.2%</p>
//                   <p className="text-lg font-medium" style={{color: '#4a3728'}}>Employee Growth</p>
//                 </div>

//                 <div className="text-center p-6 rounded-2xl" style={{backgroundColor: '#e0d8cf'}}>
//                   <p className="text-3xl font-bold mb-2" style={{color: '#4a3728'}}>15,247</p>
//                   <p className="text-lg font-medium" style={{color: '#4a3728'}}>Total Employees</p>
//                 </div>

//                 <div className="text-center p-6 rounded-2xl" style={{backgroundColor: '#f6ede8'}}>
//                   <p className="text-3xl font-bold mb-2" style={{color: '#4a3728'}}>190+</p>
//                   <p className="text-lg font-medium" style={{color: '#4a3728'}}>Countries</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Enhanced Sidebar */}
//           <div className="space-y-6">
//             {/* Similar Companies */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6">
//               <h3 className="text-xl font-bold mb-6" style={{color: '#4a3728'}}>Similar Companies</h3>

//               <div className="space-y-4">
//                 {[
//                   { name: 'Disney+', industry: 'Entertainment', followers: '2.1M', color: 'bg-blue-600', initial: 'D+' },
//                   { name: 'Amazon Prime', industry: 'Streaming', followers: '1.8M', color: 'bg-orange-500', initial: 'P' },
//                   { name: 'HBO Max', industry: 'Entertainment', followers: '987K', color: 'bg-purple-600', initial: 'H' }
//                 ].map((company, index) => (
//                   <div key={index} className="flex items-center justify-between p-3 rounded-xl transition-colors" style={{backgroundColor: '#f6ede8'}}>
//                     <div className="flex items-center space-x-3">
//                       <div className={`w-12 h-12 rounded-xl ${company.color} flex items-center justify-center shadow-lg`}>
//                         <span className="text-white font-bold text-sm">{company.initial}</span>
//                       </div>
//                       <div>
//                         <p className="font-semibold" style={{color: '#4a3728'}}>{company.name}</p>
//                         <p className="text-xs" style={{color: '#4a3728', opacity: '0.6'}}>{company.industry}</p>
//                         <p className="text-xs" style={{color: '#4a3728', opacity: '0.5'}}>{company.followers} followers</p>
//                       </div>
//                     </div>
//                     <button className="px-4 py-2 text-white rounded-full text-xs font-semibold transition-colors" style={{backgroundColor: '#4a3728'}}>
//                       Follow
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Premium CTA */}
//             <div className="rounded-2xl p-6 text-center shadow-lg" style={{backgroundColor: '#e0d8cf'}}>
//               <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
//                 <Star className="w-6 h-6" style={{color: '#4a3728'}} />
//               </div>
//               <h3 className="text-xl font-bold mb-2" style={{color: '#4a3728'}}>Unlock Premium Insights</h3>
//               <p className="text-sm mb-4" style={{color: '#4a3728', opacity: '0.8'}}>Get advanced company analytics and hiring trends</p>
//               <button className="w-full px-4 py-3 bg-white rounded-full font-semibold transition-colors shadow-lg" style={{color: '#4a3728'}}>
//                 Try Premium for ₹0
//               </button>
//               <p className="text-xs mt-2" style={{color: '#4a3728', opacity: '0.7'}}>1-month free trial</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnhancedNetflixProfile;


//====================================================================================================================================


// import {
//   Users,
//   MapPin,
//   Calendar,
//   Briefcase,
//   Building,
//   Globe,
//   Star,
//   ChevronRight,
//   Heart,
//   MessageCircle,
//   Share2,
//   ExternalLink,
//   TrendingUp,
//   BarChart2,
//   Play,
// } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';

// const EnhancedNetflixProfile = () => {
//   const [activeTab, setActiveTab] = useState('Home');
//   const [hoveredPost, setHoveredPost] = useState(null); // Fixed: Added hoveredPost
//   const tabs = ['Home', 'About', 'Posts', 'Jobs', 'People', 'Insights'];

//   // Company Insights Component
//   const CompanyInsights = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const sectionRef = useRef(null);

//     // Intersection Observer for animations
//     useEffect(() => {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//             observer.disconnect();
//           }
//         },
//         { threshold: 0.1 }
//       );
//       if (sectionRef.current) {
//         observer.observe(sectionRef.current);
//       }
//       return () => observer.disconnect();
//     }, []);

//     // Count-up animation logic
//     const CountUp = ({ end, duration = 2000 }) => {
//       const [count, setCount] = useState(0);
//       useEffect(() => {
//         if (!isVisible) return;
//         let startTime = null;
//         const animate = (timestamp) => {
//           if (!startTime) startTime = timestamp;
//           const progress = Math.min((timestamp - startTime) / duration, 1);
//           setCount(Math.floor(progress * end));
//           if (progress < 1) requestAnimationFrame(animate);
//         };
//         requestAnimationFrame(animate);
//       }, [isVisible]);
//       return <span>{count}{end === 5.2 ? '%' : ''}</span>;
//     };

//     return (
//       <div
//         ref={sectionRef}
//         className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8"
//         style={{ backgroundColor: '#f6ede8' }}
//       >
//         <div className="flex items-center justify-between mb-8">
//           <div className="flex items-center space-x-3">
//             <div
//               className="w-8 h-8 rounded-lg flex items-center justify-center"
//               style={{ backgroundColor: '#4a3728' }}
//             >
//               <BarChart2 className="w-5 h-5 text-white" />
//             </div>
//             <h2 className="text-3xl font-bold" style={{ color: '#4a3728' }}>
//               Company Insights
//             </h2>
//           </div>
//           <a
//             href="#"
//             className="font-semibold transition-colors flex items-center space-x-1"
//             style={{ color: '#4a3728' }}
//             aria-label="View more company insights"
//           >
//             <span>View More</span>
//             <ChevronRight className="w-4 h-4" />
//           </a>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           {/* Employee Growth Card */}
//           <div
//             className="relative text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
//             style={{ backgroundColor: '#e0d8cf' }}
//           >
//             <div
//               className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               aria-hidden="true"
//             />
//             <div
//               className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center shadow-md"
//               style={{ backgroundColor: '#4a3728' }}
//             >
//               <TrendingUp className="w-6 h-6 text-white" />
//             </div>
//             <p
//               className="text-3xl font-bold mb-2"
//               style={{ color: '#4a3728' }}
//               aria-label="Employee growth percentage"
//             >
//               <CountUp end={5.2} />
//             </p>
//             <p className="text-lg font-medium" style={{ color: '#4a3728' }}>
//               Employee Growth
//             </p>
//             <p
//               className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               style={{ color: '#4a3728', opacity: '0.7' }}
//             >
//               Year-over-year headcount increase
//             </p>
//             <div className="mt-4 h-2 bg-white rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-gradient-to-r from-red-600 to-red-800 transition-all duration-1000"
//                 style={{ width: isVisible ? '52%' : '0%' }}
//               />
//             </div>
//           </div>

//           {/* Total Employees Card */}
//           <div
//             className="relative text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
//             style={{ backgroundColor: '#e0d8cf' }}
//           >
//             <div
//               className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               aria-hidden="true"
//             />
//             <div
//               className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center shadow-md"
//               style={{ backgroundColor: '#4a3728' }}
//             >
//               <Users className="w-6 h-6 text-white" />
//             </div>
//             <p
//               className="text-3xl font-bold mb-2"
//               style={{ color: '#4a3728' }}
//               aria-label="Total number of employees"
//             >
//               <CountUp end={15247} />
//             </p>
//             <p className="text-lg font-medium" style={{ color: '#4a3728' }}>
//               Total Employees
//             </p>
//             <p
//               className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               style={{ color: '#4a3728', opacity: '0.7' }}
//             >
//               Global workforce as of 2025
//             </p>
//           </div>

//           {/* Countries Card */}
//           <div
//             className="relative text-center p-6 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
//             style={{ backgroundColor: '#e0d8cf' }}
//           >
//             <div
//               className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               aria-hidden="true"
//             />
//             <div
//               className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center shadow-md"
//               style={{ backgroundColor: '#4a3728' }}
//             >
//               <Globe className="w-6 h-6 text-white" />
//             </div>
//             <p
//               className="text-3xl font-bold mb-2"
//               style={{ color: '#4a3728' }}
//               aria-label="Number of countries served"
//             >
//               <CountUp end={190} />
//               <span>+</span>
//             </p>
//             <p className="text-lg font-medium" style={{ color: '#4a3728' }}>
//               Countries
//             </p>
//             <p
//               className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               style={{ color: '#4a3728', opacity: '0.7' }}
//             >
//               Global streaming presence
//             </p>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div
//       className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-slate-100"
//       style={{ background: 'linear-gradient(to bottom right, #f6ede8, #e0d8cf, #f6ede8)' }}
//     >

//       {/* Header */}
//       <div
//         className="bg-white/80 backdrop-blur-md shadow-lg border-b sticky top-0 z-50"
//         style={{ borderColor: '#e0d8cf' }}
//       >
//         <div className="max-w-7xl mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <div
//                 className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg"
//                 style={{ backgroundColor: '#4a3728' }}
//               >
//                 <span className="text-white font-bold text-lg">in</span>
//               </div>
//               <span className="text-2xl font-bold" style={{ color: '#4a3728' }}>
//                 LinkedIn
//               </span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button
//                 className="px-6 py-3 text-white rounded-full text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
//                 style={{ backgroundColor: '#4a3728' }}
//               >
//                 Sign in
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3 space-y-8">
//             {/* Company Header */}
//             {/* <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500">
//               <div className="h-64 relative overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-700 to-black"></div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
//                 <div className="absolute inset-0 opacity-30">
//                   <div className="grid grid-cols-16 gap-1 h-full p-6">
//                     {[...Array(80)].map((_, i) => (
//                       <div
//                         key={i}
//                         className="bg-white/20 rounded-sm animate-pulse hover:bg-white/40 transition-colors"
//                         style={{
//                           animationDelay: `${i * 0.05}s`,
//                           animationDuration: `${2 + Math.random()}s`,
//                         }}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="p-8" style={{ backgroundColor: '#f6ede8' }}>
//                 <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
//                   <div className="relative -mt-20 md:-mt-16">
//                     <div
//                       className="w-32 h-32 rounded-3xl border-4 border-white shadow-2xl bg-gradient-to-br from-red-600 to-black flex items-center justify-center relative overflow-hidden hover:scale-105 transition-transform duration-300"
//                     >
//                       <div className="text-white font-black text-5xl drop-shadow-lg">N</div>
//                       <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-transparent"></div>
//                     </div>
//                   </div>

//                   <div className="flex-1">
//                     <div className="flex items-center space-x-3 mb-3">
//                       <h1 className="text-4xl font-black bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent">
//                         Netflix
//                       </h1>
//                       <div
//                         className="text-white px-3 py-1 rounded-full text-xs font-bold"
//                         style={{ backgroundColor: '#4a3728' }}
//                       >
//                         VERIFIED
//                       </div>
//                     </div>

//                     <p className="text-xl mb-4 font-medium" style={{ color: '#4a3728' }}>
//                       Global Entertainment Leader • Los Gatos, CA
//                     </p>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//                       <div
//                         className="flex items-center space-x-2 rounded-xl p-3"
//                         style={{ backgroundColor: '#e0d8cf' }}
//                       >
//                         <Users className="w-5 h-5" style={{ color: '#4a3728' }} />
//                         <div>
//                           <p className="font-bold" style={{ color: '#4a3728' }}>
//                             270M+
//                           </p>
//                           <p
//                             className="text-xs"
//                             style={{ color: '#4a3728', opacity: '0.7' }}
//                           >
//                             Members
//                           </p>
//                         </div>
//                       </div>
//                       <div
//                         className="flex items-center space-x-2 rounded-xl p-3"
//                         style={{ backgroundColor: '#e0d8cf' }}
//                       >
//                         <Globe className="w-5 h-5" style={{ color: '#4a3728' }} />
//                         <div>
//                           <p className="font-bold" style={{ color: '#4a3728' }}>
//                             190+
//                           </p>
//                           <p
//                             className="text-xs"
//                             style={{ color: '#4a3728', opacity: '0.7' }}
//                           >
//                             Countries
//                           </p>
//                         </div>
//                       </div>
//                       <div
//                         className="flex items-center space-x-2 rounded-xl p-3"
//                         style={{ backgroundColor: '#e0d8cf' }}
//                       >
//                         <Building className="w-5 h-5" style={{ color: '#4a3728' }} />
//                         <div>
//                           <p className="font-bold" style={{ color: '#4a3728' }}>
//                             15K+
//                           </p>
//                           <p
//                             className="text-xs"
//                             style={{ color: '#4a3728', opacity: '0.7' }}
//                           >
//                             Employees
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex flex-wrap gap-4">
//                       <button
//                         className="px-8 py-3 text-white rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center space-x-2"
//                         style={{ backgroundColor: '#4a3728' }}
//                       >
//                         <span>+ Follow</span>
//                         <Users className="w-4 h-4" />
//                       </button>
//                       <button
//                         className="px-8 py-3 border-2 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 hover:bg-opacity-10"
//                         style={{ borderColor: '#4a3728', color: '#4a3728' }}
//                       >
//                         <span>Visit website</span>
//                         <ExternalLink className="w-4 h-4" />
//                       </button>
//                       <button
//                         className="px-6 py-3 border-2 rounded-full font-semibold transition-all duration-300"
//                         style={{ borderColor: '#e0d8cf', color: '#4a3728' }}
//                       >
//                         More
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div> */}

//             {/* Banner Section */}
//             <div className="relative h-56 rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900 to-gray-700 mb-6">
//               <div className="absolute inset-0 opacity-20">
//                 <div className="grid grid-cols-12 gap-2 h-full p-4">
//                   {[...Array(60)].map((_, i) => (
//                     <div
//                       key={i}
//                       className="bg-white/30 rounded animate-pulse"
//                       style={{
//                         animationDelay: `${i * 0.1}s`,
//                         animationDuration: `${3 + Math.random()}s`,
//                       }}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/80 to-transparent" />
//             </div>

//             {/* Profile Section */}
//             {/* Profile Image Section */}
//             <div className="flex justify-center -mt-16 mb-6">
//               <div className="relative">
//                 <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-gray-800 to-black shadow-2xl flex items-center justify-center border-4 border-white hover:scale-105 transition-transform duration-300">
//                   <span className="text-white font-black text-5xl drop-shadow-lg">N</span>
//                 </div>
//                 {/* <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center">
//                   <div className="w-2 h-2 bg-white rounded-full"></div>
//                 </div> */}
//               </div>
//             </div>

//             {/* Company Info Section */}
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//               <div className="p-8 text-center">
//                 {/* Company Name & Badge */}
//                 <div className="flex items-center justify-center gap-3 mb-3">
//                   <h1 className="text-4xl font-black text-gray-900">Netflix</h1>
//                   <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-bold">
//                     VERIFIED
//                   </span>
//                 </div>

//                 {/* Location */}
//                 <div className="flex items-center justify-center gap-2 mb-6">
//                   <MapPin className="w-4 h-4 text-gray-600" />
//                   <p className="text-lg text-gray-600">Global Entertainment Leader • Los Gatos, CA</p>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-wrap justify-center gap-3">
//                   <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
//                     <Users className="w-4 h-4" />
//                     Follow
//                   </button>
//                   <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center gap-2">
//                     <ExternalLink className="w-4 h-4" />
//                     Visit Website
//                   </button>
//                   <button className="border-2 border-gray-200 text-gray-600 px-6 py-3 rounded-full font-semibold hover:border-gray-300 hover:bg-gray-50 transition-all duration-300">
//                     More
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Section */}
//             <div className="bg-white rounded-2xl shadow-lg p-8">
//               <h2 className="text-2xl font-bold text-gray-900 mb-6">Company Overview</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 <div className="text-center p-6 bg-gray-50 rounded-xl">
//                   <Users className="w-8 h-8 text-gray-700 mx-auto mb-3" />
//                   <div className="text-3xl font-bold text-gray-900">270M+</div>
//                   <div className="text-sm text-gray-600">Global Members</div>
//                 </div>
//                 <div className="text-center p-6 bg-gray-50 rounded-xl">
//                   <Globe className="w-8 h-8 text-gray-700 mx-auto mb-3" />
//                   <div className="text-3xl font-bold text-gray-900">190+</div>
//                   <div className="text-sm text-gray-600">Countries</div>
//                 </div>
//                 <div className="text-center p-6 bg-gray-50 rounded-xl">
//                   <Building className="w-8 h-8 text-gray-700 mx-auto mb-3" />
//                   <div className="text-3xl font-bold text-gray-900">15K+</div>
//                   <div className="text-sm text-gray-600">Employees</div>
//                 </div>
//               </div>
//             </div>


//             {/* Enhanced Navigation */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6">
//               <div className="flex space-x-2 overflow-x-auto">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${activeTab === tab
//                       ? 'text-white shadow-lg'
//                       : 'hover:bg-opacity-10'
//                       }`}
//                     style={
//                       activeTab === tab
//                         ? { backgroundColor: '#4a3728' }
//                         : { color: '#4a3728', backgroundColor: 'transparent' }
//                     }
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced About Section */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
//               <div className="flex items-center space-x-3 mb-6">
//                 <div
//                   className="w-8 h-8 rounded-lg flex items-center justify-center"
//                   style={{ backgroundColor: '#4a3728' }}
//                 >
//                   <Building className="w-5 h-5 text-white" />
//                 </div>
//                 <h2 className="text-3xl font-bold" style={{ color: '#4a3728' }}>
//                   About Netflix
//                 </h2>
//               </div>

//               <div
//                 className="rounded-2xl p-6 mb-6"
//                 style={{ backgroundColor: '#f6ede8' }}
//               >
//                 <p
//                   className="leading-relaxed text-lg"
//                   style={{ color: '#4a3728' }}
//                 >
//                   Netflix is one of the world's leading entertainment services with
//                   over 270 million paid memberships in more than 190 countries
//                   enjoying TV series, films, and games across a wide variety of
//                   genres and languages. Members can play, pause, and resume
//                   watching as much as they want, anytime, anywhere, and can change
//                   their plans at any time.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {[
//                   { icon: Globe, label: 'Website', value: 'netflix.com' },
//                   { icon: Building, label: 'Industry', value: 'Entertainment' },
//                   {
//                     icon: Users,
//                     label: 'Company size',
//                     value: '10,001+ employees',
//                   },
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center space-x-4 rounded-xl p-4 transition-colors"
//                     style={{ backgroundColor: '#e0d8cf' }}
//                   >
//                     <div
//                       className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center"
//                     >
//                       <item.icon
//                         className="w-6 h-6"
//                         style={{ color: '#4a3728' }}
//                       />
//                     </div>
//                     <div>
//                       <p
//                         className="font-semibold"
//                         style={{ color: '#4a3728' }}
//                       >
//                         {item.label}
//                       </p>
//                       <p
//                         style={{ color: '#4a3728', opacity: '0.7' }}
//                       >
//                         {item.value}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Recent Posts */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center space-x-3">
//                   <div
//                     className="w-8 h-8 rounded-lg flex items-center justify-center"
//                     style={{ backgroundColor: '#4a3728' }}
//                   >
//                     <MessageCircle className="w-5 h-5 text-white" />
//                   </div>
//                   <h2 className="text-3xl font-bold" style={{ color: '#4a3728' }}>
//                     Recent Posts
//                   </h2>
//                 </div>
//                 <div className="flex space-x-2">
//                   <button
//                     className="w-10 h-10 rounded-full transition-colors flex items-center justify-center"
//                     style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}
//                   >
//                     <span className="text-xl">←</span>
//                   </button>
//                   <button
//                     className="w-10 h-10 rounded-full transition-colors flex items-center justify-center"
//                     style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}
//                   >
//                     <span className="text-xl">→</span>
//                   </button>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {[
//                   {
//                     id: 1,
//                     content:
//                       "🎬 Exciting news! We're expanding our content library with 50+ new original series coming this year. Stay tuned for more updates!",
//                     image: 'NEW SERIES',
//                     gradient: 'from-red-600 to-red-800',
//                     reactions: '2,547',
//                     comments: '184',
//                     reposts: '892',
//                     time: '2h',
//                   },
//                   {
//                     id: 2,
//                     content:
//                       '🎭 Behind the scenes of our latest blockbuster series! Our incredible team worked tirelessly to bring this story to life.',
//                     image: 'BEHIND THE SCENES',
//                     gradient: 'from-gray-800 to-gray-900',
//                     reactions: '1,892',
//                     comments: '67',
//                     reposts: '445',
//                     time: '1d',
//                   },
//                 ].map((post) => (
//                   <div
//                     key={post.id}
//                     className="border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 bg-white"
//                     style={{ borderColor: '#e0d8cf' }}
//                     onMouseEnter={() => setHoveredPost(post.id)}
//                     onMouseLeave={() => setHoveredPost(null)}
//                   >
//                     <div className="flex items-center mb-4">
//                       <div
//                         className="w-12 h-12 rounded-xl mr-4 bg-gradient-to-br from-red-600 to-black flex items-center justify-center shadow-lg"
//                       >
//                         <span className="text-white font-bold">N</span>
//                       </div>
//                       <div>
//                         <p className="font-bold" style={{ color: '#4a3728' }}>
//                           Netflix
//                         </p>
//                         <p
//                           className="text-sm"
//                           style={{ color: '#4a3728', opacity: '0.6' }}
//                         >
//                           15M followers • {post.time}
//                         </p>
//                       </div>
//                     </div>

//                     <p
//                       className="mb-4 text-lg leading-relaxed"
//                       style={{ color: '#4a3728' }}
//                     >
//                       {post.content}
//                     </p>

//                     <div
//                       className={`w-full h-48 bg-gradient-to-r ${post.gradient} rounded-2xl mb-4 flex items-center justify-center relative overflow-hidden group`}
//                     >
//                       {post.id === 1 ? (
//                         <div
//                           className="w-full h-full bg-cover bg-center relative"
//                           style={{
//                             backgroundImage:
//                               'url("https://images.unsplash.com/photo-1489599904593-130ba0a4934b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
//                           }}
//                         >
//                           <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                             <span className="text-white text-xl font-bold drop-shadow-lg">
//                               {post.image}
//                             </span>
//                           </div>
//                         </div>
//                       ) : (
//                         <div
//                           className="w-full h-full bg-cover bg-center relative"
//                           style={{
//                             backgroundImage:
//                               'url("https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80")',
//                           }}
//                         >
//                           <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//                             <span className="text-white text-xl font-bold drop-shadow-lg">
//                               {post.image}
//                             </span>
//                           </div>
//                         </div>
//                       )}
//                       {hoveredPost === post.id && (
//                         <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300">
//                           <Play className="w-12 h-12 text-white" fill="white" />
//                         </div>
//                       )}
//                     </div>

//                     <div
//                       className="flex items-center justify-between pt-4 border-t"
//                       style={{ borderColor: '#e0d8cf' }}
//                     >
//                       <div className="flex items-center space-x-4">
//                         <button
//                           className="flex items-center space-x-1 transition-colors"
//                           style={{ color: '#4a3728', opacity: '0.7' }}
//                         >
//                           <Heart className="w-5 h-5" />
//                           <span className="text-sm font-medium">
//                             {post.reactions}
//                           </span>
//                         </button>
//                         <button
//                           className="flex items-center space-x-1 transition-colors"
//                           style={{ color: '#4a3728', opacity: '0.7' }}
//                         >
//                           <MessageCircle className="w-5 h-5" />
//                           <span className="text-sm font-medium">
//                             {post.comments}
//                           </span>
//                         </button>
//                         <button
//                           className="flex items-center space-x-1 transition-colors"
//                           style={{ color: '#4a3728', opacity: '0.7' }}
//                         >
//                           <Share2 className="w-5 h-5" />
//                           <span className="text-sm font-medium">
//                             {post.reposts}
//                           </span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Job Openings */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8">
//               <div className="flex items-center justify-between mb-8">
//                 <div className="flex items-center space-x-3">
//                   <div
//                     className="w-8 h-8 rounded-lg flex items-center justify-center"
//                     style={{ backgroundColor: '#4a3728' }}
//                   >
//                     <Briefcase className="w-5 h-5 text-white" />
//                   </div>
//                   <h2 className="text-3xl font-bold" style={{ color: '#4a3728' }}>
//                     Job Openings
//                   </h2>
//                 </div>
//                 <a
//                   href="#"
//                   className="font-semibold transition-colors flex items-center space-x-1"
//                   style={{ color: '#4a3728' }}
//                 >
//                   <span>View all 248 jobs</span>
//                   <ChevronRight className="w-4 h-4" />
//                 </a>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {[
//                   {
//                     title: 'Senior Software Engineer',
//                     location: 'Los Gatos, CA',
//                     posted: '2 days ago',
//                     type: 'Full-time',
//                   },
//                   {
//                     title: 'Product Manager',
//                     location: 'Remote',
//                     posted: '5 days ago',
//                     type: 'Full-time',
//                   },
//                 ].map((job, index) => (
//                   <div
//                     key={index}
//                     className="border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 bg-white"
//                     style={{ borderColor: '#e0d8cf' }}
//                   >
//                     <div className="flex items-start space-x-4">
//                       <div
//                         className="w-12 h-12 rounded-xl flex items-center justify-center"
//                         style={{ backgroundColor: '#f6ede8' }}
//                       >
//                         <Briefcase
//                           className="w-6 h-6"
//                           style={{ color: '#4a3728' }}
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <h3
//                           className="font-bold text-lg mb-2"
//                           style={{ color: '#4a3728' }}
//                         >
//                           {job.title}
//                         </h3>
//                         <div
//                           className="flex items-center space-x-4 text-sm mb-3"
//                           style={{ color: '#4a3728', opacity: '0.7' }}
//                         >
//                           <span className="flex items-center space-x-1">
//                             <MapPin className="w-4 h-4" />
//                             <span>{job.location}</span>
//                           </span>
//                           <span className="flex items-center space-x-1">
//                             <Calendar className="w-4 h-4" />
//                             <span>{job.posted}</span>
//                           </span>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span
//                             className="px-3 py-1 rounded-full text-xs font-semibold"
//                             style={{
//                               backgroundColor: '#e0d8cf',
//                               color: '#4a3728',
//                             }}
//                           >
//                             {job.type}
//                           </span>
//                           <button
//                             className="font-semibold transition-colors"
//                             style={{ color: '#4a3728' }}
//                           >
//                             Apply Now
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Company Insights */}
//             <CompanyInsights />
//           </div>

//           {/* Enhanced Sidebar */}
//           <div className="space-y-6">
//             {/* Similar Companies */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6">
//               <h3
//                 className="text-xl font-bold mb-6"
//                 style={{ color: '#4a3728' }}
//               >
//                 Similar Companies
//               </h3>

//               <div className="space-y-4">
//                 {[
//                   {
//                     name: 'Disney+',
//                     industry: 'Entertainment',
//                     followers: '2.1M',
//                     color: 'bg-blue-600',
//                     initial: 'D+',
//                   },
//                   {
//                     name: 'Amazon Prime',
//                     industry: 'Streaming',
//                     followers: '1.8M',
//                     color: 'bg-orange-500',
//                     initial: 'P',
//                   },
//                   {
//                     name: 'HBO Max',
//                     industry: 'Entertainment',
//                     followers: '987K',
//                     color: 'bg-purple-600',
//                     initial: 'H',
//                   },
//                 ].map((company, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center justify-between p-3 rounded-xl transition-colors"
//                     style={{ backgroundColor: '#f6ede8' }}
//                   >
//                     <div className="flex items-center space-x-3">
//                       <div
//                         className={`w-12 h-12 rounded-xl ${company.color} flex items-center justify-center shadow-lg`}
//                       >
//                         <span className="text-white font-bold text-sm">
//                           {company.initial}
//                         </span>
//                       </div>
//                       <div>
//                         <p
//                           className="font-semibold"
//                           style={{ color: '#4a3728' }}
//                         >
//                           {company.name}
//                         </p>
//                         <p
//                           className="text-xs"
//                           style={{ color: '#4a3728', opacity: '0.6' }}
//                         >
//                           {company.industry}
//                         </p>
//                         <p
//                           className="text-xs"
//                           style={{ color: '#4a3728', opacity: '0.5' }}
//                         >
//                           {company.followers} followers
//                         </p>
//                       </div>
//                     </div>
//                     <button
//                       className="px-4 py-2 text-white rounded-full text-xs font-semibold transition-colors"
//                       style={{ backgroundColor: '#4a3728' }}
//                     >
//                       Follow
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Premium CTA */}
//             <div
//               className="rounded-2xl p-6 text-center shadow-lg"
//               style={{ backgroundColor: '#e0d8cf' }}
//             >
//               <div
//                 className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg"
//               >
//                 <Star className="w-6 h-6" style={{ color: '#4a3728' }} />
//               </div>
//               <h3
//                 className="text-xl font-bold mb-2"
//                 style={{ color: '#4a3728' }}
//               >
//                 Unlock Premium Insights
//               </h3>
//               <p
//                 className="text-sm mb-4"
//                 style={{ color: '#4a3728', opacity: '0.8' }}
//               >
//                 Get advanced company analytics and hiring trends
//               </p>
//               <button
//                 className="w-full px-4 py-3 bg-white rounded-full font-semibold transition-colors shadow-lg"
//                 style={{ color: '#4a3728' }}
//               >
//                 Try Premium for ₹0
//               </button>
//               <p
//                 className="text-xs mt-2"
//                 style={{ color: '#4a3728', opacity: '0.7' }}
//               >
//                 1-month free trial
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EnhancedNetflixProfile;


//=====================================================================================================================================



