import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaJs,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaPython,
  FaDatabase,
  FaVideo,
  FaCamera,
} from "react-icons/fa";
import {
  FiCode,
  FiVideo,
  FiCamera,
  FiDatabase,
} from "react-icons/fi";

const Skills = () => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const floatingIcons = [
    FaReact,
    FaJs,
    FaNodeJs,
    FaHtml5,
    FaCss3Alt,
    FaGithub,
    FaPython,
    FaDatabase,
    FaVideo,
    FaCamera,
  ];

  const getRandom = (min, max) =>
    Math.random() * (max - min) + min;

  const skills = [
    {
      icon: FiCode,
      title: "Web Development",
      subtitle: "Frontend & Backend",
      desc: "HTML, CSS, JavaScript, Tailwind CSS, React, Node.js",
    },
    {
      icon: FiVideo,
      title: "Videography & Editing",
      subtitle: "Creative Production",
      desc: "DaVinci Resolve, CapCut, Color Grading, Reels Editing",
    },
    {
      icon: FiCamera,
      title: "Photography",
      subtitle: "Visual Storytelling",
      desc: "Event Photography, Portraits, Candid Shots, Album Design",
    },
    {
      icon: FiDatabase,
      title: "Data Entry & Excel",
      subtitle: "Data Management",
      desc: "Accurate typing, formatting, spreadsheet formulas, PDF to Excel",
    },
  ];

  return (
    <section
      id="skills"
      className="
        relative
        py-16
        px-6
        md:px-20
        bg-light-bg
        dark:bg-dark-bg
        overflow-hidden
      "
    >
      {/* =========================================
          Floating Background Icons
      ========================================== */}
      <div
        className="
          absolute
          inset-0
          pointer-events-none
          overflow-hidden
        "
        aria-hidden="true"
      >
        {floatingIcons.map((Icon, i) => (
          <motion.div
            key={i}
            className="
              absolute
              text-light-accent
              dark:text-dark-accent
              opacity-20
            "
            style={{
              left: `${getRandom(0, 100)}%`,
              top: `${getRandom(0, 100)}%`,
              fontSize: `${getRandom(18, 40)}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: getRandom(6, 12),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon />
          </motion.div>
        ))}
      </div>

      {/* =========================================
          Section Heading
      ========================================== */}
      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
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
          What I Work With
        </p>

        <h2
          className="
            text-3xl
            md:text-4xl
            font-bold
            text-light-text
            dark:text-dark-text
          "
        >
          Professional{" "}
          <span className="text-light-accent dark:text-dark-accent">
            Skills
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
            max-w-2xl
            mx-auto
            text-sm
            md:text-base
            leading-relaxed
            text-light-textMuted
            dark:text-dark-textMuted
          "
        >
          A blend of technical, creative, and data-focused skills
          developed through hands-on projects and professional experience.
        </p>
      </motion.div>

      {/* =========================================
          Skills Grid
      ========================================== */}
      <div
        className="
          relative
          z-10
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6
          max-w-7xl
          mx-auto
        "
      >
        {skills.map((skill, i) => {
          const Icon = skill.icon;

          return (
            <motion.article
              key={skill.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="group relative h-full"
            >
              {/* =================================
                  Animated Border Container
              ================================== */}
              <div
                className="
                  absolute
                  -inset-[1px]
                  rounded-xl
                  overflow-hidden
                  pointer-events-none
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-300
                "
              >
                {/* Top Strike */}
                <span
                  className="
                    absolute
                    top-0
                    left-0
                    w-20
                    h-[2px]
                    bg-light-accent
                    dark:bg-dark-accent
                    animate-skill-border-top
                  "
                />

                {/* Right Strike */}
                <span
                  className="
                    absolute
                    top-0
                    right-0
                    w-[2px]
                    h-20
                    bg-light-accent
                    dark:bg-dark-accent
                    animate-skill-border-right
                  "
                />

                {/* Bottom Strike */}
                <span
                  className="
                    absolute
                    bottom-0
                    right-0
                    w-20
                    h-[2px]
                    bg-light-accent
                    dark:bg-dark-accent
                    animate-skill-border-bottom
                  "
                />

                {/* Left Strike */}
                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-[2px]
                    h-20
                    bg-light-accent
                    dark:bg-dark-accent
                    animate-skill-border-left
                  "
                />
              </div>

              {/* =================================
                  Flash Effect
              ================================== */}
              <div
                className="
                  absolute
                  inset-0
                  rounded-xl
                  pointer-events-none
                  opacity-0
                  group-hover:opacity-100
                  group-hover:animate-skill-flash
                  bg-light-accent/5
                  dark:bg-dark-accent/5
                "
              />

              {/* =================================
                  Card
              ================================== */}
              <div
                className="
                  relative
                  h-full
                  min-h-[250px]
                  p-6
                  rounded-xl
                  bg-light-surface
                  dark:bg-dark-surface
                  border
                  border-light-border
                  dark:border-dark-border
                  shadow-sm
                  flex
                  flex-col
                  items-center
                  text-center
                  overflow-hidden
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:shadow-md
                  group-hover:border-light-accent/30
                  dark:group-hover:border-dark-accent/30
                "
              >
                {/* Card Number */}
                <span
                  className="
                    absolute
                    top-4
                    right-5
                    text-xs
                    font-semibold
                    tracking-wider
                    text-light-textMuted
                    dark:text-dark-textMuted
                    opacity-60
                  "
                >
                  0{i + 1}
                </span>

                {/* Icon */}
                <div
                  className="
                    w-14
                    h-14
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    bg-light-accent/10
                    dark:bg-dark-accent/10
                    border
                    border-light-accent/10
                    dark:border-dark-accent/10
                    mb-5
                    transition-all
                    duration-300
                    group-hover:scale-105
                  "
                >
                  <Icon
                    className="
                      w-7
                      h-7
                      text-light-accent
                      dark:text-dark-accent
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-xl
                    font-semibold
                    mb-1
                    text-light-text
                    dark:text-dark-text
                  "
                >
                  {skill.title}
                </h3>

                {/* Subtitle */}
                <p
                  className="
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wider
                    text-light-accent
                    dark:text-dark-accent
                    mb-4
                  "
                >
                  {skill.subtitle}
                </p>

                {/* Divider */}
                <div
                  className="
                    w-full
                    h-px
                    bg-light-border
                    dark:bg-dark-border
                    mb-4
                  "
                />

                {/* Description */}
                <p
                  className="
                    text-sm
                    leading-6
                    text-light-textMuted
                    dark:text-dark-textMuted
                  "
                >
                  {skill.desc}
                </p>

                {/* Bottom Indicator */}
                <div className="mt-auto pt-5">
                  <div
                    className="
                      w-8
                      h-[2px]
                      bg-light-accent
                      dark:bg-dark-accent
                      opacity-40
                      transition-all
                      duration-300
                      group-hover:w-14
                      group-hover:opacity-100
                    "
                  />
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;