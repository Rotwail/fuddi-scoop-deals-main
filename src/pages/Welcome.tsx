
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { UtensilsCrossed } from 'lucide-react';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-white to-gray-100 animate-fade-in">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <div className="mb-6">
          <Logo size="lg" />
        </div>
        
        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          Welcome to Fuddi
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Eat more, spend less
        </p>
        
        <div className="w-full max-w-xs mb-10">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop" 
            alt="Food imagery" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        
        <Button 
          variant="primary" 
          size="lg" 
          fullWidth 
          onClick={() => navigate('/login')}
          icon={<UtensilsCrossed size={20} />}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
