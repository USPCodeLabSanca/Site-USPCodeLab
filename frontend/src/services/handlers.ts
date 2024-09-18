import { fetchAPI } from "./fetchAPI";

const Handlers = {
  getTechnologies: async () => { return await fetchAPI("technology") },
  getGroups: async () => { return await fetchAPI("group") },
  getEvents: async () => { return await fetchAPI("event") },
  getProjects: async () => { return await fetchAPI("project")},
}

export default Handlers;