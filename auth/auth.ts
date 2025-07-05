import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        if (!credentials?.username || !credentials?.password) {
          throw new Error("Credenciais ausentes.");
        }

        try {
          const res = await fetch("https://pokedextracker.com/api/sessions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
          });

          const data = await res.json();

          if (!res.ok || !data.token) {
            throw new Error(data.message || "Login inválido.");
          }

          return {
            id: credentials.username?.toString(),
            token: data.token,
          };
        } catch (error) {
          console.error("Erro no login:", error);
          throw new Error("Falha ao autenticar.");
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user && (user as any).token) {
        token.token = (user as any).token;
        token.id = (user as any).id || "placeholder-id";
      }
      return token;
    },

    async session({ session, token }) {
      (session.user as any).id = token.id;
      (session.user as any).token = token.token;
      return session;
    },
  },

  session: { strategy: "jwt", maxAge: 24 * 60 * 60 },
});
