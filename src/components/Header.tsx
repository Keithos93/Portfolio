import type React from "react"
import { useState, useEffect } from "react"

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-950/90 backdrop-blur-sm border-b border-gray-800" : "bg-transparent"}`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Keith's Tech
        </div>
        <div className="flex gap-6">
          <button onClick={() => scrollToSection("about")} className="text-white hover:text-blue-400 transition-colors">
            À propos
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-white hover:text-blue-400 transition-colors"
          >
            Projets
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white hover:text-blue-400 transition-colors"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header