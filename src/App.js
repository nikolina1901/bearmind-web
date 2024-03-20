import "./App.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom"
import TeamPage from "./pages/Team/TeamPage";
import PlayerDetailsPage from "./pages/Player/PlayerDetailsPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TeamPage />} />
          <Route path="/player/:id" element={<PlayerDetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
