// src/types/auth.d.ts
import { User } from "firebase/auth";

export interface UserProfile {
  id?: string;
  name: string;
  email: string;
  studentId: string;
  faculty: string;
  role?: string;
  createdAt?: Date;
}

export interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signup: (
    email: string,
    password: string,
    userData: Omit<UserProfile, "id" | "createdAt">
  ) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
}

export interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signup: (
    email: string,
    password: string,
    userData: Omit<UserProfile, "id" | "createdAt">
  ) => Promise<void>;
  login: (
    email: string,
    password: string,
    studentId: string
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<void>;
}
