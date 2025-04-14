import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { Search, Home as HomeIcon, User, Star } from 'lucide-react';
import { categories, coupons } from '../data/mockData';
import { Coupon } from '../types';
import { Card } from '@/components/ui/card';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredCoupons = coupons.filter(coupon => {
    const matchesCategory = activeCategory === 'all' || coupon.category === activeCategory;
    const matchesSearch = coupon.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         coupon.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen bg-white pb-20">
      <header className="bg-white sticky top-0 z-10 pt-2 pb-2 px-4">
        <div className="mb-3">
          <Logo size="xl" className="text-[#4F01A1] text-center text-4xl font-['Lobster']" />
        </div>
        
        <div className="relative text-lg text-[#4F01A1]">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar productos"
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </header>
      
      <div className="bg-white px-4 mt-2">
        <div className="flex space-x-3 overflow-x-auto py-3 scrollbar-hide">
          {categories.map(category => (
            <button
            key={category.id}
            className={`flex flex-col items-center w-20 h-20 rounded-xl ${activeCategory === category.id ? 'bg-[#9b87f5] text-white' : 'bg-gray-100 text-black shadow-md'} font-inter`}
            onClick={() => setActiveCategory(category.id)}>
              <div className="flex flex-col items-center justify-center h-full">
                <span className="text-3xl">{category.id === 'all' ? '🍔' : category.id === 'drinks' ? '🥤' : category.id === 'sweet' ? '🍰' : category.id === 'combos' ? '🎁' : category.id === 'promotions' ? '🔥' : category.id === 'savory' ? '🍕' : category.id === 'lunch' ? '🍝' : '🎉'}</span>
                <span className="text-sm text-center mt-1">
                  {category.name}
                </span>
              </div>
            </button>
          ))}
      </div>
      </div>
      
      <div className="px-4 py-2">
        <h2 className="text-xl font-bold mb-4 bg-white text-black">Descuentos Imperdibles 🤩</h2>
        
        {filteredCoupons.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No coupons found.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredCoupons.map(coupon => (
              <CouponCard 
                key={coupon.id} 
                coupon={coupon}
                onClick={() => navigate(`/coupon/${coupon.id}`)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-primary h-16 flex justify-around items-center rounded-t-2xl">
        <button className="flex flex-col items-center justify-center text-white">
          <HomeIcon size={22} />
          <span className="text-xs mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-white">
          <User size={22} />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};

interface CouponCardProps {
  coupon: Coupon;
  onClick: () => void;
}

const CouponCard: React.FC<CouponCardProps> = ({ coupon, onClick }) => {
  return (
    <Card className="overflow-hidden shadow-md" onClick={onClick}>
      <div className="flex bg-[#F8F8F8] rounded-lg">
        <div className="w-1/3 p-2">
          <img 
            src={coupon.imageUrl} 
            alt={coupon.name}
            className="w-full h-24 object-cover rounded-lg"
          />
        </div>
        <div className="w-2/3 p-3 relative">
          <h3 className="font-bold text-lg">{coupon.name}</h3>
          
          <div className="mt-2 space-y-1">
            <p className="text-sm text-purple-700">
              Antes: <span className="line-through">${coupon.originalPrice.toFixed(2)}</span>
            </p>
            <p className="font-bold text-purple-700">
              Ahora: <span>${coupon.discountedPrice.toFixed(2)}</span>
            </p>
          </div>
          
          <div className="absolute bottom-3 right-3 flex items-center">
            <Star 
              size={18}
              fill="#FFD700"
              color="#FFD700"
              className="mr-1" 
            />
            <span className="text-sm font-semibold text-black">{coupon.rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Home;
