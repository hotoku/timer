export function ringBell() {
  // Create an audio context
  const audioContext = new window.AudioContext();

  // Create an oscillator node
  const oscillator = audioContext.createOscillator();

  // Set the oscillator frequency to a bell-like sound (e.g., 440 Hz)
  oscillator.frequency.setValueAtTime(440, audioContext.currentTime);

  // Connect the oscillator to the audio context's destination (the speakers)
  oscillator.connect(audioContext.destination);

  // Start the oscillator
  oscillator.start();

  // Stop the oscillator after 1 second
  setTimeout(() => {
    oscillator.stop();
  }, 300);
}
