
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

interface RecipeCardProps {
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  image: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ 
  title, 
  description, 
  prepTime, 
  cookTime, 
  image 
}) => {
  const { user } = useAuth();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 bg-gray-200">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full">
            <span className="text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
        <div className="flex justify-between mt-4 text-sm text-gray-500">
          <div>Prep: {prepTime}</div>
          <div>Cook: {cookTime}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
