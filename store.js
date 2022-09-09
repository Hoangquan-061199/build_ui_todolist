import { createStore } from './core.js';
import reduce from './reduce.js';
import widthLogger from './logger.js';

const { attach, connect, dispatch } = createStore(widthLogger(reduce));

window.dispatch = dispatch;

export { attach, connect };
