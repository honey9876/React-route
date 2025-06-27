// import  { useState } from 'react';

// import { Heart, MessageCircle, Share, Send, MoreHorizontal, Users, Check, Bell, Search, Home, Briefcase, Settings, MapPin, Calendar } from 'lucide-react';

// const ProfessionalNetwork = () => {
//   const [activeTab, setActiveTab] = useState('Posts');
//   const [likes, setLikes] = useState(43);
//   const [isLiked, setIsLiked] = useState(false);

//   const handleLike = () => {
//     setIsLiked(!isLiked);
//     setLikes(isLiked ? likes - 1 : likes + 1);
//   };

//   const connections = [
//     {
//       name: "Ankit Patidar",
//       title: "Student at Oriental Group of Institutes",
//       avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
//       mutualConnections: 12
//     },
//     {
//       name: "Shikha Meena", 
//       title: "undergraduate CSE-AIML || Python ||",
//       avatar: "https://images.unsplash.com/photo-1494790108755-2616b9c1a394?w=50&h=50&fit=crop&crop=face",
//       mutualConnections: 8
//     },
//     {
//       name: "Shashank Mishra",
//       title: "Attended Oriental Group of Institutes",
//       verified: true,
//       avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
//       mutualConnections: 15
//     },
//     {
//       name: "RAJSHEKHAR MISHRA",
//       title: "AN IT STUDENT AT ORIENTAL INSTITUTE OF SCIENCE",
//       verified: true,
//       status: "pending",
//       avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
//       mutualConnections: 6
//     }
//   ];

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: '#f6ede8' }}>
//       {/* Top Navigation */}
//       <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/30 shadow-sm">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center space-x-8">
//               <h1 className="text-2xl font-bold" style={{ color: '#4a3728' }}>
//                 NetworkHub
//               </h1>
//               <nav className="hidden md:flex space-x-6">
//                 <Home className="w-6 h-6 cursor-pointer" style={{ color: '#4a3728' }} />
//                 <Users className="w-6 h-6 text-gray-500 cursor-pointer transition-colors hover:opacity-80" style={{ color: '#4a3728' }} />
//                 <Briefcase className="w-6 h-6 text-gray-500 cursor-pointer transition-colors hover:opacity-80" style={{ color: '#4a3728' }} />
//                 <Bell className="w-6 h-6 text-gray-500 cursor-pointer transition-colors hover:opacity-80" style={{ color: '#4a3728' }} />
//               </nav>
//             </div>
            
//             <div className="flex items-center space-x-4">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input 
//                   type="text" 
//                   placeholder="Search network..."
//                   className="pl-10 pr-4 py-2 w-80 border border-gray-200 rounded-full focus:outline-none focus:ring-2 bg-white/80"
//                   style={{ '--tw-ring-color': '#e0d8cf' }}
//                 />
//               </div>
//               <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: '#4a3728' }}>
//                 HS
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <div className="flex gap-8">
          
//           {/* Left Column - Profile & Stats */}
//           <div className="w-80 space-y-6">
            
//             {/* Square Profile Card */}
//             <div className="w-full aspect-square bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 flex flex-col">
//               <div className="flex-1 flex flex-col items-center justify-center text-center">
//                 <div className="w-24 h-24 rounded-2xl flex items-center justify-center mb-4 shadow-lg text-white" style={{ backgroundColor: '#4a3728' }}>
//                   <span className="text-3xl font-bold">HS</span>
//                 </div>
                
//                 <h2 className="text-xl font-bold mb-2" style={{ color: '#4a3728' }}>
//                   Honey Sharma
//                 </h2>
//                 <p className="text-sm font-medium mb-1" style={{ color: '#4a3728' }}>
//                   Co-Founder @Throne8
//                 </p>
//                 <p className="text-xs text-gray-600 leading-relaxed mb-4">
//                   Empowering Professional Networking with AI & Innovation
//                 </p>
                
//                 <div className="flex items-center text-xs text-gray-500 mb-4">
//                   <MapPin className="w-3 h-3 mr-1" />
//                   <span>Bhopal, India</span>
//                 </div>
//               </div>
              
