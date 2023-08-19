'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function Intro() {
    return (
        <section>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        transition={{ bounce: true, ease: 'easeInOut', duration: 0.4 }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Image
                            priority={true}
                            className={`h-40 w-40 rounded-full border-[0.15rem] object-cover border-slate-50 shadow-xl`}
                            quality={95}
                            width={192}
                            height={192}
                            src={'/profile-pic.png'}
                            alt='rafli dewanto' />
                    </motion.div>
                    <motion.span
                        transition={{ bounce: true, ease: 'easeInOut', duration: 0.4 }}
                        initial={{ y: 300, x: -300, opacity: 0 }}
                        animate={{ y: 0, x: 0, opacity: 1 }}
                        className='text-4xl absolute bottom-0 right-0'>
                        🚀
                    </motion.span>
                </div>
            </div>
        </section>
    )
}
