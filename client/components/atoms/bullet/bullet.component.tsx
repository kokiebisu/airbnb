import React from 'react';
import { AmenityBullet } from './bullet.amenity';
import { CharacteristicBullet } from './bullet.characteristics';
import { ScoreBullet } from './bullet.score';
import { BulletProps } from './props';

interface mapProps {
  [key: string]: JSX.Element;
}

export const Bullet: React.FC<BulletProps> = ({
  extendsTo,
  type,
  ...props
}) => {
  const types: mapProps = {
    characteristic: <CharacteristicBullet {...props} />,
    amenity: <AmenityBullet {...props} />,
    score: <ScoreBullet {...props} />,
  };

  return (
    <div data-testid='bullet' className={extendsTo}>
      {types[type]}
    </div>
  );
};