//               <div className="border-t border-gray-100 pt-4">
//                 <div className="grid grid-cols-2 gap-4 text-center">
//                   <div>
//                     <div className="text-lg font-bold" style={{ color: '#4a3728' }}>4.3K</div>
//                     <div className="text-xs text-gray-500">Connections</div>
//                   </div>
//                   <div>
//                     <div className="text-lg font-bold" style={{ color: '#4a3728' }}>847</div>
//                     <div className="text-xs text-gray-500">Following</div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Stats Card */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
//               <h3 className="font-bold mb-4" style={{ color: '#4a3728' }}>This Week</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-gray-600">Profile views</span>
//                   <span className="font-bold" style={{ color: '#4a3728' }}>+23%</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-gray-600">Post impressions</span>
//                   <span className="font-bold" style={{ color: '#4a3728' }}>+156</span>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <span className="text-sm text-gray-600">New connections</span>
//                   <span className="font-bold" style={{ color: '#4a3728' }}>+8</span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Center Column - Feed */}
//           <div className="flex-1 max-w-2xl space-y-6">
            
//             {/* Activity Filter */}
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
//               <div className="flex items-center justify-between mb-4">
//                 <h2 className="text-xl font-bold" style={{ color: '#4a3728' }}>Activity Feed</h2>
//                 <div className="flex items-center space-x-2">
//                   <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
//                   <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
//                 </div>
//               </div>
              
//               <div className="flex flex-wrap gap-2">
//                 {['Posts', 'Comments', 'Videos', 'Images', 'Articles'].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
//                       activeTab === tab 
//                         ? 'text-white shadow-lg transform scale-105' 
//                         : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
//                     }`}
//                     style={activeTab === tab ? { backgroundColor: '#4a3728' } : {}}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Main Post */}
//             <article className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden">
//               <div className="p-6">
//                 {/* Post Header */}
//                 <div className="flex items-start justify-between mb-4">
//                   <div className="flex items-center space-x-3">
//                     <div className="relative">
//                       <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: '#4a3728' }}>
//                         <span className="text-lg font-bold">HS</span>
//                       </div>
//                       <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white" style={{ backgroundColor: '#4a3728' }}>
//                         <span className="text-xs font-bold">T</span>
//                       </div>
//                     </div>
//                     <div>
//                       <h4 className="font-bold" style={{ color: '#4a3728' }}>Honey Sharma</h4>
//                       <div className="flex items-center space-x-2 text-sm text-gray-500">
//                         <span>Throne8 • 143 followers</span>
//                         <span>•</span>
//                         <span className="flex items-center">
//                           <Calendar className="w-3 h-3 mr-1" />
//                           1w
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
//                 </div>

//                 {/* Post Content */}
//                 <div className="mb-6">
//                   <p className="text-base leading-relaxed" style={{ color: '#4a3728' }}>
//                     <span className="font-semibold">We re not just building a company — we re building a vision.</span> 
//                     <br />Here s to the incredible team that makes it all possible. Every breakthrough, every innovation, 
//                     every step forward is a testament to our collective dedication.
//                     <br /><br />
//                     <span className="text-sm leading-relaxed" style={{ color: '#4a3728' }}>
//                     Every step forward is a testament to our collective dedication.
//                     </span>
//                     <br /><br />
//                     <span className="cursor-pointer hover:underline" style={{ color: '#4a3728' }}>#TeamWork #Innovation #Vision</span>
//                   </p>
//                 </div>

