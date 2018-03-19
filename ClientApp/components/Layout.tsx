import * as React from 'react';
import { NavBar } from './header/NavBar';

export class Layout extends React.Component<{}, {}> {
    public render() {
        return <div>

			<NavBar />

			<section className="section">
				<div className="container">
					{this.props.children}
				</div>
			</section>
			
        </div>;
    }
}
