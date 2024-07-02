import Image from "next/image";

export const SectionGallery = () => {
  return (
    <section
      id="galeria"
      className="lg:col-[center-start/center-end] col-[full-start/full-end] grid lg:p-0 p-[1rem] lg:pt-[5rem] lg:pb-[5rem] gap-5"
    >
      <Image
        src="https://mimascota.blob.core.windows.net/boda2/gallery43.jpg"
        alt="gallery43"
        width={1000}
        height={1000}
        className="w-full h-[40rem] object-cover rounded-lg shadow-md"
      />
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
        <Image
          src="https://mimascota.blob.core.windows.net/boda2/gallery3.jpg"
          alt="gallery3"
          width={1000}
          height={1000}
          className="rounded-lg shadow-md"
        />
        <Image
          src="https://mimascota.blob.core.windows.net/boda2/gallery33.jpg"
          alt="gallery33"
          width={1000}
          height={1000}
          className="rounded-lg shadow-md"
        />
        <Image
          src="https://mimascota.blob.core.windows.net/boda2/gallery2.jpg"
          alt="gallery2"
          width={1000}
          height={1000}
          className="rounded-lg shadow-md"
        />
        <Image
          src="https://mimascota.blob.core.windows.net/boda2/gallery50.jpg"
          alt="gallery50"
          width={1000}
          height={1000}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Image
          src="https://mimascota.blob.core.windows.net/boda2/gallery51.jpg"
          alt="gallery51"
          width={1000}
          height={1000}
          className="sm:h-[30rem] rounded-lg shadow-md object-cover"
        />
        <Image
          src="https://mimascota.blob.core.windows.net/boda2/gallery59.jpg"
          alt="gallery59"
          width={1000}
          height={1000}
          className="sm:h-[30rem] rounded-lg shadow-md object-cover"
        />
      </div>
    </section>
  );
};
