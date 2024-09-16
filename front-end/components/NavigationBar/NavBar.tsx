import React from 'react';
import NavItem from './NavItem';

const NavBar: React.FC = () => {
	return (
		<>
			<nav className='bg-gray-900 border-gray-700'>
				<div className='max-w-screen flex flex-wrap items-center justify-start mx-auto p-4'>
					<ul className='flex flex-row font-medium space-x-8'>
						<NavItem
							link='/home'
							text='Home'
						/>
						<NavItem
							link='/schedule'
							text='Schedule'
						/>
						<NavItem
							link='/players'
							text='Players'
						/>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default NavBar;
