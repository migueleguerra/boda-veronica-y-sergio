import Image from "next/image";
import Link from "next/link";

export const SectionGift = () => {
  return (
    <section
      id="regalos"
      className="col-[full-start/full-end] flex secondary-background-color flex-col space-y-10 items-center py-[5rem] relative overflow-hidden"
    >
      <h2 className="uppercase md:text-5xl text-3xl font-italiana">
        Mesa de Regalos
      </h2>
      <p className="md:w-[50%] w-[80%] md:text-center font-abyssinica">
        ¡Su presencia en nuestra boda es el mejor regalo! Si desean hacernos
        otro obsequio ponemos a su disposición las siguientes opciones.
      </p>
      <div className="flex md:flex-row flex-col justify-center md:space-x-5 md:space-y-0 space-y-10 md:w-full w-[60%]">
        <div className="flex flex-col space-y-5 tertiary-background-color p-5 rounded-lg text-white md:w-[25%]">
          <Image
            src="https://images.unsplash.com/photo-1494319827402-c4b839aed26b?q=80&w=3269&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Liverpool"
            className="rounded-lg shadow-md"
            width={1000}
            height={1000}
          />
          <div>
            <p>Liverpool</p>
            <p>Numero de evento:</p>
            <p>51446803</p>
          </div>
          <Link
            href="https://maps.app.goo.gl/rWqDXZvD6ATtrEoS6"
            target="_blank"
            className="underline primary-font-color"
          >
            ver mesa
          </Link>
        </div>
        <div className="flex flex-col space-y-5  justify-between tertiary-background-color p-5 rounded-lg text-white md:w-[25%]">
          <Image
            src="https://images.unsplash.com/photo-1521478706270-f2e33c203d95?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="banco"
            className="rounded-lg shadow-md"
            width={1000}
            height={1000}
          />
          <div>
            <p>Juan Sergio Gonzalez</p>
            <p>Banco: Banregio</p>
          </div>
          <p>Clabe: 0585 8000 0149 6276 41</p>
        </div>
      </div>
      <Image
        src="/object2.svg"
        alt="object"
        width={250}
        height={250}
        className="absolute md:-top-[12rem] -top-[14rem] right-0"
      />
      <Image
        src="/object3.svg"
        alt="object"
        width={250}
        height={250}
        className="absolute -bottom-[9rem] left-0 md:flex hidden"
      />
    </section>
  );
};
