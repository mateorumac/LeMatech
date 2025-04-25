// ScrollToHash.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHash({ loco }) {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    // ako imamo loco instancu, koristimo ju
    if (loco) {
      loco.scrollTo(el, { offset: -10, duration: 800 });
    } else {
      // fallback najjednostavnije
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash, loco]);

  return null;
}
