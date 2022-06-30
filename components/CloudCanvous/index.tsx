import React from 'react';
import { Cloud, ICloud } from 'react-icon-cloud';

import { Wrapper } from './styles';

const CloudCanvous = () => {
  const options: ICloud['options'] = {
    animTiming: 'Smooth',
    clickToFront: 500,
    depth: 1,
    imageScale: 2,
    initial: [0.1, -0.1],
    outlineColour: '#0000',
    reverse: true,
    textHeight: 30,
    tooltip: 'native',
    tooltipDelay: 0,
    wheelZoom: false,
  };
  const containerProps: ICloud['containerProps'] = {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // width: '100%',
      // paddingTop: 40,
    },
  };
  const canvasProps: ICloud['canvasProps'] = {};

  return (
    <Wrapper>
      <Cloud
        // containerProps={containerProps}
        canvasProps={canvasProps}
        options={options}
      >
        <a key={1} style={{ color: '#000', fontSize: 100, fontWeight: 500 }}>
          typescript
        </a>
        <a key={2} style={{ color: 'red', fontSize: 50, fontWeight: 500 }}>
          javascript
        </a>
        <a key={2} style={{ color: 'red', fontSize: 50, fontWeight: 500 }}>
          javascript
        </a>
        <a key={2} style={{ color: 'red', fontSize: 50, fontWeight: 500 }}>
          javascript
        </a>
        <a key={2} style={{ color: 'red', fontSize: 50, fontWeight: 500 }}>
          javascript
        </a>
        <a key={2} style={{ color: 'red', fontSize: 50, fontWeight: 500 }}>
          javascript
        </a>
        <a key={2} style={{ color: 'red', fontSize: 50, fontWeight: 500 }}>
          javascript
        </a>
        <a key={2} style={{ color: 'red', fontSize: 50, fontWeight: 500 }}>
          javascript
        </a>
        <a key={2} style={{ color: 'red', fontSize: 50, fontWeight: 500 }}>
          javascript
        </a>
        <a key={2} style={{ color: 'red', fontSize: 50, fontWeight: 500 }}>
          javascript
        </a>
      </Cloud>
    </Wrapper>
  );
};
export default CloudCanvous;
