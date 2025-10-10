'use client';
import React, { useEffect, useState } from 'react';
import { Menu, X, Shield, Lock, Server, Cloud, CheckCircle, Award } from 'lucide-react';

/* -------------------- SEO Component -------------------- */
const SEOHead = () => {
  useEffect(() => {
    document.title = "Indianapolis IT Outsourcing & IT Consulting | SIM2K - Since 1999";

    const metaTags = [
      { name: "description", content: "Indianapolis IT outsourcing, IT consulting, and cybersecurity solutions. 25+ years protecting businesses with managed IT services, CMMC consulting, and IT outsourcing. Call 317-251-7920." },
      { name: "keywords", content: "IT outsourcing Indianapolis, Indianapolis IT outsourcing, IT consulting Indianapolis, Indianapolis IT consulting, IT outsourcing services Indianapolis, managed services Indianapolis, cybersecurity Indianapolis, CMMC consulting, Cyber AB Registered" },
      { property: "og:title", content: "Indianapolis IT Outsourcing & IT Consulting | SIM2K - Since 1999" },
      { property: "og:description", content: "Trusted IT outsourcing, IT consulting, managed IT services, and cybersecurity solutions for Indianapolis businesses. Cyber AB Registered CMMC consultant since 1999." },
      { property: "og:type", content: "website" },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let meta = document.querySelector(selector);
      if (!meta) {
        meta = document.createElement('meta');
        if (name) meta.setAttribute('name', name);
        if (property) meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });
  }, []);

  return null;
};

