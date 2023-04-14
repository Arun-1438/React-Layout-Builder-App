import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = checked => {
    this.setState({showContent: checked})
  }

  onToggleShowLeftNavbar = checked => {
    this.setState({showLeftNavbar: checked})
  }

  onToggleShowRightNavbar = checked => {
    this.setState({showRightNavbar: checked})
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    console.log(this.state)
    return (
      <>
        <ConfigurationContext.Provider
          value={{
            showContent,
            onToggleShowContent: this.onToggleShowContent,
            showLeftNavbar,
            onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
            showRightNavbar,
            onToggleShowRightNavbar: this.onToggleShowRightNavbar,
          }}
        >
          <ConfigurationController />
          <Layout />
        </ConfigurationContext.Provider>
      </>
    )
  }
}

export default App
