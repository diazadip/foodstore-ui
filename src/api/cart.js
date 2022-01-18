import axios from 'axios';
import store from '../app/store';
import { setItems } from '../features/Cart/actions';

export async function saveCart(token, cart) {
    return await axios.put(`${process.env.REACT_APP_API_HOST}/api/carts`, { items: cart },
        {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
}

export async function getCart() {
    let { token } = localStorage.getItem('auth')
        ? JSON.parse(localStorage.getItem('auth')) :
        {};

    if (!token) return;
    let { data } = await axios
        .get(`${process.env.REACT_APP_API_HOST}/api/carts`, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
    if (!data.error) {
        store.dispatch(setItems(data));
    }
}