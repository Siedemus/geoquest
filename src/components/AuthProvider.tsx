import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../firebase/config";
import {
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

const AuthContext = createContext<null | {
  user: User | null;
  pending: boolean;
}>(null);
export const useAuthContext = () => useContext(AuthContext);

const googleProvider = new GoogleAuthProvider();

export const LogIn = () => {
  signInWithRedirect(auth, googleProvider);
};

export const LogOut = () => {
  signOut(auth);
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<null | User>(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setPending(false);
        return;
      }
      setUser(null);
      setPending(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, pending }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
