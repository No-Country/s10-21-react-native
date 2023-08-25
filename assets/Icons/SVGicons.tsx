import Svg, { ClipPath, Rect, Path, Defs } from "react-native-svg";

type iconProps = {
  color?: string;
  size?: string;
};

export function BackArrow({ color = "#000", size = "30" }: iconProps) {
  return (
    <Svg height={size} width={size} viewBox="0 -960 960 960">
      <Path
        fill={color}
        d="M561-240 320-481l241-241 43 43-198 198 198 198-43 43Z"
      />
    </Svg>
  );
}

export function SearchIcon({ color = "#000", size = "30" }: iconProps) {
  return (
    <Svg height={size} viewBox="0 -960 960 960" width={size}>
      <Path
        fill={color}
        d="M796-121 533-384q-30 26-69.959 40.5T378-329q-108.162 0-183.081-75Q120-479 120-585t75-181q75-75 181.5-75t181 75Q632-691 632-584.85 632-542 618-502q-14 40-42 75l264 262-44 44ZM377-389q81.25 0 138.125-57.5T572-585q0-81-56.875-138.5T377-781q-82.083 0-139.542 57.5Q180-666 180-585t57.458 138.5Q294.917-389 377-389Z"
      />
    </Svg>
  );
}

export function ClockIcon({ color = "#000", size = "30" }: iconProps) {
  return (
    <Svg height={size} viewBox="0 -960 960 960" width={size} fill={color}>
      <Path d="m627-287 45-45-159-160v-201h-60v225l174 181ZM480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-82 31.5-155t86-127.5Q252-817 325-848.5T480-880q82 0 155 31.5t127.5 86Q817-708 848.5-635T880-480q0 82-31.5 155t-86 127.5Q708-143 635-111.5T480-80Zm0-400Zm0 340q140 0 240-100t100-240q0-140-100-240T480-820q-140 0-240 100T140-480q0 140 100 240t240 100Z" />
    </Svg>
  );
}

export function FireIcon({ color = "#000", size = "30" }: iconProps) {
  return (
    <Svg height={size} width={size} viewBox="0 0 11 13" fill="none">
      <Path
        id="Vector"
        d="M8.34996 6.11746C8.5354 5.93372 8.68612 5.7634 8.85868 5.6189C9.0676 5.44063 9.28852 5.27693 9.52003 5.12897C9.81795 4.94242 10.0587 5.03611 10.1459 5.3812C10.2672 5.86011 10.3643 6.34531 10.4601 6.83017C10.6393 7.74 10.6833 8.64894 10.382 9.54468C9.83936 11.158 8.74129 12.1823 7.08491 12.5833C6.46162 12.7349 5.83076 12.8535 5.19494 12.9386C2.00268 13.3617 0.245856 10.8601 0.0502627 8.90148C-0.0963908 7.43393 0.36374 6.14263 1.16634 4.97292C1.69244 4.20615 2.35302 3.53171 2.94857 2.81197C3.31032 2.37477 3.67858 1.9416 4.01443 1.48499C4.27832 1.12619 4.39863 0.699508 4.47468 0.260613C4.49212 0.158603 4.54745 0.0669208 4.6296 0.00387385C4.66818 -0.0205673 4.78943 0.076699 4.86868 0.126132C5.00067 0.208373 5.12864 0.297109 5.25904 0.381937C6.73274 1.34043 7.61955 2.71002 8.04221 4.39134C8.16682 4.88677 8.2264 5.39871 8.31552 5.90306C8.32588 5.96218 8.33453 6.02185 8.34996 6.11746ZM4.88003 0.677818C4.74164 1.44898 4.37156 2.06634 3.90725 2.63201C3.45934 3.17792 3.00004 3.71442 2.54349 4.25317C1.81959 5.10735 1.2489 6.04067 0.913869 7.12214C0.169249 9.52581 1.74056 12.5312 4.90753 12.3269C5.76453 12.2718 6.61811 12.2654 7.42259 11.8636C8.7161 11.2177 9.59132 10.2605 9.89629 8.82624C10.1173 7.78701 9.8072 6.8005 9.61172 5.7601C9.07927 6.17846 8.6784 6.64086 8.44547 7.23725C8.39886 7.35654 8.35861 7.47908 8.30256 7.59384C8.23169 7.73884 8.11121 7.82174 7.9451 7.78783C7.76191 7.75035 7.6945 7.61377 7.70079 7.44032C7.7074 7.25717 7.72708 7.07458 7.73711 6.89154C7.82573 5.27282 7.47372 3.7606 6.61662 2.37825C6.18703 1.67705 5.59045 1.09289 4.88003 0.677818Z"
        fill={color}
      />
      <Path
        id="Vector_2"
        d="M10.3273 0.625099C10.3924 0.820683 10.4561 1.01682 10.5233 1.21174C10.6626 1.61624 10.8484 2.01087 10.9353 2.4262C11.1139 3.27999 10.6662 3.95103 9.82757 4.17177C9.54418 4.24625 9.34685 4.13984 9.24021 3.87005C9.1936 3.75346 9.13415 3.64242 9.06295 3.53899C8.60657 2.87457 8.49783 2.18604 8.87628 1.44405C9.1224 0.961447 9.48397 0.574295 9.86351 0.202008C9.93346 0.133472 10.0931 0.0886064 10.1773 0.120975C10.2636 0.154003 10.3216 0.289747 10.3663 0.391751C10.3933 0.45324 10.3713 0.536147 10.3713 0.609415L10.3273 0.625099ZM9.79189 1.04346C9.16211 1.66115 8.79097 2.63302 9.61689 3.51851C10.132 3.36411 10.3311 3.06481 10.2871 2.54378C10.2414 2.00338 9.99753 1.53257 9.79189 1.04357V1.04346Z"
        fill={color}
      />
      <Path
        id="Vector_3"
        d="M5.83335 7.91259C5.9735 7.58098 6.10246 7.27998 6.22784 6.97744C6.29442 6.81676 6.38028 6.67958 6.57725 6.67468C6.75796 6.67039 6.85943 6.78714 6.93763 6.92999C7.32078 7.62981 7.68804 8.33821 7.85277 9.12676C8.12993 10.453 7.30788 11.7104 5.99328 12.0271C5.08983 12.2447 4.23597 12.1 3.43304 11.6873C2.51586 11.2159 2.10709 10.387 2.04807 9.39808C1.93525 7.50562 3.18801 5.59244 4.96031 4.88689C5.09638 4.83273 5.22656 4.75522 5.36737 4.72434C5.48156 4.69929 5.6491 4.6824 5.71772 4.7446C5.76099 4.79335 5.79349 4.85066 5.8131 4.91279C5.8327 4.97492 5.83899 5.04048 5.83153 5.10521C5.79775 5.33855 5.70565 5.56304 5.64414 5.79292C5.42607 6.61181 5.47754 7.23368 5.83335 7.91259ZM5.04788 5.43054C5.00237 5.44762 4.95775 5.46696 4.91418 5.48851C3.52089 6.24641 2.83601 7.4786 2.68764 8.99903C2.5589 10.3161 3.38983 11.3229 4.69192 11.5807C4.75405 11.5968 4.81903 11.5984 4.88188 11.5855C5.29418 11.4655 5.71326 11.3616 6.11326 11.2085C6.88147 10.9145 7.3092 10.1479 7.19214 9.33828C7.10303 8.72326 6.84868 8.16674 6.58111 7.61494C6.5756 7.60393 6.55085 7.60272 6.48345 7.57796C6.39014 7.89437 6.2872 8.20429 6.20911 8.52029C6.14148 8.79413 5.8819 8.90794 5.65246 8.74121C5.6006 8.7033 5.55569 8.65675 5.5197 8.60357C5.16699 8.07729 4.91011 7.50661 4.91237 6.86718C4.91402 6.39663 4.99801 5.92657 5.04788 5.43065V5.43054Z"
        fill={color}
      />
    </Svg>
  );
}

export function HeartIcon({ color = "#000", size = "30" }: iconProps) {
  return (
    <Svg height={size} viewBox="0 -960 960 960" width={size}>
      <Path
        fill={color}
        stroke={color}
        d="m480-121-41-37q-105.768-97.121-174.884-167.561Q195-396 154-451.5T96.5-552Q80-597 80-643q0-90.155 60.5-150.577Q201-854 290-854q57 0 105.5 27t84.5 78q42-54 89-79.5T670-854q89 0 149.5 60.423Q880-733.155 880-643q0 46-16.5 91T806-451.5Q765-396 695.884-325.561 626.768-255.121 521-158l-41 37Zm0-79q101.236-92.995 166.618-159.498Q712-426 750.5-476t54-89.135q15.5-39.136 15.5-77.72Q820-709 778-751.5T670.225-794q-51.524 0-95.375 31.5Q531-731 504-674h-49q-26-56-69.85-88-43.851-32-95.375-32Q224-794 182-751.5t-42 108.816Q140-604 155.5-564.5t54 90Q248-424 314-358t166 158Zm0-297Z"
      />
    </Svg>
  );
}
