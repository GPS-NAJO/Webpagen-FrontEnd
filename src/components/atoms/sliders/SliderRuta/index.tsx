import { Slider, Typography } from "@mui/material";
import { useState } from "react";
import { RiCarWashingFill } from "react-icons/ri";
import { GpsJson } from "../../../api/getCoordinates";
import Calendar from "../../../molecules/Calendar";
import { Filter } from "../../../molecules/MapHistorics";
import styles from "./styles.module.css";

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
    <div className={styles.sliderandtextcontainer}>
      <div className={styles.idandbuttoncontainer}>
        <div className={styles.idhistoricos}>
          <RiCarWashingFill
            style={{ color: "black", fontSize: "4rem", paddingRight: "1rem" }}
          />
          <span>{id}</span>
          <a></a>
        </div>
      </div>
      <p>Elige la fecha y conoce la ruta</p>
      <Calendar filter={filter} setFilter={setFilter} />
      <p>Elige la ubicación y conoce su frecuencia</p>
      <Typography
        className={styles.Typography}
        style={{ fontSize: "16px", color: "white", marginTop: "18px" }}
      >
        Storage: {coordSelect?.timestamp}
      </Typography>

      <Slider
        size="medium"
        color="secondary"
        value={filter.pointSelected}
        min={0}
        step={1}
        max={data?.length ?? 0}
        aria-labelledby="non-linear-slider"
        onChange={(event, dato) => {
          setFilter((prev) => ({ ...prev, pointSelected: dato as number }));
        }}
        style={{ marginTop: "16px" }}
      />
      <p>Ajusta el zoom para más precisión</p>
      <Slider
        size="medium"
        color="secondary"
        value={filter.pointSelected}
        min={0}
        step={1}
        max={data?.length ?? 0}
        aria-labelledby="non-linear-slider"
        onChange={(event, dato) => {
          setFilter((prev) => ({ ...prev, pointSelected: dato as number }));
        }}
      />
      <br />
    </div>
  );
}
export default SliderRuta;
