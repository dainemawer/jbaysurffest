"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface TicketsModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TicketsModal({ isOpen, onClose }: TicketsModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        {/* Modal content */}
        <div className="p-6">
          <h2 className="text-3xl font-heading text-gray-900 mb-3">Get Your Tickets</h2>
          <p className="text-gray-600 mb-6">
            Scan the QR code below to purchase tickets for the Jeffreys Bay Surf Festival on <a href="https://airdosh.co.za/">AirDosh</a>. Early bird tickets
            are available now!
          </p>

          {/* QR Code */}
          <div className="flex justify-center mb-6">
            <div className="border border-gray-200 p-3 rounded-lg bg-white">
              <Image
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAAAXNSR0IArs4c6QAACphJREFUeF7tnUF26jAMRcma2nnpyqAro513T/nHgPmBRraeLRElvI56qGI70vWT7AR3GMdx3DX+fH9/n6/8+vq6tZA/2+/3t8/S7x8fH7vpZ41ddl/2/v4OtfH7+ztrj7YDdbrb7aR+0Xam9s+M14CClQaXQcoDRW72eDzuDocDcompLQrE2sFaKl5qsPIAW2CaI2MpwF4FrKXjpQIrKVQCwePn2YC9AlgR4lUF6/Pzc2elUhKYz4Rr62BFiZcIlrWUatTudDq5F/hbBStavGbBSoNM5Gt+0kpvWoznlV9WuZ+fn7PiaVUPhUsCBS26rew1PrO2iRivWbCGYajee0v60uT+BGaCS/tDsHa7iPH6A1Yt+FmhevakNH1o4Xp1sDS+TBnl2fG6A6s2yBaVkpTHqq9XBsvKh5rsgPZ1B1ZJUi2hyjdSG6ym3nplsCLH6wZWKcgeUGng0tRbrwpW9HjdwJLof4RKUyhqpHX6iLK096JRrbn+ogFntc2R7zV6vM5gleh/fEbtAVZpuaxRrVcDaw3xOoOlpT8F0AOs1K7kLIL1d9qsIV7D6XQapc3QuTdqvMAqQduSDreaCkvqHilew/F4HOceMEtK4QmWVGsRrP+qhSr7UvEa9vv9OPe4RVoJeg5Umo0t6XCriiVNvmjxEsGSVGLtYEkrVvSNTXSVp1kpT22k8aCqvlS8CNY1mgSrjP5c/VbKMOlp8+w779Kr8J4zoFTAo6/mo4qyFrAk/0eLF8FamWKtBiypeGeNVU4NqCKyxrp6gGARrKkH4BorkmKhezSl0KPbDVJbSymTNJ5Iq8JSvMSd90gbpC1vV2wVLHSvz3OxVdpT4yOdSvETTbFW80gnPYRGdnO9ZgDyxF5TCG9VsdK9ryFe57cbkPehvMBCntgTLPm7no+LrqXidQYLeR/KY6DWapXA27JirSFetzdIS6rVUjxrVKX0Hlb6m2e/2vFZAYquOmtPAqLH6wZW7UuPHkGufZkCfYyjhQWxiwpW9Hit/utfCCQttlHBqqm9teLXRODPdyMez8eqHSrRq1yaMwZ6+2gByDpVacfQC27UeM1+xb422NbZUKM+ByNCCsxj6Q18DTCL9iPGy+RQkHwUZHLi46EgWbK9DgWpBa737xaB9370VKu3pv2n+DwjXsVjjLQnzvQGLwPZcsYAGvi120u+RuB6RryqB69p01fPYFveaW9NVVsFK/sjSryqYGlWHz1Q9RbqawcFHb/G155waeOlAstjNlgch5TGhQZm7fYasCLECwKrd8C5sG+ppay2A14JrCXj1QRWHnAqGPNRkNPPpqvD9Hs+SrLn8C+ChWjVvO0z49UFVv+t9rdg9b5U7dmcdqTRxqMdt7Udwbp6lGDZokWwCJYtUdfWCBbBIlhzHohW00Qbjws1ikapWFQsBSa4yfD29gb9v0KrIjfa9gHuulhXRIsLwYrFR/NoCFbFdUvtjDdHNMiFBItguaBIsAgWwZrzQLSZYZU6XaL9xEajxcWseEcDjPocbR+1R1epkj0aYHSc6D4Z+n8Y0bhI9gSrMTUTrLLjCBbBshKpu3YIFsEiWMhiAq1dWGPZ8kXFomLZEnVtTQQLXd1YjQ5d9aD9ovdlpXxWihjtfiX/EKxGxUIBJVhXD1g5Dp1hVCzUY2V7NI6oQlOxGicM6mgUi7VPJIJFsFTMoxOJYBGs54L1ePBa7t2KXO9HHypvKYzQWkTR5J0J6k+r9tF2rJ4tiu+8o45AawU0kGj7Vg5F20FXf6gf0PbR8RMs1GMVe6sAo4G36tdq4hEsgqVKtaibCBbqMSqWymMES+UmvZFVSmIqvHjArHi3cqhVraBH6mJpBRY6fqt+o/mfYF0jYhVggkXFupvkBOviDnRiSEpJxaJiuawuCRbBIlhoQY7YMxUap0LptJm1ONrq0RO6f4P6Bx0nuspDJlHJFvWDWGMRrPJ2gzcQVoASrIoHrByNzjwre1RprO6XYBGsrm0Oq+0AKQzoBGMqvHoATW2oPRXrukHKGos11nQyLKZY6Axeyt5b6r1rI6sAW7WD1nDw9wqXAsXKQd7toKlwqQngXasRrErthQaeYDXWWFSsck1GsAjWHQNoamCNVa66mAqZCtG6XGUfDiw0lay9GFdFSWHkrbhoXAjW1WNLpTYFMyoTgmUcSCrWxaEEi2CpFAg1IlgEC2VGZU+wCJYKFNQoHFjSaTPoKgB1hJV9tBrLexEQzW/SeOD/sIrODCtHSO0QrDYPW/mNYFX8b6U0Vu204aK/imA1AoEqqxUQVu3oEWmzJFgEq42cJ/mNqbDR0egihop18RhcvLtMn45GrV7jsVocWKUYFFB0AqD3i7ZPsBqVbCmg0Tm4VK1JsAjWnQdQpZTAJVgEi2DNMbBUSlqqX6ZC1AON9ksFeKl+UTetssb6/v4+3+fX19ftfvNn+/3+9ln6/ePjYzf9DHXQUvZWAKGrRW/7cKvCBE4GKUOEBP14PO4OhwNyyaK2BKvs/u7iPQPVAtPc0NYCGMFyBCspVALB4yc6YATLCazPz8+dlUpJQ4wMF8EyBss69WnU7nQ6hSvwCZYhWAmqpFSan7TSmxbjeeWXVe7n5+eseFrVs4LLCgiNDzxs0B1waQyoH6zamd15H4ah6quW9KWp1RKYCa7eH9Sh6H5P7/hq128OrFrws0L17Elp+uiFi2Bd0EX94KJYtYC3qJQ0UO++UIdSsdpqKUlZ71JhKQVaQpVvoQZXT71FsIIoVinIHlBp4OqptwhWELAktXqESlPY1wrT9PdxHG9mpb2yVtVCwdKMWWOD9rtUCkYXB+h9nVNhSa2mACTHeoBV2t5oVS3UERpoNDZov5sGS6tWXmCldiW4CZYGZ9zGXbFOp9MobYY+qpUnWKW2W9Ihqhx4aOavQPvdrGIdj8dx7gGzpBQeqTCHSKq1CJYV9v/bcVes/X4/zj1ukVaCnmBJtVZLOkSVwyp0aL+bVSwJLEkl1g4WCpDVzJb6RdtHx4/aW02MgWCVXY8GHlUgtH0UFNTeDKy0pTTX+Vzh7l28l9qXxiM5Dg2wlaKg/RKsq+c9UyHBQvXF3t5MsZgKmQqnHiBYlcmKpiSmwosHNgmW5e476iD7pHLfIgq6Ve2F+gG1l/w2SDvvkTZIW96usHKQFXAEa+JJPtKxwiref46w+qa1qFjp7QbpUcqcUnitCpE3LDThpmLZ1kxoaj6/NoO8D+UFFvKGBcHSeCAAWMj7UB5gWatVy+pGH6o2y5ersfJ/piipVkvxrHV/7yvRaMBebVsB9Q+a8oo1Vvpj7UuqHnDVvkyheYyDOo5g2W4IV8FKBrVAW8Jl1RfBKoOC+sdcsfLwaoeA9MKlORMC6QN1HBVrAcXSwpXskODndmsqle00KTDbEqyVKJam3preStqhz0dBps8fDwXJKdbrUBCCtSKwULi0K8CSXeuZEOhGqDeIaPtoTYO2bxGbljaq57xr01dL5/malnfaa6kQfWSBjt+q/ZcFS7NaRIMytW+p1abXU7F6vO93bVWxpl1bqldr6nt0BcHyg6OnZQgsdHX3OLBc2KcTAHvO16Ji9YT8Odc2gZWHllZ6+SjI6WfT1WH6PR8laQUTwXoOHD29/AOlBNTMnNyp9gAAAABJRU5ErkJggg=="
                alt="AirDosh QR Code for ticket purchase"
                width={200}
                height={200}
                className="w-48 h-48"
              />
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-md mb-6">
            <h3 className="font-heading text-xl text-blue-800 mb-2">Ticket Options</h3>
            <ul className="space-y-2 text-blue-700">
              <li className="flex justify-between">
                <span>Full Festival Pass</span>
                <span className="font-bold">R1,200</span>
              </li>
              <li className="flex justify-between">
                <span>Weekend Pass</span>
                <span className="font-bold">R800</span>
              </li>
              <li className="flex justify-between">
                <span>Day Pass</span>
                <span className="font-bold">R350</span>
              </li>
            </ul>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            After scanning, you'll be directed to <a href="https://airdosh.co.za/">AirDosh's</a> secure payment platform to complete your purchase. Tickets
            will be delivered to your email.
          </p>

          <button
            onClick={onClose}
            className="w-full rounded-md bg-[#f18a50] px-4 py-3 font-heading text-base text-white shadow hover:bg-[#e07a40] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
