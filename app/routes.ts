import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("countris", "routes/countris.tsx"), 
    route("countris/:countryName", "routes/country.tsx")
] satisfies RouteConfig;
