import Picture from "../components/shared/Picture";
import CtaCard from "../components/shared/CtaCard";
import LocationCard from "../components/locations/LocationCard";

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
