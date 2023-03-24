import * as admin from "firebase-admin";
import firebaseAdminConfig from "@/customConfig";

if (admin.apps.length === 0) {
  // Initialize Firebase
  admin.initializeApp({
    credential: admin.credential.cert(firebaseAdminConfig),
  });
}
export const adminAuth = admin.auth;
export const adminFirestore = admin.firestore();
