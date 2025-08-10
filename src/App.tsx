import "./App.css";
import quoteImg from "./assets/pattern-divider-mobile.svg";

function App() {
  return (
    <>
      <div className="min-h-dvh bg-blue-950 text-gray-300">
        <div className="flex justify-center align-middle justify-items-center font-extrabold">
          <div className="quote-container max-w-lg mt-20 mx-5 p-10 text-center bg-blue-900 rounded-lg">
            <p className="text-xs mb-10 text-green-300">
              ADVICE #177
            </p>
            <p className="text-xl">
              "It's easy to sit up and take notice, what's difficult is getting
              up and taking action."
            </p> 
            <div className="flex justify-center">
            <img className="mt-10" src={quoteImg} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
