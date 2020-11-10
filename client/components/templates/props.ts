export interface NearbyTemplateProps {
  city?: string;
  filterCount?: number;
  guests?: number;
  average?: number;
  filters?: any;
}

export interface CategoryTemplateProps {
  stayType?: string | string[];
}

export interface TemplateProps {
  type?: string;
  place?: string;
  stayType?: string | string[];
  characteristics?: string;
  [x: string]: any;
}