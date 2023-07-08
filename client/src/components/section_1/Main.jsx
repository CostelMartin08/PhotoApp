import React from "react";
import Header from "./Header";
import Carusel from "./Carusel";
import Presentation from "./presentation";
import MixPhoto from "./MixPhoto";
import Footer from "./Footer";

const Main = (props) => {



  return (
    <section>

      <Header disconnection={props.disconnection} status={props.status} />
      <main>
        <Carusel />
        <Presentation />
        <MixPhoto loadingData={props.loadingData} sendData={props.sendData} />
      </main>
      <Footer />

    </section>
  )
}


export default Main;