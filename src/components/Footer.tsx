import type React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Andre Keith MULAMBA TSHISHIKA. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer