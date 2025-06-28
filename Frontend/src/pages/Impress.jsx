/* eslint-disable react/prop-types */
// import  { useState } from 'react';

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
// import { TrendingUp, TrendingDown, Users, Eye, MessageSquare, BarChart3 } from 'lucide-react';

// const LinkedInAnalyticsDashboard = () => {
//   const [activeTab, setActiveTab] = useState('Analytics');
//   const [timeRange, setTimeRange] = useState('Past 7 days');
//   const [metricType, setMetricType] = useState('Impressions');

//   const contentData = [
//     { date: 'Jun 22', value: 95 },
//     { date: 'Jun 23', value: 52 },
//     { date: 'Jun 24', value: 68 },
//     { date: 'Jun 25', value: 75 },
//     { date: 'Jun 26', value: 89 },
//     { date: 'Jun 27', value: 267 },
//     { date: 'Jun 28', value: 145 }
//   ];

//   const followerData = [
//     { date: 'Jun 22', value: 7 },
//     { date: 'Jun 23', value: 5 },
//     { date: 'Jun 24', value: 4 },
//     { date: 'Jun 25', value: 35 },
//     { date: 'Jun 26', value: 29 },
//     { date: 'Jun 27', value: 18 },
//     { date: 'Jun 28', value: 1 }
//   ];

//   const topPosts = [
//     {
//       id: 1,
//       title: "🔥 From Jewellery to ₹30 Cr: What One Bold Bet Achieved in 45 Days",
//       author: "Honey Sharma",
//       timeAgo: "20h",
//       content: "Scaled smart. Earned big....",
//       impressions: 256,
//       engagement: "You and 6 others",
//       comments: "1 repost"
//     },
//     {
//       id: 2,
//       title: "🎯 Final Round at Juspay (₹27 LPA) — But I Chose My Own Throne",
//       author: "Honey Sharma", 
//       timeAgo: "3w",
//       content: "In January 2025, I cracked three rigorous rounds of the Juspa",
//       impressions: 216,
//       engagement: "45",
//       comments: "1 comment"
//     },
//     {
//       id: 3,
//       title: "▶️ सुप्रभ यात्रा ▶️",
//       author: "Honey Sharma",
//       timeAgo: "1h", 
//       content: "🙏 Reflecting on the Divine Ratha Yatra 🙏...",
//       impressions: 82,
//       engagement: "You and 5 others",
//       comments: ""
//     }
//   ];

//   const renderAnalytics = () => (
//     <div className="space-y-8">
//       {/* Header Controls */}
//       <div className="flex gap-4 mb-6">
//         <select 
//           value={timeRange}
//           onChange={(e) => setTimeRange(e.target.value)}
//           className="px-4 py-2 rounded-lg border border-[#e0d8cf] bg-[#f6ede8] text-[#4a3728] focus:outline-none focus:ring-2 focus:ring-[#4a3728]"
//         >
//           <option>Past 7 days</option>
//           <option>Past 30 days</option>
//           <option>Past 90 days</option>
//         </select>
//         <select 
//           value={metricType}
//           onChange={(e) => setMetricType(e.target.value)}
//           className="px-4 py-2 rounded-lg border border-[#e0d8cf] bg-[#f6ede8] text-[#4a3728] focus:outline-none focus:ring-2 focus:ring-[#4a3728]"
//         >
//           <option>Impressions</option>
//           <option>Reach</option>
//           <option>Engagement</option>
//         </select>
//       </div>

//       {/* Content Performance Card */}
//       <div className="bg-[#f6ede8] rounded-2xl p-8 border border-[#e0d8cf] shadow-lg">
//         <div className="flex items-center gap-3 mb-6">
//           <BarChart3 className="w-6 h-6 text-[#4a3728]" />
//           <h2 className="text-2xl font-bold text-[#4a3728]">Content Performance</h2>
//         </div>
        
//         <div className="mb-6">
//           <div className="flex items-baseline gap-4">
//             <span className="text-4xl font-bold text-[#4a3728]">758</span>
//             <span className="text-lg text-[#4a3728] opacity-70">Impressions</span>
//           </div>
//           <div className="flex items-center gap-2 mt-2">
//             <TrendingDown className="w-4 h-4 text-red-500" />
//             <span className="text-red-500 text-sm font-medium">20.9% vs. prior 7 days</span>
//           </div>
//         </div>

