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
    <nav className="bg-primary text-primary-foreground px-6 py-3 shadow-md">
      <ul className="container mx-auto flex justify-center space-x-8">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href}>
              <span className="font-medium hover:text-gold hover:underline cursor-pointer transition-colors duration-200">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
