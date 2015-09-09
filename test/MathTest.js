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
            expect(math.privateFns.doMath).to.be.a('function');
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
            const onCommandSpy = sinon.spy((_, __, ___, callback) => callback());
            math.prepare(undefined, undefined, {onCommand: onCommandSpy}, undefined);
            onCommandSpy.calledOnce.should.be.true;
            expect(onCommandSpy.args[0][0]).to.equal('math');
            expect(onCommandSpy.args[0][1]).to.equal('Evaluate mathematical expressions');
            expect(onCommandSpy.args[0][2]).to.equal(math.privateFns.doMath);
            expect(onCommandSpy.args[0][3]).to.be.a('function');
        });
    });
    describe('doMath', () => {
        const onCommandSpy = sinon.spy((_, __, ___, callback) => callback());
        const createPostSpy = sinon.spy((_, __, ___, callback) => callback());
        beforeEach(() => {
            math.prepare(undefined, undefined, {onCommand: onCommandSpy}, {createPost: createPostSpy});
        });
        afterEach(() => {
            onCommandSpy.reset();
            createPostSpy.reset();
        });
        it('should evaluate expression', () => {
            math.privateFns.doMath({
                args: ['2+2'],
                post: {
                    'topic_id': 1,
                    'post_number': 2
                }
            });
            createPostSpy.calledOnce.should.be.true;
            expect(createPostSpy.args[0][0]).to.equal(1);
            expect(createPostSpy.args[0][1]).to.equal(2);
            expect(createPostSpy.args[0][2]).to.contain('Expression:').and.to.contain('Result:');
            expect(createPostSpy.args[0][3]).to.be.a('function');
        });
        it('should report error', () => {
            math.privateFns.doMath({
                args: ['/'],
                post: {
                    'topic_id': 1,
                    'post_number': 2
                }
            });
            createPostSpy.calledOnce.should.be.true;
            expect(createPostSpy.args[0][0]).to.equal(1);
            expect(createPostSpy.args[0][1]).to.equal(2);
            expect(createPostSpy.args[0][2]).to.contain('Unable to evaluate expression').and.to.contain('Reason:');
            expect(createPostSpy.args[0][3]).to.be.a('function');
        });
    });
});
