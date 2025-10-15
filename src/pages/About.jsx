import React from 'react'
import styles from '../css/About/About.module.css'
import AboutImage from '../images/About/About.png'
import MaskGroupLeft from '../images/Banner/Mask group.png'
import MaskGroupRight from '../images/Banner/Mask group (1).png'

function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.decorativeElements}>
        <img src={MaskGroupLeft} alt="Decorative" className={styles.decorLeft} />
        <img src={MaskGroupRight} alt="Decorative" className={styles.decorRight} />
      </div>
      <div className="container">
        <div className={styles.aboutHero}>
          <div className={styles.imageWrapper}>
            <img src={AboutImage} alt="About KhamsaCraft" className={styles.heroImage} />
          </div>
        </div>

        <div className={styles.aboutContent}>
          <h1 className={styles.mainTitle}>Biz Kimik?</h1>
          
          <div className={styles.textContent}>
            <p className={styles.paragraph}>
            KhamsaCraft — müasir IT və marketinq komandasıdır, biznes məqsədlərinizə çatmaq üçün kreativ düşüncə ilə innovativ texnologiyaları birləşdirir.
            Biz brendlərin böyüməsinə, auditoriya cəlb etməsinə və bazarda fərqlənməsinə kömək edən, ölçülə bilən nəticələrə yönəlmiş rəqəmsal həllər yaradırıq.
            </p>
            
            <p className={styles.paragraph}>
            Komandamız hər layihəyə fərdi yanaşır — məqsədlərinizi dərindən anlayaraq, strategiya, dizayn və texnoloji icranı bir araya gətirir. Bizim üçün hər layihə sadəcə bir tapşırıq deyil, brend hekayənizi rəqəmsal müstəviyə daşıyan bir yaradıcılıq prosesidir.
            </p>
            
            <p className={styles.paragraph}>
            KhamsaCraft qabaqcıl texnologiyalar, effektiv marketinq strategiyaları və estetik dizaynın gücünü birləşdirərək, sürətli dəyişən rəqəmsal dünyada biznesinizi bir addım irəli daşıyır.
            Biz yenilikçiliyi, şəffaf əməkdaşlığı və davamlı inkişafı əsas dəyərlərimiz kimi görürük — çünki inanırıq ki, əsl nəticə yalnız qarşılıqlı etimad və yaradıcı sinerji ilə mümkündür.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

