import { Cta, Devices, Faq, Features, Footer, Header, Hero, Steps } from './components'

export const Landing = () => {
  return (
    <section>
      <Header />
      <Hero />
      <Features />
      <Steps />
      <Devices />
      <Faq />
      <Cta />
      <Footer />
    </section>
  );
}
