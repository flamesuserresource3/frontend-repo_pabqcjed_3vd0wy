import { useEffect, useMemo, useState } from "react";

function getTimeRemaining(target) {
  const total = target - new Date().getTime();
  const clamped = Math.max(0, total);
  const seconds = Math.floor((clamped / 1000) % 60);
  const minutes = Math.floor((clamped / 1000 / 60) % 60);
  const hours = Math.floor((clamped / (1000 * 60 * 60)) % 24);
  const days = Math.floor(clamped / (1000 * 60 * 60 * 24));
  return { total: clamped, days, hours, minutes, seconds };
}

export default function Countdown({ daysFromNow = 45 }) {
  const target = useMemo(() => {
    const now = new Date();
    return new Date(now.getTime() + daysFromNow * 24 * 60 * 60 * 1000).getTime();
  }, [daysFromNow]);

  const [time, setTime] = useState(getTimeRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const Item = ({ label, value }) => (
    <div className="flex w-20 flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-white/90 backdrop-blur sm:w-24 sm:px-4">
      <div className="text-2xl font-semibold tabular-nums sm:text-3xl">{String(value).padStart(2, "0")}</div>
      <div className="mt-1 text-[10px] uppercase tracking-widest text-white/50 sm:text-xs">{label}</div>
    </div>
  );

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 px-6 py-8 backdrop-blur sm:flex-row sm:justify-center sm:gap-8">
          <div className="text-center sm:text-left">
            <h2 className="text-lg font-semibold tracking-wide text-white">Launching soon</h2>
            <p className="mt-1 text-sm text-white/60">Sign up to be first when we drop.</p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <Item label="Days" value={time.days} />
            <span className="text-xl font-bold text-white/40 sm:text-2xl">:</span>
            <Item label="Hours" value={time.hours} />
            <span className="text-xl font-bold text-white/40 sm:text-2xl">:</span>
            <Item label="Mins" value={time.minutes} />
            <span className="text-xl font-bold text-white/40 sm:text-2xl">:</span>
            <Item label="Secs" value={time.seconds} />
          </div>
        </div>
      </div>
    </section>
  );
}
