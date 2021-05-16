import React, { Component } from 'react'

export default class MovieReviews extends Component {
    constructor(props){
        super(props)
        this.state = {
            movies : []
        }
    }
    componentDidMount(){
        fetch('https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=godfather&api-key=bFAAeMWGU76nQrAeV28yOAy620eBc32m')
        .then(res => res.json())
       
        .then(movies =>{
            var movieslist = movies.results
            console.log(movieslist)
            this.setState({
                movies: movieslist
            })
        })
        .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <h2 style = {{marginLeft : 20}}>Movie Reviews</h2>
                  <hr></hr>
                <div>
                   {this.state.movies.map(movies => 
                    <div>
                        <h4 style = {{marginLeft : 20}}>Title: {movies.display_title}</h4>

                        <p style = {{marginLeft : 20}}><b>Byline:</b> {movies.byline}</p>

                        <p style = {{marginLeft : 20}}><b>Critics Pick:</b> {movies.critics_pick}</p>

                        <p style = {{marginLeft : 20}}><b>Headline:</b>{movies.headline}</p>

                        <hr></hr>

                    </div>)}
                </div>
            
            </div>
        )
    }
}
