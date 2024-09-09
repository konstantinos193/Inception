import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dreams from './components/Dreams';
import Homepage from './pages/Homepage'; // Ensure this path is correct

function App() {
    return (
        <Router basename="/Inception"> {/* Add basename if your app is hosted in a subdirectory */}
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} /> {/* Add the homepage route */}
                    <Route path="/dreams" element={<Dreams />} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;