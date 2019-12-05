import * as React from "react";
import Cart from "./containers/Cart";
import Catalog from "./containers/Catalog";

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Cart/>
        <Catalog/>
      </div>
    );
  }
}
