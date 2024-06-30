import Image from "next/image";

export const SectionGallery = () => {
  return (
    <div className="col-[center-start/center-end] grid pt-[5rem] pb-[5rem] gap-5">
      <Image
        src="https://mimascota.blob.core.windows.net/boda2/gallery8.jpg"
        alt="gallery8"
        width={1000}
        height={1000}
        className="w-full h-[40rem] object-cover rounded-lg shadow-md"
      />
      <div className="grid grid-cols-4 gap-5">
        <Image
          src="https://mimascota.blob.core.windows.net/boda2/gallery7-web.jpg"
          alt="gallery4"
          width={1000}
          height={1000}
          className="rounded-lg shadow-md"
        />
        <Image
          src="https://mimascota.blob.core.windows.net/boda2/gallery3-web.jpg"
          alt="gallery3"
          width={1000}
          height={1000}
          className="rounded-lg shadow-md"
        />
        <Image
          src="https://mimascota.blob.core.windows.net/boda2/gallery5-web.jpg"
          alt="gallery5"
          width={1000}
          height={1000}
          className="rounded-lg shadow-md"
        />
        <Image
          src="https://mimascota.blob.core.windows.net/boda2/gallery6-web.jpg"
          alt="gallery6"
          width={1000}
          height={1000}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <Image
          src="https://mimascota.blob.core.windows.net/boda2/gallery2-web.jpg"
          alt="gallery5"
          width={1000}
          height={1000}
          className="h-[30rem] rounded-lg shadow-md object-cover"
        />
        <Image
          src="https://mimascota.blob.core.windows.net/boda2/gallery10-web.jpg"
          alt="gallery6"
          width={1000}
          height={1000}
          className="h-[30rem] rounded-lg shadow-md object-cover"
        />
      </div>
    </div>
  );
};
