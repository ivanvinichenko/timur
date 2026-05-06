import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion' 
import s from './Callback.module.scss'
import CustomFormik from './CustomFormik'
import SuccessPage from './SuccessPage'


const containerVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
    exit: { 
        opacity: 0, 
        y: -20, 
        transition: { duration: 0.4, ease: "easeIn" }
    }
}

export default function Callback() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (
        <div id='callback' className={s.callBack_box}>
            <AnimatePresence mode="wait">
                {!isSubmitted ? (

                    <motion.div 
                        key="form-block"
                        className={s.formWrapper} 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <div className={s.callBack_box__leftSide}>
                            <h3 className={s.callBack_box__leftSide__heading}>Оставьте номер!</h3>
                            <p className={s.callBack_box__leftSide__desc}>
                                и наш прораб свяжется с вами и проконсультирует в ближайшее время!
                            </p>
                        </div>
                        <CustomFormik setComplete={() => setIsSubmitted(true)} />
                    </motion.div>
                ) : (
                    <motion.div 
                        key="success-block"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <SuccessPage /> 
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}