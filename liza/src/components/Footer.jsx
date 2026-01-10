const Footer = () => {

 const footerNavItems = [
        { label: 'Главная', href: '#hero' },
        { label: 'Обо мне', href: '#about' },
        { label: 'Ключевые навыки', href: '#skills'},
        { label: 'Проекты', href: '#project'},
        { label: 'Контакты', href: '#contact'}
    ];

return (
        <footer className="footers">
      <div className="container">
        <nav className="nav">
          <ul className="navList">
            {footerNavItems.map((item, index) => (
              <li key={index} className="navItems">
                <a href={item.href} className="navLink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
    )
}

export default Footer;