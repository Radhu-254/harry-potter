
'use client';

import { motion } from 'framer-motion';

import { fadeIn } from '../utils/motion';

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn('up', 'spring', index * 0.5, 1)}
    className="flex md:flex-row flex-col gap-2"
  >
    <img
      src={imgUrl}
      alt={title}
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover lg:min-w-[500px]"
    />

    <div className="w-full flex justify-between items-center ">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px] lg:min-w-[600px] mr-12">
        <h4 className="font-normal lg:text-[32px] text-[26px] text-white">
          {title}
        </h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white mr-12">
          {subtitle}
        </p>
      </div>
    </div>

  </motion.div>
);

export default InsightCard;
