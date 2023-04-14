'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { circleVariants, staggerContainer, fadeIn } from '../utils/motion';

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`} id="spoilers">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >

        <TitleText title={<>Warning !</>} />
        <TypingText title="Spoilers ahead........" />

        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px] mx-8">
          <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[500px]">

            <h1 className="mt-[26px] font-bold text-[30px] leading-[30px] text-white">
            Trap Door Trials
            </h1>

            <p className="flex-1 mt-[16px] font-normal  max-w-[400px] lg:min-w-[600px] text-[20px] text-[#B0B0B0] leading-[32px]">
            Harry, Ron and Hermione head through the trap door and tackle five magical challenges to make it to the Sorcerer's Stone. It's time to find out if you have what it takes!
            </p>

          </div>
        </div>
      </motion.div>

      <motion.div
        variants={circleVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="trap-door.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;