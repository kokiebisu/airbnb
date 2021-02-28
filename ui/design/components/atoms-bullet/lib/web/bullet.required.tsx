/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Exclamation } from '@nextbnb/design/assets/svg/original';
import { $Bullet } from '..';

const RequiredBullet: React.FC<{
  message?: string;
}> = ({ message }) => {
  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      <div css={{ marginRight: 4 }}>
        <Exclamation width={16} stroke="#C54A32" strokeWidth={2} />
      </div>
      <div>
        <p css={{ fontSize: 12, color: 'red.400' }}>{message}</p>
      </div>
    </div>
  );
};

export const required = (props) => {
  return {
    [$Bullet.REQUIRED]: {
      component: <RequiredBullet {...props} />,
      css: {},
    },
  };
};
