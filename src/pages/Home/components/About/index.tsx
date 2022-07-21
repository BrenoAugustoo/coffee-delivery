import {
  AboutContainer,
  AboutContent,
  AboutTitle,
  BenefitsContainer,
} from './styles'
import coffeImageImg from '../../../../assets/coffee-delivery-img.png'
import { RegularText } from '../../../../components/Typhography'
import { InfoWithIcon } from '../../../../components/InfoWithIcon'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function About() {
  const { colors } = useTheme()

  return (
    <AboutContainer>
      <AboutContent className="container">
        <div>
          <section>
            <AboutTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </AboutTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            <InfoWithIcon
              icon={<ShoppingCart weight="fill" />}
              iconBg={colors['brand-yellow-dark']}
              text="Compra simples e segura"
            />
            <InfoWithIcon
              icon={<Package weight="fill" />}
              iconBg={colors['base-text']}
              text="Embalagem mantém o café intacto"
            />
            <InfoWithIcon
              icon={<Timer weight="fill" />}
              iconBg={colors['brand-yellow']}
              text="Entrega rápida e rastreada"
            />
            <InfoWithIcon
              icon={<Coffee weight="fill" />}
              iconBg={colors['brand-purple']}
              text="O café chega fresquinho até você"
            />
          </BenefitsContainer>
        </div>
        <img src={coffeImageImg} alt="Copo de café" />
      </AboutContent>
    </AboutContainer>
  )
}
