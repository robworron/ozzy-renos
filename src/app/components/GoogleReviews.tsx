"use client";

import { useEffect } from "react";

const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-23d45e4f-1a25-4821-8990-3e2eb5d39b8c max-w-[90%] my-20" />
  );
};

export default GoogleReviews;
