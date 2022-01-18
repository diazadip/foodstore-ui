import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'upkit/dist/style.min.css';
import store from './app/store';
import Home from './pages/Home';
// (1) import fungsi listen
import { listen } from './app/listener';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';
import { getCart } from './api/cart';

function App() {
    // (2) panggil fungsi listen() sekali saja saat komponen selesai render pertama kali
    React.useEffect(() => {
        listen();
        getCart();
    }, [])
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/login"><Login /></Route>
                    <Route path="/register/berhasil"><RegisterSuccess /></Route>
                    <Route path="/register" component={Register} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;