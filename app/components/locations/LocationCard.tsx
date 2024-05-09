import { ReactNode } from "react";

interface LocationCardProps {
  country: string;
  officeName: string;
  addressLineOne: string;
  addressLineTwo: string;
  phone: string;
  email: string;
  map: ReactNode;
}

export default function LocationCard({
  country,
  officeName,
  addressLineOne,
  addressLineTwo,
  phone,
  email,
  map,
}: LocationCardProps) {
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
}
