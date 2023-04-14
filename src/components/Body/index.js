// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="left-navbar">
              <h3>Left Navbar Menu</h3>
              <ul className="list-container">
                <li className="list-item">Item 1</li>
                <li className="list-item">Item 2</li>
                <li className="list-item">Item 3</li>
                <li className="list-item">Item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content">
              <h3>Content</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sed
                facere perspiciatis esse minima est quidem quibusdam maxime,
                fuga dolorem labore? Rem, labore qui! Dolores fugit dolorum
                blanditiis animi. Illum.
              </p>
            </div>
          )}
          {showRightNavbar && (
            <div className="right-navbar">
              <h3>Right Navbar</h3>
              <div className="add-container">
                <div className="add">
                  <h3>Ad 1</h3>
                </div>
                <div className="add">
                  <h3>Ad 2</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
