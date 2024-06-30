import Image from "next/image";

export const SectionRecommendations = () => {
  return (
    <section className="col-[full-start/full-end] flex flex-col pt-[5rem] pb-[5rem] items-center space-y-10 gray-background-color">
      <h2 className="uppercase text-5xl font-italiana">Recomendaciones</h2>
      <p className="w-[40%] text-center">
        Dado que el evento no se llevará a cabo en ningún hotel en particular,
        tienen la libertad de elegir el que más les convenga para hospedarse
      </p>
      <div className="flex space-x-5 pb-[8rem]">
        <button className="w-[8rem] button-background-color white-font-color p-2 rounded-lg shadow-md">
          Hoteles
        </button>
        <button className="w-[8rem] button-background-color white-font-color p-2 rounded-lg shadow-md">
          Restaurantes
        </button>
        <button className="w-[8rem] button-background-color white-font-color p-2 rounded-lg shadow-md">
          Actividades
        </button>
      </div>
      <div className="flex flex-col items-center w-[70%] relative">
        <div className="grid grid-cols-4 p-5 gap-10 shadow-md rounded-2xl white-background-color absolute -top-[8rem] z-20">
          <div className="flex flex-col space-y-3">
            <p className="uppercase text-lg">Gran Hotel Querétaro</p>
            <div className="w-[6rem] h-[1px] bg-black" />
            <p>ver mapa</p>
            <div>
              <p>Código</p>
              <p>VEROYJUANSERGIO11</p>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="uppercase text-lg">Mesón de Santa Rosa</p>
            <div className="w-[6rem] h-[1px] bg-black" />
            <p>ver mapa</p>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="uppercase text-lg">Hilton Querétaro</p>
            <div className="w-[6rem] h-[1px] bg-black" />
            <p>ver mapa</p>
            <div>
              <p>Código</p>
              <p>BODA VERO & JUAN SERGIO</p>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <p className="uppercase text-lg">Gran Fiesta Americana</p>
            <div className="w-[6rem] h-[1px] bg-black" />
            <p>ver mapa</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-10 z-10">
          <Image
            src={
              "https://mimascota.blob.core.windows.net/boda2/hotel-gran.avif"
            }
            alt="Gran Hotel"
            width={1000}
            height={1000}
            className="h-[18rem] object-cover rounded-xl shadow-sm opacity-80"
          />
          <Image
            src={
              "https://mimascota.blob.core.windows.net/boda2/hotel-meson.avif"
            }
            alt="Gran Hotel"
            width={1000}
            height={1000}
            className="h-[18rem] object-cover rounded-xl shadow-sm opacity-80"
          />
          <Image
            src={
              "https://mimascota.blob.core.windows.net/boda2/hotel-hilton.avif"
            }
            alt="Gran Hotel"
            width={1000}
            height={1000}
            className="h-[18rem] object-cover rounded-xl shadow-sm opacity-80"
          />
          <Image
            src={
              "https://mimascota.blob.core.windows.net/boda2/hotel-fiesta.jpeg"
            }
            alt="Gran Hotel"
            width={1000}
            height={1000}
            className="h-[18rem] object-cover rounded-xl shadow-sm opacity-80"
          />
        </div>
      </div>
    </section>
  );
};
