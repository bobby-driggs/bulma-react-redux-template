import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavBar extends React.Component<{}, {}> {
	public render() {
		return <nav className="navbar" role="navigation" aria-label="main navigation">
			<div className="container">
				<div className="navbar-brand">
					<Link className="navbar-item" to="/">
						MARICARRY
					</Link>
					<div className="navbar-burger">
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>

				<div className="navbar-menu">
					<div className="navbar-start">
						<NavLink exact to={'/'} className="navbar-item" activeClassName='is-active' >
							<i className="fas fa-home"></i> Home
                    </NavLink>
						<NavLink exact to={'/counter'} className="navbar-item" activeClassName='is-active' >
							Counter
                    </NavLink>
					</div>

					<div className="navbar-end">
					</div>
				</div>
			</div>
		</nav>;

	}
}
