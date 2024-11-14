import React from 'react';
import SustainabilityHero from './SustainabilityHero';
import GlobalGoals from './GlobalGoals';
import SustainabilityInitiatives from './SustainabilityInitiatives';
import GlobalTransitionRole from './GlobalTransitionRole';

export const metadata = {
  title: 'Fairweather Energy | Sustainability',
  description:
    'Fairweather Energy stödjer FN:s Globala Mål genom hållbara energilösningar som minskar koldioxidutsläpp och ökar energisjälvförsörjning.',
  openGraph: {
    siteName: 'Fairweather Energy',
    title: 'Fairweather Energy | Sustainability',
    description:
      'Vi bidrar till en hållbar framtid genom effektiva energilagringslösningar som stöder globala mål och minskar klimatpåverkan.',
    url: 'https://www.fairweather.energy/sustainability',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fairweather Energy - Hållbarhet och FN:s globala mål',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fairweather Energy | Sustainability',
    description:
      'Fairweather Energy är engagerade i att skapa hållbara energilösningar som stöder FN:s globala mål för en bättre framtid.',
    images: ['/images/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.fairweather.energy/sustainability',
  },
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'Sustainability',
        description:
          'Fairweather Energy arbetar med hållbara energilösningar som främjar FN:s globala mål och minskar beroendet av fossila bränslen.',
        provider: {
          '@type': 'Organization',
          name: 'Fairweather Energy',
          url: 'https://www.fairweather.energy',
        },
      }),
    },
  ],
};

const SustainabilityPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section id="sustainability-hero">
        <SustainabilityHero />
      </section>
      <section id="global-goals">
        <GlobalGoals />
      </section>
      <section id="sustainability-initiatives">
        <SustainabilityInitiatives />
      </section>
      <section id="global-transition-role">
        <GlobalTransitionRole />
      </section>
    </div>
  );
};

export default SustainabilityPage;
