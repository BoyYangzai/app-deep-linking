import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [deepLink, setDeepLink] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const appNameParam = urlParams.get('appName');
    const appPathParam = urlParams.get('appPath');

    const link = `${appNameParam}://${appPathParam}`;
    setDeepLink(link);
  }, []);

  const handleOpenLink = () => {
    window.open(deepLink, '_blank');
  };

  return (
    <>
      {deepLink}
      <button onClick={handleOpenLink}>Open Link</button>
    </>
  );
}

export default App;
