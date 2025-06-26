// /* eslint-disable react/prop-types */


// import {
//   Users,
//   MapPin,
//   Calendar,
//   Briefcase,
//   Building,
//   Globe,
//   // eslint-disable-next-line no-unused-vars
//   Star,
//   ChevronRight,
//   Heart,
//   MessageCircle,
//   Share2,
//   ExternalLink,
//   TrendingUp,
//   BarChart2,
// } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';

// const EnhancedNetflixProfile = () => {
//   const [activeTab, setActiveTab] = useState('Home');
//   const [ setHoveredPost] = useState(null);
//   const tabs = ['Home', 'About', 'Posts', 'Jobs', 'People', 'Insights'];

//   // Company Insights Component
//   const CompanyInsights = () => {
//     const [isVisible, setIsVisible] = useState(false);
//     const sectionRef = useRef(null);

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

//     const CountUp = ({ end, duration = 1500 }) => {
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
//        return <span>{count}{end === 5.2 ? '%' : ''}</span>;
//     };

//     return (
//       <div
//         ref={sectionRef}
//         className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-6"
//         style={{ backgroundColor: '#f6ede8' }}
//       >
//         <div className="flex items-center justify-between mb-5">
//           <div className="flex items-center space-x-2">
//             <div
//               className="w-6 h-6 rounded-md flex items-center justify-center"
//               style={{ backgroundColor: '#4a3728' }}
//             >
//               <BarChart2 className="w-4 h-4 text-white" />
//             </div>
//             <h2 className="text-lg font-semibold" style={{ color: '#4a3728' }}>
//               Company Insights
//             </h2>
//           </div>
//           <a
//             href="#"
//             className="text-xs font-medium transition-colors flex items-center space-x-1"
//             style={{ color: '#4a3728' }}
//             aria-label="View more company insights"
//           >
//             <span>View More</span>
//             <ChevronRight className="w-3 h-3" />
//           </a>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//           {/* Employee Growth Card */}
//           <div
//             className="relative text-center p-4 rounded-xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 group"
//             style={{ backgroundColor: '#e0d8cf' }}
//           >
//             <div
//               className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
//               aria-hidden="true"
//             />
//             <div
//               className="w-8 h-8 mx-auto mb-2 rounded-md flex items-center justify-center shadow-sm"
//               style={{ backgroundColor: '#4a3728' }}
//             >
//               <TrendingUp className="w-4 h-4 text-white" />
//             </div>
//             <p
//               className="text-lg font-semibold mb-1"
//               style={{ color: '#4a3728' }}
//               aria-label="Employee growth percentage"
//             >
//               <CountUp end={5.2} />
//             </p>
//             <p className="text-xs font-medium" style={{ color: '#4a3728' }}>
//               Employee Growth
//             </p>
//             <p
//               className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               style={{ color: '#4a3728', opacity: '0.8' }}
//             >
//               Year-over-year increase
//             </p>
//             <div className="mt-2 h-1 bg-white rounded-full overflow-hidden">
//               <div
//                 className="h-full bg-gradient-to-r from-red-600 to-red-800 transition-all duration-1000"
//                 style={{ width: isVisible ? '52%' : '0%' }}
//               />
//             </div>
//           </div>

//           {/* Total Employees Card */}
//           <div
//             className="relative text-center p-4 rounded-xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 group"
//             style={{ backgroundColor: '#e0d8cf' }}
//           >
//             <div
//               className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
//               aria-hidden="true"
//             />
//             <div
//               className="w-8 h-8 mx-auto mb-2 rounded-md flex items-center justify-center shadow-sm"
//               style={{ backgroundColor: '#4a3728' }}
//             >
//               <Users className="w-4 h-4 text-white" />
//             </div>
//             <p
//               className="text-lg font-semibold mb-1"
//               style={{ color: '#4a3728' }}
//               aria-label="Total number of employees"
//             >
//               <CountUp end={15247} />
//             </p>
//             <p className="text-xs font-medium" style={{ color: '#4a3728' }}>
//               Total Employees
//             </p>
//             <p
//               className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               style={{ color: '#4a3728', opacity: '0.8' }}
//             >
//               Global workforce 2025
//             </p>
//           </div>

