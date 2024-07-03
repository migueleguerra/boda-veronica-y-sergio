import Image from "next/image";
import hero from "../../public/hero2.jpg";

export const Hero = () => {
  return (
    <header className="col-[full-start/full-end] flex justify-center items-center h-screen">
      <div className="flex flex-col items-center sm:space-y-3 space-y-1 absolute md:translate-y-[12rem] translate-y-[5rem] z-10">
        <h1 className="lg:text-7xl md:text-5xl text-3xl table-caption mb-5 primary-font-color font-italiana">
          VERÓNICA Y JUAN SERGIO
        </h1>
        <div className="flex md:flex-row flex-col items-center space-x-5 font-light text-[#252525B2]">
          <h3 className="md:text-2xl text-lg">QUERÉTARO, QUERÉTARO</h3>
          <div className="bg-black md:w-10 w-5 h-[1px] md:flex hidden" />
          <h3 className="md:text-2xl text-lg">19 DE OCTUBRE 2024</h3>
        </div>
      </div>
      <Image
        className="object-cover"
        src={hero}
        alt="boda Veronica y Juan Sergio"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        fetchPriority="high"
      />
    </header>
  );
};
