'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`} id="about">
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="What is Hogwarts ?" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Hogwarts School of Witchcraft and Wizardry</span>{' '} is a fictional boarding school of magic for students aged eleven to eighteen, and is the primary setting for the first six books in J. K. Rowling's Harry Potter {' '}
        <span className="font-extrabold text-white">
        J. K. Rowling's Harry Potter
        </span>{' '}
        series and serves as a major setting in the Wizarding World universe. Founded around the 9th century and 10th century by{' '}
        <span className="font-extrabold text-white"> Godric Gryffindor, Rowena Ravenclaw, Helga Hufflepuff and Salazar Slytherin</span>, Hogwarts was established in the Highlands of Scotland to educate young wizards and witches as well as to keep students safe from muggle persecution
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
