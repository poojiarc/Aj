// import { Check, Award, Shield, Clock, Heart } from "lucide-react";
// import ScrollReveal from "@/components/ScrollReveal";
// import logo from "@/assets/logo.jpg";

// const whyChooseUs = [
//   "100% branded materials – from plywood to fittings",
//   "15-year warranty on plywood",
//   "Superior quality and lasting finish",
//   "Fully customized wooden interiors",
//   "Smart space and storage-focused designs",
//   "3D design approval before execution",
//   "Transparent pricing and clear communication",
//   "Dedicated project resource from start to handover",
//   "On-time delivery with 30-day handover*",
//   "5 years of free service support",
// ];

// const About = () => {
//   return (
//     <div className="pt-20 md:pt-24">
//       {/* Hero */}
//       <section className="py-16 md:py-24 bg-gradient-dark">
//         <div className="container mx-auto px-4">
//           <ScrollReveal>
//             <div className="max-w-3xl mx-auto text-center">
//               <img src={logo} alt="AJ Interiors" className="h-20 mx-auto mb-6 rounded-lg" />
//               <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6">
//                 About <span className="text-gradient-gold">AJ Interiors</span>
//               </h1>
//               <p className="text-muted-foreground text-lg leading-relaxed">
//                 We are an experienced interior design and execution team focused on creating well-crafted, custom wooden interiors and complete home interior solutions for everyday living. With 15+ years and 300+ completed projects, we create interiors that look beautiful and feel easy to live in.
//               </p>
//               <p className="text-muted-foreground leading-relaxed mt-4">
//                 Through careful planning, quality materials, fair pricing, and smooth collaboration, we bring spaces to life that are practical, lasting, and quietly become part of your story.
//               </p>
//             </div>
//           </ScrollReveal>
//         </div>
//       </section>

//       <div className="section-divider" />

//       {/* Stats */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { icon: Award, value: "15+", label: "Years Experience" },
//               { icon: Heart, value: "300+", label: "Projects Completed" },
//               { icon: Shield, value: "100%", label: "Branded Materials" },
//               { icon: Clock, value: "5 Yrs", label: "Free Support" },
//             ].map((stat, i) => (
//               <ScrollReveal key={i} delay={i * 0.1}>
//                 <div className="text-center bg-card rounded-xl p-6 border border-border/50 glitter-border">
//                   <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
//                   <div className="text-3xl font-bold text-gradient-gold font-display">{stat.value}</div>
//                   <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
//                 </div>
//               </ScrollReveal>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="section-divider" />

//       {/* Why Choose Us */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <ScrollReveal>
//               <div>
//                 <span className="text-primary text-sm font-medium tracking-widest uppercase">Why Choose Us</span>
//                 <h2 className="font-display text-3xl md:text-4xl text-foreground mt-4 mb-8">
//                   Why Homeowners <span className="text-gradient-gold">Trust Us</span>
//                 </h2>
//                 <ul className="space-y-4">
//                   {whyChooseUs.map((item, i) => (
//                     <li key={i} className="flex items-start gap-3 text-muted-foreground">
//                       <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
//                         <Check className="w-3 h-3 text-primary" />
//                       </div>
//                       <span>{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </ScrollReveal>

//             <ScrollReveal delay={0.2}>
//               <div className="bg-card rounded-xl p-8 border border-border/50 glitter-border flex flex-col justify-center">
//                 <span className="text-primary text-sm font-medium tracking-widest uppercase">Our Promise</span>
//                 <h2 className="font-display text-3xl text-foreground mt-4 mb-6">
//                   <span className="text-gradient-gold">Our Promise</span> to You
//                 </h2>
//                 <p className="text-muted-foreground leading-relaxed text-lg font-elegant">
//                   Designed with care, crafted with quality, and priced honestly—so your home feels right from day one.
//                 </p>

//                 <div className="section-divider my-6" />

