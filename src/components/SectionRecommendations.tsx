"use client";

import { useState } from "react";
import { ImgItem } from "./ImgItem";
import { InfoItem } from "./InfoItem";

export const SectionRecommendations = () => {
  const [hotels, setHotels] = useState(true);
  const [restaurants, setRestaurants] = useState(false);
  const [activities, setActivities] = useState(false);

  const handleHotelButton = () => {
    setHotels(true);
    setRestaurants(false);
    setActivities(false);
  };

  const handleRestaurantsButton = () => {
    setHotels(false);
    setRestaurants(true);
    setActivities(false);
  };

  const handleActivitiesButton = () => {
    setHotels(false);
    setRestaurants(false);
    setActivities(true);
  };

  return (
    <section
      id="recomendaciones"
      className="col-[full-start/full-end] flex flex-col pt-[5rem] pb-[5rem] items-center space-y-10 gray-background-color"
    >
      <h2 className="uppercase md:text-5xl text-3xl font-italiana">
        Recomendaciones
      </h2>
      <p className="md:w-[40%] w-[80%] text-center font-abyssinica">
        Dado que el evento no se llevará a cabo en ningún hotel en particular,
        tienen la libertad de elegir el que más les convenga para hospedarse
      </p>
      <div className="flex md:space-x-5 lg:pb-[8rem]">
        <button
          onClick={handleHotelButton}
          className={`${
            hotels && "button-background-color white-font-color"
          } md:w-[8rem] p-2 md:rounded-lg rounded-l-lg  shadow-md md:text-md text-sm`}
        >
          Hoteles
        </button>
        <button
          onClick={handleRestaurantsButton}
          className={`${
            restaurants && "button-background-color white-font-color"
          } md:w-[8rem] p-2 md:rounded-lg rounded-none shadow-md md:text-md text-sm`}
        >
          Restaurantes
        </button>
        <button
          onClick={handleActivitiesButton}
          className={`${
            activities && "button-background-color white-font-color"
          } md:w-[8rem] p-2 md:rounded-lg rounded-r-lg shadow-md md:text-md text-sm`}
        >
          Actividades
        </button>
      </div>

      {hotels && (
        <div className="flex flex-col items-center xl:w-[70%] lg:w-[90%] w-full relative">
          <div className="lg:grid hidden grid-cols-4 p-5 gap-10 shadow-md rounded-2xl white-background-color absolute -top-[8rem] z-20">
            <InfoItem
              itemLink="https://maps.app.goo.gl/Jo3yG5ryAvSDcqzLA"
              itemName="Gran Hotel Querétaro"
              useCode={true}
              code="VEROYJUANSERGIO11"
              useHotelLink={true}
              hotelLink="https://granhoteldequeretaro.com.mx/"
            />
            <InfoItem
              itemLink="https://maps.app.goo.gl/hukjWUbTTVvRnPpz5"
              itemName="Hilton Querétaro"
              useCode={true}
              code="BODA VERO & JUAN SERGIO"
              useHotelLink={true}
              hotelLink="https://www.hilton.com/es/book/reservation/rooms/?ctyhocn=QROJSHH&arrivalDate=2024-10-17&departureDate=2024-10-20&groupCode=BVJS&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink"
            />
            <InfoItem
              itemLink="https://maps.app.goo.gl/Ug57xEBdMSmLqA8d7"
              itemName="Mesón de Santa Rosa"
              useHotelLink={true}
              hotelLink="https://elmesondesantarosa.com/habitaciones/"
            />
            <InfoItem
              itemLink="https://maps.app.goo.gl/F5VZfrSvgo8LmVYT7"
              itemName="Gran Fiesta Americana"
              useHotelLink={true}
              hotelLink="https://www.grandfiestamericana.com/hoteles-y-resorts/grand-fiesta-americana-queretaro"
            />
          </div>
          <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 md:gap-5 gap-1 z-10 lg:p-0 p-5">
            <ImgItem
              itemLink="https://granhoteldequeretaro.com.mx/"
              imgSrc="https://mimascota.blob.core.windows.net/boda2/hotel-gran.avif"
              itemName="Gran Hotel Querétaro"
              useCode={true}
              code="VEROYJUANSERGIO11"
            />
            <ImgItem
              itemLink="https://www.hilton.com/es/book/reservation/rooms/?ctyhocn=QROJSHH&arrivalDate=2024-10-17&departureDate=2024-10-20&groupCode=BVJS&room1NumAdults=1&cid=OM%2CWW%2CHILTONLINK%2CEN%2CDirectLink"
              imgSrc="https://mimascota.blob.core.windows.net/boda2/hotel-hilton.avif"
              itemName="Hilton Querétaro"
              useCode={true}
              code="BODA VERO & JUAN SERGIO"
            />
            <ImgItem
              itemLink="https://elmesondesantarosa.com/habitaciones/"
              imgSrc="https://mimascota.blob.core.windows.net/boda2/hotel-meson.avif"
              itemName="Mesón de Santa Rosa"
            />
            <ImgItem
              itemLink="https://www.grandfiestamericana.com/hoteles-y-resorts/grand-fiesta-americana-queretaro"
              imgSrc="https://mimascota.blob.core.windows.net/boda2/hotel-fiesta.jpeg"
              itemName="Gran Fiesta Americana"
            />
          </div>
        </div>
      )}

      {restaurants && (
        <div className="flex flex-col items-center xl:w-[70%] lg:w-[90%] w-full relative">
          <div className="flex flex-col items-center">
            <div className="lg:grid hidden grid-cols-4 p-5 gap-10 shadow-md rounded-2xl white-background-color absolute -top-[5rem] z-20">
              <InfoItem
                itemLink="https://maps.app.goo.gl/een1CeGEmhK5NRa96"
                itemName="Becca Café"
              />
              <InfoItem
                itemLink="https://maps.app.goo.gl/Su6f3LnpfAMejgWp8"
                itemName="Café Breton"
              />
              <InfoItem
                itemLink="https://maps.app.goo.gl/5o87GakkUtr1MwxT6"
                itemName="Hacienda Laborcilla"
              />
              <InfoItem
                itemLink="https://maps.app.goo.gl/H5QGrTtvJhprsNHf6"
                itemName="Carola"
              />
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 md:gap-5 gap-1 z-10 lg:p-0 pl-5 pr-5">
              <ImgItem
                itemLink="https://maps.app.goo.gl/een1CeGEmhK5NRa96"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/rest-becca.jpeg"
                itemName="Becca Café"
              />
              <ImgItem
                itemLink="https://maps.app.goo.gl/Su6f3LnpfAMejgWp8"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/rest-breton.jpeg"
                itemName="Café Breton"
              />
              <ImgItem
                itemLink="https://maps.app.goo.gl/5o87GakkUtr1MwxT6"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/rest-hacienda.webp"
                itemName="Hacienda Laborcilla"
              />
              <ImgItem
                itemLink="https://maps.app.goo.gl/H5QGrTtvJhprsNHf6"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/rest-carola.jpeg"
                itemName="Carola"
              />
            </div>
          </div>

          <div className="flex flex-col items-center lg:pt-[6rem] pt-0">
            <div className="lg:grid hidden grid-cols-4 p-5 gap-10 shadow-md rounded-2xl white-background-color absolute bottom-[15rem] z-20">
              <InfoItem
                itemLink="https://maps.app.goo.gl/ncCNNuE6V23bzHLD8"
                itemName="Cabo Sierra"
              />
              <InfoItem
                itemLink="https://maps.app.goo.gl/GDLdMfRefKovd99M8"
                itemName="L'Osteria De Il Duomo"
              />
              <InfoItem
                itemLink="https://maps.app.goo.gl/BsBW3kXh3T1asX4e7"
                itemName="Cumpanio y Panio"
              />
              <InfoItem
                itemLink="https://maps.app.goo.gl/qa5jnVo7fWmdmKwp9"
                itemName="Olinka"
              />
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 md:gap-5 gap-1 z-10 lg:p-0 pl-5 pr-5">
              <ImgItem
                itemLink="https://maps.app.goo.gl/ncCNNuE6V23bzHLD8"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/rest-cabo.jpeg"
                itemName="Cabo Sierra"
              />
              <ImgItem
                itemLink="https://maps.app.goo.gl/GDLdMfRefKovd99M8"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/rest-osteria.jpeg"
                itemName="L'Osteria De Il Duomo"
              />
              <ImgItem
                itemLink="https://maps.app.goo.gl/BsBW3kXh3T1asX4e7"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/rest-cumpanio.jpeg"
                itemName="Cumpanio y Panio"
              />
              <ImgItem
                itemLink="https://maps.app.goo.gl/qa5jnVo7fWmdmKwp9"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/rest-olinka.jpeg"
                itemName="Olinka"
              />
            </div>
          </div>
        </div>
      )}

      {activities && (
        <div className="flex flex-col items-center xl:w-[70%] lg:w-[90%] w-full relative">
          <div className="flex flex-col items-center">
            <div className="lg:grid hidden grid-cols-4 p-5 gap-10 shadow-md rounded-2xl white-background-color absolute -top-[5rem] z-20">
              <InfoItem
                itemLink="https://maps.app.goo.gl/tG8G6ALCpxVeSQeHA"
                itemName="Vinaltura"
              />
              <InfoItem
                itemLink="https://maps.app.goo.gl/Su6f3LnpfAMejgWp8"
                itemName="Viñedos La Redonda"
              />
              <InfoItem
                itemLink="https://maps.app.goo.gl/iqeYkT2H2NzB756j9"
                itemName="Viñedos Puertas de la Peña"
              />
              <InfoItem
                itemLink="https://maps.app.goo.gl/Q4MJEsxMcD6ARidz8"
                itemName="Noche de Leyenda"
              />
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 md:gap-5 gap-1 z-10 lg:p-0 pl-5 pr-5">
              <ImgItem
                itemLink="https://maps.app.goo.gl/tG8G6ALCpxVeSQeHA"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/act-vinaltura.webp"
                itemName="Vinaltura"
              />
              <ImgItem
                itemLink="https://maps.app.goo.gl/Su6f3LnpfAMejgWp8"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/act-redonda.jpeg"
                itemName="Viñedos La Redonda"
              />
              <ImgItem
                itemLink="https://maps.app.goo.gl/iqeYkT2H2NzB756j9"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/act-pena.jpeg"
                itemName="Viñedos Puertas de la Peña"
              />
              <ImgItem
                itemLink="https://maps.app.goo.gl/Q4MJEsxMcD6ARidz8"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/act-leyendas.jpeg"
                itemName="Noche de Leyenda"
              />
            </div>
          </div>

          <div className="flex flex-col items-center lg:pt-[6rem] pt-0">
            <div className="lg:grid hidden grid-cols-4 p-5 gap-10 shadow-md rounded-2xl white-background-color absolute bottom-[15rem] z-20">
              <InfoItem
                itemLink="https://maps.app.goo.gl/Awqe1cHCEqoKjLi37"
                itemName="Freixenet"
              />
              <InfoItem
                itemLink="https://maps.app.goo.gl/ijFxKNCTGBKkge8c6"
                itemName="Viñedo De Cote"
              />
              <InfoItem
                itemLink="https://maps.app.goo.gl/YDNEcZFH5HTHAhWu9"
                itemName="QuereBús"
              />
              <InfoItem
                itemLink="https://maps.app.goo.gl/i74gXQAimJBPuNXM7"
                itemName="Antea"
              />
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 md:gap-5 gap-1 z-10 lg:p-0 pl-5 pr-5">
              <ImgItem
                itemLink="https://maps.app.goo.gl/Awqe1cHCEqoKjLi37"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/act-freixenet.jpeg"
                itemName="Freixenet"
              />
              <ImgItem
                itemLink="https://maps.app.goo.gl/ijFxKNCTGBKkge8c6"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/act-cote.jpeg"
                itemName="Viñedo De Cote"
              />
              <ImgItem
                itemLink="https://maps.app.goo.gl/YDNEcZFH5HTHAhWu9"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/act-bus.webp"
                itemName="QuereBús"
              />
              <ImgItem
                itemLink="https://maps.app.goo.gl/i74gXQAimJBPuNXM7"
                imgSrc="https://mimascota.blob.core.windows.net/boda2/act-antea.jpeg"
                itemName="Antea"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
