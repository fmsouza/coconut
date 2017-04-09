import Crypto, { AES } from 'crypto-js';

const SECRET_KEY = 'bx198n3m12z83nb2t912x78ntz21n239b8x1273vt1289b7x3t1n9z';

export const encrypt = (message) => AES.encrypt(message, SECRET_KEY);

export const decrypt = (message) => AES.decrypt(message, SECRET_KEY).toString(Crypto.enc.Utf8);