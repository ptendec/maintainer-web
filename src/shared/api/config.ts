import { OpenAPI } from "../services/requests";

OpenAPI.BASE = import.meta.env.VITE_API_URL as string;
OpenAPI.CREDENTIALS = "include";
OpenAPI.WITH_CREDENTIALS = true;
