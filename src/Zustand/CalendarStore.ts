
import dayjs, { Dayjs } from "dayjs";

import {create} from "zustand";

interface WCState {
  today: {
    date: number,
    month: number,
    quarter: number,
    year: number,
  }
  startTime: Dayjs | null;
  endTime: Dayjs | null;
}
interface WCAction {
  setStartTime : (timeSet: WCState['startTime']) => void;
  setEndTime : (timeSet: WCState['startTime']) => void
}

export const WCPageStore = create<WCState & WCAction>()(
  (set) => ({
    // initial state for today
    today: {
      date: dayjs().date(),
      month: dayjs().month() + 1,
      quarter: Math.ceil((dayjs().month() + 1) / 3),
      year: dayjs().year()
    },

    // initial state for startTime
    startTime: null,
    setStartTime: (timeSet: WCState['startTime']) => set((_state) => ({
      startTime: timeSet
    })),

    // initial state for endTime
    endTime: null,
    setEndTime: (timeSet: WCState['endTime']) => set((_state) => ({
      endTime: timeSet
    })),
  })

);
