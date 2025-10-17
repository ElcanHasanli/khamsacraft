import React from 'react'
// removed loading/skeleton
import styles from '../css/HomeServices/HomeServices.module.css'
import MoreInfo from './MoreInfo'
import LogoIcon from '../images/HomeServices/Group.png'
import MarketingIcon from '../images/HomeServices/Vector.png'
import WebsiteIcon from '../images/HomeServices/Group (1).png'
import BrandingIcon from '../images/HomeServices/Vector (1).png'

export default function HomeServices() {
  const services = [
    {
      id: 1,
      icon: LogoIcon,
      title: 'Logo Hazırlanması',
      description: 'Brendinizin kimliyini əks etdirən peşəkar və yaddaqalan loqolar yaradırıq. Loqolarımız həm vizual cəlbedici, həm də brendinizi uzunmüddətli tanınma üçün gücləndirir.'
    },
    {
      id: 2,
      icon: MarketingIcon,
      title: 'Marketing Xidməti',
      description: 'Sosial mediada brendinizin görünürlüğünü artırır və auditoriyanızla effektiv əlaqə qururuq. Kreativ məzmun və strategiyalı kampaniyalarla izləyicilərinizi cəlb edir, satış və tanınmanı yüksəldirik.'
    },
    {
      id: 3,
      icon: BrandingIcon,
      title: 'Brand Naming & Tagline',
      description: 'Brendiniz üçün unikal ad və yadda qalan şüar yaradırıq. Hədəf kütlənizi cəlb edən və brendinizi bazarda fərqləndirən həllər təqdim edirik.'
    },
    {
      id: 4,
      icon: WebsiteIcon,
      title: 'Veb Saytların Hazırlanması',
      description: 'Müasir, funksional və estetik saytlar dizayn edirik. Hər sayt istifadəçi dostu və biznes məqsədlərinə uyğun hazırlanır.'
    }
  ]

  return (
    <section className={styles.servicesSection}>
      <div className="container">
        <div className={styles.servicesHeader}>
          <div className={styles.servicesTitle}>
            <h2>Xidmətlərimiz</h2>
          </div>
          <div className={styles.servicesDescription}>
            <p>Biznesinizi irəli aparan yaradıcı və effektiv həllər təqdim edirik.</p>
          </div>
        </div>
        
        <div className={styles.servicesContent}>
          {services.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.cardTop}>
                <div className={styles.serviceIcon}>
                  <img src={service.icon} alt={service.title} />
                </div>
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
              <div className={styles.cardFooter}>
                <MoreInfo link="/services" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
