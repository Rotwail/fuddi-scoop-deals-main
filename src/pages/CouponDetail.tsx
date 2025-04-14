
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Star, StarHalf, User } from 'lucide-react';
import Button from '../components/Button';
import { coupons } from '../data/mockData';

const CouponDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const coupon = coupons.find(c => c.id === id);
  
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
  
  const discount = Math.round((1 - coupon.discountedPrice / coupon.originalPrice) * 100);
  
  const handleRedeem = () => {
    navigate(`/scan/${id}`);
  };
  
  // Calculate expiry date in human readable format
  const expiryDate = new Date(coupon.expiresAt);
  const today = new Date();
  const diffTime = expiryDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const expiresText = diffDays === 0 
    ? 'Expires today' 
    : diffDays === 1 
      ? 'Expires tomorrow' 
      : `Expires in ${diffDays} days`;
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header image */}
      <div className="relative w-full h-64">
        <img 
          src={coupon.imageUrl} 
          alt={coupon.name}
          className="w-full h-full object-cover"
        />
        <button 
          className="absolute top-4 left-4 p-2 bg-white/70 backdrop-blur-sm rounded-full"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={20} />
        </button>
      </div>
      
      {/* Content */}
      <div className="px-5 py-6">
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-2xl font-bold text-gray-800">{coupon.name}</h1>
          <div className="bg-red-100 text-red-600 text-sm font-medium px-3 py-1 rounded-full">
            {discount}% off
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <MapPin size={16} className="mr-1" />
          <span>{coupon.location}</span>
          <span className="mx-2">•</span>
          <Clock size={16} className="mr-1" />
          <span className="text-amber-600">{expiresText}</span>
        </div>
        
        <div className="flex items-center mb-6">
          <div className="flex space-x-1 mr-2">
            {[1, 2, 3, 4, 5].map(i => (
              <span key={i} className="text-amber-400">
                {i <= Math.floor(coupon.rating) ? (
                  <Star size={18} fill="currentColor" />
                ) : i - coupon.rating < 1 ? (
                  <StarHalf size={18} fill="currentColor" />
                ) : (
                  <Star size={18} />
                )}
              </span>
            ))}
          </div>
          <span className="text-gray-600 text-sm">{coupon.rating} • 12 reviews</span>
        </div>
        
        <div className="border-t border-gray-100 pt-4 mb-6">
          <h2 className="font-semibold text-lg mb-2">Description</h2>
          <p className="text-gray-700">{coupon.description}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-500">Regular price</span>
            <span className="text-gray-500 line-through">${coupon.originalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Discounted price</span>
            <span className="font-bold text-lg text-primary">${coupon.discountedPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      {/* Sticky bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-100 p-4">
        <Button variant="primary" size="lg" fullWidth onClick={handleRedeem}>
          Redeem Now
        </Button>
      </div>
    </div>
  );
};

export default CouponDetail;
