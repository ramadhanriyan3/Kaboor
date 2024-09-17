"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form, FormControl, FormItem, FormField } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  email: z.string().min(2, { message: "salah" }),
  password: z.string().min(6, "Username must be at least 6 character"),
});

const FormRegister = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    alert(values.email);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full md:px-5"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1">
              <p className=" text-primary-violet-dark">Email</p>
              <FormControl>
                <Input
                  placeholder="examplee@gmail.com"
                  {...field}
                  className="focus-visible:ring-violet-600"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <p className="text-primary-violet-dark">Pasword</p>
              <FormControl>
                <Input
                  placeholder="type you're password"
                  {...field}
                  className="focus-visible:ring-violet-600 "
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="btn-primary">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default FormRegister;
