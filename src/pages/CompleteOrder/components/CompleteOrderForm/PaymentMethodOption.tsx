import { PaymentMethodInput } from '../PaymentMethodInput'
import { PaymentMethodOptionContainer } from './styles'

export function PaymentMethodOption() {
  return (
    <PaymentMethodOptionContainer>
      <PaymentMethodInput />
      <PaymentMethodInput />
      <PaymentMethodInput />
    </PaymentMethodOptionContainer>
  )
}
