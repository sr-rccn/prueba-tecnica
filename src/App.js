import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';

import { ViajesScreen } from "./pages/ViajesScreen";
import { TransportesScreen } from "./pages/TransportesScreen";
import { FormScreen } from "./pages/FormScreen";

import { Tabs, Tab, Paper } from '@material-ui/core/';

//Página de inicio de Predeterminada de createReactApp
//La usaremos para definir y redirigir nuestras rutas

function mapStateToProps(state) {
  return {
    //menu
    prueba: state.prueba,
    transportes: state.prueba.prueba,
    viajes: state.prueba.viajes
  }
}

// function App() {

const App = (props) => {
  const { dispatch } = props;

  const [tab, setTab] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  }

  const returnContenido = () => {
    switch (selectedTab) {
      case 0:
        return <ViajesScreen />
      case 1:
        return <TransportesScreen />
      case 2:
        return <FormScreen />
      default:
        return <ViajesScreen />
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.makin-metals.com%2Fabout%2Fuses-of-copper-in-cars%2Fimg%2Fimage5.gif&f=1&nofb=1' className="c02-logo" alt="logo" />
        <Paper>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered>

            <Tab label="Viajes" />
            <Tab label="Transportes" />
            <Tab label="Registra" />

          </Tabs>
        </Paper>

        {returnContenido()}

      </header>



    </div>
  );
}

// export default App;
export default connect(mapStateToProps)(App);


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab_app: {
    alignSelf: 'center',
    width: '800px',
    height: '450px',
    backgroundColor: 'white',
    alignContent: 'center'
  },
});