//                 {/* Enhanced Image Grid */}
//                 <div className="relative mb-6">
//                   <div className="grid grid-cols-3 gap-1 rounded-2xl overflow-hidden">
//                     <div className="col-span-2 row-span-2">
//                       <img 
//                         src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
//                         alt="Team meeting"
//                         className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                       />
//                     </div>
//                     <div>
//                       <img 
//                         src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=300&h=195&fit=crop"
//                         alt="Team collaboration"
//                         className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                       />
//                     </div>
//                     <div className="relative">
//                       <img 
//                         src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300&h=195&fit=crop"
//                         alt="Office space"
//                         className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
//                         <span className="text-white font-bold text-lg">+3</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Engagement Stats */}
//                 <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
//                   <div className="flex items-center space-x-3">
//                     <div className="flex -space-x-1">
//                       <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-white text-white" style={{ backgroundColor: '#4a3728' }}>
//                         <Heart className="w-3 h-3 fill-current" />
//                       </div>
//                       <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-white text-white" style={{ backgroundColor: '#e0d8cf' }}>
//                         <span className="text-xs" style={{ color: '#4a3728' }}>👍</span>
//                       </div>
//                       <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-white text-white" style={{ backgroundColor: '#4a3728' }}>
//                         <span className="text-xs text-white">💡</span>
//                       </div>
//                     </div>
//                     <span className="font-medium">You and {likes} others</span>
//                   </div>
//                   <div className="flex space-x-4">
//                     <span>2 comments</span>
//                     <span>4 shares</span>
//                   </div>
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="grid grid-cols-4 gap-2">
//                   <button 
//                     onClick={handleLike}
//                     className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all ${
//                       isLiked 
//                         ? 'text-white border border-gray-200' 
//                         : 'hover:bg-gray-50 text-gray-600 border border-transparent'
//                     }`}
//                     style={isLiked ? { backgroundColor: '#4a3728' } : {}}
//                   >
//                     <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
//                     <span className="hidden sm:inline">Like</span>
//                   </button>
//                   <button className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-all">
//                     <MessageCircle className="w-5 h-5" />
//                     <span className="hidden sm:inline">Comment</span>
//                   </button>
//                   <button className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-all">
//                     <Share className="w-5 h-5" />
//                     <span className="hidden sm:inline">Share</span>
//                   </button>
//                   <button className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-all">
//                     <Send className="w-5 h-5" />
//                     <span className="hidden sm:inline">Send</span>
//                   </button>
//                 </div>
//               </div>
//             </article>
//           </div>

//           {/* Right Column - Connections */}
//           <div className="w-80">
//             <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/50 sticky top-24">
//               <div className="flex items-center justify-between mb-6">
//                 <h3 className="text-lg font-bold" style={{ color: '#4a3728' }}>Grow Your Network</h3>
//                 <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}>
//                   From your school
//                 </span>
//               </div>
              
//               <div className="space-y-4">
//                 {connections.map((person, index) => (
//                   <div key={index} className="group p-4 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all">
//                     <div className="flex items-start space-x-3">
//                       <div className="relative">
//                         <img 
//                           src={person.avatar}
//                           alt={person.name}
//                           className="w-12 h-12 rounded-xl object-cover"
//                         />
//                         {person.verified && (
//                           <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#4a3728' }}>
//                             <Check className="w-3 h-3" />
//                           </div>
//                         )}
//                       </div>
                      
//                       <div className="flex-1 min-w-0">
//                         <h4 className="font-semibold text-sm mb-1" style={{ color: '#4a3728' }}>
//                           {person.name}
//                         </h4>
//                         <p className="text-xs text-gray-600 line-clamp-2 mb-2">
//                           {person.title}
//                         </p>
//                         <p className="text-xs text-gray-500 mb-3">
//                           {person.mutualConnections} mutual connections
//                         </p>
                        
//                         <button 
//                           className={`w-full py-2 px-3 rounded-lg text-xs font-medium transition-all ${
//                             person.status === 'pending'
//                               ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
//                               : 'text-white hover:shadow-lg hover:scale-105'
//                           }`}
//                           style={person.status !== 'pending' ? { backgroundColor: '#4a3728' } : {}}
//                           disabled={person.status === 'pending'}
//                         >
//                           {person.status === 'pending' ? 'Pending' : 'Connect'}
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <button className="w-full mt-6 py-3 font-medium hover:opacity-80 rounded-xl transition-all border text-white" style={{ backgroundColor: '#e0d8cf', color: '#4a3728', borderColor: '#e0d8cf' }}>
//                 View all suggestions
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfessionalNetwork;


import  { useState } from 'react';
import { Heart, MessageCircle, Share, Send, MoreHorizontal, Users, Check, Bell, Search, Home, Briefcase, Settings, MapPin, Calendar } from 'lucide-react';

