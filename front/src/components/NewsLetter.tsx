import React from "react";

const NewsLetter = () => {
  let [email, setEmail] = React.useState<string>("");
  let [emailSend, setEmailSend] = React.useState<boolean>(false);

  let hendEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(() => e.target.value);
  };
  let sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail(() => "");
    setEmailSend(true);
  };

  return (
    <div className="m-auto px-10 md:px-36 mb-36 gap-7 flex-center-all flex-col bg-custom-gradient pt-20">
      <h1 className=" text-[#454545] text-3xl sm:text-5xl md:text-7xl font-semibold text-center md:text-left">
        GetExclusive Ofeers On Your Email
      </h1>
      {!emailSend ? (
        <div>
          <p className="text-[#454545] text-xl">
            Subscribe to our newletter and stay updated
          </p>
          <form
            onSubmit={sendEmail}
            className="pt-6 sm:pt-0 w-full sm:w-[500px] flex flex-col sm:flex-row justify-between border border-solid border-[#616161] bg-white rounded-3xl"
          >
            <input
              className="ml-8  mb-6  sm:mb-0 outline-none text-[#616161] text-base"
              type="email"
              value={email}
              onChange={hendEmail}
              placeholder="Your Email"
            />
            <button className="w-full h-16 rounded-3xl bg-black text-white text-base cursor-pointer">
              Subscribe
            </button>
          </form>
        </div>
      ) : (
        <p className="mt-10 text-[#454545] text-xl sm:text-2xl md:text-4xl animate-fadeIn">
          Email sended &#129392;
        </p>
      )}
    </div>
  );
};

export default NewsLetter;
