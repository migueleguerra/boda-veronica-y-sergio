"use client";

import axios from "axios";
import { useMutation } from "react-query";
import Image from "next/image";
import { Button, Input } from "@chakra-ui/react";
import { SetStateAction, useState } from "react";

export const SectionForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [assistance, setAssistance] = useState(true);
  const [dish, setDish] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirmation = async () => {
    const data = {
      name,
      message,
      assistance,
      dish,
    };
    const sheetLink = process.env.NEXT_PUBLIC_SHEET_LINK || "";
    return await axios
      .post(sheetLink, JSON.stringify(data))
      .then(() => axios.post("/api/confirmations", data));
  };

  const { mutate: onHandleSubmit, isLoading } = useMutation(
    "submit-confirmation",
    handleConfirmation,
    {
      onSuccess: (data) => {
        console.log(data);
        setConfirmed(true);
      },
      onError: (error) => {
        alert(error);
      },
    }
  );

  return (
    <section
      id="RSVP"
      className="col-[full-start/full-end] flex justify-center pt-[5rem] pb-[5rem] white-background-color relative overflow-hidden"
    >
      {!confirmed ? (
        <form className="flex flex-col space-y-5 white-background-color md:p-[5rem] p-[3rem] md:rounded-lg md:shadow-md xl:w-[40%] md:w-[60%] w-full">
          <p className="text-center md:text-6xl text-4xl font-elegant pb-5">
            Confirma Tu Asistencia!
          </p>
          <div className="flex flex-col space-y-2">
            <label className="md:text-md text-sm">Nombre y Apellido</label>
            <Input
              isRequired
              isDisabled={isLoading}
              onChange={(e: {
                currentTarget: { value: SetStateAction<string> };
              }) => setName(e.currentTarget.value)}
              placeholder="Verónica Rodríguez"
              className="input-background-color rounded-lg border-solid border-[1px] shadow-sm p-2"
              type="text"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="md:text-md text-sm">Mensaje</label>
            <textarea
              onChange={(e: {
                currentTarget: { value: SetStateAction<string> };
              }) => setMessage(e.currentTarget.value)}
              placeholder="Escribenos un mensaje..."
              className="input-background-color rounded-lg border-solid border-[1px] shadow-sm p-2 h-[8rem]"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="md:text-md text-sm">Asistiras?</label>
            <div className="flex">
              <div
                onClick={() => setAssistance(!assistance)}
                className={`p-2 border-solid border-[1px] w-[3rem] text-center rounded-l-xl cursor-pointer ${
                  assistance && "text-white  button-background-color"
                }`}
              >
                <p className="md:text-md text-sm">Sí</p>
              </div>
              <div
                onClick={() => setAssistance(!assistance)}
                className={`p-2 border-solid border-[1px] w-[3rem] text-center rounded-r-xl cursor-pointer ${
                  !assistance && "text-white  button-background-color"
                }`}
              >
                <p className="md:text-md text-sm">No</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <label className="md:text-md text-sm">Platillo Vegetariano?</label>
            <div className="flex">
              <div
                onClick={() => setDish(!dish)}
                className={`p-2 border-solid border-[1px] w-[3rem] text-center rounded-l-xl cursor-pointer ${
                  dish && "text-white  button-background-color"
                }`}
              >
                <p className="md:text-md text-sm">Sí</p>
              </div>
              <div
                onClick={() => setDish(!dish)}
                className={`p-2 border-solid border-[1px] w-[3rem] text-center rounded-r-xl cursor-pointer ${
                  !dish && "text-white  button-background-color"
                }`}
              >
                <p className="md:text-md text-sm">No</p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center pt-10">
            <Button
              isLoading={isLoading}
              onClick={() => name && onHandleSubmit()}
              className="button-background-color white-font-color p-2 w-[8rem] rounded-lg shadow-md md:text-md text-sm"
            >
              Confirmar
            </Button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col justify-center space-y-4 md:-translate-y-10 text-center h-[40rem]">
          <h2 className="text-4xl font-elegant">
            Gracias por confirmar tu asistencia
          </h2>
          <p className="text-lg font-abyssinica text-[#252525B2]">
            ¡Nos vemos pronto {name}!
          </p>
        </div>
      )}
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
