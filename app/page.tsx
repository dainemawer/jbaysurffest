"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CountdownTimer } from "@/components/countdown-timer"
import { EventSection } from "@/components/event-section-new"
import { MobileMenu } from "@/components/mobile-menu"
import { Menu, X } from "lucide-react"
import { SponsorsTicker } from "@/components/sponsors-ticker"
import { FaqSection } from "@/components/faq-section"
import { ContactForm } from "@/components/contact-form"
import { TicketsModal } from "@/components/tickets-modal"
import { HeroCarousel } from "@/components/hero-carousel"
import { NewsletterForm } from "@/components/newsletter-form"
import { motion } from "framer-motion"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [ticketsModalOpen, setTicketsModalOpen] = useState(false)

  // Festival date - May 15, 2025
  const festivalDate = new Date("2025-07-11T09:00:00")

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  // Handle header sticky behavior
  useEffect(() => {
    const header = document.querySelector('header')
    const handleScroll = () => {
      if (window.scrollY > 0) {
        header?.classList.add('sticky')
      } else {
        header?.classList.remove('sticky')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Function to handle ticket button clicks
  const handleTicketButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setTicketsModalOpen(true)
  }

  // Listen for custom events from EventSection components
  useEffect(() => {
    const handleTicketEvent = () => {
      setTicketsModalOpen(true)
    }

    document.addEventListener("openTicketsModal", handleTicketEvent)

    return () => {
      document.removeEventListener("openTicketsModal", handleTicketEvent)
    }
  }, [])


  // Sample image arrays for each event section
  // In a real implementation, you would have actual image paths for each event
  const wslImages = [
    "images/wsl/wsl-1.jpg",
    "images/wsl/wsl-2.jpg",
    "images/wsl/wsl-3.jpg",
    "images/wsl/wsl-4.jpg",
    "images/wsl/wsl-5.jpg",
    "images/wsl/wsl-6.jpg",
    "images/wsl/wsl-7.jpg",
    "images/wsl/wsl-8.jpg",
    "images/wsl/wsl-9.jpg",
    "images/wsl/wsl-10.jpg",
  ]

  const parkOffImages = [
    "/images/parkoff/parkoff-1.jpg",
    "/images/parkoff/parkoff-2.jpg",
    "/images/parkoff/parkoff-3.jpg",
    "/images/parkoff/parkoff-4.jpg",
    "/images/parkoff/parkoff-5.jpg",
    "/images/parkoff/parkoff-6.jpg",
    "/images/parkoff/parkoff-7.jpg",
    "/images/parkoff/parkoff-8.jpg",
    "/images/parkoff/parkoff-9.jpg",
    "/images/parkoff/parkoff-10.jpg",
  ]

  const comedyImages = [
    "/images/comedy/comedy-1.jpg",
    "/images/comedy/comedy-2.jpg",
    "/images/comedy/comedy-3.jpg",
    "/images/comedy/comedy-4.jpg",
    "/images/comedy/comedy-5.jpg",
    "/images/comedy/comedy-6.jpg",
    "/images/comedy/comedy-7.jpg",
    "/images/comedy/comedy-8.jpg",
    "/images/comedy/comedy-9.jpg",
    "/images/comedy/comedy-10.jpg",
  ]

  const mtbImages = [
    "/images/mtb/mtb-1.jpg",
    "/images/mtb/mtb-2.jpg",
    "/images/mtb/mtb-3.jpg",
    "/images/mtb/mtb-4.jpg",
    "/images/mtb/mtb-5.jpg",
    "/images/mtb/mtb-6.jpg",
    "/images/mtb/mtb-7.jpg",
    "/images/mtb/mtb-8.jpg",
    "/images/mtb/mtb-9.jpg",
    "/images/mtb/mtb-10.jpg",
  ]

  const jiujitsuImages = [
    "/images/jiu/jiu-1.jpg",
    "/images/jiu/jiu-2.jpg",
    "/images/jiu/jiu-3.jpg",
    "/images/jiu/jiu-4.jpg",
    "/images/jiu/jiu-5.jpg",
    "/images/jiu/jiu-6.jpg",
    "/images/jiu/jiu-7.jpg",
    "/images/jiu/jiu-8.jpg",
    "/images/jiu/jiu-9.jpg",
    "/images/jiu/jiu-10.jpg",
  ]

  const funduroImages = [
    "/images/funduro/funduro-1.jpg",
    "/images/funduro/funduro-2.jpg",
    "/images/funduro/funduro-3.jpg",
    "/images/funduro/funduro-4.jpg",
    "/images/funduro/funduro-5.jpg",
    "/images/funduro/funduro-6.jpg",
    "/images/funduro/funduro-7.jpg",
    "/images/funduro/funduro-8.jpg",
    "/images/funduro/funduro-9.jpg",
    "/images/funduro/funduro-10.jpg",
  ]

  const fanParkImages = [
    "/images/fanpark/fanpark-1.jpg",
    "/images/fanpark/fanpark-2.jpg",
    "/images/fanpark/fanpark-3.jpg",
    "/images/fanpark/fanpark-4.jpg",
    "/images/fanpark/fanpark-5.jpg",
    "/images/fanpark/fanpark-6.jpg",
    "/images/fanpark/fanpark-7.jpg",
    "/images/fanpark/fanpark-8.jpg",
    "/images/fanpark/fanpark-9.jpg",
    "/images/fanpark/fanpark-10.jpg",
  ]

  const fishingImages = [
    "/images/fishing/fishing-1.jpg",
    "/images/fishing/fishing-2.jpg",
    "/images/fishing/fishing-3.jpg",
    "/images/fishing/fishing-4.jpg",
    "/images/fishing/fishing-5.jpg",
    "/images/fishing/fishing-6.jpg",
    "/images/fishing/fishing-7.jpg",
    "/images/fishing/fishing-8.jpg",
    "/images/fishing/fishing-9.jpg",
    "/images/fishing/fishing-10.jpg",
  ]

  const touchImages = [
    "/images/touchies/touchies-1.jpg",
    "/images/touchies/touchies-2.jpg",
    "/images/touchies/touchies-3.jpg",
    "/images/touchies/touchies-4.jpg",
    "/images/touchies/touchies-5.jpg",
    "/images/touchies/touchies-6.jpg",
    "/images/touchies/touchies-7.jpg",
    "/images/touchies/touchies-8.jpg",
    "/images/touchies/touchies-9.jpg",
    "/images/touchies/touchies-10.jpg",
  ]

  const xOverImages = [
    "/images/x-over/x-over-1.jpg",
    "/images/x-over/x-over-2.jpg",
    "/images/x-over/x-over-3.jpg",
    "/images/x-over/x-over-4.jpg",
    "/images/x-over/x-over-5.jpg",
    "/images/x-over/x-over-6.jpg",
    "/images/x-over/x-over-7.jpg",
    "/images/x-over/x-over-8.jpg",
    "/images/x-over/x-over-9.jpg",
    "/images/x-over/x-over-10.jpg",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Tickets Modal */}
      <TicketsModal isOpen={ticketsModalOpen} onClose={() => setTicketsModalOpen(false)} />

      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 transition-all duration-300 [&.sticky]:fixed [&.sticky]:bg-white/80 [&.sticky]:backdrop-blur-sm [&.sticky]:h-16">
        <div className="container max-w-7xl mx-auto flex h-24 [.sticky_&]:h-16 items-center justify-between px-4 transition-all duration-300">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/jbay-logo-white.png"
              alt="Jeffreys Bay Surf Festival"
              width={338}
              height={168}
              className="h-10 w-auto transition-all duration-300 [.sticky_&]:h-8 [.sticky_&]:invert"
              priority
            />
          </Link>
          <div className="flex flex-row gap-8">
            <nav className="hidden lg:mt-1 lg:flex items-center space-x-4">
              <Link href="#wsl" className="text-white border-b-2 border-b-transparent hover:border-b-[#f18a50] text-lg font-heading tracking-wide transition-all duration-300 [.sticky_&]:text-black">
                WSL Tour
              </Link>
              <Link href="#parkoff" className="text-white border-b-2 border-b-transparent hover:border-b-[#f18a50] text-lg font-heading tracking-wide transition-all duration-300 [.sticky_&]:text-black">
                Park Off
              </Link>
              <Link href="#comedy" className="text-white border-b-2 border-b-transparent hover:border-b-[#f18a50] text-lg font-heading tracking-wide transition-all duration-300 [.sticky_&]:text-black">
                Comedy Night
              </Link>
              <Link href="#fanpark" className="text-white border-b-2 border-b-transparent hover:border-b-[#f18a50] text-lg font-heading tracking-wide transition-all duration-300 [.sticky_&]:text-black">
                Fan Park
              </Link>
              <Link href="#mtb" className="text-white border-b-2 border-b-transparent hover:border-b-[#f18a50] text-lg font-heading tracking-wide transition-all duration-300 [.sticky_&]:text-black">
                MTB
              </Link>
              <Link href="#jiujitsu" className="text-white border-b-2 border-b-transparent hover:border-b-[#f18a50] text-lg font-heading tracking-wide transition-all duration-300 [.sticky_&]:text-black">
                Jiujitsu
              </Link>
              <Link href="#funduro" className="text-white border-b-2 border-b-transparent hover:border-b-[#f18a50] text-lg font-heading tracking-wide transition-all duration-300 [.sticky_&]:text-black">
                Funduro
              </Link>
              <Link href="#fishing" className="text-white border-b-2 border-b-transparent hover:border-b-[#f18a50] text-lg font-heading tracking-wide transition-all duration-300 [.sticky_&]:text-black">
                Fishing
              </Link>
              <Link href="#touchies" className="text-white border-b-2 border-b-transparent hover:border-b-[#f18a50] text-lg font-heading tracking-wide transition-all duration-300 [.sticky_&]:text-black">
                Touchies
              </Link>
              <Link href="#x-over" className="text-white border-b-2 border-b-transparent hover:border-b-[#f18a50] text-lg font-heading tracking-wide transition-all duration-300 [.sticky_&]:text-black">
                X-Over
              </Link>
              <a
                href="/surf-fest-schedule.pdf"
                target="_blank"
                className="inline-flex text-lg h-10 items-center justify-center rounded-md border-2 border-white bg-white/10 backdrop-blur-sm px-4 font-heading text-white shadow-sm transition-colors hover:bg-white/20 [.sticky_&]:border-black [.sticky_&]:text-black [.sticky_&]:hover:bg-black/10"
              >
                View Schedule
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <button
                className="lg:hidden text-white p-1 hover:bg-white/10 rounded-md transition-colors [.sticky_&]:text-black [.sticky_&]:hover:bg-black/10"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Carousel */}
          <HeroCarousel />

          {/* Content */}
          <div className="container max-w-7xl mx-auto px-4 relative z-10 pt-16">
            <motion.div
              className="max-w-4xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                className="text-6xl md:text-8xl mb-8 font-heading text-white drop-shadow-lg leading-tight"
                variants={fadeInUp}
              >
                <Image className="-rotate-2" src="/images/surf-fest-logo.png" alt="Jeffreys Bay Surf Festival" width={600} height={500} />
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-white mb-8 max-w-2xl drop-shadow-md"
                variants={fadeInUp}
              >
                Join South Africas largest sport and music festival from July 11–20, 2025, at Supertubes Beach, Jeffreys Bay.
              </motion.p>
              <motion.div
                className="mb-8"
                variants={fadeInUp}
              >
                <CountdownTimer targetDate={festivalDate} />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* WSL Section */}
        <EventSection
          id="wsl"
          title="Watch the World's Best Surfers at Supertubes"
          description="Experience the excitement as the World Surf League's Championship Tour returns to Jeffreys Bay. See top surfers compete on the legendary right-hand point break, delivering high-performance action in one of the world's most iconic surf spots."
          images={wslImages}
          logoSrc="/images/wsl-logo.png"
          logoAlt="Corona Cero"
          buttonText="Visit The WSL"
          buttonLink="https://www.worldsurfleague.com"
          imagePosition="right"
          bgColor="bg-white"
          posterImage="/images/wsl-poster.png"
        />

        {/* Park Off Section */}
        <EventSection
          id="parkoff"
          title="Dance to the Rhythm at Park Off Music Festival"
          description="Immerse yourself in electrifying performances by top local and international artists including Zakes Bantwini, Dino Moran, Dean Fuel, Niskerone, and more. Park Off brings unforgettable music, dancing, and beach vibes to Jeffreys Bay's shores."
          images={parkOffImages}
          logoSrc="/images/parkoff-logo.png"
          logoAlt="Park Off"
          buttonText="Buy Tickets"
          buttonLink="https://airdosh.co.za/"
          imagePosition="left"
          bgColor="bg-gray-50"
          posterImage="/images/posters/parkoff.jpg"
          useMintButton={true}
          videoBackground="/images/video-background.mp4"
        />

        {/* Comedy Night Section */}
        <EventSection
          id="comedy"
          title="Laugh Out Loud with South Africa's Top Comedians"
          description="Enjoy an evening of side-splitting humor as renowned comedians take the stage. Comedy Night offers the perfect blend of laughter and entertainment amidst the festival's vibrant atmosphere."
          images={comedyImages}
          buttonText="Buy Tickets"
          buttonLink="#tickets"
          imagePosition="left"
          posterImage="/images/posters/comedy-takeover.jpg"
          bgColor="bg-gray-50"
        />

        {/* Fan Park Section */}
        <EventSection
          id="fanpark"
          title="Explore the Heartbeat of the Festival at Fan Park"
          description="Discover a hub of excitement with food vendors, merchandise stalls, athlete meet-and-greets, live surf broadcasts, and family-friendly activities. Fan Park is your go-to destination for festival fun."
          images={fanParkImages}
          buttonText="View Schedule"
          buttonLink="#schedule"
          imagePosition="left"
          bgColor="bg-mint-50"
          useMintButton={true}
        />

        {/* MTB Section */}
        <EventSection
          id="mtb"
          title="Conquer the Trails at the MTB Classic and Trail Run"
          description="Challenge yourself on scenic coastal routes suitable for all skill levels. Experience the thrill of mountain biking and trail running amidst Jeffreys Bay's breathtaking landscapes."
          images={mtbImages}
          buttonText="More Info"
          buttonLink="https://jbaymtbclassic.org.za/"
          imagePosition="right"
          bgColor="bg-white"
          posterImage="/images/posters/mtb-trailrun.jpg"
        />

        {/* Jiujitsu Section */}
        <EventSection
          id="jiujitsu"
          title="South Africa's Largest and Richest Jiu Jitsu Event"
          description="Step into the arena of raw skill and fierce competition at the JBay Jiu Jitsu Takedown 2025 — where grapplers from across the country go head-to-head under the ADCC ruleset. Hosted by The Pound BJJ (Cape St Francis), this electrifying event is one of South Africa's most anticipated grappling showdowns, with R100,000 in prize money up for grabs."
          images={jiujitsuImages}
          buttonText="More Info"
          buttonLink="https://smoothcomp.com"
          imagePosition="left"
          bgColor="bg-gray-50"
          useMintButton={true}
          posterImage="/images/posters/jiu.jpg"
        />

        {/* Funduro Section */}
        <EventSection
          id="funduro"
          title="Embark on an Off-Road Adventure with Funduro"
          description="Join Slake Adventures at Papiesfontein for a family-friendly off-road motorbike event featuring Kiddies, Intermediate, and Pro loops. Enjoy scenic views, a 20km Core Loop, and thrilling Flat Track action with top SA riders showing off their skills. Fun for all ages!"
          images={funduroImages}
          buttonText="More Info"
          buttonLink="http://www.slakeadventures.com/"
          imagePosition="right"
          posterImage="/images/posters/funduro.jpeg"
          bgColor="bg-white"
        />

        {/* Fishing Section */}
        <EventSection
          id="fishing"
          title="Cast Your Line at the Annual Fishing Competition"
          description="Celebrate a decade of fishing skins at the Winter Skins Fishing Competition 2025 — one of Jeffreys Bay's most anticipated angling events! This catch-and-release tournament promises fantastic hourly prizes, a vibrant community vibe, and something for everyone — from serious anglers to junior fishers."
          images={fishingImages}
          buttonText="More Info"
          buttonLink="https://www.facebook.com/winterfestskins/"
          imagePosition="left"
          bgColor="bg-gray-50"
          useMintButton={true}
          posterImage="/images/posters/skins.png"
        />

        {/* Touch Rugby & Volleyball Showdown Section */}
        <EventSection
          id="touchies"
          title="Touch Rugby & Volleyball Showdown"
          description="Get ready for a day of action-packed fun at the Touch Rugby & Volleyball Showdown – a crowd-favorite event at the JBay Surf Fest! Join us on the golden sands of Main Beach for a high-energy tournament where local legends and visiting athletes battle it out in the sun."
          images={touchImages}
          buttonText="More Info"
          buttonLink="https://www.facebook.com/touchiesjbay/"
          imagePosition="right"
          bgColor="bg-white"
          useMintButton={true}
          posterImage="/images/posters/touchies-jbay.jpg"
        />

        {/* Oakley X Over Section */}
        <EventSection
          id="x-over"
          title="Oakley X Over Presented by Betify"
          description="Watch your favorite sports heroes swap stadiums for surfboards and fairways in the thrilling Oakley X Over, presented by Betify. This unique crossover challenge brings together elite athletes for two adrenaline-fueled days of surfing at Lower Point and golf at the prestigious St Francis Links."
          images={xOverImages}
          buttonText="More Info"
          buttonLink="https://www.instagram.com/jbaysurffestival/p/DJqeiXPMzid/"
          imagePosition="left"
          bgColor="bg-gray-50"
          useMintButton={true}
          posterImage="/images/posters/oakley-x-over.jpg"
        />

        {/* Sponsors Ticker */}
        <SponsorsTicker />

        {/* Newsletter Section */}
        <section className="py-16 md:py-24 bg-mint-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl space-y-4 text-center mx-auto">
              <h2 className="text-5xl md:text-6xl font-heading text-gray-900 mb-6">Stay Updated</h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-12">
                Subscribe to our newsletter for the latest updates, event announcements, and exclusive offers.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-5xl md:text-6xl font-heading text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-12">
                Have questions or need assistance? Reach out to our team for inquiries about the festival, sponsorship opportunities, or general information.
              </p>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/jbay-logo-white.png"
                alt="Jeffreys Bay Surf Festival"
                width={338}
                height={168}
                className="w-auto h-14 mb-4"
              />
              <p className="text-white text-sm">
                South Africa's premier surf, music, and adventure festival at the legendary Supertubes, Jeffreys Bay.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-white hover:text-gray-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#schedule" className="text-white hover:text-gray-200">
                    Schedule
                  </Link>
                </li>
                <li>
                  <a href="https://africanperfection.co.za" rel="noopener noreferrer" target="_blank" className="text-white hover:text-gray-200">
                    Accommodation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Events</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#wsl" className="text-white hover:text-gray-200">
                    WSL Tour
                  </Link>
                </li>
                <li>
                  <Link href="#parkoff" className="text-white hover:text-gray-200">
                    Park Off
                  </Link>
                </li>
                <li>
                  <Link href="#comedy" className="text-white hover:text-gray-200">
                    Comedy Night
                  </Link>
                </li>
                <li>
                  <Link href="#fanpark" className="text-white hover:text-gray-200">
                    Fan Park
                  </Link>
                </li>
                <li>
                  <Link href="#mtb" className="text-white hover:text-gray-200">
                    MTB
                  </Link>
                </li>
                <li>
                  <Link href="#fishing" className="text-white hover:text-gray-200">
                    Fishing
                  </Link>
                </li>
                <li>
                  <Link href="#funduro" className="text-white hover:text-gray-200">
                    Funduro
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="https://www.instagram.com/jbaysurffestival/" rel="noopener noreferrer" target="_blank" className="text-white hover:text-gray-200">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-sm text-white">Follow us for updates and giveaways!</p>
            </div>
          </div>
          <div className="border-t border-white mt-8 pt-8 text-center text-sm text-white">
            <p>© {new Date().getFullYear()} Jeffreys Bay Surf Festival. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
