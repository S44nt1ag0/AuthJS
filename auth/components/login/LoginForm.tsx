"use client";

import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { loginSchema } from "@/zodSchema/login";

import { Button } from "@/components/ui/button";
import { loginUser } from "@/app/actions/LoginAction";
import { LoadingSpinner } from "../spinner/Spinner";
import toast, { Toaster } from "react-hot-toast";

type FormData = z.infer<typeof loginSchema>;

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: FormData) {
    const dataReturn = await loginUser(data);

    if (dataReturn.error) {
      toast.error("Usuario ou Senha Invalidos.");
      return;
    }

    toast.success("Logado, redirecionando...");

    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1000);
  }

  return (
    <div className="w-full flex flex-col justify-center items-center h-5/6">
      <Toaster position="bottom-right" />
      <h1 className="text-3xl font-bold">Autenticar-se</h1>
      <a className="font-medium">Realize seu Login</a>
      <form
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col justify-center items-center"
      >
        <Input
          {...register("username", { required: true })}
          id="username"
          name="username"
          required
          placeholder="Username"
          className="font-medium w-2/6 mt-4 p-6 "
        />
        <Input
          {...register("password", { required: true })}
          required
          id="password"
          type="password"
          placeholder="Senha"
          name="password"
          className="w-2/6 font-medium mt-4 p-6 "
        />
        <Button
          type="submit"
          variant="outline"
          className="w-2/6 dark text-white p-8 rounded-2xl mt-6"
        >
          {isSubmitting ? <LoadingSpinner size={200} /> : "Sign In"}
        </Button>
      </form>
    </div>
  );
}
