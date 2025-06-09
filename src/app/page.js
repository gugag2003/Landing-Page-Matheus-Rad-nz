'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Apple, BicepsFlexed, CircleCheck, Dumbbell, HeartPulse } from 'lucide-react'
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Home() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSliderChange = (e) => {
    setSliderPosition(Number(e.target.value))
  }

  

  return (
    <div className="overflow-x-hidden">
      <main className="min-h-screen">
      {/* Header/Navbar */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#171717]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div>
              <Image
                src="/logo-h.png"
                alt="Matheus Radünz"
                width={200}
                height={50}
                className="w-auto h-auto max-w-[150px] md:max-w-[200px]"
              />
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#fafafa]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-[#171717]/95 backdrop-blur-md rounded-lg mt-2 p-4">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-[#fafafa] hover:text-[#05a6b5] transition-colors">Início</a>
                <a href="#sobre" className="text-[#fafafa] hover:text-[#05a6b5] transition-colors">Sobre</a>
                <a href="#servicos" className="text-[#fafafa] hover:text-[#05a6b5] transition-colors">Serviços</a>
                <a href="#transformacoes" className="text-[#fafafa] hover:text-[#05a6b5] transition-colors">Transformações</a>
                <a href="#planos" className="text-[#fafafa] hover:text-[#05a6b5] transition-colors">Planos</a>
                <a href="#contato" className="text-[#fafafa] hover:text-[#05a6b5] transition-colors">Contato</a>
              </nav>
            </div>
          )}
        </div>
      </header>

