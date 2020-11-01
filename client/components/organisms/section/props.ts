export interface SectionBasicProps {
  title?: string;
}

export type StaySectionProps = SectionBasicProps & {
  description?: string;
  pagination?: boolean;
  showAll?: any;
  type?: string;
  carouselType?: string;
  save?: boolean;
  items?: { card: any; to: string }[];
  isDescription?: boolean;
  fetchUrl?: string;
};

export type PanelSectionProps = SectionBasicProps & {
  ratings?: number;
  numberOfReviews?: number;
  superhost?: boolean;
  location?: string;
  province?: string;
  country?: string;
};

export type CharacteristicsSectionProps = SectionBasicProps & {
  stayType?: string;
  host?: string;
  guests?: number;
  bedrooms?: number;
  beds?: number;
  bathrooms?: number;
  imgUrl?: string;
};

export type CategorySectionProps = SectionBasicProps & {
  items?: any;
};

export type SectionProps = (
  | StaySectionProps
  | PanelSectionProps
  | CharacteristicsSectionProps
  | CategorySectionProps
) & { extendsTo: string; type: string };