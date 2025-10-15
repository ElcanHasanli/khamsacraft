import React from 'react'
import styles from '../css/Services/Services.module.css'
import LogoImage from '../images/Services/logo.png'
import BrandImage from '../images/Services/brand.png'
import MarketingImage from '../images/Services/marketing.png'
import WebsiteImage from '../images/Services/website.png'
import MaskGroupLeft from '../images/Banner/Mask group.png'
import MaskGroupRight from '../images/Banner/Mask group (1).png'

function Services() {
  const services = [
    {
      id: 1,
      image: WebsiteImage,
      title: 'Veb Saytların Hazırlanması',
      description: 'İstənilən növ saytlar, sistemlər və admin panellər hazırlayırıq. Şirkət saytları, kurs və akademiya platformaları, biznes idarəetmə sistemləri, portfolio saytlar və digər həllər təqdim edirik. Hər layihə müasir texnologiyalarla, istifadəçi dostu interfeys və biznes məqsədlərinizə uyğun funksionallıqla hazırlanır.',
      features: [
        'Responsive dizayn',
        'CMS inteqrasiyası',
        'SEO hazırlığı',
        'Texniki dəstək'
      ]
    },
    {
      id: 2,
      image: MarketingImage,
      title: 'Marketing Xidməti',
      description: 'Sosial media hesablarınızı idarə edərək, izləyicilərlə qarşılıqlı əlaqəni gücləndiririk. Strategiyadan vizual dizayna qədər bütün mərhələləri peşəkar şəkildə planlaşdırırıq. Məqsədimiz — auditoriyanızla emosional bağ yaratmaq və brendinizi onlayn məkanda fərqləndirməkdir.',
      features: [
        'Sosial media strategiyası',
        'Məzmun marketinqi',
        'SEO optimallaşdırma',
        'Analitik hesabat'
      ]
    },
    {
      id: 3,
      image: LogoImage,
      title: 'Logo Hazırlanması',
      description: 'Brendinizin ruhunu və məqsədini ifadə edən unikal loqolar dizayn edirik. Hər detal — rəng, forma və tipoqrafiya diqqətlə seçilir ki, vizual kimliyiniz güclü və yadda qalan olsun. Bizim üçün loqo sadəcə bir işarə deyil, brendin danışan simasıdır.',
      features: [
        'Unikal və yaradıcı dizayn',
        'Çoxlu format dəstəyi',
        'Sonsuz reviziya',
        'Brend kitabçası'
      ]
    },
    {
      id: 4,
      image: BrandImage,
      title: 'Brand Naming & Tagline',
      description: 'Brendiniz üçün kreativ, mənalı və asan yadda qalan adlar hazırlayırıq. Eyni zamanda brendin xarakterini tamamlaya bilən qısa, təsirli sloqanlar (tagline) yaradırıq. Bu xidmətlə auditoriyanızda inam və maraq oyadırıq, markanızı bazarda unikallaşdırırıq.',
      features: [
        'Bazar araşdırması',
        'Yaradıcı ad təklifləri',
        'Şüar hazırlanması',
        'Brend strategiyası'
      ]
    }
  ]

  return (
    <section className={styles.servicesSection}>
      <div className={styles.decorativeElements}>
        <img src={MaskGroupLeft} alt="Decorative" className={styles.decorLeft} />
        <img src={MaskGroupRight} alt="Decorative" className={styles.decorRight} />
      </div>
      <div className="container">
        <div className={styles.servicesHeader}>
          <h1 className={styles.pageTitle}>Xidmətlərimiz</h1>
          <p className={styles.pageSubtitle}>
            Biznesinizi irəli aparan yaradıcı və effektiv həllər təqdim edirik
          </p>
        </div>

        <div className={styles.servicesList}>
          {services.map((service) => (
            <div key={service.id} className={styles.serviceItem}>
              <div className={styles.serviceImage}>
                <img src={service.image} alt={service.title} />
              </div>
              <div className={styles.serviceContent}>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

