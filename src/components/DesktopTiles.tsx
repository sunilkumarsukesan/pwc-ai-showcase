import React from 'react';
import { LinkItem } from '../data/links';
import LinkCard from './LinkCard';

interface DesktopTilesProps {
  links: LinkItem[];
}

const DesktopTiles: React.FC<DesktopTilesProps> = ({ links }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {links.map((link, index) => (
        <LinkCard key={link.id} link={link} delay={index} />
      ))}
    </div>
  );
};

export default DesktopTiles;