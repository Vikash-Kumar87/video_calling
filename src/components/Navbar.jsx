import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

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
    </nav>
  </div>
</header>
  )
}

export default Navbar