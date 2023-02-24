import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vaobc1a",
        "template_prt363o",
        form.current,
        "JQAZjphJCvpQ7dYOI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div id="contact" className="max-w-[1080px] m-auto md:pl-20 p-4 py-16  ">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <form
        /* action=" " method="POST" */ ref={form}
        onSubmit={sendEmail} /* encType="multipart/form-data" */
      >
        <div className="grid md:grid-cols-2 gap-4 mt-6  w-full py-2 ">
          <div className="felx flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 required"
              type="text"
              name="name"
            />
          </div>
          <div className="felx flex-col">
            <label className="uppercase text-sm py-2">Phone Number</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 required"
              type="text"
              name="phone"
            />
          </div>
          <div className="flex flex-col py-2 ">
            <label className="uppercase text-sm py-2">Email</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 required"
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col py-2 ">
            <label className="uppercase text-sm py-2">Subject</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300 required"
              type="text"
              name="subject"
            />
          </div>
          <div className="flex flex-col py-2 ">
            <label className="uppercase text-sm py-2 ">Message</label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300 required  "
              row="12"
              type="text"
              name="message"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-col py-4 ">
          <button
            type="submit"
            className="bg-[#3b3b3b] text-gray-100 mt-4 grid m-auto  p-4 rounded-lg cursor-pointer hover:scale-110 ease-in duration-300 "
            onClick={() => {
              window.confirm("Your message to Rafiqul Islam is delivered");
            }}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
