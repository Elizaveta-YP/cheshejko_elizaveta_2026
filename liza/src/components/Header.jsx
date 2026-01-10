// import { motion } from 'framer-motion';
// const Header = () => {

//     const navItems = [
//         { label: 'Главная', href: '#hero' },
//         { label: 'Обо мне', href: '#about' },
//         { label: 'Ключевые навыки', href: '#skills'},
//         { label: 'Проекты', href: '#project'},
//         { label: 'Контакты', href: '#contact'}
//     ];

//     return (
//     <section className="header">
//         <header className="headers">
//       <div className="container">
//         {/* <h1 className="logo">Чешейко Елизавета Олеговна</h1> */}
//          <motion.h1 
//                         className="logo"
//                         initial={{ opacity: 0, y: -50 }}  // Начальное состояние: невидим, слева
//                         animate={{ opacity: 1, y: 0 }}     // Конечное состояние: видим, на месте
//                         transition={{ 
//                             duration: 3,                // Длительность анимации
//                             ease: "easeOut",              // Плавное замедление
//                             delay: 0.5                    // Задержка перед началом
//                         }}
//                         whileHover={{ scale: 1.05 }}      // Эффект при наведении
//                     >
//                         Чешейко Елизавета Олеговна
//                     </motion.h1>
//         <nav className="nav">
//           <ul className="navList">
//             {navItems.map((item, index) => (
//               <li key={index} className="navItems">
//                 <a href={item.href} className="navLink">
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//     </section>
//     )
// }


// export default Header;



import { motion } from 'framer-motion';

const Header = ({ onNavClick }) => {

    const navItems = [
        { label: 'Главная', href: '#hero', section: null },
        { label: 'Обо мне', href: '#', section: 'about' },
        { label: 'Ключевые навыки', href: '#', section: 'skills' },
        { label: 'Проекты', href: '#', section: 'project' },
        { label: 'Контакты', href: '#', section: 'contact' }
    ];

    const handleNavClick = (e, section) => {
        if (section) {
            e.preventDefault();
            onNavClick(section);
            
            // Плавная прокрутка к секции
            const element = document.querySelector(`.accordion-section[data-section="${section}"]`);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
            <header className="headers">
                <div className="container">
                    <motion.h1 
                        className="logo"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Чешейко Елизавета Олеговна
                    </motion.h1>
                    <nav className="nav">
                        <ul className="navList">
                            {navItems.map((item, index) => (
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
            </header>
    );
}

export default Header;