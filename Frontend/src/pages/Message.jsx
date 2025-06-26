import { useState } from 'react';
import { Search, MoreHorizontal, Edit3, Star, Phone, Video, Send, Paperclip, Image, Smile, CheckCircle, Settings, Menu, X } from 'lucide-react';


const LinkedInMessaging = () => {
  const [selectedChat, setSelectedChat] = useState('vardhan');
  const [message, setMessage] = useState('');
  const [isTyping] = useState(false);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false); 
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false); 
  const contacts = [
    {
      id: 'jayasree',
      name: 'Jayasree R',
      title: 'Senior Product Manager',
      status: 'online',
      lastMessage: 'Sure I will check it out',
      time: 'Jun 23',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b75c?w=150&h=150&fit=crop&crop=face',
      unread: 0,
      isActive: true
    },
    {
      id: 'vardhan',
      name: 'Vardhan Patil',
      title: 'Full Stack Developer',
      status: 'mobile',
      lastMessage: 'Thank you',
      time: 'Jun 23',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      unread: 0,
      isActive: true
    },
    {
      id: 'manjula',
      name: 'Manjula Pajaniraja',
      title: 'UI/UX Designer',
      status: 'offline',
      lastMessage: 'Hi Manjula, it\'s great to connect with you. Looking...',
      time: 'Jun 18',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      unread: 2,
      isActive: false
    },
    {
      id: 'archi',
      name: 'Archi Bopche',
      title: 'Data Scientist',
      status: 'online',
      lastMessage: 'Hey there! 👋 We\'re building something exciting...',
      time: 'Jun 17',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      unread: 0,
      isActive: true
    }
  ];

  const messages = [
    // Same messages array as provided
    {
      id: 1,
      sender: 'vardhan',
      text: 'Hello! Don\'t just watch growth - drive it. Build with us. Grow with us. Let\'s make it unforgettable.',
      time: '9:52 PM',
      type: 'received'
    },
    {
      id: 2,
      sender: 'me',
      text: 'That sounds amazing! I would love to learn more about this opportunity.',
      time: '9:53 PM',
      type: 'sent'
    },
    {
      id: 3,
      sender: 'vardhan',
      text: 'Thank you',
      time: '9:54 PM',
      type: 'received'
    },
    {
      id: 4,
      sender: 'vardhan',
      text: '🚀 BTW, have you checked out the new AR networking features? Game changer for 2025!',
      time: '9:55 PM',
      type: 'received'
    },
    {
      id: 5,
      sender: 'me',
      text: 'Not yet! Tell me more about it 🤔',
      time: '9:56 PM',
      type: 'sent'
    },
    {
      id: 6,
      sender: 'vardhan',
      text: 'Neural matching + AI-powered connections = Mind-blowing results! Want to hop on a quick hologram call? 🎭✨',
      time: '9:57 PM',
      type: 'received'
    }
  ];

  const quickReplies = ["Sounds amazing! 🔥", "Let's do it! 🚀", "Schedule it 📅", "Tell me more 💡"];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-800">
      {/* Main Container */}
      <div className="flex flex-col md:flex-row flex-1 bg-white/70 backdrop-blur-2xl shadow-2xl border border-white/20 m-2 sm:m-4 rounded-3xl overflow-hidden">

        {/* Left Sidebar Toggle Button (Mobile) */}
        <button
          className="md:hidden p-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-b-2xl shadow-lg"
          onClick={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
        >
          <Menu size={24} />
        </button>

        {/* // Updated sidebar component with profile images */}
        <div
          className={`w-full md:w-80 bg-white/95 backdrop-blur-xl border-r border-gray-200/50 transition-all duration-300 md:block ${isLeftSidebarOpen ? 'block' : 'hidden'
            }`}
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-200/50 bg-gradient-to-r from-white/95 to-gray-50/95">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Messages
                </h1>
                <p className="text-sm text-gray-600 mt-1">Connect with your network</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2.5 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105 group">
                  <Settings size={16} className="text-gray-600 group-hover:text-gray-800" />
                </button>
                <button className="p-2.5 hover:bg-gray-100 rounded-xl transition-all duration-200 hover:scale-105 group">
                  <Edit3 size={16} className="text-gray-600 group-hover:text-gray-800" />
                </button>
              </div>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full pl-12 pr-4 py-3.5 bg-gray-100/80 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:bg-white/90 transition-all duration-300 placeholder-gray-400 text-sm shadow-sm"
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="p-4 border-b border-gray-200/50">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {['All', 'Unread', 'Starred', 'Archived'].map((tab, index) => (
                <button
                  key={tab}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${index === 0
                      ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/25'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Contact List */}
          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact, index) => (
              <div
                key={contact.id}
                onClick={() => {
                  setSelectedChat(contact.id);
                  setIsLeftSidebarOpen(false); // Close sidebar on mobile after selection
                }}
                className={`p-4 border-b border-gray-100/50 cursor-pointer transition-all duration-300 hover:bg-gray-50/80 ${selectedChat === contact.id ? 'bg-gradient-to-r from-gray-50 to-gray-100/50 border-l-4 border-l-gray-900' : ''
                  }`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-14 h-14 rounded-2xl object-cover shadow-lg ring-1 ring-gray-200/20"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white shadow-sm ${contact.status === 'online' ? 'bg-emerald-500' :
                        contact.status === 'mobile' ? 'bg-blue-500' : 'bg-gray-400'
                      }`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-base text-gray-900 truncate">{contact.name}</h3>
                      <span className="text-xs text-gray-500">{contact.time}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1 truncate">{contact.title}</p>
                    <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                  </div>

                  {contact.unread > 0 && (
                    <div className="w-6 h-6 bg-gray-900 text-white text-xs rounded-full flex items-center justify-center font-medium shadow-lg">
                      {contact.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100/50">

          {/* Chat Header */}
          <div className="p-6 bg-white/95 backdrop-blur-2xl border-b border-gray-200/60 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <button
                className="md:hidden p-2.5 hover:bg-gray-100 rounded-xl transition-colors"
                onClick={() => setIsLeftSidebarOpen(true)}
              >
                <Menu size={20} className="text-gray-600" />
              </button>
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-white text-xl shadow-lg ring-1 ring-gray-200/20">
                  👨‍💻
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-emerald-500 rounded-full border-3 border-white shadow-sm" />
              </div>
              <div>
                <h2 className="font-semibold text-xl text-gray-900">Vardhan Patil</h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Full Stack Developer</span>
                  <span className="hidden sm:inline text-gray-400">•</span>
                  <span className="text-emerald-600 font-medium">Available now</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button className="p-3 hover:bg-gray-100 rounded-xl transition-all duration-200 group">
                <Phone size={18} className="text-gray-500 group-hover:text-gray-700" />
              </button>
              <button className="p-3 hover:bg-gray-100 rounded-xl transition-all duration-200 group">
                <Video size={18} className="text-gray-500 group-hover:text-gray-700" />
              </button>
              <button className="p-3 hover:bg-gray-100 rounded-xl transition-all duration-200 group">
                <Star size={18} className="text-gray-500 group-hover:text-amber-500" />
              </button>
              <button
                className="p-3 hover:bg-gray-100 rounded-xl transition-all duration-200 group md:hidden"
                onClick={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
              >
                <MoreHorizontal size={18} className="text-gray-500 group-hover:text-gray-700" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="text-center">
              <div className="inline-block px-4 py-2 bg-white/80 rounded-full text-sm text-gray-500 backdrop-blur-sm shadow-sm border border-gray-200/50">
                Today, Thursday
              </div>
            </div>

            {messages.map((msg, index) => (
              <div
                key={msg.id}
                className={`flex ${msg.type === 'sent' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`max-w-[85%] sm:max-w-xs lg:max-w-md px-5 py-4 rounded-3xl shadow-sm backdrop-blur-sm border ${msg.type === 'sent'
                    ? 'bg-gray-900 text-white border-gray-800/20 shadow-lg'
                    : 'bg-white/95 text-gray-800 border-gray-200/40'
                  }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  <div className="flex items-center justify-end gap-2 mt-3">
                    <span className={`text-xs ${msg.type === 'sent' ? 'text-gray-300' : 'text-gray-500'}`}>
                      {msg.time}
                    </span>
                    {msg.type === 'sent' && (
                      <CheckCircle size={12} className="text-gray-300" />
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/95 backdrop-blur-sm px-5 py-4 rounded-3xl shadow-sm border border-gray-200/40">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          <div className="px-6 py-4 border-t border-gray-200/40">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  className="px-4 py-2.5 bg-white/90 hover:bg-gray-50 rounded-2xl text-sm text-gray-700 transition-all duration-200 hover:scale-[1.02] backdrop-blur-sm border border-gray-200/50 whitespace-nowrap shadow-sm hover:shadow-md"
                >
                  {reply}
                </button>
              ))}
            </div>
          </div>

          {/* Message Input */}
          <div className="p-6 bg-white/95 backdrop-blur-2xl border-t border-gray-200/60">
            <div className="flex items-end gap-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full pl-6 pr-20 py-4 bg-gray-100/80 border-0 rounded-3xl focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:bg-white/90 transition-all duration-300 placeholder-gray-400 text-sm shadow-sm"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
                  <button className="p-2 hover:bg-gray-200/80 rounded-xl transition-all duration-200 group">
                    <Paperclip size={16} className="text-gray-500 group-hover:text-gray-700" />
                  </button>
                  <button className="p-2 hover:bg-gray-200/80 rounded-xl transition-all duration-200 group">
                    <Image size={16} className="text-gray-500 group-hover:text-gray-700" />
                  </button>
                  <button className="p-2 hover:bg-gray-200/80 rounded-xl transition-all duration-200 group">
                    <Smile size={16} className="text-gray-500 group-hover:text-gray-700" />
                  </button>
                </div>
              </div>

              <button className="p-4 bg-gray-900 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-800">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div
          className={`w-full md:w-72 bg-white/95 backdrop-blur-xl border-l border-gray-200/50 transition-all duration-300 ${isRightSidebarOpen ? 'block' : 'hidden'
            } md:block fixed md:static right-0 top-0 h-full md:h-auto z-50 md:z-0 overflow-y-auto`}
        >
          {/* Close Button (Mobile Only) */}
          <div className="md:hidden flex justify-between items-center p-4 border-b border-gray-200/50">
            <h3 className="font-semibold text-lg text-gray-900">Tools & Features</h3>
            <button
              className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
              onClick={() => setIsRightSidebarOpen(false)}
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>

          <div className="p-4 space-y-4">
            {/* AI Assistant Card */}
            <div className="bg-white/90 p-4 rounded-2xl shadow-sm border border-gray-200/40 hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-white text-lg">🤖</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">AI Assistant</h3>
                  <p className="text-sm text-gray-600">Smart insights & suggestions</p>
                </div>
                <span className="px-2 py-1 bg-emerald-500 text-white text-xs rounded-full font-medium shadow-sm">NEW</span>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50/80 rounded-xl border border-gray-200/30 hover:scale-[1.02] transition-all duration-200 cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">💡</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 font-medium mb-1">Conversation starter</p>
                      <p className="text-xs text-gray-600">Ask about their recent project launch</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-gray-50/80 rounded-xl border border-gray-200/30 hover:scale-[1.02] transition-all duration-200 cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm">🎯</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-800 font-medium mb-1">Connection Score: 87%</p>
                      <p className="text-xs text-gray-600">High networking potential detected</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Platform Features Card */}
            <div className="bg-white/90 p-4 rounded-2xl shadow-sm border border-gray-200/40 hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg">⚡</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">Platform Tools</h3>
                  <p className="text-sm text-gray-600">Enhanced productivity features</p>
                </div>
              </div>
              <div className="space-y-3">
                {[
                  { icon: '🎭', title: 'Profile Analytics', desc: 'Advanced profile insights', tag: 'PRO' },
                  { icon: '🧠', title: 'Smart Matching', desc: 'AI-powered connections', tag: 'AI' },
                  { icon: '🌍', title: 'Global Network', desc: 'Worldwide professional reach', tag: 'NEW' }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50/80 rounded-xl border border-gray-200/30 hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-7 h-7 bg-gray-800 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">{feature.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm text-gray-900">{feature.title}</span>
                          <span className="text-xs bg-gray-900 text-white px-2 py-0.5 rounded-full font-medium">{feature.tag}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 pl-10">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="bg-white/90 p-4 rounded-2xl shadow-sm border border-gray-200/40 hover:shadow-md transition-all duration-300 hover:scale-[1.01]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-white text-lg">⚡</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900">Quick Actions</h3>
                  <p className="text-sm text-gray-600">Instant productivity tools</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '🎯', title: 'Connect', desc: 'Send request', color: 'bg-gray-50/80 border-gray-200/30' },
                  { icon: '📱', title: 'Voice Note', desc: 'Audio message', color: 'bg-gray-50/80 border-gray-200/30' },
                  { icon: '🤝', title: 'Meet', desc: 'Schedule call', color: 'bg-gray-50/80 border-gray-200/30' },
                  { icon: '💬', title: 'AI Reply', desc: 'Smart response', color: 'bg-gray-50/80 border-gray-200/30' }
                ].map((action, index) => (
                  <button
                    key={index}
                    className={`p-3 ${action.color} rounded-xl hover:scale-105 transition-all duration-200 shadow-sm group border`}
                    aria-label={action.title}
                  >
                    <div className="text-xl mb-2 group-hover:scale-110 transition-transform duration-200">{action.icon}</div>
                    <div className="text-sm font-medium text-gray-900">{action.title}</div>
                    <div className="text-xs text-gray-600">{action.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Premium Upgrade Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
              <div className="relative p-4">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-sm">
                      <span className="text-white text-lg">👑</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-white">Premium</h3>
                      <p className="text-sm text-gray-300">Unlock advanced features</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    {[
                      '🚀 Unlimited messaging',
                      '🔍 Advanced analytics',
                      '🌟 Priority support',
                      '📈 Detailed insights'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-gray-200">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    className="w-full p-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:scale-105"
                    aria-label="Upgrade to Premium"
                  >
                    Upgrade Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInMessaging;