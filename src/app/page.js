'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Apple, BicepsFlexed, ChevronLeft, ChevronRight, CircleCheck, Dumbbell, HeartPulse, Medal } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

export default function Home() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const prevRef = useRef(null)
  const nextRef = useRef(null)

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

  const testimonials = [
  {
    name: 'Luiz',
    beforeLink: '/antes-1-luiz.jpeg',
    afterLink: '/depois-1-luiz.jpeg',
    duration: '3 Meses',
    description: 'Resultado impressionante com acompanhamento alimentar e treinos assistidos na Consultoria Personalizada.',
  },
  {
    name: 'Ana',
    beforeLink: '/antes-1-w.jpeg',
    afterLink: '/depois-1-w.jpeg',
    duration: '4 Meses',
    description: 'Superação com disciplina e treinos personalizados semanais.',
  },
  // Adicione mais testemunhos aqui
];

  

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
                <a href="#experiencia" className="text-[#fafafa] hover:text-[#05a6b5] transition-colors">Serviços</a>
                <a href="#transformacoes" className="text-[#fafafa] hover:text-[#05a6b5] transition-colors">Transformações</a>
                <a href="#planos" className="text-[#fafafa] hover:text-[#05a6b5] transition-colors">Planos</a>
              </nav>
            </div>
          )}
        </div>
      </header>

