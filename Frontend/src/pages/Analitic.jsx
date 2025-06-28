// eslint-disable-next-line no-unused-vars
// import React from 'react';
// // eslint-disable-next-line no-unused-vars
// import { X, TrendingUp, Users, MessageSquare, Search, Building2, Edit3, FileText, User } from 'lucide-react';

// const AnalyticsDashboard = () => {
//   return (
//     <div className="min-h-screen" style={{ backgroundColor: '#f6ede8' }}>
//       <div className="max-w-4xl mx-auto p-6 space-y-6">
        
//         {/* Profile Appearances Header */}
//         <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: '#e0d8cf' }}>
//           <h2 className="text-2xl font-bold mb-2" style={{ color: '#4a3728' }}>
//             Profile visibility metrics
//           </h2>
//           <p className="text-sm opacity-80" style={{ color: '#4a3728' }}>
//             Analytics for your professional presence from June 17 - June 24. 
//             <span className="underline cursor-pointer ml-1">View details</span>
//           </p>
//         </div>

//         {/* Main Stats */}
//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="rounded-xl p-8 shadow-lg text-center" style={{ backgroundColor: '#e0d8cf' }}>
//             <div className="flex items-center justify-center mb-4">
//               <TrendingUp className="w-8 h-8 mr-3" style={{ color: '#4a3728' }} />
//               <div>
//                 <div className="text-4xl font-bold" style={{ color: '#4a3728' }}>1,133</div>
//                 <div className="text-lg font-medium" style={{ color: '#4a3728' }}>Total views</div>
//               </div>
//             </div>
//             <div className="flex items-center justify-center text-green-600">
//               <span className="text-sm">↑ 37% from last week</span>
//             </div>
//           </div>

//           <div className="rounded-xl p-8 shadow-lg text-center" style={{ backgroundColor: '#e0d8cf' }}>
//             <div className="flex items-center justify-center mb-4">
//               <Search className="w-8 h-8 mr-3" style={{ color: '#4a3728' }} />
//               <div>
//                 <div className="text-4xl font-bold" style={{ color: '#4a3728' }}>73</div>
//                 <div className="text-lg font-medium" style={{ color: '#4a3728' }}>Search results</div>
//               </div>
//             </div>
//             <div className="flex items-center justify-center text-gray-600">
//               <span className="text-sm">No change from last week</span>
//             </div>
//           </div>
//         </div>

//         {/* Premium Upgrade */}
//         <div className="rounded-xl p-6 shadow-lg relative" style={{ backgroundColor: '#e0d8cf' }}>
//           <button className="absolute top-4 right-4 p-1">
//             <X className="w-5 h-5" style={{ color: '#4a3728' }} />
//           </button>
          
//           <h3 className="text-xl font-bold mb-3" style={{ color: '#4a3728' }}>
//             Enhanced networking with Premium
//           </h3>
//           <p className="text-sm mb-4 opacity-80" style={{ color: '#4a3728' }}>
//             Discover who s been viewing your profile over the past year with Premium Business
//           </p>
          
//           <div className="flex items-center mb-4">
//             <div className="flex -space-x-2 mr-3">
//               <div className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: '#4a3728' }}></div>
//               <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400"></div>
//               <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-500"></div>
//             </div>
//             <span className="text-sm" style={{ color: '#4a3728' }}>
//               Join millions using Premium features
//             </span>
//           </div>
          
//           <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-medium transition-colors">
//             Try Premium for ₹0
//           </button>
//           <p className="text-xs mt-2 opacity-70" style={{ color: '#4a3728' }}>
//             30-day free trial with full support. Cancel anytime before trial ends.
//           </p>
//         </div>

//         {/* Appearance Sources */}
//         <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: '#e0d8cf' }}>
//           <h3 className="text-xl font-bold mb-6" style={{ color: '#4a3728' }}>
//             Discovery sources
//           </h3>
          
//           <div className="space-y-4">
//             <div>
//               <div className="flex justify-between items-center mb-2">
//                 <span className="font-medium" style={{ color: '#4a3728' }}>Content posts</span>
//                 <span className="text-sm font-semibold" style={{ color: '#4a3728' }}>75.9%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-3">
//                 <div className="h-3 rounded-full" style={{ backgroundColor: '#4a3728', width: '75.9%' }}></div>
//               </div>
//             </div>

