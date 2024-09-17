"use client"
import { motion } from "framer-motion";
import { useState } from "react";

export default function Header({children}: any) {
    const [test, setTest] = useState(2);
    return (
        <header>
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: test }}
                // initial={{ opacity: 0, scale: 0.1 }}
                drag="x"
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                dragConstraints={{ left: -1000, right: 100 }}
                className="shadow hover:shadow-2xl hover:shadow-white"
                onClick={() => setTest(1)}
            >
                <div className="text-8xl flex flex-col">
                    <div className="pr-10">
                        <p>Tiago</p>
                    </div>
                    <div> {children} </div>
                    <div>
                        <p>Follador</p>
                    </div>
                </div>
            </motion.div>
        </header>
    );
}