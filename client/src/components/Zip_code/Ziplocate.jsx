import React, { useState, } from 'react';
// import React, { useEffect } from 'react';

const ZipCodeSearch = () => {
  const zipCodes = [
    '79901', '79902', '79903', '79904', '79905',
    '79906', '79907', '79911', '79912', '79915',
    '79922', '79924', '79925', '79927', '79928',
    '79930', '79932', '79934', '79935', '79936',
    '79938', '79968'
  ];

  const [filteredZipCodes, setFilteredZipCodes] = useState(zipCodes);
  const [searchTerm, setSearchTerm] = useState('');
  
//   useEffect(() => {
//     // This effect could be used for fetching data based on zipCodes,
//     // but since zipCodes are static here, it's just simulating a fetch
//     const simulateFetchData = () => {
//       // Simulate an API call or any asynchronous action here
//       // For demonstration, we're just logging a message
//       console.log('Fetching data based on zipCodes:', zipCodes);
//     };

//     simulateFetchData();
//   }, [zipCodes]);

  const handleSearchChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term.trim() === '') {
      setFilteredZipCodes(zipCodes);
    } else {
      const filtered = zipCodes.filter(zip => zip.includes(term));
      setFilteredZipCodes(filtered);
    }
  };

  return (
    <div>
      <h2>Zip Code Search</h2>
      <input
        type="text"
        placeholder="Search by Zip Code..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px', padding: '5px' }}
      />
      <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
        {filteredZipCodes.map((zipCode) => (
          <div key={zipCode} style={{ marginBottom: '10px' }}>
            <p><strong>{zipCode}</strong>: {zipCode}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZipCodeSearch;