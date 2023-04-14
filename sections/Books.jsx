'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer, zoomIn } from '../utils/motion';
import { TitleText ,TypingText} from '../components';
import { BOOK_1,BOOK_2,BOOK_3,BOOK_4,BOOK_5,BOOK_6,BOOK_7 } from '../constants';


const Books = () => (
  <section className={`${styles.paddings}`} id="books">
       <TypingText title="Here you go Potterheads !" textStyles="text-center" />

        <TitleText
          title={<> Get Ready for the Harry Potter Marathon ! </>}
          textStyles="text-center"
        />

{BOOK_1.map((book) => (

  <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mt-12 mx-auto flex lg:flex-row flex-col gap-2`}
    >

      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
      >

        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white capitalize">
            {book.name}
          </h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
            {book.no}
          </p>
        </div>

        <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
        {book.desc}

        </p>
      </motion.div>

      <motion.div
        variants={fadeIn('left', 'tween', 0.2, 1)}
        className="relative flex-1 flex justify-center items-center"
      >
        <img
          src={book.image}
          alt="book2"
          className="w-full lg:h-[610px] h-auto min-h-[210px] object-contain rounded-[40px]"
        />
      </motion.div>
    </motion.div>
  ))}

{BOOK_2.map((book) => (

<motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mt-12 mx-auto flex lg:flex-row flex-col gap-2`}
  >
    <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="relative flex-1 flex justify-center items-center"
    >
      <img
        src={book.image}
        alt="book2"
        className="w-full lg:h-[610px] h-auto min-h-[210px] object-contain rounded-[40px]"
      />
    </motion.div>

    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
    >

      <div className="feedback-gradient" />
      <div>
        <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white capitalize">
          {book.name}
        </h4>
        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          {book.no}
        </p>
      </div>

      <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
      {book.desc}

      </p>
    </motion.div>
  </motion.div>
))}

{BOOK_3.map((book) => (

<motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mt-12 mx-auto flex lg:flex-row flex-col gap-2`}
  >
    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
    >

      <div className="feedback-gradient" />
      <div>
        <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white capitalize">
          {book.name}
        </h4>
        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          {book.no}
        </p>
      </div>

      <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
      {book.desc}

      </p>
    </motion.div>

    <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="relative flex-1 flex justify-center items-center"
    >
      <img
        src={book.image}
        alt="book2"
        className="w-full lg:h-[610px] h-auto min-h-[210px] object-contain rounded-[40px]"
      />

    </motion.div>
  </motion.div>
))}

{BOOK_4.map((book) => (

<motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mt-12 mx-auto flex lg:flex-row flex-col gap-2`}
  >
    <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="relative flex-1 flex justify-center items-center"
    >
      <img
        src={book.image}
        alt="book2"
        className="w-full lg:h-[610px] h-auto min-h-[210px] object-contain rounded-[40px]"
      />
    </motion.div>

    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
    >
      <div className="feedback-gradient" />
      <div>
        <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white capitalize">
          {book.name}
        </h4>
        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          {book.no}
        </p>
      </div>

      <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
      {book.desc}

      </p>
    </motion.div>
  </motion.div>
))}

{BOOK_5.map((book) => (

<motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mt-12 mx-auto flex lg:flex-row flex-col gap-2`}
  >

    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
    >

      <div className="feedback-gradient" />
      <div>
        <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white capitalize">
          {book.name}
        </h4>
        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          {book.no}
        </p>
      </div>

      <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
      {book.desc}

      </p>
    </motion.div>

    <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="relative flex-1 flex justify-center items-center"
    >
      <img
        src={book.image}
        alt="book2"
        className="w-full lg:h-[610px] h-auto min-h-[210px] object-contain rounded-[40px]"
      />
    </motion.div>
  </motion.div>
))}

{BOOK_6.map((book) => (

<motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mt-12 mx-auto flex lg:flex-row flex-col gap-2`}
  >

    <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="relative flex-1 flex justify-center items-center"
    >
      <img
        src={book.image}
        alt="book2"
        className="w-full lg:h-[610px] h-auto min-h-[210px] object-contain rounded-[40px]"
      />
    </motion.div>

    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
    >

      <div className="feedback-gradient" />
      <div>
        <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white capitalize">
          {book.name}
        </h4>
        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          {book.no}
        </p>
      </div>

      <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
      {book.desc}

      </p>
    </motion.div>
  </motion.div>
))}

{BOOK_7.map((book) => (

<motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`${styles.innerWidth} mt-12 mx-auto flex lg:flex-row flex-col gap-2`}
  >

    <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.5] lg:max-w-[600px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative"
    >

      <div className="feedback-gradient" />
      <div>
        <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white capitalize">
          {book.name}
        </h4>
        <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22.68px] leading-[16.68px] text-white">
          {book.no}
        </p>
      </div>

      <p className="mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45.6px] leading-[39.6px] text-white">
      {book.desc}

      </p>
    </motion.div>

    <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="relative flex-1 flex justify-center items-center"
    >
      <img
        src={book.image}
        alt="book2"
        className="w-full lg:h-[610px] h-auto min-h-[210px] object-contain rounded-[40px]"
      />
    </motion.div>
  </motion.div>
))}

  </section>
);

export default Books;
