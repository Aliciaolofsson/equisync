import NavLinks from './NavLinks';

interface NavLinkProps {
  link: string;
  label: string;
}

interface MenuOverlayProps {
  links: NavLinkProps[];
  toggleNavbar: (isOpen: boolean) => void;
}

export default function MenuOverlay({ links, toggleNavbar }: MenuOverlayProps) {
  return (
    <ul className='items-center flex justify-center flex-col  md:hidden '>
      {links.map((item, index) => (
        <li
          className='my-4 text-md md:text-xl py-2 rounded-lg'
          onClick={() => {
            toggleNavbar(false);
          }}
          key={index}
        >
          <NavLinks href={item.link} title={item.label} />
        </li>
      ))}
    </ul>
  );
}
