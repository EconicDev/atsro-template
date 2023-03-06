import { useEffect, useRef, useState } from "react";

type translations = {
  formAlert: string,
  formTitle: string,
  formName: string,
  formEmail: string,
  formPhone: string,
  formMessage: string,
  formSubmit: string,
}

type ContractFormProps = {
  translations: translations
};

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default function ContractForm({ translations }: ContractFormProps) {
  const [formState, setFormState] = useState('');
  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    setFirstRender(false);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('loading');
    const fullName = fullNameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const message = messageRef.current.value;
    const invalidName = !fullName || fullName.length < 3;
    const invalideMessage = !message || message.length < 10;
    const invalidEmail = !validateEmail(email);
    const invalidForm = invalidName || invalideMessage || invalidEmail;
    if (invalidForm) {
      alert(translations.formAlert);
      setFormState('');
      return;
    }
    const body = {
      name: fullName,
      email,
      phone,
      message,
    };
    const response = await fetch(
      "https://m14nct3tw1.execute-api.us-east-1.amazonaws.com/contact-us",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    setFormState('done');
    setTimeout(() => {
      fullNameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      messageRef.current.value = "";
      setFormState('');
    }, 1800);
  };

  const buttonDefault =
    "bg-dodger-blue-600 inline-flex rounded-md border border-transparent py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-dodger-blue-700 focus:outline-none focus:ring-2 focus:ring-dodger-blue-500 focus:ring-offset-2";
  const buttonSuccess =
    "bg-green-600 inline-flex rounded-md border border-transparent py-3 px-8 text-base font-medium text-white shadow-sm";
  const buttonLoading =
    "bg-gray-600 inline-flex rounded-md border border-transparent py-3 px-8 text-base font-medium text-white shadow-sm";
  const buttonStyle = formState === 'loading' ? buttonLoading : formState === 'done' ? buttonSuccess : buttonDefault;
  if (firstRender) return <div />;
  return (
    <div className="bg-white flex justify-center flex-col px-2">
      <h2
        className="pt-10 pb-0 md:pb-5 md:pt-16 text-3xl md:text-4xl text-center text-dodger-blue-500 font-semibold"
      >
        {translations.formTitle}
      </h2>

      <div className="h-full bg-white py-4 mr-10 lg:px-4 sm:px-6 lg:w-4/5 lg:mx-10">
        <div className="bg-white mx-auto">
          <form id="contact-form" className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="full-name" className="sr-only"
              >{translations.formName}</label>
              <input
                ref={fullNameRef}
                type="text"
                name="full-name"
                id="full-name"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-dodger-blue-500 focus:ring-dodger-blue-500"
                placeholder={translations.formName}
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only"
              >{translations.formEmail}</label>
              <input
                ref={emailRef}
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-dodger-blue-500 focus:ring-dodger-blue-500"
                placeholder={translations.formEmail}
              />
            </div>
            <div>
              <label htmlFor="phone" className="sr-only"
              >{translations.formPhone}</label>
              <input
                ref={phoneRef}
                type="text"
                name="phone"
                id="phone"
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-dodger-blue-500 focus:ring-dodger-blue-500"
                placeholder={translations.formPhone}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only"
              >{translations.formMessage}</label>
              <textarea
                ref={messageRef}
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md border-gray-300 py-3 px-4 placeholder-gray-500 shadow-sm focus:border-dodger-blue-500 focus:ring-dodger-blue-500"
                placeholder={translations.formMessage}></textarea>
            </div>
            <div className="flex justify-end -mr-10">
              <button
                type="submit"
                disabled={Boolean(formState)}
                onClick={handleSubmit}
                className={buttonStyle}>{
                  formState === 'loading' ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 animate-spin"
                      style={{ animationDuration: "3s", animationTimingFunction: "ease-out" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  ) : formState === 'done' ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      d="M4.5 12.75l6 6 9-13.5"
                      strokeDasharray="45"
                      strokeDashoffset="45"
                      className="w-6 h-6 animate-path"
                      style={{ animationDuration: "3s", animationTimingFunction: "ease-out" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"

                      />
                    </svg>
                  ) : (
                    translations.formSubmit
                  )}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
