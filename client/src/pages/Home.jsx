import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';

import state from '../store';
import { CustomButton } from '../components';
import { 
    headContainerAnimation, 
    headContentAnimation, 
    headTextAnimation, 
    slideAnimation 
} from '../config/motion';


const Home = () => {
    // Specifying default values
    const snap = useSnapshot(state)
    return (
        <AnimatePresence>
            {snap.intro && (
                <>
                    <motion.section className="home" {...slideAnimation("left")}>
                        <motion.header {...slideAnimation("down")}>
                            <img src="./t-shirt-logo.png" alt="logo" className="w-20 h-20 object-contain" />
                        </motion.header>

                        <motion.div className="home-content" {...headContainerAnimation}>
                            <motion.div {...headTextAnimation}>
                                <h1 className="text-8xl font-bold">
                                    <span className="alt-font">Design</span><br />YOUR VIBE.
                                </h1>
                            </motion.div>

                            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
                                <p className="max-w-md font-normal text-gray-600 text-base">
                                    Unleash your inner artist and design your own T-shirt with our 3D customisable tool.
                                </p>

                                <p className="max-w-md font-normal text-gray-600 text-base">
                                    Ai feature disabled due to paid subscription needed.
                                </p>

                                <CustomButton
                                    type="filled"
                                    title="Customise now"
                                    handleClick={() => state.intro = false}
                                    customStyles="w-fit px-4 py-2.5 font-blod text-sm"
                                />
                            </motion.div>
                        </motion.div>
                    </motion.section>
                </>
            )}
        </AnimatePresence>
    )
}

export default Home;
