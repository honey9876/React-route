/* eslint-disable no-unused-vars */
// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Calendar, Star, Target, ChevronRight, Bookmark, Users, Clock, MapPin, Filter, Search, Zap, Globe, Heart, Share2, Bell, Play, Mic, Video, Sparkles, TrendingUp, Award, Gift } from 'lucide-react';

// const EventsPage = () => {
//   const [savedEvents, setSavedEvents] = useState(new Set());
//   const [filter, setFilter] = useState('all');
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [hoveredCard, setHoveredCard] = useState(null);

//   useEffect(() => {
//     setTimeout(() => setIsLoading(false), 1500);
//   }, []);
//   const toggleSaveEvent = (eventId, e) => {
//     e.stopPropagation();
//     setSavedEvents(prev => {
//       const newSet = new Set(prev);
//       if (newSet.has(eventId)) {
//         newSet.delete(eventId);
//       } else {
//         newSet.add(eventId);
//       }
//       return newSet;
//     });
//   };
//   const yourEvents = [
//     {
//       id: 1,
//       date: "Sat, Mar 8, 2025, 7:00 PM",
//       title: "ElevateHR: From Potential to Power",
//       type: "Community",
//       category: "Networking",
//       image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80",
//       location: "Virtual",
//       virtual: true,
//       price: "Free",
//       trending: true,
//       attendees: 124,
//       rating: 4.8,
//       tags: ["HR", "Leadership", "Growth"]
//     },
//     {
//       id: 2,
//       date: "Sun, Apr 16, 2025, 6:00 AM",
//       title: "Cloud Community Days",
//       type: "Technology",
//       category: "Conference",
//       image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
//       location: "Mumbai, India",
//       virtual: false,
//       price: "₹2,500",
//       trending: false,
//       attendees: 89,
//       rating: 4.6,
//       tags: ["Cloud", "DevOps", "AWS"]
//     },
//     {
//       id: 3,
//       date: "Sat, Feb 25, 2025, 1:30 PM",
//       title: "Microsoft Power BI Summit",
//       type: "Training",
//       category: "Workshop",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
//       location: "Bengaluru, India",
//       virtual: true,
//       price: "₹1,200",
//       trending: true,
//       attendees: 67,
//       rating: 4.9,
//       tags: ["Analytics", "Microsoft", "Data"]
//     }
//   ];

//   const premiumEvents = [
//     {
//       id: 4,
//       date: "Mon, Jun 25, 2025, 11:30 PM",
//       title: "Get Hired: AI Career Summit",
//       type: "Career Development",
//       category: "Networking",
//       image: "https://images.unsplash.com/photo-1522202176988-66273cf2fd55?auto=format&fit=crop&w=600&q=80",
//       location: "Virtual",
//       virtual: true,
//       price: "₹4,999",
//       exclusive: true,
//       attendees: 156,
//       rating: 4.9,
//       tags: ["AI", "Career", "Jobs"]
//     },
//     {
//       id: 5,
//       date: "Thu, Jul 17, 2025, 6:30 PM",
//       title: "Optimize Your Digital Presence",
//       type: "Professional Growth",
//       category: "Workshop",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
//       location: "Delhi, India",
//       virtual: false,
//       price: "₹3,500",
//       exclusive: true,
//       attendees: 78,
//       rating: 4.7,
//       tags: ["Digital Marketing", "Branding", "Social Media"]
//     },
//     {
//       id: 6,
//       date: "Mon, Jul 21, 2025, 11:30 PM",
//       title: "AI-Powered Career Coaching",
//       type: "Career Development",
//       category: "Coaching",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
//       location: "Virtual",
//       virtual: true,
//       price: "₹6,999",
//       exclusive: true,
//       attendees: 203,
//       rating: 4.8,
//       tags: ["AI Coaching", "Career", "Mentorship"]
//     }
//   ];

