import {
  LocationButton,
  HeaderButtonsContainer,
  HeaderContainer,
  CartButton,
} from './styles'
import coffeeLogoImg from '../../assets/coffee-delivery-logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={coffeeLogoImg} alt="" />
        </NavLink>

        <HeaderButtonsContainer>
          <LocationButton>
            <MapPin size={20} weight="fill" />
            Manaus, AM
          </LocationButton>

          <NavLink to="/complete-order">
            <CartButton>
              <ShoppingCart size={20} weight="fill" />
            </CartButton>
          </NavLink>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
