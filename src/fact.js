import fetch from 'isomorphic-fetch'

export default function getData(){
    return fetch('https://ssr-react.firebaseio.com/facts.json')
    .then(res => res.json());
}