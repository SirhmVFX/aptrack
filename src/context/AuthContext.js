// context/AuthContext.js
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        // Fetch user profile from Firestore
        const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
        if (userDoc.exists()) {
          setUserProfile(userDoc.data());
        }
      } else {
        setUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signup = async (email, password, name, studentId, faculty) => {
    try {
      // Create auth user
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save additional user data to Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        studentId,
        faculty,
        createdAt: new Date().toISOString(),
      });

      toast.success("Account created successfully!");
      return { success: true };
    } catch (error) {
      let errorMessage = "Failed to create account";

      if (error.code === "auth/email-already-in-use") {
        errorMessage = "Email already in use";
      } else if (error.code === "auth/weak-password") {
        errorMessage = "Password should be at least 6 characters";
      }

      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const login = async (email, password, studentId) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Verify student ID matches
      const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
      if (userDoc.exists() && userDoc.data().studentId === studentId) {
        toast.success("Logged in successfully!");
        return { success: true };
      } else {
        await signOut(auth);
        toast.error("Invalid student ID");
        return { success: false, error: "Invalid student ID" };
      }
    } catch (error) {
      let errorMessage = "Failed to login";

      if (
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        errorMessage = "Invalid email or password";
      }

      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Failed to logout");
      console.log(error);
    }
  };

  const value = {
    user,
    userProfile,
    signup,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