//   const recommendedEvents = [
//     {
//       id: 7,
//       date: "Wed, Jun 25, 2025, 9:30 PM",
//       title: "IMPACT & INSPIRE Women's Networking",
//       organizer: "FORUM",
//       attendees: 142,
//       category: "Networking",
//       image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=600&q=80",
//       theme: "IMPACT",
//       location: "Virtual",
//       virtual: true,
//       price: "Free",
//       rating: 4.8,
//       liveStream: true,
//       tags: ["Women", "Networking", "Empowerment"]
//     },
//     {
//       id: 8,
//       date: "Wed, Jun 25, 2025, 12:30 PM",
//       title: "Global AI Innovation Summit",
//       organizer: "Tech Innovators",
//       attendees: 275,
//       category: "Conference",
//       image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80",
//       theme: "INNOVATION",
//       location: "Singapore",
//       virtual: false,
//       price: "₹8,500",
//       rating: 4.9,
//       liveStream: false,
//       tags: ["AI", "Innovation", "Technology"]
//     },
//     {
//       id: 9,
//       date: "Wed, Jun 25, 2025, 3:00 PM",
//       title: "Green Tech Hackathon",
//       organizer: "Eco Warriors",
//       attendees: 89,
//       category: "Hackathon",
//       image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
//       theme: "SUSTAINABILITY",
//       location: "Pune, India",
//       virtual: false,
//       price: "₹500",
//       rating: 4.6,
//       liveStream: true,
//       tags: ["Green Tech", "Sustainability", "Hackathon"]
//     }
//   ];

//   const allEvents = [...yourEvents, ...premiumEvents, ...recommendedEvents];
//   const filteredEvents = allEvents.filter(event => {
//     const matchesFilter = filter === 'all' || event.category === filter;
//     const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          (event.tags && event.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
//     return matchesFilter && matchesSearch;
//   });

//   const categories = ['all', ...new Set(allEvents.map(event => event.category))];

//   const cardVariants = {
//     hidden: { opacity: 0, y: 50, scale: 0.9 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       scale: 1,
//       transition: { 
//         duration: 0.6, 
//         ease: [0.25, 0.25, 0, 1],
//         type: "spring",
//         stiffness: 100
//       } 
//     },
//     hover: { 
//       scale: 1.05, 
//       y: -10,
//       boxShadow: "0px 25px 50px rgba(74, 55, 40, 0.2)",
//       transition: { duration: 0.3, ease: "easeOut" }
//     }
//   };

//   const sectionVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1, 
//       transition: { 
//         staggerChildren: 0.15,
//         delayChildren: 0.1
//       } 
//     }
//   };

//   const floatingVariants = {
//     animate: {
//       y: [0, -20, 0],
//       transition: {
//         duration: 4,
//         repeat: Infinity,
//         ease: "easeInOut"
//       }
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-[#f6ede8] to-[#e0d8cf] flex items-center justify-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="text-center"
//         >
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//             className="w-16 h-16 border-4 border-[#4a3728] border-t-transparent rounded-full mx-auto mb-4"
//           />
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.5 }}
//             className="text-[#4a3728] text-lg font-medium"
//           >
//             Loading amazing events...
//           </motion.p>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#f6ede8] to-[#e0d8cf] text-[#4a3728] font-sans">
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         {/* Hero Banner */}
//         <motion.div
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl"
//         >
//           <div
//             className="h-80 bg-cover bg-center relative"
//             style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1540575467063-9f7796d843ec?auto=format&fit=crop&w=1200&q=80)' }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-[#4a3728]/80 to-[#4a3728]/40" />
            
//             {/* Floating Elements */}
//             <motion.div
//               variants={floatingVariants}
//               animate="animate"
//               className="absolute top-10 right-10 w-6 h-6 bg-white/20 rounded-full"
//             />
//             <motion.div
//               variants={floatingVariants}
//               animate="animate"
//               style={{ animationDelay: "1s" }}
//               className="absolute top-20 right-32 w-4 h-4 bg-white/30 rounded-full"
//             />
//             <motion.div
//               variants={floatingVariants}
//               animate="animate"
//               style={{ animationDelay: "2s" }}
//               className="absolute bottom-20 left-20 w-8 h-8 bg-white/15 rounded-full"
//             />
            
