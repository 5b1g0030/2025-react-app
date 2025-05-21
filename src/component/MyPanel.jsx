import { useState } from "react";
import MySlider from "./MySlider";
import "./MyPanel.css";

function MyPanel() {
    const [r, setR] = useState(128);
    const [g, setG] = useState(128);
    const [b, setB] = useState(128);

    const handleRChange = (e) => setR(Number(e.target.value));
    const handleGChange = (e) => setG(Number(e.target.value));
    const handleBChange = (e) => setB(Number(e.target.value));

    const rgbColor = `rgb(${r}, ${g}, ${b})`;

     // 計算 luminance（亮度）
     const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
     const textColor = luminance > 186 ? "black" : "white"; // 根據明度切換文字顏色

    return (
        <div className="panel">
            <div className="sliders">
                <div>
                    <label>R:</label>
                    <input type="range" min="0" max="255" value={r} onChange={handleRChange} />
                    <span>{r}</span>
                </div>
                <div>
                    <label>G:</label>
                    <input type="range" min="0" max="255" value={g} onChange={handleGChange} />
                    <span>{g}</span>
                </div>
                <div>
                    <label>B:</label>
                    <input type="range" min="0" max="255" value={b} onChange={handleBChange} />
                    <span>{b}</span>
                </div>
            </div>
            <div className="color-box" style={{ backgroundColor: rgbColor }}>
                {rgbColor}
            </div>
        </div>
    );
}

export default MyPanel;
