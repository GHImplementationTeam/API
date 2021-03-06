'use strict'
let expect = require('chai').expect
const uid = require('uid')
const uid1 = uid()
const uid2 = uid()

describe('MessageModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      Message.create({
          'text': uid1,
          'fromUser':1,
          'toUser':1
        })
        .then(function(results) {
          // run some tests
          expect(results.text).to.equal(uid1)
          // save the id of the new record
          testID = results.id
          done()
        })
        .catch(done)
    })
  })

  describe('#findOne()', function() {
    it('should check find one function', function(done) {
      Message.findOne({
          'id': testID
        })
        .then(function(results) {
          // run some tests
          expect(results.text).to.equal(uid1)
          done()
        })
        .catch(done)
    })
  })

  describe('#update()', function() {
    it('should check update function', function(done) {
      Message.update({
          'id': testID
        }, {
          'text': uid2
        })
        .then(function(results) {
          // run some tests
          expect(results[0].text).to.equal(uid2)
          done()
        })
        .catch(done)
    })
  })

  describe('#destroy()', function() {
    it('should check destroy function', function(done) {
      Message.destroy({
          'id': testID
        })
        .then(function() {
          Message.findOne({
              'id': testID
            })
            .then(function(results) {
              expect(results).to.be.undefined
              done()
            })
        })
        .catch(done)
    })
  })
})