//             <div>
//               <div className="flex justify-between items-center mb-2">
//                 <span className="font-medium" style={{ color: '#4a3728' }}>Network suggestions</span>
//                 <span className="text-sm font-semibold" style={{ color: '#4a3728' }}>9.4%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-3">
//                 <div className="h-3 rounded-full" style={{ backgroundColor: '#4a3728', width: '9.4%' }}></div>
//               </div>
//             </div>

//             <div>
//               <div className="flex justify-between items-center mb-2">
//                 <span className="font-medium" style={{ color: '#4a3728' }}>Post interactions</span>
//                 <span className="text-sm font-semibold" style={{ color: '#4a3728' }}>8.3%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-3">
//                 <div className="h-3 rounded-full" style={{ backgroundColor: '#4a3728', width: '8.3%' }}></div>
//               </div>
//             </div>

//             <div>
//               <div className="flex justify-between items-center mb-2">
//                 <span className="font-medium" style={{ color: '#4a3728' }}>Search queries</span>
//                 <span className="text-sm font-semibold" style={{ color: '#4a3728' }}>6.4%</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-3">
//                 <div className="h-3 rounded-full" style={{ backgroundColor: '#4a3728', width: '6.4%' }}></div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Search Companies */}
//         <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: '#e0d8cf' }}>
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-xl font-bold" style={{ color: '#4a3728' }}>
//               Search appearance insights
//             </h3>
//             <select className="border rounded-lg px-3 py-2 text-sm" style={{ color: '#4a3728', borderColor: '#4a3728' }}>
//               <option>Leading companies your viewers work at</option>
//             </select>
//           </div>
          
//           <div className="space-y-4">
//             {[
//               { name: 'Tata Consultancy Services', logo: 'TCS' },
//               { name: 'Aculocity', logo: 'AC' },
//               { name: 'ColourDrive', logo: 'CD' },
//               { name: 'Impactis Global', logo: 'IG' },
//               { name: 'Microsoft', logo: 'MS' }
//             ].map((company, index) => (
//               <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-opacity-50 transition-colors" style={{ backgroundColor: '#f6ede8' }}>
//                 <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold" style={{ backgroundColor: '#4a3728' }}>
//                   {company.logo}
//                 </div>
//                 <span className="font-medium" style={{ color: '#4a3728' }}>{company.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Action Items */}
//         <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: '#e0d8cf' }}>
//           <h3 className="text-xl font-bold mb-6" style={{ color: '#4a3728' }}>
//             Boost your profile visibility
//           </h3>
          
//           <div className="space-y-4">
//             <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#f6ede8' }}>
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#4a3728' }}>
//                   <FileText className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold" style={{ color: '#4a3728' }}>Create a post</h4>
//                   <p className="text-sm opacity-80" style={{ color: '#4a3728' }}>
//                     Weekly posts can increase your visibility by 4x
//                   </p>
//                 </div>
//               </div>
//               <button className="border-2 px-4 py-2 rounded-full font-medium hover:bg-opacity-10 transition-colors" style={{ borderColor: '#4a3728', color: '#4a3728' }}>
//                 Create post
//               </button>
//             </div>

//             <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#f6ede8' }}>
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#4a3728' }}>
//                   <MessageSquare className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold" style={{ color: '#4a3728' }}>Engage with content</h4>
//                   <p className="text-sm opacity-80" style={{ color: '#4a3728' }}>
//                     Commenting on posts increases your feed visibility
//                   </p>
//                 </div>
//               </div>
//               <button className="border-2 px-4 py-2 rounded-full font-medium hover:bg-opacity-10 transition-colors" style={{ borderColor: '#4a3728', color: '#4a3728' }}>
//                 Explore feed
//               </button>
//             </div>

//             <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#f6ede8' }}>
//               <div className="flex items-center space-x-4">
//                 <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#4a3728' }}>
//                   <User className="w-6 h-6 text-white" />
//                 </div>
//                 <div>
//                   <h4 className="font-semibold" style={{ color: '#4a3728' }}>Optimize your profile</h4>
//                   <p className="text-sm opacity-80" style={{ color: '#4a3728' }}>
//                     Updated profiles get seen by more people
//                   </p>
//                 </div>
//               </div>
//               <button className="border-2 px-4 py-2 rounded-full font-medium hover:bg-opacity-10 transition-colors" style={{ borderColor: '#4a3728', color: '#4a3728' }}>
//                 Update profile
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AnalyticsDashboard;



