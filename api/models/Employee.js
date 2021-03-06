module.exports = {
  meta: {
    schemaName: 'organization_information'
  },
  attributes: {
    organization: {
      model: 'organization'
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
    ssn: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
    user: {
      model: 'user'
    },
    role: {
      type: 'string'
    }
  }
};
