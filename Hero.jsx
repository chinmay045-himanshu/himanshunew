import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1 className="text-5xl font-bold" initial={{ y: -100 }} animate={{ y: 0 }}>
        Hi, I'm Himanshu Bokey
      </motion.h1>
      <motion.p className="text-lg mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Crafting Ideas, Building Solutions – One Pixel at a Time.
      </motion.p>
    </section>
  );
}
