import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.style.scss'

class Directory extends React.Component {
	constructor() {
		super();
		this.state = {
			sections: [
				{
					title: 'accessories',
					imageUrl:'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
					id: 1,
					linkUrl: 'accessories'
				},
					{
					title: 'sneakers',
					imageUrl: 'https://images.unsplash.com/photo-1555195798-e42b6048838e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=987&q=80', 
					id: 2,
					linkUrl: ''
				},
					{
					title: 'jackets',
					imageUrl: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
					id: 3,
					linkUrl: ''
				},
					{
					title: 'womens',
					imageUrl: 'https://images.unsplash.com/photo-1568306415419-3265104f6a41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
					id: 4,
					size: 'large',
					linkUrl: ''
				},
					{
					title: 'mens',
					imageUrl: 'https://images.unsplash.com/photo-1551649478-7513a363db79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
					id: 5,
					size: 'large',
					linkUrl: ''
				}
			]
		}
	}

	render() {
		return (
			<div className="directory-menu">
			  {
			  	this.state.sections.map(({id, ...otherSectionProps} )=> (
			  		<MenuItem key={id} {...otherSectionProps} />
			  		))
			  }
			</div>
		)
	}
}

export default Directory;