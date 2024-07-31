import { ringBell } from "./utils";

class Bell {
  nextSchdule: number | null;
  running: boolean;
  schedule: number[];
  constructor(s: number[] = [1]) {
    this.nextSchdule = null;
    this.running = false;
    this.schedule = s;
  }
  loop() {
    if (this.running) {
      ringBell();
      this.nextSchdule = window.setTimeout(() => {
        this.loop();
      }, 1000);
    }
  }
  start() {
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
