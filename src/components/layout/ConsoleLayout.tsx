'use client';

import { ReactNode, useState } from 'react';
import { 
  LayoutDashboard, 
  Bot, 
  Phone, 
  Calendar, 
  History, 
  CreditCard, 
  Settings,
  Menu,
  X,
  Bell,
  User,
  Sun,
  Moon,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ConsoleLayoutProps {
  children: ReactNode;
  pageTitle: string;
}

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Agents', href: '/agents', icon: Bot },
  { name: 'Phone Numbers', href: '/phone-numbers', icon: Phone },
  { name: 'Calendar', href: '/calendar', icon: Calendar },
  { name: 'History', href: '/history', icon: History },
  { name: 'Billing', href: '/billing', icon: CreditCard },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function ConsoleLayout({ children, pageTitle }: ConsoleLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="relative" style={{ backgroundColor: '#FAFAFA' }}>
        {/* Mobile menu button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 bg-white dark:bg-gray-800 shadow-lg"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Sidebar */}
        <div className={`absolute inset-y-0 left-0 z-30 w-[8%] bg-white dark:bg-gray-800 shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 min-h-screen`}>
          <div className="flex flex-col min-h-screen">
            {/* Logo */}
            <div className="flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                F<span className="text-rose-600">•</span>
              </h1>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 px-3 py-6">
              <div className="space-y-6">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  
                  return (
                    <div key={item.name} className="relative group">
                      <Link
                        href={item.href}
                        className={`w-10 h-10 rounded-lg transition-colors flex items-center justify-center mx-auto`}
                        style={{
                          backgroundColor: isActive ? '#e11d48' : '#FAFAFA',
                          color: isActive ? 'white' : 'black'
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </Link>
                      
                      {/* Tooltip */}
                      <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200 text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                        {item.name}
                        {/* Tooltip arrow */}
                        <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900 dark:border-r-gray-700"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </nav>

            {/* Profile section at bottom */}
            <div className="px-3 pb-6 border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="relative group">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="w-10 h-10 rounded-lg transition-colors flex items-center justify-center mx-auto"
                  style={{ backgroundColor: '#FAFAFA' }}
                >
                  <User className="h-5 w-5" />
                </button>

                {/* Dropdown menu */}
                {profileDropdownOpen && (
                  <div className="absolute left-full ml-3 bottom-0 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Profile
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Settings
                    </a>
                    <hr className="my-1 border-gray-200 dark:border-gray-700" />
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Sign out
                    </a>
                  </div>
                )}

                {/* Tooltip */}
                <div className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-700 text-white dark:text-gray-200 text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  Profile
                  {/* Tooltip arrow */}
                  <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-900 dark:border-r-gray-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-gray-600 bg-opacity-75 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <div className="lg:ml-[8%] min-h-screen">
          {/* Page content */}
          <div className="p-6 min-h-screen">
            {/* Page title for desktop */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white hidden lg:block">
                {pageTitle}
              </h1>
            </div>

            {/* Main content area */}
            <div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
