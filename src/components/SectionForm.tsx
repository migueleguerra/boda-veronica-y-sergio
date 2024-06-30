import Image from "next/image";

export const SectionForm = () => {
  return (
    <section className="col-[full-start/full-end] flex justify-center pt-[5rem] pb-[5rem] white-background-color relative overflow-hidden">
      <form className="flex flex-col space-y-5 white-background-color p-[5rem] rounded-lg shadow-md w-[40%]">
        <p className="text-center text-6xl font-elegant pb-5">
          Confirma Tu Asistencia!
        </p>
        <div className="flex flex-col space-y-2">
          <label>Nombre y Apellido</label>
          <input
            className="input-background-color rounded-lg border-solid border-[1px] shadow-sm p-2"
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label>Mensaje</label>
          <textarea className="input-background-color rounded-lg border-solid border-[1px] shadow-sm p-2 h-[8rem]" />
        </div>
        <div className="flex flex-col space-y-2">
          <label>Asistiras?</label>
          <div className="flex">
            <div className="p-2 border-solid border-[1px] w-[3rem] text-center text-white rounded-l-xl button-background-color">
              SI
            </div>
            <div className="p-2 border-solid border-[1px] w-[3rem] text-center rounded-r-xl">
              NO
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <label>Platillo Vegetariano?</label>
          <div className="flex">
            <div className="p-2 border-solid border-[1px] w-[3rem] text-center rounded-l-xl button-background-color text-white">
              SI
            </div>
            <div className="p-2 border-solid border-[1px] w-[3rem] text-center rounded-r-xl">
              NO
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button className="button-background-color white-font-color p-2 w-[8rem] rounded-lg shadow-md">
            Enviar
          </button>
        </div>
      </form>
      <Image
        src="/object4.svg"
        alt="object"
        width={250}
        height={250}
        className="absolute right-0 -bottom-10"
      />
    </section>
  );
};
