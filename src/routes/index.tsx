import { useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  Hammer,
  Truck,
  Mountain,
  Route as RouteIcon,
  Construction,
  HardHat,
  ShieldCheck,
  Wrench,
  Award,
  Users,
  ChevronDown,
} from "lucide-react";



import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/site/CountUp";
import { SectionHead } from "@/components/site/SectionHead";
import heroAsset from "@/assets/hero-desert-sunset.jpg";
import logoWhite from "@/assets/logo-white.png";
import projDiriyah from "@/assets/project-diriyah.jpg";
import projCrusher from "@/assets/project-crusher.jpg";
import projRoads from "@/assets/project-roads.jpg";
import projDemolition from "@/assets/project-demolition.jpg";
import projUtilities from "@/assets/project-utilities.jpg";
import projTrucks from "@/assets/project-trucks.jpg";
import svcDemolition from "@/assets/service-demolition.jpg";
import svcExcavation from "@/assets/service-excavation.jpg";
import svcInfrastructure from "@/assets/service-infrastructure.jpg";
import svcRoads from "@/assets/service-roads.jpg";
import svcFleet from "@/assets/service-fleet.jpg";
import svcConsulting from "@/assets/service-consulting.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "شركة الأسطول الآلي | مقاولات بنية تحتية، هدم وحفر — السعودية",
      },
      {
        name: "description",
        content:
          "17 عاماً من الريادة. 193+ مشروع منجز. أسطول كامل من المعدات الثقيلة. شريك مشاريع رؤية المملكة 2030.",
      },
      { property: "og:image", content: heroAsset },
    ],
  }),
  component: HomePage,
});

const STATS = [
  { value: 17, suffix: "+", label: "عاماً من الخبرة" },
  { value: 193, suffix: "+", label: "مشروع مكتمل" },
  { value: 23, suffix: "+", label: "مشروع ضخم" },
  { value: 5, suffix: "", label: "شركاء استراتيجيون" },
];

const SERVICES = [
  {
    icon: Hammer,
    title: "الهدم المستدام",
    desc: "هدم آمن بأحدث التقنيات مع الالتزام بمعايير السلامة وإعادة تدوير المواد.",
    image: svcDemolition,
  },
  {
    icon: Mountain,
    title: "الحفر والردم",
    desc: "أسطول حفارات حديث لكافة الأعماق والأحجام — سكني، تجاري، بنية تحتية.",
    image: svcExcavation,
  },
  {
    icon: Construction,
    title: "البنية التحتية",
    desc: "شبكات مياه وصرف وكهرباء واتصالات، وأعمال التمهيد الإنشائي للمشاريع الكبرى.",
    image: svcInfrastructure,
  },
  {
    icon: RouteIcon,
    title: "أعمال الطرق",
    desc: "تنفيذ هندسي دقيق للطرق والمسالك الداخلية في المشاريع الحضرية والصناعية.",
    image: svcRoads,
  },
  {
    icon: Truck,
    title: "النقليات والمعدات",
    desc: "حفارات، قلابات، كرينات، ومعدات تخصصية للتنفيذ المباشر أو التأجير.",
    image: svcFleet,
  },
  {
    icon: HardHat,
    title: "الاستشارات الهندسية",
    desc: "فريق مهندسين متخصص يقدم استشارات شاملة في التخطيط والتصميم والتنفيذ.",
    image: svcConsulting,
  },
];

const WHY = [
  { icon: Award, label: "17 عاماً من الخبرة الميدانية" },
  { icon: Wrench, label: "أسطول متكامل من المعدات الحديثة" },
  { icon: ShieldCheck, label: "شهادات جودة معتمدة من الجهات الرسمية" },
  { icon: Users, label: "فريق هندسي متخصص ومدرّب" },
];

const PARTNERS = [
  "شركة الدرعية",
  "الهيئة العامة لعقارات الدولة",
  "أمانة الرياض",
  "جامعة الأميرة نورة",
  "قطار الرياض",
];

