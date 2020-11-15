import React, { useState } from 'react';
import { useFormik } from 'formik';

/**
 * Styles
 */
import space from '../../../styles/space.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import color from '../../../styles/color.module.scss';

/**
 * Components
 */
import { Input } from '../../atoms/input/input.component';
import { Button } from '../../atoms/button/button.component';
import { Bullet } from '../../atoms/bullet/bullet.component';
/**
 * Props
 */
import { SignupTemplateProps } from '../props';

/**
 * Animations
 */
import { Animation } from '../../animation/animation.component';

/**
 * Helper
 */
import { validateSignup as validate } from '../../../helper/auth';

/**
 * Hooks
 */
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';

/**
 * Renders the signup template component
 */
export const SignupTemplate: React.FC<SignupTemplateProps> = () => {
  useLockBodyScroll();
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      birthdate: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values) => {
      // setLoading(true);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={[space['p--24']].join(' ')}>
        <div>
          <Input
            type='text'
            direction='bottom'
            placeholder='First name'
            name='firstname'
            inputType='text'
            handleChange={formik.handleChange}
            value={formik.values.firstname}
          />
          <Input
            type='text'
            direction='top'
            placeholder='Last name'
            name='lastname'
            inputType='text'
            handleChange={formik.handleChange}
            value={formik.values.lastname}
          />
          <p
            className={[
              space['m-t--8'],
              font['size--11'],
              color['c--gray__1'],
            ].join(' ')}>
            Make sure it matches the name on your government ID.
          </p>
        </div>
        <div className={[space['m-t--22']].join(' ')}>
          <div>
            <Input
              type='text'
              placeholder='Birth date'
              name='birthdate'
              inputType='date'
              handleChange={formik.handleChange}
              value={formik.values.birthdate}
            />
          </div>
          <p
            className={[
              space['m-t--8'],
              font['size--11'],
              color['c--gray__1'],
            ].join(' ')}>
            To sign up, you need to be at least 18. Your birthday won't be
            shared with other people who use Airbnb.
          </p>
        </div>
        <div className={[space['m-t--22']].join(' ')}>
          <div>
            <Input
              type='email'
              inputType='text'
              handleChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div>
            {console.log('e', formik.errors.email)}
            {formik.errors.email !== undefined ? (
              <div className={[space['m-t--6']].join(' ')}>
                <Bullet type='required' message={formik.errors.email} />
              </div>
            ) : (
              <p
                className={[
                  space['m-t--8'],
                  font['size--11'],
                  color['c--gray__1'],
                ].join(' ')}>
                We'll email you trip confirmations and receipts
              </p>
            )}
          </div>
        </div>
        <div className={[space['m-t--22']].join(' ')}>
          <div>
            <Input
              type='text'
              placeholder='Password'
              name='password'
              inputType='password'
              handleChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <p
            className={[
              space['m-t--22'],
              font['size--11'],
              color['c--gray__1'],
            ].join(' ')}>
            By selecting <b>Agree and continue</b> below, I agree to Airbnb's{' '}
            <u
              className={[font['weight--500']].join(' ')}
              style={{ color: '#1B4CC4' }}>
              Terms of Service
            </u>
            ,{' '}
            <u
              className={[font['weight--500']].join(' ')}
              style={{ color: '#1B4CC4' }}>
              Payments Terms of Service
            </u>
            ,{' '}
            <u
              className={[font['weight--500']].join(' ')}
              style={{ color: '#1B4CC4' }}>
              Privacy Policy
            </u>
            , and{' '}
            <u
              className={[font['weight--500']].join(' ')}
              style={{ color: '#1B4CC4' }}>
              Nondiscrimination Policy
            </u>
            .
          </p>
        </div>
        <div className={[space['m-t--16']].join(' ')}>
          <Button
            type='primary'
            title={
              loading ? (
                <div
                  className={[
                    layout['flex'],
                    layout['items-center'],
                    layout['justify-center'],
                  ].join(' ')}>
                  <Animation type='loading' />
                </div>
              ) : (
                <h4>Agree and continue</h4>
              )
            }
          />
        </div>
      </div>
    </form>
  );
};