//             <div className="relative h-full flex items-center justify-center text-center text-white px-6">
//               <div className="max-w-4xl">
//                 <motion.div
//                   initial={{ scale: 0.8, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.8, delay: 0.2 }}
//                   className="flex items-center justify-center gap-2 mb-4"
//                 >
//                   <Sparkles className="w-8 h-8 text-yellow-300" />
//                   <span className="text-yellow-300 font-semibold text-lg">Events 2025</span>
//                   <Sparkles className="w-8 h-8 text-yellow-300" />
//                 </motion.div>
                
//                 <motion.h1
//                   className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
//                   initial={{ scale: 0.8 }}
//                   animate={{ scale: 1 }}
//                   transition={{ duration: 0.8, delay: 0.3 }}
//                 >
//                   Discover Events That 
//                   <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
//                     Shape Your Future
//                   </span>
//                 </motion.h1>
                
//                 <motion.p
//                   className="text-xl max-w-3xl mx-auto mb-8 text-gray-200"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.8, delay: 0.5 }}
//                 >
//                   Join cutting-edge AI conferences, virtual workshops, sustainable hackathons, and exclusive networking events designed for the future of work.
//                 </motion.p>
                
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.8, delay: 0.7 }}
//                   className="flex flex-wrap gap-4 justify-center"
//                 >
//                   <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
//                     <TrendingUp className="w-5 h-5 text-green-300" />
//                     <span className="text-sm font-medium">50+ AI Events</span>
//                   </div>
//                   <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
//                     <Globe className="w-5 h-5 text-blue-300" />
//                     <span className="text-sm font-medium">Global Community</span>
//                   </div>
//                   <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
//                     <Award className="w-5 h-5 text-purple-300" />
//                     <span className="text-sm font-medium">Premium Access</span>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Enhanced Search and Filter */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mb-12 bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/30"
//         >
//           <div className="flex flex-col lg:flex-row gap-6">
//             <div className="relative flex-1">
//               <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4a3728]" />
//               <input
//                 type="text"
//                 placeholder="Search events, locations, or tags..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#f6ede8] text-[#4a3728] placeholder-[#4a3728]/60 focus:outline-none focus:ring-3 focus:ring-[#4a3728]/30 border-2 border-transparent focus:border-[#4a3728]/20 transition-all duration-300 text-base"
//               />
//             </div>
            
//             <div className="flex items-center gap-3 overflow-x-auto pb-2">
//               <Filter className="w-5 h-5 text-[#4a3728] flex-shrink-0" />
//               {categories.map(category => (
//                 <motion.button
//                   key={category}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setFilter(category)}
//                   className={`px-6 py-3 rounded-2xl font-medium whitespace-nowrap transition-all duration-300 text-sm ${
//                     filter === category
//                       ? 'bg-[#4a3728] text-white shadow-lg'
//                       : 'bg-[#4a3728]/10 text-[#4a3728] hover:bg-[#4a3728]/20 hover:shadow-md'
//                   }`}
//                 >
//                   {category.charAt(0).toUpperCase() + category.slice(1)}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* Quick Stats */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="flex flex-wrap gap-6 justify-center mt-6 pt-6 border-t border-[#4a3728]/10"
//           >
//             {[
//               { icon: Calendar, value: `${filteredEvents.length}`, label: "Events Found" },
//               { icon: Users, value: "2.5K+", label: "Total Attendees" },
//               { icon: Globe, value: "12", label: "Cities" },
//               { icon: Zap, value: "85%", label: "Virtual Events" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 + index * 0.1 }}
//                 className="flex items-center gap-3 bg-white/60 px-4 py-2 rounded-xl"
//               >
//                 <stat.icon className="w-5 h-5 text-[#4a3728]" />
//                 <div>
//                   <div className="text-lg font-bold text-[#4a3728]">{stat.value}</div>
//                   <div className="text-xs text-[#4a3728]/70">{stat.label}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         {/* Your Events Section */}
//         <motion.div
//           variants={sectionVariants}
//           initial="hidden"
//           animate="visible"
//           className="mb-16 bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20"
//         >
//           <div className="flex justify-between items-center mb-10">
//             <div className="flex items-center gap-4">
//               <motion.div
//                 className="w-12 h-12 bg-gradient-to-r from-[#4a3728] to-[#4a3728]/80 rounded-full flex items-center justify-center shadow-lg"
//                 whileHover={{ rotate: 360, scale: 1.1 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Calendar className="w-6 h-6 text-white" />
//               </motion.div>
//               <div>
//                 <h2 className="text-3xl font-bold text-[#4a3728]">Your Events</h2>
//                 <p className="text-[#4a3728]/70 text-sm mt-1">Events you re attending</p>
//               </div>
//             </div>
//             <motion.a
//               href="#"
//               className="flex items-center gap-2 text-[#4a3728] bg-[#4a3728]/10 px-6 py-3 rounded-2xl font-medium hover:bg-[#4a3728] hover:text-white transition-all duration-300 shadow-md"
//               whileHover={{ x: 5 }}
//             >
//               Show All
//               <ChevronRight className="w-5 h-5" />
//             </motion.a>
//           </div>
          
