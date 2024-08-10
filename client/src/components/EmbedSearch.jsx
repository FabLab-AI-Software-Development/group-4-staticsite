import React, { useState } from 'react';
import { embeddedSearch } from '../routes/api';

const SearchComponent = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        if (!query) return;
        try {
            const response = await embeddedSearch(query);
            console.log('response', response)

            setResults(response.data);

        } catch (error) {
            console.error('Search error:', error);
            setResults([]);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Enter search query..."
                style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    boxSizing: 'border-box'
                }}
            />
            <button 
                onClick={handleSearch}
                style={{
                    padding: '10px 20px',
                    cursor: 'pointer',
                    backgroundColor: '#007BFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    marginBottom: '20px'
                }}>
                Search
            </button>
            <div className="results-container" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                justifyContent: 'center'
            }}>
                {results.map((result, index) => (
                    <div key={index} className="card" style={{
                        flex: '0 1 300px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                        padding: '20px',
                        borderRadius: '10px',
                        background: 'white'
                    }}>
                        <h3 style={{color: '#333', marginTop: '0'}}>{result.name}</h3>
                        <p style={{color: '#666'}}>{result.description}</p>
                        <p style={{color: '#666'}}>{result.date}</p>

                    </div>
                ))}
            </div>
        </div>


    );
};

export default SearchComponent;
