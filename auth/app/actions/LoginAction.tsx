"use server";

import { loginSchema } from "@/zodSchema/login";
import { signIn } from "@/auth";

export async function loginUser(formData: unknown) {
  try {
    const parsed = loginSchema.safeParse(formData);

    if (!parsed.success) {
      return { success: false, error: "Dados inválidos." };
    }

    const { username, password } = parsed.data;

    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    return { success: true };
  } catch (error) {
    return { error: true };
  }
}
