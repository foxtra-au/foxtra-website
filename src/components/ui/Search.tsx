import { useState, useRef, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { Search as SearchIcon, X } from 'lucide-react'

interface SearchResult {
  id: string
  title: string
  description?: string
  href?: string
}

interface SearchProps {
  placeholder?: string
  results?: SearchResult[]
  onSearch?: (query: string) => void
  onSelect?: (result: SearchResult) => void
  loading?: boolean
  className?: string
}

export function Search({
  placeholder = 'Search...',
  results = [],
  onSearch,
  onSelect,
  loading = false,
  className = ''
}: SearchProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const resultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resultsRef.current &&
        !resultsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    setIsOpen(true)
    onSearch?.(value)
  }

  const handleResultSelect = (result: SearchResult) => {
    setQuery(result.title)
    setIsOpen(false)
    onSelect?.(result)
  }

  const clearSearch = () => {
    setQuery('')
    setIsOpen(false)
    onSearch?.('')
    inputRef.current?.focus()
  }

  return (
    <div className={cn('relative', className)}>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        />
        {query && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              onClick={clearSearch}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>

      {/* Search Results */}
      {isOpen && (query || results.length > 0) && (
        <div
          ref={resultsRef}
          className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
        >
          {loading ? (
            <div className="px-4 py-2 text-gray-500">Searching...</div>
          ) : results.length > 0 ? (
            results.map((result) => (
              <div
                key={result.id}
                onClick={() => handleResultSelect(result)}
                className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100"
              >
                <div className="font-medium text-gray-900">{result.title}</div>
                {result.description && (
                  <div className="text-sm text-gray-500">{result.description}</div>
                )}
              </div>
            ))
          ) : query ? (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          ) : null}
        </div>
      )}
    </div>
  )
}
