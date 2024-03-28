import React from "react";

export default function Formular() {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="flex flex-col gap-4"
    >
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Vorname"
        className="w-full"
      />

      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Nachname"
        className="w-full"
      />

      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Email"
        className="w-full"
      />

      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Betreff"
        className="w-full"
      />
      <div>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Nachricht"
          className="w-full"
        />
      </div>

      <button className="bg-red-200" type="submit">
        senden
      </button>
    </form>
  );
}
