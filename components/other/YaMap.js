import { YMaps, Map, Placemark, ZoomControl } from 'react-yandex-maps';

export default function YaMap() {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [55.892385, 37.753748], zoom: 16, controls: [] }}
        style={{ width: '800px', height: '400px', margin: '0 auto' }}
      >
        <ZoomControl options={{ position: { right: 10, top: 20 } }} />
        <Placemark geometry={[55.892385, 37.753748]} />
      </Map>
    </YMaps>
  );
}
