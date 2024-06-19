import Button from "./Button";
import australia from "@/public/assets/shared/desktop/illustration-australia.svg";
import canada from "@/public/assets/shared/desktop/illustration-canada.svg";
import unitedKingdom from "@/public/assets/shared/desktop/illustration-united-kingdom.svg";
import Image from "next/image";
import CircleBg from "./CircleBg";

const LocationLinks = () => {
  return (
    <div className="grid gap-y-20 text-center lg:grid-cols-3">
      <div className="grid justify-items-center">
        <CircleBg rotate="clockwise">
          <Image alt="" src={canada} />
        </CircleBg>
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
        <CircleBg>
          <Image alt="" src={australia} />
        </CircleBg>
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
        <CircleBg rotate="counterclockwise">
          <Image alt="" src={unitedKingdom} />
        </CircleBg>
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
