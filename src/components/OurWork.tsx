import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type Location = {
  name: string;
  coords: [number, number];
};

// FIX: strongly type your coords (this removes MapContainer/Marker TS issues)
const locations: Location[] = [
  { name: "Lagos", coords: [6.5244, 3.3792] },
  { name: "Ogun", coords: [7.1608, 3.3515] },
  { name: "Oyo", coords: [7.3775, 3.947] },
  { name: "Osun", coords: [7.5629, 4.52] },
  { name: "Ibadan", coords: [7.3775, 3.947] },
  { name: "Ilorin", coords: [8.4966, 4.5421] },
];

// FIX: explicit typing for Leaflet icon
const pinIcon: L.DivIcon = L.divIcon({
  className: "custom-pin",
  html: `
    <div style="
      width: 14px;
      height: 14px;
      background: #008000;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 0 12px rgba(0,128,0,0.5);
    "></div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

function OurWork() {
  return (
    <section className="relative w-full py-28 bg-white overflow-hidden">

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-100/30 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <span className="text-[#008000] uppercase tracking-[0.25em] text-sm font-semibold">
            Our Reach
          </span>

          <h2 className="text-4xl md:text-6xl font-bold mt-4 text-[#021D05] leading-tight">
            Expanding food access across communities.
          </h2>

          <p className="mt-7 text-gray-600 text-lg leading-relaxed">
            Every marker on this map represents coordinated outreach efforts.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-10">
            <div>
              <h3 className="text-3xl font-bold text-[#021D05]">6+</h3>
              <p className="text-sm text-gray-500 mt-1">Regions</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#021D05]">120+</h3>
              <p className="text-sm text-gray-500 mt-1">Communities</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-[#021D05]">1 Goal</h3>
              <p className="text-sm text-gray-500 mt-1">Zero Hunger</p>
            </div>
          </div>
        </motion.div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full"
        >
          <div className="h-[420px] w-full rounded-3xl overflow-hidden border border-green-200 shadow-xl">

            <MapContainer
              center={[7.2, 4.2]}
              zoom={7}
              scrollWheelZoom={false}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {locations.map((loc, i) => (
                <Marker
                  key={i}
                  position={loc.coords}
                  icon={pinIcon}
                >
                  <Popup>{loc.name}</Popup>
                </Marker>
              ))}
            </MapContainer>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default OurWork;