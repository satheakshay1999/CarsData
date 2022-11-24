import "./App.css";
import cars from "./Api/cars.json";
import Cars from "./Components/Cars";
import { useRef, useState } from "react";

function App() {
  const [scrollX, setscrollX] = useState(0);
  let scrl = useRef(null);
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
  };
  return (
    <>
      <div className="app" ref={scrl} onScroll={scrollCheck}>
        {cars.map((item) => (
          <Cars
            key={item.id}
            type={item.bodyType}
            name={item.modelName}
            modelType={item.modelType}
            carImage={item.imageUrl}
          />
        ))}
      </div>
      <div className="app-btn_container">
        <button className="left-btn button" onClick={() => slide(-400)}>
          <img src="./images/chevron-circled.svg" alt="Right Button" />
        </button>
        <button className="right-btn button" onClick={() => slide(+400)}>
          <img src="./images/chevron-circled.svg" alt="Left Button" />
        </button>
      </div>
    </>
  );
}

export default App;
