import React from "react";

export default function Formular() {
  return (
    <div className="bg-gradient-to-r from-teal-200 to-emerald-200 p-6 rounded-md shadow-lg">
      <form name="contact" method="POST" data-netlify="true" className="grid">
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Vorname"
          className="w-full bg-amber-50 h-12 p-3 rounded mb-6"
        />

        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Nachname"
          className="w-full bg-amber-50 h-12 p-3 rounded mb-6"
        />

        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Email"
          className="w-full bg-amber-50 h-12 p-3 rounded mb-6"
        />

        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Betreff"
          className="w-full bg-amber-50 h-12 p-3 rounded mb-6"
        />
        <div>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Nachricht"
            className="w-full bg-amber-50 h-12 p-3 rounded mb-6"
          />
        </div>

        <button className="w-4/12 h-12 bg-teal-200 rounded-full" type="submit">
          Senden
        </button>
      </form>
    </div>
  );
}
