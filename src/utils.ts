export function ringBell(freq: number = 440): void {
  const audioContext = new window.AudioContext();
  const oscillator = audioContext.createOscillator();
  oscillator.frequency.setValueAtTime(freq, audioContext.currentTime);
  oscillator.connect(audioContext.destination);
  oscillator.start();
  setTimeout(() => {
    oscillator.stop();
  }, 300);
}
