import L, { LatLngTuple, marker } from "leaflet";
import { useState } from "react";
import { FC } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";
import { getMapFetcher } from "../../../api/api";
import { GameDogAndSocialIconsHeader } from "../GameDogAndSocialIconsHeader";
import useSWR from "swr";
import { GameFooter } from "../GameFooter";

export const LitteroMapPost: FC = () => {

  const ApiUrl = "http://localhost:1337";

  const [selectedMarkerId, setSelectedMarkerId] = useState(0);
  const params = useParams();

  const { data } = useSWR(`/maps/${params.slug}?populate=*`, getMapFetcher);
  if (!data) {
    return null
  }

  const markers = data.attributes.markers.data;
  const selectedMarker = markers.find(marker => marker.id === selectedMarkerId);

  console.log(data.attributes, '2222');

  function createMarkup(html: string) {
    const htmlContent = { __html: html };
    const re = /<img src="/gm
    const newStr = htmlContent.__html.replace(re, `<img src="${ApiUrl}`)
    const htmlContentRender = { __html: newStr };
    return htmlContentRender
  }

  // Markers
  const getMarkerIcon = (label: string) => {
    return new L.Icon({
      iconUrl: `/src/assets/pins/${label}.png`,
      iconSize: [40, 65]
    })
  }

  return <div>
    <GameDogAndSocialIconsHeader />
    <div className="mt-10 mx-4 mb-6">
      <div className="text-center mb-4">
        <h1 className="font-sobakaisti mb-10 text-3xl">{data.attributes.title}</h1>
      </div>
      <MapContainer center={[data.attributes.map_lang, data.attributes.map_lat] as LatLngTuple} zoom={data.attributes.zoom} style={{ height: '500px', width: '100%' }} scrollWheelZoom={false}>
        <TileLayer
          url="https://api.maptiler.com/maps/ch-swisstopo-lbm-grey/256/{z}/{x}/{y}.png?key=IX8Rit9fZTJbMqx2YUEw"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a> © swisstopo <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a> <a href="https://www.swisstopo.admin.ch/en/home.html" target="_blank">&copy; swisstopo</a>'
        />
        {markers.map(marker =>
          <Marker eventHandlers={{
            click: (e) => {
              setSelectedMarkerId(marker.id)
            },
          }} key={marker.id} icon={getMarkerIcon(marker.attributes.marker_type)} position={[marker.attributes.marker_lat, marker.attributes.marker_lang]}>
            <Popup><h1>{marker.attributes.title}</h1></Popup>
          </Marker>
        )}
      </MapContainer>
      {selectedMarker === undefined && <div className="mt-8" dangerouslySetInnerHTML={createMarkup(data.attributes.content)} />}
      {selectedMarker !== undefined && <div className="pt-8" dangerouslySetInnerHTML={createMarkup(selectedMarker.attributes.about)} />}
    </div>
    <GameFooter />
  </div>
};
