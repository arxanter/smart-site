import { YMaps, Map, Placemark } from 'react-yandex-maps';

export default function YaMap() {
  return (
    <YMaps>
      <Map defaultState={{ center: [55.75, 37.57], zoom: 9, controls: ['zoomControl'] }} />
      <Placemark geometry={[55.75, 37.57]} />
    </YMaps>
  );
}
