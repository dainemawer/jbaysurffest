"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { CountdownTimer } from "@/components/countdown-timer"
import { EventSection } from "@/components/event-section"
import { MobileMenu } from "@/components/mobile-menu"
import { Menu, X } from "lucide-react"
import { SponsorsTicker } from "@/components/sponsors-ticker"
import { FaqSection } from "@/components/faq-section"
import { ContactForm } from "@/components/contact-form"
import { TicketsModal } from "@/components/tickets-modal"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [ticketsModalOpen, setTicketsModalOpen] = useState(false)

  // Festival date - May 15, 2025
  const festivalDate = new Date("2025-07-11T09:00:00")

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
    "/images/wsl-event.jpg",
    "/placeholder.svg?height=600&width=800&text=WSL+Image+2",
    "/placeholder.svg?height=600&width=800&text=WSL+Image+3",
  ]

  const parkOffImages = [
    "/images/music-festival.jpg",
    "/placeholder.svg?height=600&width=800&text=Park+Off+Image+2",
    "/placeholder.svg?height=600&width=800&text=Park+Off+Image+3",
  ]

  const comedyImages = [
    "/images/comedy-night.jpg",
    "/placeholder.svg?height=600&width=800&text=Comedy+Image+2",
    "/placeholder.svg?height=600&width=800&text=Comedy+Image+3",
  ]

  const fanParkImages = [
    "/images/fan-park.jpg",
    "/placeholder.svg?height=600&width=800&text=Fan+Park+Image+2",
    "/placeholder.svg?height=600&width=800&text=Fan+Park+Image+3",
  ]

  const mtbImages = [
    "/images/mtb-event.jpg",
    "/placeholder.svg?height=600&width=800&text=MTB+Image+2",
    "/placeholder.svg?height=600&width=800&text=MTB+Image+3",
  ]

  const jiujitsuImages = [
    "/images/jiujitsu-event.jpg",
    "/placeholder.svg?height=600&width=800&text=Jiujitsu+Image+2",
    "/placeholder.svg?height=600&width=800&text=Jiujitsu+Image+3",
  ]

  const funduroImages = [
    "/images/funduro-event.jpg",
    "/placeholder.svg?height=600&width=800&text=Funduro+Image+2",
    "/placeholder.svg?height=600&width=800&text=Funduro+Image+3",
  ]

  const fishingImages = [
    "/images/fishing-event.jpg",
    "/placeholder.svg?height=600&width=800&text=Fishing+Image+2",
    "/placeholder.svg?height=600&width=800&text=Fishing+Image+3",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Tickets Modal */}
      <TicketsModal isOpen={ticketsModalOpen} onClose={() => setTicketsModalOpen(false)} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-blue-500/95 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo-surf-fest.png"
              alt="Jeffreys Bay Surf Festival"
              width={338}
              height={168}
              className="h-10 w-auto invert"
              priority
            />
          </Link>
          <div className="flex flex-row gap-8">
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#wsl" className="text-white hover:text-blue-100 text-base font-heading tracking-wide">
                WSL Tour
              </Link>
              <Link href="#parkoff" className="text-white hover:text-blue-100 text-base font-heading tracking-wide">
                Park Off
              </Link>
              <Link href="#comedy" className="text-white hover:text-blue-100 text-base font-heading tracking-wide">
                Comedy Night
              </Link>
              <Link href="#fanpark" className="text-white hover:text-blue-100 text-base font-heading tracking-wide">
                Fan Park
              </Link>
              <Link href="#mtb" className="text-white hover:text-blue-100 text-base font-heading tracking-wide">
                MTB
              </Link>
              <Link href="#jiujitsu" className="text-white hover:text-blue-100 text-base font-heading tracking-wide">
                Jiujitsu
              </Link>
              <Link href="#funduro" className="text-white hover:text-blue-100 text-base font-heading tracking-wide">
                Funduro
              </Link>
              <Link href="#fishing" className="text-white hover:text-blue-100 text-base font-heading tracking-wide">
                Fishing
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleTicketButtonClick}
                className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-[#f18a50] px-5 py-2 text-base font-heading text-white shadow transition-colors hover:bg-[#e07a40]"
              >
                Get Tickets
              </button>
              <button
                className="md:hidden text-white p-1 hover:bg-blue-600 rounded-md transition-colors"
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
        <section className="relative bg-blue-500 py-20 md:py-16">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1>
              <Image
                src="/images/surf-fest-logo.png"
                alt="Jeffreys Bay Surf Festival"
                width={820}
                height={418}
                className="mx-auto mb-4"
                priority
              />
              </h1>
              <p className="text-xl max-w-2xl mx-auto text-blue-100 mt-8 mb-2">
                Join us from July 11–20, 2025, at Supertubes Beach, Jeffreys Bay, for South Africa’s premier surf, music, and adventure festival. Witness world-class surfing, enjoy live music, and partake in thrilling activities along the Eastern Cape’s stunning coastline.
              </p>
              <div className="rounded-lg p-6 mb-4">
                <CountdownTimer targetDate={festivalDate} />
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={handleTicketButtonClick}
                  className="inline-flex h-14 items-center justify-center rounded-md bg-[#f18a50] px-8 py-4 text-lg font-heading text-white shadow transition-colors hover:bg-[#e07a40]"
                >
                  Get Tickets
                </button>
                <Link
                  href="#schedule"
                  className="inline-flex h-14 items-center justify-center rounded-md border border-white bg-transparent px-8 py-4 text-lg font-heading text-white shadow-sm transition-colors hover:bg-white/10"
                >
                  View Schedule
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-500 opacity-50"></div>
        </section>

        {/* WSL Section */}
        <EventSection
          id="wsl"
          title="Watch the World’s Best Surfers at Supertubes"
          description="Experience the excitement as the World Surf League’s Championship Tour returns to Jeffreys Bay. See top surfers compete on the legendary right-hand point break, delivering high-performance action in one of the world’s most iconic surf spots."
          images={wslImages}
          logoSrc="/images/wsl-logo.png"
          logoAlt="Corona Cero"
          buttonText="Visit The WSL"
          buttonLink="https://www.worldsurfleague.com"
          imagePosition="right"
          bgColor="bg-white"
        />

        {/* Park Off Section */}
        <EventSection
          id="parkoff"
          title="Dance to the Rhythm at Park Off Music Festival"
          description="Immerse yourself in electrifying performances by top local and international artists. Park Off brings unforgettable music, dancing, and beach vibes to Jeffreys Bay’s shores."
          images={parkOffImages}
          logoSrc="/images/parkoff-logo.png"
          logoAlt="Park Off"
          buttonText="Buy Tickets"
          buttonLink="#tickets"
          imagePosition="left"
          bgColor="bg-mint-50"
          useMintButton={true}
        />

        {/* Comedy Night Section */}
        <EventSection
          id="comedy"
          title="Laugh Out Loud with South Africa’s Top Comedians"
          description="Enjoy an evening of side-splitting humor as renowned comedians take the stage. Comedy Night offers the perfect blend of laughter and entertainment amidst the festival’s vibrant atmosphere."
          images={comedyImages}
          buttonText="Buy Tickets"
          buttonLink="#tickets"
          imagePosition="right"
          bgColor="bg-white"
          bannerStyle={true}
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
          description="Challenge yourself on scenic coastal routes suitable for all skill levels. Experience the thrill of mountain biking and trail running amidst Jeffreys Bay’s breathtaking landscapes."
          images={mtbImages}
          buttonText="Visit Event Website"
          buttonLink="https://jbaymtbclassic.org.za/"
          imagePosition="right"
          bgColor="bg-white"
          bannerStyle={true}
        />

        {/* Jiujitsu Section */}
        <EventSection
          id="jiujitsu"
          title="Witness High-Octane Action at the Jiujitsu Tournament"
          description="Watch skilled martial artists from across South Africa compete in dynamic Brazilian Jiujitsu matches, showcasing technique, strength, and sportsmanship."
          images={jiujitsuImages}
          buttonText="Tournament Info"
          buttonLink="#jiujitsu-info"
          imagePosition="left"
          bgColor="bg-mint-50"
          bannerStyle={true}
          useMintButton={true}
        />

        {/* Funduro Section */}
        <EventSection
          id="funduro"
          title="Embark on an Off-Road Adventure with Funduro"
          description="Join Slake Adventures at Papiesfontein for a family-friendly off-road motorbike event featuring Kiddies, Intermediate, and Pro loops. Enjoy scenic views, a 20km Core Loop, and thrilling Flat Track action with top SA riders showing off their skills. Fun for all ages!"
          images={funduroImages}
          buttonText="Visit Slake Adventures"
          buttonLink="http://www.slakeadventures.com/"
          imagePosition="right"
          bgColor="bg-white"
          bannerStyle={true}
        />

        {/* Fishing Section */}
        <EventSection
          id="fishing"
          title="Cast Your Line at the Annual Fishing Competition"
          description="Test your angling skills in both shore and deep-sea categories. Compete for prizes and bragging rights in Jeffreys Bay’s rich fishing waters."
          images={fishingImages}
          buttonText="Fishing Website"
          buttonLink="https://www.facebook.com/winterfestskins/"
          imagePosition="left"
          bgColor="bg-mint-50"
          bannerStyle={true}
          useMintButton={true}
        />

        {/* Sponsors Ticker */}
        <SponsorsTicker />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-mint-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-heading text-gray-900 mb-6">Get In Touch</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Have questions or need assistance? Reach out to our team for inquiries about the festival, sponsorship opportunities, or general information.
                </p>
                <div className="flex items-center space-x-4 text-mint-600">
                  <div className="bg-mint-200 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <span className="text-gray-700">We'll get back to you as soon as possible.</span>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">Don't Miss Out on the Action!</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Secure your tickets now for South Africa's most exciting surf and lifestyle festival.
            </p>
            <button
              onClick={handleTicketButtonClick}
              className="inline-flex h-14 items-center justify-center rounded-md bg-mint-300 px-10 py-4 text-xl font-heading text-white shadow transition-colors hover:bg-mint-400"
            >
              Get Your Tickets
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/logo-surf-fest.png"
                alt="Jeffreys Bay Surf Festival"
                width={338}
                height={168}
                className="w-auto h-14 invert mb-4"
              />
              <p className="text-blue-200 text-sm">
                South Africa's premier surf, music, and adventure festival at the legendary Supertubes, Jeffreys Bay.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <button onClick={handleTicketButtonClick} className="text-blue-200 hover:text-white">
                    Tickets
                  </button>
                </li>
                <li>
                  <Link href="#schedule" className="text-blue-200 hover:text-white">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link href="#accommodation" className="text-blue-200 hover:text-white">
                    Accommodation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Events</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#wsl" className="text-blue-200 hover:text-white">
                    WSL Tour
                  </Link>
                </li>
                <li>
                  <Link href="#parkoff" className="text-blue-200 hover:text-white">
                    Park Off
                  </Link>
                </li>
                <li>
                  <Link href="#mtb" className="text-blue-200 hover:text-white">
                    MTB
                  </Link>
                </li>
                <li>
                  <Link href="#fishing" className="text-blue-200 hover:text-white">
                    Fishing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="https://www.instagram.com/jbaysurffestival/" className="text-blue-200 hover:text-white">
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
              <p className="text-sm text-blue-200">Follow us for updates and giveaways!</p>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-blue-300">
            <p>© {new Date().getFullYear()} Jeffreys Bay Surf Festival. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
