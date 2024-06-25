import Image from "next/image";
import hero from "../../public/hero1.jpg";

export const Hero = () => {
  return (
    <header className="col-[full-start/full-end] flex justify-center items-center h-screen">
      <div className="flex flex-col items-center sm:space-y-3 space-y-1 absolute md:-translate-y-[8rem] -translate-y-[10rem] z-10">
        <h1 className="md:text-4xl table-caption text-2xl mb-5 font-[800]">
          VERÓNICA Y JUAN SERGIO
        </h1>
        <h2 className="text-xl font-[800]">Comming Soon...</h2>
        {/* <h3 className="text-xl font-[500]">04 Mayo 2024</h3>
        <h3 className="text-xl font-[500]">Oaxaca, Oaxaca</h3> */}
      </div>
      {/* <Image
        className="object-cover"
        src={hero}
        alt="boda Karen y Eduardo"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        fetchPriority="high"
      /> */}
    </header>
  );
};
