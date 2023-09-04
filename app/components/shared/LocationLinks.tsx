import Button from "./Button";
import australia from "/public/assets/shared/desktop/illustration-australia.svg";
import canada from "/public/assets/shared/desktop/illustration-canada.svg";
import unitedKingdom from "/public/assets/shared/desktop/illustration-united-kingdom.svg";
import Link from "next/link";
import Image from "next/image";

const LocationLinks = () => {
  return (
    <div className="container grid gap-y-20 text-center lg:grid-cols-3">
      <div className="grid justify-items-center ">
        <div className="relative">
          <div className="absolute inset-x-0 inset-y-0 bg-small-circle" />
          <Image alt="" src={australia} />
        </div>
        <p className="mt-12 text-xl font-medium uppercase tracking-huge">
          Australia
        </p>
        <Link href="/locations" className="mt-8">
          <Button theme="primary">see location</Button>
        </Link>
      </div>
      <div className="grid justify-items-center">
        <div className="relative">
          <div className="absolute inset-x-0 inset-y-0 rotate-90 bg-small-circle" />
          <Image alt="" src={canada} />
        </div>
        <p className="mt-12 text-xl font-medium uppercase tracking-huge">
          Canada
        </p>
        <Link href="/locations" className="mt-8">
          <Button theme="primary">see location</Button>
        </Link>
      </div>
      <div className="grid justify-items-center">
        <div className="relative">
          <div className="absolute inset-x-0 inset-y-0 -rotate-90 bg-small-circle" />
          <Image alt="" src={unitedKingdom} />
        </div>
        <p className="mt-12 text-xl font-medium uppercase tracking-huge">
          United Kingdom
        </p>
        <Link href="/locations" className="mt-8">
          <Button theme="primary">see location</Button>
        </Link>
      </div>
    </div>
  );
};

export default LocationLinks;
