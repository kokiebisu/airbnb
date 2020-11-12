import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { AuthButton } from './button.auth';
import { ButtonProps } from './props';
import { GlobeButton } from './button.globe';
import { HostButton } from './button.host';
import { MenuButton } from './button.menu';
import { PrivacyButton } from './button.privacy';
import { BorderButton } from './button.border';
import { BannerButton } from './button.banner';
import { PrimaryButton } from './button.primary';
import { SearchbarButton } from './button.searchbar';
import { PaginateButton } from './button.paginate';
import { ExpandButton } from './button.expand';
import { OptionButton } from './button.option';
import { UnderlineButton } from './button.underline';
import { CloseButton } from './button.close';
import { FilterButton } from './button.filter';

interface mapProps {
  [key: string]: JSX.Element;
}

export const Button: React.FC<ButtonProps> = ({
  extendsTo,
  type,
  children,
  ...props
}) => {
  const { onPress, to } = props;
  const types: mapProps = {
    auth: <AuthButton {...props} />,
    globe: <GlobeButton {...props} />,
    host: <HostButton {...props} />,
    menu: <MenuButton {...props} />,
    privacy: <PrivacyButton {...props} />,
    border: <BorderButton {...props} />,
    banner: <BannerButton {...props} />,
    primary: <PrimaryButton {...props} />,
    searchbar: <SearchbarButton {...props} />,
    paginate: <PaginateButton {...props} />,
    expand: <ExpandButton {...props} />,
    option: <OptionButton {...props} />,
    underline: <UnderlineButton {...props} />,
    close: <CloseButton {...props} />,
    filter: <FilterButton {...props} />,
  };

  if (type) {
    return types[type];
  }

  if (to) {
    return (
      <div
        style={{ cursor: 'pointer' }}
        className={extendsTo}
        data-testid='button'>
        <Link href={to}>{children}</Link>
      </div>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      data-testid='button'
      className={extendsTo}
      onClick={onPress}>
      {children}
    </motion.button>
  );
};
