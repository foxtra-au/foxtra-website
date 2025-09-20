'use client'

import Link from 'next/link'
import { useState } from 'react'
import MegaMenu from './megamenu/MegaMenu'
import type { MegaMenuItem } from './megamenu/MegaMenu'
import { Button } from '@/components/ui/Button'
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronUp,
  Code,
  Database,
  Cloud,
  MessageSquare,
  Phone,
  Zap,
  Search,
  Target,
  Share2,
  TrendingUp,
  BookOpen,
  GraduationCap,
  FileText,
  Award,
  Building,
  Users,
  Briefcase,
  Headphones,
  Wrench,
  Scale,
  Heart,
  Home,
  Car,
  Shield,
  DollarSign,
  Globe,
  Calendar,
  Video,
  Smartphone,
  Layout,
} from 'lucide-react'
import { navigationConfig, authLinks, type AuthLink } from '@/config/nav'

// Icon mapping
const iconMap = {
  Code,
  Database,
  Cloud,
  MessageSquare,
  Phone,
  Zap,
  Search,
  Target,
  Share2,
  TrendingUp,
  BookOpen,
  GraduationCap,
  FileText,
  Award,
  Building,
  Users,
  Briefcase,
  Headphones,
  Wrench,
  Scale,
  Heart,
  Home,
  Car,
  Shield,
  DollarSign,
  Globe,
  Video,
  Smartphone,
  Layout,
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [expandedMobileItems, setExpandedMobileItems] = useState<number[]>([])

  const toggleMobileItem = (id: number) => {
    setExpandedMobileItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  // Convert navigation config to MegaMenu format
  const megaMenuItems: MegaMenuItem[] = navigationConfig.map(item => ({
    id: item.id,
    label: item.label,
    link: item.href,
    subMenus: item.subMenus?.map(submenu => ({
      title: submenu.title,
      items: submenu.items.map(subItem => ({
        label: subItem.label,
        description: subItem.description,
        icon: iconMap[subItem.iconName as keyof typeof iconMap] || Code,
        href: subItem.href,
      }))
    }))
  }))

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm pt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-white drop-shadow-lg">
                Foxtra <span className="text-rose-600">•</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:justify-center flex-1">
            <MegaMenu items={megaMenuItems} />
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {authLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={
                  link.isPrimary
                    ? "inline-flex items-center justify-center rounded-sm border border-transparent px-6 py-2 text-base font-medium text-white shadow-sm transition-all duration-200 hover:shadow-lg transform hover:scale-105 drop-shadow-lg"
                    : "inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:border-yellow-400 drop-shadow-md"
                }
                style={link.isPrimary ? { backgroundColor: '#FF335C' } : undefined}
              >
                {link.isPrimary && <Calendar className="h-4 w-4 mr-2" />}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 bg-black/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationConfig.map((item) => (
                <div key={item.id} className="space-y-1">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-md mega-menu-text"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleMobileItem(item.id)}
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:bg-white/10 rounded-md mega-menu-text"
                      >
                        <span>{item.label}</span>
                        {expandedMobileItems.includes(item.id) ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </button>
                      {expandedMobileItems.includes(item.id) && item.subMenus?.map((section) => (
                        <div key={section.title} className="pl-6 space-y-1">
                          <div className="px-3 py-1 text-sm font-medium text-white/50 mega-menu-text">
                            {section.title}
                          </div>
                          {section.items.map((subItem) => {
                            const Icon = iconMap[subItem.iconName as keyof typeof iconMap]
                            return (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="flex items-center px-3 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-md mega-menu-text"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {Icon && <Icon className="h-4 w-4 mr-2" />}
                                {subItem.label}
                              </Link>
                            )
                          })}
                        </div>
                      ))}
                    </>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/10">
                <div className="space-y-2">
                  {authLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={
                        link.isPrimary
                          ? "block w-full bg-rose-600 hover:bg-rose-700 text-white border-0 rounded-full px-4 py-2 text-center font-medium transition-colors flex items-center justify-center"
                          : "block w-full px-4 py-2 text-base font-medium text-white/90 bg-white/10 backdrop-blur-sm border border-white/20 rounded-md transition-all duration-300 hover:bg-yellow-500 hover:text-black hover:border-yellow-400 text-center"
                      }
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.isPrimary && <Calendar className="h-4 w-4 mr-2" />}
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