//           <AnimatePresence>
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//               variants={sectionVariants}
//             >
//               {yourEvents.map((event, index) => (
//                 <motion.div
//                   key={event.id}
//                   variants={cardVariants}
//                   initial="hidden"
//                   animate="visible"
//                   whileHover="hover"
//                   onHoverStart={() => setHoveredCard(event.id)}
//                   onHoverEnd={() => setHoveredCard(null)}
//                   className="bg-white/90 rounded-3xl overflow-hidden shadow-xl border border-white/30 cursor-pointer relative group"
//                 >
//                   {event.trending && (
//                     <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
//                       <TrendingUp className="w-3 h-3" />
//                       Trending
//                     </div>
//                   )}
                  
//                   <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${event.image})` }}>
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#4a3728]/80 to-transparent group-hover:from-[#4a3728]/90 transition-colors duration-300" />
                    
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: hoveredCard === event.id ? 1 : 0 }}
//                       className="absolute inset-0 bg-[#4a3728]/20 backdrop-blur-sm flex items-center justify-center"
//                     >
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="bg-white/90 text-[#4a3728] px-6 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
//                       >
//                         <Play className="w-4 h-4" />
//                         View Details
//                       </motion.button>
//                     </motion.div>
                    
//                     <div className="absolute top-4 right-4 flex gap-2">
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={(e) => toggleSaveEvent(event.id, e)}
//                         className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
//                           savedEvents.has(event.id)
//                             ? 'bg-red-500 text-white'
//                             : 'bg-white/20 text-white hover:bg-white/30'
//                         }`}
//                       >
//                         <Heart className={`w-4 h-4 ${savedEvents.has(event.id) ? 'fill-current' : ''}`} />
//                       </motion.button>
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
//                       >
//                         <Share2 className="w-4 h-4" />
//                       </motion.button>
//                     </div>
//                   </div>
                  
//                   <div className="p-6">
//                     <div className="flex items-center gap-2 text-sm text-[#4a3728]/70 font-medium mb-3">
//                       <Clock className="w-4 h-4" />
//                       {event.date}
//                       <MapPin className="w-4 h-4 ml-2" />
//                       {event.location}
//                       {event.virtual && (
//                         <span className="ml-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
//                           Virtual
//                         </span>
//                       )}
//                     </div>
                    
//                     <h3 className="text-lg font-bold text-[#4a3728] mb-3 leading-tight">{event.title}</h3>
                    
//                     <div className="flex items-center justify-between mb-4">
//                       <span className="inline-block bg-[#4a3728]/10 text-[#4a3728] px-3 py-1 rounded-full text-sm font-medium">
//                         {event.type}
//                       </span>
//                       <div className="flex items-center gap-1 text-sm text-[#4a3728]/70">
//                         <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                         {event.rating}
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center justify-between text-sm">
//                       <div className="flex items-center gap-1 text-[#4a3728]/70">
//                         <Users className="w-4 h-4" />
//                         {event.attendees} attendees
//                       </div>
//                       <div className="font-semibold text-[#4a3728]">{event.price}</div>
//                     </div>
                    
//                     <div className="flex flex-wrap gap-1 mt-3">
//                       {event.tags.map((tag, tagIndex) => (
//                         <span key={tagIndex} className="text-xs bg-[#4a3728]/5 text-[#4a3728]/70 px-2 py-1 rounded-lg">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </motion.div>

