import {
  LocationButton,
  HeaderButtonsContainer,
  HeaderContainer,
  CartButton,
} from './styles'
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={coffeeLogoImg} alt="" />

        <HeaderButtonsContainer>
          <LocationButton>
            <MapPin size={20} weight="fill" />
            Manaus, AM
          </LocationButton>

          <CartButton>
            <ShoppingCart size={20} weight="fill" />
          </CartButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
