import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

interface SearchResult {
  title: string;
  url: string;
  type: string;
}

const searchData: SearchResult[] = [
  { title: 'About Us', url: '/about', type: 'Page' },
  { title: 'Programs', url: '/programs', type: 'Page' },
  { title: 'Giving Circles', url: '/programs', type: 'Program' },
  { title: 'Mentorship', url: '/programs', type: 'Program' },
  { title: 'Events', url: '/events', type: 'Page' },
  { title: 'Stories', url: '/stories', type: 'Page' },
  { title: 'Contact', url: '/contact', type: 'Page' },
  { title: 'Get Involved', url: '/get-involved', type: 'Page' },
];

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.length > 1) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  const handleResultClick = (url: string) => {
    window.location.href = url;
    setQuery('');
    setIsOpen(false);
  };

  return (
    <div className="search-container">
      <div className="relative">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          onFocus={() => query.length > 1 && setIsOpen(true)}
        />
      </div>
      
      {isOpen && results.length > 0 && (
        <div className="search-results">
          {results.map((result, index) => (
            <div
              key={index}
              className="search-result-item"
              onClick={() => handleResultClick(result.url)}
            >
              <div className="font-medium">{result.title}</div>
              <div className="text-sm text-gray-500">{result.type}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;