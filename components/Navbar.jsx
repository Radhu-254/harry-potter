'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (

  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-1/2 inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-center gap-10`}
    >
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white uppercase">
        Harry Potter 🪄
      </h2>

    </div>
  </motion.nav>
);

export default Navbar;
