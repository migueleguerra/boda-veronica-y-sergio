import Image from "next/image";

export const SectionRules = () => {
  return (
    <section className="col-[full-start/full-end] grid grid-cols-2">
      <Image
        className="object-cover h-[40rem] shadow-xl"
        src="https://mimascota.blob.core.windows.net/boda2/gallery9-web.jpg"
        alt="Karen&Edi"
        width={1000}
        height={1000}
      />
      <div className="flex flex-col items-center justify-center space-y-5 p-10">
        <h2 className="uppercase text-5xl pb-5 font-italiana">exclusivo</h2>
        <p className="uppercase text-xl">Adultos</p>
        <div className="h-5 w-[1px] bg-black" />
        <p className="w-[80%]">
          Esperamos que comprendan nuestra decisión de celebrar nuestra boda sin
          niños. ¡Aprovechen la oportunidad para divertirse y celebrar en grande
          con nosotros!
        </p>
        <h2 className="uppercase text-5xl font-italiana">
          código de vestimenta
        </h2>
        <p className="uppercase text-xl">Formal</p>
        <Image src="/object1.svg" alt="object1" width={80} height={80} />
      </div>
    </section>
  );
};
