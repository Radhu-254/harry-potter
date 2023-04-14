'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';


const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`} id="home">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-20 mb-5">

        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Welcome to Hogwarts
        </motion.h1>

      </div>

      <motion.div
        variants={slideIn('left', 'tween', 0.5, 1)}
        className="relative w-full md:-mt-[20px] -mt-[12px]"
      >


        <img
          src="hero.png"
          alt="hero_cover"
          className="w-full sm:h-[500px] lg:h-[600px] object-cover rounded-tr-[180px] mr-10 z-10 relative"
        />


        <a href="#explore">
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
            <img
              src="/explore-more.png"
              alt="stamp"
              className="sm:w-[180px] w-[155px] sm:h-[200px] h-[155px] object-contain"
            />
          </div>
        </a>

      </motion.div>

    </motion.div>
  </section>
);

export default Hero;
