'use strict'
let expect = require('chai').expect
const uid = require('uid')
const uid1 = uid()
const uid2 = uid()

describe('MenuItemModel', function() {
  let testID = null
  describe('#create()', function() {
    it('should check create function', function(done) {
      // Create a new resource
      MenuItem.create({
          'text': uid1,
          'icon': uid1,
          'link': uid1
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
      MenuItem.findOne({
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
      MenuItem.update({
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
      MenuItem.destroy({
          'id': testID
        })
        .then(function() {
          MenuItem.findOne({
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
