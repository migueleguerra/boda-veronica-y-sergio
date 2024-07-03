import Image from "next/image";

export const SectionOurStory = () => {
  return (
    <section className="col-[full-start/full-end] flex justify-center md:py-[10rem] pt-0 pb-[8rem] relative">
      <p className="font-elegant md:text-6xl text-4xl lg:w-[60%] md:w-[80%] w-[90%] text-center z-20">
        Nos complace mucho invitarlos a que sean parte de este importante
        momento en nuestras vidas...
      </p>
      <Image
        src="/object5.svg"
        alt="object"
        width={200}
        height={200}
        className="absolute -top-1 left-0 z-10 md:flex hidden"
      />
    </section>
  );
};
