// Support for Other Versions of JS
import "babel-polyfill"

import React, {Component} from "react"
import ReactDOM from "react-dom"

// Styles

// Components

class App extends Component {
      render() {
            return <div>
                  This is React-app-bootstrap template
                  </div>
      }
}

let mountNode = document.getElementById("main")
ReactDOM.render(<App/>, mountNode)
