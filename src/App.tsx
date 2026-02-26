import { motion } from "motion/react";
import { 
  ArrowRight, 
  BarChart3, 
  BrainCircuit, 
  CheckCircle2, 
  Cloud, 
  CreditCard, 
  LineChart, 
  PieChart, 
  ShieldCheck, 
  Sparkles, 
  Wallet, 
  Zap,
  Menu,
  X,
  MessageSquare,
  TrendingUp,
  DollarSign
} from "lucide-react";
import React, { useState } from "react";
import { addToWaitlist } from "./lib/supabase";

const Logo1 = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2563eb" />
        <stop offset="100%" stopColor="#0d9488" />
      </linearGradient>
    </defs>
    <path d="M10 26a6 6 0 0 1 0-12h1.5a10 10 0 0 1 19 2.5A6.5 6.5 0 0 1 28 29H10z" fill="url(#grad1)" opacity="0.15"/>
    <path d="M10 26a6 6 0 0 1 0-12h1.5a10 10 0 0 1 19 2.5A6.5 6.5 0 0 1 28 29H10z" stroke="url(#grad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 22v7M20 16v13M26 19v10" stroke="url(#grad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Logo2 = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0ea5e9" />
        <stop offset="100%" stopColor="#14b8a6" />
      </linearGradient>
    </defs>
    <circle cx="20" cy="16" r="4" fill="url(#grad2)" />
    <circle cx="12" cy="24" r="3" fill="url(#grad2)" />
    <circle cx="28" cy="24" r="3" fill="url(#grad2)" />
    <path d="M14 22l4-4M26 22l-4-4M15 24h10" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 28a6 6 0 0 1 0-12h1.5a10 10 0 0 1 19 2.5A6.5 6.5 0 0 1 28 31H10z" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
  </svg>
);

const Logo3 = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="grad3" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#2dd4bf" />
      </linearGradient>
    </defs>
    <path d="M10 26a6 6 0 0 1 0-12h1.5a10 10 0 0 1 19 2.5A6.5 6.5 0 0 1 28 29H10z" stroke="url(#grad3)" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M20 12 L21.5 17.5 L27 19 L21.5 20.5 L20 26 L18.5 20.5 L13 19 L18.5 17.5 Z" fill="url(#grad3)"/>
  </svg>
);

