import React from "react";

export default function Formular() {
  return (
    <form name="contact" method="POST" data-netlify="true" className="grid">
      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Vorname"
        className="w-full bg-amber-50 h-12 p-3"
      />

      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Nachname"
        className="w-full bg-amber-50 h-12 p-3"
      />

      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Email"
        className="w-full bg-amber-50 h-12 p-3"
      />

      <input
        type="text"
        id="fname"
        name="firstname"
        placeholder="Betreff"
        className="w-full bg-amber-50 h-12 p-3"
      />
      <div>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Nachricht"
          className="w-full bg-amber-50 h-12 p-3"
        />
      </div>

      <button className="w-4/12 h-12 bg-teal-200" type="submit">
        Senden
      </button>
    </form>
  );
}
