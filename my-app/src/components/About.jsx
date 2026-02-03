import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { inasPixels } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[230px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = () => {
  return (
    <>
      <motion.div variants={fadeIn("", "", 0.1, 1)} className={styles.section}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Flex container for text + image */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="flex flex-col md:flex-row items-center gap-20 mt-4"
      >
        {/* Text */}
        <p className="text-secondary text-[17px] max-w-3xl leading-[30px] flex-1">
          I'm a skilled full-stack JavaScript developer and automation engineer
          with expertise in JavaScript, React, Node.js, and Three.js,
          complemented by strong experience in IoT and industrial automation. A
          quick learner and effective collaborator, I deliver efficient,
          scalable, and user-friendly solutions that address real-world
          challenges. Currently, I’m developing an innovative project that
          integrates my web development expertise with my engineering background
          — a concept that remains under wraps but is set to push the boundaries
          of both fields. Let's work together to bring your ideas to life!
        </p>

        {/* Image */}
        <div className="flex justify-center ">
          <img
            src={inasPixels}
            alt="inasPixels"
            className="max-w-[175px] w-full h-auto object-contain"
          />
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
const WrappedWorks = SectionWrapper(About, "about");
export default WrappedWorks;
