import React from 'react';

interface UserProfileCardProps {
  name: string;
  plan: string;
  initial: string;
}

export const UserProfileCard: React.FC<UserProfileCardProps> = ({ name, plan, initial }) => {
  return (
    <div className="bg-blue-50/60 border border-blue-100/80 rounded-2xl p-3 flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center shrink-0 shadow-sm">
        {initial}
      </div>
      <div className="overflow-hidden">
        <h4 className="text-sm font-semibold text-gray-900 truncate">{name}</h4>
        <p className="text-xs font-medium text-blue-600">{plan}</p>
      </div>
    </div>
  );
};