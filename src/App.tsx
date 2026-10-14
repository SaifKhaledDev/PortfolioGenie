import LandingPage from "./pages/LandingPage";
import GithubConnection from "./pages/GithubConnection";

export default function App() {
  if (window.location.pathname === "/connect") {
    return <GithubConnection />;
  }

  return <LandingPage />;
}
