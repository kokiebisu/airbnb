import React from 'react';
import { Button } from '../button/button.component';
import { AvailableCardProps } from './props';
import color from '../../../styles/color.module.scss';
import shape from '../../../styles/shape.module.scss';
import layout from '../../../styles/layout.module.scss';
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';

export const AvailableCard: React.FC<AvailableCardProps> = ({
  date = 'Tue., Nov. 10',
  from = '1:00 a.m. ',
  to = '3:00 a.m. ',
  standard = 'PST',
  price = 31,
}) => {
  return (
    <div
      className={[
        layout['inline-block'],
        space['p--24'],
        color['b--white__2'],
        shape['br--6'],
      ].join(' ')}>
      <div className={[space['m-b--6']].join(' ')}>
        <h3 className={[font['size--15']].join(' ')}>{date}</h3>
      </div>
      <div>
        <p className={[font['size--14']].join(' ')}>
          {from} - {to} {standard}
        </p>
      </div>
      <div className={[space['m-v--8']].join(' ')}>
        <u className={[font['size--14']].join(' ')}>Book for a private group</u>
      </div>
      <div className={[space['m-v--16']].join(' ')}>
        <span className={[font['size--15']].join(' ')}>
          <b>${price}</b>
        </span>
        <span className={[font['size--15']].join(' ')}> /person</span>
      </div>
      <div className={[layout['inline-block']].join(' ')}>
        <Button size='sm' type='primary' title='Choose' />
      </div>
    </div>
  );
};
