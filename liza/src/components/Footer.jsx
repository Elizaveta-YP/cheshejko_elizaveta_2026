const Footer = ({ onNavClick }) => {
    const footerNavItems = [
        { label: 'Главная', href: '#', section: null },
        { label: 'Обо мне', href: '#', section: 'about' },
        { label: 'Ключевые навыки', href: '#', section: 'skills' },
        { label: 'Проекты', href: '#', section: 'project' },  // ← ДОБАВЛЕНА ЗАПЯТАЯ
        { label: 'Контакты', href: '#', section: 'contact' }  // ← ДОБАВЛЕНА {
    ];

    const handleNavClick = (e, section) => {
        if (section) {
            e.preventDefault();
            if (onNavClick) {
                onNavClick(section);
            }
            
            // Попробуйте разные селекторы:
            const element = document.querySelector(`.accordionSection[data-section="${section}"]`);
            if (!element) {
                // Альтернативный поиск
                const altElement = document.querySelector(`[data-section="${section}"]`);
                if (altElement) {
                    altElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <footer className="footers">
            <div className="container">
                <nav className="nav">
                    <ul className="navList">
                        {footerNavItems.map((item, index) => (
                            <li key={index} className="navItems">
                                <a 
                                    href={item.href} 
                                    className="navLink"
                                    onClick={(e) => handleNavClick(e, item.section)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;