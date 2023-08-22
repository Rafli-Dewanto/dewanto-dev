import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function ButtonSubmit() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="
      group 
      flex items-center justify-center gap-2 h-[3rem] w-[8rem] 
      bg-gray-900 text-white rounded-full outline-none transition-all
      focus:scale-110
      hover:scale-110
      active:scale-105
      hover:bg-gray-950
      disabled:scale-100
      disabled:opacity-70
      dark:bg-dark-primary"
      type="submit"
    >
      {pending ? (
        <div className="w-5 h-5 border-b-2 border-white rounded-full animate-spin"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="text-xs transition-all opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
