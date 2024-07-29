import axios from "axios";
import { PlaceData } from "../types";

// base url'e sahip bir axios isteği oluşturduk
const api = axios.create({ baseURL: "http://localhost:4001" });

export type Params = {
  location: string;
  title: string;
  order: string;
};

// bütün konklama yerlerini getiren
export const getPlaces = (params: Params) =>
  api.get("/api/places", { params }).then((res) => res.data.places);

// 1 konaklama yerini getir.
export const getPlace = (id: string) =>
  api.get(`/api/place/${id}`).then((res) => res.data.place);

// 1 konaklama yerini sil.
export const deletePlace = (id: number) => api.delete(`/api/place/${id}`);

// 1 konaklama yeri oluştur.
export const createPlace = (body: PlaceData) => api.post(`/api/places/`, body);