//         {/* Premium Events Section */}
//         <motion.div
//           variants={sectionVariants}
//           initial="hidden"
//           animate="visible"
//           className="mb-16 bg-gradient-to-r from-white/70 to-white/50 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20"
//         >
//           <div className="flex justify-between items-center mb-10">
//             <div className="flex items-center gap-4">
//               <motion.div
//                 className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg"
//                 whileHover={{ rotate: 360, scale: 1.1 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Star className="w-6 h-6 text-white" />
//               </motion.div>
//               <div>
//                 <h2 className="text-3xl font-bold text-[#4a3728] flex items-center gap-2">
//                   Premium Exclusive
//                   <Gift className="w-6 h-6 text-amber-500" />
//                 </h2>
//                 <p className="text-[#4a3728]/70 text-sm mt-1">High-value events for professionals</p>
//               </div>
//             </div>
//             <motion.a
//               href="#"
//               className="flex items-center gap-2 text-white bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
//               whileHover={{ x: 5, scale: 1.02 }}
//             >
//               Unlock 30+ Premium Events
//               <ChevronRight className="w-5 h-5" />
//             </motion.a>
//           </div>
          
//           <AnimatePresence>
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//               variants={sectionVariants}
//             >
//               {premiumEvents.map((event, index) => (
//                 <motion.div
//                   key={event.id}
//                   variants={cardVariants}
//                   initial="hidden"
//                   animate="visible"
//                   whileHover="hover"
//                   onHoverStart={() => setHoveredCard(event.id)}
//                   onHoverEnd={() => setHoveredCard(null)}
//                   className="bg-white/90 rounded-3xl overflow-hidden shadow-xl border-2 border-gradient-to-r from-amber-400 to-orange-400 cursor-pointer relative group"
//                 >
//                   <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${event.image})` }}>
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#4a3728]/80 to-transparent group-hover:from-[#4a3728]/90 transition-colors duration-300" />
                    
//                     <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
//                       <Zap className="w-3 h-3" />
//                       PREMIUM
//                     </div>
                    
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: hoveredCard === event.id ? 1 : 0 }}
//                       className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm flex items-center justify-center"
//                     >
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
//                       >
//                         <Zap className="w-4 h-4" />
//                         Unlock Now
//                       </motion.button>
//                     </motion.div>
                    
//                     <div className="absolute top-4 right-4 flex gap-2">
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={(e) => toggleSaveEvent(event.id, e)}
//                         className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
//                           savedEvents.has(event.id)
//                             ? 'bg-red-500 text-white'
//                             : 'bg-white/20 text-white hover:bg-white/30'
//                         }`}
//                       >
//                         <Heart className={`w-4 h-4 ${savedEvents.has(event.id) ? 'fill-current' : ''}`} />
//                       </motion.button>
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm transition-all duration-300"
//                       >
//                         <Share2 className="w-4 h-4" />
//                       </motion.button>
//                     </div>
//                   </div>
                  
//                   <div className="p-6">
//                     <div className="flex items-center gap-2 text-sm text-[#4a3728]/70 font-medium mb-3">
//                       <Clock className="w-4 h-4" />
//                       {event.date}
//                       <MapPin className="w-4 h-4 ml-2" />
//                       {event.location}
//                       {event.virtual && (
//                         <span className="ml-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
//                           Virtual
//                         </span>
//                       )}
//                     </div>
                    
//                     <h3 className="text-lg font-bold text-[#4a3728] mb-3 leading-tight pr-12">{event.title}</h3>
                    
//                     <div className="flex items-center justify-between mb-4">
//                       <span className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
//                         {event.type}
//                       </span>
//                       <div className="flex items-center gap-1 text-sm text-[#4a3728]/70">
//                         <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                         {event.rating}
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center justify-between text-sm">
//                       <div className="flex items-center gap-1 text-[#4a3728]/70">
//                         <Users className="w-4 h-4" />
//                         {event.attendees} attendees
//                       </div>
//                       <div className="font-bold text-amber-600">{event.price}</div>
//                     </div>
                    
//                     <div className="flex flex-wrap gap-1 mt-3">
//                       {event.tags.map((tag, tagIndex) => (
//                         <span key={tagIndex} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-lg border border-amber-200">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </motion.div>

