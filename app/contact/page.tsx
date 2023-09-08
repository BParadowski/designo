import LocationLinks from "../components/shared/LocationLinks";
import leaf from "/public/assets/shared/desktop/bg-pattern-leaf.svg";
import Image from "next/image";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <main className="overflow-hidden">
      {/* Contact form card */}
      <div className="mb-28 sm:container xl:mb-40">
        <div
          className="gap-12 bg-primary-700 bg-contact-pattern-mobile bg-top bg-no-repeat py-16 text-white
                        sm:gap-8 sm:rounded-2xl sm:bg-contact-pattern-tablet sm:bg-[position:left_-8rem_top_-6rem] lg:bg-left-bottom lg:py-14"
        >
          <div className="container grid gap-10 md:px-14 lg:grid-flow-col lg:grid-cols-[4fr_3fr] lg:px-20 xl:px-24">
            {/* Heading and description */}
            <div className="grid gap-6 text-center sm:text-start lg:content-center lg:gap-8">
              <h1 className="text-3xl font-medium md:text-5xl">Contact Us</h1>
              <p className="lg:max-w-text-narrow">
                Ready to take it to the next level? Let’s talk about your
                project or idea and find out how we can help your business grow.
                If you are looking for unique digital experiences that’s
                relatable to your users, drop us a line.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>

      <div className="container relative mb-28 xl:mb-40">
        <LocationLinks />
        <Image
          alt=""
          src={leaf}
          className="invisible absolute left-1/3 top-24 -z-50 lg:visible lg:max-w-4xl  xl:max-w-none"
        />
      </div>
    </main>
  );
}
