import { ReactNode } from "react";
import Picture from "../components/shared/Picture";
import CtaCard from "../components/shared/CtaCard";

interface LocationCardProps {
  country: string;
  officeName: string;
  addressLineOne: string;
  addressLineTwo: string;
  phone: string;
  email: string;
  map: ReactNode;
}

export default function Locations() {
  return (
    <main>
      <div className="mb-32 grid gap-8 sm:gap-24 md:gap-32 lg:gap-8 xl:mb-40">
        <LocationCard
          country="Canada"
          officeName="Designo Central Office"
          addressLineOne="3886 Wellington Street"
          addressLineTwo="Toronto, Ontario M9C 3J5"
          phone="+1 253-863-8967"
          email="contact@designo.co"
          map={
            <Picture
              base="/assets/locations/desktop/image-map-canada.png"
              sm="/assets/locations/tablet/image-map-canada.png"
              lg="/assets/locations/desktop/image-map-canada.png"
              className="overflow-hidden sm:rounded-2xl"
            />
          }
        />

        <LocationCard
          country="Australia"
          officeName="Designo AU Office"
          addressLineOne="19 Balonne Street"
          addressLineTwo="New South Wales 2443"
          phone="(02) 6720 9092"
          email="contact@designo.au"
          map={
            <Picture
              base="/assets/locations/desktop/image-map-australia.png"
              sm="/assets/locations/tablet/image-map-australia.png"
              lg="/assets/locations/desktop/image-map-australia.png"
              className="overflow-hidden sm:rounded-2xl"
            />
          }
        />

        <LocationCard
          country="United Kingdom"
          officeName="Designo UK Office"
          addressLineOne="13  Colorado Way"
          addressLineTwo="Rhyd-y-fro SA8 9GA"
          phone="078 3115 1400"
          email="contact@designo.uk"
          map={
            <Picture
              base="/assets/locations/desktop/image-map-united-kingdom.png"
              sm="/assets/locations/tablet/image-map-united-kingdom.png"
              lg="/assets/locations/desktop/image-map-united-kingdom.png"
              className="overflow-hidden sm:rounded-2xl"
            />
          }
        />
      </div>

      <CtaCard />
    </main>
  );
}

const LocationCard = ({
  country,
  officeName,
  addressLineOne,
  addressLineTwo,
  phone,
  email,
  map,
}: LocationCardProps) => {
  return (
    <section
      className="group sm:container"
      id={country.toLowerCase().replace(/\s/gi, "-")}
    >
      <div
        className="grid bg-primary-100 sm:gap-8 sm:bg-transparent lg:grid-cols-[2fr_1fr] lg:group-even:grid-cols-[1fr_2fr]
      xl:grid-cols-[1fr_auto] xl:group-even:grid-cols-[auto_1fr]"
      >
        {map}
        <div
          className="container grid gap-6 bg-three-circles bg-no-repeat px-16 py-20 text-center sm:rounded-2xl
                       sm:bg-primary-100 sm:bg-left-bottom sm:text-start md:px-20 md:py-24 lg:content-center lg:px-16
                       lg:py-0 lg:group-odd:col-start-1 lg:group-odd:row-start-1 xl:px-24 "
        >
          <h1 className="text-4xl font-medium text-primary-700 xl:text-5xl">
            {country}
          </h1>
          <div className="grid gap-6 sm:grid-flow-col sm:grid-cols-2 sm:place-content-between">
            <div>
              <h2 className="font-bold">{officeName}</h2>
              <p>
                {addressLineOne}
                <br />
                {addressLineTwo}
              </p>
            </div>
            <div>
              <h2 className="font-bold">Contact</h2>
              <p>
                P: {phone}
                <br />
                M: {email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
