import  { useState } from 'react';
import { Plus, Search, Users, Calendar, TrendingUp, Settings, Bell, BarChart3, Send, Archive, Download, Upload, Zap, Target, Star, Trash2 } from 'lucide-react';

export default function NewsletterDashboard() {
  const [newsletters, setNewsletters] = useState([
    {
      id: 1,
      title: "TechSparks",
      author: "Author",
      subscribers: 1446,
      description: "Latest technology trends and insights",
      category: "Technology",
      lastSent: "2 days ago",
      openRate: "24.5%",
      profileImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=face",
      isActive: true,
      totalSent: 45,
      avgClickRate: "12.3%",
      revenue: "$1,250",
      growth: "+15%",
      tags: ["Tech", "Innovation", "AI"],
      isFavorite: true
    },
    {
      id: 2,
      title: "OPEN JOB WORK",
      author: "Human Resources Service",
      subscribers: 892,
      description: "Recruitment Specialist || Marketing Professional || Social Media Executive || Analyst || Content Creator",
      category: "Jobs",
      lastSent: "1 week ago",
      openRate: "31.2%",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      isActive: true,
      totalSent: 23,
      avgClickRate: "18.7%",
      revenue: "$890",
      growth: "+8%",
      tags: ["Jobs", "HR", "Career"],
      isFavorite: false
    },
    {
      id: 3,
      title: "India Career Chronicle",
      author: "Career Guide",
      subscribers: 2150,
      description: "Navigating Your Path to Success: Explore Top Job Opportunities Across India!",
      category: "Career",
      lastSent: "3 days ago",
      openRate: "28.7%",
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b5a4e8b5?w=100&h=100&fit=crop&crop=face",
      isActive: true,
      totalSent: 67,
      avgClickRate: "15.2%",
      revenue: "$2,100",
      growth: "+22%",
      tags: ["Career", "India", "Jobs"],
      isFavorite: true
    },
    {
      id: 4,
      title: "ServiceNow's The Lead Line",
      author: "ServiceNow",
      subscribers: 5200,
      description: "Tech and strategy insights for business leaders",
      category: "Business",
      lastSent: "5 days ago",
      openRate: "22.1%",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      isActive: false,
      totalSent: 89,
      avgClickRate: "9.8%",
      revenue: "$3,200",
      growth: "-5%",
      tags: ["Business", "Strategy", "Leadership"],
      isFavorite: false
    },
    {
      id: 5,
      title: "Power with Purpose Digest",
      author: "Cummins India",
      subscribers: 3400,
      description: "Your monthly newsletter from Cummins India which will showcase #LifeAtCummins",
      category: "Corporate",
      lastSent: "1 week ago",
      openRate: "19.8%",
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      isActive: true,
      totalSent: 34,
      avgClickRate: "11.4%",
      revenue: "$1,800",
      growth: "+12%",
      tags: ["Corporate", "Purpose", "Culture"],
      isFavorite: false
    }
  ]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [selectedNewsletter, setSelectedNewsletter] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortBy, setSortBy] = useState('subscribers');
  const [showBulkActions, setShowBulkActions] = useState(false);
  const [selectedNewsletters, setSelectedNewsletters] = useState([]);
  const [showImportModal, setShowImportModal] = useState(false);
  const [newNewsletter, setNewNewsletter] = useState({
    title: '',
    description: '',
    category: 'Technology',
    profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf4a4624?w=100&h=100&fit=crop&crop=face',
    tags: []
  });

  const handleCreateNewsletter = () => {
    if (newNewsletter.title && newNewsletter.description) {
      const newsletter = {
        id: newsletters.length + 1,
        title: newNewsletter.title,
        author: "You",
        subscribers: 0,
        description: newNewsletter.description,
        category: newNewsletter.category,
        lastSent: "Never",
        openRate: "0%",
        profileImage: newNewsletter.profileImage,
        isActive: true,
        totalSent: 0,
        avgClickRate: "0%",
        revenue: "$0",
        growth: "0%",
        tags: newNewsletter.tags,
        isFavorite: false
      };
      setNewsletters([newsletter, ...newsletters]);
      setNewNewsletter({ 
        title: '', 
        description: '', 
        category: 'Technology', 
        profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf4a4624?w=100&h=100&fit=crop&crop=face', 
        tags: [] 
      });
      setShowCreateForm(false);
    }
  };

  const toggleFavorite = (id) => {
    setNewsletters(newsletters.map(n => 
      n.id === id ? { ...n, isFavorite: !n.isFavorite } : n
    ));
  };

  const handleBulkAction = (action) => {
    if (action === 'delete') {
      setNewsletters(newsletters.filter(n => !selectedNewsletters.includes(n.id)));
    } else if (action === 'activate') {
      setNewsletters(newsletters.map(n => 
        selectedNewsletters.includes(n.id) ? { ...n, isActive: true } : n
      ));
    } else if (action === 'deactivate') {
      setNewsletters(newsletters.map(n => 
        selectedNewsletters.includes(n.id) ? { ...n, isActive: false } : n
      ));
    }
    setSelectedNewsletters([]);
    setShowBulkActions(false);
  };

  const exportData = () => {
    const dataStr = JSON.stringify(newsletters, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = 'newsletters_data.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedData = JSON.parse(e.target.result);
          setNewsletters([...newsletters, ...importedData]);
          setShowImportModal(false);
        } catch (error) {
          console.error('Error parsing imported file:', error);
        }
      };
      reader.readAsText(file);
    }
  };

  const filteredNewsletters = newsletters
    .filter(newsletter => {
      const matchesSearch = newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        newsletter.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'All' || newsletter.category === filterCategory;
      return matchesSearch && matchesCategory;
    })   
    .sort((a, b) => {
      if (sortBy === 'subscribers') return b.subscribers - a.subscribers;
      if (sortBy === 'openRate') return parseFloat(b.openRate) - parseFloat(a.openRate);
      if (sortBy === 'revenue') {
        return parseFloat(b.revenue.replace('$', '').replace(',', '')) - parseFloat(a.revenue.replace('$', '').replace(',', ''));
      }
      return 0;
    });

  const categories = ['Technology', 'Jobs', 'Career', 'Business', 'Corporate', 'Marketing', 'Design'];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f6ede8' }}>
      {/* Header */}
      <div className="border-b" style={{ backgroundColor: '#e0d8cf', borderColor: '#d4c7b8' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold" style={{ color: '#4a3728' }}>
                Newsletters
              </h1>
              <span className="text-sm px-3 py-1 rounded-full" style={{ backgroundColor: '#f6ede8', color: '#4a3728' }}>
                {newsletters.length} newsletters
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={exportData}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}
              >
                <Download size={16} />
                <span>Export</span>
              </button>
              <button
                onClick={() => setShowImportModal(true)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}
              >
                <Upload size={16} />
                <span>Import</span>
              </button>
              <button
                className="p-2 rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}
              >
                <Bell size={18} />
              </button>
              <button
                className="p-2 rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#e0d8cf', color: '#4a3728' }}
              >
                <Settings size={18} />
              </button>
              <button
                onClick={() => setShowCreateForm(true)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: '#4a3728', color: '#f6ede8' }}
              >
                <Plus size={18} />
                <span>Create newsletter</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Advanced Search and Filter Bar */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex-1 min-w-64 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2" size={20} style={{ color: '#4a3728' }} />
            <input
              type="text"
              placeholder="Search newsletters..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-opacity-50"
              style={{ 
                backgroundColor: '#e0d8cf', 
                borderColor: '#d4c7b8', 
                color: '#4a3728',
                focusRingColor: '#4a3728'
              }}
            />
          </div>
          
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-2 rounded-lg border"
            style={{ backgroundColor: '#e0d8cf', borderColor: '#d4c7b8', color: '#4a3728' }}
          >
            <option value="All">All Categories</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 rounded-lg border"
            style={{ backgroundColor: '#e0d8cf', borderColor: '#d4c7b8', color: '#4a3728' }}
          >
            <option value="subscribers">Sort by Subscribers</option>
            <option value="openRate">Sort by Open Rate</option>
            <option value="revenue">Sort by Revenue</option>
          </select>
          
          {selectedNewsletters.length > 0 && (
            <div className="flex items-center space-x-2">
              <span className="text-sm px-3 py-2 rounded-lg" style={{ backgroundColor: '#f6ede8', color: '#4a3728' }}>
                {selectedNewsletters.length} selected
              </span>
              <button
                onClick={() => setShowBulkActions(!showBulkActions)}
                className="px-3 py-2 rounded-lg text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: '#4a3728', color: '#f6ede8' }}
              >
                Bulk Actions
              </button>
            </div>
          )}
        </div>
        {/* Bulk Actions Menu */}
        {showBulkActions && selectedNewsletters.length > 0 && (
          <div className="mb-6 p-4 rounded-lg border" style={{ backgroundColor: '#e0d8cf', borderColor: '#d4c7b8' }}>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleBulkAction('activate')}
                className="flex items-center space-x-1 px-3 py-1 rounded-lg text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: '#f6ede8', color: '#4a3728' }}
              >
                <Zap size={14} />
                <span>Activate</span>
              </button>
              <button
                onClick={() => handleBulkAction('deactivate')}
                className="flex items-center space-x-1 px-3 py-1 rounded-lg text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: '#f6ede8', color: '#4a3728' }}
              >
                <Archive size={14} />
                <span>Deactivate</span>
              </button>
              <button
                onClick={() => handleBulkAction('delete')}
                className="flex items-center space-x-1 px-3 py-1 rounded-lg text-sm transition-all hover:opacity-90 bg-red-100 text-red-700"
              >
                <Trash2 size={14} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        )}
        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
          <button className="flex items-center space-x-3 p-4 rounded-xl transition-all hover:shadow-md" style={{ backgroundColor: '#e0d8cf' }}>
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#f6ede8' }}>
              <Send size={20} style={{ color: '#4a3728' }} />
            </div>
            <div className="text-left">
              <p className="font-medium" style={{ color: '#4a3728' }}>Send Campaign</p>
              <p className="text-xs opacity-80" style={{ color: '#4a3728' }}>Create & send</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 rounded-xl transition-all hover:shadow-md" style={{ backgroundColor: '#e0d8cf' }}>
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#f6ede8' }}>
              <BarChart3 size={20} style={{ color: '#4a3728' }} />
            </div>
            <div className="text-left">
              <p className="font-medium" style={{ color: '#4a3728' }}>Analytics</p>
              <p className="text-xs opacity-80" style={{ color: '#4a3728' }}>View reports</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 rounded-xl transition-all hover:shadow-md" style={{ backgroundColor: '#e0d8cf' }}>
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#f6ede8' }}>
              <Users size={20} style={{ color: '#4a3728' }} />
            </div>
            <div className="text-left">
              <p className="font-medium" style={{ color: '#4a3728' }}>Subscribers</p>
              <p className="text-xs opacity-80" style={{ color: '#4a3728' }}>Manage lists</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 rounded-xl transition-all hover:shadow-md" style={{ backgroundColor: '#e0d8cf' }}>
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#f6ede8' }}>
              <Archive size={20} style={{ color: '#4a3728' }} />
            </div>
            <div className="text-left">
              <p className="font-medium" style={{ color: '#4a3728' }}>Templates</p>
              <p className="text-xs opacity-80" style={{ color: '#4a3728' }}>Design library</p>
            </div>
          </button>
          
          <button className="flex items-center space-x-3 p-4 rounded-xl transition-all hover:shadow-md" style={{ backgroundColor: '#e0d8cf' }}>
            <div className="p-2 rounded-lg" style={{ backgroundColor: '#f6ede8' }}>
              <Target size={20} style={{ color: '#4a3728' }} />
            </div>
            <div className="text-left">
              <p className="font-medium" style={{ color: '#4a3728' }}>A/B Testing</p>
              <p className="text-xs opacity-80" style={{ color: '#4a3728' }}>Optimize</p>
            </div>
          </button>
        </div>

