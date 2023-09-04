"use client";

import iconError from "/public/assets/contact/desktop/icon-error.svg";
import Image from "next/image";
import Button from "../shared/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().nonempty("Can’t be empty"),
  email: z.string().nonempty("Can’t be empty").email("Invalid format"),
  phone: z.string(),
  message: z.string().nonempty("Can’t be empty"),
});

export default function ContactForm() {
  const {
    register,
    getFieldState,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });
  const nameInvalid = Boolean(getFieldState("name").error);
  const emailInvalid = Boolean(getFieldState("email").error);
  const phoneInvalid = Boolean(getFieldState("phone").error);
  const messageInvalid = Boolean(getFieldState("message").error);

  return (
    <div className=" sm:container">
      <div
        className="bg-contact-pattern-mobile sm:bg-contact-pattern-tablet gap-12 bg-primary-700 bg-top bg-no-repeat py-16
                        text-white sm:gap-8 sm:rounded-2xl sm:bg-[position:left_-8rem_top_-6rem] lg:bg-left-bottom lg:py-14"
      >
        <div className="container md:px-14 lg:px-20 xl:px-24">
          <div className="grid gap-10 lg:grid-flow-col lg:grid-cols-[4fr_3fr]">
            <div className="grid gap-6 text-center sm:text-start lg:content-center lg:gap-8">
              <h1 className="text-3xl font-medium md:text-5xl">Contact Us</h1>
              <p className="lg:max-w-text-narrow">
                Ready to take it to the next level? Let’s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that’s
                relatable to your users, drop us a line.
              </p>
            </div>
            <form
              className="grid gap-6"
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <fieldset className="grid gap-3">
                <div
                  className="relative after:block after:h-[0.0625rem] after:bg-white after:outline-white
                                     focus-within:after:shadow-[0_0_0_0.0625rem]"
                >
                  <input
                    type="text"
                    className="bg-transparent w-full border-none px-4 py-3 font-medium outline-none placeholder:text-white
                           placeholder:opacity-50 focus-within:placeholder:opacity-80 hover:placeholder:opacity-80"
                    placeholder="Name"
                    {...register("name")}
                  />
                  {nameInvalid && (
                    <ErrorMessage text={errors.name?.message ?? ""} />
                  )}
                </div>

                <div
                  className="relative after:block after:h-[0.0625rem] after:bg-white after:outline-white
                                     focus-within:after:shadow-[0_0_0_0.0625rem]"
                >
                  <input
                    type="text"
                    className="bg-transparent w-full border-none px-4 py-3 font-medium outline-none placeholder:text-white
                           placeholder:opacity-50 focus-within:placeholder:opacity-80 hover:placeholder:opacity-80"
                    placeholder="Email Address"
                    {...register("email")}
                  />
                  {emailInvalid && (
                    <ErrorMessage text={errors.email?.message ?? ""} />
                  )}
                </div>

                <div
                  className="relative after:block after:h-[0.0625rem] after:bg-white after:outline-white
                                     focus-within:after:shadow-[0_0_0_0.0625rem]"
                >
                  <input
                    type="text"
                    className="bg-transparent w-full border-none px-4 py-3 font-medium outline-none placeholder:text-white
                           placeholder:opacity-50 focus-within:placeholder:opacity-80 hover:placeholder:opacity-80"
                    placeholder="Phone"
                    {...register("phone")}
                  />
                  {phoneInvalid && (
                    <ErrorMessage text={errors.phone?.message ?? ""} />
                  )}
                </div>

                <div
                  className="relative after:block after:h-[0.0625rem] after:bg-white after:outline-white
                                     focus-within:after:shadow-[0_0_0_0.0625rem]"
                >
                  <textarea
                    className="bg-transparent h-28 w-full resize-none border-none px-4 py-3 font-medium outline-none
                           placeholder:text-white placeholder:opacity-50 focus-within:placeholder:opacity-80 hover:placeholder:opacity-80"
                    placeholder="Your message"
                    {...register("message")}
                  />
                  {messageInvalid && (
                    <ErrorMessage text={errors.message?.message ?? ""} />
                  )}
                </div>
              </fieldset>
              <div className="place-self-center lg:place-self-end">
                <Button theme="neutral">submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ErrorMessage({ text }: { text: string }) {
  return (
    <div className="absolute right-0 top-1/2 z-20 flex -translate-y-1/2 items-center gap-2">
      <p>{text}</p>
      <Image src={iconError} alt="" />
    </div>
  );
}