{/* Hero Section */}
<section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-[#171717] to-[#05a6b5] overflow-hidden">
  {/* Imagem de fundo abaixo da overlay */}
  <div className="absolute inset-0 z-0">
    <img src="/bg-1.png" alt="Background" className="w-full h-full object-cover" />
  </div>

  {/* Overlay escura */}
  <div className="absolute inset-0 bg-black/80 z-10"></div>

  {/* Conteúdo principal */}
  <div className="relative z-20 text-left px-4 max-w-full md:max-w-2xl mx-auto md:ml-24 mt-12">
    <h1 className="text-3xl md:text-5xl font-space-bold text-[#fafafa] mb-4">
      Liberte Seu <span className="text-[#05a6b5]">Potencial</span>
    </h1>

    <p className="text-base md:text-lg font-space text-[#fafafa]/90 mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
      <span className="font-space-bold text-[#05a6b5]"> feugiat et mauris</span> a porta.
      Aliquam facilisis id erat eu sollicitudin.
    </p>

    {/* Ícones com textos */}
    <div className="space-y-4 mb-10">
      <div className="flex items-start space-x-3">
        <CircleCheck className="text-[#05a6b5] w-6 h-6 mt-1 flex-shrink-0" />
        <div className="font-space text-white">
          <p className="font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <CircleCheck className="text-[#05a6b5] w-6 h-6 mt-1 flex-shrink-0" />
        <div className="text-white">
          <p className="font-space font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </div>

    {/* Botão com ícone */}
    <button className="bg-[#05a6b5] hover:bg-[#05a6b5]/90 text-neutral-950 font-space-bold font-semibold py-4 px-6 rounded-xl text-base transition-all transform hover:scale-105 flex items-center gap-2">
      <BicepsFlexed className="w-5 h-5" />
      COMECE SUA EVOLUÇÃO
    </button>
  </div>

  {/* Ícone animado */}
  <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
    <svg className="w-6 h-6 text-[#fafafa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </div>
  {/* Camada de desfoque final suavizada */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-black/30 to-black/90 z-20 pointer-events-none" />
</section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-[#000000] overflow-hidden">
        <div className="relative z-20 px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-space text-4xl md:text-5xl font-bold text-[#ffffff] mb-6">
                Matheus Radünz
              </h2>
              <p className="font-space text-lg text-[#ffffff] mb-6">
                Com mais de 10 anos de experiência, sou especializado em transformação corporal, 
                musculação e condicionamento físico. Meu objetivo é ajudar você a alcançar o 
                melhor da sua forma física.
              </p>
              <ul className="font-space space-y-3">
                <li className="flex items-center">
                  <div className="flex items-start space-x-3">
                    <CircleCheck className="text-[#05a6b5] w-6 h-6 mt-1 flex-shrink-0" />
                    <div className="text-white">
                      <p className="font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="flex items-start space-x-3">
                    <CircleCheck className="text-[#05a6b5] w-6 h-6 mt-1 flex-shrink-0" />
                    <div className="text-white">
                      <p className="font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="flex items-start space-x-3">
                    <CircleCheck className="text-[#05a6b5] w-6 h-6 mt-1 flex-shrink-0" />
                    <div className="text-white">
                      <p className="font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative bg-gray-300 rounded-lg overflow-hidden">
              <Image 
                src="/matheus-4.png"
                alt="Matheus Radünz"
                layout="responsive"
                width={100}
                height={600}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171717]/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

<section
  id="experiencia"
  className="grid grid-cols-1 md:grid-cols-3 gap-10 p-6 md:p-20 bg-[#000000] overflow-hidden"
>
  {/* Card 1 */}
<div className="rounded-lg p-[1px] bg-gradient-to-br from-black to-[#05a6b5]">
  <div className="bg-[#111111] rounded-lg overflow-hidden shadow-xl transform transition-all">
    <div className="h-48 w-full relative">
      <Image 
        src='/hipertrofia.png'
        alt='Recuperação'
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <div className='flex gap-2'>
      <Dumbbell className="w-6 h-6 text-[#05a6b5]"/>
      <h3 className="text-2xl font-space font-bold text-[#ffffff] mb-3">Lorem ipsum</h3>
      </div>
      <p className="text-[#ffffff] mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="col-span-full flex justify-center mt-4">
        <button className="font-space bg-[#05a6b5] text-black font-bold px-6 py-3 rounded-xl hover:brightness-90 transition">
          QUERO EVOLUIR
        </button>
      </div>
    </div>
  </div>
</div>

  {/* Card 2 */}
<div className="rounded-lg p-[1px] bg-gradient-to-br from-black to-[#05a6b5]">
  <div className="bg-[#111111] rounded-lg overflow-hidden shadow-xl transform transition-all">
    <div className="h-48 w-full relative">
      <Image 
        src='/emagrecimento.png'
        alt='Recuperação'
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <div className='flex gap-2'>
      <Apple className="w-6 h-6 text-[#05a6b5]"/>
      <h3 className="text-2xl font-space font-bold text-[#ffffff] mb-3">Lorem ipsum</h3>
      </div>
      <p className="text-[#ffffff] mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="col-span-full flex justify-center mt-4">
        <button className="font-space bg-[#05a6b5] text-black font-bold px-6 py-3 rounded-xl hover:brightness-90 transition">
          QUERO EVOLUIR
        </button>
      </div>
    </div>
  </div>
</div>

  {/* Card 3 */}
<div className="rounded-lg p-[1px] bg-gradient-to-br from-black to-[#05a6b5]">
  <div className="bg-[#111111] rounded-lg overflow-hidden shadow-xl transform transition-all">
    <div className="h-48 w-full relative">
      <Image 
        src='/recuperacao.png'
        alt='Recuperação'
        fill
        className="object-cover"
      />
    </div>
    <div className="p-6">
      <div className='flex gap-2'>
        <HeartPulse className="w-6 h-6 text-[#05a6b5]"/>
      <h3 className="text-2xl font-space font-bold text-[#ffffff] mb-3">Lorem ipsum</h3>
      </div>
      <p className="text-[#ffffff] mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="col-span-full flex justify-center mt-4">
        <button className="font-space bg-[#05a6b5] text-black font-bold px-6 py-3 rounded-xl hover:brightness-90 transition">
          QUERO EVOLUIR
        </button>
      </div>
    </div>
  </div>
</div>
</section>

      {/* Transformações Section - Antes e Depois */}
          <section id="transformacoes" className="py-20 bg-[#000000] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-space font-bold text-[#ffffff] text-center mb-12">
          Transformações <span className="text-[#05a6b5]">Reais</span>
        </h2>

        {/* Swiper Carrossel */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          className="max-w-4xl mx-auto"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-[#111111] p-6 rounded-2xl shadow-xl">
              <h3 className="text-2xl text-white font-space font-bold mb-2 text-center">3 Meses de Evolução</h3>
              <p className="text-[#cccccc] text-center mb-6">
                Resultado impressionante com acompanhamento alimentar e treinos personalizados.
              </p>

              {/* Card Antes e Depois */}
              <div className="relative h-[400px] md:h-[600px] bg-gray-200 rounded-lg overflow-hidden">
                {/* Imagem Antes */}
                <div className="absolute inset-0">
                  <img
                    src="/antes-1-luiz.jpeg"
                    alt="Antes"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-space text-white text-2xl font-bold drop-shadow-lg">ANTES</span>
                  </div>
                </div>

                {/* Imagem Depois */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src="/depois-1-luiz.jpeg"
                    alt="Depois"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-space text-white text-2xl font-bold drop-shadow-lg">DEPOIS</span>
                  </div>
                </div>

                {/* Linha divisória */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2">
                    <svg className="w-6 h-6 text-[#171717]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                </div>

                {/* Slider invisível */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                />
              </div>

              <p className="font-space text-center text-[#ffffff] mt-4">
                Arraste para ver a transformação
              </p>
            </div>
          </SwiperSlide>
          

          {/* Adicione outros <SwiperSlide> com cards semelhantes aqui */}

                    {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-[#111111] p-6 rounded-2xl shadow-xl">
              <h3 className="text-2xl text-white font-bold mb-2 text-center">Luiz - 3 Meses de Evolução</h3>
              <p className="text-[#cccccc] text-center mb-6">
                Resultado impressionante com acompanhamento alimentar e treinos personalizados.
              </p>

              {/* Card Antes e Depois */}
              <div className="relative h-[400px] md:h-[600px] bg-gray-200 rounded-lg overflow-hidden">
                {/* Imagem Antes */}
                <div className="absolute inset-0">
                  <img
                    src="/antes-1-luiz.jpeg"
                    alt="Antes"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-space text-white text-2xl font-bold drop-shadow-lg">ANTES</span>
                  </div>
                </div>

                {/* Imagem Depois */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img
                    src="/depois-1-luiz.jpeg"
                    alt="Depois"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-space text-white text-2xl font-bold drop-shadow-lg">DEPOIS</span>
                  </div>
                </div>

                {/* Linha divisória */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2">
                    <svg className="w-6 h-6 text-[#171717]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                    </svg>
                  </div>
                </div>

                {/* Slider invisível */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={handleSliderChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                />
              </div>

              <p className="font-space text-center text-[#ffffff] mt-4">
                Arraste para ver a transformação
              </p>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-[#000000] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-space text-4xl md:text-5xl font-bold text-[#fafafa] text-center mb-12">
            Planos Desenvolvidos Pensando Na Sua <span className="text-[#05a6b5]">Evolução</span>
          </h2>
          <div className="grid md:grid-cols-1 gap-8">

            {/* Card 1 */}
 {/* Cabeçalho com título e vídeo/imagem */}
 <div className="w-full bg-[#0f0f0f] text-white rounded-2xl shadow-2xl border border-[#333] p-8 md:p-16 space-y-12">
  <div className="flex flex-col md:flex-row items-center gap-8">
    <div className="flex-1 space-y-4">
      <h2 className="flex items-center gap-3 text-3xl md:text-5xl font-bold font-space text-white">
        <Dumbbell className="w-8 h-8 text-[#05a6b5]"/>Consultoria Personalizada
      </h2>
      <p className="font-space text-gray-300 text-base md:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat et mauris a porta. Aliquam facilisis id erat eu sollicitudin. Praesent convallis sit amet nulla ut vestibulum.
      </p>
    </div>
    <div className="w-full md:w-[380px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        className="w-full aspect-video rounded-xl"
        src="https://www.youtube.com/embed/GMNzPDZO7C4?si=gNdq4R5b-jy49Ed4"
        title="Vídeo"
        allowFullScreen
      />
    </div>
  </div>

  {/* Benefícios */}
  <div className="bg-[#191919] rounded-xl p-6 space-y-4">
    <h3 className="font-space text-2xl font-bold text-[#05a6b5]">Vou acompanhar de perto:</h3>
    <div className="font-space-bold grid md:grid-cols-2 gap-4">
      {[
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ].map((benefit, i) => (
        <div
          key={i}
          className="bg-[#0f0f0f] border border-[#333] rounded-lg p-4 text-sm text-white shadow-inner flex items-center gap-3"
        >
          <CircleCheck className="w-8 h-8 text-[#05a6b5]"/> {benefit}
        </div>
      ))}
    </div>
      <div className='col-span-full flex justify-center mt-4'>
      <button className="font-space bg-[#05a6b5] text-black font-bold px-6 py-3 rounded-xl hover:brightness-90 transition">
          QUERO EVOLUIR
      </button>
      </div>
  </div>

  {/* Planos */}
  <div className="font-space grid md:grid-cols-3 gap-6">
    {[
      { label: "MENSAL", value: "3x R$ 00,00", type: "MENSAL" },
      { label: "TRIMESTRAL", value: "6x R$ 00,00", type: "TRIMESTRAL" },
      { label: "SEMESTRAL", value: "12x R$ 00,00", type: "SEMESTRAL" },
    ].map((plan, i) => (
      <div
        key={i}
        className="bg-[#141414] border border-[#333] rounded-xl p-6 flex flex-col items-center text-center shadow-xl"
      >
        <p className="text-sm uppercase font-semibold text-[#05a6b5] mb-2">
          {plan.label}
        </p>
        <h3 className="font-space text-3xl font-bold mb-2">{plan.value}</h3>
        <p className="font-space text-gray-400 text-sm mb-4">Assinatura {plan.type}</p>
        <button className="font-space w-full bg-[#05a6b5] text-black font-bold py-3 rounded-xl hover:brightness-90 transition">
          QUERO EVOLUIR
        </button>
        <p className="text-xs text-gray-400 mt-3">
          Acesso imediato • Suporte pessoal Matheus Radünz
        </p>
      </div>
    ))}
  </div>
  </div>
  

          </div>
        </div>
      </section>

      {/* CTA Meio */}
      <section className="relative py-20 bg-gradient-to-br from-[#171717] to-[#05a6b5] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-space text-4xl md:text-5xl font-bold text-[#fafafa] mb-6">
            Pronto Para Começar Sua Transformação?
          </h2>
          <p className="font-space text-xl text-[#fafafa]/90 mb-8">
            Não espere mais para alcançar o corpo dos seus sonhos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="font-space bg-[#fafafa] text-[#171717] font-bold py-4 px-8 rounded-xl text-lg hover:bg-[#fafafa]/90 transition-all">
              ESCOLHER PLANO IDEAL
            </button>
          </div>
        </div>
      
      </section>

      {/* Planos Section */}
      <section id="planos" className="relative py-20 bg-[#000000] overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-[#fafafa] text-center mb-12">
            Escolha Seu Plano
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plano Básico */}
            <div className="bg-[#fafafa] rounded-lg p-8 text-center transform hover:scale-105 transition-all">
              <h3 className="font-space text-2xl font-bold text-[#171717] mb-4">Mensal</h3>
              <p className="font-space text-4xl font-bold text-[#05a6b5] mb-6">
                R$ 00,00<span className="text-lg">/mês</span>
              </p>
              <ul className="space-y-3 mb-8">
                <li className="font-space text-gray-700">3x por semana</li>
                <li className="font-space text-gray-700">Plano de treino</li>
                <li className="font-space text-gray-700">Suporte via WhatsApp</li>
              </ul>
              <button className="font-space w-full bg-[#171717] text-[#fafafa] py-3 rounded-lg hover:bg-[#171717]/90 transition-all">
                Começar Agora
              </button>
            </div>

            {/* Plano Premium */}
            <div className="bg-[#05a6b5] rounded-lg p-8 text-center transform scale-105 shadow-2xl">
              <div className="font-space bg-[#fafafa] text-[#171717] text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
                MAIS POPULAR
              </div>
              <h3 className="font-space text-2xl font-bold text-[#fafafa] mb-4">Trimestral</h3>
              <p className="font-space text-4xl font-bold text-[#fafafa] mb-6">
                R$ 00,00<span className="text-lg">/mês</span>
              </p>
              <ul className="font-space space-y-3 mb-8 text-[#fafafa]">
                <li>5x por semana</li>
                <li>Plano de treino + nutrição</li>
                <li>Acompanhamento semanal</li>
                <li>Avaliação mensal</li>
              </ul>
              <button className="font-space w-full bg-[#fafafa] text-[#171717] py-3 rounded-lg hover:bg-[#fafafa]/90 transition-all font-bold">
                Começar Agora
              </button>
            </div>

            {/* Plano VIP */}
            <div className="bg-[#fafafa] rounded-lg p-8 text-center transform hover:scale-105 transition-all">
              <h3 className="font-space text-2xl font-bold text-[#171717] mb-4">Semestral</h3>
              <p className="font-space text-4xl font-bold text-[#05a6b5] mb-6">
                R$ 00,00<span className="text-lg">/mês</span>
              </p>
              <ul className="font-space space-y-3 mb-8">
                <li className="text-gray-700">Treino ilimitado</li>
                <li className="text-gray-700">Personal exclusivo</li>
                <li className="text-gray-700">Nutricionista incluso</li>
                <li className="text-gray-700">Prioridade total</li>
              </ul>
              <button className="font-space w-full bg-[#171717] text-[#fafafa] py-3 rounded-lg hover:bg-[#171717]/90 transition-all">
                Começar Agora
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-gradient-to-r from-[#171717] to-[#05a6b5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-[#ffffff] text-center mb-12">
            O Que Dizem Nossos Alunos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#05a6b5] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-space text-gray-700 mb-4">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat et mauris a porta.&quot;
              </p>
              <p className="font-space font-bold text-[#171717]">Lorem ipsum</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#05a6b5] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-space text-gray-700 mb-4">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat et mauris a porta.&quot;
              </p>
              <p className="font-space font-bold text-[#171717]">Lorem ipsum</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#05a6b5] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-space text-gray-700 mb-4">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat et mauris a porta.&quot;
              </p>
              <p className="font-space font-bold text-[#171717]">Lorem ipsum</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
<section className="py-20 bg-[#000000] overflow-hidden">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="font-space text-4xl md:text-5xl font-bold text-[#05a6b5] text-center mb-12">
      Perguntas Frequentes
    </h2>
    <div className="space-y-6">
      <div className="p-[1px] rounded-lg bg-gradient-to-br from-black to-[#05a6b5]">
        <div className="bg-[#000000] rounded-lg p-6">
          <h3 className="font-space text-xl font-bold text-[#fafafa] mb-3">
            Preciso ter experiência prévia com musculação?
          </h3>
          <p className="font-space text-[#fafafa]/80">
            Não! Trabalho com alunos de todos os níveis, desde iniciantes até atletas avançados. 
            O treino será adaptado ao seu nível atual.
          </p>
        </div>
      </div>

      <div className="p-[1px] rounded-lg bg-gradient-to-br from-black to-[#05a6b5]">
        <div className="bg-[#000000] rounded-lg p-6">
          <h3 className="font-space text-xl font-bold text-[#fafafa] mb-3">
            Em quanto tempo verei resultados?
          </h3>
          <p className="font-space text-[#fafafa]/80">
            Com dedicação e seguindo o plano, você começará a ver mudanças em 4-6 semanas. 
            Resultados significativos geralmente aparecem entre 2-3 meses.
          </p>
        </div>
      </div>

      <div className="p-[1px] rounded-lg bg-gradient-to-br from-black to-[#05a6b5]">
        <div className="bg-[#000000] rounded-lg p-6">
          <h3 className="font-space text-xl font-bold text-[#fafafa] mb-3">
            Posso cancelar a qualquer momento?
          </h3>
          <p className="font-space text-[#fafafa]/80">
            Sim! Não trabalhamos com fidelidade. Você pode cancelar ou pausar seu plano 
            quando precisar, sem multas.
          </p>
        </div>
      </div>

      <div className="p-[1px] rounded-lg bg-gradient-to-br from-black to-[#05a6b5]">
        <div className="bg-[#000000] rounded-lg p-6">
          <h3 className="font-space text-xl font-bold text-[#fafafa] mb-3">
            O acompanhamento nutricional está incluído?
          </h3>
          <p className="font-space text-[#fafafa]/80">
            Nos planos Premium e VIP sim! No plano básico, oferecemos orientações gerais 
            sobre alimentação saudável.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#171717] to-[#05a6b5] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-space text-4xl md:text-5xl font-bold text-[#fafafa] mb-6">
            Ainda está com dúvidas?
          </h2>
          <p className="font-space text-xl text-[#fafafa]/90 mb-8">
            Me envie uma mensagem! Será um prazer conversar com você e entender os seus objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="font-space border-2 border-[#fafafa] text-[#fafafa] font-bold py-4 px-8 rounded-xl text-lg hover:bg-[#fafafa] hover:text-[#171717] transition-all">
              Falar no WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#000000] py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Image
                className='pb-6'
                src='/logo-h.png'
                alt='Matheus Radünz'
                width={200}
                height={50}
              />
              <p className="font-space text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div>
              <h4 className="text-[#fafafa] font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#" className="font-space text-gray-400 hover:text-[#05a6b5]">Sobre</a></li>
                <li><a href="#" className="font-space text-gray-400 hover:text-[#05a6b5]">Serviços</a></li>
                <li><a href="#" className="font-space text-gray-400 hover:text-[#05a6b5]">Planos</a></li>
                <li><a href="#" className="font-space text-gray-400 hover:text-[#05a6b5]">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-space text-[#fafafa] font-bold mb-4">Contato</h4>
              <ul className="font-space space-y-2 text-gray-400">
                <li>📧 contato@matheusradunz.com</li>
                <li>📱 (11) 99999-9999</li>
                <li>📍 Penha, SC</li>
              </ul>
            </div>
            <div>
              <h4 className="font-space text-[#fafafa] font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#05a6b5]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#05a6b5]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="font-space text-gray-400">
              © 2025 Matheus Radünz. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
    </div>
  );
}