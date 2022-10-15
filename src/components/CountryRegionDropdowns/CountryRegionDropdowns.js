import React from "react";
import Dropdown from "../Dropdown/Dropdown";

class CountryRegionDropdowns extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            countries: [],
            regions: [],
            selectedCountryValue: 2,
        }
    }


    componentDidMount() {
        fetch('/data/countries.json')
            .then((resp => resp.json()))
            .then((countries) => {
                this.setState({
                    countries: countries.map((c) => ({
                        value: +c.id,
                        name: c.name
                    }))
                })
            })

        fetch('/data/regions.json')
            .then((resp => resp.json()))
            .then((regions) => {
                this.setState({
                    regions: regions.map((r) => ({
                        value: +r.id,
                        countryId: +r.countryID,
                        name: r.name
                    }))
                })
            })
    }

    setSelectedCountry = (e) => {
        this.setState({selectedCountryValue: +e.target.value})
    }

    render() {
        const {countries, regions, selectedCountryValue} = this.state;

        return (
            <>
                <Dropdown
                    label={'Countries'}
                    options={countries}
                    value={selectedCountryValue}
                    onChange={this.setSelectedCountry}
                />
                <hr/>
                <Dropdown
                    label={'Regions'}
                    options={regions.filter((r) => r.countryId === selectedCountryValue)}
                />
            </>
        )
    }
}

export default CountryRegionDropdowns;