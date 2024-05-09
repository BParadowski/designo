import Button from "./Button";
import australia from "@/public/assets/shared/desktop/illustration-australia.svg";
import canada from "@/public/assets/shared/desktop/illustration-canada.svg";
import unitedKingdom from "@/public/assets/shared/desktop/illustration-united-kingdom.svg";
import Image from "next/image";

const LocationLinks = () => {
  return (
    <div className="grid gap-y-20 text-center lg:grid-cols-3">
      <div className="grid justify-items-center">
        <div className="relative">
          <div className="absolute inset-x-0 inset-y-0 rotate-90 bg-small-circle" />
          <Image alt="" src={canada} />
        </div>
        <p className="mt-12 text-xl font-medium uppercase tracking-huge">
          Canada
        </p>
        <div className="mt-8">
          <Button theme="primary" as="Link" href="/locations#canada">
            see location
          </Button>
        </div>
      </div>

      <div className="grid justify-items-center ">
        <div className="relative">
          <div className="absolute inset-x-0 inset-y-0 bg-small-circle" />
          <Image alt="" src={australia} />
        </div>
        <p className="mt-12 text-xl font-medium uppercase tracking-huge">
          Australia
        </p>
        <div className="mt-8">
          <Button theme="primary" as="Link" href="/locations#australia">
            see location
          </Button>
        </div>
      </div>

      <div className="grid justify-items-center">
        <div className="relative">
          <div className="absolute inset-x-0 inset-y-0 -rotate-90 bg-small-circle" />
          <Image alt="" src={unitedKingdom} />
        </div>
        <p className="mt-12 text-xl font-medium uppercase tracking-huge">
          United Kingdom
        </p>
        <div className="mt-8">
          <Button theme="primary" as="Link" href="/locations#united-kingdom">
            see location
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LocationLinks;
