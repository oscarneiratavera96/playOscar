import { FC } from 'react';
import LoginComponent from 'components/LoginComponent/LoginComponent';
import useStyles from './LoginStyles';

const Login: FC = () => {
  /**
   * Variable que maneja el uso de estilos.
   */
  const styles = useStyles();

  return (
    <div className={styles.loginPage}>
      <LoginComponent />;
    </div>
  );
};

export default Login;
