// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeToggleContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const onChangeToggleLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onChangeToggleRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="controller-container">
          <h1 className="title">Layout Builder App</h1>
          <div className="input-div">
            <input
              onChange={onChangeToggleContent}
              checked={showContent}
              className="checkbox"
              type="checkbox"
              id="content"
            />
            <label className="label" htmlFor="content">
              Content
            </label>
          </div>
          <div className="input-div">
            <input
              onChange={onChangeToggleLeftNavbar}
              checked={showLeftNavbar}
              className="checkbox"
              type="checkbox"
              id="leftNavbar"
            />
            <label className="label" htmlFor="leftNavbar">
              Left Navbar
            </label>
          </div>
          <div className="input-div">
            <input
              onChange={onChangeToggleRightNavbar}
              checked={showRightNavbar}
              className="checkbox"
              type="checkbox"
              id="rightNavbar"
            />
            <label className="label" htmlFor="rightNavbar">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
