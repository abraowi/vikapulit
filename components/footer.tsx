import Link from 'next/link';
import { Basketball, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Academy Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Basketball className="h-8 w-8 text-orange-500" />
              <span className="font-bold text-xl">Vikapu Elite</span>
            </div>
            <p className="text-gray-400">
              Empowering young athletes to reach their full potential through
              expert basketball training and mentorship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-gray-400 hover:text-orange-500">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="text-gray-400 hover:text-orange-500">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">123 Basketball Court, City</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">+1 234 567 8900</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-orange-500" />
                <span className="text-gray-400">info@vikapuelite.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get updates on our latest programs and events.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700"
              />
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Vikapu Elite Basketball Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}