import React from 'react';

export default class PageHeader extends React.Component {
    render() {
        return (
            <div className= "jumbotron">
                <div className= "container">
                    <h1 className="text-center text-white">Employee Directory</h1>
                    <p className="lead text-center text-white">Search by Name</p>
                </div>

            </div>
        )
    }
}

