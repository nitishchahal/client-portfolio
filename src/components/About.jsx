import React from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";

import img1 from "/ProfilePic.jpg";
import Resume from "/NitishChoudhary_SoftwareDeveloper_Resume.pdf";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        py-20
        bg-light-bg
        dark:bg-dark-bg
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= SECTION HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
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
            Get To Know Me
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
            About{" "}
            <span className="text-light-accent dark:text-dark-accent">
              Me
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
            "
          />
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div
          className="
            flex
            flex-col
            md:flex-row
            items-center
            gap-12
            lg:gap-16
          "
        >

          {/* ================= PROFILE IMAGE ================= */}

          {/* ================= PROFILE IMAGE ================= */}

<motion.div
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="w-full md:w-1/2 flex justify-center"
>
  <div className="relative group">

    {/* Animated Circular Border */}

    <div
      className="
        absolute
        -inset-2
        rounded-full
        overflow-hidden
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-300
        pointer-events-none
      "
    >
      {/* Top */}
      <span
        className="
          absolute
          top-0
          left-1/2
          w-24
          h-[2px]
          bg-light-accent
          dark:bg-dark-accent
          animate-about-border-top
        "
      />

      {/* Right */}
      <span
        className="
          absolute
          top-1/2
          right-0
          w-[2px]
          h-24
          bg-light-accent
          dark:bg-dark-accent
          animate-about-border-right
        "
      />

      {/* Bottom */}
      <span
        className="
          absolute
          bottom-0
          left-1/2
          w-24
          h-[2px]
          bg-light-accent
          dark:bg-dark-accent
          animate-about-border-bottom
        "
      />

      {/* Left */}
      <span
        className="
          absolute
          top-1/2
          left-0
          w-[2px]
          h-24
          bg-light-accent
          dark:bg-dark-accent
          animate-about-border-left
        "
      />
    </div>

    {/* Outer Ring */}

    <div
      className="
        relative
        w-64
        h-64
        md:w-72
        md:h-72
        lg:w-80
        lg:h-80
        rounded-full
        p-1
        bg-light-accent
        dark:bg-dark-accent
        transition-all
        duration-500
        group-hover:-translate-y-1
        group-hover:shadow-xl
      "
    >
      {/* Image Container */}

      <div
        className="
          w-full
          h-full
          rounded-full
          overflow-hidden
          bg-light-bg
          dark:bg-dark-bg
          border-4
          border-light-bg
          dark:border-dark-bg
        "
      >
        <img
          src={img1}
          alt="Nitish Choudhary"
          className="
            w-full
            h-full
            object-cover
            object-center
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />
      </div>
    </div>

    {/* Small Decorative Dot */}

    <span
      className="
        absolute
        bottom-5
        right-5
        w-5
        h-5
        rounded-full
        bg-light-accent
        dark:bg-dark-accent
        border-4
        border-light-bg
        dark:border-dark-bg
        shadow-sm
      "
    />
  </div>
</motion.div>

          {/* ================= ABOUT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >

            <p
              className="
                text-sm
                font-semibold
                tracking-wider
                uppercase
                text-light-accent
                dark:text-dark-accent
                mb-3
              "
            >
              Full Stack Developer
            </p>

            <h3
              className="
                text-2xl
                md:text-3xl
                font-bold
                mb-5
                font-poppins
                text-light-text
                dark:text-dark-text
              "
            >
              Building scalable applications with{" "}
              <span className="text-light-accent dark:text-dark-accent">
                modern technology.
              </span>
            </h3>

            <p
              className="
                mb-6
                leading-7
                text-light-textMuted
                dark:text-dark-textMuted
              "
            >
              I'm a Full Stack Developer focused on building modern,
              scalable, and user-friendly web applications using the
              MERN stack. I enjoy turning ideas into clean, efficient,
              and maintainable digital products.
            </p>

            <p
              className="
                mb-8
                leading-7
                text-light-textMuted
                dark:text-dark-textMuted
              "
            >
              My experience spans frontend and backend development,
              REST API integration, authentication, database management,
              software design, debugging, and frontend performance
              optimization.
            </p>

            {/* ================= BUTTONS ================= */}

            <div className="flex flex-wrap gap-4">

              <a
                href={Resume}
                download
                className="
                  px-6
                  py-2.5
                  rounded-lg
                  font-medium
                  bg-light-accent
                  text-snow
                  dark:bg-dark-accent
                  dark:text-charcoal
                  hover:opacity-90
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-2
                  hover:-translate-y-0.5
                "
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </a>

              <a
                href="#contact"
                className="
                  px-6
                  py-2.5
                  rounded-lg
                  font-medium
                  border
                  border-light-accent
                  text-light-accent
                  dark:border-dark-accent
                  dark:text-dark-accent
                  hover:bg-light-accent
                  hover:text-snow
                  dark:hover:bg-dark-accent
                  dark:hover:text-charcoal
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-2
                  hover:-translate-y-0.5
                "
              >
                Hire Me
                <FiArrowRight className="w-4 h-4" />
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;