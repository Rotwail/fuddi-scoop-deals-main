import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Lock, ArrowLeft } from "lucide-react";
const Register: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // In a real application, you would handle registration logic here
    // For now, we'll just navigate to the home page if passwords match
    if (password === confirmPassword) {
      navigate('/home');
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col px-4 bg-gradient-to-b from-[#7D02FF] to-[#4B0199] animate-fade-in">
      <div className="absolute top-4 left-4">
        <ArrowLeft
          className="text-white cursor-pointer h-6 w-6"
          onClick={() => navigate('/login')}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-full max-w-md">
          <h1 className="text-6xl font-normal font-['Lobster'] text-white mb-8 text-center">
            Fuddi
          </h1>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-900 text-center">
              Crea tu cuenta
            </h2>
            <div className="space-y-4">

              <div className="grid gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="grid gap-2 mt-4">
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pr-10"
                  />
                  <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                </div>
              </div>

              <div className="grid gap-2 mt-4">
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="pr-10"
                  />
                  <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                </div>
              </div>

              <Button
                variant="default"
                size="lg"
                fullWidth
                onClick={() => {}}
                className="bg-black hover:bg-gray-800 text-white"
              >
                Registrarse
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;