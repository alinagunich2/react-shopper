import React, { useState } from "react";
import ContentLoader from "react-content-loader";

export const Skeleton = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="border border-solid border-gray-300 rounded-md overflow-hidden">
      <ContentLoader
        className="block"
        speed={1}
        width={screenWidth < 1028 ? 238 : 390}
        height={screenWidth < 1028 ? 362 : 560}
        viewBox={screenWidth < 1028 ? "0 0 390 592" : "0 0 390 560"}
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="0" rx="0" ry="0" width={390} height={456} />
        <rect x="23" y="481" rx="0" ry="0" width="180" height="30" />
        <rect x="23" y="522" rx="0" ry="0" width="70" height="26" />
        <rect x="120" y="522" rx="0" ry="0" width="83" height="26" />
      </ContentLoader>
    </div>
  );
};
