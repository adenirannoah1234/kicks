import  { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";



interface ExtendedUser extends User {
  token?: string;
  message?: string;
}

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    message?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    message?: string;
  }
}

const MAIN_URLS = "https://459jcr18-80.uks1.devtunnels.ms"; 

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Enter your email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<ExtendedUser | null> {
        try {
          const response = await axios.post(`${MAIN_URLS}/SignUpClassesPhp/login/`, {
            email: credentials?.email,
            password: credentials?.password,
          });

          const { data } = response;

          if (data.status === "success") {
            return {
              id: data.data?.unique_id || "default_id",
              email: credentials?.email || "default@email.com",
              name: "User",
              token: data.token,
              message: data.message,
            };
          } else {
            return null;
          }
        } catch (error: unknown) {
          console.error("Authentication error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.accessToken = (user as ExtendedUser).token;
        token.message = (user as ExtendedUser).message;
        console.log("JWT Token:", token); // Debug log
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
        session.accessToken = token.accessToken;
        session.message = token.message;
        console.log("Session Data:", session); // Debug log
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
