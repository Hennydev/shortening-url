import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { toast } from "sonner";
type UrlInputProps = {
  url: string;
  // You can add props here if needed
};
type UrlData = {
  originalUrl: string;
  shortUrl: string;
};

const UrlInput = ({ onAddUrl }: any) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UrlInputProps>({ defaultValues: { url: "" } });

  const onSubmit = (data: UrlInputProps) => {
    fetch("/api/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ url: data.url }),
    })
      .then((response) => {
        response.json().then((payload) => {
          if (payload.shortUrl) {
            toast.success("URL shortened successfully!: " + payload.shortUrl);
            onAddUrl({ originalUrl: data.url, shortUrl: payload.shortUrl });
          }else{
            toast.error("Invalid Url " + payload.error);
          }
        });
      })
      .catch((error) => {
        toast.error(error + "Please try again.");
      });
    // You can add your URL shortening logic here
    reset(); // Reset the form after submission
  };

  return (
    <div className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:w-[80%] font-sans w-[95%] mx-auto"
      >
        <div
          className='
  bg-[url("/assets/bg-shorten-desktop.svg")]
  bg-no-repeat
  bg-cover
  bg-center
  w-full
  flex flex-col md:flex-row
  items-center
  justify-center
  gap-4
  p-6
  mx-auto
  rounded-lg
  mt-10
  bg-[#232127]
'
        >
          <input
            type="text"
            placeholder="Shorten a link here..."
            {...register("url", {
              required: "URL is required",
              pattern: {
                value:
                  /^(https:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,
                message: "Please enter a valid URL",
              },
            })}
            className="w-full placeholder:text-gray-400 text-gray-400 font-semibold md:w-[80%] px-4 py-3 rounded-xl bg-white md:py-6 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            className="
 
  bg-cyan-500 hover:bg-cyan-600
  text-white font-bold
  py-3 md:py-4 lg:py-5
  px-6 md:px-8 lg:px-12
  text-base md:text-lg lg:text-xl
  rounded-xl
  transition duration-300
  hover:scale-105
  w-full md:w-auto
"
          >
            Shorten It!
          </button>
        </div>
        {errors.url && (
          <p className="text-red-500 mt-2">{errors.url.message}</p>
        )}
      </form>
    </div>
  );
};

export default UrlInput;
