import type React from "react"
import { personalInfo } from "../data/portfolio"

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-white animate-fade-in-up">Restons en Contact</h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up">
          Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter de vos projets ou d'opportunités de
          collaboration.
        </p>

        <div className="flex justify-center gap-8 flex-wrap animate-fade-in-up">
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="text-white">{personalInfo.email}</span>
          </a>
          <a
            href={`tel:${personalInfo.phone}`}
            className="flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-105"
          >
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-white">{personalInfo.phone}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default ContactSection