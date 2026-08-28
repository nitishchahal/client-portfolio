import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  ExternalLink,
  Sparkles,
} from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "What is Generative AI?",
    issuer: "LinkedIn",
    date: "Aug 2025",
    category: "AI",
    skills: ["Generative AI", "AI"],
    logo: "in",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "Recent Essential Training",
    issuer: "LinkedIn",
    date: "Aug 2025",
    category: "Development",
    skills: ["Professional Development"],
    logo: "in",
    credentialUrl: "#",
  },
  {
    id: 3,
    title: "Git Workflows",
    issuer: "LinkedIn",
    date: "Aug 2025",
    category: "Development",
    skills: ["Git", "Version Control"],
    logo: "in",
    credentialUrl: "#",
  },
  {
    id: 4,
    title: "Page SEO and AI Search Research with Semantic Search",
    issuer: "Coursera",
    date: "Jul 2025",
    category: "AI",
    skills: ["SEO", "AI", "Semantic Search"],
    logo: "C",
    credentialUrl: "#",
  },
  {
    id: 5,
    title: "Career Essentials in GitHub Professional Certificate",
    issuer: "GitHub",
    date: "Jul 2025",
    category: "Development",
    skills: ["GitHub", "Git", "Development"],
    logo: "GH",
    credentialUrl: "#",
  },
  {
    id: 6,
    title: "Practical GitHub Actions",
    issuer: "LinkedIn",
    date: "Jul 2025",
    category: "DevOps",
    skills: ["GitHub Actions", "CI/CD"],
    logo: "in",
    credentialUrl: "#",
  },
  {
    id: 7,
    title: "Skills in the Age of Generative AI",
    issuer: "LinkedIn",
    date: "Jul 2025",
    category: "AI",
    skills: ["Generative AI", "Future Skills"],
    logo: "in",
    credentialUrl: "#",
  },
  {
    id: 8,
    title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
    issuer: "Microsoft & LinkedIn",
    date: "Jul 2025",
    category: "AI",
    skills: ["Generative AI", "Microsoft AI"],
    logo: "MS",
    credentialUrl: "#",
  },
  {
    id: 9,
    title: "Learning Microsoft 365 Copilot for Work",
    issuer: "LinkedIn",
    date: "Jul 2025",
    category: "AI",
    skills: ["Microsoft 365", "Copilot"],
    logo: "in",
    credentialUrl: "#",
  },
  {
    id: 10,
    title: "Streamlining Your Work with Microsoft Copilot",
    issuer: "LinkedIn",
    date: "Jul 2025",
    category: "AI",
    skills: ["Microsoft Copilot", "Productivity"],
    logo: "in",
    credentialUrl: "#",
  },
  {
    id: 11,
    title: "Introduction to Artificial Intelligence",
    issuer: "LinkedIn",
    date: "Jul 2025",
    category: "AI",
    skills: ["Artificial Intelligence", "AI"],
    logo: "in",
    credentialUrl: "#",
  },
  {
    id: 12,
    title: "Amazon Web Services Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "Jul 2025",
    category: "Cloud",
    skills: ["AWS", "Cloud Computing"],
    logo: "AWS",
    credentialUrl: "#",
  },
  {
    id: 13,
    title: "Streamlining Your Work with Microsoft Copilot",
    issuer: "LinkedIn",
    date: "Jul 2025",
    category: "AI",
    skills: ["Copilot", "Productivity"],
    logo: "in",
    credentialUrl: "#",
  },
  {
    id: 14,
    title: "Generative AI: The Evolution of Thoughtful Online Search",
    issuer: "LinkedIn",
    date: "Jul 2025",
    category: "AI",
    skills: ["Generative AI", "Search Technology"],
    logo: "in",
    credentialUrl: "#",
  },
];

const categories = ["All", "Development", "AI", "Cloud", "DevOps"];

