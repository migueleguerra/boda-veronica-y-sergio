import Image from "next/image";
import Link from "next/link";

export const SectionItinerary = () => {
  return (
    <section
      id="itinerario"
      className="col-[full-start/full-end] grid lg:grid-cols-2"
    >
      <div className="flex flex-col items-center justify-center space-y-10">
        <h2 className="uppercase md:text-5xl text-3xl font-italiana">
          Itinerario
        </h2>
        <div className="flex justify-center sm:space-x-5 space-x-2 w-full">
          <div className="flex flex-col justify-between items-end py-5 xl:text-4xl text-3xl">
            <p className="font-elegant">Rompehielos</p>
            <p className="font-elegant">Ceremonia Religiosa</p>
            <p className="font-elegant">Coctel de Recepción</p>
          </div>
          <div className="f-full w-[1px] bg-black" />
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-2">
              <p className="uppercase xl:text-xl sm:text-md text-sm">
                Callejoneada - Plaza de armas
              </p>
              <p className="text-sm">Viernes 18 de Octubre 6:30 PM</p>
              <Link
                href="https://maps.app.goo.gl/htCNqXKd5MD2NpbV9"
                target="_blank"
                className="p-2 button-background-color text-white rounded-lg shadow-md w-[6rem] sm:text-md text-sm text-center"
              >
                Ver mapa
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="uppercase xl:text-xl sm:text-md text-sm">
                TEMPLO DE SAN FRANCISCO DE ASIS
              </p>
              <p className="text-sm">Sábado 19 de Octubre 4:00 PM</p>
              <Link
                href="https://maps.app.goo.gl/htCNqXKd5MD2NpbV9"
                target="_blank"
                className="p-2 button-background-color text-white rounded-lg shadow-md w-[6rem] sm:text-md text-sm text-center"
              >
                Ver mapa
              </Link>
            </div>
            <div className="flex flex-col space-y-2">
              <p className="uppercase xl:text-xl sm:text-md text-sm">
                HACIENDA CASA EL MOLINO
              </p>
              <p className="text-sm">Sábado 19 de Octubre 6:00 PM</p>
              <Link
                href="https://maps.app.goo.gl/rWqDXZvD6ATtrEoS6"
                target="_blank"
                className="p-2 button-background-color text-white rounded-lg shadow-md w-[6rem] sm:text-md text-sm text-center"
              >
                Ver mapa
              </Link>
            </div>
          </div>
        </div>
        <p className="w-[80%] lg:pb-0 pb-[5rem]">
          Se dispondrá de un servicio de transporte de partida desde el templo
          San Francisco de Asís con destino a la Hacienda Casa el Molino al
          concluir la ceremonia religiosa. Asimismo, tendremos transporte de
          regreso a las 2am y 3am con parada en el Hilton y en el Gran Hotel en
          el centro histórico. A demás se ofrecerá base de taxis para su regreso
          y confort.
        </p>
      </div>
      <Image
        className="sm:h-[50rem] h-[40rem] object-cover"
        src="https://mimascota.blob.core.windows.net/boda2/gallery10-web.jpg"
        alt="gallery10"
        width={1000}
        height={1000}
      />
    </section>
  );
};
