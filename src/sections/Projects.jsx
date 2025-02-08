import { motion } from 'framer-motion'

const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
        },
    },
}

const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
}

const Projects = () => {
    return (
        <div className="w-full flex xl:flex-row flex-col gap-10 overflow-x-hidden justify-center min-h-screen">
            <motion.section
                variants={gridContainerVariants}
                initial="hidden"
                animate="show"
                id="home"
                className=" w-full grid grid-cols-3 p-4 gap-4 "
            >
                <motion.div
                    variants={gridSquareVariants}
                    className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-4"
                >
                    <motion.div
                        className="w-20 h-20 bg-stone-100 rounded-lg"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            ease: 'easeOut',
                            delay: 0.2,
                        }}
                    ></motion.div>
                    <motion.div
                        className="w-20 h-20 bg-stone-100 rounded-full"
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            ease: 'easeOut',
                            delay: 0.4,
                        }}
                    ></motion.div>
                </motion.div>
                <motion.div
                    variants={gridSquareVariants}
                    className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
                ></motion.div>
                <motion.div
                    variants={gridSquareVariants}
                    className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
                ></motion.div>
                <motion.div
                    variants={gridSquareVariants}
                    className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
                ></motion.div>
                <motion.div
                    variants={gridSquareVariants}
                    className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
                ></motion.div>
                <motion.div
                    variants={gridSquareVariants}
                    className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
                ></motion.div>
            </motion.section>
        </div>
    )
}

export default Projects
