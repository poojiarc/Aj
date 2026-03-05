import { useState } from "react";
import { X, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ConsultationModalProps {
  open: boolean;
  onClose: () => void;
}

const questions = [
  "Why do you want to do interior design now, not next year?",
  "What will happen if you don't design this home properly?",
  "When guests enter your home, what do you want them to feel?",
  "Who is the final decision maker for this project?",
  "What budget range are you comfortable investing if the design is exactly what you want?",
];

const ConsultationModal = ({ open, onClose }: ConsultationModalProps) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [answers, setAnswers] = useState<string[]>(Array(5).fill(""));
  const [sending, setSending] = useState(false);

  const handleNext1 = () => {
    if (!name.trim() || !mobile.trim()) return;
    setStep(2);
  };

  const handleNext2 = async () => {
    setSending(true);
    // Send data via mailto
    const body = `Name: ${name}\nMobile: ${mobile}\n\n${questions.map((q, i) => `Q: ${q}\nA: ${answers[i]}`).join("\n\n")}`;
    const mailtoLink = `mailto:anjiinterior@gmail.com?subject=Free Consultation Request - ${name}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
    setSending(false);
    setStep(3);
  };

  const handleClose = () => {
    setStep(1);
    setName("");
    setMobile("");
    setAnswers(Array(5).fill(""));
    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={handleClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-lg bg-card border border-border rounded-xl shadow-2xl glow-gold overflow-hidden max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Progress */}
        <div className="flex gap-1 p-4 pb-0">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-all ${
                s <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>

        <div className="p-6">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-5"
              >
                <div>
                  <h3 className="font-display text-2xl text-gradient-gold mb-1">Book Free Consultation</h3>
                  <p className="text-sm text-muted-foreground">Let's start with your details</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1 block">Mobile Number</label>
                    <input
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your mobile number"
                    />
                  </div>
                </div>
                <Button variant="gold" className="w-full" onClick={handleNext1}>
                  Next <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-4"
              >
                <div>
                  <h3 className="font-display text-xl text-gradient-gold mb-1">A Few Questions</h3>
                  <p className="text-xs text-muted-foreground">Help us understand your vision</p>
                </div>
                <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                  {questions.map((q, i) => (
                    <div key={i}>
                      <label className="text-sm text-foreground/80 mb-1 block">{q}</label>
                      <textarea
                        value={answers[i]}
                        onChange={(e) => {
                          const newAnswers = [...answers];
                          newAnswers[i] = e.target.value;
                          setAnswers(newAnswers);
                        }}
                        rows={2}
                        className="w-full px-3 py-2 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm resize-none"
                        placeholder="Type your answer..."
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="gold-outline" onClick={() => setStep(1)}>
                    <ArrowLeft className="w-4 h-4" /> Back
                  </Button>
                  <Button variant="gold" className="flex-1" onClick={handleNext2} disabled={sending}>
                    {sending ? "Sending..." : "Next"} <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                className="space-y-4"
              >
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-gradient-gold mb-1">Book Your Appointment</h3>
                  <p className="text-xs text-muted-foreground">Choose a convenient time below</p>
                </div>
                <div className="w-full rounded-lg overflow-hidden" style={{ minHeight: 400 }}>
                  <iframe
                    src="https://calendly.com/anjiinterior/30min"
                    width="100%"
                    height="500"
                    frameBorder="0"
                    title="Book Appointment"
                    className="rounded-lg"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ConsultationModal;
