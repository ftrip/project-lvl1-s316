#!/usr/bin/env node
import helloUser from '..';
import evengame from '../games/evengame';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const name = helloUser();
evengame(name);
