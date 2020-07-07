import Cookies from 'js-cookie';

export default class Security{
    isAuthenticated() {
        return !!Cookies.get('Authorization');
    }

    unauthenticate() {
        Cookies.remove('Authorization');
    }
}