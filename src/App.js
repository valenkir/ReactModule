import bgLine1 from "./assets/images/bg-line-1.svg";
import bgLine2 from "./assets/images/bg-line-2.svg";
import bgLine3 from "./assets/images/bg-line-3.svg";
import bgLine4 from "./assets/images/bg-line-4.svg";
import Header from "./Header";
import Main from "./Main";
import "./css/reset.css";
import "./css/utilities.scss";
import "./css/App.scss";

function App() {
  return (
    <div className="App-main-container">
      <img
        className="App-bg-line App-bg-line-1"
        src={bgLine1}
        alt="Background image: decorative line"
      />
      <img
        className="App-bg-line App-bg-line-2"
        src={bgLine2}
        alt="Background image: decorative line"
      />
      <img
        className="App-bg-line App-bg-line-3"
        src={bgLine3}
        alt="Background image: decorative line"
      />
      <img
        className="App-bg-line App-bg-line-4"
        src={bgLine4}
        alt="Background image: decorative line"
      />
      <Header />
      <Main />
    </div>
  );
}

export default App;
