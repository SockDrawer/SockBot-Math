'use strict';
/*globals describe, it, beforeEach, afterEach*/

const chai = require('chai'),
    sinon = require('sinon');
chai.should();
const expect = chai.expect;

const math = require('../Math');

describe('Math', () => {
    describe('exports', () => {
        it('should export prepare()', () => {
            expect(math.prepare).to.be.a('function');
        });
        it('should export start()', () => {
            expect(math.start).to.be.a('function');
        });
        it('should export stop()', () => {
            expect(math.stop).to.be.a('function');
        });
        it('should export doMath()', () => {
            expect(math.doMath).to.be.a('function');
        });
        it('should have start() as a stub function', () => {
            expect(math.start).to.not.throw();
        });
        it('should have stop() as a stub function', () => {
            expect(math.stop).to.not.throw();
        });
    });
    describe('prepare', () => {
        it('should register command listener for `math`', () => {
            const spy = sinon.spy((_, __, ___, callback) => callback());
            math.prepare(undefined, undefined, {onCommand: spy}, undefined);
            spy.calledOnce.should.be.true;
            expect(spy.args[0][0]).to.equal('math');
            expect(spy.args[0][1]).to.equal('math <expression>');
            expect(spy.args[0][2]).to.be.a('function');
            expect(spy.args[0][3]).to.be.a('function');
        });
    });
    describe('doMath', () => {
        let sandbox, mathSpy;
        beforeEach(() => {
            sandbox = sinon.sandbox.create();
            mathSpy = sandbox.spy(math, 'doMath');
        });
        afterEach(() => {
            sandbox.restore();
        });
        it('should evaluate expression', () => {
            const matcher = sinon.match('Expression:').and(sinon.match('Result:'));
            math.doMath({args: ['2+2']});
            mathSpy.returned(matcher).should.be.true;
        });
        it('should report error', () => {
            const matcher = sinon.match('Unable to evaluate expression').and(sinon.match('Reason:'));
            math.doMath({args: ['/']});
            mathSpy.returned(matcher).should.be.true;
        });
    });
});
