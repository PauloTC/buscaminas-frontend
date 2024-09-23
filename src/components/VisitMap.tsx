import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

const VisitMap = () => {
  return (
    <div className='dl-rounded-lg dl-overflow-hidden dl-mb-8'>
      <APIProvider apiKey="AIzaSyAKZO7_5SojvI4AJby2A1xsDrunnBnPfA4">
        <Map
          mapId="bf51a910020fa25a"
          style={{ width: "100%", height: "180px" }}
          defaultCenter={{ lat: -12.130596, lng: -77.020595 }}
          defaultZoom={16}
          disableDefaultUI={true}
        >
        <AdvancedMarker position={{ lat: -12.130596, lng: -77.020595 }}>
          <Pin
            background='#6C6C6C'
            borderColor='#6C6C6C'
            glyphColor={"#FFF"}
            scale={1.2}
          >
            <div
              className="
                dl-flex
                dl-items-center
                dl-justify-center
                dl-font-bold
                dl-rounded-full
                dl-bg-white
                dl-text-black
                dl-w-4
                dl-h-4
              "
            >
              1
            </div>
          </Pin>
        </AdvancedMarker>
        </Map>
      </APIProvider>
    </div>
  );
};

export default VisitMap;