//                 <h3 className="font-display text-xl text-foreground mb-4">Our Services Include</h3>
//                 <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
//                   {[
//                     "Kitchen Interiors", "Office & Commercial Interiors",
//                     "Wardrobes", "False Ceiling Works",
//                     "Living Room Interiors", "Painting Works",
//                     "Bedroom Interiors", "Custom Woodwork & Carpentry",
//                     "TV Units", "Flooring Works",
//                   ].map((s) => (
//                     <span key={s} className="flex items-center gap-2">
//                       <span className="text-primary">✦</span> {s}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </ScrollReveal>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;


import { Check, Award, Shield, Clock, Heart } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import logo from "@/assets/logo.jpg";

const whyChooseUs = [
  "Tired of endless delays? — We work on fixed, visible timelines (no vague promises) and deliver on the date we commit to.",
  "Sick of chasing vendors every day? You get one Dedicated Project Manager who handles carpenters, painters, electricians — you never have to call anyone.",
  "Surprise bills ruined your budget before? We give an itemized quote and ask for approvals before any extra work — no hidden invoices.",
  "Finished work falling apart in 1–2 years? We use durable, proven materials and professional installation so you don’t pay twice.",
  "Design looks different than what you imagined? We show realistic 3D previews so you approve the final look before any work begins.",
  "Rooms feel small and useless? Our space-first layouts add function and storage so every corner earns its place.",
  "Lights make rooms gloomy and AC bills high? We design for natural light, ventilation and energy efficiency — better light, lower bills.",
  "You keep losing time with daily site visits? Weekly progress reports (photos/video) keep you updated — no on-site babysitting required.",
  "Projects drag because of poor coordination? Our execution checklist and quality checkpoints stop rework and delays.",
  "Afraid of low-quality substitutes during execution? Material approvals happen in writing — nothing is substituted without your sign-off.",
  "Worried about workmanship after handover? We provide a workmanship warranty and a final walkthrough with punch-list closure.",
  "Don’t want to compromise between style and function? We design for both: smart storage, clean lines and lasting finishes so it looks premium and works daily.",
  "Need quick results because life is busy? We offer 45/60/90-day packages with clear milestones so you can plan around your schedule.",
  "Want confidence, not risk? We remove the unknowns: transparent costs, visible timelines, one contact — so your home is a solved problem, not a constant worry."
];

const promises = [
  "We guarantee on-time delivery — your project finishes on the agreed date.",
  "We guarantee no hidden costs — itemized quote upfront and written approval for any change.",
  "You get a Dedicated Project Manager — one contact who handles all vendors and coordination.",
  "What you approve in 3D and material samples is exactly what we build — no surprises.",
  "We back our work with a workmanship warranty and fast resolution for any issues."
];

const About = () => {
  return (
    <div className="pt-20 md:pt-24">
      
      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-dark">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <img src={logo} alt="AJ Interiors" className="h-20 mx-auto mb-6 rounded-lg" />
              <h1 className="font-display text-4xl md:text-6xl text-foreground mb-6">
                About <span className="text-gradient-gold">AJ Interiors</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We design and execute premium interiors that solve real-life problems — not just decorate spaces.
                With structured systems, transparent pricing and quality materials, we turn homes into finished,
                functional environments you can trust for years.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Award, value: "15+", label: "Years Experience" },
              { icon: Heart, value: "300+", label: "Projects Completed" },
              { icon: Shield, value: "100%", label: "Branded Materials" },
              { icon: Clock, value: "5 Yrs", label: "Free Support" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center bg-card rounded-xl p-6 border border-border/50 glitter-border hover:scale-105 transition">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gradient-gold font-display">{stat.value}</div>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Why Choose AJ Interiors */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">
                Why Choose AJ Interiors
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4">
                We Solve What <span className="text-gradient-gold">Homeowners Struggle With</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="bg-card p-6 rounded-xl border border-border/40 glitter-border hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <Check className="text-primary w-5 h-5 mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Our Promise */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="text-primary text-sm font-medium tracking-widest uppercase">
                Our Promise
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-foreground mt-4">
                What We <span className="text-gradient-gold">Guarantee</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {promises.map((promise, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-background p-6 rounded-xl border border-border/40 glitter-border hover:scale-[1.02] transition">
                  <Shield className="text-primary w-6 h-6 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {promise}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;