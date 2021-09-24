import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import CheckInPage from "./pages/CheckInPage";
function App() {
  return (
    <div className="App">
      <HomePage />
      <SignupPage />
      <LoginPage />
      <LeaderboardPage />
      <CheckInPage />
    </div>
  );
}

export default App;
