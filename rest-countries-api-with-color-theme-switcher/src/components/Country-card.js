import React from 'react'
import './../css/country-card.css'
import './../css/variables.css'

class CountryCard extends React.Component {
    formatNumber(n = 0) {
        return n.toLocaleString()
    }

    render() {
        const country = this.props.data
        return (
            <div className="country-card-container" darktheme={this.props.darktheme}>
                <img src={country.flag} style={{ width: '100%' }} alt="country flag" />
                <div className="content">
                    <div className="name">{country.name}</div>
                    <div>
                        <span className="content-type">Population: </span>
                        <span className="population">{this.formatNumber(country.population)}</span>
                    </div>
                    <div>
                        <span className="content-type">Region: </span>
                        <span className="region">{country.region}</span>
                    </div>
                    <div>
                        <span className="content-type">Capital: </span>
                        <span className="capital">{country.capital}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountryCard