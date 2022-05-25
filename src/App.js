import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/sign-in/authentication";
import Checkout from "./routes/checkout/checkout";

import Home from './routes/home/home';
import Shop from "./routes/shop/shop";

const App = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='shop/*' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>

    </Routes>
  );
}
  
export default App;
