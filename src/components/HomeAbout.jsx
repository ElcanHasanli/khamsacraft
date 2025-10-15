import React from 'react'
import { useLoading } from '../hooks/useLoading'
import { AboutSkeleton } from './SkeletonLoader'
import styles from '../css/HomeAbout/HomeAbout.module.css'
import MoreInfo from './MoreInfo'

export default function HomeAbout() {
  const loading = useLoading(800)
  
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutHeader}>
          <div className={styles.aboutTitle}>
            <h2>Haqqımızda</h2>
          </div>
        </div>
        
        {loading ? (
          <AboutSkeleton />
        ) : (
          <div className={styles.aboutContent}>
            <div className={styles.mainSection}>
              <h1 className={styles.mainHeading}>Biz Kimik?</h1>
              <p className={styles.mainDescription}>
                Khamsacraft olaraq, biz müştərilərimizə ən yüksək keyfiyyətli və yaradıcı həllər təqdim edən 
                bir komandayıq. Brendinq, marketinq və veb inkişaf sahəsində peşəkar xidmətlərlə 
                biznesinizi yeni zirvələrə çatdırırıq.
              </p>
            </div>

          <div className={styles.valuesGrid}>
            <div className={styles.valueColumn}>
              <h3 className={styles.valueTitle}>Missiyamız</h3>
              <p className={styles.valueDescription}>
                Müştərilərimizin ehtiyaclarını anlamaq və onlara ən yüksək keyfiyyətli 
                xidmətlər təqdim etməklə, biznesin inkişafına töhfə verməkdir. 
                Hər bir layihəyə fərdi yanaşaraq, yaradıcı və effektiv həllər təklif edirik.
              </p>
       
            </div>

            <div className={styles.valueColumn}>
              <h3 className={styles.valueTitle}>Vizyonumuz</h3>
              <p className={styles.valueDescription}>
                Azərbaycanda və beynəlxalq arenada öz sahəmizdə lider olmaq, 
                innovativ həllərlə tanınan və müştəri məmnuniyyətini ən yüksək 
                səviyyədə saxlayan bir şirkət kimi tanınmaqdır.
              </p>
              <div className={styles.moreInfoWrapper}>
                <MoreInfo link="/about" />
              </div>
            </div>
          </div>
          </div>
        )}
      </div>
    </section>
  )
}

