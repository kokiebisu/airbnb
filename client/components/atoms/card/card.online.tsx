import React from 'react';
import { OnlineCardProps } from './props';

import card from './card.module.scss';
import color from '../../../styles/color.module.scss';
import font from '../../../styles/font.module.scss';
import shape from '../../../styles/shape.module.scss';

export const OnlineCard: React.FC<OnlineCardProps> = ({
  small = 'https://a0.muscache.com/im/pictures/0e46f398-42f5-4897-9168-f84622aeba58.jpg',
  large = 'https://a0.muscache.com/im/pictures/78010337-07f0-4154-9528-363b97b54699.jpg',
  title = 'Learn to make soup dumplings in Shanghai',
}) => {
  return (
    <div style={{ height: '100%', width: '100%', position: 'relative' }}>
      <div
        style={{
          display: 'inline-block',
          verticalAlign: 'bottom',
          minHeight: 1,
          height: '100%',
          width: '100%',
        }}>
        <picture>
          <source
            srcSet={`${large}?im_w=480 1x, ${large}?im_w=960 2x`}
            media='(min-width: 743.1px) and (max-width: 1127px)'></source>
          <source
            srcSet={`${large}?im_w=480 1x, ${large}?im_w=1200 2x`}
            media='(min-width: 1127.1px) and (max-width: 1439px)'></source>
          <source
            srcSet={`${large}?im_w=720 1x, ${large}?im_w=1680 2x`}
            media='(min-width: 1439.1px)'></source>
          <img
            style={{ objectFit: 'cover', verticalAlign: 'bottom' }}
            className={[shape['br--20']].join(' ')}
            aria-hidden='true'
            decoding='async'
            src={`${small}?im_w=720`}></img>
        </picture>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
        className={[color['bg--gray__4'], shape['bbr--15']].join(' ')}>
        <div
          style={{
            padding: '15px 15px 0 15px',
            width: '100%',
            minHeight: 75,
            borderBottomRightRadius: 15,
            borderBottomLeftRadius: 15,
          }}>
          <h4 className={[color['c--white__0'], font['size--15']].join(' ')}>
            {title}
          </h4>
        </div>
      </div>
    </div>
  );
};