//           {/* Countries Card */}
//           <div
//             className="relative text-center p-4 rounded-xl hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 group"
//             style={{ backgroundColor: '#e0d8cf' }}
//           >
//             <div
//               className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
//               aria-hidden="true"
//             />
//             <div
//               className="w-8 h-8 mx-auto mb-2 rounded-md flex items-center justify-center shadow-sm"
//               style={{ backgroundColor: '#4a3728' }}
//             >
//               <Globe className="w-4 h-4 text-white" />
//             </div>
//             <p
//               className="text-lg font-semibold mb-1"
//               style={{ color: '#4a3728' }}
//               aria-label="Number of countries served"
//             >
//               <CountUp end={190} />
//               <span>+</span>
//             </p>
//             <p className="text-xs font-medium" style={{ color: '#4a3728' }}>
//               Countries
//             </p>
//             <p
//               className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//               style={{ color: '#4a3728', opacity: '0.8' }}
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
//         className="bg-white/80 backdrop-blur-md shadow-md border-b sticky top-0 z-50"
//         style={{ borderColor: '#e0d8cf' }}
//       >
//         <div className="max-w-7xl mx-auto px-4 py-3">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-2">
//               <div
//                 className="w-7 h-7 rounded-md flex items-center justify-center shadow-sm"
//                 style={{ backgroundColor: '#4a3728' }}
//               >
//                 <span className="text-white font-semibold text-xs">in</span>
//               </div>
//               <span className="text-lg font-semibold" style={{ color: '#4a3728' }}>
//                 LinkedIn
//               </span>
//             </div>
//             <div className="flex items-center space-x-2">
//               <button
//                 className="px-4 py-1.5 text-white rounded-full text-xs font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
//                 style={{ backgroundColor: '#4a3728' }}
//               >
//                 Sign in
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
//           {/* Main Content */}
//           <div className="lg:col-span-3 space-y-5">
//             {/* Banner Section */}
//             <div className="relative h-40 rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900 to-gray-700 mb-4">
//               <div className="absolute inset-0 opacity-20">
//                 <div className="grid grid-cols-12 gap-2 h-full p-4">
//                   {[...Array(60)].map((_, i) => (
//                     <div
//                       key={i}
//                       className="bg-white/30 rounded animate-pulse"
//                       style={{
//                         animationDelay: `${i * 0.1}s`,
//                         animationDuration: `${2 + Math.random()}s`,
//                       }}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent" />
//             </div>

//             {/* Profile Image Section */}
//             <div className="flex justify-center -mt-12 mb-3">
//               <div className="relative">
//                 <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-gray-800 to-black shadow-xl flex items-center justify-center border-3 border-white hover:scale-105 transition-transform duration-300">
//                   <span className="text-white font-bold text-3xl drop-shadow-md">N</span>
//                 </div>
//               </div>
//             </div>

//             {/* Company Info Section */}
//             <div className="bg-white rounded-2xl shadow-md overflow-hidden">
//               <div className="p-5 text-center">
//                 {/* Company Name & Badge */}
//                 <div className="flex items-center justify-center gap-2 mb-2">
//                   <h1 className="text-2xl font-bold text-gray-900">Netflix</h1>
//                   <span className="bg-gray-800 text-white px-2 py-0.5 rounded-full text-xs font-medium">
//                     VERIFIED
//                   </span>
//                 </div>

