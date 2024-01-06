import React, { useState } from "react";
//*
// InputBox is a component for typing and sending messages
//*
export function InputBox({ onNewMessage }) {
  const [text, setText] = useState("");
  const resize = (e) => {
    const target = e.target;
    target.style.height = "inherit";
    target.style.height = `${Math.min(target.scrollHeight, 200)}px`;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const txt = text.trim();
    if (txt === "") {
      return;
    }
    if (txt.length > 1024) {
      e.preventDefault();
      alert("Max message length is 1024");
      return;
    }
    onNewMessage(txt);
    setText("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && e.shiftKey === false) {
      handleSubmit(e);
      resize(e);
    }
  };
  const handleKeyUp = (e) => {
    resize(e);
  };
  return (
    <form
      className="p-2 w-full flex items-strech gap-2 border-t"
      onSubmit={handleSubmit}
    >
      <textarea
        name="message"
        id="message"
        rows={1}
        className="peer resize-none bg-transparent block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-empirica-500 sm:text-sm sm:leading-6"
        placeholder="Say something"
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        type="button"
        className="rounded-md bg-gray-100 w-9 h-9 p-2 text-sm font-semibold text-gray-500 shadow-sm hover:bg-gray-200 hover:text-empirica-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-empirica-500"
        onClick={handleSubmit}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full fill-current"
          viewBox="0 0 512 512"
        >
          <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
        </svg>
      </button>
    </form>
  );
}
