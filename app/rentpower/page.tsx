import { RentPowerHero } from "@/components/rentpower/hero"
import { RentPowerTrust } from "@/components/rentpower/trust"
import { RentPowerProblem } from "@/components/rentpower/problem"
import { RentPowerValue } from "@/components/rentpower/value-proposition"
import { RentPowerEcosystem } from "@/components/rentpower/ecosystem"
import { RentPowerSolutions } from "@/components/rentpower/solutions"
import { RentPower360 } from "@/components/rentpower/solution-360"
import { RentPowerFinancial } from "@/components/rentpower/financial"
import { RentPowerProcess } from "@/components/rentpower/process"
import { RentPowerProof } from "@/components/rentpower/social-proof"
import { RentPowerCTA } from "@/components/rentpower/cta-final"
import { RentPowerFooter } from "@/components/rentpower/footer"
import { RentPowerNav } from "@/components/rentpower/nav"

export default function RentPowerPage() {
  return (
    <>
      <RentPowerNav />
      <RentPowerHero />
      <RentPowerTrust />
      <RentPowerProblem />
      <RentPowerValue />
      <RentPowerEcosystem />
      <RentPowerSolutions />
      <RentPower360 />
      <RentPowerFinancial />
      <RentPowerProcess />
      <RentPowerProof />
      <RentPowerCTA />
      <RentPowerFooter />
    </>
  )
}
