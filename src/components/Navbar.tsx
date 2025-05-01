import Link from 'next/link';

export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Projects', href: '/projects' },
    { name: 'Interests', href: '/interests' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-primary text-primary-foreground px-6 py-3 shadow-md overflow-hidden md:overflow-visible">
      <ul className="container mx-auto flex justify-start md:justify-center space-x-8 overflow-x-auto md:overflow-visible whitespace-nowrap py-1 md:py-0">
        {navItems.map((item) => (
          <li key={item.name} className="flex-shrink-0 md:flex-shrink">
            <Link href={item.href}>
              <span className="font-medium hover:text-gold hover:underline cursor-pointer transition-colors duration-200">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
