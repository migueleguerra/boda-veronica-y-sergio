import Image from "next/image";

export const SectionRules = () => {
  return (
    <section className="col-[full-start/full-end] grid lg:grid-cols-2">
      <Image
        className="object-cover h-[40rem] shadow-xl lg:flex hidden"
        src="https://mimascota.blob.core.windows.net/boda2/gallery9-web.jpg"
        alt="Karen&Edi"
        width={1000}
        height={1000}
      />
      <div className="flex flex-col items-center justify-center space-y-5 p-10">
        <h2 className="uppercase md:text-5xl text-3xl pb-5 font-italiana">
          exclusivo
        </h2>
        <p className="uppercase sm:text-xl text-lg">Adultos</p>
        <div className="h-5 w-[1px] bg-black" />
        <p className="w-[80%]">
          Esperamos que comprendan nuestra decisión de celebrar nuestra boda sin
          niños. ¡Aprovechen la oportunidad para divertirse y celebrar en grande
          con nosotros!
        </p>
        <h2 className="uppercase md:text-5xl text-3xl pt-[5rem] text-center font-italiana">
          código de vestimenta
        </h2>
        <p className="uppercase sm:text-xl text-lg">Formal</p>
        <Image src="/object1.svg" alt="object1" width={80} height={80} />
      </div>
    </section>
  );
};
