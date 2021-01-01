/** components */
import { HomesBanner } from "@banner/banner.homes";
import { LandingBanner } from "@banner/banner.landing";
import { OnlineHostBanner } from "@banner/banner.onlinehost";

export interface BannerProps {
  extendsTo?: string;
  variant: string;
  [property: string]: any;
}

/**
 * Bundles the banner components
 * @param {string} extendsTo - Adds custom style to the selected component
 * @param {string} variant - Specifies type of section component
 */
export const Banner: React.FC<BannerProps> = ({
  variant = "homes",
  extendsTo,
  ...props
}) => {
  const variants = {
    homes: <HomesBanner {...props} />,
    landing: <LandingBanner {...props} />,
    onlinehost: <OnlineHostBanner {...props} />,
  };
  return <div className={extendsTo}>{variants[variant]}</div>;
};
