import { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom/client'
import { Usd } from "../Curency";


const MultiRange = ({ max, valMin, valMax }) => {
  const lower = useRef(null);
  const upper = useRef(null);
  const [valFrom, setValFrom] = useState(valMin);
  const [valTo, setValTo] = useState(valMax);
  let percent1 = (valFrom / max) * 100;
  let percent2 = (valTo / max) * 100;

  const handleRange = () => {
    setValFrom(lower.current.value);
    setValTo(upper.current.value);
  };


  useEffect(() => {
    valFrom > valTo && setValFrom(valTo);
  }, [valFrom, valTo]);

  return (
    <div className="multi-range smooth">
      <input
        type="range"
        max={max}
        value={valFrom}
        onChange={handleRange}
        id="lower"
        ref={lower}
      />
      <input
        type="range"
        max={max}
        value={valTo}
        onChange={handleRange}
        id="upper"
        ref={upper}
      />

      <output style={{ left: `calc(${percent1}% - ${percent1/3}px)` }}>
        <span className="from-value">{`$${valFrom}`}</span>
      </output>

      <output style={{ left: `calc(${percent2}% - ${percent2/3}px)` }}>
        <span className="to-value">{`$${valTo}`}</span>
      </output>

      <div
        className="track"
        style={{
          background: `linear-gradient(to right, 
            #F0F0F0 ${percent1}% , #000 ${percent1}% , 
            #000 ${percent2}%, #F0F0F0 ${percent2}%)`,
        }}
      />
    </div>
  );
};

export default MultiRange;
