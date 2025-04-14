
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, QrCode, Clock } from 'lucide-react';
import Button from '../components/Button';
import { coupons } from '../data/mockData';
import { useToast } from '@/hooks/use-toast';

const QRScan: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const coupon = coupons.find(c => c.id === id);
  
  // Timer state (10 minutes in seconds)
  const [timeRemaining, setTimeRemaining] = useState(10 * 60);
  
  // Mock scanning functionality
  const [isScanning, setIsScanning] = useState(true);
  
  useEffect(() => {
    // Start countdown timer
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          toast({
            title: "QR Code Expired",
            description: "The QR code has expired. Please try again.",
            variant: "destructive"
          });
          navigate('/home');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Mock a successful scan after 5 seconds
    const scanTimer = setTimeout(() => {
      setIsScanning(false);
    }, 5000);
    
    return () => {
      clearInterval(timer);
      clearTimeout(scanTimer);
    };
  }, [navigate, toast]);
  
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const handleRedeem = () => {
    navigate(`/redeem/${id}`);
  };
  
  if (!coupon) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Coupon not found</h1>
          <Button variant="primary" onClick={() => navigate('/home')}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <div className="p-4">
        <button 
          className="p-2 bg-gray-800 rounded-full"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20} className="text-white" />
        </button>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {isScanning ? (
          <>
            <div className="w-60 h-60 bg-white/10 rounded-lg mb-8 relative flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-white/20 rounded-lg"></div>
              <div className="absolute w-40 h-1 bg-secondary/70 animate-pulse"></div>
              <div className="absolute h-40 w-1 bg-secondary/70 animate-pulse"></div>
              <QrCode size={100} className="text-white/40" />
            </div>
            
            <h2 className="text-xl font-semibold text-white mb-2">
              Scanning...
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Position the QR code within the frame to scan
            </p>
          </>
        ) : (
          <>
            <div className="w-60 h-60 bg-white p-4 rounded-lg mb-8 flex items-center justify-center">
              <div className="text-center">
                <QrCode size={100} className="mx-auto mb-4" />
                <p className="font-semibold">{coupon.name}</p>
                <p className="text-sm text-gray-500">${coupon.discountedPrice.toFixed(2)}</p>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-white mb-2">
              QR Code Ready
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Show this to the cashier to redeem your discount
            </p>
          </>
        )}
        
        <div className="flex items-center text-secondary">
          <Clock size={20} className="mr-2" />
          <span className="font-mono text-lg">{formatTime(timeRemaining)}</span>
        </div>
        <p className="text-gray-400 text-sm mt-1 mb-10">
          Code expires in {formatTime(timeRemaining)}
        </p>
        
        <Button 
          variant="primary" 
          size="lg" 
          fullWidth
          disabled={isScanning}
          onClick={handleRedeem}
          className="max-w-xs"
        >
          {isScanning ? 'Scanning...' : 'Redeem Coupon'}
        </Button>
      </div>
    </div>
  );
};

export default QRScan;