//         {/* Recommended Events Section */}
//         <motion.div
//           variants={sectionVariants}
//           initial="hidden"
//           animate="visible"
//           className="mb-16 bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/20"
//         >
//           <div className="flex justify-between items-center mb-10">
//             <div className="flex items-center gap-4">
//               <motion.div
//                 className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg"
//                 whileHover={{ rotate: 360, scale: 1.1 }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <Target className="w-6 h-6 text-white" />
//               </motion.div>
//               <div>
//                 <h2 className="text-3xl font-bold text-[#4a3728]">Recommended for You</h2>
//                 <p className="text-[#4a3728]/70 text-sm mt-1">Curated based on your interests</p>
//               </div>
//             </div>
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="flex items-center gap-2 text-[#4a3728] bg-[#4a3728]/10 px-6 py-3 rounded-2xl font-medium hover:bg-[#4a3728] hover:text-white transition-all duration-300 shadow-md"
//             >
//               <Bell className="w-5 h-5" />
//               Get Notifications
//             </motion.button>
//           </div>
          
//           <AnimatePresence>
//             <motion.div
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//               variants={sectionVariants}
//             >
//               {recommendedEvents.map((event) => (
//                 <motion.div
//                   key={event.id}
//                   variants={cardVariants}
//                   initial="hidden"
//                   animate="visible"
//                   whileHover="hover"
//                   onHoverStart={() => setHoveredCard(event.id)}
//                   onHoverEnd={() => setHoveredCard(null)}
//                   className="bg-white/90 rounded-3xl overflow-hidden shadow-xl border border-white/30 cursor-pointer relative group"
//                 >
//                   <div className="h-52 bg-cover bg-center relative" style={{ backgroundImage: `url(${event.image})` }}>
//                     <div className="absolute inset-0 bg-gradient-to-t from-[#4a3728]/90 to-transparent group-hover:from-[#4a3728]/95 transition-colors duration-300" />
                    
//                     {event.liveStream && (
//                       <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse">
//                         <Video className="w-3 h-3" />
//                         LIVE
//                       </div>
//                     )}
                    
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         className="text-white"
//                       >
//                         <div className="text-2xl font-bold mb-2">{event.theme}</div>
//                         <div className="text-sm opacity-80">{event.organizer}</div>
//                       </motion.div>
//                     </div>
                    
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: hoveredCard === event.id ? 1 : 0 }}
//                       className="absolute inset-0 bg-[#4a3728]/20 backdrop-blur-sm flex items-center justify-center"
//                     >
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         className="bg-white/90 text-[#4a3728] px-6 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2"
//                       >
//                         <Play className="w-4 h-4" />
//                         Join Event
//                       </motion.button>
//                     </motion.div>
                    
//                     <div className="absolute top-4 right-4 flex gap-2">
//                       <motion.button
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={(e) => toggleSaveEvent(event.id, e)}
//                         className={`p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
//                           savedEvents.has(event.id)
//                             ? 'bg-red-500 text-white'
//                             : 'bg-white/20 text-white hover:bg-white/30'
//                         }`}
//                       >
//                         <Heart className={`w-4 h-4 ${savedEvents.has(event.id) ? 'fill-current' : ''}`} />
//                       </motion.button>
//                     </div>
//                   </div>
                  
//                   <div className="p-6">
//                     <div className="flex items-center gap-2 text-sm text-[#4a3728]/70 font-medium mb-3">
//                       <Clock className="w-4 h-4" />
//                       {event.date}
//                       <MapPin className="w-4 h-4 ml-2" />
//                       {event.location}
//                       {event.virtual && (
//                         <span className="ml-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
//                           Virtual
//                         </span>
//                       )}
//                     </div>
                    
//                     <h3 className="text-xl font-bold text-[#4a3728] mb-4 leading-tight">{event.title}</h3>
                    
//                     <div className="flex items-center justify-between text-sm text-[#4a3728]/70 mb-4">
//                       <div className="flex items-center gap-1">
//                         <Users className="w-4 h-4" />
//                         {event.attendees} attendees
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                         {event.rating}
//                       </div>
//                       <div className="font-semibold text-[#4a3728]">{event.price}</div>
//                     </div>
                    
