import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, X, Mail, Phone, Download } from 'lucide-react';

export default function WireframeLayout() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      {/* Wireframe Header */}
      <header className="border-b-2 border-black sticky top-0 bg-white z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/wireframe" className="text-xl font-bold border-2 border-black px-2 py-1">
            VY.PORTFOLIO
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/wireframe" className="hover:underline">Home</Link>
            <Link to="/wireframe/projects" className="hover:underline">Projects</Link>
            <Link to="/wireframe/about" className="hover:underline">About</Link>
            <div className="flex items-center gap-4 ml-4">
              <button className="border-2 border-black px-4 py-1 flex items-center gap-2 hover:bg-gray-100">
                <Download size={16} /> CV
              </button>
              <button className="bg-black text-white px-4 py-1 flex items-center gap-2 hover:bg-gray-800">
                <Mail size={16} /> Contact
              </button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden border-2 border-black p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden border-t-2 border-black bg-white p-6 flex flex-col gap-4">
            <Link to="/wireframe" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/wireframe/projects" onClick={() => setIsMenuOpen(false)}>Projects</Link>
            <Link to="/wireframe/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            <hr className="border-black" />
            <button className="border-2 border-black px-4 py-2 flex items-center justify-center gap-2">
              <Download size={16} /> Download CV
            </button>
            <button className="bg-black text-white px-4 py-2 flex items-center justify-center gap-2">
              <Mail size={16} /> Contact Me
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <Outlet />
      </main>

      {/* Wireframe Footer */}
      <footer className="border-t-2 border-black py-12 mt-12">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="font-bold text-lg">Nguyễn Mai Thảo Vy</p>
            <p className="text-gray-600">SEO / SEM Specialist</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-2">
              <Mail size={16} /> [NEEDS: Email]
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} /> [NEEDS: Phone]
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-sm text-gray-400">
          © 2024 Wireframe Blueprint. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
