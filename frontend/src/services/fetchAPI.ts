import { BACKEND_IP } from "./backendapi";

export const fetchAPI = async (endpoint: string) => {
  try {
    const res = await fetch(`${BACKEND_IP}/api/${endpoint}`, {
      method: "GET",
    });

    const resJson = await res.json();

    if (res.status == 200) {
      return resJson;
    } else {
      console.error(res.statusText);
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};
