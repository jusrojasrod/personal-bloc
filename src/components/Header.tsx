'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Search, User, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formattedDate, setFormattedDate] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Format date on client-side to avoid hydration mismatch
    const date = new Date();
    setFormattedDate(
      date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-nytLightGray transition-colors duration-200">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <button
          className="md:hidden flex items-center space-x-1"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="text-sm">Menu</span>
        </button>

        <div className="hidden md:flex space-x-4 text-sm">
          <Link href="/" className="hover:underline">World</Link>
          <Link href="/" className="hover:underline">U.S.</Link>
          <Link href="/" className="hover:underline">Politics</Link>
          <Link href="/" className="hover:underline">Business</Link>
          <Link href="/" className="hover:underline">Opinion</Link>
          <Link href="/" className="hover:underline">Science</Link>
          <Link href="/" className="hover:underline">Health</Link>
          <Link href="/" className="hover:underline">Sports</Link>
          <Link href="/" className="hover:underline">Arts</Link>
          <Link href="/" className="hover:underline">Books</Link>
          <Link href="/" className="hover:underline">Style</Link>
          <Link href="/" className="hover:underline">Food</Link>
          <Link href="/" className="hover:underline">Travel</Link>
        </div>

        <div className="flex items-center space-x-3">
          <button
            className="text-sm hidden md:inline-flex items-center"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button className="text-sm hidden md:inline-block">
            <Search size={16} />
          </button>
        </div>
      </div>

      {/* Logo bar */}
      <div className="container mx-auto py-3 text-center border-t border-nytLightGray">
        <div className="flex justify-between items-center px-4 md:px-0">
          <div className="md:hidden flex items-center space-x-3">
            <Search size={20} />
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <Link href="/" className="mx-auto md:ml-0">
            <h1 className="font-serif font-bold text-3xl md:text-5xl">The New York Times</h1>
          </Link>
          <div className="md:hidden">
            <User size={20} />
          </div>
        </div>
        <div className="text-xs mt-1 text-nytMediumGray">
          {formattedDate}
        </div>
      </div>

      {/* Secondary Nav */}
      <div className="hidden md:block border-t border-nytLightGray">
        <div className="container mx-auto px-4 py-2">
          <nav className="flex justify-center space-x-6 text-sm">
            <Link href="/international" className="hover:underline font-bold">International</Link>
            <Link href="/canada" className="hover:underline">Canada</Link>
            <Link href="/espanol" className="hover:underline">Español</Link>
            <Link href="/chinese" className="hover:underline">中文</Link>
          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute bg-background z-50 w-full border-b border-nytLightGray">
          <div className="container mx-auto px-4 py-4">
            <nav className="grid grid-cols-2 gap-4">
              <Link href="/" className="hover:underline">World</Link>
              <Link href="/" className="hover:underline">U.S.</Link>
              <Link href="/" className="hover:underline">Politics</Link>
              <Link href="/" className="hover:underline">Business</Link>
              <Link href="/" className="hover:underline">Opinion</Link>
              <Link href="/" className="hover:underline">Science</Link>
              <Link href="/" className="hover:underline">Health</Link>
              <Link href="/" className="hover:underline">Sports</Link>
              <Link href="/" className="hover:underline">Arts</Link>
              <Link href="/" className="hover:underline">Books</Link>
              <Link href="/" className="hover:underline">Style</Link>
              <Link href="/" className="hover:underline">Food</Link>
              <Link href="/" className="hover:underline">Travel</Link>
              <Link href="/international" className="hover:underline font-bold">International</Link>
              <Link href="/canada" className="hover:underline">Canada</Link>
              <Link href="/espanol" className="hover:underline">Español</Link>
              <Link href="/chinese" className="hover:underline">中文</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
