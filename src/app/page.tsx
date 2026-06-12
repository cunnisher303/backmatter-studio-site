const CONTACT = "mailto:hello@backmatterstudio.com";
const PORTFOLIO = "https://www.darktrinitychronicles.com";

const deliverables = [
  {
    title: "Author Website",
    body: "Home, Books, About, and a reader-magnet page that turns visitors into subscribers. Series-aware, genre-styled, fast — and yours. You own the code, the domain, and the list.",
  },
  {
    title: "Email Engine",
    body: "Kit (ConvertKit) configured, signup forms wired, and a 3-email welcome sequence written for you. The readers your ads buy become readers you own.",
  },
  {
    title: "Smart Link Hub",
    body: "Replaces your Linktree with a page that captures emails while it routes readers to every retailer. Your bio link finally earns its keep.",
  },
  {
    title: "Discord Community",
    body: "Channels, roles, and a welcome flow ready for your readers — the gathering hall where casual readers become superfans. Optional, included.",
  },
  {
    title: "Book SEO",
    body: "Schema markup for your books and series, per-book social cards, and the technical foundation that helps your name surface in search.",
  },
  {
    title: "Back-Matter Links",
    body: "A copy-paste link block for the back of your books — so every reader who finishes chapter one is one click from your list. The highest-ROI page in publishing.",
  },
];

const steps = [
  {
    n: "1",
    title: "Deposit + intake",
    body: "A 50% deposit locks your slot. The intake form takes you ~30 minutes — your books, links, and taste.",
  },
  {
    n: "2",
    title: "Days 1–4: the build",
    body: "You'll see a live preview link by day 3. One consolidated revision round included.",
  },
  {
    n: "3",
    title: "Day 5: launch",
    body: "Your domain goes live, everything transfers to your accounts, and you get a recorded walkthrough so you're never stuck.",
  },
];

