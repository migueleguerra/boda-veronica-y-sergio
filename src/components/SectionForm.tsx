import Image from "next/image";

export const SectionForm = () => {
  return (
    <section
      id="RSVP"
      className="col-[full-start/full-end] flex justify-center pt-[5rem] pb-[5rem] white-background-color relative overflow-hidden"
    >
      <form className="flex flex-col space-y-5 white-background-color p-[5rem] md:rounded-lg md:shadow-md xl:w-[40%] md:w-[60%] w-full">
        <p className="text-center md:text-6xl text-4xl font-elegant pb-5">
          Confirma Tu Asistencia!
        </p>
        <div className="flex flex-col space-y-2">
          <label className="md:text-md text-sm">Nombre y Apellido</label>
          <input
            className="input-background-color rounded-lg border-solid border-[1px] shadow-sm p-2"
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="md:text-md text-sm">Mensaje</label>
          <textarea className="input-background-color rounded-lg border-solid border-[1px] shadow-sm p-2 h-[8rem]" />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="md:text-md text-sm">Asistiras?</label>
          <div className="flex">
            <div className="p-2 border-solid border-[1px] w-[3rem] text-center text-white rounded-l-xl button-background-color">
              <p className="md:text-md text-sm">SI</p>
            </div>
            <div className="p-2 border-solid border-[1px] w-[3rem] text-center rounded-r-xl">
              <p className="md:text-md text-sm">NO</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="md:text-md text-sm">Platillo Vegetariano?</label>
          <div className="flex">
            <div className="p-2 border-solid border-[1px] w-[3rem] text-center rounded-l-xl button-background-color text-white">
              <p className="md:text-md text-sm">SI</p>
            </div>
            <div className="p-2 border-solid border-[1px] w-[3rem] text-center rounded-r-xl">
              <p className="md:text-md text-sm">NO</p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center pt-10">
          <button className="button-background-color white-font-color p-2 w-[8rem] rounded-lg shadow-md md:text-md text-sm">
            Enviar
          </button>
        </div>
      </form>
      <Image
        src="/object4.svg"
        alt="object"
        width={250}
        height={250}
        className="absolute right-0 md:-bottom-10 -bottom-[12rem]"
      />
    </section>
  );
};
