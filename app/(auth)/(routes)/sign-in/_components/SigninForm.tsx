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
import SigninFormSchema from "@/app/_schema/signinForm.schema";

interface SigninFormProps {}
const SigninForm: FC<SigninFormProps> = (): JSX.Element => {
  const formController = useForm<z.infer<typeof SigninFormSchema>>({
    resolver: zodResolver(SigninFormSchema),
    defaultValues: {
      password: "",
      email: "",
    },
  });
  const onSubmitHandler = (values: z.infer<typeof SigninFormSchema>) => {
    console.log("values: ", values);
  };

  return (
    <div>
      <h1 className="text-center text-3xl font-bold lg:mt-2 text-[#E1A149]">
        Login to your Account
      </h1>
      <div className="mt-6 mb-2 ">
        <Form {...formController}>
          <form
            onSubmit={formController.handleSubmit(onSubmitHandler)}
            className=" lg:mx-8 flex flex-col"
          >
            <div className="space-y-6  lg:my-16">
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
            </div>
            <div className="w-full mt-10 ">
              <Button
                className="bg-[#E1A149] w-full text-white text-lg"
                variant={"default"}
              >
                Sign in
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SigninForm;
