"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapPin,
  faPhone,
  faCheckCircle,
  faLayerGroup,
  faArrowUp,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { data } from "./data";

export default function Home() {
  // الحالات (States)
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubmitting] = useState(false);

  // معالجة التمرير (Scroll) بأداء عالٍ
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          setShowBackToTop(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // معالجة إرسال النموذج (Form Submission)
  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  //   setSubmitMessage(null);

  //   const formData = new FormData(e.target);

  //   try {
  //     // تنبيه: استبدل الرابط أدناه برابط Formspree الخاص بك
  //     const response = await fetch("https://formspree.io/f/your-endpoint", {
  //       method: "POST",
  //       body: formData,
  //       headers: { Accept: "application/json" },
  //     });

  //     if (response.ok) {
  //       setSubmitMessage({
  //         type: "success",
  //         text: "تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.",
  //       });
  //       e.target.reset();
  //     } else {
  //       setSubmitMessage({
  //         type: "error",
  //         text: "عذراً، حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.",
  //       });
  //     }
  //   } catch (error) {
  //     setSubmitMessage({
  //       type: "error",
  //       text: "تعذر الاتصال بالخادم. يرجى التحقق من اتصال الإنترنت الخاص بك.",
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //     // إخفاء الرسالة بعد 5 ثوانٍ
  //     setTimeout(() => setSubmitMessage(null), 5000);
  //   }
  // };

  // روابط التنقل
  const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "من أنا", href: "#about" },
    { name: "خدماتي", href: "#services" },
    { name: "أعمالي", href: "#projects" },
  ];

  return (
    <>
      <Head>
        <title>محمد الهادي | مطور ويب</title>
        <meta
          name="description"
          content="محمد الهادي - مهندس برمجيات ومطور ويب متخصص في بناء تجارب رقمية مبتكرة."
        />
        <meta property="og:title" content="محمد الهادي | مطور ويب" />
        <meta
          property="og:description"
          content="أحول الأفكار إلى واقع رقمي. تطوير ويب، تصميم UI/UX، وتطبيقات موبايل."
        />
        <meta property="og:image" content="/profile.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen font-sans" dir="rtl">
        {/* Navbar */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled || isMobileMenuOpen
              ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200"
              : "bg-transparent"
          }`}
        >
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-slate-800">محمد الهادي</h1>

            {/* القائمة لشاشات الكمبيوتر */}
            <div className="hidden md:flex space-x-8 space-x-reverse text-slate-600 font-medium items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-blue-600 transition"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-lg lg:mr-[10px] shadow-blue-600/30"
              >
                تواصل معي
              </a>
            </div>

            {/* زر القائمة لشاشات الجوال */}
            <button
              className="md:hidden text-slate-800 text-2xl focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="القائمة الرئيسية"
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} />
            </button>
          </div>

          {/* القائمة المنسدلة لشاشات الجوال */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
              >
                <div className="flex flex-col px-6 py-4 space-y-4 text-center">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="text-slate-600 hover:text-blue-600 font-medium py-2"
                    >
                      {link.name}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={closeMobileMenu}
                    className="bg-blue-600 text-white px-5 py-3 rounded-xl hover:bg-blue-700 transition font-medium mx-auto w-full max-w-xs"
                  >
                    تواصل معي
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 container mx-auto flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-1/2 space-y-6 text-center md:text-right z-10">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-2">
              👋 مرحباً، أنا محمد الهادي
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              تحويل الأفكار إلي <br />
              <span className="text-blue-600">واقع رقمي</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto md:mx-0">
              مهندس برمجيات ومطور ويب متخصص في بناء تجارب رقمية مبتكرة وجذابة.
              أساعد الشركات والأفراد على تحقيق أهدافهم من خلال حلول تقنية
              متكاملة.
            </p>
            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <a
                href="#projects"
                className="px-8 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition font-semibold shadow-xl"
              >
                أعمالي
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
            <div className="absolute w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            <Image
              src="/profile.png"
              alt="صورة شخصية لمحمد الهادي"
              width={400}
              height={400}
              priority
              className="relative z-10 rounded-full border-4 border-white shadow-2xl object-cover w-64 h-64 md:w-96 md:h-96"
            />
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">
                    من أنا؟
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {data.info.aboutme}
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                      <span className="block text-4xl font-black text-blue-600 mb-1">
                        +2
                      </span>
                      <span className="text-sm font-medium text-slate-500">
                        سنوات خبرة
                      </span>
                    </div>
                    <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                      <span className="block text-4xl font-black text-blue-600 mb-1">
                        +{data.info.projectsCount || 0}
                      </span>
                      <span className="text-sm font-medium text-slate-500">
                        مشروع مكتمل
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 text-center md:text-right">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">
                  لماذا تختارني؟
                </h2>
                <ul className="space-y-5">
                  {data.info.whyWeChoose.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-4 text-slate-700 text-lg"
                    >
                      <div className="bg-green-100 p-2 rounded-full text-green-600 flex-shrink-0 mt-1">
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="w-4 h-4"
                        />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section
          id="services"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 bg-slate-50"
        >
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                خدماتي وخبراتي
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                أقدم مجموعة متكاملة من الخدمات الرقمية لمساعدتك في نجاح مشروعك
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.services.map((service, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition duration-300 group"
                >
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <FontAwesomeIcon icon={service.icon} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 bg-white"
        >
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  أبرز الأعمال
                </h2>
                <p className="text-slate-600 text-lg">
                  مجموعة مختارة من أحدث المشاريع التي قمت بتنفيذها
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.projects.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition duration-300 bg-white"
                >
                  <div className="relative h-64 bg-slate-100 overflow-hidden">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title || "صورة المشروع"}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                      {item.liveLink && (
                        <button
                          title="معاينة حية"
                          aria-label="رابط المعاينة المباشرة"
                          className="bg-white text-slate-900 p-3 rounded-full hover:bg-blue-600 hover:text-white transition transform hover:scale-110"
                          onClick={() => window.open(item.liveLink, "_blank")}
                        >
                          <FontAwesomeIcon
                            icon={faLayerGroup}
                            className="w-5 h-5"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">
                      {item.title}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {item.description}
                    </h3>
                    {item.technologies && (
                      <div className="flex gap-2 flex-wrap">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1.5 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        {data.certificates && data.certificates.length > 0 && (
          <section
            id="certifications"
            className="py-20 bg-slate-900 text-white"
          >
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  شهادات التزكية والخبرة
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  تقديرًا للجهود المبذولة والنتائج المحققة في المؤسسات والشركات
                  التي تشرفت بالعمل معها.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {data.certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="group bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2 shadow-lg"
                  >
                    <div className="relative h-48 bg-slate-700 overflow-hidden">
                      {
                        <div className="flex items-center justify-center h-full text-slate-500">
                          <FontAwesomeIcon
                            icon={faLayerGroup}
                            className="text-4xl"
                          />
                        </div>
                      }
                    </div>

                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
                          {cert.issuer}
                        </span>
                        <span className="text-xs text-slate-500">
                          {cert.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition">
                        {cert.title}
                      </h3>

                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-400 transition group/link"
                        >
                          عرض الشهادة الأصلية
                          <FontAwesomeIcon
                            icon={faLayerGroup}
                            className="text-[10px] transform group-hover/link:translate-x-[-2px] transition-transform"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 bg-slate-50"
        >
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
              {/* معلومات التواصل */}
              <div className="md:w-5/12 bg-slate-900 p-10 md:p-12 text-white flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold mb-4">لنتحدث!</h2>
                  <p className="text-slate-400 mb-10 leading-relaxed">
                    هل لديك فكرة مشروع؟ أو تريد فقط إلقاء التحية؟ لا تتردد في
                    مراسلتي وسأرد عليك في أقرب وقت.
                  </p>

                  <div className="space-y-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-blue-400"
                        />
                      </div>
                      <div className="pt-2">
                        <span className="block text-slate-300 font-medium">
                          {data.contact.email}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="text-blue-400"
                        />
                      </div>
                      <div className="pt-2">
                        <span
                          className="block text-slate-300 font-medium"
                          dir="ltr"
                        >
                          {data.contact.phone}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faMapPin}
                          className="text-blue-400"
                        />
                      </div>
                      <div className="pt-2">
                        <span className="block text-slate-300 font-medium">
                          {data.contact.address}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-12">
                  <a
                    href={data.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                  </a>
                  <a
                    href={data.contact.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* نموذج التواصل */}
              <div className="md:w-7/12 p-10 md:p-14">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">
                  أرسل لي رسالة
                </h3>

                {/* {submitMessage && (
                  <div
                    className={`p-4 rounded-lg mb-6 ${submitMessage.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}
                  >
                    {submitMessage.text}
                  </div>
                )} */}

                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        الاسم بالكامل
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="أدخل اسمك"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-slate-700 mb-2"
                      >
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                        placeholder="example@domain.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      موضوع الرسالة
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                      placeholder="بخصوص ماذا تريد التحدث؟"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700 mb-2"
                    >
                      الرسالة
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-y"
                      placeholder="اكتب تفاصيل رسالتك هنا..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition font-bold text-lg shadow-lg shadow-blue-600/30 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
          <p>
            &copy; {new Date().getFullYear()} محمد الهادي. جميع الحقوق محفوظة.
          </p>
        </footer>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="fixed bottom-8 left-8 bg-blue-600 text-white w-12 h-12 rounded-full shadow-xl hover:bg-blue-700 transition z-50 focus:outline-none flex items-center justify-center group"
              aria-label="العودة للأعلى"
            >
              <FontAwesomeIcon
                icon={faArrowUp}
                className="w-5 h-5 group-hover:-translate-y-1 transition-transform"
              />
            </motion.button>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
