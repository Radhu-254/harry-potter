"use client"

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import styles from "../styles";
import { slideIn ,fadeIn} from "../utils/motion";
import { TypingText,TitleText } from "../components";
import { STUDENT,STAFF,FOUNDERS } from "../constants";

const PhotosGrid = () => {
  return (

    <section className={`${styles.paddings} relative z-10`} id="characters">

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Meet the Characters" textStyles="text-center" />
        <TitleText
          title={<>Students </>}
          textStyles="text-center"
        />
        <div className="lg:grid lg:grid-cols-3  flex-[1] flex-row  gap-5 lg:height-[125px] lg:width-[125px] justify-evenly mt-12">
          {STUDENT.map((student) => (
              <motion.div
                  variants={slideIn('left', 'spring', student.id*0.5, 1)}
                  className={`flex-1 ${styles.flexCenter}`}
              >
                  <a href="#harry">
                     <img className="lg:w-52 w-48 lg:h-52 h-48 lg:ml-0 ml-12 object-cover rounded-full mt-12 " src={student.image} alt={student.name} />
                  </a>
                  <br className="hidden"/>
                  <h2 className="absolute bottom-0 left-0 w-44  px-4 py-2 bg-black bg-opacity-50 rounded-lg text-white lg:text-xl text-2xl capitalize ">{student.name}</h2>
             </motion.div>
           ))}
        </div>

      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col mt-24`}
      >

        <TitleText
          title={<>Hogwarts Staff </>}
          textStyles="text-center"
        />
        <div className="lg:grid lg:grid-cols-3  flex-[1] flex-row  gap-5 lg:height-[125px] lg:width-[125px] justify-evenly mt-12">
          {STAFF.map((staff) => (
              <motion.div
                  variants={slideIn('right', 'spring', staff.id*0.5, 1)}
                  className={`flex-1 ${styles.flexCenter}`}
              >
                  <a href="#hagrid">
                     <img className="lg:w-52 w-48 lg:h-52 h-48 lg:ml-0 mr-12 object-cover rounded-full mt-12 z-10" src={staff.image} alt={staff.name} />
                  </a>
                  <h2 className="absolute bottom-0 right-0 w-44  px-4 py-2 bg-black bg-opacity-50 rounded-lg text-white lg:text-xl text-2xl capitalize">{staff.name}</h2>
             </motion.div>
           ))}
        </div>

      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col mt-24`}
      >

        <TitleText
          title={<>He who must not be named </>}
          textStyles="text-center"
        />
        <div className="lg:grid lg:grid-cols-1  flex-[1] flex-row  gap-5 lg:height-[125px] lg:width-[125px] justify-evenly mt-12">

              <motion.div
                  variants={fadeIn('up', 'spring', 0.5, 1)}
                  className={`flex-1 ${styles.flexCenter}`}
              >
                  <a href="#voldemort">
                     <img className="lg:w-52 w-48 lg:h-52 h-48 lg:ml-0 ml-12 object-cover rounded-full mt-12  " src="voldemort.jpg" alt="voldemort"/>
                  </a>
             </motion.div>
        </div>

        <TypingText title="Lord Voldemort" textStyles="text-center" />

      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col mt-24`}
      >
        <TitleText
          title={<>Founders </>}
          textStyles="text-center"
        />
        <div className="lg:grid lg:grid-cols-2  flex-[1] flex-row  gap-5 lg:height-[125px] lg:width-[125px] justify-evenly mt-12">
          {FOUNDERS.map((founder) => (
              <motion.div
                  variants={slideIn('right', 'tween', founder.id*0.5, 1)}
                  className={`flex-1 ${styles.flexCenter}`}
              >

                  <img className="lg:w-60 w-48 lg:h-60 h-48 lg:ml-0 ml-12 object-cover rounded-full mt-12 z-10" src={founder.image} alt={founder.name} />

                  <h2 className="absolute bottom-0 left-0 w-44  px-4 py-2 bg-black bg-opacity-50 rounded-lg text-white lg:text-xl text-2xl capitalize">{founder.name}</h2>
             </motion.div>
           ))}
        </div>
      </motion.div>
    </section>
  )}

export default PhotosGrid;