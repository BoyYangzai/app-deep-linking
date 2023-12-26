import { useEffect, useState } from 'react';
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
    // 创建一个隐藏的 a 元素
    const linkElement = document.createElement('a');
    linkElement.href = deepLink;
    linkElement.target = '_blank';

    // 将元素添加到文档中
    document.body.appendChild(linkElement);

    // 模拟点击事件
    linkElement.click();

    // 移除添加的元素
    document.body.removeChild(linkElement);
  };

  return (
    <>
      {deepLink}
      <button onClick={handleOpenLink}>打开链接</button>
      <p>这会模拟用户点击以打开链接。</p>
    </>
  );
}

export default App;
