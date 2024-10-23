export default function Location() {
  return (
    <div>
      <a
        className="text-3xl text-gray-800 hover:opacity-75"
        href="https://maps.app.goo.gl/FejJqAM4TTUXhMLu6"
        target="_blank"
        rel="noreferrer"
      >
        <span className="flex justify-center items-center font-light underline mb-3">
          Onde estamos
        </span>
      </a>

      <iframe
        className="w-full h-80 rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.563340110967!2d-47.399299!3d-20.536321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b6f941d77f1b8b%3A0x5cb7286ab5cda5da!2sAv.%207%20de%20Setembro%2C%20650%20-%20S%C3%A3o%20Jos%C3%A9%2C%20Franca%20-%20SP%2C%2014401-278!5e0!3m2!1sen!2sbr!4v1696865609804!5m2!1sen!2sbr"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

//   ______    ____
//  /\    /\  | "o |
// |  \/\/  |/ ___\|
// |gpPacheco_/
// /_/_/ /_/_/
