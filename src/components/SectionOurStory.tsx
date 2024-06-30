import Image from "next/image";

export const SectionOurStory = () => {
  return (
    <section className="col-[full-start/full-end] flex justify-center py-[10rem] relative">
      <p className="font-elegant text-6xl w-[60%] text-center">
        Nos complace mucho invitarlos a que sean parte de este importante
        momento en nuestras vidas...
      </p>
      <Image
        src="/object5.svg"
        alt="object"
        width={200}
        height={200}
        className="absolute -top-1 left-0"
      />
    </section>
  );
};
