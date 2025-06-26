import  { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Users, Plus, Search, Star, TrendingUp, Code, Globe, Shield, Coffee, Calendar, ChevronRight, Settings, Bell, User } from 'lucide-react';

const GroupsDashboard = () => {
  const [activeTab, setActiveTab] = useState('my-groups');
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);

  const myGroups = [
    {
      id: 1,
      name: 'Throne8 Community',
      members: 7,
      icon: '👑',
      category: 'Gaming',
      status: 'active',
      lastActivity: '2 hours ago',
      profileImage: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 2,
      name: 'Japanese Language',
      members: 44904,
      icon: '🇯🇵',
      category: 'Education',
      status: 'active',
      lastActivity: '5 minutes ago',
      profileImage: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 3,
      name: 'Agentic Web Community',
      members: 1096,
      icon: '🌐',
      category: 'Technology',
      status: 'active',
      lastActivity: '1 hour ago',
      profileImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 4,
      name: 'Meta Back-End Developer',
      members: 742,
      icon: '💻',
      category: 'Development',
      status: 'active',
      lastActivity: '3 hours ago',
      profileImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 5,
      name: 'Java Developers Community',
      members: 1069232,
      icon: '☕',
      category: 'Programming',
      status: 'active',
      lastActivity: '30 minutes ago',
      profileImage: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 6,
      name: 'Microsoft Sentinel Community',
      members: 27007,
      icon: '🛡️',
      category: 'Security',
      status: 'active',
      lastActivity: '45 minutes ago',
      profileImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 7,
      name: 'Internship Group',
      members: 1325780,
      icon: '🎯',
      category: 'Career',
      status: 'active',
      lastActivity: '15 minutes ago',
      profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center'
    }
  ];

  const suggestedGroups = [
    {
      id: 8,
      name: 'Internship & Training Opportunities',
      members: 126202,
      icon: '📚',
      category: 'Career',
      trending: true,
      profileImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 9,
      name: 'Public Cloud Computing',
      members: 49365,
      icon: '☁️',
      category: 'Technology',
      trending: false,
      profileImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 10,
      name: 'Algorithms (O)',
      members: 90151,
      icon: '🧮',
      category: 'Programming',
      trending: true,
      profileImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 11,
      name: 'JavaScript Developer',
      members: 83296,
      icon: '⚡',
      category: 'Programming',
      trending: false,
      profileImage: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop&crop=center'
    }
  ];

  const formatMembers = (count) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count.toString();
  };

  const getCategoryIcon = (category) => {
    const icons = {
      Gaming: '🎮',
      Education: '📖',
      Technology: '💻',
      Development: '🚀',
      Programming: '💡',
      Security: '🔒',
      Career: '💼'
    };
    return icons[category] || '📋';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6ede8] via-[#f0e5dc] to-[#e0d8cf] p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-8 bg-white/30 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#4a3728] to-[#4a3728]/70 rounded-xl flex items-center justify-center shadow-lg">
              <Users className="w-6 h-6 text-[#f6ede8]" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#4a3728]">Communities</h1>
              <p className="text-[#4a3728]/60 text-sm">Connect & Collaborate</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-3 bg-white/50 hover:bg-white/70 rounded-xl transition-all duration-200 border border-white/30">
              <Bell className="w-5 h-5 text-[#4a3728]" />
            </button>
            <button className="p-3 bg-white/50 hover:bg-white/70 rounded-xl transition-all duration-200 border border-white/30">
              <Settings className="w-5 h-5 text-[#4a3728]" />
            </button>
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-white/50 shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=center" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4a3728] mb-3 bg-gradient-to-r from-[#4a3728] to-[#4a3728]/80 bg-clip-text text-transparent">
            Your Communities Hub
          </h2>
          <p className="text-[#4a3728]/70 text-lg max-w-2xl mx-auto">
            Connect, learn, and grow with like-minded people across the globe
          </p>
        </div>

        {/* Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab('my-groups')}
            className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 ${
              activeTab === 'my-groups'
                ? 'bg-gradient-to-r from-[#4a3728] to-[#4a3728]/80 text-[#f6ede8] shadow-xl'
                : 'bg-white/60 backdrop-blur-sm text-[#4a3728] hover:bg-white/80 border border-white/40'
            }`}
          >
            <Users className="inline-block w-5 h-5 mr-2" />
            My Groups ({myGroups.length})
          </button>
          <button
            onClick={() => setActiveTab('discover')}
            className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 ${
              activeTab === 'discover'
                ? 'bg-gradient-to-r from-[#4a3728] to-[#4a3728]/80 text-[#f6ede8] shadow-xl'
                : 'bg-white/60 backdrop-blur-sm text-[#4a3728] hover:bg-white/80 border border-white/40'
            }`}
          >
            <Search className="inline-block w-5 h-5 mr-2" />
            Discover
          </button>
          <button 
            onClick={() => setShowCreateModal(true)}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Plus className="inline-block w-5 h-5 mr-2" />
            Create Group
          </button>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#4a3728]/50 w-5 h-5" />
            <input
              type="text"
              placeholder="Search communities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#4a3728]/30 text-[#4a3728] placeholder-[#4a3728]/50"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* My Groups Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 border border-white/30">
              <h2 className="text-2xl font-bold text-[#4a3728] mb-6 flex items-center">
                <Users className="mr-3 w-6 h-6" />
                My Communities
              </h2>
              
              <div className="space-y-4">
                {myGroups.map((group) => (
                  <div
                    key={group.id}
                    className="group bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white/30 hover:bg-white/80 hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-lg border-2 border-white/50">
                            <img 
                              src={group.profileImage} 
                              alt={group.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#4a3728] to-[#4a3728]/70 rounded-lg flex items-center justify-center text-sm shadow-lg">
                            {group.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-[#4a3728] text-xl group-hover:text-[#4a3728]/80 transition-colors">
                            {group.name}
                          </h3>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-[#4a3728]/60 text-sm flex items-center bg-white/40 px-3 py-1 rounded-full">
                              <Users className="w-4 h-4 mr-1" />
                              {formatMembers(group.members)}
                            </span>
                            <span className="text-[#4a3728]/60 text-sm flex items-center bg-white/40 px-3 py-1 rounded-full">
                              {getCategoryIcon(group.category)} {group.category}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 mt-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-[#4a3728]/50 text-sm">
                              Active {group.lastActivity}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <ChevronRight className="w-6 h-6 text-[#4a3728]/40 group-hover:text-[#4a3728]/60 transition-colors group-hover:translate-x-1" />
                        <button className="px-4 py-2 bg-[#4a3728] text-[#f6ede8] text-sm rounded-lg hover:bg-[#4a3728]/80 transition-colors font-medium">
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Stats */}
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 border border-white/30">
              <h3 className="text-xl font-bold text-[#4a3728] mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#4a3728]/70">Total Groups</span>
                  <span className="font-semibold text-[#4a3728]">7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4a3728]/70">Total Members</span>
                  <span className="font-semibold text-[#4a3728]">2.4M+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#4a3728]/70">Active Today</span>
                  <span className="font-semibold text-[#4a3728]">5</span>
                </div>
              </div>
            </div>

            {/* Suggested Groups */}
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 border border-white/30">
              <h3 className="text-xl font-bold text-[#4a3728] mb-4 flex items-center">
                <Star className="mr-2 w-5 h-5" />
                Discover New
              </h3>
              <div className="space-y-3">
                {suggestedGroups.map((group) => (
                  <div
                    key={group.id}
                    className="group bg-white/50 rounded-xl p-4 hover:bg-white/70 transition-all duration-300 cursor-pointer border border-white/20"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-white/50">
                          <img 
                            src={group.profileImage} 
                            alt={group.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-[#4a3728] to-[#4a3728]/70 rounded-lg flex items-center justify-center text-xs shadow-md">
                          {group.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2">
                          <h4 className="font-semibold text-[#4a3728] text-sm truncate">
                            {group.name}
                          </h4>
                          {group.trending && (
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="w-3 h-3 text-green-600" />
                              <span className="text-xs text-green-600 font-medium">Hot</span>
                            </div>
                          )}
                        </div>
                        <p className="text-[#4a3728]/60 text-xs flex items-center mt-1">
                          <Users className="w-3 h-3 mr-1" />
                          {formatMembers(group.members)} members
                        </p>
                      </div>
                    </div>
                    <button className="w-full mt-3 px-3 py-2 bg-[#4a3728] text-[#f6ede8] rounded-lg text-sm font-medium hover:bg-[#4a3728]/90 transition-colors">
                      Join
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Activity Feed */}
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6 border border-white/30">
              <h3 className="text-xl font-bold text-[#4a3728] mb-4 flex items-center">
                <Calendar className="mr-2 w-5 h-5" />
                Recent Activity
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-[#4a3728]/70">New post in Japanese Language</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-[#4a3728]/70">Java Community updated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-[#4a3728]/70">3 new members joined</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Group Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 max-w-md w-full shadow-2xl border border-white/40">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#4a3728] to-[#4a3728]/70 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Plus className="w-8 h-8 text-[#f6ede8]" />
              </div>
              <h3 className="text-2xl font-bold text-[#4a3728] mb-2">Create New Group</h3>
              <p className="text-[#4a3728]/70">Start your own community</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#4a3728] mb-2">Group Name</label>
                <input 
                  type="text" 
                  placeholder="Enter group name..."
                  className="w-full px-4 py-3 bg-white/60 rounded-xl border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#4a3728]/30 text-[#4a3728]"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#4a3728] mb-2">Category</label>
                <select className="w-full px-4 py-3 bg-white/60 rounded-xl border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#4a3728]/30 text-[#4a3728]">
                  <option>Technology</option>
                  <option>Education</option>
                  <option>Programming</option>
                  <option>Career</option>
                  <option>Gaming</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[#4a3728] mb-2">Description</label>
                <textarea 
                  placeholder="Tell us about your group..."
                  rows="3"
                  className="w-full px-4 py-3 bg-white/60 rounded-xl border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#4a3728]/30 text-[#4a3728] resize-none"
                ></textarea>
              </div>
            </div>
            
            <div className="flex space-x-3 mt-8">
              <button 
                onClick={() => setShowCreateModal(false)}
                className="flex-1 px-6 py-3 bg-white/60 text-[#4a3728] rounded-xl font-medium hover:bg-white/80 transition-colors border border-white/40"
              >
                Cancel
              </button>
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-[#4a3728] to-[#4a3728]/80 text-[#f6ede8] rounded-xl font-medium hover:shadow-lg transition-all duration-300">
                Create Group
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupsDashboard;