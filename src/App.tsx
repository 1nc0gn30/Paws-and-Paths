import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { SEO } from './components/SEO';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SEO 
                    title="Dog Walking & Poop Scoop Service" 
                    description="Virginia Beach's #1 pet care service. Professional dog walking and reliable pet waste removal. Keeping your yard clean and your pups happy."
                  />
                  <Home />
                </>
              }
            />
            <Route
              path="/services"
              element={
                <>
                  <SEO 
                    title="Pet Care Services" 
                    description="Explore our dog walking, poop scoop, and pet sitting services in Virginia Beach. Flexible plans and affordable pricing for local families."
                  />
                  <Services />
                </>
              }
            />
            <Route
              path="/about"
              element={
                <>
                  <SEO 
                    title="About Us" 
                    description="Learn about Paws & Paths, Virginia Beach's most trusted pet care team. Our story, our values, and our commitment to your pets."
                  />
                  <About />
                </>
              }
            />
            <Route
              path="/contact"
              element={
                <>
                  <SEO 
                    title="Waitlist" 
                    description="Join the Paws & Paths Virginia Beach waitlist. Submit your email to get notified when new service spots open."
                  />
                  <Contact />
                </>
              }
            />
            <Route
              path="/privacy"
              element={
                <>
                  <SEO
                    title="Privacy Policy"
                    description="Read the Paws & Paths Virginia Beach privacy policy for website usage and waitlist email collection."
                  />
                  <Privacy />
                </>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}
