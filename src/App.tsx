import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import quoteImg from "./assets/pattern-divider-mobile.svg";
import adviceDice from "./assets/icon-dice.svg";

type Advice = {
  advice: string;
  id: number;
};

function App() {
  const [advice, setAdvice] = useState<Advice | null>(null);

  const fetchAdvice = () => {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      console.log(response.data.slip);
      setAdvice(response.data.slip);
    });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <div className="min-h-dvh bg-blue-950 text-gray-300">
        <div className="flex justify-center justify-items-center">
          <div className="quote-container relative mt-50 flex-col max-w-lg mx-5 p-10 text-center bg-blue-900 rounded-lg">
            {advice != null ? (
              <>
                <p className="text-l my-5 text-green-300 font-medium">
                  ADVICE #{advice.id}
                </p>
                <p className="text-xl my-8 font-extrabold">{advice.advice}</p>
              </>
            ) : (
              <>
                <p>Advice loading...</p>
              </>
            )}
            <div className="flex justify-center my-5">
              <img src={quoteImg} />
            </div>
            <button
              className="filter absolute -bottom-8 left-1/2 -translate-x-1/2  
              p-4 rounded-full bg-green-500 transition ease-in-out duration-200 
              hover:brightness-125 hover:drop-shadow-lg active:hue-rotate-90 active:scale-110"
              onClick={() => fetchAdvice()}
            >
              <img src={adviceDice} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
