import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react';

interface LoginFormProps {
  roleName: string;
  onSubmit: (email: string, pass: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ roleName, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto space-y-5">
      
      {/* Input Email */}
      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1.5">Email Address</label>
        <div className="relative">
          <Mail className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="email" 
            required
            placeholder={`Masukkan email ${roleName}...`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors shadow-sm"
          />
        </div>
      </div>

      {/* Input Password */}
      <div>
        <label className="block text-xs font-bold text-slate-500 mb-1.5">Password</label>
        <div className="relative">
          <Lock className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type={showPassword ? 'text' : 'password'} 
            required
            placeholder="Masukkan password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-colors shadow-sm"
          />
          <button 
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Lupa Password */}
      <div className="flex justify-end pt-1">
        <a href="#" className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
          Lupa Password?
        </a>
      </div>

      {/* Submit Button */}
      <button 
        type="submit" 
        className="w-full flex items-center justify-center gap-2 py-3 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all shadow-[0_8px_20px_-6px_rgba(37,99,235,0.4)] hover:shadow-[0_12px_25px_-6px_rgba(37,99,235,0.5)] active:scale-95 mt-4"
      >
        <LogIn className="w-4 h-4" /> Masuk sebagai {roleName}
      </button>

    </form>
  );
};