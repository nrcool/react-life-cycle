import React, { Component } from 'react'
import User from './User'

export default class SearchResults extends Component {

    state={
        users:[]
    }
    render() {
        console.log(this.props.searchFor)
        return (
            <div>
                <h1>search result</h1>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>E-mail</th>
                    </thead>
                    <tbody>
                        <User />
                    </tbody>
                </table>
            </div>
        )
    }
}
