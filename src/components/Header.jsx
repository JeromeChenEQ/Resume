const Header = ({ collapsed }) => (
  <header className={`resume-header${collapsed ? ' header-collapsed' : ''}`}>
    <h1>Hello Weary Traveller</h1>
  </header>
)

export default Header
