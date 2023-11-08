import './index.css';
import './index.less';

const node = document.createElement('div');

node.textContent = 'Hello world';

document.body.appendChild(node);

const debounce = (fn, duration) => {
  let timer = null
  return (...args) => {
    clearTimeout(timer)
    setTimeout(() => {
      fn(...args)
    }, duration)
  }
}

