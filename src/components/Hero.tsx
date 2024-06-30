import Image from "next/image";
import hero from "../../public/hero2.jpg";

export const Hero = () => {
  return (
    <header className="col-[full-start/full-end] flex justify-center items-center h-screen">
      <div className="flex flex-col items-center sm:space-y-3 space-y-1 absolute md:translate-y-[12rem] -translate-y-[10rem] z-10">
        <h1 className="md:text-7xl table-caption mb-5 primary-font-color font-italiana">
          VERÓNICA Y JUAN SERGIO
        </h1>
        <div className="flex items-center space-x-[40px] font-light">
          <h3 className="text-2xl">QURÉTARO</h3>
          <div className="bg-black w-10 h-[1px]" />
          <h3 className="text-2xl">19 DE OCTUBRE 2024</h3>
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
