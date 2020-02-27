import React, {Component} from 'react';
import './main.scss';
import Article from '../article/Article';
import postai from '../../data/postai';
import Places from '../places/Places';


/*function Main() {
    return (
    <main>
        <div className='main_container'>
        <h2>React main</h2>
        </div>
        <Article
       data = {{title:"naujiena1" , text:"gera"}}
        />
        <Article
        data = {{title:"naujiena2" , text:"gera"}}

        />
        <Article
       data = {{title:"naujiena3" , text:"gera"}}
        />

    </main>
    );

}
*/

class Main extends Component{
    constructor() {
        super()
        this.state = {
            places: []

        }
    }

    componentDidMount() {
        fetch("https://api.meteo.lt/v1/places")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    places: data
                })
            })
        console.log(this.state.places.data)
        //gaunami duomenys iš API

    }

    render(){
        const postData = postai.map(post => <Article key={post.id}
        title={post.pavadinimas} text={post.tekstas}/>)
        const postPlaces = this.state.places.map(places=> <Places places={places.name}/>)
        return(
            <main>
                {postData}
                {postPlaces}
            </main>
        );
    }
}







export default Main;