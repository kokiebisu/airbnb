import React from 'react';
import { CategorySection } from './section.category';
import { PanelSection } from './section.panel';
import { StaySection } from './section.stay';
import { CharacteristicsSection } from './section.characteristics';
import { DescriptionSection } from './section.description';
import { SectionProps } from './props';
import { ArrangementsSection } from './section.arrangements';
import { AmenitySection } from './section.amenities';
import { ReviewsSection } from './section.reviews';
import { HostSection } from './section.host';
import { KnowSection } from './section.know';
import { OtherSection } from './section.other';
import { NearbySection } from './section.nearby';
import { DestinationsSection } from './section.destinations';
import { BannerSection } from './section.banner';
import { OnlineSection } from './section.online';

interface mapProps {
  [key: string]: JSX.Element;
}

export const Section: React.FC<SectionProps> = ({
  extendsTo,
  type,
  ...props
}) => {
  const types: mapProps = {
    stay: <StaySection {...props} />,
    category: <CategorySection {...props} />,
    panel: <PanelSection {...props} />,
    characteristics: <CharacteristicsSection {...props} />,
    description: <DescriptionSection {...props} />,
    arrangements: <ArrangementsSection {...props} />,
    amenities: <AmenitySection {...props} />,
    reviews: <ReviewsSection {...props} />,
    host: <HostSection {...props} />,
    know: <KnowSection {...props} />,
    other: <OtherSection {...props} />,
    nearby: <NearbySection {...props} />,
    destinations: <DestinationsSection {...props} />,
    banner: <BannerSection {...props} />,
    online: <OnlineSection {...props} />,
  };
  return <div className={extendsTo}>{types[type]}</div>;
};
