import { ConnectForm } from "./components/home/connect"
import Hero from "./components/home/hero"
import HowItWorks from "./components/home/how-it-works"
import { Testimonials } from "./components/home/testimonials"
import { WhyChooseUs } from "./components/home/why-choose-us"
import { Navbar } from "./components/navbar"
function App() {

  return (
    <main className="bg-background min-h-screen text-white">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="why-us">
        <WhyChooseUs />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <ConnectForm />
      </section>
    </main>
  )
}

export default App
