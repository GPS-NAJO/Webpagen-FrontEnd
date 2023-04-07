import { Slider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import getCoordinates, { GpsJson } from "../../../api/getCoordinates";
import "../../../pages/Historics/index.css";
import { RiCarWashingFill } from "react-icons/ri";
import { GiCardExchange } from "react-icons/gi";
import { color } from "@mui/system";
import { Filter } from "../../../molecules/MapHistorics";
import Calendar from "../../../molecules/Calendar";

type sliderProps = {
  data?: GpsJson[] | null;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  filter: Filter;
};

function SliderRuta({ data, filter, setFilter }: sliderProps) {
  const [routes, setRoutes] = useState<GpsJson[]>([]);

  const id = data?.[0]?.id;

  const coordSelect = data?.find(
    (item, index) => index === filter.pointSelected
  );

  return (
    <div className="sliderandtextcontainer">
      <div className="idandbuttoncontainer">
        <div className="idhistoricos">
          <RiCarWashingFill
            style={{ color: "black", fontSize: "1.5rem", paddingRight: "1rem" }}
          />
          <span>{id}</span>
          <a></a>
        </div>
      </div>
      <Calendar />
      <Slider
        size="medium"
        color="secondary"
        value={filter.pointSelected}
        min={0}
        step={1}
        max={data?.length ?? 0}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
        onChange={(event, dato) => {
          setFilter((prev) => ({ ...prev, pointSelected: dato as number }));
        }}
      />
      <br />
      <Typography id="non-linear-slider">
        Storage: {coordSelect?.timestamp}
      </Typography>
    </div>
  );
}
export default SliderRuta;
