import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SiAnydesk } from "react-icons/si";
import Dashboard from "./pages/Dashboard";
import CreateTicket from "./pages/CreateTicket";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import EditTciket from "./components/EditTciket";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import { useEffect, useState } from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <div className="h-screen flex items-center justify-center animate-pulse">
          <ClimbingBoxLoader
            loading={loading}
            size={40}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        
        </div>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-ticket" element={<CreateTicket />} />
            <Route path="/ticketPage/:id" element={<EditTciket />} />
          </Routes>
        </Layout>
      )}
    </BrowserRouter>
  );
}

export default App;
