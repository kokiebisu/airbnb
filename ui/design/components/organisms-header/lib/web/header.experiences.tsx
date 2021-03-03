/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Router from 'next/router';
import { Button, $BUTTON } from '@nextbnb/atoms-button';
import { $HEADER } from '../constant/appearance';

/**
 * Renders the experiences header
 */
const ExperiencesHeader: React.FC<{}> = () => {
  return (
    <header css={{ height: 80, padding: '0 0' }}>
      <div
        css={{
          padding: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '100%',
        }}
      >
        <div>
          <Button
            variant={$BUTTON.logo}
            fill="black"
            noName
            extendsTo={{ display: 'inline-block' }}
            onClick={() => {
              Router.push('/');
            }}
          />
        </div>
        <div css={{ display: 'flex' }}>
          <div css={{ margin: '0 8px' }}>
            <h3 sx={{ color: 'grey.700', fontSize: 15 }}>English (CA)</h3>
          </div>
          <div css={{ margin: '0 8px' }}>
            <h3 sx={{ color: 'grey.700', fontSize: 15 }}>$ CAD</h3>
          </div>
          <div css={{ margin: '0 8px' }}>
            <h3 sx={{ color: 'grey.700', fontSize: 15 }}>Become a host</h3>
          </div>
          <div css={{ margin: '0 8px' }}>
            <h3 sx={{ color: 'grey.700', fontSize: 15 }}>Help</h3>
          </div>
          <div css={{ margin: '0 8px' }}>
            <h3 sx={{ color: 'grey.700', fontSize: 15 }}>Sign up</h3>
          </div>
          <div css={{ margin: '0 8px' }}>
            <h3 sx={{ color: 'grey.700', fontSize: 15 }}>Log in</h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export const experiences = (props) => {
  return {
    [$HEADER.experiences]: {
      component: <ExperiencesHeader {...props} />,
      css: {},
    },
  };
};
