import { motion } from "motion/react";
import { 
  Printer, 
  Menu, 
  X, 
  MessageCircle, 
  ArrowRight,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock as ClockIcon,
  CheckCircle2,
  Quote,
  Star
} from "lucide-react";
import { useState } from "react";
import { 
  SERVICES, 
  STATS, 
  STEPS, 
  FEATURED_PRODUCTS, 
  TESTIMONIALS 
} from "./constants";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-brand-paper text-brand-ink selection:bg-brand-accent selection:text-white flex items-center justify-center p-0 md:p-8">
      {/* About Us Expanded Overlay */}
      {isAboutOpen && (
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed inset-0 z-[200] bg-brand-paper flex items-center justify-center p-4 md:p-12 overflow-y-auto no-scrollbar"
        >
          <div className="relative w-full max-w-5xl bg-white border border-brand-grid shadow-2xl p-8 md:p-16">
            <div className="crop-mark crop-mark-tl" />
            <div className="crop-mark crop-mark-tr" />
            <div className="crop-mark crop-mark-bl" />
            <div className="crop-mark crop-mark-br" />

            <button 
              onClick={() => setIsAboutOpen(false)}
              className="absolute top-8 right-8 w-12 h-12 border-2 border-brand-ink flex items-center justify-center font-bold hover:bg-brand-accent hover:border-brand-accent hover:text-white transition-all active:scale-95 group"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid md:grid-cols-12 gap-12">
              <div className="md:col-span-4">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-8">09 / The Manifesto</h3>
                <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-none mb-10">
                  Why Pick <span className="text-brand-accent">Oracle?</span>
                </h2>
                <div className="flex gap-2">
                  <div className="cmyk-mark bg-[#00ffff]" />
                  <div className="cmyk-mark bg-[#ff00ff]" />
                  <div className="cmyk-mark bg-[#ffff00]" />
                  <div className="cmyk-mark bg-brand-ink" />
                </div>
              </div>

              <div className="md:col-span-8 space-y-12">
                <section>
                  <h4 className="text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-3">
                    <span className="w-6 h-6 bg-brand-ink text-white rounded-full flex items-center justify-center text-[10px]">1</span>
                    Precision as Standard
                  </h4>
                  <p className="text-xl font-light leading-relaxed text-slate-600">
                    We treat printing as an industrial craft. Our CMYK calibration ensures your brand colors look identical across every medium—from a 2-inch sticker to a 20-foot outdoor banner. In an industry where "close enough" is common, we demand absolute accuracy.
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-3">
                    <span className="w-6 h-6 bg-brand-ink text-white rounded-full flex items-center justify-center text-[10px]">2</span>
                    The 2-Hour Response Philosophy
                  </h4>
                  <p className="text-xl font-light leading-relaxed text-slate-600">
                    Your business moves fast, so we do too. We've built our entire infrastructure around a 2-hour quote turnaround. We know that behind every print request is a deadline that can't wait, and we've optimized our studio to eliminate the "waiting game."
                  </p>
                </section>

                <section>
                  <h4 className="text-sm font-black uppercase tracking-widest mb-4 flex items-center gap-3">
                    <span className="w-6 h-6 bg-brand-ink text-white rounded-full flex items-center justify-center text-[10px]">3</span>
                    15 Years of Siparia Pride
                  </h4>
                  <p className="text-xl font-light leading-relaxed text-slate-600">
                    Choosing us means supporting a 100% local workforce. We understand the Trinidadian market because we live here. We know the heat, the humidity, and its impact on materials, and we've spent 15 years testing what actually lasts in our Caribbean landscape.
                  </p>
                </section>

                <div className="pt-8 border-t border-brand-grid flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-widest opacity-40">
                  <span>Code: Quality_First</span>
                  <span>Ver: 2024.1.0</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Canvas Frame */}
      <div className="relative w-full max-w-7xl bg-white border border-brand-grid shadow-2xl overflow-hidden no-scrollbar">
        {/* Crop Marks */}
        <div className="crop-mark crop-mark-tl" />
        <div className="crop-mark crop-mark-tr" />
        <div className="crop-mark crop-mark-bl" />
        <div className="crop-mark crop-mark-br" />

        {/* Header / Nav */}
        <header className="border-b border-brand-grid flex items-center justify-between px-8 md:px-12 py-10">
          <div className="flex items-center gap-6">
            <div className="bg-brand-accent p-2.5 rounded-sm">
              <Printer className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic leading-none">Oracle in Print</h1>
              <p className="text-[10px] tracking-[0.4em] font-bold uppercase mt-2 text-brand-accent">Graphic Design & Commercial Printing Solutions</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <div className="text-right">
              <div className="text-4xl font-black tracking-tighter">4.6</div>
              <div className="flex justify-end text-brand-accent text-xs">★★★★★</div>
              <div className="text-[9px] uppercase tracking-widest font-bold opacity-30 mt-1">13 Client Reviews</div>
            </div>
            <div className="w-px h-16 bg-brand-grid" />
            <div className="text-right">
              <div className="text-xl font-mono font-bold tracking-tighter">(868) 649-1082</div>
              <div className="text-[9px] uppercase tracking-widest font-bold opacity-30 mt-1">Call for Enquiries</div>
            </div>
          </div>

          <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </header>

        {/* Global Navigation - Sub Header */}
        <nav className="border-b border-brand-grid flex items-center justify-center lg:justify-start px-12 py-4 bg-brand-offwhite">
          <div className="flex items-center gap-10">
            <a href="#services" className="nav-link">Services</a>
            <a href="#portfolio" className="nav-link">Portfolio</a>
            <button onClick={() => setIsAboutOpen(true)} className="nav-link">About Us</button>
            <a href="#testimonials" className="nav-link">Reviews</a>
          </div>
        </nav>

        {/* Mobile menu content */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:hidden bg-brand-paper p-8 border-b border-brand-grid flex flex-col gap-4"
          >
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="nav-link text-xl">Services</a>
            <a href="#portfolio" onClick={() => setIsMenuOpen(false)} className="nav-link text-xl">Portfolio</a>
            <button onClick={() => { setIsAboutOpen(true); setIsMenuOpen(false); }} className="nav-link text-xl text-left">About Us</button>
            <button className="bg-brand-accent text-white py-4 font-black uppercase tracking-widest text-xs">Get a Quote</button>
          </motion.div>
        )}

        <main className="grid grid-cols-12">
          {/* Left Column: Hero & Status */}
          <section className="col-span-12 lg:col-span-5 border-r border-brand-grid p-8 md:p-12 flex flex-col justify-between">
            <div className="space-y-16">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-8">01 / Primary Objective</h3>
                <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-8">
                  Print That Makes Your Brand <span className="text-brand-accent">Stand Out.</span>
                </h2>
                <p className="text-xl font-light leading-relaxed text-slate-600">
                  Premium printing, graphic design, and branded merchandise — delivered with speed and precision from Siparia.
                </p>
              </div>

              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-8">02 / Physical Location</h3>
                <div className="flex gap-4">
                  <div className="w-8 h-8 border-2 border-brand-ink rounded-full flex items-center justify-center text-sm font-bold shrink-0">A</div>
                  <p className="text-2xl font-light leading-tight">
                    #13 Antoine Trace Extension<br />
                    Quarry Village, Siparia<br />
                    <span className="text-xs font-mono opacity-40 uppercase tracking-widest mt-3 block">Code: 4FMC+9F SIPARIA</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-8">03 / Availability</h3>
                <div className="flex items-center gap-4 bg-brand-offwhite p-6 border border-brand-grid">
                  <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
                  <p className="text-lg font-bold">Closed <span className="text-sm font-normal opacity-40">· Opens 8:00 AM Wed</span></p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button className="bg-brand-ink text-white text-[11px] font-black uppercase tracking-[0.3em] py-6 hover:bg-brand-accent transition-colors active:scale-[0.98]">
                  Start My Quote
                </button>
                <button className="border-2 border-brand-ink text-brand-ink text-[11px] font-black uppercase tracking-[0.3em] py-6 hover:bg-brand-ink hover:text-white transition-colors active:scale-[0.98]">
                  View Portfolio
                </button>
              </div>

              {/* Printing Process Snapshots */}
              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent">04 / Process Snapshots</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="aspect-square bg-brand-offwhite border border-brand-grid overflow-hidden group">
                    <img 
                      src="https://picsum.photos/seed/printing-press/400/400" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      alt="Printing Press" 
                    />
                  </div>
                  <div className="aspect-square bg-brand-offwhite border border-brand-grid overflow-hidden group">
                    <img 
                      src="https://picsum.photos/seed/design-studio/400/400" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      alt="Design Studio" 
                    />
                  </div>
                  <div className="aspect-square bg-brand-offwhite border border-brand-grid overflow-hidden group">
                    <img 
                      src="https://picsum.photos/seed/ink-calibration/400/400" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      alt="Ink Calibration" 
                    />
                  </div>
                  <div className="aspect-square bg-brand-offwhite border border-brand-grid overflow-hidden group">
                    <img 
                      src="https://picsum.photos/seed/paper-stock/400/400" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                      alt="Paper Stock" 
                    />
                  </div>
                </div>
                <p className="text-[9px] font-bold uppercase tracking-widest opacity-40">Precision in every pass. Click to expand view.</p>
              </div>
            </div>

            <div className="flex gap-3 mt-16 opacity-40">
              <div className="cmyk-mark bg-[#00ffff]" />
              <div className="cmyk-mark bg-[#ff00ff]" />
              <div className="cmyk-mark bg-[#ffff00]" />
              <div className="cmyk-mark bg-brand-ink" />
            </div>
          </section>

          {/* Right Column: Content Sections */}
          <section className="col-span-12 lg:col-span-7 flex flex-col">
            {/* Services Grid */}
            <div id="services" className="p-8 md:p-12 border-b border-brand-grid bg-brand-offwhite">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-8">05 / Our Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brand-grid border border-brand-grid">
                {SERVICES.map((s) => (
                  <div key={s.id} className="bg-white p-8 group hover:bg-brand-ink hover:text-white transition-all">
                    <div className="w-10 h-10 border border-brand-ink flex items-center justify-center mb-6 group-hover:border-white transition-colors">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-black uppercase tracking-widest mb-2">{s.name}</h4>
                    <p className="text-xs opacity-60 leading-relaxed font-medium">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonials */}
            <div id="testimonials" className="p-8 md:p-12 border-b border-brand-grid">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-8">06 / Client Evidence</h3>
              <div className="space-y-6">
                {TESTIMONIALS.map((t, i) => (
                  <div key={i} className="bg-white p-8 border border-brand-grid relative group">
                    <div className="absolute top-0 left-0 w-1 h-0 bg-brand-accent transition-all duration-500 group-hover:h-full" />
                    <p className="text-xl font-medium italic leading-relaxed mb-6 italic">"{t.quote}"</p>
                    <div className="flex items-center gap-4 border-t border-brand-grid pt-4">
                      <div className="w-8 h-8 rounded bg-brand-ink text-white flex items-center justify-center font-bold text-[10px] transition-colors group-hover:bg-brand-accent">
                        {t.initials}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest">{t.name}</h4>
                        <p className="text-[9px] opacity-40 uppercase tracking-[0.2em]">{t.role} · Siparia</p>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-brand-accent text-brand-accent" />)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About Expansion Entry */}
            <div id="about" className="p-8 md:p-12 border-b border-brand-grid bg-white">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-8">07 / Our Philosophy</h3>
              <h2 className="text-3xl font-black uppercase italic tracking-tighter leading-none mb-6">Built on Craft, Speed, and <span className="text-brand-accent">Local Pride.</span></h2>
              <p className="text-lg font-light leading-relaxed text-slate-600 mb-8">Oracle in Print Ltd has been a cornerstone of the Siparia community for over 15 years. We started with a simple vision: combining world-class print quality with the personal touch of a local shop.</p>
              <button 
                onClick={() => setIsAboutOpen(true)}
                className="bg-brand-ink text-white text-[10px] font-black uppercase tracking-[0.3em] py-5 px-10 hover:bg-brand-accent transition-colors active:scale-[0.98]"
              >
                Detailed Manifesto: Why Choose Us?
              </button>
            </div>

            {/* Popular Products Mini Strip */}
            <div className="p-12 bg-white">
               <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-accent mb-8">08 / Featured Items</h3>
               <div className="flex flex-wrap gap-4">
                 {FEATURED_PRODUCTS.map((p) => (
                   <div key={p.id} className="flex-1 min-w-[200px] border border-brand-grid p-6 hover:border-brand-accent transition-colors">
                     <span className="text-[9px] font-bold uppercase text-brand-accent block mb-2">{p.price} / starting</span>
                     <h4 className="text-xs font-bold uppercase tracking-widest">{p.name}</h4>
                   </div>
                 ))}
               </div>
            </div>
          </section>
        </main>

        {/* Footer Bar */}
        <footer className="border-t border-brand-grid flex flex-col md:flex-row items-center justify-between px-12 py-8 bg-white text-[10px] font-black uppercase tracking-[0.3em]">
          <div className="flex gap-8 mb-6 md:mb-0">
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-400 rounded-full" /> Process: CMYK</span>
            <span className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-accent rounded-full" /> Status: High-Quality</span>
          </div>
          <div className="text-center opacity-40 mb-6 md:mb-0">
            © 2024 Oracle in Print Limited — Registered in Siparia, Trinidad
          </div>
          <div className="flex items-center gap-2 group cursor-pointer hover:text-brand-accent transition-colors">
            <div className="w-2 h-2 bg-brand-accent rounded-full" />
            <span>Customer Centered</span>
          </div>
        </footer>
      </div>

      {/* Floating WhatsApp - Styled to match theme */}
      <motion.a 
        href="https://wa.me/18686491082"
        target="_blank"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-12 right-12 z-[100] bg-brand-ink text-white p-5 border-2 border-white shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all flex items-center gap-3 group"
      >
        <MessageCircle className="w-6 h-6 group-hover:text-brand-accent transition-colors" />
        <span className="text-[10px] font-black uppercase tracking-widest">Connect Locally</span>
      </motion.a>
    </div>
  );
}
