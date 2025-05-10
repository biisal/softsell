import { TextReveal } from "../magicui/text-reveal";
import { motion } from "framer-motion";
import { ShieldCheck, DollarSign, RefreshCcw, Zap } from "lucide-react";

export function WhyChooseUs() {
    return (
        <div className="p-6 w-full  relative ">

            <TextReveal className="text-green-400">Unused software licenses aren't dead assets — they're opportunities waiting to be cashed in.</TextReveal>
            <Features />
        </div>


    );
}

function Features() {
    const features = [
        {
            icon: <DollarSign className="h-6 w-6" />,
            title: "Instant Valuation",
            description: "Get real-time quotes for your software licenses with zero hassle."
        },
        {
            icon: <ShieldCheck className="h-6 w-6" />,
            title: "Secure Transactions",
            description: "Every license sale is backed by our trusted, secure resale process."
        },
        {
            icon: <RefreshCcw className="h-6 w-6" />,
            title: "Effortless Selling",
            description: "List, evaluate, and cash out in just a few simple steps—no tech skills required."
        },
        {
            icon: <Zap className="h-6 w-6" />,
            title: "Fast Payouts",
            description: "Once approved, get paid instantly via your preferred method."
        }
    ];

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-300 to-green-400 bg-clip-text text-transparent">
                        Why Choose Us
                    </h2>
                    <p className="text-xl text-slate-300">
                        Join thousands who’ve turned unused software into real money with SoftSell                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="p-6 rounded-xl border-2 border-green-400/70"
                        >
                            <div className="text-green-400 mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-green-100 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-slate-300">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
