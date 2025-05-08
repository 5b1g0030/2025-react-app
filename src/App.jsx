// -----匯入模組資源
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MySlider from "./component/MySlider"; // 根據檔案路徑調整

// App()是整個畫面的核心組件，React 會從這裡開始渲染畫面。
function App() {
  const [count, setCount] = useState(0) //建立一個狀態變數 count，每次呼叫它React都會被重新渲染

  return ( // 回傳值(畫面內容)
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>本網站使用Vite + React開發</h1>
      <h2>我的第一個元件</h2>
      <div>
        <p>R:<MySlider /></p>
        <p>G:<MySlider /></p>
        <p>B:<MySlider /></p>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

// 讓這個 App 組件能被其它地方匯入使用（例如 main.jsx 中的 <App />）
export default App
