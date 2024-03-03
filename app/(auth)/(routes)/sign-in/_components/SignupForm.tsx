"use client";
import React, { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import signupFormSchema from "@/app/_schema/signupForm.schema";

interface SignupFormProps {}
const SignupForm: FC<SignupFormProps> = (): JSX.Element => {
  const formController = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
    },
  });
  const onSubmitHandler = (values: z.infer<typeof signupFormSchema>) => {
    console.log("values: ", values);
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold lg:mt-2 text-[#E1A149]">
        Create Account
      </h1>
      <div className="my-2 ">
        <Form {...formController}>
          <form
            onSubmit={formController.handleSubmit(onSubmitHandler)}
            className=" lg:mx-8 flex flex-col"
          >
            <div className="space-y-6">
              <FormField
                control={formController.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl className="">
                      <Input
                        {...field}
                        className="!shadow-none text-lg placeholder:text-sm  "
                        placeholder="Enter your username"
                      />
                    </FormControl>
                    <FormMessage className="text-rose-500 my-0" />
                  </FormItem>
                )}
              />
              <FormField
                control={formController.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl className="">
                      <Input
                        {...field}
                        className="!shadow-none text-lg placeholder:text-sm  "
                        placeholder="Enter your email"
                      />
                    </FormControl>
                    <FormMessage className="text-rose-500 my-0" />
                  </FormItem>
                )}
              />
              <FormField
                control={formController.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl className="">
                      <Input
                        {...field}
                        type="password"
                        className="!shadow-none text-lg placeholder:text-sm  "
                        placeholder="Enter your password"
                      />
                    </FormControl>
                    <FormMessage className="text-rose-500 my-0" />
                  </FormItem>
                )}
              />
              <FormField
                control={formController.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm password</FormLabel>
                    <FormControl className="">
                      <Input
                        {...field}
                        className="!shadow-none text-lg placeholder:text-sm  "
                        type="password"
                        placeholder="Confirm password"
                      />
                    </FormControl>
                    <FormMessage className="text-rose-500 my-0" />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full mt-10 ">
              <Button
                className="bg-[#E1A149] w-full text-white text-lg"
                variant={"default"}
              >
                Sign up
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignupForm;
