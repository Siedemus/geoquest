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
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { IAuthContext } from "../resources/types";
import { toast } from "sonner";

const AuthContext = createContext<null | IAuthContext>(null);

export const useAuthContext = () => useContext(AuthContext);

const googleProvider = new GoogleAuthProvider();

export const LogIn = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    toast.success("Successfully logged in.");
  } catch (e: any) {
    toast.error("Something went wrong: ", e.message);
  }
};

export const LogOut = async () => {
  try {
    await signOut(auth);
    toast.success("Successfully logged out.");
  } catch (e: any) {
    toast.error("Something went wrong: ", e.message);
  }
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
