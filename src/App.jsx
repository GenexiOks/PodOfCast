import HomePage from "./pages/HomePage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutPage from "./pages/AboutPage.jsx"
import EpisodeOne from "./pages/EpisodeOne.jsx"

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/EpisodeOne" element={<EpisodeOne />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
