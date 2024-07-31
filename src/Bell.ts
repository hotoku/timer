import { ringBell } from "./utils";

class Bell {
  nextSchdule: number | null;
  running: boolean;
  intervals: number[];
  pos: number;
  constructor(running: boolean = false, intervals: number[] = [1]) {
    this.nextSchdule = null;
    this.running = running;
    this.intervals = intervals;
    this.pos = 0;
  }
  loop() {
    if (this.running) {
      ringBell();
      const interval = this.intervals[this.pos];
      this.pos += 1;
      this.pos %= this.intervals.length;
      this.nextSchdule = window.setTimeout(() => {
        this.loop();
      }, interval * 1000);
    }
  }
  start(): Bell {
    if (this.running) {
      return this;
    } else {
      const ret = new Bell(true, this.intervals);
      ret.loop();
      return ret;
    }
  }
  stop(): Bell {
    if (!this.running) {
      return this;
    } else {
      if (this.nextSchdule) {
        window.clearTimeout(this.nextSchdule);
      }
      return new Bell(false, this.intervals);
    }
  }
}
export default Bell;
