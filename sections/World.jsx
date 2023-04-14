'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText} from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`} id="potterhead">

    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`$${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >

    <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          <div className="flex-1 flex flex-col  max-w-[400px] sm:max-w-[200px] min-w-[400px] lg:min-w-[600px] ">
          <img src="/owl.png" alt="map" className="w-40 h-40 object-contain"/>
              <TitleText
              title={(<> Are you a Potterhead ?</>
              )}
              textStyles="text-center"
            />
            <p className="flex-1 justify-center mt-[16px] font-normal text-[20px] text-[#B0B0B0] leading-[32px]  px-12 lg:px-2">
            One who loves the Harry Potter series of books, the Potterverse,
             or the Wizarding World Rowling-created franchise, especially to a fanatical degree.
            </p>

            <h1 className="mt-[26px] font-bold text-[30px] leading-[30px] text-white flex justify-center">
            Yes !
            </h1>

          </div>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex justify-center lg:w-[600px] lg:h-[500px] w-full h-full"
      >
        <img src="/hero-harry.png" alt="map" className="w-full h-full object-cover " />
      </motion.div>
    </motion.div>
  </section>
);

export default World;