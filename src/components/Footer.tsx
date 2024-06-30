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
        className="w-full object-top object-cover h-[50rem] opacity-90"
      />
      <Image
        src="/logo.svg"
        alt="logo"
        width={80}
        height={80}
        className="absolute top-10 left-10"
      />
      <p className="text-6xl text-center absolute bottom-10 right-10 text-white font-elegant">
        Los Esperamos!
      </p>
    </div>
  );
};
