import Image from "next/image";

export const SectionItinerary = () => {
  return (
    <section className="col-[full-start/full-end] grid grid-cols-2">
      <div className="flex flex-col items-center justify-center space-y-10">
        <h2 className="uppercase text-5xl font-italiana">Itinerario</h2>
        <div className="flex justify-center space-x-10 w-full">
          <div className="flex flex-col justify-between items-end py-5 text-3xl">
            <p className="font-elegant text-4xl">Rompehielos</p>
            <p className="font-elegant text-4xl">Ceremonia Religiosa</p>
            <p className="font-elegant text-4xl">Coctel de Recepción</p>
          </div>
          <div className="f-full w-[1px] bg-black" />
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-2">
              <p className="uppercase text-xl">Callejoneada - Plaza de armas</p>
              <p>Viernes 18 de Octubre 6:30 PM</p>
              <button className="p-2 button-background-color text-white rounded-lg shadow-md w-[6rem]">
                Ver mapa
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="uppercase text-xl">
                TEMPLO DE SAN FRANCISCO DE ASIS
              </p>
              <p>Sábado 19 de Octubre 4:00 PM</p>
              <button className="p-2 button-background-color text-white rounded-lg shadow-md w-[6rem]">
                Ver mapa
              </button>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="uppercase text-xl">HACIENDA CASA EL MOLINO</p>
              <p>Sábado 19 de Octubre 6:00 PM</p>
              <button className="p-2 button-background-color text-white rounded-lg shadow-md w-[6rem]">
                Ver mapa
              </button>
            </div>
          </div>
        </div>
        <p className="w-[80%]">
          Se dispondrá de un servicio de transporte de partida desde el templo
          San Francisco de Asís con destino a la Hacienda Casa el Molino al
          concluir la ceremonia religiosa. Asimismo, tendremos transporte de
          regreso a las 2am y 3am con parada en el Hilton y en el Gran Hotel en
          el centro histórico. A demás se ofrecerá base de taxis para su regreso
          y confort.
        </p>
      </div>
      <Image
        className="h-[50rem] object-cover"
        src="https://mimascota.blob.core.windows.net/boda2/gallery10-web.jpg"
        alt="gallery10"
        width={1000}
        height={1000}
      />
    </section>
  );
};
