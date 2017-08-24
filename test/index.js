import counter from '../src/reducers/';
import {expect} from 'chai';

describe('reducers', () => {
  describe('counter', () => {
    it('should provide the initial state', function(){
      expect(counter(undefined, {})).to.be.equal(0)
    })
    it('should handle INCREMENT action', function(){
      expect(counter(1, { type: 'INCREMENT' })).to.be.equal(2)
    })
	it('should handle DECREMENT action', () => {
      expect(counter(1, { type: 'DECREMENT' })).to.be.equal(0)
    })

    it('should ignore unknown actions', () => {
      expect(counter(1, { type: 'unknown' })).to.be.equal(1)
    })
  })
})