//                     <div className="flex flex-wrap gap-1 mb-4">
//                       {event.tags.map((tag, tagIndex) => (
//                         <span key={tagIndex} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-lg border border-purple-200">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
                    
//                     <div className="flex gap-3">
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
//                       >
//                         Register Now
//                       </motion.button>
//                       <motion.button
//                         whileHover={{ scale: 1.2 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={(e) => toggleSaveEvent(event.id, e)}
//                         className={`p-3 rounded-2xl border-2 transition-all duration-300 ${
//                           savedEvents.has(event.id)
//                             ? 'bg-[#4a3728] border-[#4a3728] text-white'
//                             : 'bg-[#4a3728]/10 border-[#4a3728]/20 text-[#4a3728] hover:bg-[#4a3728]/20'
//                         }`}
//                       >
//                         <Bookmark className="w-5 h-5" />
//                       </motion.button>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </AnimatePresence>
//         </motion.div>

//         {/* Enhanced Stats Section */}
//         <motion.div
//           variants={sectionVariants}
//           initial="hidden"
//           animate="visible"
//           className="mb-16"
//         >
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-3xl font-bold text-center text-[#4a3728] mb-8"
//           >
//             Event Statistics 2025
//           </motion.h2>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { icon: Calendar, value: "150+", label: "Total Events", color: "from-blue-500 to-cyan-500" },
//               { icon: Users, value: "12.5K", label: "Active Members", color: "from-purple-500 to-pink-500" },
//               { icon: Globe, value: "25+", label: "Countries", color: "from-green-500 to-emerald-500" },
//               { icon: Award, value: "95%", label: "Satisfaction Rate", color: "from-yellow-500 to-orange-500" }
//             ].map((stat, index) => (
//               <motion.div
//                 key={index}
//                 variants={cardVariants}
//                 className="bg-white/90 backdrop-blur-md rounded-3xl p-8 text-center shadow-2xl border border-white/30 relative overflow-hidden group"
//               >
//                 <motion.div
//                   className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
//                 />
                
//                 <motion.div
//                   className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}
//                   whileHover={{ rotate: 360, scale: 1.1 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <stat.icon className="w-8 h-8 text-white" />
//                 </motion.div>
                
//                 <motion.div
//                   className="text-4xl font-bold text-[#4a3728] mb-2"
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ delay: 0.2 * index, type: "spring", stiffness: 200 }}
//                 >
//                   {stat.value}
//                 </motion.div>
                
//                 <div className="text-[#4a3728]/70 font-medium">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Call to Action Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-gradient-to-r from-[#4a3728] to-[#4a3728]/80 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
//         >
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20"
//             animate={{
//               backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//             }}
//             transition={{
//               duration: 5,
//               repeat: Infinity,
//               ease: "linear"
//             }}
//           />
          
//           <div className="relative z-10">
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.6 }}
//               className="flex items-center justify-center gap-2 mb-6"
//             >
//               <Sparkles className="w-8 h-8 text-yellow-300" />
//               <Sparkles className="w-6 h-6 text-yellow-300" />
//               <Sparkles className="w-8 h-8 text-yellow-300" />
//             </motion.div>
            
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="text-4xl md:text-5xl font-bold mb-6"
//             >
//               Ready to Transform Your Career?
//             </motion.h2>
            
//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="text-xl mb-8 max-w-3xl mx-auto text-gray-200"
//             >
//               Join thousands of professionals attending cutting-edge events in AI, sustainability, and digital transformation. Your next breakthrough is just one event away.
//             </motion.p>
            
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center"
//             >


//               <motion.button
//                 whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(255,255,255,0.3)" }}
//                 whileTap={{ scale: 0.95 }}
//                 className="bg-white text-[#4a3728] px-8 py-4 rounded-2xl font-bold text-lg shadow-xl flex items-center gap-2 justify-center"
//               >
//                 <Zap className="w-6 h-6" />
//                 Explore All Events
//               </motion.button>
              
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#4a3728] transition-all duration-300 flex items-center gap-2 justify-center"
//               >
//                 <Bell className="w-6 h-6" />
//                 Get Event Alerts
//               </motion.button>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default EventsPage;