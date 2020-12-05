import React from "react";

/** components */
import { AmenityBullet } from "./bullet.amenity";
import { BringBullet } from "./bullet.bring";
import { CharacteristicBullet } from "./bullet.characteristics";
import { CheckBullet } from "./bullet.check";
import { ExperienceBullet } from "./bullet.experience";
import { HelpBullet } from "./bullet.help";
import { HostBullet } from "./bullet.host";
import { KnowBullet } from "./bullet.know";
import { OnlineHostBullet } from "./bullet.onlinehost";
import { PriorityBullet } from "./bullet.priority";
import { QuestionBullet } from "./bullet.question";
import { RatingBullet } from "./bullet.rating";
import { RequiredBullet } from "./bullet.required";
import { ScoreBullet } from "./bullet.score";
import { BulletProps } from "./props";

interface mapProps {
  [key: string]: JSX.Element;
}

/**
 * Bundles the bullet components
 * @param {string} extendsTo - Adds custom styling to the bullet component
 * @param {string} type - Specifies the type of section component
 */
export const Bullet: React.FC<BulletProps> = ({
  extendsTo,
  type,
  ...props
}) => {
  const types: mapProps = {
    characteristic: <CharacteristicBullet {...props} />,
    amenity: <AmenityBullet {...props} />,
    score: <ScoreBullet {...props} />,
    host: <HostBullet {...props} />,
    know: <KnowBullet {...props} />,
    rating: <RatingBullet {...props} />,
    bring: <BringBullet {...props} />,
    experience: <ExperienceBullet {...props} />,
    priority: <PriorityBullet {...props} />,
    help: <HelpBullet {...props} />,
    required: <RequiredBullet {...props} />,
    onlinehost: <OnlineHostBullet {...props} />,
    question: <QuestionBullet {...props} />,
    check: <CheckBullet {...props} />,
  };

  return (
    <div data-testid="bullet" className={extendsTo}>
      {types[type]}
    </div>
  );
};
