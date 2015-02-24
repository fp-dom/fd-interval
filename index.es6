import { curry2 } from 'fj-curry';


let interval = (duration, func) => window.setInterval(func, duration);

export default curry2(interval);
