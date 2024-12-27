import NextAuth from "next-auth";
import GoogleProvider from "next/providers/google";

export const {
  handlers: { get, post },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "process.env.GOOGLE_CLIENT_ID",
      clientSecret: "process.env.GOOGLE_CLIENT_SECRET",
    }),
  ],
});