//                 {/* Location */}
//                 <div className="flex items-center justify-center gap-2 mb-3">
//                   <MapPin className="w-3 h-3 text-gray-600" />
//                   <p className="text-sm text-gray-600 leading-tight">
//                     Global Entertainment Leader • Los Gatos, CA
//                   </p>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex flex-wrap justify-center gap-2">
//                   <button
//                     className="bg-gray-900 text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 flex items-center gap-1 text-xs"
//                     aria-label="Follow Netflix"
//                   >
//                     <Users className="w-3 h-3" />
//                     Follow
//                   </button>
//                   <button
//                     className="border-2 border-gray-300 text-gray-700 px-5 py-2 rounded-full font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 flex items-center gap-1 text-xs"
//                     aria-label="Visit Netflix website"
//                   >
//                     <ExternalLink className="w-3 h-3" />
//                     Visit Website
//                   </button>
//                   <button
//                     className="border-2 border-gray-200 text-gray-600 px-4 py-2 rounded-full font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 text-xs"
//                     aria-label="More options"
//                   >
//                     More
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Stats Section */}
//             {/* <div className="bg-white rounded-2xl shadow-md p-5">
//               <h2 className="text-lg font-semibold text-gray-900 mb-3">Company Overview</h2>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                 <div className="text-center p-3 bg-gray-50 rounded-xl">
//                   <Users className="w-6 h-6 text-gray-700 mx-auto mb-1" />
//                   <div className="text-lg font-semibold text-gray-900">270M+</div>
//                   <div className="text-xs text-gray-600">Global Members</div>
//                 </div>
//                 <div className="text-center p-3 bg-gray-50 rounded-xl">
//                   <Globe className="w-6 h-6 text-gray-700 mx-auto mb-1" />
//                   <div className="text-lg font-semibold text-gray-900">190+</div>
//                   <div className="text-xs text-gray-600">Countries</div>
//                 </div>
//                 <div className="text-center p-3 bg-gray-50 rounded-xl">
//                   <Building className="w-6 h-6 text-gray-700 mx-auto mb-1" />
//                   <div className="text-lg font-semibold text-gray-900">15K+</div>
//                   <div className="text-xs text-gray-600">Employees</div>
//                 </div>
//               </div>
//             </div> */}

//             {/* Enhanced Navigation */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-3">
//               <div className="flex space-x-1 overflow-x-auto">
//                 {tabs.map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-4 py-1.5 rounded-full font-medium transition-all duration-300 whitespace-nowrap text-xs ${
//                       activeTab === tab ? 'text-white shadow-sm' : 'hover:bg-opacity-10'
//                     }`}
//                     style={
//                       activeTab === tab
//                         ? { backgroundColor: '#4a3728' }
//                         : { color: '#4a3728', backgroundColor: 'transparent' }
//                     }
//                     aria-label={`Switch to ${tab} tab`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced About Section */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-5">
//               <div className="flex items-center space-x-2 mb-3">
//                 <div
//                   className="w-6 h-6 rounded-md flex items-center justify-center"
//                   style={{ backgroundColor: '#4a3728' }}
//                 >
//                   <Building className="w-4 h-4 text-white" />
//                 </div>
//                 <h2 className="text-lg font-semibold" style={{ color: '#4a3728' }}>
//                   About Netflix
//                 </h2>
//               </div>

//               <div
//                 className="rounded-xl p-4 mb-3"
//                 style={{ backgroundColor: '#f6ede8' }}
//               >
//                 <p
//                   className="leading-snug text-sm"
//                   style={{ color: '#4a3728' }}
//                 >
//                   Netflix is one of the world s leading entertainment services with
//                   over 270 million paid memberships in more than 190 countries
//                   enjoying TV series, films, and games across a wide variety of
//                   genres and languages. Members can play, pause, and resume
//                   watching as much as they want, anytime, anywhere, and can change
//                   their plans at any time.
//                 </p>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
//                     className="flex items-center space-x-2 rounded-xl p-3 transition-colors"
//                     style={{ backgroundColor: '#e0d8cf' }}
//                   >
//                     <div
//                       className="w-8 h-8 rounded-md bg-white shadow-sm flex items-center justify-center"
//                     >
//                       <item.icon
//                         className="w-4 h-4"
//                         style={{ color: '#4a3728' }}
//                       />
//                     </div>
//                     <div>
//                       <p
//                         className="font-medium text-xs"
//                         style={{ color: '#4a3728' }}
//                       >
//                         {item.label}
//                       </p>
//                       <p
//                         className="text-xs"
//                         style={{ color: '#4a3728', opacity: '0.8' }}
//                       >
//                         {item.value}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Recent Posts */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-5">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center space-x-2">
//                   <div
//                     className="w-6 h-6 rounded-md flex items-center justify-center"
//                     style={{ backgroundColor: '#4a3728' }}
//                   >
//                     <MessageCircle className="w-4 h-4 text-white" />
//                   </div>
//                   <h2 className="text-lg font-semibold" style={{ color: '#4a3728' }}>
//                     Recent Posts
//                   </h2>
//                 </div>
//                 <div className="flex space-x-2">
//                   <button
//                     className="w-7 h-7 rounded-full transition-colors flex items-center justify-center"
//                     style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}
//                     aria-label="Previous post"
//                   >
//                     <span className="text-sm">←</span>
//                   </button>
//                   <button
//                     className="w-7 h-7 rounded-full transition-colors flex items-center justify-center"
//                     style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}
//                     aria-label="Next post"
//                   >
//                     <span className="text-sm">→</span>
//                   </button>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {[
//                   {
//                     id: 1,
//                     content:
//                       "🎬 Exciting news! We're expanding our content library with 50+ new original series coming this year. Stay tuned for more updates!",
//                     // image: 'NEW SERIES',
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
//                     // image: 'BEHIND THE SCENES',
//                     gradient: 'from-gray-800 to-gray-900',
//                     reactions: '1,892',
//                     comments: '67',
//                     reposts: '445',
//                     time: '1d',
//                   },
//                 ].map((post) => (
//                   <div
//                     key={post.id}
//                     className="border-2 rounded-xl p-4 hover:shadow-md transition-all duration-300 bg-white"
//                     style={{ borderColor: '#e0d8cf' }}
//                     onMouseEnter={() => setHoveredPost(post.id)}
//                     onMouseLeave={() => setHoveredPost(null)}
//                   >
//                     <div className="flex items-center mb-2">
//                       <div
//                         className="w-8 h-8 rounded-md mr-2 bg-gradient-to-br from-red-600 to-black flex items-center justify-center shadow-sm"
//                       >
//                         <span className="text-white font-semibold text-xs">N</span>
//                       </div>
//                       <div>
//                         <p className="font-semibold text-sm" style={{ color: '#4a3728' }}>
//                           Netflix
//                         </p>
//                         <p
//                           className="text-xs"
//                           style={{ color: '#4a3728', opacity: '0.8' }}
//                         >
//                           15M followers • {post.time}
//                         </p>
//                       </div>
//                     </div>