{/* Hero Section */}
<section id="home" className="relative h-255 min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#171717] to-[#05a6b5] overflow-hidden">
  {/* Imagem de fundo abaixo da overlay */}
  <div className="absolute inset-0 z-0">
    <img src="/bg-1.png" alt="Background" className="w-full h-full object-cover" />
  </div>

  {/* Overlay escura */}
  <div className="absolute inset-0 bg-black/80 z-10"></div>

  {/* Conteúdo principal - TEXTO */}
  <div className="relative z-20 text-left px-4 max-w-full md:max-w-2xl mx-auto md:ml-24 mt-12 md:mt-0">
    <h1 className="text-3xl md:text-5xl font-space-bold text-[#fafafa] mt-16 md:mt-8 mb-4">
      Liberte Seu <span className="text-[#05a6b5]">Potencial</span>
    </h1>

    <p className="text-base md:text-lg font-space text-[#fafafa]/90 mb-6">
      Descubra a <span className="font-space-bold text-[#05a6b5]">melhor versão de si mesmo</span> com treinos personalizados, orientação profissional e resultados reais.<br />
      Chegou a hora de <span className="font-space-bold text-[#05a6b5]">transformar seu corpo e sua mente.</span>
    </p>

    {/* Ícones com textos */}
    <div className="space-y-4 mb-10">
      <div className="flex items-start space-x-3">
        <CircleCheck className="text-[#05a6b5] w-6 h-6 mt-1 flex-shrink-0" />
        <p className="text-white font-space font-bold">Acompanhamento individualizado para resultados mais rápidos e eficazes</p>
      </div>
      <div className="flex items-start space-x-3">
        <CircleCheck className="text-[#05a6b5] w-6 h-6 mt-1 flex-shrink-0" />
        <p className="text-white font-space font-bold">Treinos, nutrição e suporte adaptados à sua rotina e objetivos.</p>
      </div>
      <div className="flex items-start space-x-3">
        <CircleCheck className="text-[#05a6b5] w-6 h-6 mt-1 flex-shrink-0" />
        <p className="text-white font-space font-bold">Metodologia testada para queimar gordura, ganhar massa e manter o foco.</p>
      </div>
      <div className="flex items-start space-x-3">
        <CircleCheck className="text-[#05a6b5] w-6 h-6 mt-1 flex-shrink-0" />
        <p className="text-white font-space font-bold">Metodologia testada para queimar gordura, ganhar massa e manter o foco.</p>
      </div>

      <p className="text-base md:text-lg font-space text-[#fafafa]/90 mb-6">
        Sem <span className="font-bold">achismos:</span> <span className="font-space-bold text-[#05a6b5]">ciência, experiência e motivação</span> juntos com você em cada etapa.
      </p>
    </div>

    {/* Botão com ícone */}
    <button
      onClick={() => {
        const target = document.getElementById('servicos');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }}
      className="bg-[#05a6b5] hover:bg-[#05a6b5]/90 text-neutral-950 font-space-bold font-semibold py-4 px-6 rounded-xl text-base transition-all transform hover:scale-105 flex items-center gap-2"
    >
      <BicepsFlexed className="w-5 h-5" />
      COMECE SUA EVOLUÇÃO
    </button>
  </div>

  {/* IMAGEM - lado direito no desktop */}
  <div className="relative z-20 md:mr-24 mb-12 md:mb-0 w-full px-12 md:px-12">
    <img
      src="/imagem-lateral.png"
      alt="Matheus Radunz"
      className="w-full h-auto rounded-2xl shadow-lg"
    />
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
              <h2 className="font-space text-4xl md:text-5xl font-bold text-[#ffffff] mb-3">
                Matheus Radünz
              </h2>
              <p className="text-[#05a6b5] font-space-bold mb-6">Professor - CREF 032983 -G/SC</p>
              <p className="font-space text-lg text-[#ffffff] mb-6">
                Com mais de <span className="font-bold bg-[#05a6b5] text-white">8 anos de experiência</span>, sou especializado em <span className="font-bold">transformação corporal, 
                musculação e condicionamento físico</span>. Meu objetivo é ajudar você a <span className="font-bold">alcançar&nbsp;  
                <span className="font-bold bg-[#05a6b5] text-white">o melhor</span> da sua forma física</span>.
              </p>
              <ul className="font-space space-y-3">
                <li className="flex items-center">
                  <div className="flex items-start space-x-3">
                    <Medal className="text-[#05a6b5] w-6 h-6 mt-1 flex-shrink-0" />
                    <div className="text-white">
                      <p className="font-bold">Certificado em <u>Cinesiologia e Biomecânica</u></p>
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="flex items-start space-x-3">
                    <Medal className="text-[#05a6b5] w-6 h-6 mt-1 flex-shrink-0" />
                    <div className="text-white">
                      <p className="font-bold">Certificado em <u>Métodos de Treinamento Avançado</u></p>
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="flex items-start space-x-3">
                    <Medal className="text-[#05a6b5] w-6 h-6 mt-1 flex-shrink-0" />
                    <div className="text-white">
                      <p className="font-bold">Certificado em <u>Musculação Avançada e Avaliação Postural</u></p>
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="flex items-start space-x-3">
                    <Medal className="text-[#05a6b5] w-6 h-6 mt-1 flex-shrink-0" />
                    <div className="text-white">
                      <p className="font-bold">Certificado em <u>Anatomia Palpatória e Liberação Miofascial e Reabilitação de Lesões</u></p>
                    </div>
                  </div>
                </li>
                <li className="flex items-center">
                  <div className="flex items-start space-x-3">
                    <Medal className="text-[#05a6b5] w-6 h-6 mt-1 flex-shrink-0" />
                    <div className="text-white">
                      <p className="font-bold">Mais de 8 anos de Atuação e Experiência na Musculação</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative bg-gray-300 rounded-lg overflow-hidden">
              <Image 
                src="/matheus-3.jpg"
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
  <div className="bg-[#111111] rounded-lg overflow-hidden shadow-xl transform transition-all h-full flex flex-col">
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
      <h3 className="text-2xl font-space font-bold text-[#ffffff] mb-3">Hipertrofia</h3>
      </div>
      <p className="font-space text-[#ffffff] mb-4">
        Desenvolva força, massa muscular e definição com um <span className="font-bold">plano de hipertrofia eficiente e personalizado.</span><br></br>
        Treinos focados, nutrição orientada e acompanhamento contínuo para você atingir o seu potencial máximo.
      </p>
      <div className="col-span-full flex justify-center mt-4">
