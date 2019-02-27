import React, { Component } from 'react';

export default class SearchBar extends Component {
	render() {
		return (
			<>
				<div className="header_wrapper">
					<div className="container pb-5">
						<div className="row col-12 mx-auto pt-5 text-center">
							<form className="col-5 float-left">
								<div className="input-group">
									<input
										className="form-control"
										type="text"
										name="search"
										aria-label="Search"
										placeholder="Search for users"
									/>
								</div>
							</form>
							<button className="btn btn-info ml-auto">Show chart</button>
						</div>
					</div>
				</div>
			</>
		);
	}
}