//                     <p
//                       className="mb-2 text-sm leading-snug"
//                       style={{ color: '#4a3728' }}
//                     >
//                       {post.content}
//                     </p>

//                     <div
//                       className={`w-full h-36 bg-gradient-to-r ${post.gradient} rounded-xl mb-2 flex items-center justify-center relative overflow-hidden group`}
//                     >
//                       {post.id === 1 ? (
//                         <div
//                           className="w-full h-full bg-cover bg-center relative"
//                           style={{
//                             backgroundImage:
//                               'url("https://images.unsplash.com/photo-1489599904593-130ba0a4934b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
//                           }}
//                         >
//                           <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                             <span className="text-white text-sm font-semibold drop-shadow-md">
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
//                           <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                             <span className="text-white text-sm font-semibold drop-shadow-md">
//                               {post.image}
//                             </span>
//                           </div>
//                         </div>
//                       )}
//                       {/* {hoveredPost === post.id && (
//                         <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300">
//                           <Play className="w-8 h-8 text-white" fill="white" />
//                         </div>
//                       )} */}
//                     </div>

//                     <div
//                       className="flex items-center justify-between pt-2 border-t"
//                       style={{ borderColor: '#e0d8cf' }}
//                     >
//                       <div className="flex items-center space-x-3">
//                         <button
//                           className="flex items-center space-x-1 transition-colors"
//                           style={{ color: '#4a3728', opacity: '0.8' }}
//                           aria-label={`Like post with ${post.reactions} reactions`}
//                         >
//                           <Heart className="w-3 h-3" />
//                           <span className="text-xs font-medium">{post.reactions}</span>
//                         </button>
//                         <button
//                           className="flex items-center space-x-1 transition-colors"
//                           style={{ color: '#4a3728', opacity: '0.8' }}
//                           aria-label={`Comment on post with ${post.comments} comments`}
//                         >
//                           <MessageCircle className="w-3 h-3" />
//                           <span className="text-xs font-medium">{post.comments}</span>
//                         </button>
//                         <button
//                           className="flex items-center space-x-1 transition-colors"
//                           style={{ color: '#4a3728', opacity: '0.8' }}
//                           aria-label={`Share post with ${post.reposts} reposts`}
//                         >
//                           <Share2 className="w-3 h-3" />
//                           <span className="text-xs font-medium">{post.reposts}</span>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Enhanced Job Openings */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-5">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center space-x-2">
//                   <div
//                     className="w-6 h-6 rounded-md flex items-center justify-center"
//                     style={{ backgroundColor: '#4a3728' }}
//                   >
//                     <Briefcase className="w-4 h-4 text-white" />
//                   </div>
//                   <h2 className="text-lg font-semibold" style={{ color: '#4a3728' }}>
//                     Job Openings
//                   </h2>
//                 </div>
//                 <a
//                   href="#"
//                   className="text-xs font-medium transition-colors flex items-center space-x-1"
//                   style={{ color: '#4a3728' }}
//                   aria-label="View all job openings"
//                 >
//                   <span>View all 248 jobs</span>
//                   <ChevronRight className="w-3 h-3" />
//                 </a>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
//                     className="border-2 rounded-xl p-3 hover:shadow-md transition-all duration-300 bg-white"
//                     style={{ borderColor: '#e0d8cf' }}
//                   >
//                     <div className="flex items-start space-x-2">
//                       <div
//                         className="w-8 h-8 rounded-md flex items-center justify-center"
//                         style={{ backgroundColor: '#f6ede8' }}
//                       >
//                         <Briefcase
//                           className="w-4 h-4"
//                           style={{ color: '#4a3728' }}
//                         />
//                       </div>
//                       <div className="flex-1">
//                         <h3
//                           className="font-semibold text-sm mb-1"
//                           style={{ color: '#4a3728' }}
//                         >
//                           {job.title}
//                         </h3>
//                         <div
//                           className="flex items-center space-x-2 text-xs mb-2"
//                           style={{ color: '#4a3728', opacity: '0.8' }}
//                         >
//                           <span className="flex items-center space-x-1">
//                             <MapPin className="w-3 h-3" />
//                             <span>{job.location}</span>
//                           </span>
//                           <span className="flex items-center space-x-1">
//                             <Calendar className="w-3 h-3" />
//                             <span>{job.posted}</span>
//                           </span>
//                         </div>
//                         <div className="flex items-center justify-between">
//                           <span
//                             className="px-2 py-0.5 rounded-full text-xs font-medium"
//                             style={{
//                               backgroundColor: '#e0d8cf',
//                               color: '#4a3728',
//                             }}
//                           >
//                             {job.type}
//                           </span>
//                           <button
//                             className="text-xs font-medium transition-colors"
//                             style={{ color: '#4a3728' }}
//                             aria-label={`Apply for ${job.title}`}
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
//           <div className="space-y-4">
//             {/* Placeholder for Sidebar Content */}
//             <div
//               className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-5"
//               style={{ backgroundColor: '#f6ede8' }}
//             >
//               <h2 className="text-lg font-semibold mb-3" style={{ color: '#4a3728' }}>
//                 Related Companies
//               </h2>
//               <div className="space-y-3">
//                 {['HBO', 'Disney+', 'Amazon Prime'].map((company, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center space-x-2 p-2 rounded-xl hover:bg-opacity-80 transition-colors"
//                     style={{ backgroundColor: '#e0d8cf' }}
//                   >
//                     <div
//                       className="w-8 h-8 rounded-md flex items-center justify-center"
//                       style={{ backgroundColor: '#4a3728' }}
//                     >
//                       <span className="text-white font-semibold text-xs">
//                         {company[0]}
//                       </span>
//                     </div>
//                     <p className="text-sm font-medium" style={{ color: '#4a3728' }}>
//                       {company}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div
//               className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-5"
//               style={{ backgroundColor: '#f6ede8' }}
//             >
//               <h2 className="text-lg font-semibold mb-3" style={{ color: '#4a3728' }}>
//                 People Also Viewed
//               </h2>
//               <div className="space-y-3">
//                 {['Content Creator', 'Tech Lead', 'Marketing Specialist'].map((role, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center space-x-2 p-2 rounded-xl hover:bg-opacity-80 transition-colors"
//                     style={{ backgroundColor: '#e0d8cf' }}
//                   >
//                     <div
//                       className="w-8 h-8 rounded-md flex items-center justify-center"
//                       style={{ backgroundColor: '#4a3728' }}
//                     >
//                       <Users className="w-4 h-4 text-white" />
//                     </div>
//                     <p className="text-sm font-medium" style={{ color: '#4a3728' }}>
//                       {role}
//                     </p>
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

// export default EnhancedNetflixProfile;