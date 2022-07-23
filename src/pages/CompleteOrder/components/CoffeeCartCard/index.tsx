import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typhography'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1659312000&Signature=GZNyswVx2Ljtg4kDhG2r0h~sm3JPOjePMDqahi4w4cV1WJoh1dwzfZioVruU3CHpFHqmG0-gRz-vTqEjsTZwKG~Nlr13oC7OaXmwcZi3L9JE5NqrqgafB4thrK8NIL1Kpaotd5iOyIJkpPtztQtgIFo1lcgNy8btVblnwGG3DQUxCaVpXavdcX4jmuLdNfU3dePp2nx-ZIqG~clSx0JgIkK0u48b9hvCl9T-0GizUaMerEAS4VUh5rMAoYvXIsR620mV-uIJtLunfEf51FXrqEqALK5eOEI9-DcRoU56bBTYuUYaqpGF1f6a7nNvNV1ln9dkCPCIgoVlCa261oHLQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />
        <div>
          <RegularText color="subtitle">Expresso tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}
