export default function Home() {
  const faqs = [
    {
      q: 'How does the retry optimizer work?',
      a: 'It connects to your Stripe account via webhooks, analyzes historical payment failure patterns, and uses ML-based timing algorithms to schedule retries at the moment most likely to succeed for each customer.'
    },
    {
      q: 'Will it interfere with my existing Stripe setup?',
      a: 'No. It works alongside your current Stripe configuration and only adjusts retry schedules via the Stripe API — no changes to your billing logic or codebase required.'
    },
    {
      q: 'What kind of recovery improvement can I expect?',
      a: 'SaaS companies typically see a 20–40% improvement in failed payment recovery rates within the first billing cycle after connecting their Stripe account.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Stripe Billing Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop Losing Revenue to<br />
          <span className="text-[#58a6ff]">Failed Payments</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Automatically optimize Stripe retry timing using real payment failure data. Recover more revenue without spamming your customers.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Recovering Revenue — $19/mo
        </a>
        <div className="mt-8 flex justify-center gap-8 text-sm text-[#8b949e]">
          <span>✓ Stripe webhook integration</span>
          <span>✓ ML retry timing</span>
          <span>✓ Real-time analytics</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Stripe webhook listener &amp; dashboard</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> ML-optimized retry scheduling</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Recovery rate analytics</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Automatic Stripe API updates</li>
            <li className="flex items-start gap-2"><span className="text-[#58a6ff] mt-0.5">✓</span> Email alerts on recovery events</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-20 text-center text-[#484f58] text-xs">
        &copy; {new Date().getFullYear()} Stripe Retry Optimizer. All rights reserved.
      </footer>
    </main>
  )
}
