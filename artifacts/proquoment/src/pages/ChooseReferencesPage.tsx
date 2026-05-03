import { useState, useMemo } from "react";
import { useLocation } from "wouter";

const IMAGES = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80",
    alt: "Colourful stripe sweatshirt",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&q=80",
    alt: "Cream hoodie",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80",
    alt: "Beige baseball cap",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400&q=80",
    alt: "White cap side view",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",
    alt: "Beige cap angle",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1617952739964-e25e8b7cbc4c?w=400&q=80",
    alt: "Man in beige jacket",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1485518994093-fda793bc6300?w=400&q=80",
    alt: "Woman in zip jacket",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80",
    alt: "Khaki cap flat",
  },
];

const STARS = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  top: ((i * 37 + 11) % 97).toFixed(2),
  left: ((i * 53 + 7) % 99).toFixed(2),
  size: ((i % 3) + 1).toFixed(1),
  opacity: (((i * 17) % 60) + 20) / 100,
}));

export default function ChooseReferencesPage() {
  const [, setLocation] = useLocation();
  const [selected, setSelected] = useState<number[]>([]);

  const toggle = (id: number) =>
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden">
      {/* Galaxy background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 25% 65%, #1a4db5 0%, #0b1f6e 30%, #060e35 60%, #020918 100%)",
        }}
      >
        {/* Nebula overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 72% 38%, rgba(24,72,210,0.4) 0%, transparent 55%), radial-gradient(ellipse at 18% 78%, rgba(5,40,160,0.3) 0%, transparent 45%)",
          }}
        />
        {/* Stars */}
        {STARS.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
            }}
          />
        ))}
      </div>

      {/* Card */}
      <div className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden">
        {/* Back button */}
        <button
          onClick={() => setLocation("/")}
          className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors pt-4 px-5"
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path
              d="M9 11.5L5 7.5L9 3.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back
        </button>

        <div className="flex gap-5 px-5 pb-5 pt-3">
          {/* Left panel */}
          <div className="w-52 shrink-0 flex flex-col justify-between">
            <div>
              <h1 className="text-[1.2rem] font-semibold text-gray-900 leading-snug mb-2">
                Choose reference images
              </h1>
              <p className="text-[0.8rem] text-gray-500 leading-relaxed">
                Pick any examples that resemble your product, and tell us what
                you like.
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 mt-4">
              <button className="flex items-center gap-1 text-[0.8rem] text-gray-600 hover:text-gray-900 transition-colors whitespace-nowrap">
                <span className="text-base leading-none font-light">+</span>
                Add your own images
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-[0.8rem] font-medium px-5 py-1.5 rounded-full transition-colors">
                Skip
              </button>
            </div>
          </div>

          {/* Image grid — 3 cols × 3 rows, each row ~120px */}
          <div
            className="flex-1 relative"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gridTemplateRows: "repeat(3, 118px)",
              gap: "6px",
            }}
          >
            {/* Col 1, rows 1-2: Sweatshirt */}
            <GridImg
              img={IMAGES[0]}
              selected={selected.includes(IMAGES[0].id)}
              onClick={() => toggle(IMAGES[0].id)}
              style={{ gridColumn: "1", gridRow: "1 / 3" }}
            />
            {/* Col 2, rows 1-2: Hoodie */}
            <GridImg
              img={IMAGES[1]}
              selected={selected.includes(IMAGES[1].id)}
              onClick={() => toggle(IMAGES[1].id)}
              style={{ gridColumn: "2", gridRow: "1 / 3" }}
            />
            {/* Col 3, row 1: Cap */}
            <GridImg
              img={IMAGES[2]}
              selected={selected.includes(IMAGES[2].id)}
              onClick={() => toggle(IMAGES[2].id)}
              style={{ gridColumn: "3", gridRow: "1" }}
            />
            {/* Col 3, rows 2-3: Man in jacket */}
            <GridImg
              img={IMAGES[5]}
              selected={selected.includes(IMAGES[5].id)}
              onClick={() => toggle(IMAGES[5].id)}
              style={{ gridColumn: "3", gridRow: "2 / 4" }}
            />
            {/* Col 1, row 3: Woman in jacket */}
            <GridImg
              img={IMAGES[6]}
              selected={selected.includes(IMAGES[6].id)}
              onClick={() => toggle(IMAGES[6].id)}
              style={{ gridColumn: "1", gridRow: "3" }}
            />
            {/* Col 2, row 3: Cap flat */}
            <GridImg
              img={IMAGES[7]}
              selected={selected.includes(IMAGES[7].id)}
              onClick={() => toggle(IMAGES[7].id)}
              style={{ gridColumn: "2", gridRow: "3" }}
            />

            {/* Refine search button — bottom-right corner */}
            <div className="absolute bottom-0 right-0 z-10">
              <button className="flex items-center gap-1.5 bg-white border border-gray-200 shadow text-[0.75rem] text-gray-700 hover:bg-gray-50 transition-colors px-3 py-1.5 rounded-full">
                Refine search
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridImg({
  img,
  selected,
  onClick,
  style,
}: {
  img: { id: number; src: string; alt: string };
  selected: boolean;
  onClick: () => void;
  style: React.CSSProperties;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl transition-all ${
        selected ? "ring-2 ring-blue-500 ring-offset-1" : "hover:opacity-90"
      }`}
      style={style}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=400&q=80";
        }}
      />
      {selected && (
        <div className="absolute inset-0 bg-blue-500/20 flex items-start justify-end p-1.5">
          <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center shadow">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 5l2 2 4-4"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      )}
    </button>
  );
}
