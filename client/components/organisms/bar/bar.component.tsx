import React from 'react';

/**
 * Components
 */
import { PaginateBar } from './bar.paginate';

/**
 * Props
 */
import { BarProps } from './props';

/**
 * Bundles the bar components
 * @param {string} type - Specifies the type of bar component
 */
export const Bar: React.FC<BarProps> = ({ type, ...props }) => {
  const types = {
    paginate: <PaginateBar {...props} />,
  };
  return types[type];
};
