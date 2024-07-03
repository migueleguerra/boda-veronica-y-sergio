import Image from "next/image";
import Link from "next/link";

export const ImgItem = ({
  itemLink,
  imgSrc,
  itemName,
  useCode = false,
  code,
}: {
  itemLink: string;
  imgSrc: string;
  itemName: string;
  useCode?: boolean;
  code?: string;
}) => {
  return (
    <>
      <Image
        src={imgSrc}
        alt={itemName}
        width={1000}
        height={1000}
        className="h-[18rem] object-cover rounded-xl shadow-sm opacity-80 lg:flex hidden"
      />
      <Link
        href={itemLink}
        target="_blank"
        className="transform transition duration-200 hover:scale-105 lg:hidden flex"
      >
        <div className="rounded-lg overflow-hidden relative m-2 shadow-lg">
          <div className="absolute z-10 h-full w-full bg-gradient-to-b from-transparent from-40% to-[#A4A89499]" />
          <Image
            className="h-[12rem] object-cover rounded-xl shadow-sm opacity-80"
            src={imgSrc}
            alt={itemName}
            width={1000}
            height={1000}
          />
          {useCode && (
            <div className="font-semibold text-white text-sm absolute z-20 top-1 left-2">
              <p>code: </p>
              <p>{code}</p>
            </div>
          )}
          <p className="z-20 absolute font-semibold text-white text-sm max-w-[90%] -translate-y-[3rem] translate-x-2">
            {itemName}
          </p>
        </div>
      </Link>
    </>
  );
};
