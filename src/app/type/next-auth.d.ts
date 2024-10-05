import "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    message?: string;
    user: {
      id: string;
      email: string;
      name: string;
    }
  }
}