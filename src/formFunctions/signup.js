import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../Firebase/firebase";

export const signup = async (values) => {
  try {
    const data = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    data.user.displayName = values.firstname + " " + values.lastname;
    const userRef = doc(db, "users", data.user.uid);
    await setDoc(userRef, {
      userId: data.user.uid,
      email: data.user.email,
      displayName: data.user.displayName,
      photoURL: data.user.photoURL,
      emailVerified: data.user.emailVerified,
    });
    localStorage.setItem("signedIn", true);
  } catch (error) {
    console.error(error);
  }
};
