import React from "react";
import * as S from "./styled";
import { themeDark } from "../../themes";

function Logo() {
 const testId = "logotype";

 return (
  <S.Svg
   data-testid={testId}
   version="1.1"
   id="logotype"
   xmlns="http://www.w3.org/2000/svg"
   xmlnsXlink="http://www.w3.org/1999/xlink"
   viewBox="0 0 900 900">
   <g>
    <S.Path
     fill="none"
     stroke={themeDark.colors.white}
     strokeWidth={themeDark.strokes.bold}
     d="M469.672,46.637v560.244
        c-0.217,50.574-7.826,92.741-22.849,126.506c-15.021,33.759-35.749,58.975-62.19,75.664c-26.446,16.694-56.796,25.032-91.07,25.032
        c-33.634,0-63.676-7.468-90.117-22.38c-26.445-14.912-47.228-35.898-62.35-62.968c-15.128-27.053-22.688-58.782-22.688-95.199"
    />
   </g>
   <S.Path
    fill="none"
    stroke={themeDark.colors.secondary}
    strokeWidth={themeDark.strokes.black}
    d="M398.256,131.213
      c-7.144,3.344-14.096,7.122-20.795,11.465c-29.31,18.976-52.276,45.79-68.911,80.441c-16.627,34.659-24.94,75.432-24.94,122.316
      c0,46.895,8.313,87.665,24.94,122.32c16.634,34.655,39.566,61.47,68.804,80.445c6.727,4.371,13.713,8.176,20.901,11.536"
   />
   <S.Path
    fill="none"
    strokeWidth={themeDark.strokes.black}
    d="M270.267,344.35"
   />
   <g>
    <S.Path
     fill="none"
     stroke={themeDark.colors.primary}
     strokeWidth={themeDark.strokes.black}
     d="M542.426,46.637
        c42.786,0,80.577,10.992,113.383,32.971c32.801,21.983,58.429,52.813,76.889,92.493c18.455,39.684,27.685,86.119,27.685,139.306
        c0,53.191-9.229,99.627-27.685,139.307c-18.46,39.682-44.088,70.514-76.889,92.493c-32.806,21.982-70.597,32.971-113.383,32.971
         M716.417,627.303L654,544.5"
    />
   </g>
  </S.Svg>
 );
}

export default Logo;