const FAQS = [
  {
    q: "ما هي خبرة شركة الأسطول الآلي؟",
    a: "تمتلك الشركة خبرة تزيد عن 17 عاماً في تنفيذ مشاريع المقاولات، الهدم المستدام، والبنية التحتية في مختلف مدن المملكة، وقد نفّذت 193+ مشروعاً منها 23 مشروعاً ضخماً.",
  },
  {
    q: "كيف تضمن الشركة جودة المشاريع؟",
    a: "نلتزم بأعلى معايير الجودة عبر فرق عمل مدربة، معدات حديثة، شهادات تصنيف رسمية، وإشراف هندسي مستمر يضمن مطابقة المخرجات للمواصفات الفنية المعتمدة.",
  },
  {
    q: "ما الذي يميز شركة الأسطول الآلي؟",
    a: "المرونة العالية في تنفيذ مشاريع بمختلف الأحجام، اعتمادنا على تقنيات حديثة في الهدم والحفر، وأسطول معدات يُمكّننا من التحرك السريع دون انتظار موارد خارجية.",
  },
  {
    q: "ما هي خدمات شركة الأسطول الآلي؟",
    a: "خدمات متكاملة تشمل: الهدم المستدام، الحفر والردم، البنية التحتية، أعمال الطرق، تأجير المعدات الثقيلة، والاستشارات الهندسية.",
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <Stats />
      <Services />
      <WhySection />
      <ProjectsPreview />
      <PartnersBlock />
      <Faq />
      <FinalCta />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scroll-driven cinematic transforms (disabled when user prefers reduced motion)
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55, 0.9], [1, 0.6, 0]);
  const barHeight = useTransform(scrollYProgress, [0, 1], ["3.5rem", reduce ? "3.5rem" : "6.5rem"]);
  const grainOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.25, 0.35]);
  const vignetteOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.95]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      ref={ref}
      dir="rtl"
      className="relative bg-[#0a0a0a] text-white
                 h-[160svh] md:h-[180svh]
                 [@supports(height:100dvh)]:h-[160dvh]
                 md:[@supports(height:100dvh)]:h-[180dvh]"
    >
      {/* Sticky viewport — the "screen" of the cinema */}
      <div className="sticky top-0 h-[100svh] [@supports(height:100dvh)]:h-[100dvh] w-full overflow-hidden">
        {/* Parallax background */}
        <motion.div
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-0 will-change-transform"
        >
          <video
            src={heroVideo.url}
            poster={heroAsset}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label="مشاريع البنية التحتية للأسطول الآلي"
            className="absolute inset-0 h-[110%] w-full object-cover"
          />
        </motion.div>

        {/* Dark base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 45%, rgba(10,10,10,0.95) 100%)",
          }}
          aria-hidden
        />
        {/* Side vignette */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(270deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.1) 55%, rgba(0,0,0,0) 100%)",
          }}
          aria-hidden
        />
        {/* Radial vignette that deepens on scroll */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: vignetteOpacity,
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.9) 100%)",
          }}
          aria-hidden
        />
        {/* Film grain */}
        <motion.div
          className="pointer-events-none absolute inset-0 mix-blend-overlay"
          style={{
            opacity: grainOpacity,
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
          }}
          aria-hidden
        />

        {/* Letterbox bars (grow with scroll) */}
        <motion.div
          className="pointer-events-none absolute top-0 inset-x-0 z-30 bg-black border-b border-white/5 flex items-center justify-between px-6 md:px-10"
          style={{ height: barHeight }}
          aria-hidden
        >
          <div className="flex items-center gap-3 text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/50 font-semibold">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              Vision 2030 · Partner
            </span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="hidden md:inline">Cinematic · 2.39:1</span>
          </div>
          <div className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-gold/80 font-semibold">
            REC · 60 FPS HDR
          </div>
        </motion.div>
        <motion.div
          className="pointer-events-none absolute bottom-0 inset-x-0 z-30 bg-black border-t border-white/5 flex items-center justify-between px-6 md:px-10"
          style={{ height: barHeight }}
          aria-hidden
        >
          <div className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/50 font-semibold">
            الأسطول الآلي © 2026
          </div>
          <div className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-white/40 font-semibold hidden md:block">
            LENS · COOKE 50MM T2.3
          </div>
        </motion.div>

        {/* Content layer */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-20 h-full flex items-end"
        >
          <div className="container-x w-full pt-28 pb-24 sm:pt-32 sm:pb-28 md:pt-40 md:pb-32">
            <div className="max-w-4xl mr-0 ml-auto text-right">
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="inline-flex items-center gap-3"
              >
                <span className="h-px w-8 sm:w-10 bg-gold" />
                <span className="text-[10px] sm:text-[11px] md:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase text-gold font-semibold">
                  Scene 01 · Since 2008 · Riyadh, KSA
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 sm:mt-5 text-white"
                style={{
                  wordSpacing: "0.02em",
                  letterSpacing: "0.02em",
                  fontWeight: 600,
                }}
              >
                <span className="block text-[40px] sm:text-[56px] md:text-[80px] lg:text-[96px] leading-[1.15] sm:leading-[1.1] md:leading-[1.05]">
                  نبني <span className="text-gold">المستقبل</span>،
                </span>
                <span className="block text-[28px] sm:text-[38px] md:text-[52px] lg:text-[64px] leading-[1.2] mt-6 sm:mt-8 md:mt-10 font-medium text-white/95">
                  نحفر الطريق.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="mt-5 md:mt-7 max-w-2xl text-base sm:text-lg md:text-[22px] leading-[1.8] md:leading-relaxed text-white/75"
                style={{ wordSpacing: "0.02em" }}
              >
                17 عاماً من الريادة في مقاولات البنية التحتية، الهدم المستدام، والحفر
                بالمملكة العربية السعودية.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Button asChild variant="hero" size="xl" className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg">
                  <Link to="/services">
                    استعرض خدماتنا
                    <ArrowLeft className="size-5 sm:size-6 rtl:rotate-180" />
                  </Link>
                </Button>
                <Button asChild variant="ghostGold" size="xl" className="w-full sm:w-auto h-14 sm:h-16 px-8 sm:px-12 text-base sm:text-lg">
                  <Link to="/contact">تواصل معنا</Link>
                </Button>
              </motion.div>

              {/* Bottom trust strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-10 md:mt-14 flex flex-wrap items-center justify-between gap-4 sm:gap-6 border-t border-white/10 pt-5"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <img
                    src={logoWhite}
                    alt=""
                    className="h-10 w-10 sm:h-12 sm:w-12 object-contain shrink-0"
                  />
                  <span className="text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase text-white/60 truncate">
                    17+ عاماً · 193+ مشروع · 23+ مشروع ضخم
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#partners"
          aria-label="انتقل للأسفل"
          style={{ opacity: scrollHintOpacity }}
          className="absolute left-1/2 -translate-x-1/2 bottom-20 md:bottom-24 z-40 flex flex-col items-center gap-1.5 text-white/70 hover:text-gold transition-colors motion-reduce:[&_*]:!animate-none"
        >
          <span className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase">Scroll</span>
          <span className="flex items-center justify-center h-7 w-7 rounded-full border border-gold/50 animate-bounce motion-reduce:animate-none">
            <ChevronDown className="size-4 text-gold" />
          </span>
        </motion.a>
      </div>
    </section>
  );
}


function PartnersMarquee() {
  const items = [...PARTNERS, ...PARTNERS];
  return (
    <section id="partners" className="bg-charcoal border-y border-white/5 overflow-hidden scroll-mt-16">
      <div className="py-6 overflow-hidden">
        <div className="marquee whitespace-nowrap text-white/40">
          {items.map((p, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-sm tracking-[0.25em] uppercase font-medium">{p}</span>
              <span className="text-gold/40">◆</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="relative bg-charcoal text-white py-24">
      <div className="container-x">
        <div className="hairline mb-12" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {STATS.map((s, i) => (
            <div key={i} className="relative pl-6 border-l border-white/10 last:border-l-0">
              <div className="text-[10px] tracking-[0.3em] text-gold uppercase">
                0{i + 1}
              </div>
              <div className="mt-3 text-5xl md:text-6xl text-white">
                <CountUp to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHead
            eyebrow="خدماتنا"
            title="حلول إنشائية متكاملة، من الفكرة إلى التسليم."
            intro="ست خدمات أساسية ننفّذها بأسطول وفريق هندسي تحت سقف واحد — دون اعتماد على مقاولين من الباطن."
          />
          <Button asChild variant="dark" size="lg">
            <Link to="/services">
              كل الخدمات
              <ArrowLeft className="size-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
          {SERVICES.map((s, i) => (
            <article
              key={i}
              className="group relative bg-background overflow-hidden transition-colors hover:bg-sand flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-deep-gray">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.45) 100%)",
                  }}
                  aria-hidden
                />
                <div className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center bg-charcoal/90 text-gold">
                  <s.icon className="size-5" strokeWidth={1.5} />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  <span className="num text-gold">0{i + 1}</span>
                  <span className="h-px w-8 bg-border" />
                  <span>خدمة</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold text-charcoal">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-charcoal group-hover:text-gold-muted"
                >
                  اقرأ أكثر
                  <ArrowLeft className="size-4 rtl:rotate-180" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {

  return (
    <section className="relative bg-sand py-24 overflow-hidden">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHead
            eyebrow="لماذا الأسطول الآلي"
            title="ثقل ميداني، انضباط هندسي."
            intro="نُسلّم المشاريع في موعدها لأن الموارد بين أيدينا — لا انتظار، لا حلقات وسيطة."
          />
          <div className="mt-8 aspect-video overflow-hidden border border-charcoal/10 shadow-[var(--shadow-card)] bg-charcoal">
            <img
              src={svcFleet}
              alt="أسطول المعدات الثقيلة"
              loading="lazy"
              width={1024}
              height={576}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-7 lg:pt-12">
          <ul className="grid gap-px bg-charcoal/10 border border-charcoal/10">
            {WHY.map((w, i) => (
              <li key={i} className="flex items-center gap-6 bg-sand p-6 md:p-8">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-charcoal text-gold">
                  <w.icon className="size-6" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] tracking-[0.3em] text-gold-muted uppercase num">
                    0{i + 1} / 04
                  </div>
                  <p className="mt-1 text-lg font-bold text-charcoal">{w.label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const PROJECT_IMAGES = [
  { title: "بوابة الدرعية — حفر وردم 690,000 م³", img: projDiriyah, tall: true },
  { title: "حديقة الملك سلمان — ترحيل مخلفات", img: projUtilities },
  { title: "إنتاج مواد الكسارات", img: projCrusher },
  { title: "مترو الرياض — بنية تحتية", img: projUtilities },
  { title: "أسطول النقليات — قلابات هاردوكس", img: projTrucks, tall: true },
  { title: "أعمال طرق وأرصفة", img: projRoads },
];

function ProjectsPreview() {
  return (
    <section className="bg-charcoal py-24 md:py-32 text-white">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHead
            eyebrow="معرض المشاريع"
            title="مشاريع نوعية تخدم رؤية المملكة 2030."
            invert
          />
          <Button asChild variant="hero" size="lg">
            <Link to="/projects">
              كل المشاريع
              <ArrowLeft className="size-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {PROJECT_IMAGES.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden bg-deep-gray ${p.tall ? "row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-square"}`}
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.85) 100%)",
                }}
                aria-hidden
              />
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                <div className="text-[10px] tracking-[0.3em] uppercase text-gold num">
                  Project / {String(i + 1).padStart(2, "0")}
                </div>
                <p className="mt-2 text-base md:text-lg font-bold">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnersBlock() {
  return (
    <section className="bg-charcoal py-20 border-t border-white/5">
      <div className="container-x">
        <div className="text-center">
          <span className="eyebrow justify-center">شركاؤنا في النجاح</span>
          <h3 className="mt-4 text-2xl md:text-3xl font-bold text-white">
            بثقة كبرى الجهات الحكومية والتطويرية بالمملكة.
          </h3>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-px bg-white/5 border border-white/5">
          {PARTNERS.map((p, i) => (
            <div
              key={i}
              className="bg-charcoal p-8 flex items-center justify-center text-center text-sm md:text-base font-bold text-white/60 hover:text-gold transition-colors"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="bg-background py-24">
      <div className="container-x grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <SectionHead
            eyebrow="أسئلة شائعة"
            title="إجابات على ما يهم عملاءنا."
            intro="لمزيد من التفاصيل تواصل مع فريقنا مباشرة."
          />
          <Button asChild variant="dark" size="lg" className="mt-8">
            <Link to="/contact">تواصل مباشر</Link>
          </Button>
        </div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="border-t border-border">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-right text-lg font-bold text-charcoal hover:no-underline hover:text-gold-muted">
                  <span className="flex items-center gap-4">
                    <span className="num text-sm text-gold">0{i + 1}</span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-base text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-gold)" }}>
      <div className="absolute inset-0 industrial-grid opacity-20" aria-hidden />
      <div className="container-x relative py-20 md:py-28 text-charcoal flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <span className="text-xs tracking-[0.3em] uppercase font-bold">جاهزون للبدء</span>
          <h3 className="mt-3 text-4xl md:text-6xl font-black max-w-2xl leading-tight">
            ابدأ مشروعك اليوم.
          </h3>
          <p className="mt-4 max-w-xl text-charcoal/80 text-lg">
            من الاستشارة الأولى حتى التسليم — فريق ومعدات بين أيديكم.
          </p>
        </div>
        <Button asChild variant="dark" size="xl" className="shrink-0">
          <Link to="/contact">
            تواصل معنا
            <ArrowLeft className="size-5 rtl:rotate-180" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
