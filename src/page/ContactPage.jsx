import React from 'react';
import { GoArrowRight } from "react-icons/go";
import BurgerMenu from '../components/BurgerMenu';

function ContactPage() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2ee9baba-2d4f-4c24-a6f3-07bf5c356d1e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <section className='flex flex-col justify-center items-center min-h-screen w-full text-center bg-[#F5F5E9] text-black relative overflow-hidden'>
        <div className='gap-10 pt-36 flex items-center top-[7rem] left-[3rem]'>
          <h1 className='text-9xl leading-loose font-HelveticaNowDisplayMedium'>Connect</h1>
          <GoArrowRight className='text-9xl' />
          <h1 className='text-9xl leading-loose font-HelveticaNowDisplayMedium'>Connect</h1>
          <GoArrowRight className='text-9xl' />
          <h1 className='text-9xl leading-loose font-HelveticaNowDisplayMedium'>Connect</h1>
          <GoArrowRight className='text-9xl' />
        </div>

        <div className="flex flex-col items-center bg-white lg:w-3/4 max-lg:w-[95%] rounded mx-10 my-1">
          <div className="content max-lg:p-[30px] lg:p-[42px] text-left w-full border-b border-dashed border-gray-500">
            <p className="text-black w-64 font-medium">
              Engage the neural link and let your signal reach us across the void.
            </p>
          </div>
          <div className="flex flex-col w-full max-lg:p-[30px] lg:p-[42px] py-[3rem] space-y-8">
            <form onSubmit={onSubmit}>
              <div className="relative flex flex-col">
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full placeholder:text-black text-black font-suisseintlmono bg-transparent border-b border-dashed border-black pt-4 pb-2 text-[12px] focus:outline-none"
                  placeholder="First Name*"
                />
              </div>
              <div className="relative pt-3 flex flex-col">
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full placeholder:text-black text-black font-suisseintlmono bg-transparent border-b border-dashed border-black pt-4 pb-2 text-[12px] focus:outline-none"
                  placeholder="Last Name*"
                />
              </div>
              <div className="relative pt-3 flex flex-col">
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full placeholder:text-black text-black font-suisseintlmono bg-transparent border-b border-dashed border-black pt-4 pb-2 text-[12px] focus:outline-none"
                  placeholder="Phone Number*"
                />
              </div>
              <div className="relative pt-3 flex flex-col">
                <input
                  type="text"
                  name="email"
                  required
                  className="w-full placeholder:text-black text-black font-suisseintlmono bg-transparent border-b border-dashed border-black pt-4 pb-2 text-[12px] focus:outline-none"
                  placeholder="Email*"
                />
              </div>
              <div className="relative pt-3 flex flex-col">
                <textarea
                  className="w-full placeholder:text-black text-black font-suisseintlmono bg-transparent border-b border-dashed border-black pt-4 pb-1 text-[12px] focus:outline-none"
                  placeholder="Message*"
                  name="message"
                  required
                  rows="5"
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="mb-20 border-2 border-black font-suisseintlmono py px-6 text-lg uppercase tracking-wide text-black hover:bg-black hover:text-white transition"
                >
                  Transmit
                </button>
              </div>
            </form>

          </div>
        </div>
        <BurgerMenu />

        <div className="fade-effect absolute bottom-0 left-0 right-0"></div>
      </section>
    </>
  );
}

export default ContactPage;
