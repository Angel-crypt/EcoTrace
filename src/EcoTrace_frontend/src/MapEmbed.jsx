import React from 'react';

const MapEmbed = () => (
  <div>
    <style>
      {`
      .embed-container {position: relative; padding-bottom: 80%; height: 0; max-width: 100%;} 
      .embed-container iframe, .embed-container object, .embed-container iframe {position: absolute; top: 0; left: 0; width: 100%; height: 100%;}
      small {position: absolute; z-index: 40; bottom: 0; margin-bottom: -15px;}
      `}
    </style>
    <div className="embed-container">
      <iframe
        width="500"
        height="400"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        title="hack"
        src="//nexusdo.maps.arcgis.com/apps/Embed/index.html?webmap=600d603909694e098a2538bb2675daae&extent=-86.0422,-3.006,-60.1364,10.8145&zoom=true&previewImage=false&scale=true&legend=true&disable_scroll=true&theme=dark"
      ></iframe>
    </div>
  </div>
);

export default MapEmbed;
