
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button"
import { UtensilsCrossed } from 'lucide-react';

const Welcome: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#7D02FF] to-[#4B0199] animate-fade-in">
      <div className="w-full max-w-md flex flex-col items-center text-center">
        <div className="mb-6">
          <h1 className="text-6xl font-normal font-['Lobster'] text-white" style={{ fontWeight: 'normal' }}>Fuddi</h1>
        </div>
        <div className="mb-12" /> 

        <Button
          className="bg-white text-[#4B0199] hover:bg-gray-100 border border-gray-300 rounded-lg shadow-md"
          size="lg"
          fullWidth 
          onClick={() => navigate('/login')}
          icon={<UtensilsCrossed size={20} />}
        >
          Iniciar
        </Button>

      </div>
    </div>
  );
};

export default Welcome;
