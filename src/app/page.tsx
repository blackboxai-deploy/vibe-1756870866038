'use client'

import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('¡Mensaje enviado correctamente!')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-bold text-indigo-600">
              MiSitio
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#inicio" className="text-gray-700 hover:text-indigo-600 transition-colors">Inicio</a>
              <a href="#caracteristicas" className="text-gray-700 hover:text-indigo-600 transition-colors">Características</a>
              <a href="#acerca" className="text-gray-700 hover:text-indigo-600 transition-colors">Acerca</a>
              <a href="#contacto" className="text-gray-700 hover:text-indigo-600 transition-colors">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Bienvenido a
            <span className="text-indigo-600"> MiSitio</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Una página simple, rápida y moderna diseñada para ofrecer la mejor experiencia de usuario
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
              Comenzar Ahora
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors">
              Saber Más
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Características Principales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre todo lo que hace especial a nuestra plataforma
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">⚡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Súper Rápido</h3>
              <p className="text-gray-600">
                Optimizado para velocidad máxima con tecnologías modernas y mejores prácticas
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsive</h3>
              <p className="text-gray-600">
                Diseño adaptable que se ve perfecto en cualquier dispositivo y tamaño de pantalla
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Diseño Moderno</h3>
              <p className="text-gray-600">
                Interfaz limpia y moderna que ofrece una experiencia de usuario excepcional
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="acerca" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Acerca de Nosotros
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Somos un equipo apasionado por crear experiencias web excepcionales. 
                Nos especializamos en desarrollar sitios web rápidos, modernos y funcionales 
                que ayudan a nuestros clientes a alcanzar sus objetivos.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Con años de experiencia en desarrollo web, utilizamos las últimas tecnologías 
                para garantizar que cada proyecto sea único y efectivo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-indigo-600">100+</div>
                  <div className="text-gray-600">Proyectos Completados</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-indigo-600">50+</div>
                  <div className="text-gray-600">Clientes Satisfechos</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-indigo-600">5+</div>
                  <div className="text-gray-600">Años de Experiencia</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-lg mb-6">
                Crear soluciones web innovadoras que impulsen el crecimiento de nuestros clientes 
                y mejoren la experiencia de sus usuarios.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="mr-3">✓</span>
                  <span>Desarrollo ágil y eficiente</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✓</span>
                  <span>Soporte técnico continuo</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-3">✓</span>
                  <span>Resultados medibles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contáctanos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Nos encantaría escuchar de ti
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold">📧</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">contacto@misitio.com</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold">📞</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Teléfono</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold">📍</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Ubicación</div>
                    <div className="text-gray-600">Ciudad, País</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold text-indigo-400 mb-4">MiSitio</div>
              <p className="text-gray-300 mb-4">
                Creando experiencias web excepcionales con tecnología moderna y diseño innovador.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Facebook</a>
                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Twitter</a>
                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Instagram</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-300 hover:text-indigo-400 transition-colors">Inicio</a></li>
                <li><a href="#caracteristicas" className="text-gray-300 hover:text-indigo-400 transition-colors">Características</a></li>
                <li><a href="#acerca" className="text-gray-300 hover:text-indigo-400 transition-colors">Acerca</a></li>
                <li><a href="#contacto" className="text-gray-300 hover:text-indigo-400 transition-colors">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Desarrollo Web</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Diseño UI/UX</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Consultoría</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition-colors">Soporte</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 MiSitio. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}