const faqs = [
  {
    q: "Why you and not a web designer?",
    a: "A web designer has never stared at a KDP dashboard. I have. Every choice on your site exists to do one thing: turn a stranger who clicked your ad into a subscriber who buys your next release on day one. My own series site is the demo — go click around it.",
  },
  {
    q: "I could build this myself on Squarespace.",
    a: "You absolutely can. Honest math, though: 30–40 hours of your writing time, $200+/year forever, and the funnel parts — welcome sequence, magnet delivery, capture-first link hub — are the bits the DIY guides skip. What's your writing time worth?",
  },
  {
    q: "Do you guarantee sales?",
    a: "No — and run from anyone who says yes. I guarantee the scope, the timeline, and that every visitor your ads buy gets asked onto your email list. The list is the asset; sales follow your next launch email.",
  },
  {
    q: "Who owns everything afterward?",
    a: "You do. The code, the domain, the email list, the Discord — all under your accounts from launch day. No hosting hostage fees, no $99/month maintenance plan you're trapped in.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-black/60 border-b border-gold/15">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between">
          <div className="font-display text-bone text-sm tracking-[0.25em]">
            BACKMATTER <span className="text-gold">STUDIO</span>
          </div>
          <a
            href={CONTACT + "?subject=Free%20Platform%20Audit"}
            className="btn-ghost px-5 py-2 font-display tracking-widest text-[11px] rounded-sm"
          >
            FREE AUDIT
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="px-6 pt-24 pb-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl text-bone leading-tight">
            Your book deserves more than a <span className="text-gold-bright">Linktree</span>.
          </h1>
          <p className="serif italic text-bone/85 text-lg md:text-xl mt-8 leading-relaxed">
            You&apos;re spending real money on covers, editing, and ads — and your hard-won clicks land
            on a list of links. No email capture. No brand. No reason to remember you.
          </p>
          <p className="serif text-bone/85 text-lg mt-6 leading-relaxed">
            I&apos;m a published dark-fantasy author. I built my own series platform — website, email
            list, Discord, the works — and now I build them for other authors.{" "}
            <span className="text-gold-bright">In 5 days. At a fixed price. No agency games.</span>
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTACT + "?subject=Launch%20Kit%20slot"}
              className="btn-primary px-8 py-4 font-display tracking-widest text-xs rounded-sm"
            >
              BOOK YOUR SLOT
            </a>
            <a
              href={PORTFOLIO}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost px-8 py-4 font-display tracking-widest text-xs rounded-sm"
            >
              SEE MY OWN SITE
            </a>
          </div>
          <p className="text-muted text-xs mt-6 tracking-wide">
            Founding rate: $497 for the first 3 authors · standard $1,250
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="px-6 py-20 border-t border-gold/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-bone text-center flourish">
            A COMPLETE READER FUNNEL — NOT JUST A WEBSITE
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {deliverables.map((d) => (
              <div key={d.title} className="card rounded-sm p-6">
                <h3 className="font-display text-gold tracking-widest text-sm">{d.title.toUpperCase()}</h3>
                <p className="serif text-bone/80 mt-3 leading-relaxed">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20 border-t border-gold/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-bone text-center flourish">HOW IT WORKS</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="font-display text-gold-bright text-4xl">{s.n}</div>
                <h3 className="font-display text-bone tracking-widest text-sm mt-3">{s.title.toUpperCase()}</h3>
                <p className="serif text-bone/75 mt-3 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-muted text-xs mt-12 tracking-wide">
            Fixed scope · one revision round · your content due by day 2 or the clock pauses · you own
            all accounts and code from day one
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20 border-t border-gold/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-bone text-center flourish">PRICING</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="card rounded-sm p-8 flex flex-col">
              <h3 className="font-display text-gold tracking-widest text-sm">AUTHOR LAUNCH KIT</h3>
              <div className="font-display text-bone text-4xl mt-4">$497</div>
              <p className="text-muted text-xs mt-1">founding rate · standard $1,250</p>
              <p className="serif text-bone/80 mt-4 leading-relaxed flex-1">
                Everything above, live in 5 days. The first 3 authors get the founding rate in
                exchange for an honest testimonial.
              </p>
              <a
                href={CONTACT + "?subject=Launch%20Kit%20slot"}
                className="btn-primary mt-6 px-6 py-3 font-display tracking-widest text-xs rounded-sm text-center"
              >
                BOOK YOUR SLOT
              </a>
            </div>
            <div className="card rounded-sm p-8 flex flex-col">
              <h3 className="font-display text-gold tracking-widest text-sm">STORY-WORLD EDITION</h3>
              <div className="font-display text-bone text-4xl mt-4">$1,500</div>
              <p className="text-muted text-xs mt-1">founding rate · standard $2,500</p>
              <p className="serif text-bone/80 mt-4 leading-relaxed flex-1">
                The Launch Kit plus the deep end: character profiles, lore pages, a series timeline,
                and a book trailer. For authors with rich worlds — fantasy, sci-fi, romantasy.
              </p>
              <a
                href={CONTACT + "?subject=Story-World%20Edition"}
                className="btn-ghost mt-6 px-6 py-3 font-display tracking-widest text-xs rounded-sm text-center"
              >
                ASK ABOUT THIS
              </a>
            </div>
            <div className="card rounded-sm p-8 flex flex-col">
              <h3 className="font-display text-gold tracking-widest text-sm">CONTENT ENGINE</h3>
              <div className="font-display text-bone text-4xl mt-4">
                $350<span className="text-lg text-muted">/mo</span>
              </div>
              <p className="text-muted text-xs mt-1">founding rate · cancel anytime</p>
              <p className="serif text-bone/80 mt-4 leading-relaxed flex-1">
                After launch, I keep your platform fed — quote cards, character spotlights, Shorts
                scripts, and your newsletter, all mined from your actual manuscript.
              </p>
              <a
                href={CONTACT + "?subject=Content%20Engine"}
                className="btn-ghost mt-6 px-6 py-3 font-display tracking-widest text-xs rounded-sm text-center"
              >
                ASK ABOUT THIS
              </a>
            </div>
          </div>
          <p className="text-center text-muted text-xs mt-10 tracking-wide">
            50% deposit to start · balance at launch · no hourly, ever
          </p>
        </div>
      </section>

      {/* Free audit */}
      <section className="px-6 py-20 border-t border-gold/10 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-bone flourish">NOT READY? START FREE.</h2>
          <p className="serif italic text-bone/85 text-lg mt-10 leading-relaxed">
            I&apos;ll run a free 15-point audit of your author platform — where your ad clicks leak,
            what your Amazon page is missing, what your link hub fails to capture. You get it either
            way, including a fix you can do yourself today. No strings.
          </p>
          <a
            href={CONTACT + "?subject=Free%20Platform%20Audit&body=Pen%20name%3A%0AAmazon%20author%20page%20or%20book%20link%3A%0ACurrent%20website%20or%20Linktree%20(if%20any)%3A"}
            className="btn-primary inline-block mt-10 px-8 py-4 font-display tracking-widest text-xs rounded-sm"
          >
            GET YOUR FREE AUDIT
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 border-t border-gold/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl text-bone text-center flourish">HONEST ANSWERS</h2>
          <div className="mt-16 space-y-10">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-gold tracking-wider text-sm">{f.q.toUpperCase()}</h3>
                <p className="serif text-bone/80 mt-3 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gold/15 bg-black/50">
        <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-bone text-xs tracking-[0.25em]">
            BACKMATTER <span className="text-gold">STUDIO</span>
          </div>
          <div className="text-xs text-muted flex items-center gap-4">
            <a href={CONTACT} className="hover:text-gold-bright">hello@backmatterstudio.com</a>
            <a href={PORTFOLIO} target="_blank" rel="noreferrer" className="hover:text-gold-bright">
              The portfolio: Dark Trinity Chronicles
            </a>
          </div>
          <div className="text-xs text-muted">© {new Date().getFullYear()} Backmatter Studio</div>
        </div>
      </footer>
    </div>
  );
}
