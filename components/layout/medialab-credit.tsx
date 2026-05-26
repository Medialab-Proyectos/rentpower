"use client";

import { useEffect, useState } from "react";

const medialabUrls = ["https://medialab.design/", "https://medialab.design/curso"];

type MedialabCreditProps = {
  className?: string;
  dotClassName?: string;
  hoverClassName?: string;
};

export function MedialabCredit({
  className,
  dotClassName,
  hoverClassName = "hover:text-primary",
}: MedialabCreditProps) {
  const [pixelUrl, setPixelUrl] = useState(medialabUrls[0]);

  useEffect(() => {
    setPixelUrl(medialabUrls[Math.floor(Math.random() * medialabUrls.length)]);
  }, []);

  return (
    <p className={className}>
      Diseñada por{" "}
      <a
        href="https://medialab.design/"
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-colors ${hoverClassName}`}
      >
        Medialab Ingeniería
      </a>
      <a
        href={pixelUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir Medialab"
        className={dotClassName}
      />
    </p>
  );
}
