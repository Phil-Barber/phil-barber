import confetti from 'canvas-confetti';

export const snow: (duration?: number, skew?: number) => void = (
  duration = 15 * 1000,
  skew = 1
) => {
  const animationEnd = Date.now() + duration;
  const getTimeLeft = () => animationEnd - Date.now();

  const randomInRange = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  // Snow
  (function frame() {
    const timeLeft = getTimeLeft();
    const ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);

    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      gravity: 0.5,
      origin: {
        x: Math.random(),
        // since particles fall down, skew start toward the top
        y: Math.random() * skew - 0.2,
      },
      colors: ['#165b33', '#bb2528'],
      shapes: ['circle'],
      scalar: randomInRange(0.4, 1),
    });

    if (timeLeft > 0) {
      window.requestAnimationFrame(frame);
    }
  })();
};
