"use client"
import { CheckCircle } from "lucide-react"
import { Badge } from "../ui/badge"
import { Card, CardContent, CardHeader } from "../ui/card"
import { motion } from "motion/react"
import GradientText from "../gradient-text"

export const Testimonials = () => {
    const testimonials = [
        {
            quote: "I had unused licenses lying around for months. In just 3 days, they were sold and I had the cash in my account. Super easy!",
            author: "Ravi Patel",
            role: "Freelance Designer",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ravi",
            rating: 5
        },
        {
            quote: "I was skeptical at first, but the process was straightforward and transparent. Now I recommend it to all my coworkers.",
            author: "Ananya Sharma",
            role: "IT Consultant",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya",
            rating: 5
        },
        {
            quote: "Great platform! I cleared out old subscriptions from my agency and earned enough to cover new tools. Amazing concept.",
            author: "Kabir Mehta",
            role: "Agency Owner",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kabir",
            rating: 5
        }
    ];

    return (
        <section className="relative py-20">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            </div>
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge className="mb-4 bg-green-900/30 text-green-200 border-green-800/50 py-1 px-3">
                        <CheckCircle size={14} className="mr-1" /> Testimonials
                    </Badge>
                    <GradientText as="h2" className="text-4xl font-bold">
                        What our users are saying
                    </GradientText>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Thousands have already turned unused licenses into real money. Hear it from them.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-transparent border border-green-800/50 hover:border-green-600/50 transition-all duration-300 overflow-visible group">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="relative">
                                            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-600/50 group-hover:border-green-500 transition-colors duration-300">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.author}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute -bottom-2 -right-2 bg-green-700 rounded-full p-1">
                                                <CheckCircle size={12} className="text-green-100" />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-green-300 font-medium">{testimonial.author}</h4>
                                            <p className="text-sm text-slate-400">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex gap-1 mb-3">
                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                            <svg
                                                key={i}
                                                className="w-4 h-4 text-yellow-500"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>

                                    <div className="relative">
                                        <div className="absolute -top-2 -left-2 text-green-600/20">
                                            <svg
                                                className="w-8 h-8 transform -scale-x-100"
                                                fill="currentColor"
                                                viewBox="0 0 32 32"
                                            >
                                                <path d="M10 8c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.25-.438-.45 2.72-2.48 5.29-6.25 5.88v2.47c5.95-.86 10-5.42 10-11.91v-8h-6zm16 0c-3.314 0-6 2.686-6 6s2.686 6 6 6c.796 0 1.557-.156 2.25-.438-.45 2.72-2.48 5.29-6.25 5.88v2.47c5.95-.86 10-5.42 10-11.91v-8h-6z" />
                                            </svg>
                                        </div>
                                        <p className="text-slate-300 leading-relaxed pl-6">
                                            {testimonial.quote}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
