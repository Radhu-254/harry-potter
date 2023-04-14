'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { harryFeatures } from '../constants';
import { StartSteps, TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn, circleVariants } from '../utils/motion';

const Harry= () => (
  <section className={`${styles.paddings} relative z-10`} id="harry">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={circleVariants('left')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/harry.jpg"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain rounded-full"
        />

      </motion.div>
      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title=" The Hero" />
        <TitleText title={<>Harry Potter</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {harryFeatures.map((feature, index) => (
            <StartSteps
              key={feature}
              number={index+1}
              text={feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default Harry;
