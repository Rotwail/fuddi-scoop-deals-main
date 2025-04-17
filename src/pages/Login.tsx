import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-b from-[#7D02FF] to-[#4B0199] animate-fade-in">
      <h1 className="text-6xl font-normal font-['Lobster'] text-white mb-8">
        Fuddi
      </h1>
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <form className="mt-[-4] space-y-4" action="#" method="POST">
              <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mt-[-8]">
                      Iniciar sesión!
                  </h2>
              </div>
              <div className=" rounded-md shadow-sm">
                  <div>
                      <Input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Email"
                      />
                  </div>
                  <div className="mt-4 relative">
                      <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          autoComplete="current-password"
                          required
                          className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm pr-10"
                          placeholder="Password"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                        {!showPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" onClick={() => setShowPassword(!showPassword)} />
                          ) : (
                            <Eye className="h-5 w-5 text-gray-400" onClick={() => setShowPassword(!showPassword)} />
                            )}
                      </div>
                  </div>
              </div>

              <div className="flex items-center justify-end">
                  <div className="text-sm">
                      <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                          ¿Olvidaste tu contraseña?
                      </a>
                  </div>
              </div>

              <div className="flex justify-center">
                  <Button
                      type="submit"
                      className="bg-black hover:bg-gray-800 text-white"
                  >
                      Continuar
                  </Button>
              </div>
              <p className="mt-2 text-center text-sm text-gray-600">
                  ¿Aún no tienes cuenta?{" "}
                  <a
                      href="/register"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                      Regístrate
                  </a>
              </p>
          </form>
      </div>
      <div className="mt-4">
        <Button
          className="bg-white text-black hover:bg-gray-100 w-full"
          onClick={() => {}} // Add Google sign-in logic here
        >
          Sign in with Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
