import cities from '../cities';

export function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  }
}

export function setCity(city) {
  return {
    type: 'SET_CITY',
    payload: city
  }
}
