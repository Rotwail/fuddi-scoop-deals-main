
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { CheckCircle, Star } from 'lucide-react';
import { coupons } from '../data/mockData';

const RedemptionConfirmation: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  
  const coupon = coupons.find(c => c.id === id);
  
  useEffect(() => {
    // Show feedback form after 3 seconds
    const timer = setTimeout(() => {
      setShowFeedback(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleSubmitFeedback = () => {
    // In a real app, this would submit the feedback to a backend
    navigate('/home');
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
    <div className="min-h-screen bg-white flex flex-col">
      {!showFeedback ? (
        <div className="flex-1 flex flex-col items-center justify-center px-6 animate-fade-in">
          <CheckCircle size={100} className="text-primary mb-8" />
          
          <h1 className="text-2xl font-bold text-center mb-2">
            Coupon Redeemed!
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Enjoy your {coupon.name} 🎉
          </p>
          
          <div className="bg-gray-50 p-5 rounded-lg w-full max-w-sm mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">{coupon.name}</span>
              <span className="font-bold">${coupon.discountedPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">You saved:</span>
              <span className="font-medium text-green-600">
                ${(coupon.originalPrice - coupon.discountedPrice).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center px-6 animate-fade-in">
          <h1 className="text-2xl font-bold text-center mb-4">
            How was your experience?
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Your feedback helps improve Fuddi for everyone!
          </p>
          
          <div className="flex justify-center space-x-2 mb-8">
            {[1, 2, 3, 4, 5].map(i => (
              <button 
                key={i} 
                className="p-2"
                onClick={() => setRating(i)}
              >
                <Star 
                  size={32} 
                  className={i <= rating ? "text-amber-400" : "text-gray-300"} 
                  fill={i <= rating ? "currentColor" : "none"} 
                />
              </button>
            ))}
          </div>
          
          <div className="w-full max-w-sm">
            <textarea
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 min-h-[120px] mb-4"
              placeholder="Tell us about your experience (optional)"
            />
            
            <Button 
              variant="primary" 
              size="lg" 
              fullWidth
              onClick={handleSubmitFeedback}
              disabled={rating === 0}
            >
              Submit Feedback
            </Button>
            
            <button 
              className="w-full text-center text-gray-500 mt-4 py-2"
              onClick={() => navigate('/home')}
            >
              Skip Feedback
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RedemptionConfirmation;
