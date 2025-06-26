import { useState } from 'react';
import { 
  Briefcase, 
  FileText, 
  Bookmark, 
  Plus, 
  MessageCircle, 
  HelpCircle, 
  Settings, 
  Eye, 
  MoreHorizontal,
  Building,
  MapPin,
  Clock,
  ChevronRight,
  Bell,
  Search,
  Users,
//   X,
  Edit3,
  Calendar,
  BarChart3,
  TrendingUp,
  Filter,
  Download,
  Star,
  CheckCircle,
//   AlertCircle
} from 'lucide-react';

export default function JobPortalDashboard() {
  const [activeSection, setActiveSection] = useState('posted-jobs');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showNotifications, setShowNotifications] = useState(false);

  const menuItems = [
    { id: 'posted-jobs', label: 'Posted Jobs', icon: FileText, count: 3 },
    { id: 'my-jobs', label: 'My Jobs', icon: Briefcase, count: 12 },
    { id: 'saved-posts', label: 'Saved Posts & Articles', icon: Bookmark, count: 8 },
    { id: 'analytics', label: 'Analytics', icon: BarChart3, count: 0 },
    { id: 'candidates', label: 'Candidates', icon: Users, count: 45 }
  ];

  const jobData = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'OctaNet Services Pvt Ltd.',
      location: 'Bhopal, Madhya Pradesh, India',
      type: 'On-site',
      status: 'Active',
      created: '2 days ago',
      views: 245,
      applications: 23,
      priority: 'high'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'Mumbai, Maharashtra, India',
      type: 'Remote',
      status: 'Draft',
      created: '1 week ago',
      views: 89,
      applications: 12,
      priority: 'medium'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Studios',
      location: 'Delhi, India',
      type: 'Hybrid',
      status: 'Active',
      created: '3 days ago',
      views: 156,
      applications: 31,
      priority: 'high'
    }
  ];

  const notifications = [
    { id: 1, message: 'New application for Software Engineer position', time: '2 hours ago', type: 'application' },
    { id: 2, message: 'Job posting approved by admin', time: '1 day ago', type: 'approval' },
    { id: 3, message: 'Interview scheduled for tomorrow', time: '2 days ago', type: 'interview' }
  ];

  const filteredJobs = jobData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || job.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'active': return 'bg-green-500';
      case 'draft': return 'bg-orange-500';
      case 'closed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityIcon = (priority) => {
    switch(priority) {
      case 'high': return <TrendingUp className="w-4 h-4 text-red-500" />;
      case 'medium': return <TrendingUp className="w-4 h-4 text-yellow-500" />;
      case 'low': return <TrendingUp className="w-4 h-4 text-green-500" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f6ede8' }}>
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#e0d8cf' }}>
                <Briefcase className="w-5 h-5" style={{ color: '#4a3728' }} />
              </div>
              <div>
                <h1 className="text-xl font-bold" style={{ color: '#4a3728' }}>JobPortal</h1>
                <p className="text-sm text-gray-600">Welcome back, User!</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs, companies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:border-gray-400"
                  style={{ borderColor: '#e0d8cf' }}
                />
              </div>
              
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 rounded-lg relative" 
                  style={{ backgroundColor: '#e0d8cf' }}
                >
                  <Bell className="w-5 h-5" style={{ color: '#4a3728' }} />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                    3
                  </span>
                </button>
                
                {showNotifications && (
                  <div className="absolute right-0 top-12 w-80 bg-white rounded-lg shadow-lg border z-50" style={{ borderColor: '#e0d8cf' }}>
                    <div className="p-4 border-b" style={{ borderColor: '#e0d8cf' }}>
                      <h3 className="font-bold" style={{ color: '#4a3728' }}>Notifications</h3>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {notifications.map(notification => (
                        <div key={notification.id} className="p-3 border-b hover:bg-gray-50" style={{ borderColor: '#e0d8cf' }}>
                          <p className="text-sm" style={{ color: '#4a3728' }}>{notification.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="w-8 h-8 rounded-lg flex items-center justify-center font-medium" style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}>
                U
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-6">

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Jobs</p>
                <p className="text-2xl font-bold" style={{ color: '#4a3728' }}>12</p>
              </div>
              <Briefcase className="w-8 h-8" style={{ color: '#4a3728' }} />
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Applications</p>
                <p className="text-2xl font-bold" style={{ color: '#4a3728' }}>66</p>
              </div>
              <Users className="w-8 h-8" style={{ color: '#4a3728' }} />
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Views</p>
                <p className="text-2xl font-bold" style={{ color: '#4a3728' }}>490</p>
              </div>
              <Eye className="w-8 h-8" style={{ color: '#4a3728' }} />
            </div>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Posts</p>
                <p className="text-2xl font-bold" style={{ color: '#4a3728' }}>8</p>
              </div>
              <CheckCircle className="w-8 h-8" style={{ color: '#4a3728' }} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="border-b pb-4 mb-6" style={{ borderColor: '#e0d8cf' }}>
                <h2 className="text-lg font-bold" style={{ color: '#4a3728' }}>
                  Dashboard
                </h2>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
                      activeSection === item.id ? '' : 'hover:bg-gray-50'
                    }`}
                    style={{ 
                      backgroundColor: activeSection === item.id ? '#e0d8cf' : 'transparent',
                      color: '#4a3728'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.count > 0 && (
                        <span className="px-2 py-1 rounded-full text-sm font-medium bg-gray-100">
                          {item.count}
                        </span>
                      )}
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold mb-3" style={{ color: '#4a3728' }}>
                    Posted Jobs
                  </h1>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setFilterStatus('all')}
                      className={`px-4 py-2 rounded-lg font-medium ${filterStatus === 'all' ? '' : 'border'}`}
                      style={{ 
                        backgroundColor: filterStatus === 'all' ? '#e0d8cf' : 'transparent',
                        borderColor: filterStatus === 'all' ? 'transparent' : '#e0d8cf',
                        color: '#4a3728' 
                      }}
                    >
                      All
                    </button>
                    <button 
                      onClick={() => setFilterStatus('active')}
                      className={`px-4 py-2 rounded-lg font-medium ${filterStatus === 'active' ? '' : 'border'}`}
                      style={{ 
                        backgroundColor: filterStatus === 'active' ? '#e0d8cf' : 'transparent',
                        borderColor: filterStatus === 'active' ? 'transparent' : '#e0d8cf',
                        color: '#4a3728' 
                      }}
                    >
                      Active
                    </button>
                    <button 
                      onClick={() => setFilterStatus('draft')}
                      className={`px-4 py-2 rounded-lg font-medium ${filterStatus === 'draft' ? '' : 'border'}`}
                      style={{ 
                        backgroundColor: filterStatus === 'draft' ? '#e0d8cf' : 'transparent',
                        borderColor: filterStatus === 'draft' ? 'transparent' : '#e0d8cf',
                        color: '#4a3728' 
                      }}
                    >
                      Draft
                    </button>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg border hover:bg-gray-50" style={{ borderColor: '#e0d8cf' }}>
                    <Filter className="w-5 h-5" style={{ color: '#4a3728' }} />
                  </button>
                  <button className="p-2 rounded-lg border hover:bg-gray-50" style={{ borderColor: '#e0d8cf' }}>
                    <Download className="w-5 h-5" style={{ color: '#4a3728' }} />
                  </button>
                </div>
              </div>

              {/* Job Cards */}
              <div className="space-y-4">
                {filteredJobs.map((job) => (
                  <div 
                    key={job.id}
                    className="border rounded-2xl p-6 hover:shadow-md transition-shadow"
                    style={{ borderColor: '#e0d8cf' }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white bg-blue-600">
                          {job.company.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-lg font-bold" style={{ color: '#4a3728' }}>
                              {job.title}
                            </h3>
                            {getPriorityIcon(job.priority)}
                          </div>
                          <div className="flex items-center gap-2 mb-2 text-gray-600">
                            <Building className="w-4 h-4" />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location} ({job.type})</span>
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <div className={`w-2 h-2 rounded-full ${getStatusColor(job.status)}`}></div>
                              <span style={{ color: '#4a3728' }}>{job.status}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500">
                              <Clock className="w-4 h-4" />
                              <span>Created {job.created}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm mt-2">
                            <div className="flex items-center gap-1 text-gray-600">
                              <Eye className="w-4 h-4" />
                              <span>{job.views} views</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-600">
                              <Users className="w-4 h-4" />
                              <span>{job.applications} applications</span>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-3">
                            {job.status === 'Draft' ? (
                              <button className="font-medium flex items-center gap-1 px-3 py-1 rounded-lg" style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}>
                                <Edit3 className="w-4 h-4" />
                                Complete draft
                              </button>
                            ) : (
                              <button className="font-medium flex items-center gap-1 px-3 py-1 rounded-lg" style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}>
                                <Eye className="w-4 h-4" />
                                View applications
                              </button>
                            )}
                            <button className="font-medium flex items-center gap-1 px-3 py-1 rounded-lg border" style={{ borderColor: '#e0d8cf', color: '#4a3728' }}>
                              <Edit3 className="w-4 h-4" />
                              Edit
                            </button>
                          </div>
                        </div>
                      </div>
                      <button className="p-2 rounded-lg hover:bg-gray-100">
                        <MoreHorizontal className="w-5 h-5" style={{ color: '#4a3728' }} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {/* Post Job Button */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <button 
                  className="w-full p-4 rounded-xl font-bold flex items-center justify-center gap-2 mb-3"
                  style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}
                >
                  <Plus className="w-5 h-5" />
                  Post a job with AI
                </button>
                <button 
                  className="w-full p-2 rounded-lg font-medium border flex items-center justify-center gap-2"
                  style={{ borderColor: '#e0d8cf', color: '#4a3728' }}
                >
                  <Calendar className="w-4 h-4" />
                  Schedule interview
                </button>
              </div>

              {/* Quick Stats */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <h3 className="font-bold mb-3 text-sm" style={{ color: '#4a3728' }}>This Week</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">New Applications</span>
                    <span className="font-bold text-sm" style={{ color: '#4a3728' }}>23</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Profile Views</span>
                    <span className="font-bold text-sm" style={{ color: '#4a3728' }}>156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Interviews</span>
                    <span className="font-bold text-sm" style={{ color: '#4a3728' }}>5</span>
                  </div>
                </div>
              </div>

              {/* Support Chat */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#e0d8cf' }}>
                    <MessageCircle className="w-5 h-5" style={{ color: '#4a3728' }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm" style={{ color: '#4a3728' }}>Chat with support</h3>
                    <p className="text-xs text-gray-600">Online now</p>
                  </div>
                </div>
                <button 
                  className="w-full border rounded-lg py-2 text-sm font-medium hover:bg-gray-50"
                  style={{ borderColor: '#e0d8cf', color: '#4a3728' }}
                >
                  Start chat
                </button>
              </div>

              {/* Help Center */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#e0d8cf' }}>
                    <HelpCircle className="w-5 h-5" style={{ color: '#4a3728' }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm" style={{ color: '#4a3728' }}>Help Center</h3>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-4 shadow-sm">
                <h3 className="font-bold mb-3 text-sm" style={{ color: '#4a3728' }}>Quick Actions</h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 text-sm" style={{ color: '#4a3728' }}>
                    <BarChart3 className="w-4 h-4" />
                    View analytics
                  </button>
                  <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 text-sm" style={{ color: '#4a3728' }}>
                    <Settings className="w-4 h-4" />
                    Account settings
                  </button>
                  <button className="w-full flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 text-sm" style={{ color: '#4a3728' }}>
                    <Star className="w-4 h-4" />
                    Saved searches
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { 
//   Briefcase, 
//   FileText, 
//   Bookmark, 
//   Plus, 
//   MessageCircle, 
//   HelpCircle, 
//   Settings, 
//   Eye, 
//   MoreHorizontal,
//   Building,
//   MapPin,
//   Clock,
//   ChevronRight,
//   Bell,
//   Search,
//   Users,
//   Edit3,
//   Calendar,
//   BarChart3,
//   TrendingUp,
//   Filter,
//   Download,
//   Star,
//   CheckCircle,
// } from 'lucide-react';

// export default function JobPortalDashboard() {
//   const [activeSection, setActiveSection] = useState('posted-jobs');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [showNotifications, setShowNotifications] = useState(false);

//   const menuItems = [
//     { id: 'posted-jobs', label: 'Posted Jobs', icon: FileText, count: 3 },
//     { id: 'my-jobs', label: 'My Jobs', icon: Briefcase, count: 12 },
//     { id: 'saved-posts', label: 'Saved Posts & Articles', icon: Bookmark, count: 8 },
//     { id: 'analytics', label: 'Analytics', icon: BarChart3, count: 0 },
//     { id: 'candidates', label: 'Candidates', icon: Users, count: 45 }
//   ];

//   const jobData = [
//     {
//       id: 1,
//       title: 'Software Engineer',
//       company: 'OctaNet Services Pvt Ltd.',
//       location: 'Bhopal, Madhya Pradesh, India',
//       type: 'On-site',
//       status: 'Active',
//       created: '2 days ago',
//       views: 245,
//       applications: 23,
//       priority: 'high'
//     },
//     {
//       id: 2,
//       title: 'Frontend Developer',
//       company: 'TechCorp Solutions',
//       location: 'Mumbai, Maharashtra, India',
//       type: 'Remote',
//       status: 'Draft',
//       created: '1 week ago',
//       views: 89,
//       applications: 12,
//       priority: 'medium'
//     },
//     {
//       id: 3,
//       title: 'UI/UX Designer',
//       company: 'Creative Studios',
//       location: 'Delhi, India',
//       type: 'Hybrid',
//       status: 'Active',
//       created: '3 days ago',
//       views: 156,
//       applications: 31,
//       priority: 'high'
//     }
//   ];

//   const notifications = [
//     { id: 1, message: 'New application for Software Engineer position', time: '2 hours ago', type: 'application' },
//     { id: 2, message: 'Job posting approved by admin', time: '1 day ago', type: 'approval' },
//     { id: 3, message: 'Interview scheduled for tomorrow', time: '2 days ago', type: 'interview' }
//   ];

//   const filteredJobs = jobData.filter(job => {
//     const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesFilter = filterStatus === 'all' || job.status.toLowerCase() === filterStatus.toLowerCase();
//     return matchesSearch && matchesFilter;
//   });

//   const getStatusColor = (status) => {
//     switch(status.toLowerCase()) {
//       case 'active': return 'bg-green-500';
//       case 'draft': return 'bg-orange-500';
//       case 'closed': return 'bg-red-500';
//       default: return 'bg-gray-500';
//     }
//   };

//   const getPriorityIcon = (priority) => {
//     switch(priority) {
//       case 'high': return <TrendingUp className="w-4 h-4 text-red-500" />;
//       case 'medium': return <TrendingUp className="w-4 h-4 text-yellow-500" />;
//       case 'low': return <TrendingUp className="w-4 h-4 text-green-500" />;
//       default: return null;
//     }
//   };

//   // Animation variants
//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1, duration: 0.3, ease: 'easeOut' }
//     }),
//     hover: { scale: 1.02, transition: { duration: 0.2 } }
//   };

//   const sidebarItemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: (i) => ({
//       opacity: 1,
//       x: 0,
//       transition: { delay: i * 0.1, duration: 0.3, ease: 'easeOut' }
//     }),
//     hover: { scale: 1.05, backgroundColor: '#ede4de', transition: { duration: 0.2 } }
//   };

//   const notificationVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
//     exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
//   };

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: '#f6ede8' }}>
//       {/* Header */}
//       <motion.div 
//         className="shadow-sm"
//         style={{ backgroundColor: '#f6ede8' }}
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4, ease: 'easeOut' }}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#e0d8cf' }}>
//                 <Briefcase className="w-5 h-5" style={{ color: '#4a3728' }} />
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold" style={{ color: '#4a3728' }}>JobPortal</h1>
//                 <p className="text-sm text-gray-600">Welcome back, User!</p>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-4">
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
//                 <input
//                   type="text"
//                   placeholder="Search jobs, companies..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:border-gray-400"
//                   style={{ borderColor: '#e0d8cf', backgroundColor: '#f6ede8', color: '#4a3728' }}
//                 />
//               </div>
              
//               <div className="relative">
//                 <motion.button 
//                   onClick={() => setShowNotifications(!showNotifications)}
//                   className="p-2 rounded-lg relative" 
//                   style={{ backgroundColor: '#e0d8cf' }}
//                   whileHover={{ scale: 1.1 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Bell className="w-5 h-5" style={{ color: '#4a3728' }} />
//                   <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
//                     3
//                   </span>
//                 </motion.button>
                
//                 <AnimatePresence>
//                   {showNotifications && (
//                     <motion.div 
//                       className="absolute right-0 top-12 w-80 rounded-lg shadow-lg border z-50" 
//                       style={{ backgroundColor: '#f6ede8', borderColor: '#e0d8cf' }}
//                       variants={notificationVariants}
//                       initial="hidden"
//                       animate="visible"
//                       exit="exit"
//                     >
//                       <div className="p-4 border-b" style={{ borderColor: '#e0d8cf' }}>
//                         <h3 className="font-bold" style={{ color: '#4a3728' }}>Notifications</h3>
//                       </div>
//                       <div className="max-h-64 overflow-y-auto">
//                         {notifications.map(notification => (
//                           <motion.div 
//                             key={notification.id} 
//                             className="p-3 border-b" 
//                             style={{ borderColor: '#e0d8cf' }}
//                             whileHover={{ backgroundColor: '#ede4de' }}
//                           >
//                             <p className="text-sm" style={{ color: '#4a3728' }}>{notification.message}</p>
//                             <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
              
//               <div className="w-8 h-8 rounded-lg flex items-center justify-center font-medium" style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}>
//                 U
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       <div className="max-w-7xl mx-auto p-6">
//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
//           {[
//             { title: 'Total Jobs', value: 12, icon: Briefcase },
//             { title: 'Applications', value: 66, icon: Users },
//             { title: 'Total Views', value: 490, icon: Eye },
//             { title: 'Active Posts', value: 8, icon: CheckCircle }
//           ].map((stat, index) => (
//             <motion.div 
//               key={index}
//               className="rounded-2xl p-4 shadow-sm"
//               style={{ backgroundColor: '#f6ede8' }}
//               variants={cardVariants}
//               initial="hidden"
//               animate="visible"
//               custom={index}
//               whileHover="hover"
//             >
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm text-gray-600">{stat.title}</p>
//                   <p className="text-2xl font-bold" style={{ color: '#4a3728' }}>{stat.value}</p>
//                 </div>
//                 <stat.icon className="w-8 h-8" style={{ color: '#4a3728' }} />
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//           {/* Sidebar */}
//           <div className="lg:col-span-1">
//             <motion.div 
//               className="rounded-2xl p-6 shadow-sm"
//               style={{ backgroundColor: '#f6ede8' }}
//               initial={{ opacity: 0, x: -50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.4, ease: 'easeOut' }}
//             >
//               <div className="border-b pb-4 mb-6" style={{ borderColor: '#e0d8cf' }}>
//                 <h2 className="text-lg font-bold" style={{ color: '#4a3728' }}>
//                   Dashboard
//                 </h2>
//               </div>

//               <nav className="space-y-2">
//                 {menuItems.map((item, index) => (
//                   <motion.button
//                     key={item.id}
//                     onClick={() => setActiveSection(item.id)}
//                     className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors ${
//                       activeSection === item.id ? '' : ''
//                     }`}
//                     style={{ 
//                       backgroundColor: activeSection === item.id ? '#e0d8cf' : 'transparent',
//                       color: '#4a3728'
//                     }}
//                     variants={sidebarItemVariants}
//                     initial="hidden"
//                     animate="visible"
//                     custom={index}
//                     whileHover="hover"
//                   >
//                     <div className="flex items-center gap-3">
//                       <item.icon className="w-5 h-5" style={{ color: '#4a3728' }} />
//                       <span className="font-medium">{item.label}</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       {item.count > 0 && (
//                         <span className="px-2 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}>
//                           {item.count}
//                         </span>
//                       )}
//                       <ChevronRight className="w-4 h-4" style={{ color: '#4a3728' }} />
//                     </div>
//                   </motion.button>
//                 ))}
//               </nav>
//             </motion.div>
//           </div>

//           {/* Main Content */}
//           <div className="lg:col-span-2">
//             <motion.div 
//               className="rounded-2xl p-6 shadow-sm"
//               style={{ backgroundColor: '#f6ede8' }}
//               initial={{ opacity: 0, y: 50 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.4, ease: 'easeOut' }}
//             >
//               <div className="flex items-center justify-between mb-6">
//                 <div>
//                   <h1 className="text-2xl font-bold mb-3" style={{ color: '#4a3728' }}>
//                     Posted Jobs
//                   </h1>
//                   <div className="flex gap-3">
//                     {['all', 'active', 'draft'].map((status) => (
//                       <motion.button 
//                         key={status}
//                         onClick={() => setFilterStatus(status)}
//                         className={`px-4 py-2 rounded-lg font-medium ${filterStatus === status ? '' : 'border'}`}
//                         style={{ 
//                           backgroundColor: filterStatus === status ? '#e0d8cf' : 'transparent',
//                           borderColor: filterStatus === status ? 'transparent' : '#e0d8cf',
//                           color: '#4a3728' 
//                         }}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         {status.charAt(0).toUpperCase() + status.slice(1)}
//                       </motion.button>
//                     ))}
//                   </div>
//                 </div>
                
//                 <div className="flex gap-2">
//                   {[Filter, Download].map((Icon, index) => (
//                     <motion.button 
//                       key={Icon.displayName || Icon.name || index}
//                       className="p-2 rounded-lg border" 
//                       style={{ borderColor: '#e0d8cf', backgroundColor: '#f6ede8' }}
//                       whileHover={{ scale: 1.1, backgroundColor: '#ede4de' }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <Icon className="w-5 h-5" style={{ color: '#4a3728' }} />
//                     </motion.button>
//                   ))}
//                 </div>
//               </div>

//               {/* Job Cards */}
//               <div className="space-y-4">
//                 {filteredJobs.map((job, index) => (
//                   <motion.div 
//                     key={job.id}
//                     className="border rounded-2xl p-6 transition-shadow"
//                     style={{ borderColor: '#e0d8cf', backgroundColor: '#f6ede8' }}
//                     variants={cardVariants}
//                     initial="hidden"
//                     animate="visible"
//                     custom={index}
//                     whileHover="hover"
//                   >
//                     <div className="flex items-start justify-between">
//                       <div className="flex gap-4">
//                         <div className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white bg-blue-600">
//                           {job.company.charAt(0)}
//                         </div>
//                         <div className="flex-1">
//                           <div className="flex items-center gap-2 mb-1">
//                             <h3 className="text-lg font-bold" style={{ color: '#4a3728' }}>
//                               {job.title}
//                             </h3>
//                             {getPriorityIcon(job.priority)}
//                           </div>
//                           <div className="flex items-center gap-2 mb-2 text-gray-600">
//                             <Building className="w-4 h-4" style={{ color: '#4a3728' }} />
//                             <span>{job.company}</span>
//                           </div>
//                           <div className="flex items-center gap-1 text-sm text-gray-500 mb-3">
//                             <MapPin className="w-4 h-4" style={{ color: '#4a3728' }} />
//                             <span>{job.location} ({job.type})</span>
//                           </div>
//                           <div className="flex items-center gap-4 text-sm">
//                             <div className="flex items-center gap-1">
//                               <div className={`w-2 h-2 rounded-full ${getStatusColor(job.status)}`}></div>
//                               <span style={{ color: '#4a3728' }}>{job.status}</span>
//                             </div>
//                             <div className="flex items-center gap-1 text-gray-500">
//                               <Clock className="w-4 h-4" style={{ color: '#4a3728' }} />
//                               <span>Created {job.created}</span>
//                             </div>
//                           </div>
//                           <div className="flex items-center gap-4 text-sm mt-2">
//                             <div className="flex items-center gap-1 text-gray-600">
//                               <Eye className="w-4 h-4" style={{ color: '#4a3728' }} />
//                               <span>{job.views} views</span>
//                             </div>
//                             <div className="flex items-center gap-1 text-gray-600">
//                               <Users className="w-4 h-4" style={{ color: '#4a3728' }} />
//                               <span>{job.applications} applications</span>
//                             </div>
//                           </div>
//                           <div className="flex gap-2 mt-3">
//                             <motion.button 
//                               className="font-medium flex items-center gap-1 px-3 py-1 rounded-lg" 
//                               style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}
//                               whileHover={{ scale: 1.05, backgroundColor: '#d9cfc6' }}
//                               whileTap={{ scale: 0.95 }}
//                             >
//                               {job.status === 'Draft' ? (
//                                 <>
//                                   <Edit3 className="w-4 h-4" style={{ color: '#4a3728' }} />
//                                   Complete draft
//                                 </>
//                               ) : (
//                                 <>
//                                   <Eye className="w-4 h-4" style={{ color: '#4a3728' }} />
//                                   View applications
//                                 </>
//                               )}
//                             </motion.button>
//                             <motion.button 
//                               className="font-medium flex items-center gap-1 px-3 py-1 rounded-lg border" 
//                               style={{ borderColor: '#e0d8cf', color: '#4a3728', backgroundColor: '#f6ede8' }}
//                               whileHover={{ scale: 1.05, backgroundColor: '#ede4de' }}
//                               whileTap={{ scale: 0.95 }}
//                             >
//                               <Edit3 className="w-4 h-4" style={{ color: '#4a3728' }} />
//                               Edit
//                             </motion.button>
//                           </div>
//                         </div>
//                       </div>
//                       <motion.button 
//                         className="p-2 rounded-lg"
//                         style={{ backgroundColor: '#f6ede8' }}
//                         whileHover={{ scale: 1.1, backgroundColor: '#ede4de' }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <MoreHorizontal className="w-5 h-5" style={{ color: '#4a3728' }} />
//                       </motion.button>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>

//           {/* Right Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="space-y-4">
//               {/* Post Job Button */}
//               <motion.div 
//                 className="rounded-2xl p-4 shadow-sm"
//                 style={{ backgroundColor: '#f6ede8' }}
//                 variants={cardVariants}
//                 initial="hidden"
//                 animate="visible"
//                 custom={0}
//                 whileHover="hover"
//               >
//                 <motion.button 
//                   className="w-full p-4 rounded-xl font-bold flex items-center justify-center gap-2 mb-3"
//                   style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}
//                   whileHover={{ scale: 1.05, backgroundColor: '#d9cfc6' }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Plus className="w-5 h-5" style={{ color: '#4a3728' }} />
//                   Post a job with AI
//                 </motion.button>
//                 <motion.button 
//                   className="w-full p-2 rounded-lg font-medium border flex items-center justify-center gap-2"
//                   style={{ borderColor: '#e0d8cf', color: '#4a3728', backgroundColor: '#f6ede8' }}
//                   whileHover={{ scale: 1.05, backgroundColor: '#ede4de' }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   <Calendar className="w-4 h-4" style={{ color: '#4a3728' }} />
//                   Schedule interview
//                 </motion.button>
//               </motion.div>

//               {/* Quick Stats */}
//               <motion.div 
//                 className="rounded-2xl p-4 shadow-sm"
//                 style={{ backgroundColor: '#f6ede8' }}
//                 variants={cardVariants}
//                 initial="hidden"
//                 animate="visible"
//                 custom={1}
//                 whileHover="hover"
//               >
//                 <h3 className="font-bold mb-3 text-sm" style={{ color: '#4a3728' }}>This Week</h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-sm text-gray-600">New Applications</span>
//                     <span className="font-bold text-sm" style={{ color: '#4a3728' }}>23</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-sm text-gray-600">Profile Views</span>
//                     <span className="font-bold text-sm" style={{ color: '#4a3728' }}>156</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-sm text-gray-600">Interviews</span>
//                     <span className="font-bold text-sm" style={{ color: '#4a3728' }}>5</span>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Support Chat */}
//               <motion.div 
//                 className="rounded-2xl p-4 shadow-sm"
//                 style={{ backgroundColor: '#f6ede8' }}
//                 variants={cardVariants}
//                 initial="hidden"
//                 animate="visible"
//                 custom={2}
//                 whileHover="hover"
//               >
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#e0d8cf' }}>
//                     <MessageCircle className="w-5 h-5" style={{ color: '#4a3728' }} />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-sm" style={{ color: '#4a3728' }}>Chat with support</h3>
//                     <p className="text-xs text-gray-600">Online now</p>
//                   </div>
//                 </div>
//                 <motion.button 
//                   className="w-full border rounded-lg py-2 text-sm font-medium"
//                   style={{ borderColor: '#e0d8cf', color: '#4a3728', backgroundColor: '#f6ede8' }}
//                   whileHover={{ scale: 1.05, backgroundColor: '#ede4de' }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Start chat
//                 </motion.button>
//               </motion.div>

//               {/* Help Center */}
//               <motion.div 
//                 className="rounded-2xl p-4 shadow-sm"
//                 style={{ backgroundColor: '#f6ede8' }}
//                 variants={cardVariants}
//                 initial="hidden"
//                 animate="visible"
//                 custom={3}
//                 whileHover="hover"
//               >
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#e0d8cf' }}>
//                     <HelpCircle className="w-5 h-5" style={{ color: '#4a3728' }} />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-sm" style={{ color: '#4a3728' }}>Help Center</h3>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Quick Actions */}
//               <motion.div 
//                 className="rounded-2xl p-4 shadow-sm"
//                 style={{ backgroundColor: '#f6ede8' }}
//                 variants={cardVariants}
//                 initial="hidden"
//                 animate="visible"
//                 custom={4}
//                 whileHover="hover"
//               >
//                 <h3 className="font-bold mb-3 text-sm" style={{ color: '#4a3728' }}>Quick Actions</h3>
//                 <div className="space-y-2">
//                   {[
//                     { icon: BarChart3, label: 'View analytics' },
//                     { icon: Settings, label: 'Account settings' },
//                     { icon: Star, label: 'Saved searches' }
//                   ].map((action, index) => (
//                     <motion.button 
//                       key={index}
//                       className="w-full flex items-center gap-2 p-2 rounded-lg text-sm" 
//                       style={{ color: '#4a3728', backgroundColor: '#f6ede8' }}
//                       whileHover={{ scale: 1.05, backgroundColor: '#ede4de' }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <action.icon className="w-4 h-4" style={{ color: '#4a3728' }} />
//                       {action.label}
//                     </motion.button>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