<button
  onClick={() => {
    const target = document.getElementById('servicos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="font-space bg-[#05a6b5] text-black font-bold px-6 py-3 rounded-xl hover:brightness-90 transition"
>
  QUERO EVOLUIR
</button>
      </div>
    </div>
  </div>
</div>

  {/* Card 2 */}
<div className="rounded-lg p-[1px] bg-gradient-to-br from-black to-[#05a6b5]">
  <div className="bg-[#111111] rounded-lg overflow-hidden shadow-xl transform transition-all h-full flex flex-col">
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
      <h3 className="text-2xl font-space font-bold text-[#ffffff] mb-3">Emagrecimento</h3>
      </div>
      <p className="font-space text-[#ffffff] mb-4">
        Emagreça com <span className="font-bold">saúde, segurança e resultados visíveis</span> em poucas semanas.<br></br>
        Estratégias comprovadas de treino e alimentação para queimar gordura, manter massa magra e transformar seu corpo.
      </p>
      <div className="col-span-full flex justify-center mt-4">
<button
  onClick={() => {
    const target = document.getElementById('servicos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="font-space bg-[#05a6b5] text-black font-bold px-6 py-3 rounded-xl hover:brightness-90 transition"
>
  QUERO EVOLUIR
</button>
      </div>
    </div>
  </div>
</div>

  {/* Card 3 */}
<div className="rounded-lg p-[1px] bg-gradient-to-br from-black to-[#05a6b5]">
  <div className="bg-[#111111] rounded-lg overflow-hidden shadow-xl transform transition-all h-full flex flex-col">
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
      <h3 className="text-2xl font-space font-bold text-[#ffffff] mb-3">Recuperação</h3>
      </div>
      <p className="font-space text-[#ffffff] mb-4">
        Programa de reabilitação e funcional para idosos ou pessoas com lesões.<br></br>
        Foco em <span className="font-bold">mobilidade, equilíbrio, fortalecimento e qualidade de vida</span> com segurança e suporte total.
      </p>
      <div className="col-span-full flex justify-center mt-4">
<button
  onClick={() => {
    const target = document.getElementById('servicos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }}
  className="font-space bg-[#05a6b5] text-black font-bold px-6 py-3 rounded-xl hover:brightness-90 transition"
>
  QUERO EVOLUIR
</button>
      </div>
    </div>
  </div>
</div>
</section>

<section id="transformacoes" className="py-20 bg-[#000000] overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-space font-bold text-[#ffffff] text-center mb-12">
      TRANSFORMAÇÕES <span className="text-[#05a6b5]">REAIS</span>
    </h2>

    <div className="relative max-w-4xl mx-auto">
      

<Swiper
  spaceBetween={20}
  slidesPerView={1}
  allowTouchMove={false}
  navigation={{
    prevEl: prevRef.current,
    nextEl: nextRef.current,
  }}
  modules={[Navigation]}
  onBeforeInit={(swiper) => {
    //@ts-ignore
    swiper.params.navigation.prevEl = prevRef.current;
    //@ts-ignore
    swiper.params.navigation.nextEl = nextRef.current;
  }}
  className="mx-auto"
>
  {testimonials.map((person, index) => (
    <SwiperSlide key={index}>
      <div className="bg-[#111111] p-6 rounded-2xl shadow-xl">
        <h3 className="text-2xl text-white font-space font-bold mb-2 text-center">
          <span className="bg-[#05a6b5]">{person.duration}</span> de Evolução
        </h3>
        <p className="text-[#cccccc] text-center mb-6">
          {person.description}
        </p>

        <div className="relative h-[400px] md:h-[600px] bg-gray-200 rounded-lg overflow-hidden">
          {/* Imagem Antes */}
          <div className="absolute inset-0">
            <img
              src={person.beforeLink}
              alt={`Antes de ${person.name}`}
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
              src={person.afterLink}
              alt={`Depois de ${person.name}`}
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
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl p-2">
              <svg className="w-6 h-6 text-[#171717]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </div>
          </div>

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
  ))}
</Swiper>

            {/* Botões no mobile (funcionais e fora do swiper) */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          ref={prevRef}
          className="bg-[#05a6b5] text-white rounded-xl w-10 aspect-square flex items-center justify-center shadow"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          ref={nextRef}
          className="bg-[#05a6b5] text-white rounded-xl w-10 aspect-square flex items-center justify-center shadow"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

    </div>
  </div>
</section>

      {/* Serviços Section */}
      <section id="servicos" className="py-20 bg-[#000000] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-space text-4xl md:text-5xl font-bold text-[#fafafa] text-center mb-12">
            PLANOS DESENVOLVIDOS PENSANDO NA SUA <span className="text-[#05a6b5]">EVOLUÇÃO</span>
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
        Com mais de 10 anos de experiência, desenvolvi um método exclusivo de acompanhamento que une estratégia, ciência e motivação. Você terá acesso a um plano 100% individualizado, adaptado aos seus objetivos, rotina e limitações.
      </p>
      <p className="font-space-bold text-gray-300 text-base md:text-lg">
        Treinamento com propósito. Nutrição com estratégia. Evolução com resultado.
      </p>
    </div>
    <div className="w-full md:w-[380px] rounded-xl overflow-hidden shadow-lg">

    </div>
  </div>

  {/* Benefícios */}
  <div className=" rounded-xl  space-y-4">
    <h3 className="font-space text-2xl font-bold text-[#05a6b5]">Vou acompanhar de perto:</h3>
    <div className="font-space-bold grid md:grid-cols-2 gap-4">
      {[
        "Avaliação física e objetivos detalhados",
        "Treinos personalizados para cada fase",
        "Estratégias alimentares adaptadas à sua realidade",
        "Ajustes semanais e suporte contínuo via WhatsApp",
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

      </div>
  </div>

  {/* Planos */}
  <div className="font-space grid md:grid-cols-4 gap-6">
    {[
      { label: "MENSAL", value: "R$ 149,99", type: "MENSAL" },
      { label: "TRIMESTRAL", value: "3x R$ 129,99", type: "TRIMESTRAL" },
      { label: "SEMESTRAL", value: "6x R$ 109,99", type: "SEMESTRAL" },
      { label: "ANUAL", value: "12x R$ 99,99", type: "ANUAL" },
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
        <button onClick={() => {
    const target = document.getElementById('planos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }} className="font-space w-full bg-[#05a6b5] text-black font-bold py-3 rounded-xl hover:brightness-90 transition">
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
            <button onClick={() => {
    const target = document.getElementById('planos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }} className="font-space bg-[#fafafa] text-[#171717] font-bold py-4 px-8 rounded-xl text-lg hover:bg-[#fafafa]/90 transition-all">
              ESCOLHER PLANO IDEAL
            </button>
          </div>
        </div>
      
      </section>

      {/* Planos Section */}
<section id="planos" className="relative py-20 bg-[#000000] overflow-hidden">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-4xl md:text-5xl font-space font-bold text-[#fafafa] text-center mb-12">
      ESCOLHA SEU <span className="bg-[#05a6b5]">PLANO IDEAL</span>
    </h2>
    <div className="text-white font-space grid md:grid-cols-4 gap-6">
      {[
        { label: "MENSAL", value: "R$ 149,99", type: "MENSAL", link: "https://invoice.infinitepay.io/plans/matheusradunz/1RU6xruHDV" },
        { label: "TRIMESTRAL", value: "3x R$ 129,99", type: "TRIMESTRAL", id1: "R$ 389,97 à vista", link: "https://invoice.infinitepay.io/plans/matheusradunz/ikW2Q2aIz" },
        { label: "SEMESTRAL", value: "6x R$ 109,99", type: "SEMESTRAL", id2: "R$ 659,94 à vista", link: "https://invoice.infinitepay.io/plans/matheusradunz/ikWF93D4x" },
        { label: "ANUAL", value: "12x R$ 99,99", type: "ANUAL", id3: "R$ 1.199,88 à vista", link: "https://invoice.infinitepay.io/plans/matheusradunz/1vKj6GMJjJ" },
      ].map((plan, i) => (
        <div
          key={i}
          className="bg-[#141414] border border-[#333] rounded-xl p-6 flex flex-col items-center text-center shadow-xl"
        >
          <p className="text-sm uppercase font-semibold text-[#05a6b5] mb-2">
            {plan.label}
          </p>
          <h3 className="font-space text-3xl font-bold mb-2">{plan.value}</h3>
          <p className="font-space text-gray-400 text-sm mb-4">{plan.id1 || plan.id2 || plan.id3}</p>
          <p className="font-space text-gray-400 text-sm mb-4">Assinatura {plan.type}</p>

          <div className="text-left space-y-2 w-full mb-6">
            {[
              "Treinos personalizados via aplicativo",
              "Avaliações periódicas para acompanhar sua evolução",
              "Suporte via WhatsApp 24h para dúvidas e ajustes",
              "Correções técnicas e orientações contínuas",
              "Estratégias de treino ajustadas com base no seu progresso",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-[#fafafa]/90">
                <CircleCheck className="w-5 h-5 text-[#05a6b5] mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => window.location.href = plan.link}
            className="font-space w-full bg-[#05a6b5] text-black font-bold py-3 rounded-xl hover:brightness-90 transition"
          >
            QUERO EVOLUIR
          </button>
          <p className="text-xs text-gray-400 mt-3">
            Acesso imediato • Suporte pessoal Matheus Radünz
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Depoimentos Section */}
      <section className="py-20 bg-gradient-to-r from-[#171717] to-[#05a6b5] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-[#ffffff] text-center mb-12">
            FEEDBACKS DOS ALUNOS
          </h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#141414] border border-[#333] rounded-xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#05a6b5] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-space font-bold text-[#ffffff]">Christiane</p>
              <p className="font-space text-[#ffffff] mb-4">34 anos</p>             
              <p className="font-space text-white mb-4">
                &quot;Matheus! Gostaria de te agradecer sinceramente pelo excelente trabalho que vem realizando. As dores na minha lombar diminuíram muito desde que comecei a treinar sob sua orientação, e isso impactou diretamente na minha qualidade de vida. Seu profissionalismo e atenção fazem toda a diferença. Parabéns e muito obrigado!✨🙏&quot;
              </p>
            </div>

            <div className="bg-[#141414] border border-[#333] rounded-xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#05a6b5] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-space font-bold text-[#ffffff]">Luiz</p>
              <p className="font-space text-[#ffffff] mb-4">22 anos</p>             
              <p className="font-space text-white mb-4">
                &quot;Fala mano! Tudo certo?

Só queria te passar que desde que iniciamos os treinos muita coisa mudou, não apenas o corpo mas também a mente.
Sinto que eu realmente aprendi a treinar com os seus ensinamentos e técnicas, ja fazia academia ha no mínimo 3 anos e não via o resultado que eu vi em 3 meses sob sua orientação.
Sou imensamente grato não só pelo treino mas também pela resenha, você é um cara extremamente gente boa que sabe conversar e anima o espaço que está, tamo junto! Eterno promotor dos seus serviços e da sua pessoa.&quot;
              </p>
            </div>

            <div className="bg-[#141414] border border-[#333] rounded-xl p-6 shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#05a6b5] fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="font-space font-bold text-[#ffffff]">Cleide</p>
              <p className="font-space text-[#ffffff] mb-4">45 anos</p>             
              <p className="font-space text-white mb-4">
                &quot;Matheus, você é um excelente profissional, dedicado e comprometido. Muito atencioso durante os treinos, sempre incentivando e ensinando a forma correta de fazer os exercícios.
Gosto da maneira como você personaliza os treinos, sempre pensando nas minhas necessidades e objetivos.&quot;
              </p>
            </div>
            </div>
        </div>
      </section>

      {/* FAQ Section */}
<section className="py-20 bg-[#000000] overflow-hidden">
  <div className="max-w-4xl mx-auto px-4">
    <h2 className="font-space text-4xl md:text-5xl font-bold text-center mb-12">
      <span className="bg-[#05a6b5] text-white">PERGUNTAS FREQUENTES</span>
    </h2>
    <div className="space-y-6">
      <div className="p-[1px] rounded-lg bg-gradient-to-br from-black to-[#05a6b5]">
        <div className="bg-[#141414] rounded-lg p-6">
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
        <div className="bg-[#141414] rounded-lg p-6">
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
        <div className="bg-[#141414] rounded-lg p-6">
          <h3 className="font-space text-xl font-bold text-[#fafafa] mb-3">
            Posso cancelar a qualquer momento?
          </h3>
          <p className="font-space text-[#fafafa]/80">
            Sim! Não trabalhamos com fidelidade. Você pode cancelar ou pausar seu plano 
            quando precisar, sem multas.
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
            <a href="https://wa.me/554791587307?text=Olá%20Matheus,%20gostaria%20de%20iniciar%20a%20minha%20evolução!">
            <button className="font-space border-2 border-[#fafafa] text-[#fafafa] font-bold py-4 px-8 rounded-xl text-lg hover:bg-[#fafafa] hover:text-[#171717] transition-all">
              Falar no WhatsApp
            </button>
            </a>
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
                Transformando vidas com ciência, empatia e resultados reais.
              </p>
            </div>
            <div>
              <h4 className="text-[#fafafa] font-bold mb-4">Links Rápidos</h4>
              <ul className="space-y-2">
                <li><a href="#sobre" className="font-space text-gray-400 hover:text-[#05a6b5]">Matheus Radünz</a></li>
                <li><a href="#servicos" className="font-space text-gray-400 hover:text-[#05a6b5]">Serviços</a></li>
                <li><a href="#planos" className="font-space text-gray-400 hover:text-[#05a6b5]">Planos</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-space text-[#fafafa] font-bold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/matheusradunzz/" className="text-gray-400 hover:text-[#05a6b5]">
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
    {/* Botão flutuante WhatsApp */}
<a
  href="https://wa.me/554791587307?text=Olá%20Matheus,%20gostaria%20de%20saber%20mais%20sobre%20a%20consultoria%20para%20iniciar%20a%20minha%20evolução!"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 text-white rounded-full p-4 shadow-lg hover:scale-105 transition-all"
  aria-label="Fale no WhatsApp"
>
<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 256 258"><defs><linearGradient id="logosWhatsappIcon0" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="#1FAF38"/><stop offset="100%" stopColor="#60D669"/></linearGradient><linearGradient id="logosWhatsappIcon1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stopColor="#F9F9F9"/><stop offset="100%" stopColor="#FFF"/></linearGradient></defs><path fill="url(#logosWhatsappIcon0)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a122.994 122.994 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#logosWhatsappIcon1)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416Zm40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513l10.706-39.082Z"/><path fill="#FFF" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561c0 15.67 11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716c-3.186-1.593-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/></svg>
</a>
    </div>
  );
}