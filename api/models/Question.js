module.exports = {
  meta: {
    schemaName: 'coordinated_entry_system'
  },
  attributes: {
    title: {
      type: 'text',
      required: true
    },
    help: {
      type: 'text'
    },
    type: {
      type: 'string',
      enum: ['string', 'number', 'boolean', 'date']
    },
    required: {
      type: 'boolean',
      default: false
    },
    prefix: {
      model: 'prefix'
    },
    widget: {
      model: 'widget'
    },
    questionsets: {
      collection: 'questionset',
      via: 'questions',
      through: 'questionsetquestion'
    },
  }
};
