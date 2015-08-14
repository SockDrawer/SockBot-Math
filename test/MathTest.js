'use strict';
/*globals describe, it*/

const chai = require('chai'),
    sinon = require('sinon');
chai.should();
const expect = chai.expect;

const math = require('../Math');
describe('Math', () => {
    it('should export prepare()', () => {
        expect(math.prepare).to.be.a('function');
    });
    it('should export start()', () => {
        expect(math.start).to.be.a('function');
    });
    it('should export stop()', () => {
        expect(math.stop).to.be.a('function');
    });
    it('should export handler()', () => {
        expect(math.handler).to.be.a('function');
    });
    it('should have start() as a stub function', () => {
        expect(math.start).to.not.throw();
    });
    it('should have stop() as a stub function', () => {
        expect(math.stop).to.not.throw();
    });
});
