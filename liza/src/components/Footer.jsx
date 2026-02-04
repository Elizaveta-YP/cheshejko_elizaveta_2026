const Footer = ({ onNavClick }) => {
    const footerNavItems = [
        { label: 'Главная', href: '#', section: null },
        { label: 'Обо мне', href: '#', section: 'about' },
        { label: 'Ключевые навыки', href: '#', section: 'skills' },
        { label: 'Проекты', href: '#', section: 'project' }, 
        { label: 'Контакты', href: '#', section: 'contact' }  
    ];

    const handleNavClick = (e, section) => {
        if (section) {
            e.preventDefault();
            if (onNavClick) {
                onNavClick(section);
            }
            
            const element = document.querySelector(`.accordionSection[data-section="${section}"]`);
            if (!element) {
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