import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [deepLink,setDeepLink] = useState('')
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const appNameParam = urlParams.get('appName');
    const appPathParam = urlParams.get('appPath');

    const link = `${appNameParam}://${appPathParam}`
    setDeepLink(link)
    window.open(
      link,'__blank'
    )
  }, []);


  return (
    <>
      {deepLink}
    </>
  )
}

export default App
