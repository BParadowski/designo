import friendly from "@/public/assets/home/desktop/illustration-friendly.svg";
import passionate from "@/public/assets/home/desktop/illustration-passionate.svg";
import resourceful from "@/public/assets/home/desktop/illustration-resourceful.svg";
import Card from "./QualityCard";

const DesignerQualities = () => {
  return (
    <div className="grid gap-y-20 md:gap-y-8 lg:grid-cols-3 lg:gap-x-8">
      <Card
        imgSrc={passionate}
        title="passionate"
        text="Each project starts with an in-depth brand research to ensure we only
        create products that serve a purpose. We merge art, design, and
        technology into exciting new solutions."
      />
      <Card
        imgSrc={resourceful}
        title="resourceful"
        bgRotate="counterclockwise"
        text="Everything that we do has a strategic purpose. We use an agile
          approach in all of our projects and value customer collaboration. It
          guarantees superior results that fulfill our clients’ needs."
      />
      <Card
        imgSrc={friendly}
        title="friendly"
        bgRotate="clockwise"
        text="We are a group of enthusiastic folks who know how to put people first.
          Our success depends on our customers, and we strive to give them the
          best experience a company can provide."
      />
    </div>
  );
};

export default DesignerQualities;
