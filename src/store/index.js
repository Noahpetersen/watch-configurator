import { proxy } from 'valtio'

const state = proxy({
    intro: true,
    wristColor: '',
    dialColor: '',
    pointerColor: '',
});

export default state;