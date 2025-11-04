import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import NotifyForm from "./components/NotifyForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <main className="relative">
        <Hero />
        <div className="mt-2">
          <Countdown daysFromNow={45} />
        </div>
        <div className="mt-8">
          <NotifyForm />
        </div>
      </main>

      <Footer />
    </div>
  );
}