function Logo({ type }) {
  return (
    <div
      className="
        flex h-11 w-11 shrink-0 items-center justify-center
        rounded-lg
        bg-light-accent/10
        text-sm font-bold
        text-light-accent
        dark:bg-dark-accent/10
        dark:text-dark-accent
      "
    >
      {type === "in" ? (
        <span className="text-[15px] font-black tracking-tight">in</span>
      ) : (
        <span>{type}</span>
      )}
    </div>
  );
}

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCertificates =
    activeCategory === "All"
      ? certificates
      : certificates.filter((item) => item.category === activeCategory);

  return (
    <section
      id="certificates"
      className="
        relative
        py-20
        bg-light-bg
        dark:bg-dark-bg
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p
            className="
              text-sm
              font-semibold
              tracking-[0.2em]
              uppercase
              text-light-accent
              dark:text-dark-accent
              mb-3
            "
          >
            Certifications
          </p>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              font-poppins
              text-light-text
              dark:text-dark-text
            "
          >
            Learning that leaves{" "}
            <span className="text-light-accent dark:text-dark-accent">
              proof
            </span>
          </h2>

          <div
            className="
              w-20
              h-1
              bg-light-accent
              dark:bg-dark-accent
              mx-auto
              mt-5
              mb-5
            "
          />

          <p
            className="
              text-light-textMuted
              dark:text-dark-textMuted
              max-w-2xl
              mx-auto
            "
          >
            A collection of certifications and learning milestones
            across development, AI, cloud, and modern technologies.
          </p>
        </motion.div>

        {/* ================= COUNT ================= */}

        <div className="flex justify-center mb-8">
          <div
            className="
              inline-flex items-center gap-3
              rounded-xl
              border border-light-border
              bg-light-surface
              px-5 py-3
              dark:border-dark-border
              dark:bg-dark-surface
            "
          >
            <Sparkles
              size={18}
              className="text-light-accent dark:text-dark-accent"
            />

            <div className="text-left">
              <p className="text-lg font-bold font-poppins text-light-text dark:text-dark-text">
                {certificates.length}+
              </p>
              <p className="text-xs text-light-textMuted dark:text-dark-textMuted">
                Learning milestones
              </p>
            </div>
          </div>
        </div>

        {/* ================= FILTERS ================= */}

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`
                  whitespace-nowrap rounded-lg
                  border px-4 py-2
                  text-sm font-medium
                  transition-all duration-300
                  ${
                    isActive
                      ? `
                        border-light-accent
                        bg-light-accent
                        text-snow
                        dark:border-dark-accent
                        dark:bg-dark-accent
                        dark:text-charcoal
                      `
                      : `
                        border-light-border
                        bg-light-surface
                        text-light-textMuted
                        hover:border-light-accent/40
                        hover:text-light-text
                        dark:border-dark-border
                        dark:bg-dark-surface
                        dark:text-dark-textMuted
                        dark:hover:border-dark-accent/40
                        dark:hover:text-dark-text
                      `
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* ================= CERTIFICATES ================= */}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCertificates.map((certificate, index) => (
            <motion.article
              key={certificate.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              className="h-full"
            >
              <div
                className="
                  group relative h-full
                  overflow-hidden
                  rounded-xl
                  border border-light-border
                  bg-light-surface
                  p-6
                  shadow-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                  dark:border-dark-border
                  dark:bg-dark-surface
                "
              >
                <div
                  className="
                    absolute top-0 left-0
                    w-24 h-[2px]
                    bg-light-accent
                    dark:bg-dark-accent
                    opacity-0
                    group-hover:opacity-100
                    animate-skill-strike
                  "
                />

                <div className="relative flex items-start justify-between">
                  <Logo type={certificate.logo} />

                  <span
                    className="
                      rounded-lg
                      border border-light-border
                      bg-light-bg
                      px-3 py-1
                      text-[11px] font-medium
                      text-light-textMuted
                      dark:border-dark-border
                      dark:bg-dark-bg
                      dark:text-dark-textMuted
                    "
                  >
                    {certificate.category}
                  </span>
                </div>

                <div className="relative mt-6">
                  <h3
                    className="
                      min-h-[3.5rem]
                      text-lg font-bold
                      font-poppins
                      leading-6
                      text-light-text
                      transition-colors
                      group-hover:text-light-accent
                      dark:text-dark-text
                      dark:group-hover:text-dark-accent
                    "
                  >
                    {certificate.title}
                  </h3>

                  <p className="mt-2 text-sm text-light-textMuted dark:text-dark-textMuted">
                    {certificate.issuer}
                  </p>

                  <div
                    className="
                      mt-5 flex items-center gap-2
                      text-xs
                      text-light-textMuted
                      dark:text-dark-textMuted
                    "
                  >
                    <CalendarDays
                      size={14}
                      className="text-light-accent dark:text-dark-accent"
                    />
                    <span>Issued {certificate.date}</span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {certificate.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          rounded-lg
                          border border-light-border
                          bg-light-bg
                          px-2.5 py-1.5
                          text-[11px] font-medium
                          text-light-text
                          dark:border-dark-border
                          dark:bg-dark-bg
                          dark:text-dark-text
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="
                    relative mt-6
                    border-t border-light-border
                    pt-4
                    dark:border-dark-border
                  "
                >
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2
                      text-sm font-medium
                      text-light-accent
                      transition-all
                      group-hover:gap-3
                      dark:text-dark-accent
                    "
                  >
                    View credential
                    <ArrowUpRight
                      size={16}
                      className="
                        transition-transform duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= BOTTOM ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            mt-12 flex flex-col items-center justify-between
            gap-5 rounded-xl
            border border-light-border
            bg-light-surface
            p-6
            sm:flex-row
            dark:border-dark-border
            dark:bg-dark-surface
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-10 w-10 items-center justify-center
                rounded-lg
                bg-light-accent/10
                text-light-accent
                dark:bg-dark-accent/10
                dark:text-dark-accent
              "
            >
              <ExternalLink size={17} />
            </div>

            <div>
              <p className="font-semibold font-poppins text-light-text dark:text-dark-text">
                Always learning.
              </p>
              <p className="text-sm text-light-textMuted dark:text-dark-textMuted">
                More certifications coming soon.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="
              inline-flex items-center gap-2
              rounded-lg
              px-6 py-2.5
              text-sm font-medium
              bg-light-accent
              text-snow
              hover:opacity-90
              hover:-translate-y-0.5
              transition-all duration-300
              dark:bg-dark-accent
              dark:text-charcoal
            "
          >
            Let's connect
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}