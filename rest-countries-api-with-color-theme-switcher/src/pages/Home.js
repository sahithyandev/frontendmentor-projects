import React from 'react'
import "./../css/index.css";
import './../css/variables.css';
import { CountryCard } from '../components';
import { Link } from 'react-router-dom';
class Home extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
        this.state = {
            darkTheme: props.location.state ? props.location.state.darkTheme : false,
            countries: [],
            searchTerm: '',
            region: ''
        }
        this.changeTheme = this.changeTheme.bind(this)
    }

    changeTheme() {
        this.setState({ darkTheme: !this.state.darkTheme })
    }

    async getData() {
        let response = await fetch('https://restcountries.eu/rest/v2/all')
        let json = await response.json()

        this.setState({ countries: json })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        let countries = this.state.countries.filter((country) => {
            return country.name.toLocaleUpperCase().includes(this.state.searchTerm.toLocaleUpperCase()) && (this.state.region === '' || country.region === this.state.region)
        })
        return (
            <div className="container" darktheme={this.state.darkTheme.toString()}>
                <div className="top-bar">
                    <span className="logo">Where in the world?</span>
                    <label htmlFor="theme-toggle-checkbox" className="theme-changer-container">
                        <input name="theme-toggler" type="checkbox" id="theme-toggle-checkbox" style={{ display: 'none' }} onInput={this.changeTheme} />
                        <span className="theme-changer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" className="icon">
                                <path
                                    d="M160,136c0-30.62,4.51-61.61,16-88C99.57,81.27,48,159.32,48,248c0,119.29,96.71,216,216,216,88.68,0,166.73-51.57,200-128-26.39,11.49-57.38,16-88,16C256.71,352,160,255.29,160,136Z"
                                    style={{ fill: this.state.darkTheme ? 'white' : 'none' }}
                                />
                            </svg>
                            <span className="dark-mode-text">
                                Dark Mode
                            </span>
                        </span>
                    </label>

                </div>
                <div className="search-container">
                    <div className="search-bar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" className="icon">
                            <path
                                d="M456.69,421.39,362.6,327.3a173.81,173.81,0,0,0,34.84-104.58C397.44,126.38,319.06,48,222.72,48S48,126.38,48,222.72s78.38,174.72,174.72,174.72A173.81,173.81,0,0,0,327.3,362.6l94.09,94.09a25,25,0,0,0,35.3-35.3ZM97.92,222.72a124.8,124.8,0,1,1,124.8,124.8A124.95,124.95,0,0,1,97.92,222.72Z"
                                style={{ stroke: this.state.darkTheme ? 'black' : 'white', fill: !this.state.darkTheme ? 'black' : 'white' }}
                            />
                        </svg>
                        <input name="search" type="text" id="search-input" className="search-input" onInput={event => { event.persist(); this.setState({ searchTerm: event.target.value }) }} />
                    </div>

                    <select className="filter" onInput={event => { event.persist(); this.setState({ region: event.target.value }) }}>
                        <option value="">Filter By Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
                <div className="countries">
                    {countries.map(country => {
                        return (
                            <Link to={{
                                pathname: '/details',
                                state: {
                                    countries: this.state.countries,
                                    selectedCountry: country,
                                    darkTheme: this.state.darkTheme
                                }
                            }} style={{ textDecoration: 'none' }} key={country.name}>
                                <CountryCard data={country} darktheme={this.state.darkTheme.toString()} />
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Home