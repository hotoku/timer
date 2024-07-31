import { ringBell } from "./utils";

class Bell {
  nextSchdule: number | null;
  running: boolean;
  intervals: number[];
  pos: number;
  constructor(s: number[] = [1]) {
    this.nextSchdule = null;
    this.running = false;
    this.intervals = s;
    this.pos = 0;
  }
  loop() {
    if (this.running) {
      ringBell();
      const interval = this.intervals[this.pos];
      console.log("interval", interval);
      this.pos += 1;
      this.pos %= this.intervals.length;
      this.nextSchdule = window.setTimeout(() => {
        this.loop();
      }, interval * 1000);
    }
  }
  start() {
    console.log("start");
    if (!this.running) {
      this.running = true;
      this.loop();
    }
  }
  stop() {
    this.running = false;
    if (this.nextSchdule) {
      window.clearTimeout(this.nextSchdule);
    }
  }
}
export default Bell;
