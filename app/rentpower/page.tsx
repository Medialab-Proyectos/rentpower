import { RentPowerHero } from "@/components/rentpower/hero"
import { RentPowerBrands } from "@/components/rentpower/brands-carousel"
import { RentPowerTrust } from "@/components/rentpower/trust"
import { RentPowerValue } from "@/components/rentpower/value-proposition"
import { RentPowerEcosystem } from "@/components/rentpower/ecosystem"
import { RentPowerSolutions } from "@/components/rentpower/solutions"
import { RentPower360 } from "@/components/rentpower/solution-360"
import { RentPowerFinancial } from "@/components/rentpower/financial"
import { RentPowerProcess } from "@/components/rentpower/process"
import { RentPowerCTA } from "@/components/rentpower/cta-final"
import { RentPowerFooter } from "@/components/rentpower/footer"
import { RentPowerNav } from "@/components/rentpower/nav"

export default function RentPowerPage() {
  return (
    <>
      <RentPowerNav />
      <RentPowerHero />
      <RentPowerBrands />
      <RentPowerTrust />
      <RentPowerValue />
      <RentPowerEcosystem />
      <RentPowerSolutions />
      <RentPower360 />
      <RentPowerFinancial />
      <RentPowerProcess />
      <RentPowerCTA />
      <RentPowerFooter />
    </>
  )
}
