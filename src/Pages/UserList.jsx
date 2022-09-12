import { doc, onSnapshot } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ListData from "../Components/ListData";
import { auth, db } from "../Firebase/firebase";

const UserList = () => {
  const [list, setList] = useState([]);
  const user = auth.currentUser;
  useEffect(() => {
    const userRef = doc(db, "users", user.uid);
    onSnapshot(userRef, (doc) => {
      setList(doc.data().list);
    });
  }, [user]);
  console.log(list);
  return (
    <div className="pt-[80px] bg-black min-h-screen">
      <div className="container px-6 mx-auto">
        <h1 className="my-4 text-lg font-semibold text-white sm:text-2xl">
          My List
        </h1>
        <div className="grid grid-cols-1 gap-10 py-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {list?.map((movie, i) => (
            <ListData key={i} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