const Logo4 = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1e40af" />
        <stop offset="50%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#14b8a6" />
      </linearGradient>
    </defs>
    <path d="M20 10 A10 10 0 0 0 10 20 A6 6 0 0 0 16 26 H28 A6.5 6.5 0 0 0 28 13 A10 10 0 0 0 20 10 Z" fill="url(#grad4)" opacity="0.9"/>
    <path d="M20 10 L28 26 H12 Z" fill="#ffffff" opacity="0.25"/>
    <circle cx="20" cy="18" r="3" fill="#ffffff"/>
  </svg>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Logo1 className="w-8 h-8" />
            <span className="text-xl font-bold tracking-tight text-slate-900">FinCloud AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</a>
            <a href="#assistant" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">AI Assistant</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
            <a href="#waitlist" className="text-sm font-medium px-5 py-2.5 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm">
              Get Started
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          <a href="#features" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900">Features</a>
          <a href="#assistant" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900">AI Assistant</a>
          <a href="#pricing" className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900">Pricing</a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-slate-50">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute top-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-purple-400/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-sm text-slate-600 mb-8 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="font-medium">FinCloud AI is now in public beta</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6"
        >
          Where Finance Meets <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Intelligence</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10"
        >
          Automate your accounting, forecast cash flow with AI, and make smarter strategic decisions. The global financial operating system for modern teams.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 mb-16"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-slate-900/20">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-medium border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm">
              Book a Demo
            </button>
          </div>
          <p className="text-sm text-slate-500 mt-2">
            No credit card required. Setup in 3 minutes.
          </p>
        </motion.div>

        {/* Dashboard Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="rounded-2xl border border-slate-200/60 bg-white/50 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-white/80">
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
              <div className="w-3 h-3 rounded-full bg-slate-200" />
            </div>
            <div className="p-6 bg-slate-50/50">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {[
                  { label: "Total Revenue", value: "$124,500", trend: "+12.5%", icon: <DollarSign className="w-5 h-5 text-blue-600" /> },
                  { label: "Monthly Burn", value: "$42,300", trend: "-4.2%", icon: <TrendingUp className="w-5 h-5 text-purple-600" /> },
                  { label: "Cash Runway", value: "14.2 mo", trend: "+2.1 mo", icon: <PieChart className="w-5 h-5 text-indigo-600" /> }
                ].map((stat, i) => (
                  <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-500 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                      <p className="text-sm font-medium text-emerald-600 mt-1">{stat.trend}</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-64 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center relative overflow-hidden">
                {/* Abstract Chart Representation */}
                <div className="absolute inset-0 flex items-end px-8 pt-8 pb-4 gap-2">
                  {[40, 60, 45, 70, 65, 85, 80, 100, 90, 110, 105, 120].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded-t-sm relative group">
                      <div 
                        className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-purple-500 rounded-t-sm transition-all duration-500"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: <BrainCircuit className="w-6 h-6 text-blue-600" />,
      title: "AI Financial Insights",
      description: "Get predictive analytics and actionable recommendations based on your spending patterns and cash flow history."
    },
    {
      icon: <Wallet className="w-6 h-6 text-purple-600" />,
      title: "Smart Expense Tracking",
      description: "Automatically categorize expenses, detect anomalies, and reconcile transactions with zero manual data entry."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-indigo-600" />,
      title: "Real-Time Dashboard",
      description: "Monitor your entire financial health at a glance with customizable, up-to-the-second visual reporting."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Secure Cloud Platform",
      description: "Bank-grade encryption and global compliance standards ensure your financial data is always protected."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to scale</h2>
          <p className="text-lg text-slate-600">Powerful features designed to automate your financial operations and give you clarity.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductPreview() {
  return (
    <section id="assistant" className="py-24 bg-slate-50 overflow-hidden border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-sm text-purple-700 font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              <span>Meet your AI CFO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Chat with your financial data</h2>
            <p className="text-lg text-slate-600 mb-8">
              Ask complex questions about your cash flow, runway, or upcoming expenses and get instant, accurate answers powered by advanced AI models.
            </p>
            <ul className="space-y-4">
              {[
                "\"What's our projected runway for Q3?\"",
                "\"Show me all marketing expenses from last month.\"",
                "\"Identify any duplicate software subscriptions.\""
              ].map((query, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-slate-700 font-medium">{query}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-purple-400/20 blur-3xl rounded-full" />
            <div className="relative rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">FinCloud Assistant</h4>
                  <p className="text-xs text-slate-500">Always active</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0" />
                  <div className="bg-slate-100 rounded-2xl rounded-tl-none p-4 text-sm text-slate-700 shadow-sm">
                    What's our projected runway based on current burn rate?
                  </div>
                </div>
                <div className="flex gap-4 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shrink-0 flex items-center justify-center shadow-md">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white border border-slate-100 shadow-sm rounded-2xl rounded-tr-none p-4 text-sm text-slate-700">
                    Based on your average monthly burn rate of <strong className="text-slate-900">$42,500</strong> over the last 3 months, your current cash balance of <strong className="text-slate-900">$510,000</strong> provides a runway of approximately <strong className="text-purple-600">12 months</strong>.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for freelancers and early-stage startups.",
      features: ["Up to 50 transactions/mo", "Basic expense tracking", "Standard dashboard", "Community support"],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Pro",
      price: "$9",
      period: "/month",
      description: "For growing businesses needing deeper insights.",
      features: ["Unlimited transactions", "AI Financial Assistant", "Custom reporting", "Priority support"],
      cta: "Start Free Trial",
      highlighted: true
    },
    {
      name: "Business",
      price: "$29",
      period: "/month",
      description: "Advanced controls for established teams.",
      features: ["Multiple user seats", "API access", "Advanced forecasting", "Dedicated account manager"],
      cta: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-lg text-slate-600">Choose the plan that fits your business needs. No hidden fees.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border ${plan.highlighted ? 'bg-slate-900 border-slate-900 relative shadow-xl' : 'bg-white border-slate-200 shadow-sm'}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-slate-300' : 'text-slate-500'}`}>{plan.description}</p>
              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                {plan.period && <span className={plan.highlighted ? 'text-slate-400' : 'text-slate-500'}>{plan.period}</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${plan.highlighted ? 'text-blue-400' : 'text-blue-600'}`} />
                    <span className={`text-sm font-medium ${plan.highlighted ? 'text-slate-200' : 'text-slate-700'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-full font-bold transition-colors ${
                plan.highlighted 
                  ? 'bg-white text-slate-900 hover:bg-slate-100' 
                  : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
              }`}>
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Waitlist() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }

    const error = await addToWaitlist(email);

    if (error) {
      // Show the specific error message if available, otherwise a generic one
      const errorMessage = (error as any).message || "Something went wrong. Please try again later.";
      alert(errorMessage);
    } else {
      alert("You're on the waitlist!");
      e.target.reset(); // Clear the form on success
    }
  };

  return (
    <section id="waitlist" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1920/1080')] opacity-[0.02] mix-blend-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to transform your finances?</h2>
        <p className="text-lg text-slate-300 mb-10">
          Join thousands of modern businesses using FinCloud AI to streamline their financial operations.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={handleSubmit}>
          <input 
            name="email"
            type="email" 
            placeholder="Enter your work email" 
            className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 backdrop-blur-sm"
            required
          />
          <button 
            type="submit" 
            className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-100 transition-colors whitespace-nowrap shadow-lg"
          >
            Join Waitlist
          </button>
        </form>
        <p className="text-sm text-slate-400 mt-4">No credit card required. Cancel anytime.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Logo1 className="w-6 h-6" />
          <span className="text-lg font-bold tracking-tight text-slate-900">FinCloud AI</span>
        </div>
        
        <div className="flex gap-6">
          <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Terms of Service</a>
          <a href="#" className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Contact</a>
        </div>
        
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} FinCloud AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function LogoConcepts() {
  const concepts = [
    {
      id: 1,
      name: "The Analytical Cloud",
      description: "Combines a cloud silhouette with rising bar charts, representing cloud-based financial growth.",
      Logo: Logo1
    },
    {
      id: 2,
      name: "Neural Network",
      description: "Nodes and connections form a cloud shape, symbolizing the AI and machine learning core.",
      Logo: Logo2
    },
    {
      id: 3,
      name: "The AI Spark",
      description: "A minimalist cloud outline featuring a central spark, representing intelligence and innovation.",
      Logo: Logo3
    },
    {
      id: 4,
      name: "Geometric Fold",
      description: "Overlapping geometric shapes create a modern, abstract cloud with an upward trajectory.",
      Logo: Logo4
    }
  ];

  return (
    <section id="logos" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Brand Identity Concepts</h2>
          <p className="text-lg text-slate-600">Exploring modern, minimal logo marks that combine cloud, finance, and AI elements.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {concepts.map((concept) => (
            <div key={concept.id} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center group">
              <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-2xl border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                <concept.Logo className="w-12 h-12" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{concept.name}</h3>
              <p className="text-sm text-slate-500">{concept.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <LogoConcepts />
        <Features />
        <ProductPreview />
        <Pricing />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
