import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import ScenicSpotPage from "./pages/ScenicSpotPage";

function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>
            <Route path='/scenicSpot'>
              <ScenicSpotPage />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
