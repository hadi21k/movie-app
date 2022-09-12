import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase";

export const signin = async (values) => {
  try {
    await signInWithEmailAndPassword(auth, values.email, values.password);
  } catch (err) {
    console.error(err);
  }
};
