import LocationLinks from "../components/shared/LocationLinks";
import leaf from "/public/assets/shared/desktop/bg-pattern-leaf.svg";
import Image from "next/image";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <main className="overflow-hidden">
      <ContactForm />
      <div className="container relative mb-28 lg:mb-40">
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
