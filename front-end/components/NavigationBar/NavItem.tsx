import Link from 'next/link'

interface NavItemProps {
  text: string;
  link: string;  
}

const NavItem: React.FC<NavItemProps> = ({ link, text }) => {

  return (
    
      <button id="dropdownNavbarLink" className="flex items-center justify-between w-full text-white hover:text-blue-500"
      >
        {text}
      </button>
    
  )
}

export default NavItem;