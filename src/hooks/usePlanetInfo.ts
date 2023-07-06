import axios from "axios";
import { useEffect, useState } from "react";
import { planet } from "../interface/planet";

export const usePlanetInfo = (name: string ) => {
  const [planetInfo, setPlanetInfo] = useState<planet | null>(null);
  useEffect(() => {
    axios.get(`http://localhost:8080/planet/filter/${name}`)
  }, [name]);
  return planetInfo;
}