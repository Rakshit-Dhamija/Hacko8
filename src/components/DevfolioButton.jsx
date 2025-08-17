import React, { useEffect } from "react";

const DevfolioButton = ({ hackathonSlug = "hackowasp7", theme = "dark" }) => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="apply-button"
      data-hackathon-slug="hackowasp7"
      data-button-theme={theme}
      style={{ height: "44px", width: "312px" }}
    ></div>
  );
};

export default DevfolioButton;