/* -------------------- Navigation -------------------- */
const Navigation = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const cls = ['overflow-hidden', 'touch-none'];
    if (isMobileMenuOpen) {
      document.documentElement.classList.add(...cls);
      document.body.classList.add(...cls);
    } else {
      document.documentElement.classList.remove(...cls);
      document.body.classList.remove(...cls);
    }
    return () => {
      document.documentElement.classList.remove(...cls);
      document.body.classList.remove(...cls);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [setIsMobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/50 backdrop-blur-md shadow-lg' : 'bg-slate-900/40'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3 text-white hover:opacity-90 transition-opacity">
              <img 
                src="/sim2k_light_logo.png" 
                alt="SIM2K - Indianapolis IT Support and Cybersecurity"
                className="h-16 w-auto md:h-20"
              />
            </a>

            <div className="hidden md:flex items-center space-x-8 text-white/90">
              {[
                ['#it-outsourcing', 'IT Outsourcing'],
                ['#it-consulting', 'IT Consulting'],
                ['#cybersecurity', 'Cybersecurity'],
                ['#cmmc-consulting', 'CMMC Consulting'],
              ].map(([href, label]) => (
                <a
                  key={label}
                  href={href}
                  className="hover:text-orange-400 transition-colors tracking-wide relative group"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-orange-400 transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a 
                href="tel:317-251-7920"
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                317-251-7920
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`md:hidden text-white ${isMobileMenuOpen ? 'hidden' : ''}`}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'bg-black/40 backdrop-blur-sm opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <aside
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-slate-900/98 border-l border-orange-500/20 text-white transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-orange-500/20">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <X size={22} />
            </button>
          </div>

          <nav className="px-5">
            {['IT Outsourcing', 'IT Consulting', 'Cybersecurity', 'CMMC Compliance'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block py-3 text-white/90 hover:text-orange-400 border-b border-white/10 last:border-b-0 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="tel:317-251-7920"
              className="block w-full mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-all text-center font-semibold"
            >
              Call 317-251-7920
            </a>
          </nav>
        </aside>
      </div>
    </>
  );
};

/* -------------------- Hero Section -------------------- */
const HeroSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(./Indianapolis_compressed.jpeg)',
          backgroundPosition: 'center 40%'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/80 to-slate-900/85" />
      
      {/* Additional gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm tracking-wide">
            <Award className="w-4 h-4 text-orange-400" />
            <span className="font-semibold">Cyber AB Registered Practitioner</span>
            <span className="text-white/60">|</span>
            <span>Since 1999</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight drop-shadow-2xl leading-tight">
            Indianapolis IT Outsourcing &
            <br />
            <span className="text-orange-400">Cybersecurity Solutions</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-lg">
            Trusted IT outsourcing, IT consulting, managed IT services, and cybersecurity solutions for Indianapolis businesses. Expert IT outsourcing services and CMMC consulting since 1999.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a 
              href="tel:317-251-7920"
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-2xl rounded-lg"
            >
              Call 317-251-7920
            </a>
            <a
              href="#it-consulting"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/50 hover:border-white hover:bg-white/20 text-white font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 rounded-lg"
            >
              View IT Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: '25+', label: 'Years in Indianapolis' },
              { value: '24/7', label: 'IT Support' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: 'CMMC', label: 'DoD Compliance' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 hover:bg-white/20 hover:border-white/40 transition-all">
                <div className="text-3xl font-bold text-orange-400 mb-1">{stat.value}</div>
                <div className="text-sm text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
const SEOOpportunitiesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-sm font-semibold tracking-wide">
            SEO GROWTH STRATEGY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Untapped Search Opportunities
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Strategic keyword targeting to capture 1,500+ monthly searches currently going to competitors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Current Performance */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              Current Rankings
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <div className="text-slate-300 text-sm mb-1">Indianapolis IT Outsourcing</div>
                <div className="text-white font-semibold">Position #8 <span className="text-slate-400 text-sm">(50 searches/month)</span></div>
              </div>
              <div className="border-l-4 border-green-400 pl-4">
                <div className="text-slate-300 text-sm mb-1">IT Outsourcing Indianapolis</div>
                <div className="text-white font-semibold">Position #10 <span className="text-slate-400 text-sm">(170 searches/month)</span></div>
              </div>
              <div className="border-l-4 border-yellow-400 pl-4">
                <div className="text-slate-300 text-sm mb-1">IT Consulting Indianapolis</div>
                <div className="text-white font-semibold">Not Ranking <span className="text-slate-400 text-sm">(170 searches/month)</span></div>
              </div>
            </div>
          </div>

          {/* High-Priority Opportunities */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-orange-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-orange-400" />
              High-Priority Targets
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-400 pl-4">
                <div className="text-orange-400 font-semibold mb-1">Managed IT Services Indianapolis</div>
                <div className="text-slate-300 text-sm">480 monthly searches + 2,000 variations</div>
                <div className="text-green-400 text-sm font-medium mt-1">✓ Easy Difficulty</div>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <div className="text-orange-400 font-semibold mb-1">Cybersecurity Indianapolis</div>
                <div className="text-slate-300 text-sm">110 monthly searches + 770 variations</div>
                <div className="text-green-400 text-sm font-medium mt-1">✓ Easy Difficulty</div>
              </div>
              <div className="border-l-4 border-orange-400 pl-4">
                <div className="text-orange-400 font-semibold mb-1">CMMC Consultant</div>
                <div className="text-slate-300 text-sm">590 monthly searches + 3,000 variations</div>
                <div className="text-green-400 text-sm font-medium mt-1">✓ Easy Difficulty</div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Implementation */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6">Strategic Implementation Plan</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-orange-400 font-semibold mb-2">Keyword Integration</div>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• Optimized meta tags</li>
                <li>• Structured data markup</li>
                <li>• Natural keyword placement</li>
              </ul>
            </div>
            <div>
              <div className="text-orange-400 font-semibold mb-2">Landing Pages</div>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• /managed-it-services</li>
                <li>• /cybersecurity</li>
                <li>• /cmmc-consultant</li>
              </ul>
            </div>
            <div>
              <div className="text-orange-400 font-semibold mb-2">Technical SEO</div>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• Fast page load times</li>
                <li>• Mobile optimization</li>
                <li>• Clean URL structure</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------- Why Rebuild Section -------------------- */
const WhyRebuildSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Rebuild Instead of WordPress Updates?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Modern web architecture delivers better performance, security, and SEO results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              WordPress Limitations
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Ongoing Maintenance</div>
                  <div className="text-slate-600 text-sm">Constant plugin updates required for security</div>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Performance Issues</div>
                  <div className="text-slate-600 text-sm">Slow load times hurt SEO and conversions</div>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Limited Control</div>
                  <div className="text-slate-600 text-sm">Constrained by theme and plugin limitations</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              Modern Architecture
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Zero Maintenance</div>
                  <div className="text-slate-600 text-sm">No plugins to update or security patches needed</div>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Inherently Secure</div>
                  <div className="text-slate-600 text-sm">Static files with no database to exploit</div>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Lightning Fast</div>
                  <div className="text-slate-600 text-sm">Optimized performance boosts SEO rankings</div>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <div className="font-semibold text-slate-900">Full Customization</div>
                  <div className="text-slate-600 text-sm">Built exactly to your specifications</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
          <p className="text-slate-600 text-lg">
            Your new site is built with modern HTML, JavaScript, and CSS - delivering a fast, secure, and SEO-optimized experience without the complexity and vulnerabilities of WordPress. It will be hosted for free in perpetuity on <a className="font-semibold text-slate-900" href="https://vercel.com">Vercel</a> barring any unexpected traffic spikes.
          </p>
        </div>
      </div>
    </section>
  );
};

/* -------------------- Services Section -------------------- */
const ServicesSection = () => {
  const services = [
    {
      id: 'it-outsourcing',
      icon: <Cloud className="w-8 h-8" />,
      title: "IT Outsourcing Indianapolis",
      subtitle: "Complete Managed IT Services",
      description: "Comprehensive IT outsourcing and managed services for Indianapolis businesses. Eliminate IT headaches with complete network management, server support, and proactive monitoring.",
      features: [
        "Complete Network Management",
        "Server & Workstation Support",
        "24/7 Monitoring & Support",
        "Business Continuity Planning"
      ],
      keywords: "IT outsourcing Indianapolis, managed IT services, managed service provider"
    },
    {
      id: 'it-consulting',
      icon: <Server className="w-8 h-8" />,
      title: "IT Consulting & Support Services",
      subtitle: "Expert IT Support Indianapolis",
      description: "Strategic IT consulting and 24/7 help desk support for Indianapolis businesses. Our IT consultants provide proactive system monitoring, network management, and on-site support.",
      features: [
        "24/7 Help Desk Support",
        "Proactive System Monitoring", 
        "Network Management",
        "Strategic IT Planning"
      ],
      keywords: "IT support Indianapolis, IT consulting Indianapolis, help desk support"
    },
    {
      id: 'cybersecurity',
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Consulting",
      subtitle: "Cyber AB Registered Practitioner",
      description: "Professional cybersecurity consulting and security services in Indianapolis. As an official Cyber AB Registered Practitioner with CCSP certification, we provide DoD-level cybersecurity solutions.",
      features: [
        "Network Security & Monitoring",
        "Endpoint Protection",
        "Threat Detection & Response",
        "Security Assessments"
      ],
      keywords: "cybersecurity Indianapolis, cybersecurity consulting Indianapolis, network security"
    },
    {
      id: 'cmmc-compliance',
      icon: <Award className="w-8 h-8" />,
      title: "CMMC Consulting",
      subtitle: "DoD Cybersecurity Certification",
      description: "Official CMMC compliance consulting from a Cyber AB Registered Practitioner. Defense contractors need CMMC certification to win DoD contracts - we provide expert assessment and implementation support.",
      features: [
        "Cyber AB Registered Expertise",
        "DoD Framework Implementation",
        "Assessment & Certification Support",
        "Compliance Documentation"
      ],
      keywords: "CMMC compliance, Cyber AB, DoD cybersecurity, defense contractor IT"
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-600 text-sm font-semibold tracking-wide">
            INDIANAPOLIS IT SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Indianapolis IT Outsourcing & IT Consulting Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive IT outsourcing, IT consulting, managed services, and cybersecurity solutions for Indianapolis businesses since 1999
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 hover:shadow-xl hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                {service.title}
              </h3>

              <div className="text-sm font-semibold text-orange-600 mb-4">
                {service.subtitle}
              </div>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -------------------- Why Choose Section -------------------- */
const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Indianapolis Businesses Choose SIM2K
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <Award className="w-6 h-6 text-orange-500" />
                Official Credentials
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Cyber AB Registered Practitioner and CCSP certified for government-level cybersecurity. We provide official CMMC consulting alongside comprehensive IT outsourcing and IT consulting for Indianapolis businesses.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <Shield className="w-6 h-6 text-orange-500" />
                25+ Years Local Experience
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We&apos;ve been Indianapolis&apos; trusted IT outsourcing and IT consulting partner since 1999, serving small and large companies across Indiana with expert managed IT services and cybersecurity solutions.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500" />
                Proactive Approach
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We prevent problems through continuous monitoring rather than waiting for breakdowns. Our managed services keep your Indianapolis business running smoothly 24/7.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 flex items-center gap-3">
                <Server className="w-6 h-6 text-orange-500" />
                Local Support Team
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Real people in Indianapolis who respond quickly when you need help. Fast on-site support and 24/7 remote assistance for all your IT outsourcing and IT consulting needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------- CTA Section -------------------- */
const CTASection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Talk to One of Our Friendly Techs
        </h2>
        <p className="text-xl text-slate-300 mb-12 leading-relaxed">
          Get expert IT outsourcing, IT consulting, and cybersecurity solutions for your Indianapolis business. Our team is ready to help with managed services, CMMC consulting, and 24/7 IT support.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="tel:317-251-7920"
            className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-orange-500/50 rounded-lg text-lg"
          >
            Call 317-251-7920
          </a>
          <a
            href="mailto:sales@sim2k.com"
            className="px-8 py-4 bg-transparent border-2 border-white/50 hover:border-white hover:bg-white/10 text-white font-semibold tracking-wide transition-all duration-300 transform hover:scale-105 rounded-lg"
          >
            Email sales@sim2k.com
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-slate-400 text-lg mb-2">
            <strong className="text-white">SIM2K, Inc.</strong>
          </p>
          <p className="text-slate-400">
            7160 Graham Road, Suite 100<br />
            Indianapolis, IN 46250
          </p>
          <p className="text-slate-500 text-sm mt-6">
            Serving Indianapolis, Carmel, Fishers & Surrounding Indiana Areas
          </p>
          <p className="text-slate-500 text-xs mt-4 italic">
            SIM2K has been the trusted IT outsourcing and IT consulting provider for Indianapolis since 1999.
          </p>
        </div>
      </div>
    </section>
  );
};

/* -------------------- Main Component -------------------- */
const Sim2kLanding = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <SEOHead />
      <div className="min-h-screen bg-slate-50">
        <Navigation
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />

        <div className={isMobileMenuOpen ? 'blur-sm md:blur-0' : ''}>
          <HeroSection />
          <ServicesSection />
          <WhyChooseSection />
          <CTASection />
          <SEOOpportunitiesSection/>
          <WhyRebuildSection />
        </div>
      </div>
    </>
  );
};

export default Sim2kLanding;