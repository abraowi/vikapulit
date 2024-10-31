"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Basketball, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Basketball className="h-8 w-8 text-orange-500" />
              <span className="font-bold text-xl">Vikapu Elite</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/training"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Training
            </Link>
            <Link
              href="/news"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              News
            </Link>
            <Link
              href="/portal"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Portal
            </Link>
            <Button
              variant="default"
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              Join Us Today
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/training"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500"
              >
                Training
              </Link>
              <Link
                href="/news"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500"
              >
                News
              </Link>
              <Link
                href="/portal"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-500"
              >
                Portal
              </Link>
              <div className="px-3 py-2">
                <Button
                  variant="default"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Join Us Today
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}