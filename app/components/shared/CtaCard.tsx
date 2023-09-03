import Button from "./Button";

const CtaCard = () => {
  return (
    <div className="relative isolate grid">
      <div className="absolute inset-x-0 inset-y-0 z-0  grid md:grid-rows-[3fr_1fr]">
        <div></div>
        <div className="bg-black"></div>
      </div>
      <div className="container z-10">
        <div
          className=" grid gap-8 rounded-2xl bg-primary-700 bg-cta-pattern bg-center bg-no-repeat 
                     px-6 py-16 text-white md:p-16 lg:grid-flow-col lg:bg-right xl:px-24 xl:py-16"
        >
          <div className="grid justify-center  text-center lg:justify-self-start lg:text-start">
            <p className=" text-3xl font-medium leading-none md:text-4xl ">
              Let’s talk about <br />
              your project
            </p>
            <p className="line mt-4 max-w-text-narrow">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <div className="place-self-center lg:justify-self-end">
            <Button theme="neutral">get in touch</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaCard;
