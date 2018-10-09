import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './testaActions'
import { Button, Icon } from 'semantic-ui-react'
import Script from 'react-load-script'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import GoogleMapReact from 'google-map-react';

const mapState = (state) => ({
  data: state.test.data
})

const actions = {
  incrementCounter,
  decrementCounter
}

const Marker = () => <Icon name='marker' size='big' color='red' />

class TestComponent extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  state = {
    address: '',
    scriptLoaded: false
  }

  handleScriptLoaded = () => {
    this.setState({ scriptLoaded: true })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  onChange = (address) => this.setState({ address })

  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }
    const { incrementCounter, decrementCounter, data } = this.props
    return (
      <div>
        <Script
          url='https://maps.googleapis.com/maps/api/js?key=AIzaSyD-d1bx67u0RNMivGmLAfoxHs3_WqZyyRw&libraries=places'
          onLoad={this.handleScriptLoaded}
        />
        <h1>Test Area</h1>
        <h3>the answer is: {data}</h3>
        <Button onClick={incrementCounter} color='green' content='Increment' />
        <Button onClick={decrementCounter} color='red' content='Decrement' />
        <br />
        <br />
        <form onSubmit={this.handleFormSubmit}>
          {this.state.scriptLoaded &&
            <PlacesAutocomplete inputProps={inputProps} />}
          <button type="submit">Submit</button>
        </form>
        <br />
        <br />
        <div style={{ height: '300px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyD-d1bx67u0RNMivGmLAfoxHs3_WqZyyRw' }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <Marker />
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default connect(mapState, actions)(TestComponent)