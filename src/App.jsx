import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Docs from './pages/Docs';
import ApiKeys from './pages/ApiKeys';
import Dashboard from './pages/Dashboard';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Navigate to="/docs" replace />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/api-keys" element={<ApiKeys />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
