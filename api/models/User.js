module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: {
    roles: {
      collection: 'Role',
      via: 'users',
      dominant: true
    },
    permissions: {
      collection: 'Permission',
      via: 'user'
    },
    nickname: {
      type: 'string'
    },
    password: {
      type: 'string'
    },
    emailVerified: {
      type: 'boolean'
    },
    firstName: {
      type: 'string'
    },
    lastName: {
      type: 'string'
    },
    email: {
      type: 'string'
    },
    employee: {
      model: 'employee'
    },
    consumer: {
      model: 'consumer'
    }
  },

  /**
   * Attach default Role to a new User
   */
  afterCreate: [
    function setOwner(user, next) {
      sails.log.verbose('User.afterCreate.setOwner', user);
      User
        .update({id: user.id}, {owner: user.id})
        .then(function () {
          next();
        })
        .catch(function (e) {
          sails.log.error(e);
          next(e);
        });
    },
    function attachDefaultRole(user, next) {
      sails.log('User.afterCreate.attachDefaultRole', user);
      User.findOne(user.id)
        .populate('roles')
        .then(function (_user) {
          user = _user;
          return Role.findOne({name: 'registered'});
        })
        .then(function (role) {
          user.roles.add(role.id);
          return user.save();
        })
        .then(function () {
          sails.log.silly('role "registered" attached to user', user.username);
          next();
        })
        .catch(function (e) {
          sails.log.error(e);
          next(e);
        });
    }
  ]
};
