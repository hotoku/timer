import { ringBell } from "./utils";

class Bell {
  nextSchdule: number | null;
  running: boolean;
  intervals: number[];
  tones: number[];
  pos: number;
  constructor(
    running: boolean = false,
    intervals: number[] = [1],
    tones: number[] = [440]
  ) {
    this.nextSchdule = null;
    this.running = running;
    this.intervals = intervals;
    this.tones = tones;
    this.pos = 0;
  }
  loop() {
    if (this.running) {
      ringBell(this.tones[this.pos]);
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
      const ret = new Bell(true, this.intervals, this.tones);
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
      return new Bell(false, this.intervals, this.tones);
    }
  }
}
export default Bell;
