import React, {
  FC,
  PropsWithChildren,
  useContext,
  createContext,
  useState,
} from "react";
import { onAuthStateChanged, getAuth, User } from "firebase/auth";
import firebase_app from "../firebase/config";
const auth = getAuth(firebase_app);
type AuthContextType = { user?: User | any; loading?: boolean };
export const AuthContext = createContext<AuthContextType>({});
export const useAuthContext = () => useContext(AuthContext);
export const AuthContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  return (
    <AuthContext.Provider value={{ user, loading }}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
