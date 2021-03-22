import React from 'react';
import ContentLoader from "react-content-loader";

const PizzaLoadedBlock = () => {
  return (
    <ContentLoader
      speed={1}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#ffffff"
      foregroundColor="#ebebeb">
      <circle cx="139" cy="136" r="136" />
      <rect x="0" y="321" rx="10" ry="10" width="280" height="75" />
      <rect x="0" y="287" rx="8" ry="8" width="280" height="23" />
      <rect x="91" y="406" rx="20" ry="20" width="188" height="46" />
    </ContentLoader>
  )
}

export default PizzaLoadedBlock;
