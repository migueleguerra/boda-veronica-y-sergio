import Image from "next/image";
import End from "../../public/end.jpg";

export const Footer = () => {
  return (
    <div className="col-[full-start/full-end] relative">
      <Image
        src={End}
        alt="end"
        placeholder="blur"
        quality={100}
        fetchPriority="low"
        className="w-full object-top object-cover lg:h-[50rem] h-[30rem] opacity-90"
      />
      <Image
        src="/logo.svg"
        alt="logo"
        width={80}
        height={80}
        className="absolute top-10 left-10 lg:flex hidden"
      />
      <p className="lg:text-6xl text-4xl text-center absolute lg:top-[45rem] top-5 left-5 text-white font-elegant">
        Los Esperamos!
      </p>
    </div>
  );
};
