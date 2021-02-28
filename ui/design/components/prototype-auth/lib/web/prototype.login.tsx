/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useState } from 'react';
import { useFormik } from 'formik';
import Router from 'next/router';

// import { useAuthDispatch, useAuthState } from "@context/auth";
import { Input, $Input } from '@nextbnb/atoms-input';
import { Button, $Button } from '@nextbnb/atoms-button';
import { Bullet, $Bullet } from '@nextbnb/atoms-bullet';
import { Card, $Card } from '@nextbnb/molecules-card';

import { validateLogin as validate } from '@nextbnb/design/helper/validation';
import { usePost } from '@nextbnb/design/hooks/usePost';

/**
 * Renders the login template component
 */
export const LoginTemplate: React.FC<{
  authState?: any;
  authDispatch?: any;
}> = ({ authState, authDispatch }) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('pending');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      const submit = usePost({
        url: '/api/users/signin',
        body: values,
        triggerLoading(state) {
          setLoading(state);
        },
        onSuccess() {
          Router.reload();
        },
        onFail() {
          setStatus('fail');
        },
      });
      submit();
    },
  });

  const switchAuth = () => {
    if (authState.title === 'Log in') {
      return authDispatch({ type: 'auth_signup' });
    }
    return authDispatch({ type: 'auth_login' });
  };

  const switchBack = () => {
    return authDispatch({ type: 'auth_login' });
  };

  const redirectTo = () => {
    return authDispatch({ type: 'forgot_password' });
  };

  return (
    <div css={{ padding: 24 }}>
      {status === 'fail' && (
        <div css={{ marginBottom: 16 }}>
          <Card variant={$Card.AGAIN} />
        </div>
      )}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <div>
            <Input
              variant={$Input.EMAIL}
              direction="bottom"
              handleChange={formik.handleChange}
              value={formik.values.email}
              errors={formik.errors.email !== undefined}
            />
            <Input
              variant={$Input.PASSWORD}
              direction="top"
              handleChange={formik.handleChange}
              value={formik.values.password}
              errors={formik.errors.password !== undefined}
            />
          </div>
          <div>
            {formik.errors.email !== undefined && (
              <div css={{ marginTop: 6 }}>
                <Bullet
                  variant={$Bullet.REQUIRED}
                  message={formik.errors.email}
                />
              </div>
            )}
          </div>
          <div>
            {formik.errors.password !== undefined && (
              <div css={{ marginTop: 6 }}>
                <Bullet
                  variant={$Bullet.REQUIRED}
                  message={formik.errors.password}
                />
              </div>
            )}
          </div>
          {status === 'success' && (
            <div css={{ marginTop: 16 }}>
              <Card variant={$Card.SET} />
            </div>
          )}
        </div>
        <div css={{ margin: '16px 0' }}>
          <Button
            variant={$Button.PRIMARY}
            title="Log in"
            loading={loading}
            block
          />
        </div>
        <div css={{ margin: '16px 0' }}>
          <Button
            variant={$Button.UNDERLINE}
            title="Forgot password?"
            onClick={redirectTo}
          />
        </div>
        <div css={{ margin: '16px 0' }}>
          <Button
            variant={$Button.UNDERLINE}
            title="More login options"
            onClick={switchBack}
          />
        </div>
        <div css={{ display: 'flex' }}>
          <p css={{ fontSize: 14, marginRight: 8 }}>Don't have an account?</p>
          <Button
            variant={$Button.UNDERLINE}
            title="Sign up"
            onClick={switchAuth}
          />
        </div>
      </form>
    </div>
  );
};