import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { X, TrendingUp, Users, MessageSquare, Search, Building2, Edit3, FileText, User, Calendar, Download, Filter, Eye, BarChart3, Globe } from 'lucide-react';

const AnalyticsDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7days');
  // eslint-disable-next-line no-unused-vars
  const [showDetailedAnalytics, setShowDetailedAnalytics] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f6ede8' }}>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        
        {/* Header with Controls */}
        <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: '#e0d8cf' }}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#4a3728' }}>
                Profile visibility metrics
              </h2>
              <p className="text-sm opacity-80" style={{ color: '#4a3728' }}>
                Analytics for your professional presence from June 17 - June 24. 
                <span className="underline cursor-pointer ml-1">View details</span>
              </p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <select 
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="border rounded-lg px-3 py-2 text-sm" 
                style={{ color: '#4a3728', borderColor: '#4a3728' }}
              >
                <option value="7days">Last 7 days</option>
                <option value="30days">Last 30 days</option>
                <option value="90days">Last 90 days</option>
                <option value="1year">Last year</option>
              </select>
              <button className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm hover:bg-opacity-10 transition-colors" style={{ color: '#4a3728', borderColor: '#4a3728' }}>
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex gap-1 p-1 rounded-lg" style={{ backgroundColor: '#f6ede8' }}>
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'demographics', label: 'Demographics', icon: Users },
              { id: 'performance', label: 'Performance', icon: TrendingUp }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id ? 'text-white' : 'hover:bg-opacity-20'
                }`}
                style={{ 
                  backgroundColor: activeTab === tab.id ? '#4a3728' : 'transparent',
                  color: activeTab === tab.id ? 'white' : '#4a3728'
                }}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="rounded-xl p-6 shadow-lg text-center" style={{ backgroundColor: '#e0d8cf' }}>
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 mr-3" style={{ color: '#4a3728' }} />
              <div>
                <div className="text-3xl font-bold" style={{ color: '#4a3728' }}>1,133</div>
                <div className="text-sm font-medium" style={{ color: '#4a3728' }}>Total views</div>
              </div>
            </div>
            <div className="flex items-center justify-center text-green-600">
              <span className="text-xs">↑ 37% from last week</span>
            </div>
          </div>

          <div className="rounded-xl p-6 shadow-lg text-center" style={{ backgroundColor: '#e0d8cf' }}>
            <div className="flex items-center justify-center mb-4">
              <Search className="w-6 h-6 mr-3" style={{ color: '#4a3728' }} />
              <div>
                <div className="text-3xl font-bold" style={{ color: '#4a3728' }}>73</div>
                <div className="text-sm font-medium" style={{ color: '#4a3728' }}>Search results</div>
              </div>
            </div>
            <div className="flex items-center justify-center text-gray-600">
              <span className="text-xs">No change from last week</span>
            </div>
          </div>

          <div className="rounded-xl p-6 shadow-lg text-center" style={{ backgroundColor: '#e0d8cf' }}>
            <div className="flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 mr-3" style={{ color: '#4a3728' }} />
              <div>
                <div className="text-3xl font-bold" style={{ color: '#4a3728' }}>892</div>
                <div className="text-sm font-medium" style={{ color: '#4a3728' }}>Post impressions</div>
              </div>
            </div>
            <div className="flex items-center justify-center text-green-600">
              <span className="text-xs">↑ 24% from last week</span>
            </div>
          </div>

          <div className="rounded-xl p-6 shadow-lg text-center" style={{ backgroundColor: '#e0d8cf' }}>
            <div className="flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 mr-3" style={{ color: '#4a3728' }} />
              <div>
                <div className="text-3xl font-bold" style={{ color: '#4a3728' }}>156</div>
                <div className="text-sm font-medium" style={{ color: '#4a3728' }}>Connections</div>
              </div>
            </div>
            <div className="flex items-center justify-center text-blue-600">
              <span className="text-xs">↑ 12 this week</span>
            </div>
          </div>
        </div>

        {/* Conditional Content Based on Active Tab */}
        {activeTab === 'overview' && (
          <>
            {/* Premium Upgrade */}
            <div className="rounded-xl p-6 shadow-lg relative" style={{ backgroundColor: '#e0d8cf' }}>
              <button className="absolute top-4 right-4 p-1">
                <X className="w-5 h-5" style={{ color: '#4a3728' }} />
              </button>
              
              <h3 className="text-xl font-bold mb-3" style={{ color: '#4a3728' }}>
                Enhanced networking with Premium
              </h3>
              <p className="text-sm mb-4 opacity-80" style={{ color: '#4a3728' }}>
                Discover who s been viewing your profile over the past year with Premium Business
              </p>
              
              <div className="flex items-center mb-4">
                <div className="flex -space-x-2 mr-3">
                  <div className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: '#4a3728' }}></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400"></div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-500"></div>
                </div>
                <span className="text-sm" style={{ color: '#4a3728' }}>
                  Join millions using Premium features
                </span>
              </div>
              
              <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full font-medium transition-colors">
                Try Premium for ₹0
              </button>
              <p className="text-xs mt-2 opacity-70" style={{ color: '#4a3728' }}>
                30-day free trial with full support. Cancel anytime before trial ends.
              </p>
            </div>

            {/* Weekly Performance Chart */}
            <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: '#e0d8cf' }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#4a3728' }}>
                Weekly performance trend
              </h3>
              <div className="grid grid-cols-7 gap-2 mb-4">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => (
                  <div key={day} className="text-center">
                    <div className="text-xs mb-2" style={{ color: '#4a3728' }}>{day}</div>
                    <div 
                      className="rounded-lg mx-auto" 
                      style={{ 
                        backgroundColor: '#4a3728', 
                        height: `${[120, 80, 150, 200, 180, 90, 60][index]}px`,
                        width: '24px',
                        opacity: 0.8
                      }}
                    ></div>
                    <div className="text-xs mt-2" style={{ color: '#4a3728' }}>
                      {[162, 98, 245, 312, 278, 134, 89][index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Appearance Sources */}
            <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: '#e0d8cf' }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#4a3728' }}>
                Discovery sources
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium" style={{ color: '#4a3728' }}>Content posts</span>
                    <span className="text-sm font-semibold" style={{ color: '#4a3728' }}>75.9%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="h-3 rounded-full" style={{ backgroundColor: '#4a3728', width: '75.9%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium" style={{ color: '#4a3728' }}>Network suggestions</span>
                    <span className="text-sm font-semibold" style={{ color: '#4a3728' }}>9.4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="h-3 rounded-full" style={{ backgroundColor: '#4a3728', width: '9.4%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium" style={{ color: '#4a3728' }}>Post interactions</span>
                    <span className="text-sm font-semibold" style={{ color: '#4a3728' }}>8.3%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="h-3 rounded-full" style={{ backgroundColor: '#4a3728', width: '8.3%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium" style={{ color: '#4a3728' }}>Search queries</span>
                    <span className="text-sm font-semibold" style={{ color: '#4a3728' }}>6.4%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="h-3 rounded-full" style={{ backgroundColor: '#4a3728', width: '6.4%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Companies */}
            <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: '#e0d8cf' }}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold" style={{ color: '#4a3728' }}>
                  Search appearance insights
                </h3>
                <select className="border rounded-lg px-3 py-2 text-sm" style={{ color: '#4a3728', borderColor: '#4a3728' }}>
                  <option>Leading companies your viewers work at</option>
                </select>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'Tata Consultancy Services', logo: 'TCS' },
                  { name: 'Aculocity', logo: 'AC' },
                  { name: 'ColourDrive', logo: 'CD' },
                  { name: 'Impactis Global', logo: 'IG' },
                  { name: 'Microsoft', logo: 'MS' }
                ].map((company, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-opacity-50 transition-colors" style={{ backgroundColor: '#f6ede8' }}>
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-semibold" style={{ backgroundColor: '#4a3728' }}>
                      {company.logo}
                    </div>
                    <span className="font-medium" style={{ color: '#4a3728' }}>{company.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Items */}
            <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: '#e0d8cf' }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#4a3728' }}>
                Boost your profile visibility
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#f6ede8' }}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#4a3728' }}>
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: '#4a3728' }}>Create a post</h4>
                      <p className="text-sm opacity-80" style={{ color: '#4a3728' }}>
                        Weekly posts can increase your visibility by 4x
                      </p>
                    </div>
                  </div>
                  <button className="border-2 px-4 py-2 rounded-full font-medium hover:bg-opacity-10 transition-colors" style={{ borderColor: '#4a3728', color: '#4a3728' }}>
                    Create post
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#f6ede8' }}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#4a3728' }}>
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: '#4a3728' }}>Engage with content</h4>
                      <p className="text-sm opacity-80" style={{ color: '#4a3728' }}>
                        Commenting on posts increases your feed visibility
                      </p>
                    </div>
                  </div>
                  <button className="border-2 px-4 py-2 rounded-full font-medium hover:bg-opacity-10 transition-colors" style={{ borderColor: '#4a3728', color: '#4a3728' }}>
                    Explore feed
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-lg" style={{ backgroundColor: '#f6ede8' }}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#4a3728' }}>
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold" style={{ color: '#4a3728' }}>Optimize your profile</h4>
                      <p className="text-sm opacity-80" style={{ color: '#4a3728' }}>
                        Updated profiles get seen by more people
                      </p>
                    </div>
                  </div>
                  <button className="border-2 px-4 py-2 rounded-full font-medium hover:bg-opacity-10 transition-colors" style={{ borderColor: '#4a3728', color: '#4a3728' }}>
                    Update profile
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'demographics' && (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Industry Breakdown */}
            <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: '#e0d8cf' }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#4a3728' }}>
                Industry breakdown
              </h3>
              <div className="space-y-4">
                {[
                  { industry: 'Technology', percentage: 42 },
                  { industry: 'Consulting', percentage: 28 },
                  { industry: 'Finance', percentage: 18 },
                  { industry: 'Healthcare', percentage: 12 }
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium" style={{ color: '#4a3728' }}>{item.industry}</span>
                      <span className="text-sm font-semibold" style={{ color: '#4a3728' }}>{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="h-2 rounded-full" style={{ backgroundColor: '#4a3728', width: `${item.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Geographic Distribution */}
            <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: '#e0d8cf' }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#4a3728' }}>
                Geographic reach
              </h3>
              <div className="space-y-3">
                {[
                  { country: 'India', views: 856, flag: '🇮🇳' },
                  { country: 'United States', views: 124, flag: '🇺🇸' },
                  { country: 'United Kingdom', views: 87, flag: '🇬🇧' },
                  { country: 'Canada', views: 66, flag: '🇨🇦' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg" style={{ backgroundColor: '#f6ede8' }}>
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{item.flag}</span>
                      <span className="font-medium" style={{ color: '#4a3728' }}>{item.country}</span>
                    </div>
                    <span className="font-semibold" style={{ color: '#4a3728' }}>{item.views}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="space-y-6">
            {/* Top Performing Content */}
            <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: '#e0d8cf' }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#4a3728' }}>
                Top performing content
              </h3>
              <div className="space-y-4">
                {[
                  { content: 'My journey in tech leadership...', views: 2456, engagement: 89 },
                  { content: 'Industry insights on AI trends...', views: 1834, engagement: 67 },
                  { content: 'Team building strategies...', views: 1245, engagement: 45 }
                ].map((post, index) => (
                  <div key={index} className="p-4 rounded-lg" style={{ backgroundColor: '#f6ede8' }}>
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-medium flex-1 mr-4" style={{ color: '#4a3728' }}>{post.content}</p>
                      <div className="text-right">
                        <div className="text-sm font-semibold" style={{ color: '#4a3728' }}>{post.views} views</div>
                        <div className="text-xs opacity-80" style={{ color: '#4a3728' }}>{post.engagement} engagements</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Rate */}
            <div className="rounded-xl p-6 shadow-lg" style={{ backgroundColor: '#e0d8cf' }}>
              <h3 className="text-xl font-bold mb-6" style={{ color: '#4a3728' }}>
                Engagement metrics
              </h3>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold mb-2" style={{ color: '#4a3728' }}>4.2%</div>
                  <div className="text-sm" style={{ color: '#4a3728' }}>Engagement Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2" style={{ color: '#4a3728' }}>312</div>
                  <div className="text-sm" style={{ color: '#4a3728' }}>Total Likes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-2" style={{ color: '#4a3728' }}>89</div>
                  <div className="text-sm" style={{ color: '#4a3728' }}>Comments</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsDashboard;