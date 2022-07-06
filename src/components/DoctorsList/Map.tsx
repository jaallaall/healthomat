import Box from "@mui/material/Box";
import Image from "next/image";
import { useCallback, useState } from "react";
import MapGL, { Marker } from "react-map-gl";

const token =
  "pk.eyJ1IjoiamFhbGxhYWxsIiwiYSI6ImNsM2p3cTI2dzBpbDEzanFpcXB3NW85NmoifQ.jMGalrHWuSq8AILR8utXcg";

interface Props {
  setLatLong: (e: any) => void;
  setSelect: (e: boolean) => void;
}

const Map: React.FC<Props> = ({
  setLatLong,
  setSelect,
}): React.ReactElement => {
  const [viewport, setViewport] = useState({
    latitude: 35.6892,
    longitude: 51.389,
    zoom: 14,
  });
  const handleViewportChange = useCallback(
    (newViewport: mapboxgl.MapLayerMouseEvent) => {
      setLatLong({
        latitude: newViewport.lngLat.lat,
        longitude: newViewport.lngLat.lng,
      });
      setSelect(true);
      setViewport({
        ...viewport,
        latitude: newViewport.lngLat.lat,
        longitude: newViewport.lngLat.lng,
      });
    },
    []
  );

  return (
    <Box sx={{ borderRadius: 3, overflow: "hidden" }}>
      <MapGL
        initialViewState={viewport}
        style={{ width: "100%", height: "300px" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={token}
        onClick={handleViewportChange}
      >
        <Marker
          longitude={viewport.longitude}
          latitude={viewport.latitude}
          anchor="bottom"
        >
          <Image
            src="/images/svg/Location.svg"
            alt="loc"
            width="40"
            height="40"
          />
        </Marker>
      </MapGL>
    </Box>
  );
};

export default Map;
