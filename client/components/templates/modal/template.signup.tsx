import { useAuthDispatch, useAuthState } from '../../../context/auth';
import { useFormik } from 'formik';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import React from 'react';

import space from '../../../styles/space.module.scss';
import shape from '../../../styles/shape.module.scss';
import font from '../../../styles/font.module.scss';
import layout from '../../../styles/layout.module.scss';
import color from '../../../styles/color.module.scss';
import modalStyles from '../../organisms/modal/modal.module.scss';
import { Input } from '../../../components/atoms/input/input.component';
import { Button } from '../../../components/atoms/button/button.component';
import { SignupTemplateProps } from '../props';

export const SignupTemplate: React.FC<SignupTemplateProps> = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      birthdate: '',
      email: '',
      password: '',
    },
    onSubmit: (values) => {
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
              type='text'
              placeholder='Email'
              name='email'
              inputType='text'
              handleChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <p
            className={[
              space['m-t--8'],
              font['size--11'],
              color['c--gray__1'],
            ].join(' ')}>
            We'll email you trip confirmations and receipts
          </p>
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
            <u>Terms of Service</u>, <u>Payments Terms of Service</u>,{' '}
            <u>Privacy Policy</u>, and <u>Nondiscrimination Policy</u>.
          </p>
        </div>
        <div className={[space['m-t--16']].join(' ')}>
          <Button type='primary' title='Agree and continue' />
        </div>
      </div>
    </form>
  );
};