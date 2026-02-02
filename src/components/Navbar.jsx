import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="pb-6 bg-gradient-to-r from-blue-600 to-purple-600 lg:pb-0 shadow-lg animate-slideDown">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <nav className="flex items-center justify-between h-16 lg:h-20">
      <div className="flex-shrink-0">
        <a href="/" title="Home" className="flex">
          <span className="text-2xl font-bold text-white">VideoCall</span>
        </a>
      </div>

    
      <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
        <button onClick={() => navigate('/features')} className="text-base font-medium text-white transition-all duration-200 hover:text-gray-200"> Features </button>

        <button onClick={() => navigate('/solutions')} className="text-base font-medium text-white transition-all duration-200 hover:text-gray-200"> Solutions </button>

        <button onClick={() => navigate('/resources')} className="text-base font-medium text-white transition-all duration-200 hover:text-gray-200"> Resources </button>

        <button onClick={() => navigate('/pricing')} className="text-base font-medium text-white transition-all duration-200 hover:text-gray-200"> Pricing </button>
      </div>

      <button onClick={() => navigate('/')} className="items-center justify-center hidden px-4 py-3 ml-10 text-base font-semibold text-blue-600 bg-white transition-all duration-200 border border-transparent rounded-md lg:inline-flex hover:bg-gray-100 focus:bg-gray-100"> Get started </button>

      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden inline-flex items-center justify-center p-2 text-white hover:bg-blue-700 rounded-md transition-all duration-200"
        aria-label="Toggle menu"
      >
        {!isMenuOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </button>
    </nav>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="lg:hidden py-4 border-t border-blue-500 animate-fadeIn">
        <div className="flex flex-col space-y-4">
          <button 
            onClick={() => { navigate('/features'); setIsMenuOpen(false); }} 
            className="text-base font-medium text-white hover:text-gray-200 transition-all duration-200 text-left px-2 py-2 hover:bg-blue-700 rounded"
          >
            Features
          </button>
          <button 
            onClick={() => { navigate('/solutions'); setIsMenuOpen(false); }} 
            className="text-base font-medium text-white hover:text-gray-200 transition-all duration-200 text-left px-2 py-2 hover:bg-blue-700 rounded"
          >
            Solutions
          </button>
          <button 
            onClick={() => { navigate('/resources'); setIsMenuOpen(false); }} 
            className="text-base font-medium text-white hover:text-gray-200 transition-all duration-200 text-left px-2 py-2 hover:bg-blue-700 rounded"
          >
            Resources
          </button>
          <button 
            onClick={() => { navigate('/pricing'); setIsMenuOpen(false); }} 
            className="text-base font-medium text-white hover:text-gray-200 transition-all duration-200 text-left px-2 py-2 hover:bg-blue-700 rounded"
          >
            Pricing
          </button>
          <button 
            onClick={() => { navigate('/'); setIsMenuOpen(false); }} 
            className="text-base font-semibold text-blue-600 bg-white hover:bg-gray-100 transition-all duration-200 px-4 py-3 rounded-md text-center"
          >
            Get started
          </button>
        </div>
      </div>
    )}
  </div>
</header>
  )
}

export default Navbar