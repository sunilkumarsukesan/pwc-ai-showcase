import React from 'react';
import { LinkItem } from '../data/links';
import * as LucideIcons from 'lucide-react';

interface LinkCardProps {
  link: LinkItem;
  delay: number;
}

const LinkCard: React.FC<LinkCardProps> = ({ link, delay }) => {
  // Dynamically get the icon component from lucide-react
  const IconComponent = (LucideIcons as Record<string, React.FC<{ size?: number; className?: string }>>)[
    link.icon.charAt(0).toUpperCase() + link.icon.slice(1)
  ] || LucideIcons.Link;

  return (
    <a 
      href={link.url}
      className="card-transition group flex flex-col items-start justify-between rounded-xl p-6 h-full bg-white border border-gray-200 hover:card-hover hover:border-orange-400 animate-fade-in"
      style={{ 
        animationDelay: `${delay * 0.1}s`,
        animationFillMode: 'both'
      }}
    >
      <div className="mb-4 rounded-lg bg-orange-100 p-3 text-orange-500 transition-colors group-hover:bg-orange-500 group-hover:text-white">
        <IconComponent size={24} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500">
          {link.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {link.description}
        </p>
        <div className="flex items-center text-orange-500 text-sm font-medium">
          <span className="mr-2">Learn More</span>
          <LucideIcons.ArrowRight size={16} />
        </div>
      </div>
    </a>
  );
};

export default LinkCard;