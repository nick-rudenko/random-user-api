import React, { Component } from 'react';

export default class SearchBar extends Component {
	render() {
		const { handleSearch, handleModal } = this.props;
		return (
			<>
				<div className="header-wrapper">
					<header className="container pb-5">
						<div className="row col-12 mx-auto pt-5 text-center">
							<form className="col-5 float-left">
								<div className="input-group">
									<div className="input-group-prepend">
										<div className="input-group-text bg-white">
											<i className="fa fa-search" />
										</div>
									</div>
									<input
										className="form-control border-left-0"
										type="text"
										name="search"
										aria-label="Search"
										placeholder="Search for users..."
										onChange={handleSearch}
									/>
								</div>
							</form>
							<button className="btn btn--chart ml-auto" onClick={handleModal}>
								Show chart <i className="fas fa-chart-pie" />
							</button>
						</div>
					</header>
				</div>
			</>
		);
	}
}
