import { useEffect, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { DateCard, EventCardMobile } from "src/components";
import { XIcon } from "src/assets";
import { Event } from "src/types";
import Icon from "../Icon/Icon";

export default function List({ events }: { events: Event[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [selectedIndex]);

  return (
    <LayoutGroup>
      <ul className="w-full p-10 flex flex-col gap-6">
        {events.map((event, index: number) => (
          <EventCardMobile
            id={event.id_event}
            key={event.id_event}
            {...event}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </ul>
      <AnimatePresence>
        {selectedIndex !== null && (
          <>
            <motion.div
              key="backdrop"
              className="fixed top-0 left-0 w-full h-full bg-black/80 z-40 cursor-pointer"
              onClick={() => setSelectedIndex(null)}
              variants={{
                hidden: {
                  opacity: 0,
                  transition: {
                    duration: 0.16,
                  },
                },
                visible: {
                  opacity: 0.8,
                  transition: {
                    delay: 0.04,
                    duration: 0.2,
                  },
                },
              }}
              initial="hidden"
              exit="hidden"
              animate="visible"
            />
            <motion.div
              className="fixed z-50 top-0 left-0 flex w-full h-full place-content-center place-items-center pointer-events-none pt-20 p-10"
              key="modal"
            >
              <motion.div
                className="relative overflow-hidden w-full bg-grayBackground shadow-lg pointer-events-auto will-change-transform rounded-xl z-50"
                layoutId={selectedIndex.toString()}
              >
                <img src={events[selectedIndex].photo}></img>
                <div className="flex flex-col gap-1 p-6 font-monteserrat text-gray-100">
                  <DateCard date={new Date(events[selectedIndex].date)} />
                  <p className="text-xl font-bold">
                    {events[selectedIndex].name}
                  </p>
                  {events[selectedIndex].description}
                </div>
                <motion.button
                  className="absolute top-0 right-0 mt-4 mr-4 p-1 w-8 h-8 cursor-pointer bg-gray-100 rounded-full"
                  onClick={() => setSelectedIndex(null)}
                >
                  <Icon Image={XIcon} alt="fechar"></Icon>
                </motion.button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
