import React from 'react'
import { useForm } from 'react-hook-form';
type UrlInputProps = {
  url: string;
  // You can add props here if needed
};


const UrlInput = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UrlInputProps>({defaultValues: { url: "" }});
 const onSubmit = (data: UrlInputProps) => {   console.log("Form submitted with URL:", data.url);
  fetch("/api/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ url: data.url }),
  }).then((response) => {
    response.json().then((payload) => {
      console.log("Response from server:", payload);
    });
  }).catch((error) => {
    console.error("Error submitting form:", error);
  });
   // You can add your URL shortening logic here
   reset(); // Reset the form after submission
 };
  return (
    <form onSubmit={handleSubmit(onSubmit)}  className="md:w-[80%] font-sans w-[95%] mx-auto">
      <div className='bg-[url("/assets/bg-shorten-desktop.svg")] bg-no-repeat h-50 bg-cover bg-center w-full flex flex-col md:flex-row items-center justify-center gap-4 p-6  mx-auto rounded-lg mt-10 w-full bg-[#232127]'>
        <input
          type="text"
          placeholder="Shorten a link here..."
          {...register("url", { required: "URL is required", pattern: { value: /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/, message: "Please enter a valid URL" } })}
          className="w-full placeholder:text-gray-400 text-gray-400 font-semibold md:w-[80%] px-4 py-3 rounded-xl bg-white md:py-6 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button className="mt-4 md:mt-0 bg-cyan-500/70 hover:bg-cyan-600 text-white font-bold py-3 md:py-6 px-6 md:px-12 text-lg rounded-xl transition duration-300 ease-in-out transform hover:scale-105">
          Shorten It!
        </button>
      </div>
      {errors.url && <p className="text-red-500 mt-2">{errors.url.message}</p>}
    </form>
  );
}

export default UrlInput