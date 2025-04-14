
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <Logo size="lg" className="mb-6 inline-block" />
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! This page doesn't exist</p>
        <div className="mb-8">
          <p className="text-gray-500">
            The page you're looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
        </div>
        <Button variant="primary" to="/">
          Return to Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