{/* Newsletter Grid */}
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {filteredNewsletters.map((newsletter) => (
    <div
      key={newsletter.id}
      className="rounded-xl border p-6 transition-all hover:shadow-lg cursor-pointer"
      style={{ backgroundColor: '#e0d8cf', borderColor: '#d4c7b8' }}
      onClick={() => {
        setSelectedNewsletter(newsletter);
        setShowProfile(true);
      }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4 flex-1 min-w-0">
          <div className="relative">
            <img 
              src={newsletter.profileImage} 
              alt={newsletter.title}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div 
              className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 ${newsletter.isActive ? 'bg-green-500' : 'bg-gray-400'}`}
              style={{ borderColor: '#e0d8cf' }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-lg truncate mb-1" style={{ color: '#4a3728' }}>
              {newsletter.title}
            </h3>
            <p className="text-sm opacity-80" style={{ color: '#4a3728' }}>
              {newsletter.author}
            </p>
          </div>
        </div>
        <button 
          className="p-1 rounded-full hover:bg-black hover:bg-opacity-10"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(newsletter.id);
          }}
        >
          <Star size={16} className={newsletter.isFavorite ? 'text-yellow-500 fill-current' : ''} style={{ color: newsletter.isFavorite ? '' : '#4a3728' }} />
        </button>
      </div>
      
      <p className="text-sm mb-4 line-clamp-2" style={{ color: '#4a3728' }}>
        {newsletter.description}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm" style={{ color: '#4a3728' }}>
          <div className="flex items-center space-x-1">
            <Users size={14} />
            <span>{newsletter.subscribers.toLocaleString()}</span>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${newsletter.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
            {newsletter.isActive ? 'Active' : 'Inactive'}
          </span>
        </div>
        <div className="flex items-center space-x-1 text-xs" style={{ color: '#4a3728' }}>
          <Calendar size={12} />
          <span>{newsletter.lastSent}</span>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="rounded-xl p-6" style={{ backgroundColor: '#e0d8cf' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80" style={{ color: '#4a3728' }}>Total Subscribers</p>
                <p className="text-2xl font-bold" style={{ color: '#4a3728' }}>
                  {newsletters.reduce((sum, n) => sum + n.subscribers, 0).toLocaleString()}
                </p>
              </div>
              <div className="p-3 rounded-full" style={{ backgroundColor: '#f6ede8' }}>
                <Users size={24} style={{ color: '#4a3728' }} />
              </div>
            </div>
          </div>
          
          <div className="rounded-xl p-6" style={{ backgroundColor: '#e0d8cf' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80" style={{ color: '#4a3728' }}>Avg. Open Rate</p>
                <p className="text-2xl font-bold" style={{ color: '#4a3728' }}>
                  {(newsletters.reduce((sum, n) => sum + parseFloat(n.openRate), 0) / newsletters.length).toFixed(1)}%
                </p>
              </div>
              <div className="p-3 rounded-full" style={{ backgroundColor: '#f6ede8' }}>
                <TrendingUp size={24} style={{ color: '#4a3728' }} />
              </div>
            </div>
          </div>
          
          <div className="rounded-xl p-6" style={{ backgroundColor: '#e0d8cf' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80" style={{ color: '#4a3728' }}>Active Newsletters</p>
                <p className="text-2xl font-bold" style={{ color: '#4a3728' }}>
                  {newsletters.filter(n => n.isActive).length}
                </p>
              </div>
              <div className="p-3 rounded-full" style={{ backgroundColor: '#f6ede8' }}>
                <Calendar size={24} style={{ color: '#4a3728' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Newsletter Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="rounded-xl p-6 w-full max-w-md" style={{ backgroundColor: '#e0d8cf' }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: '#4a3728' }}>
              Create New Newsletter
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#4a3728' }}>
                  Newsletter Title
                </label>
                <input
                  type="text"
                  value={newNewsletter.title}
                  onChange={(e) => setNewNewsletter({...newNewsletter, title: e.target.value})}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{ backgroundColor: '#f6ede8', borderColor: '#d4c7b8', color: '#4a3728' }}
                  placeholder="Enter newsletter title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#4a3728' }}>
                  Description
                </label>
                <textarea
                  value={newNewsletter.description}
                  onChange={(e) => setNewNewsletter({...newNewsletter, description: e.target.value})}
                  className="w-full px-3 py-2 rounded-lg border h-20 resize-none"
                  style={{ backgroundColor: '#f6ede8', borderColor: '#d4c7b8', color: '#4a3728' }}
                  placeholder="Brief description of your newsletter"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#4a3728' }}>
                  Category
                </label>
                <select
                  value={newNewsletter.category}
                  onChange={(e) => setNewNewsletter({...newNewsletter, category: e.target.value})}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{ backgroundColor: '#f6ede8', borderColor: '#d4c7b8', color: '#4a3728' }}
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#4a3728' }}>
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={newNewsletter.tags.join(', ')}
                  onChange={(e) => setNewNewsletter({...newNewsletter, tags: e.target.value.split(',').map(tag => tag.trim())})}
                  className="w-full px-3 py-2 rounded-lg border"
                  style={{ backgroundColor: '#f6ede8', borderColor: '#d4c7b8', color: '#4a3728' }}
                  placeholder="Enter tags, e.g., Tech, AI, News"
                />
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowCreateForm(false)}
                className="flex-1 px-4 py-2 rounded-lg border transition-all hover:opacity-90"
                style={{ backgroundColor: '#f6ede8', borderColor: '#d4c7b8', color: '#4a3728' }}
              >
                Cancel
              </button>
              <button
                onClick={handleCreateNewsletter}
                className="flex-1 px-4 py-2 rounded-lg font-medium transition-all hover:opacity-90"
                style={{ backgroundColor: '#4a3728', color: '#f6ede8' }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="rounded-xl p-6 w-full max-w-md" style={{ backgroundColor: '#e0d8cf' }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: '#4a3728' }}>
              Import Newsletters
            </h2>
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: '#4a3728' }}>
                Upload JSON File
              </label>
              <input
                type="file"
                accept=".json"
                onChange={handleImport}
                className="w-full px-3 py-2 rounded-lg border"
                style={{ backgroundColor: '#f6ede8', borderColor: '#d4c7b8', color: '#4a3728' }}
              />
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowImportModal(false)}
                className="flex-1 px-4 py-2 rounded-lg border transition-all hover:opacity-90"
                style={{ backgroundColor: '#f6ede8', borderColor: '#d4c7b8', color: '#4a3728' }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Profile Modal */}
      {showProfile && selectedNewsletter && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="rounded-xl p-6 w-full max-w-lg" style={{ backgroundColor: '#e0d8cf' }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold" style={{ color: '#4a3728' }}>
                {selectedNewsletter.title}
              </h2>
              <button
                onClick={() => setShowProfile(false)}
                className="p-2 rounded-full hover:bg-black hover:bg-opacity-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#4a3728">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img 
                  src={selectedNewsletter.profileImage} 
                  alt={selectedNewsletter.title}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium" style={{ color: '#4a3728' }}>{selectedNewsletter.author}</p>
                  <p className="text-sm opacity-80" style={{ color: '#4a3728' }}>{selectedNewsletter.category}</p>
                </div>
              </div>
              <p className="text-sm" style={{ color: '#4a3728' }}>{selectedNewsletter.description}</p>
              <div className="grid grid-cols-2 gap-4 text-sm" style={{ color: '#4a3728' }}>
                <div>
                  <p className="font-medium">Subscribers</p>
                  <p>{selectedNewsletter.subscribers.toLocaleString()}</p>
                </div>
                <div>
                  <p className="font-medium">Open Rate</p>
                  <p>{selectedNewsletter.openRate}</p>
                </div>
                <div>
                  <p className="font-medium">Total Sent</p>
                  <p>{selectedNewsletter.totalSent}</p>
                </div>
                <div>
                  <p className="font-medium">Last Sent</p>
                  <p>{selectedNewsletter.lastSent}</p>
                </div>
                <div>
                  <p className="font-medium">Average Click Rate</p>
                  <p>{selectedNewsletter.avgClickRate}</p>
                </div>
                <div>
                  <p className="font-medium">Revenue</p>
                  <p>{selectedNewsletter.revenue}</p>
                </div>
                <div>
                  <p className="font-medium">Growth</p>
                  <p>{selectedNewsletter.growth}</p>
                </div>
                <div>
                  <p className="font-medium">Status</p>
                  <p>{selectedNewsletter.isActive ? 'Active' : 'Inactive'}</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-sm" style={{ color: '#4a3728' }}>Tags</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedNewsletter.tags.map((tag, index) => (
                    <span key={index} className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: '#f6ede8', color: '#4a3728' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

