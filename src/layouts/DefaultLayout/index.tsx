import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <h2>header</h2>
      <Outlet />
    </LayoutContainer>
  )
}