//         <div className="h-80">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={contentData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#e0d8cf" />
//               <XAxis dataKey="date" stroke="#4a3728" />
//               <YAxis stroke="#4a3728" />
//               <Line 
//                 type="monotone" 
//                 dataKey="value" 
//                 stroke="#4a3728" 
//                 strokeWidth="3"
//                 dot={{ fill: '#4a3728', strokeWidth: 2, r: 6 }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//         <p className="text-sm text-[#4a3728] opacity-60 mt-4">Daily data is recorded in UTC</p>
//       </div>

//       {/* Discovery Section */}
//       <div className="bg-[#f6ede8] rounded-2xl p-8 border border-[#e0d8cf] shadow-lg">
//         <div className="flex items-center gap-3 mb-6">
//           <Eye className="w-6 h-6 text-[#4a3728]" />
//           <h2 className="text-2xl font-bold text-[#4a3728]">Discovery</h2>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div>
//             <span className="text-4xl font-bold text-[#4a3728]">758</span>
//             <p className="text-[#4a3728] opacity-70 mt-1">Impressions</p>
//           </div>
//           <div>
//             <span className="text-4xl font-bold text-[#4a3728]">291</span>
//             <p className="text-[#4a3728] opacity-70 mt-1">Members reached</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   const renderPosts = () => (
//     <div className="space-y-6">
//       <div className="bg-[#f6ede8] rounded-2xl p-8 border border-[#e0d8cf] shadow-lg">
//         <div className="flex items-center gap-3 mb-6">
//           <MessageSquare className="w-6 h-6 text-[#4a3728]" />
//           <h2 className="text-2xl font-bold text-[#4a3728]">Top Performing Posts</h2>
//         </div>
//         <p className="text-[#4a3728] opacity-70 mb-8">Based on impressions gained from June 22, 2025 - June 28, 2025</p>
        
//         <div className="space-y-6">
//           {topPosts.map((post) => (
//             <div key={post.id} className="bg-white rounded-xl p-6 border border-[#e0d8cf] hover:shadow-md transition-shadow">
//               <div className="flex justify-between items-start mb-4">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2 mb-2">
//                     <span className="font-semibold text-[#4a3728]">{post.author}</span>
//                     <span className="text-[#4a3728] opacity-60">posted this • {post.timeAgo}</span>
//                   </div>
//                   <h3 className="font-bold text-[#4a3728] mb-2 text-lg">{post.title}</h3>
//                   <p className="text-[#4a3728] opacity-70 mb-4">{post.content}</p>
//                   <div className="flex items-center gap-4 text-sm text-[#4a3728] opacity-60">
//                     <span>{post.engagement}</span>
//                     {post.comments && <span>{post.comments}</span>}
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-end gap-2 ml-6">
//                   <div className="flex items-center gap-1">
//                     <TrendingUp className="w-4 h-4 text-green-600" />
//                     <span className="text-2xl font-bold text-[#4a3728]">{post.impressions}</span>
//                   </div>
//                   <span className="text-[#4a3728] opacity-70 text-sm">Impressions</span>
//                   <button className="px-4 py-2 text-[#4a3728] border border-[#4a3728] rounded-lg hover:bg-[#4a3728] hover:text-white transition-colors">
//                     View analytics
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );

//   const renderAudience = () => (
//     <div className="space-y-8">
//       {/* Total Followers */}
//       <div className="bg-[#f6ede8] rounded-2xl p-8 border border-[#e0d8cf] shadow-lg">
//         <div className="flex items-center gap-3 mb-6">
//           <Users className="w-6 h-6 text-[#4a3728]" />
//           <h2 className="text-2xl font-bold text-[#4a3728]">Total Followers</h2>
//         </div>
        
//         <div className="mb-6">
//           <div className="flex items-baseline gap-4">
//             <span className="text-4xl font-bold text-[#4a3728]">4,342</span>
//           </div>
//           <div className="flex items-center gap-2 mt-2">
//             <TrendingUp className="w-4 h-4 text-green-500" />
//             <span className="text-green-500 text-sm font-medium">2.1% vs. prior 7 days</span>
//           </div>
//         </div>
//       </div>

