"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CountdownTimer } from "@/components/countdown-timer"
import { EventSection } from "@/components/event-section"
import { MobileMenu } from "@/components/mobile-menu"
import { Menu, X } from "lucide-react"
import { SponsorsTicker } from "@/components/sponsors-ticker"
import { FaqSection } from "@/components/faq-section"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Festival date - May 15, 2025
  const festivalDate = new Date("2025-05-15T09:00:00")

  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-blue-500/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo.png"
              alt="Jeffreys Bay Surf Festival"
              width={150}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#wsl" className="text-white hover:text-blue-100 text-base font-heading">
              WSL Tour
            </Link>
            <Link href="#parkoff" className="text-white hover:text-blue-100 text-base font-heading">
              Park Off
            </Link>
            <Link href="#comedy" className="text-white hover:text-blue-100 text-base font-heading">
              Comedy Night
            </Link>
            <Link href="#fanpark" className="text-white hover:text-blue-100 text-base font-heading">
              Fan Park
            </Link>
            <Link href="#mtb" className="text-white hover:text-blue-100 text-base font-heading">
              MTB
            </Link>
            <Link href="#jiujitsu" className="text-white hover:text-blue-100 text-base font-heading">
              Jiujitsu
            </Link>
            <Link href="#funduro" className="text-white hover:text-blue-100 text-base font-heading">
              Funduro
            </Link>
            <Link href="#fishing" className="text-white hover:text-blue-100 text-base font-heading">
              Fishing
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="#tickets"
              className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-[#f18a50] px-5 py-2 text-base font-heading text-white shadow transition-colors hover:bg-[#e07a40]"
            >
              Get Tickets
            </Link>
            <button
              className="md:hidden text-white p-1 hover:bg-blue-600 rounded-md transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-blue-500 py-20 md:py-32">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Image
                src="/images/park-off-logo.png"
                alt="Park Off JBay 2025"
                width={300}
                height={100}
                className="mx-auto mb-8"
                priority
              />
              <h1 className="text-5xl md:text-7xl font-heading text-white mb-6">Jeffreys Bay Surf Festival</h1>
              <p className="text-xl text-blue-100 mb-8">
                South Africa's premier surf, music, and adventure festival at the legendary Supertubes
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-heading text-white mb-4">Event Starts In:</h2>
                <CountdownTimer targetDate={festivalDate} />
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="#tickets"
                  className="inline-flex h-14 items-center justify-center rounded-md bg-[#f18a50] px-8 py-4 text-lg font-heading text-white shadow transition-colors hover:bg-[#e07a40]"
                >
                  Get Tickets
                </Link>
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
          title="WSL Jeffreys Bay Tour Stop"
          description="Experience world-class surfing as the World Surf League brings the Championship Tour to the legendary waves of Supertubes. Watch the world's best surfers compete in one of the most iconic right-hand point breaks on the planet."
          imageSrc="/images/wsl-event.jpg"
          logoSrc="/images/corona-cero-logo.png"
          logoAlt="Corona Cero"
          buttonText="Visit WSL Website"
          buttonLink="https://www.worldsurfleague.com"
          imagePosition="right"
          bgColor="bg-white"
        />

        {/* Park Off Section */}
        <EventSection
          id="parkoff"
          title="Park Off Music Festival"
          description="South Africa's hottest music festival comes to JBay! Featuring top local and international artists across multiple stages, Park Off delivers an unforgettable weekend of music, dancing, and good vibes right on the beach."
          imageSrc="/images/music-festival.jpg"
          logoSrc="/images/park-off-logo.png"
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
          title="Comedy Night"
          description="Laugh until your sides hurt with South Africa's funniest comedians. Our comedy night brings together the best stand-up talent for an evening of hilarious entertainment that's the perfect complement to days spent in the sun and surf."
          imageSrc="/images/comedy-night.jpg"
          buttonText="Buy Tickets"
          buttonLink="#tickets"
          imagePosition="right"
          bgColor="bg-white"
          bannerStyle={true}
        />

        {/* Fan Park Section */}
        <EventSection
          id="fanpark"
          title="Fan Park"
          description="The heart of the festival! Our Fan Park features food vendors, merchandise, athlete meet-and-greets, live broadcasts of the surf competition, and plenty of activities for the whole family. Check the schedule for special events throughout the festival."
          imageSrc="/images/fan-park.jpg"
          buttonText="View Schedule"
          buttonLink="#schedule"
          imagePosition="left"
          bgColor="bg-mint-50"
          useMintButton={true}
        />

        {/* MTB Section */}
        <EventSection
          id="mtb"
          title="Mountain Biking Competition"
          description="Take on the challenging trails of the Eastern Cape in our mountain biking competition. With categories for all skill levels and spectacular coastal routes, this event combines technical riding with breathtaking ocean views."
          imageSrc="/images/mtb-event.jpg"
          buttonText="MTB Website"
          buttonLink="#mtb-website"
          imagePosition="right"
          bgColor="bg-white"
          bannerStyle={true}
        />

        {/* Jiujitsu Section */}
        <EventSection
          id="jiujitsu"
          title="Jiujitsu Tournament"
          description="Watch or participate in our Brazilian Jiujitsu tournament featuring competitors from across South Africa. From beginners to black belts, this event showcases the technical skill and competitive spirit of this dynamic martial art."
          imageSrc="/images/jiujitsu-event.jpg"
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
          title="Funduro"
          description="Adventure motorcyclists will love our Funduro event! Navigate challenging terrain along the beautiful Wild Coast in this fun, non-competitive ride that's all about the joy of off-road motorcycling in one of South Africa's most scenic regions."
          imageSrc="/images/funduro-event.jpg"
          buttonText="Funduro Website"
          buttonLink="#funduro-website"
          imagePosition="right"
          bgColor="bg-white"
          bannerStyle={true}
        />

        {/* Fishing Section */}
        <EventSection
          id="fishing"
          title="Fishing Competition"
          description="Cast your line in our annual fishing competition! With categories for shore angling and deep sea fishing, anglers of all types can test their skills in the fish-rich waters of Jeffreys Bay and compete for prizes and bragging rights."
          imageSrc="/images/fishing-event.jpg"
          buttonText="Fishing Website"
          buttonLink="#fishing-website"
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
                  Have questions about the festival? Want to inquire about sponsorship opportunities? Send us a message
                  and our team will get back to you as soon as possible.
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
                  <span className="text-gray-700">We'll get back to you as soon as possible</span>
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
              Secure your tickets now for South Africa's most exciting surf and lifestyle festival
            </p>
            <Link
              href="#tickets"
              className="inline-flex h-14 items-center justify-center rounded-md bg-mint-300 px-10 py-4 text-xl font-heading text-white shadow transition-colors hover:bg-mint-400"
            >
              Get Your Tickets
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/park-off-logo.png"
                alt="Park Off JBay 2025"
                width={150}
                height={50}
                className="mb-4"
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
                  <Link href="#tickets" className="text-blue-200 hover:text-white">
                    Tickets
                  </Link>
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
                <Link href="#" className="text-blue-200 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
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
