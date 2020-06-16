import React from 'react';
import "./../css/details.css";
import './../css/variables.css';
import { Link } from 'react-router-dom'

class Details extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            darkTheme: props.location.state.darkTheme || false,
            selectedCountry: props.location.state.selectedCountry,
            countries: props.location.state.countries
        }
        this.changeTheme = this.changeTheme.bind(this)
    }

    changeTheme() {
        this.setState({ darkTheme: !this.state.darkTheme })
    }

    render() {
        let country = this.state.selectedCountry
        let countries = this.state.countries
        return (
            <div className="container" darktheme={this.state.darkTheme.toString()}>

                <div className="top-bar">
                    <span className="logo">Where in the world?</span>
                    <label htmlFor="theme-toggle-checkbox" className="theme-changer-container">
                        <input name="theme-toggler" type="checkbox" name="theme-toggler" id="theme-toggle-checkbox" style={{ display: 'none' }} onInput={this.changeTheme} />
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

                <Link to={{
                    pathname: '/',
                    state: {
                        darkTheme: this.state.darkTheme
                    }
                }} className="go-back">
                    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" className="icon">
                        <polyline points="244 400 100 256 244 112" />
                        <line x1="120" y1="256" x2="412" y2="256" />
                    </svg>
                    Back
                </Link>

                <div className="data-container">
                    <img src={country.flag} style={{ width: '100%', maxWidth: '36vw', alignSelf: 'center', justifySelf: 'center' }} alt="country flag" />
                    <div className="text-container">
                        <div className="country-name">{country.name}</div>
                        <div className="first-container">
                            <div>
                                <span className="content-title">Native Name: </span>
                                <span className="country-content">{country.nativeName}</span>
                            </div>
                            <div>
                                <span className="content-title">Population: </span>
                                <span className="country-content">{country.population.toLocaleString()}</span>
                            </div>
                            <div>
                                <span className="content-title">Region: </span>
                                <span className="country-content">{country.region}</span>
                            </div>
                            <div>
                                <span className="content-title">Sub Region: </span>
                                <span className="country-content">{country.subregion}</span>
                            </div>
                            <div>
                                <span className="content-title">Capital: </span>
                                <span className="country-content">{country.capital}</span>
                            </div>
                        </div>
                        <div className="second-container">
                            <div>
                                <span className="content-title">Top Level Domain: </span>
                                {
                                    country.topLevelDomain.map(domainName => {
                                        return <span className="country-content" key={domainName}>{domainName}</span>
                                    })
                                }
                            </div>
                            <div>
                                <span className="content-title">Currencies: </span>
                                {
                                    country.currencies.map(currency => currency.name).join(', ')
                                }
                            </div>
                            <div>
                                <span className="content-title">Languages: </span>
                                {
                                    country.languages.map(language => language.name).join(', ')
                                }
                            </div>
                        </div>

                        <div className="border-countries-container">
                            <div className="sub-title">
                                Border Countries:
                            </div>
                            {
                                country.borders.map(borderCountryCode => {
                                    let borderCountry = countries.find((value) => value.alpha3Code === borderCountryCode)

                                    return (
                                        <div key={borderCountryCode} className="border-country">
                                            <span>{borderCountry.name}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Details