//       {/* New Followers Chart */}
//       <div className="bg-[#f6ede8] rounded-2xl p-8 border border-[#e0d8cf] shadow-lg">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-2xl font-bold text-[#4a3728]">New Followers</h2>
//           <select 
//             value={timeRange}
//             onChange={(e) => setTimeRange(e.target.value)}
//             className="px-4 py-2 rounded-lg border border-[#e0d8cf] bg-white text-[#4a3728] focus:outline-none focus:ring-2 focus:ring-[#4a3728]"
//           >
//             <option>Past 7 days</option>
//             <option>Past 30 days</option>
//           </select>
//         </div>

//         <div className="h-80">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={followerData}>
//               <CartesianGrid strokeDasharray="3 3" stroke="#e0d8cf" />
//               <XAxis dataKey="date" stroke="#4a3728" />
//               <YAxis stroke="#4a3728" />
//               <Line 
//                 type="monotone" 
//                 dataKey="value" 
//                 stroke="#4a3728" 
//                 strokeWidth="3"
//                 dot={{ fill: '#4a3728', strokeWidth: 2, r: 6 }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </div>

//       {/* Demographics */}
//       <div className="bg-[#f6ede8] rounded-2xl p-8 border border-[#e0d8cf] shadow-lg">
//         <h2 className="text-2xl font-bold text-[#4a3728] mb-6">Top Demographics of Followers</h2>
        
//         <div className="bg-[#e0d8cf] rounded-xl p-6">
//           <div className="flex justify-between items-center">
//             <div>
//               <h3 className="font-bold text-[#4a3728] text-lg">Greater Bhopal Area</h3>
//               <p className="text-[#4a3728] opacity-70">From this location</p>
//             </div>
//             <span className="text-2xl font-bold text-[#4a3728]">43%</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-[#e0d8cf] p-6">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <div className="flex gap-8">
//             {['Analytics', 'Posts', 'Audience'].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`text-lg font-semibold pb-2 border-b-2 transition-colors ${
//                   activeTab === tab 
//                     ? 'text-[#4a3728] border-[#4a3728]' 
//                     : 'text-[#4a3728] opacity-60 border-transparent hover:opacity-80'
//                 }`}
//               >
//                 {tab}
//               </button>
//             ))}
//           </div>
//           <button className="px-6 py-3 bg-[#4a3728] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
//             📥 Export
//           </button>
//         </div>

//         {/* Content */}
//         {activeTab === 'Analytics' && renderAnalytics()}
//         {activeTab === 'Posts' && renderPosts()}
//         {activeTab === 'Audience' && renderAudience()}
//       </div>
//     </div>
//   );
// };

// export default LinkedInAnalyticsDashboard;

import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { Activity, Users2, Eye, MessageSquare, TrendingUp, TrendingDown, Calendar, Filter } from 'lucide-react';