const ProfessionalNetwork = () => {
  const [activeTab, setActiveTab] = useState('Posts');
  const [likes, setLikes] = useState(43);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  // Main user profile image
  const mainUserAvatar = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face";

  const connections = [
    {
      name: "Ankit Patidar",
      title: "Student at Oriental Group of Institutes",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      mutualConnections: 12
    },
    {
      name: "Shikha Meena", 
      title: "undergraduate CSE-AIML || Python ||",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b9c1a394?w=50&h=50&fit=crop&crop=face",
      mutualConnections: 8
    },
    {
      name: "Shashank Mishra",
      title: "Attended Oriental Group of Institutes",
      verified: true,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      mutualConnections: 15
    },
    {
      name: "RAJSHEKHAR MISHRA",
      title: "AN IT STUDENT AT ORIENTAL INSTITUTE OF SCIENCE",
      verified: true,
      status: "pending",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
      mutualConnections: 6
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f6ede8' }}>
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200/30 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-2xl font-bold" style={{ color: '#4a3728' }}>
                NetworkHub
              </h1>
              <nav className="hidden md:flex space-x-6">
                <Home className="w-6 h-6 cursor-pointer" style={{ color: '#4a3728' }} />
                <Users className="w-6 h-6 text-gray-500 cursor-pointer transition-colors hover:opacity-80" style={{ color: '#4a3728' }} />
                <Briefcase className="w-6 h-6 text-gray-500 cursor-pointer transition-colors hover:opacity-80" style={{ color: '#4a3728' }} />
                <Bell className="w-6 h-6 text-gray-500 cursor-pointer transition-colors hover:opacity-80" style={{ color: '#4a3728' }} />
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search network..."
                  className="pl-10 pr-4 py-2 w-80 border border-gray-200 rounded-full focus:outline-none focus:ring-2 bg-white/80"
                  style={{ '--tw-ring-color': '#e0d8cf' }}
                />
              </div>
              <img 
                src={mainUserAvatar}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          
          {/* Left Column - Profile & Stats */}
          <div className="w-80 space-y-6">
            
            {/* Square Profile Card */}
            <div className="w-full aspect-square bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 p-6 flex flex-col">
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="relative mb-4">
                  <img 
                    src={mainUserAvatar}
                    alt="Honey Sharma"
                    className="w-24 h-24 rounded-2xl object-cover shadow-lg border-4 border-white"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full border-3 border-white flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: '#4a3728' }}>
                    <span className="text-xs font-bold">T</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold mb-2" style={{ color: '#4a3728' }}>
                  Honey Sharma
                </h2>
                <p className="text-sm font-medium mb-1" style={{ color: '#4a3728' }}>
                  Co-Founder @Throne8
                </p>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Empowering Professional Networking with AI & Innovation
                </p>
                
                <div className="flex items-center text-xs text-gray-500 mb-4">
                  <MapPin className="w-3 h-3 mr-1" />
                  <span>Bhopal, India</span>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold" style={{ color: '#4a3728' }}>4.3K</div>
                    <div className="text-xs text-gray-500">Connections</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold" style={{ color: '#4a3728' }}>847</div>
                    <div className="text-xs text-gray-500">Following</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <h3 className="font-bold mb-4" style={{ color: '#4a3728' }}>This Week</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Profile views</span>
                  <span className="font-bold" style={{ color: '#4a3728' }}>+23%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Post impressions</span>
                  <span className="font-bold" style={{ color: '#4a3728' }}>+156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">New connections</span>
                  <span className="font-bold" style={{ color: '#4a3728' }}>+8</span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column - Feed */}
          <div className="flex-1 max-w-2xl space-y-6">
            
            {/* Activity Filter */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold" style={{ color: '#4a3728' }}>Activity Feed</h2>
                <div className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
                  <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {['Posts', 'Comments', 'Videos', 'Images', 'Articles'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      activeTab === tab 
                        ? 'text-white shadow-lg transform scale-105' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                    }`}
                    style={activeTab === tab ? { backgroundColor: '#4a3728' } : {}}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Post */}
            <article className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden">
              <div className="p-6">
                {/* Post Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img 
                        src={mainUserAvatar}
                        alt="Honey Sharma"
                        className="w-12 h-12 rounded-xl object-cover border-2 border-white shadow-md"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-white shadow-md" style={{ backgroundColor: '#4a3728' }}>
                        <span className="text-xs font-bold">T</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold" style={{ color: '#4a3728' }}>Honey Sharma</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <span>Throne8 • 143 followers</span>
                        <span>•</span>
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          1w
                        </span>
                      </div>
                    </div>
                  </div>
                  <MoreHorizontal className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>

                {/* Post Content */}
                <div className="mb-6">
                  <p className="text-base leading-relaxed" style={{ color: '#4a3728' }}>
                    <span className="font-semibold">We re not just building a company — we re building a vision.</span> 
                    <br />Here s to the incredible team that makes it all possible. Every breakthrough, every innovation, 
                    every step forward is a testament to our collective dedication.
                    <br /><br />
                    <span className="text-sm leading-relaxed" style={{ color: '#4a3728' }}>
                    Every step forward is a testament to our collective dedication.
                    </span>
                    <br /><br />
                    <span className="cursor-pointer hover:underline" style={{ color: '#4a3728' }}>#TeamWork #Innovation #Vision</span>
                  </p>
                </div>

                {/* Enhanced Image Grid */}
                <div className="relative mb-6">
                  <div className="grid grid-cols-3 gap-1 rounded-2xl overflow-hidden">
                    <div className="col-span-2 row-span-2">
                      <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                        alt="Team meeting"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=300&h=195&fit=crop"
                        alt="Team collaboration"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative">
                      <img 
                        src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=300&h=195&fit=crop"
                        alt="Office space"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">+3</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Engagement Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-white text-white" style={{ backgroundColor: '#4a3728' }}>
                        <Heart className="w-3 h-3 fill-current" />
                      </div>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-white text-white" style={{ backgroundColor: '#e0d8cf' }}>
                        <span className="text-xs" style={{ color: '#4a3728' }}>👍</span>
                      </div>
                      <div className="w-6 h-6 rounded-full flex items-center justify-center border-2 border-white text-white" style={{ backgroundColor: '#4a3728' }}>
                        <span className="text-xs text-white">💡</span>
                      </div>
                    </div>
                    <span className="font-medium">You and {likes} others</span>
                  </div>
                  <div className="flex space-x-4">
                    <span>2 comments</span>
                    <span>4 shares</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-4 gap-2">
                  <button 
                    onClick={handleLike}
                    className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium transition-all ${
                      isLiked 
                        ? 'text-white border border-gray-200' 
                        : 'hover:bg-gray-50 text-gray-600 border border-transparent'
                    }`}
                    style={isLiked ? { backgroundColor: '#4a3728' } : {}}
                  >
                    <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                    <span className="hidden sm:inline">Like</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-all">
                    <MessageCircle className="w-5 h-5" />
                    <span className="hidden sm:inline">Comment</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-all">
                    <Share className="w-5 h-5" />
                    <span className="hidden sm:inline">Share</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl font-medium text-gray-600 hover:bg-gray-50 transition-all">
                    <Send className="w-5 h-5" />
                    <span className="hidden sm:inline">Send</span>
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Right Column - Connections */}
          <div className="w-80">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-white/50 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold" style={{ color: '#4a3728' }}>Grow Your Network</h3>
                <span className="text-xs px-3 py-1 rounded-full" style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}>
                  From your school
                </span>
              </div>
              
              <div className="space-y-4">
                {connections.map((person, index) => (
                  <div key={index} className="group p-4 rounded-xl border border-gray-100 hover:border-orange-200 hover:shadow-md transition-all">
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <img 
                          src={person.avatar}
                          alt={person.name}
                          className="w-12 h-12 rounded-xl object-cover border-2 border-white shadow-sm"
                        />
                        {person.verified && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-white shadow-sm" style={{ backgroundColor: '#4a3728' }}>
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm mb-1" style={{ color: '#4a3728' }}>
                          {person.name}
                        </h4>
                        <p className="text-xs text-gray-600 line-clamp-2 mb-2">
                          {person.title}
                        </p>
                        <p className="text-xs text-gray-500 mb-3">
                          {person.mutualConnections} mutual connections
                        </p>
                        
                        <button 
                          className={`w-full py-2 px-3 rounded-lg text-xs font-medium transition-all ${
                            person.status === 'pending'
                              ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                              : 'text-white hover:shadow-lg hover:scale-105'
                          }`}
                          style={person.status !== 'pending' ? { backgroundColor: '#4a3728' } : {}}
                          disabled={person.status === 'pending'}
                        >
                          {person.status === 'pending' ? 'Pending' : 'Connect'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 py-3 font-medium hover:opacity-80 rounded-xl transition-all border text-white" style={{ backgroundColor: '#e0d8cf', color: '#4a3728', borderColor: '#e0d8cf' }}>
                View all suggestions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalNetwork;