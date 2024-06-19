"use client";

import iconError from "/public/assets/contact/desktop/icon-error.svg";
import Image from "next/image";
import Button from "../shared/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ConfirmationDialog from "./ConfirmationDialog";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, "Can’t be empty"),
  email: z.string().min(1, "Can’t be empty").email("Invalid format"),
  phone: z.string(),
  message: z.string().min(1, "Can’t be empty"),
});

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
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

  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const onSubmit = handleSubmit(async () => {
    // Some api call
    await Promise.resolve(
      new Promise((resolve) => setTimeout(() => resolve(undefined), 1000)),
    );
    setConfirmationOpen(true);
    reset();
  });

  return (
    <>
      <form className="grid gap-10 sm:gap-6" onSubmit={onSubmit}>
        <fieldset className="grid gap-3">
          <div
            className="relative after:block after:h-[0.0625rem] after:bg-white after:outline-white
                                     focus-within:after:shadow-[0_0_0_0.0625rem]"
          >
            <input
              type="text"
              className="w-full border-none bg-transparent px-4 py-3 font-medium outline-none placeholder:text-white
                           placeholder:opacity-50 focus-within:placeholder:opacity-80 hover:placeholder:opacity-80"
              placeholder="Name*"
              aria-invalid={errors.name ? "true" : "false"}
              {...register("name")}
            />
            {errors.name && <ErrorMessage text={errors.name?.message ?? ""} />}
          </div>

          <div
            className="relative after:block after:h-[0.0625rem] after:bg-white after:outline-white
                                     focus-within:after:shadow-[0_0_0_0.0625rem]"
          >
            <input
              type="text"
              className="w-full border-none bg-transparent px-4 py-3 font-medium outline-none placeholder:text-white
                           placeholder:opacity-50 focus-within:placeholder:opacity-80 hover:placeholder:opacity-80"
              placeholder="Email Address*"
              aria-invalid={errors.email ? "true" : "false"}
              {...register("email")}
            />
            {errors.email && (
              <ErrorMessage text={errors.email?.message ?? ""} />
            )}
          </div>

          <div
            className="relative after:block after:h-[0.0625rem] after:bg-white after:outline-white
                                     focus-within:after:shadow-[0_0_0_0.0625rem]"
          >
            <input
              type="text"
              className="w-full border-none bg-transparent px-4 py-3 font-medium outline-none placeholder:text-white
                           placeholder:opacity-50 focus-within:placeholder:opacity-80 hover:placeholder:opacity-80"
              placeholder="Phone"
              aria-invalid={errors.phone ? "true" : "false"}
              {...register("phone")}
            />
            {errors.phone && (
              <ErrorMessage text={errors.phone?.message ?? ""} />
            )}
          </div>

          <div
            className="relative after:block after:h-[0.0625rem] after:bg-white after:outline-white
                                     focus-within:after:shadow-[0_0_0_0.0625rem]"
          >
            <textarea
              className="h-28 w-full resize-none border-none bg-transparent px-4 py-3 font-medium outline-none
                           placeholder:text-white placeholder:opacity-50 focus-within:placeholder:opacity-80 hover:placeholder:opacity-80"
              placeholder="Your message*"
              aria-invalid={errors.message ? "true" : "false"}
              {...register("message")}
            />
            {errors.message && (
              <ErrorMessage text={errors.message?.message ?? ""} />
            )}
          </div>
        </fieldset>
        <div className="place-self-center lg:place-self-end">
          <Button theme="neutral" type={isSubmitting ? "button" : "submit"}>
            {isSubmitting ? "sending..." : "submit"}
          </Button>
        </div>
      </form>
      {confirmationOpen && (
        <ConfirmationDialog closeModal={() => setConfirmationOpen(false)} />
      )}
    </>
  );
};

export default ContactForm;

const ErrorMessage = ({ text }: { text: string }) => {
  return (
    <div className="absolute right-0 top-1/2 z-20 flex -translate-y-1/2 items-center gap-2">
      <p role="alert">{text}</p>
      <Image src={iconError} alt="" />
    </div>
  );
};
