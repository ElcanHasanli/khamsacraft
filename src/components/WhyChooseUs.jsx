import React from 'react'
import styles from '../css/WhyChooseUs/WhyChooseUs.module.css'

function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      ),
      title: 'Vaxtında Təhvil',
      description: 'Müqavilədə göstərilən müddətlərə ciddi riayət edirik. Layihələriniz planlaşdırıldığı kimi və vaxtında tamamlanır.'
    },
    {
      id: 2,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
      title: 'Müasir Texnologiyalar',
      description: 'Ən son və effektiv texnologiyalardan istifadə edərək müştərilərimizə innovativ həllər təqdim edirik.'
    },
    {
      id: 3,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      ),
      title: 'Müştəri Məmnuniyyəti',
      description: 'Müştərinin nə ehtiyacı, nə istəyi varsa, onu həmin ehtiyacı ilə qovuşdururuq. Hər bir tələb bizim üçün önəmlidir və tam həll yolları təqdim edirik.'
    }
  ]

  return (
    <section className={styles.whySection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Niyə Bizi Seçməlisiniz?</h2>
          <p className={styles.sectionSubtitle}>
            Khamsacraft ilə işləmək sizə bir çox üstünlüklər təqdim edir
          </p>
        </div>

        <div className={styles.reasonsGrid}>
          {reasons.map((reason) => (
            <div key={reason.id} className={styles.reasonCard}>
              <div className={styles.iconWrapper}>
                {reason.icon}
              </div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs

