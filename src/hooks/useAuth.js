import { useLocalStorageState } from './useLocalStorageState';
import * as Auth from '../service/auth';

// esto podria ser un servicio de autentificacion como Firebase, AWS Cognito, o un endpoint de autentificacion de su propio backend

export const useAuth = () => {
  const [users, setUsers] = useLocalStorageState("users", []);
  return {
    signin: (email, password) => Auth.doSignin(users, email, password),
    signup: (user) => Auth.doSignup(users, setUsers, user),
  };
};