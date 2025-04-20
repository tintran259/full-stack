import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { InvalidEmailPasswordError } from "./utils/error";
import { AdapterUser } from "next-auth/adapters";

interface IUser {
  access_token: string;
  userDetail: {
    _id: string;
    email: string;
    name: string;
  };
}

export const { handlers, auth, signIn, signOut, unstable_update } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const res = await fetch("http://localhost:8081/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: credentials?.email,
            password: credentials?.password,
          }),
        });

        const statusCode = res.status;

        const data = await res.json();

        if (+statusCode === 400) {
          throw new InvalidEmailPasswordError("Invalid email or password");
        }
        if (+statusCode === 403) {
          throw new Error("Account is not activated");
        }
        // Bạn cần return user object phù hợp với NextAuth
        return data;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        const { userDetail } = user as IUser;
        const { access_token } = user as IUser;
        token.accessToken = access_token;
        token._id = userDetail._id;
        token.email = userDetail.email;
        token.name = userDetail.name;
      }
      return token;
    },
    session({ session, token }) {
      console.log("session:", session);

      if (token) {
        session.user = token as unknown as AdapterUser;
      }
      return session;
    },
  },
});
