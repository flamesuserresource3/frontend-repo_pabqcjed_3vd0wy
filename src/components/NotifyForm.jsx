import { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    const valid = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(email);
    if (!valid) {
      setError("Enter a valid email");
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-xl px-6">
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-6 text-center text-emerald-100">
          <div className="mx-auto mb-2 h-10 w-10 rounded-full border border-emerald-400/30 bg-emerald-500/20 p-2">
            <Mail className="h-full w-full" />
          </div>
          <p className="text-lg font-semibold">You're on the list</p>
          <p className="mt-1 text-sm text-emerald-100/80">We'll notify you when we go live.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-xl px-6">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur sm:flex-row"
      >
        <div className="relative flex-1">
          <Mail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-white/40" size={18} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full rounded-xl border border-white/10 bg-white/10 py-3 pl-10 pr-3 text-white placeholder-white/40 outline-none backdrop-blur focus:border-white/30"
          />
        </div>
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 font-semibold text-black transition-colors hover:bg-white/90"
        >
          Notify me
          <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} />
        </button>
      </form>
      {error && <p className="mt-2 pl-1 text-sm text-rose-300/90">{error}</p>}
    </div>
  );
}
