import Link from 'next/link';

interface NavItemProps {
	text: string;
	link: string;
}

const NavItem: React.FC<NavItemProps> = ({ link, text }) => {
	return (
		<li>
			<Link
				href={link}
				className='flex items-center justify-between w-full text-white hover:text-blue-500'
			>
				{text}
			</Link>
		</li>
	);
};

export default NavItem;
