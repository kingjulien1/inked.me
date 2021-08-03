import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import firebase from "lib/firebase";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Instagram({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET,
    }),
  ],
  adapter: FirebaseAdapter(firebase.firestore()),
});
