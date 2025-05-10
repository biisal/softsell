import GradientText from "../gradient-text";
import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center min-h-screen relative p-4 pt-20">
            <div className="w-96 h-96 rounded-full bg-green-600/30 blur-[128px] absolute  top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <h1 className="text-4xl md:text-6xl font-bold text-center flex flex-wrap gap-3 items-center justify-center mb-4">
                Turn <GradientText as="h1">Unused Software</GradientText> Into Cash
            </h1>
            <p className="text-lg text-center text-gray-300">
                Easily sell your unused software licenses and get instant payouts.
            </p>
            <i className="text-sm text-gray-400">"your software is worth more than you know"</i>

            <Terminal className="mt-8 bg-transparent">
                <TypingAnimation>&gt; softsell upload-license --file adobe-cc-2022.lic</TypingAnimation>

                <AnimatedSpan delay={1500} className="text-green-500">
                    ✔ License file validated.
                </AnimatedSpan>

                <AnimatedSpan delay={2000} className="text-green-500">
                    ✔ Fetching market valuation...
                </AnimatedSpan>

                <AnimatedSpan delay={2500} className="text-green-500">
                    ✔ Estimated value: $129.00
                </AnimatedSpan>

                <AnimatedSpan delay={3000} className="text-green-500">
                    ✔ Generating secure offer link...
                </AnimatedSpan>

                <AnimatedSpan delay={3500} className="text-green-500">
                    ✔ Offer sent to your email.
                </AnimatedSpan>

                <AnimatedSpan delay={4000} className="text-green-500">
                    ✔ Awaiting confirmation...
                </AnimatedSpan>

                <AnimatedSpan delay={4500} className="text-green-500">
                    ✔ Payment processed via PayPal.
                </AnimatedSpan>

                <TypingAnimation delay={5000} className="text-muted-foreground">
                    🎉 Transaction complete! Thank you for using SoftSell.
                </TypingAnimation>
            </Terminal>
            <Button
                variant="outline"
                className="mt-6 px-6 bg-transparent py-3 border-2 border-green-300 rounded-xl font-semibold transition duration-300
                hover:shadow-[0_0_15px_rgba(134,239,172,0.5)] hover:border-green-400 hover:text-green-500 hover:bg-green-50/5"
            >
                Sell My License
            </Button>
        </motion.div>
    );
};

export default Hero;
