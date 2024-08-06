import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import Handlers from "src/services/handlers";
import { Event, Group, Project } from "src/types";

interface Value {
  groups: Group[];
  events: Event[];
  projects: Project[];
  loading: boolean;
}

interface Props {
  children: React.ReactNode[] | React.ReactNode;
}

const DataContext = createContext({} as Value);

export function DataProvider({ children }: Props) {
  const [groups, setGroups] = useState([]);
  const [events, setEvents] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAll = async () => {
    try {
      const groups = await Handlers.getGroups();
      const events = await Handlers.getEvents();
      const projects = await Handlers.getProjects();

      setGroups(groups);
      setEvents(events);
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <DataContext.Provider
      value={{
        groups,
        events,
        projects,
        loading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
