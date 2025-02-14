import HomePage from "./pages/HomePage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutPage from "./pages/AboutPage.jsx"
import EpisodeOne from "./Episodes/EpisodeOne.jsx"

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/Episode/1" element={<EpisodeOne />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
