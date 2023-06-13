import React, {memo, useState, useCallback, FocusEvent} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Layout from 'src/components/Layout';
import {IS_DEVELOPMENT} from 'src/constants';
import {authThunks} from 'src/store';

import styles from './Login.module.scss';

function Login() {
  const [email, setEmail] = useState(IS_DEVELOPMENT ? 'admin@admin.com' : '');
  const [pass, setPass] = useState(IS_DEVELOPMENT ? '111111' : '');

  const handleEmailChange = useCallback((event: FocusEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setEmail(value);
  }, []);

  const handlePassChange = useCallback((event: FocusEvent<HTMLInputElement>) => {
    const {value} = event.target;
    setPass(value);
  }, []);

  const handleSubmit = useCallback(() => {
    authThunks.login(email, pass);
  }, [email, pass]);

  return (
    <Layout name="Login" className={styles.root}>
      <TextField
        label="Email"
        variant="outlined"
        placeholder="Enter your email"
        fullWidth
        onChange={handleEmailChange}
        type="email"
        value={email}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        onChange={handlePassChange}
        type="password"
        value={pass}
      />
      <Button variant="outlined" onClick={handleSubmit}>
        Login
      </Button>
    </Layout>
  );
}
export default memo(Login);