const LinkedInAnalyticsDashboard = () => {
  const [activeView, setActiveView] = useState('Analytics');
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const performanceData = [
    { day: 'Mon', impressions: 95, reach: 45 },
    { day: 'Tue', impressions: 52, reach: 32 },
    { day: 'Wed', impressions: 68, reach: 41 },
    { day: 'Thu', impressions: 75, reach: 48 },
    { day: 'Fri', impressions: 89, reach: 56 },
    { day: 'Sat', impressions: 267, reach: 178 },
    { day: 'Sun', impressions: 145, reach: 98 }
  ];

  const growthData = [
    { period: 'W1', followers: 7 },
    { period: 'W2', followers: 5 },
    { period: 'W3', followers: 4 },
    { period: 'W4', followers: 35 },
    { period: 'W5', followers: 29 },
    { period: 'W6', followers: 18 },
    { period: 'W7', followers: 1 }
  ];

  const contentPieces = [
    {
      id: 1,
      emoji: "🔥",
      headline: "From Jewellery to ₹30 Cr Business Success Story",
      author: "Honey Sharma",
      duration: "20h ago",
      preview: "How one bold decision changed everything...",
      metrics: { views: 256, interactions: 7 },
      category: "Business"
    },
    {
      id: 2,
      emoji: "🎯", 
      headline: "Juspay Interview Experience - ₹27 LPA Offer",
      author: "Honey Sharma",
      duration: "3w ago", 
      preview: "Three rigorous rounds but chose my own path...",
      metrics: { views: 216, interactions: 45 },
      category: "Career"
    },
    {
      id: 3,
      emoji: "🙏",
      headline: "Divine Ratha Yatra Reflections",
      author: "Honey Sharma",
      duration: "1h ago",
      preview: "Spiritual journey and learnings...",
      metrics: { views: 82, interactions: 5 },
      category: "Spiritual"
    }
  ];

  const StatCard = ({ icon: Icon, title, value, change, trend }) => (
    <div className="bg-white p-6 rounded-xl border-l-4 border-[#4a3728] shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <Icon className="w-8 h-8 text-[#4a3728]" />
        {trend === 'up' ? (
          <TrendingUp className="w-5 h-5 text-emerald-500" />
        ) : (
          <TrendingDown className="w-5 h-5 text-red-500" />
        )}
      </div>
      <h3 className="text-[#4a3728] text-sm font-medium opacity-70">{title}</h3>
      <p className="text-3xl font-bold text-[#4a3728] mt-1">{value}</p>
      <p className={`text-sm mt-2 ${trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>
        {change} from last week
      </p>
    </div>
  );

  const renderDashboard = () => (
    <div className="grid grid-cols-12 gap-6">
      {/* Left Sidebar Stats */}
      <div className="col-span-3 space-y-4">
        <StatCard 
          icon={Eye} 
          title="Total Impressions" 
          value="758" 
          change="-20.9%" 
          trend="down" 
        />
        <StatCard 
          icon={Users2} 
          title="Reach" 
          value="291" 
          change="+12.5%" 
          trend="up" 
        />
        <StatCard 
          icon={Activity} 
          title="Engagement Rate" 
          value="8.2%" 
          change="+5.1%" 
          trend="up" 
        />
        
        {/* Quick Actions */}
        <div className="bg-[#f6ede8] p-4 rounded-xl border border-[#e0d8cf] mt-6">
          <h4 className="font-semibold text-[#4a3728] mb-3">Quick Insights</h4>
          <div className="space-y-2 text-sm text-[#4a3728]">
            <p>📈 Best posting time: 6-8 PM</p>
            <p>🎯 Top content: Business stories</p>
            <p>👥 Main audience: Bhopal (43%)</p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="col-span-9 space-y-6">
        {/* Chart Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-[#4a3728]">Performance Overview</h2>
            <div className="flex gap-2">
              {['7d', '30d', '90d'].map(period => (
                <button 
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`px-3 py-1 rounded-lg text-sm ${
                    selectedPeriod === period 
                      ? 'bg-[#4a3728] text-white' 
                      : 'bg-[#f6ede8] text-[#4a3728]'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorImpressions" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4a3728" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#4a3728" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0d8cf" />
                <XAxis dataKey="day" stroke="#4a3728" />
                <YAxis stroke="#4a3728" />
                <Area 
                  type="monotone" 
                  dataKey="impressions" 
                  stroke="#4a3728" 
                  fillOpacity={1} 
                  fill="url(#colorImpressions)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#f6ede8] p-6 rounded-xl border border-[#e0d8cf]">
            <h3 className="font-semibold text-[#4a3728] mb-4">Discovery Metrics</h3>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold text-[#4a3728]">758</p>
                <p className="text-sm text-[#4a3728] opacity-70">Total Impressions</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#4a3728]">291</p>
                <p className="text-sm text-[#4a3728] opacity-70">Unique Reach</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[#f6ede8] p-6 rounded-xl border border-[#e0d8cf]">
            <h3 className="font-semibold text-[#4a3728] mb-4">Audience Growth</h3>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-2xl font-bold text-[#4a3728]">4,342</p>
                <p className="text-sm text-[#4a3728] opacity-70">Total Followers</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-emerald-600">+2.1%</p>
                <p className="text-sm text-[#4a3728] opacity-70">This week</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => (
    <div className="space-y-6">
      {/* Content Header */}
      <div className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-[#4a3728]">Content Performance Hub</h2>
          <p className="text-[#4a3728] opacity-70 mt-1">June 22 - June 28, 2025</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#f6ede8] text-[#4a3728] rounded-lg border border-[#e0d8cf] hover:bg-[#e0d8cf]">
            <Filter className="w-4 h-4 inline mr-2" />
            Filter
          </button>
          <button className="px-4 py-2 bg-[#4a3728] text-white rounded-lg hover:opacity-90">
            Create Post
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid gap-6">
        {contentPieces.map((content) => (
          <div key={content.id} className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-[#4a3728] hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{content.emoji}</span>
                  <span className="px-3 py-1 bg-[#f6ede8] text-[#4a3728] rounded-full text-xs font-medium">
                    {content.category}
                  </span>
                  <span className="text-[#4a3728] opacity-60 text-sm">{content.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-[#4a3728] mb-2">{content.headline}</h3>
                <p className="text-[#4a3728] opacity-70 mb-4">{content.preview}</p>
                <div className="flex items-center gap-1 text-sm text-[#4a3728] opacity-60">
                  <MessageSquare className="w-4 h-4" />
                  <span>{content.author}</span>
                </div>
              </div>
              
              <div className="text-right ml-6">
                <div className="bg-[#f6ede8] p-4 rounded-xl mb-3">
                  <p className="text-2xl font-bold text-[#4a3728]">{content.metrics.views}</p>
                  <p className="text-xs text-[#4a3728] opacity-70">Views</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#4a3728] opacity-70">
                  <Activity className="w-4 h-4" />
                  <span>{content.metrics.interactions} interactions</span>
                </div>
                <button className="mt-3 px-4 py-2 border border-[#4a3728] text-[#4a3728] rounded-lg hover:bg-[#4a3728] hover:text-white transition-colors text-sm">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderAudience = () => (
    <div className="grid grid-cols-3 gap-6">
      {/* Left Panel - Follower Growth */}
      <div className="col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold text-[#4a3728] mb-6">Follower Growth Trend</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0d8cf" />
                <XAxis dataKey="period" stroke="#4a3728" />
                <YAxis stroke="#4a3728" />
                <Bar dataKey="followers" fill="#4a3728" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-[#f6ede8] p-6 rounded-xl border border-[#e0d8cf]">
          <h3 className="font-semibold text-[#4a3728] mb-4">Engagement Insights</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-xl font-bold text-[#4a3728]">8.2%</p>
              <p className="text-sm text-[#4a3728] opacity-70">Avg. Engagement</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-[#4a3728]">156</p>
              <p className="text-sm text-[#4a3728] opacity-70">Peak Reach</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-[#4a3728]">2.3k</p>
              <p className="text-sm text-[#4a3728] opacity-70">Profile Views</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Demographics */}
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-[#4a3728] mb-4">Total Network</h3>
          <div className="text-center">
            <p className="text-4xl font-bold text-[#4a3728]">4,342</p>
            <p className="text-[#4a3728] opacity-70 mt-1">Followers</p>
            <div className="flex items-center justify-center gap-1 mt-3">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <span className="text-emerald-600 font-medium">+2.1%</span>
            </div>
          </div>
        </div>

        <div className="bg-[#f6ede8] p-6 rounded-xl border border-[#e0d8cf]">
          <h3 className="font-semibold text-[#4a3728] mb-4">Top Locations</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-[#e0d8cf] rounded-lg">
              <span className="font-medium text-[#4a3728]">Greater Bhopal</span>
              <span className="font-bold text-[#4a3728]">43%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <span className="text-[#4a3728]">Mumbai</span>
              <span className="font-semibold text-[#4a3728]">12%</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <span className="text-[#4a3728]">Delhi</span>
              <span className="font-semibold text-[#4a3728]">8%</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="font-semibold text-[#4a3728] mb-4">Activity Times</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-[#4a3728]">
              <span>Peak Hours</span>
              <span className="font-medium">6-8 PM</span>
            </div>
            <div className="flex justify-between text-[#4a3728]">
              <span>Best Days</span>
              <span className="font-medium">Wed, Sat</span>
            </div>
            <div className="flex justify-between text-[#4a3728]">
              <span>Avg. Session</span>
              <span className="font-medium">3.2 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#e0d8cf] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Navigation */}
        <header className="mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-6">
                <h1 className="text-2xl font-bold text-[#4a3728]">Analytics Hub</h1>
                <nav className="flex gap-1">
                  {['Analytics', 'Posts', 'Audience'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveView(tab)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        activeView === tab 
                          ? 'bg-[#4a3728] text-white' 
                          : 'text-[#4a3728] hover:bg-[#f6ede8]'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 text-[#4a3728] border border-[#4a3728] rounded-lg hover:bg-[#f6ede8] transition-colors">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Date Range
                </button>
                <button className="px-4 py-2 bg-[#4a3728] text-white rounded-lg hover:opacity-90 transition-opacity">
                  📊 Export Data
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {activeView === 'Analytics' && renderDashboard()}
          {activeView === 'Posts' && renderContent()}
          {activeView === 'Audience' && renderAudience()}
        </main>
      </div>
    </div>
  );
};

export default LinkedInAnalyticsDashboard;