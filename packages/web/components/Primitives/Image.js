import React, { useEffect, useState } from "react";
import { StyledImage } from "./Styled";
import { useTheme } from "../../../themes";

export function Image({ src, ...props }) {
  const theme = useTheme();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const img = document.createElement("img");
    img.src = src;
    img.onload = () => setLoaded(true);
  });
  return <StyledImage src={src} theme={theme} {...props} />;
}
