import { MagicCard } from "../magicui/magic-card"
import { ArrowRight, Rocket, Search, Zap } from "lucide-react"

const HowItWorks = () => {

    return (
        <div className="p-6 w-full max-w-3xl mx-auto relative ">
            <div className="w-96 h-96 rounded-full bg-green-600/30 blur-[128px] absolute  top-1/3 left-0 -translate-x-1/2 -translate-y-1/2" />

            <h1 className="text-4xl font-bold mb-8 text-left w-full">How It Works</h1>
            <div className="flex min-h-[400px] gap-6">
                <div className="relative">
                    <div className="bg-gradient-to-b from-green-500 to-green-600/20 w-1 rounded-full absolute h-full left-0 top-0"></div>
                </div>
                <div className="flex flex-col gap-8 w-full">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="relative">
                            <div className="absolute -left-10 z-10 bg-background rounded-full p-1.5 border-2 border-green-500">
                                {step.icon}
                            </div>
                            <MagicCard
                                gradientColor={step.color}
                                gradientFrom="#9E7AFF"
                                gradientTo={step.color}
                                className="p-1 rounded-xl border-0 outline-none bg-none transition-all duration-300"
                            >
                                <div className="flex flex-col items-start p-5 bg-background border-1 border-green-500 rounded-xl space-y-3">
                                    <h4 className="text-xl font-bold flex items-center gap-2">
                                        Step {index + 1}
                                        <span className="text-green-500 text-sm font-normal">
                                            {index < steps.length - 1 && <ArrowRight className="h-4 w-4 inline ml-1" />}
                                        </span>
                                    </h4>
                                    <p className="text-muted-foreground">{step.description}</p>
                                    {step.detail && <p className="text-sm">{step.detail}</p>}
                                </div>
                            </MagicCard>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const steps = [
    {
        icon: <Search className="h-4 w-4 text-green-500" />,
        description: "Upload Your License Details",
        detail: "Submit information about the software you want to sell — product name, license key, and version. We support top vendors like Adobe, Microsoft, and more.",
        color: "#00FF54",
    },
    {
        icon: <Zap className="h-4 w-4 text-green-500" />,
        description: "Instant Valuation & Offer",
        detail: "Our system analyzes the market value of your license and generates an instant offer. No haggling, no waiting.",
        color: "#00E062",
    },
    {
        icon: <Rocket className="h-4 w-4 text-green-500" />,
        description: "Get Paid Quickly",
        detail: "Once verified, we process your payment via your chosen method — bank transfer, PayPal, or store credit — usually within 24 hours.",
        color: "#00C070",
    },
]

export default HowItWorks
