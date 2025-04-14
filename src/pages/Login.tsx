
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { ArrowLeft } from 'lucide-react';

const Login: React.FC = () => {
  const navigate = useNavigate();
  
  const handleGoogleLogin = () => {
    // In a real app, this would connect to Google OAuth
    // For now, just navigate to home
    navigate('/home');
  };
  
  const handleGuestLogin = () => {
    navigate('/home');
  };
  
  return (
    <div className="min-h-screen flex flex-col px-4 bg-white animate-fade-in">
      <div className="py-4">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <ArrowLeft size={24} />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <Logo size="lg" className="mb-6" />
            <h1 className="text-2xl font-bold text-gray-800">
              Sign in to continue
            </h1>
            <p className="text-gray-600 mt-2">
              Access your coupons and save on campus meals
            </p>
          </div>
          
          <div className="space-y-4">
            <Button 
              variant="outline" 
              size="lg" 
              fullWidth
              onClick={handleGoogleLogin}
              className="border-2"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>
            
            <div className="relative py-3">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or</span>
              </div>
            </div>
            
            <Button 
              variant="secondary" 
              size="lg" 
              fullWidth
              onClick={handleGuestLogin}
            >
              Continue as Guest
            </Button>
          </div>
          
          <p className="mt-8 text-center text-sm text-gray-500">
            By continuing, you agree to Fuddi's Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
