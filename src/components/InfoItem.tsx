import Link from "next/link";

export const InfoItem = ({
  itemName,
  itemLink,
  useCode = false,
  code,
  useHotelLink = false,
  hotelLink = "link",
}: {
  itemName: string;
  itemLink: string;
  useCode?: boolean;
  code?: string;
  useHotelLink?: boolean;
  hotelLink?: string;
}) => {
  return (
    <div className="flex flex-col space-y-3">
      <p className="uppercase xl:text-lg">{itemName}</p>
      <div className="w-[6rem] h-[1px] bg-black" />
      {useHotelLink && (
        <div>
          <Link
            href={hotelLink}
            target="_blank"
            className="button-background-color p-1 text-white rounded-md shadow-md"
          >
            reservar
          </Link>
        </div>
      )}
      <div>
        <Link
          href={itemLink}
          target="_blank"
          className="text-[#252525B2] underline"
        >
          ver mapa
        </Link>
      </div>
      {useCode && (
        <div>
          <p>Código</p>
          <p className="text-sm">{code}</p>
        </div>
      )}
    </div>
  );
};
