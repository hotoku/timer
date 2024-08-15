import { z } from "zod";

const Schedule = z.object({
  name: z.string(),
  intervals: z.array(z.number()),
  tones: z.array(z.number()),
});
export type Schedule = z.infer<typeof Schedule>;

const ScheduleList = z.array(Schedule);
export type ScheduleList = z.infer<typeof ScheduleList>;

const storageName = "schedules";

export function saveSchedule(schedule: Schedule): void {
  const json = localStorage.getItem(storageName);
  const schedules = json ? ScheduleList.parse(JSON.parse(json)) : [];
  const schedules2 = schedules.filter((s) => s.name !== schedule.name);
  schedules2.push(schedule);
  localStorage.setItem(storageName, JSON.stringify(schedules2));
}

export function loadSchedules(): ScheduleList {
  const json = localStorage.getItem(storageName);
  return json ? ScheduleList.parse(JSON.parse(json)) : [];
}

export function deleteSchedule(name: string): void {
  const json = localStorage.getItem(storageName);
  const schedules = json ? ScheduleList.parse(JSON.parse(json)) : [];
  const schedules2 = schedules.filter((s) => s.name !== name);
  localStorage.setItem(storageName, JSON.stringify(schedules2));
}

export function showAll(): string {
  let result = "";
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k === null) {
      continue;
    }
    result += localStorage.key(i) + " = " + localStorage.getItem(k) + "\n";
  }
  return result;
}
