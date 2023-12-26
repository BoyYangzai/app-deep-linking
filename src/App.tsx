import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const appNameParam = urlParams.get('appName');
    const appPathParam = urlParams.get('appPath');

    window.open(
      `${appNameParam}://${appPathParam}`
    )
  }, []);


  return (
    <>
    
    </>
  )
}

export default App
