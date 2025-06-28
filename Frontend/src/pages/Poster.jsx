/* eslint-disable react/prop-types */
import  { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Users, Calendar, Plus, MoreHorizontal, Edit3, Share2, MessageCircle, ThumbsUp, Bookmark, Eye, TrendingUp, Bell, X, ArrowRight, Heart, Send } from 'lucide-react';

const LinkedInNewsletter = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [subscriberCount, setSubscriberCount] = useState(2247);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [contentVisible, setContentVisible] = useState(true);

  const sidebarItems = [
    { title: "Developer Community", icon: Users, active: true, members: "45K" },
    { title: "React Enthusiasts", icon: Users, members: "32K" },
    { title: "Web Design Hub", icon: Users, members: "28K" }
  ];

  const comments = [
    { name: "Sarah Chen", time: "2h", comment: "This is exactly what I needed! Great insights.", likes: 12 },
    { name: "Mike Rodriguez", time: "4h", comment: "Excellent breakdown. Keep up the great work!", likes: 8 }
  ];

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const handleSubscribe = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSubscriberCount(prev => prev + 1);
      setIsLoading(false);
      openModal('success');
    }, 1500);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fafafa' }}>
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-40" style={{ borderColor: '#e1e5e9' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-semibold" style={{ color: '#0066cc' }}>TechConnect</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Network</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Jobs</a>
            </nav>
          </div>
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <Bell size={20} />
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-600"></div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-lg border p-4" style={{ borderColor: '#e1e5e9' }}>
              <h3 className="font-semibold mb-4 text-gray-900">Communities</h3>
              <div className="space-y-2">
                {sidebarItems.map((item, index) => (
                  <div key={index} 
                       className={`flex items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-gray-50 ${item.active ? 'bg-blue-50' : ''}`}
                       onClick={() => openModal('community')}>
                    <div className="flex items-center space-x-2">
                      <item.icon size={16} className="text-gray-600" />
                      <span className="text-sm text-gray-700">{item.title}</span>
                    </div>
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                      {item.members}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border p-4" style={{ borderColor: '#e1e5e9' }}>
              <h3 className="font-semibold mb-4 text-gray-900">Upcoming Events</h3>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100" 
                     onClick={() => openModal('event')}>
                  <p className="font-medium text-sm text-gray-900">Tech Summit 2025</p>
                  <p className="text-xs text-gray-500 mb-1">July 15 • Virtual</p>
                  <p className="text-xs text-gray-600">500+ attending</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Newsletter Header */}
            <div className="bg-white rounded-lg border p-6 mb-6" style={{ borderColor: '#e1e5e9' }}>
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold text-lg">
                    AT
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        NEWSLETTER
                      </span>
                    </div>
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                      TechSparks Weekly
                    </h1>
                    <p className="text-gray-600">
                      Weekly tech insights and innovation trends
                    </p>
                  </div>
                </div>
                <MoreHorizontal size={20} className="text-gray-400 cursor-pointer" />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div>
                    <p className="font-semibold text-gray-900">Alex Thompson</p>
                    <p className="text-sm text-gray-500">
                      {subscriberCount.toLocaleString()} subscribers
                    </p>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                          onClick={handleSubscribe}>
                    Subscribe
                  </button>
                  <button className="p-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50">
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Latest Edition */}
            <div className="bg-white rounded-lg border overflow-hidden" style={{ borderColor: '#e1e5e9' }}>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-sm text-gray-500">Published 2 weeks ago</p>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Eye size={14} />
                    <span>1.2K views</span>
                  </div>
                </div>
              </div>
              
              {/* Featured Image */}
              <div className="h-32 bg-gradient-to-r from-blue-500 to-blue-600 cursor-pointer"
                   onClick={() => openModal('newsletter')}>
                <div className="h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <TrendingUp size={24} className="mx-auto mb-2" />
                    <p className="font-semibold">Innovation Weekly</p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 cursor-pointer hover:text-blue-600" 
                    onClick={() => openModal('newsletter')}>
                  AI Tools Transforming Product Development
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover cutting-edge AI tools reshaping how we build products, 
                  from concept to deployment.
                </p>
                
                <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: '#e1e5e9' }}>
                  <div className="flex items-center space-x-4">
                    <button className={`flex items-center space-x-1 px-2 py-1 rounded text-sm ${isLiked ? 'text-red-500' : 'text-gray-600 hover:text-red-500'}`}
                            onClick={toggleLike}>
                      <Heart size={16} fill={isLiked ? 'currentColor' : 'none'} />
                      <span>{isLiked ? 157 : 156}</span>
                    </button>
                    <button className="flex items-center space-x-1 px-2 py-1 rounded text-sm text-gray-600 hover:text-blue-600"
                            onClick={() => setShowComments(!showComments)}>
                      <MessageCircle size={16} />
                      <span>23</span>
                    </button>
                  </div>
                  <button onClick={toggleBookmark}>
                    <Bookmark size={18} 
                             className={isBookmarked ? 'text-blue-600' : 'text-gray-400 hover:text-blue-600'} 
                             fill={isBookmarked ? 'currentColor' : 'none'} />
                  </button>
                </div>

                {/* Comments Section */}
                {showComments && (
                  <div className="mt-4 pt-4 space-y-3 border-t" style={{ borderColor: '#e1e5e9' }}>
                    {comments.map((comment, index) => (
                      <div key={index} className="flex space-x-2">
                        <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center text-xs font-medium text-gray-600">
                          {comment.name.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-sm text-gray-900">{comment.name}</span>
                            <span className="text-xs text-gray-500">{comment.time}</span>
                          </div>
                          <p className="text-sm text-gray-700">{comment.comment}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  {activeModal === 'newsletter' && 'Newsletter Content'}
                  {activeModal === 'community' && 'Community Details'}
                  {activeModal === 'event' && 'Event Information'}
                  {activeModal === 'success' && 'Success!'}
                </h2>
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-600">
                  <X size={20} />
                </button>
              </div>
              
              {activeModal === 'newsletter' && (
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2 text-gray-900">
                      AI Tools Transforming Product Development
                    </h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Explore the latest AI breakthrough tools changing how products are designed and built.
                    </p>
                    <p className="text-sm text-gray-600">Key topics: GPT-4 automation, AI research insights, ML optimization</p>
                  </div>
                  <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                    Read Full Article
                  </button>
                </div>
              )}

              {activeModal === 'success' && (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="font-semibold text-gray-900">Successfully Subscribed!</h3>
                  <p className="text-gray-600">You'll receive weekly tech insights and innovations.</p>
                </div>
              )}

              {activeModal === 'community' && (
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2 text-gray-900">Developer Community</h3>
                    <p className="text-gray-700 text-sm">
                      Join 45,000+ developers sharing knowledge and collaborating on projects.
                    </p>
                  </div>
                  <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                    Join Community
                  </button>
                </div>
              )}

              {activeModal === 'event' && (
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold mb-2 text-gray-900">Tech Summit 2025</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      Industry leaders and innovators for presentations and networking.
                    </p>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>📅 July 15, 2025</p>
                      <p>🌐 Virtual Event</p>
                      <p>👥 500+ registered</p>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                    Register Now
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkedInNewsletter;