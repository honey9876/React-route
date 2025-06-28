import { useState } from 'react';

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    username: '',
    dob: '',
    agreeTerms: false
  });

  // eslint-disable-next-line no-unused-vars
  const countryCodes = [
    { code: '+1', country: 'US' },
    { code: '+91', country: 'IN' },
    { code: '+44', country: 'UK' },
    { code: '+49', country: 'DE' }
  ];

  const checkUsernameAvailability = (username) => {
    if (username.length > 3) {
      setTimeout(() => {
        setIsUsernameAvailable(Math.random() > 0.5);
      }, 500);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    if (field === 'username') {
      if (value.length > 3) {
        checkUsernameAvailability(value);
      } else {
        setIsUsernameAvailable(null);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 overflow-hidden" style={{ backgroundColor: '#f6ede8' }}>
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl border-2 max-h-screen overflow-hidden" style={{ borderColor: '#e0d8cf' }}>
        {/* Header with Logo Only */}
        <div className="text-center py-4 px-4 bg-gradient-to-br from-orange-100 to-amber-50" style={{ 
          background: `linear-gradient(135deg, #e0d8cf 0%, #f6ede8 100%)`,
          borderBottom: `2px solid #4a3728`
        }}>
          <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: '#4a3728' }}>
            🏛️
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="flex m-4 rounded-xl p-1 shadow-inner" style={{ backgroundColor: '#f6ede8' }}>
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 px-3 rounded-lg font-bold text-sm transition-all ${
              isLogin 
                ? 'text-white shadow-lg' 
                : 'hover:bg-white hover:shadow-md'
            }`}
            style={{ 
              backgroundColor: isLogin ? '#4a3728' : 'transparent',
              color: isLogin ? 'white' : '#4a3728'
            }}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 px-3 rounded-lg font-bold text-sm transition-all ${
              !isLogin 
                ? 'text-white shadow-lg' 
                : 'hover:bg-white hover:shadow-md'
            }`}
            style={{ 
              backgroundColor: !isLogin ? '#4a3728' : 'transparent',
              color: !isLogin ? 'white' : '#4a3728'
            }}
          >
            Register
          </button>
        </div>

        {/* Form Container */}
        <div className="px-4 pb-4 flex-1 overflow-y-auto">
          <div className="space-y-3">
            {/* Login Form */}
            {isLogin ? (
              <>
                <div>
                  <label className="block text-xs font-semibold mb-1" style={{ color: '#4a3728' }}>
                    Email or Username
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 transition-all text-xs"
                    style={{ 
                      borderColor: '#e0d8cf'
                    }}
                    placeholder="Enter your email or username"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1" style={{ color: '#4a3728' }}>
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="w-full px-3 py-2 pr-8 border rounded-lg focus:outline-none focus:ring-1 transition-all text-xs"
                      style={{ borderColor: '#e0d8cf' }}
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm"
                      style={{ color: '#4a3728' }}
                    >
                      {showPassword ? '👁️' : '👁️‍🗨️'}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-1 w-3 h-3" />
                    <span className="font-medium" style={{ color: '#4a3728' }}>Remember me</span>
                  </label>
                  <a href="#" className="font-medium hover:underline" style={{ color: '#4a3728' }}>
                    Forgot Password?
                  </a>
                </div>
              </>
            ) : (
              /* Register Form - Compact Version */
              <>
                <div className="space-y-2">
                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: '#4a3728' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="w-full px-2 py-1.5 border rounded focus:outline-none focus:ring-1 text-xs"
                      style={{ borderColor: '#e0d8cf' }}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: '#4a3728' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-2 py-1.5 border rounded focus:outline-none focus:ring-1 text-xs"
                      style={{ borderColor: '#e0d8cf' }}
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium mb-1" style={{ color: '#4a3728' }}>
                      Password *
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        className="w-full px-2 py-1.5 pr-6 border rounded focus:outline-none focus:ring-1 text-xs"
                        style={{ borderColor: '#e0d8cf' }}
                        placeholder="Create a password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs"
                      >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start mt-1">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                      className="mt-0.5 mr-1 w-3 h-3"
                      required
                    />
                    <label className="text-xs leading-tight" style={{ color: '#4a3728' }}>
                      I agree to the{' '}
                      <a href="#" className="underline" style={{ color: '#4a3728' }}>
                        Terms
                      </a>{' '}
                      and{' '}
                      <a href="#" className="underline" style={{ color: '#4a3728' }}>
                        Privacy Policy
                      </a>
                    </label>
                  </div>
                </div>
              </>
            )}

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full py-2 px-4 rounded-lg font-bold text-sm text-white transition-all hover:opacity-90 shadow-lg mt-3"
              style={{ backgroundColor: '#4a3728' }}
            >
              {isLogin ? 'Sign In' : 'Sign Up'}
            </button>

            {/* Divider */}
            <div className="flex items-center my-3">
              <div className="flex-1 border-t" style={{ borderColor: '#e0d8cf' }}></div>
              <span className="px-2 text-xs font-semibold" style={{ color: '#4a3728' }}>OR</span>
              <div className="flex-1 border-t" style={{ borderColor: '#e0d8cf' }}></div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-2">
              <button
                type="button"
                className="w-full py-2 px-3 border rounded-lg font-semibold text-xs transition-all flex items-center justify-center"
                style={{ 
                  borderColor: '#e0d8cf',
                  color: '#4a3728',
                  backgroundColor: '#f6ede8'
                }}
              >
                <span className="mr-2">🔍</span>
                {isLogin ? 'Sign in' : 'Sign up'} with Google
              </button>

              <button
                type="button"
                className="w-full py-2 px-3 border rounded-lg font-semibold text-xs transition-all flex items-center justify-center"
                style={{ 
                  borderColor: '#e0d8cf',
                  color: '#4a3728',
                  backgroundColor: '#f6ede8'
                }}
              >
                <span className="mr-2">🍎</span>
                {isLogin ? 'Sign in' : 'Sign up'} with Apple
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;