import React, { useState } from 'react'
import PhoneInput from 'react-country-phone-input'
import 'react-country-phone-input/lib/style.css'
import { useToast } from '../components/Toast'
import styles from '../css/Contact/Contact.module.css'
import MaskGroupLeft from '../images/Banner/Mask group.png'
import MaskGroupRight from '../images/Banner/Mask group (1).png'

const API_URL = 'http://62.171.154.6:8800/contacts'

function Contact() {
  const { addToast } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '+994',
    subject: '',
    additionalNote: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [phoneLocal, setPhoneLocal] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'phoneLocal') return // managed by component onChange
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validasiya
    if (!formData.name || !formData.email || !formData.subject) {
      addToast('Zəhmət olmasa bütün vacib sahələri doldurun', 'error')
      return
    }

    // Email validasiyası
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      addToast('Zəhmət olmasa düzgün email daxil edin', 'error')
      return
    }

    setIsSubmitting(true)

    try {
      // Tarix və vaxt əlavə et
      const now = new Date()
      const date = now.toLocaleDateString('az-AZ')
      const time = now.toLocaleTimeString('az-AZ', { hour: '2-digit', minute: '2-digit' })

      const requestData = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber || (phoneLocal ? `+994 ${phoneLocal}` : ''),
        subject: formData.subject,
        additionalNote: formData.additionalNote,
        date: date,
        time: time
      }

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': '*/*'
        },
        body: JSON.stringify(requestData)
      })

      if (response.ok) {
        addToast('Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.', 'success')
        
        // Formu təmizlə
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          subject: '',
          additionalNote: ''
        })
        setPhoneLocal('')
      } else {
        throw new Error('Göndərmə uğursuz oldu')
      }
    } catch (error) {
      console.error('Error:', error)
      addToast('Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className={styles.contactHeader}>
          <h1 className={styles.pageTitle}>Bizimlə Əlaqə</h1>
          <p className={styles.pageSubtitle}>
            Hər hansı sualınız və ya layihə təklifiniz varsa, bizimlə əlaqə saxlayın. 
            Komandamız ən qısa zamanda sizə cavab verəcək.
          </p>
        </div>

        <div className={styles.contactContent}>
          <div className={styles.contactLeft}>
            <div className={styles.infoBox}>
              <div className={styles.decorativeElements}>
                <img
                  src={MaskGroupLeft}
                  alt="Decorative"
                  className={styles.decorLeft}
                />
                <img
                  src={MaskGroupRight}
                  alt="Decorative"
                  className={styles.decorRight}
                />
              </div>
              <h2 className={styles.infoBoxTitle}>Əlaqə Məlumatları</h2>
              
              <div className={styles.infoItem}>
                <div className={styles.itemIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className={styles.itemContent}>
                  <p className={styles.itemLabel}>Email</p>
                  <a href="mailto:contact@khamsacraft.az" className={styles.itemValue}>contact@khamsacraft.az</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.itemIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div className={styles.itemContent}>
                  <p className={styles.itemLabel}>Telefon</p>
                  <a href="tel:+994XXXXXXXXX" className={styles.itemValue}>+994 XX XXX XX XX</a>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.itemIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className={styles.itemContent}>
                  <p className={styles.itemLabel}>Ünvan</p>
                  <p className={styles.itemValue}>Bakı, Azərbaycan</p>
                </div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.socialSection}>
                <p className={styles.socialTitle}>Sosial Şəbəkələr</p>
                <div className={styles.socialLinks}>
                  <a href="https://www.instagram.com/khamsacraft.az?igsh=MTBpcWZmbjlhd3diag%3D%3D&utm_source=qr" className={styles.socialLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://www.tiktok.com/@khamsacraft.az" className={styles.socialLink} aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/khamsa-craft-11b4b3367" className={styles.socialLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>

              
            </div>
          </div>

          <div className={styles.contactFormWrapper}>
            <h2 className={styles.formTitle}>Mesaj Göndərin</h2>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Adınız *</label>
                  <input
                    type="text"
                    name="name"
                    className={styles.input}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="Ad Soyadınız"
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Telefon</label>
                <PhoneInput
                  className={styles.azPhone}
                  value={formData.phoneNumber}
                  onChange={(v) => setFormData({ ...formData, phoneNumber: v })}
                  country="az"
                  onlyCountries={["az"]}
                  preferredCountries={["az"]}
                  disableDropdown
                  countryCodeEditable={false}
                  placeholder="+994 XX XXX XX XX"
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Mövzu *</label>
                <input
                  type="text"
                  name="subject"
                  className={styles.input}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Mövzunu yazın"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label}>Mesajınız</label>
                <textarea
                  name="additionalNote"
                  className={styles.textarea}
                  rows="6"
                  value={formData.additionalNote}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Göndərilir...' : 'Göndər'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

