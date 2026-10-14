import { FadeIn } from '../../../../../shared/ui/FadeIn/FadeIn'
import { Cta, Devices, Faq, Features, Footer, Header, Hero, Steps } from './components'

export const Landing = () => {
  return (
    <FadeIn as="section">
      <Header />
      <Hero />
      <Features />
      <Steps />
      <Devices />
      <Faq />
      <Cta />
      <Footer />
    </FadeIn>
  );
}
