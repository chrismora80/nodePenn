import React from 'react';

export default class SearchBar extends React.Component {
    render() {
        return (

            <div>
                <form onSubmit={this.props.handleSumit}>

                    <input
                        name="search"
                        value={this.props.search}
                        onChange={this.props.handleInputChange}>

                    </input>

                    <button>
                        Search
                    </button>

                </form>

            </div>
        )
    };
}