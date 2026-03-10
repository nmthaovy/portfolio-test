import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, Mail, Phone, Download, Linkedin, Instagram } from 'lucide-react';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => setIsMenuOpen(false), [location]);

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Dự án', path: '/projects' },
    { name: 'Giới thiệu', path: '/about' },
  ];

  return (
    <div className="min-h-screen bg-earth-50 font-sans selection:bg-gold-100 selection:text-earth-900">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-earth-100 py-4 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-earth-900 tracking-tight">
            Vy<span className="text-gold-600">.</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path ? 'text-gold-600' : 'text-earth-800/70 hover:text-earth-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="px-5 py-2.5 bg-earth-900 text-white text-sm font-medium rounded-lg hover:bg-earth-950 transition-all shadow-md hover:shadow-lg">
              Liên hệ
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-earth-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-earth-50 pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-2xl font-bold text-earth-900"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-earth-100" />
            <div className="flex flex-col gap-4">
              <a href="mailto:contact@example.com" className="flex items-center gap-3 text-earth-800/70">
                <Mail className="w-5 h-5" /> contact@example.com
              </a>
              <a href="tel:+84123456789" className="flex items-center gap-3 text-earth-800/70">
                <Phone className="w-5 h-5" /> +84 123 456 789
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-earth-100/50 border-t border-earth-100 py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <Link to="/" className="text-2xl font-bold text-earth-900 mb-4 block">
                Vy<span className="text-gold-600">.</span>
              </Link>
              <p className="text-earth-800/60 max-w-xs">
                Xây dựng giá trị bền vững thông qua chiến lược SEO & SEM thực chiến.
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-earth-100 flex items-center justify-center text-earth-800/70 hover:text-gold-600 hover:border-gold-200 transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-earth-100 flex items-center justify-center text-earth-800/70 hover:text-gold-600 hover:border-gold-200 transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-earth-100 flex items-center justify-center text-earth-800/70 hover:text-gold-600 hover:border-gold-200 transition-all shadow-sm">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-earth-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-earth-800/40">
            <p>© 2026 Nguyễn Mai Thảo Vy. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-earth-800/70">Privacy Policy</a>
              <a href="#" className="hover:text-earth-800/70">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
