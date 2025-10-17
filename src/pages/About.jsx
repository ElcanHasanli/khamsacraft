import React from 'react'
import styles from '../css/About/About.module.css'
import AboutImage from '../images/About/About.png'
import MaskGroupLeft from '../images/Banner/Mask group.png'
import MaskGroupRight from '../images/Banner/Mask group (1).png'
import Icon1 from '../images/ourWork/Icon (1).png'
import Icon2 from '../images/ourWork/Icon (2).png'
import Icon3 from '../images/ourWork/Icon (3).png'
import Icon4 from '../images/ourWork/Icon (4).png'
import Icon5 from '../images/ourWork/Icon (5).png'

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

        {/* İş Prosesimiz */}
        <section className={styles.processSection}>
          <div className={styles.processContainer}>
            <h2 className={styles.processTitle}>İş Prosesimiz</h2>
            <p className={styles.processSubtitle}>Layihənizi ideyadan real nəticəyə aparan mərhələlər</p>
            <div className={styles.processGrid}>
            <div className={styles.processCard}>
              <div className={styles.processIconBox}>
                <img src={Icon1} alt="Discovery" className={styles.processIcon} />
              </div>
              <div className={styles.processStep}>01</div>
              <h3 className={styles.processCardTitle}>Discovery</h3>
              <p className={styles.processCardDesc}>Layihənizin məqsədlərini və ehtiyaclarını öyrənmək</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processIconBox}>
                <img src={Icon2} alt="Strategy" className={styles.processIcon} />
              </div>
              <div className={styles.processStep}>02</div>
              <h3 className={styles.processCardTitle}>Strategy</h3>
              <p className={styles.processCardDesc}>Həll yollarının planlaşdırılması və strategiya yaradılması</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processIconBox}>
                <img src={Icon3} alt="Design" className={styles.processIcon} />
              </div>
              <div className={styles.processStep}>03</div>
              <h3 className={styles.processCardTitle}>Design</h3>
              <p className={styles.processCardDesc}>Kreativ dizaynların və konsepsiyaların hazırlanması</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processIconBox}>
                <img src={Icon4} alt="Development" className={styles.processIcon} />
              </div>
              <div className={styles.processStep}>04</div>
              <h3 className={styles.processCardTitle}>Development</h3>
              <p className={styles.processCardDesc}>Texniki həyata keçirmə və funksionallıq əlavəsi</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processIconBox}>
                <img src={Icon5} alt="Testing" className={styles.processIcon} />
              </div>
              <div className={styles.processStep}>05</div>
              <h3 className={styles.processCardTitle}>Testing</h3>
              <p className={styles.processCardDesc}>Keyfiyyət yoxlaması və optimallaşdırma prosesi</p>
            </div>
            <div className={styles.processCard}>
              <div className={styles.processIconBox}>
                <img src={Icon1} alt="Launch and Support" className={styles.processIcon} />
              </div>
              <div className={styles.processStep}>06</div>
              <h3 className={styles.processCardTitle}>Launch and Support</h3>
              <p className={styles.processCardDesc}>Canlıya buraxılma və davamlı texniki dəstək</p>
            </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default About

