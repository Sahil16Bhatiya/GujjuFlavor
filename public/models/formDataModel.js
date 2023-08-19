const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  content: { type: String, required: true },
});

const FormDataModel = mongoose.model('FormData', formDataSchema);

module.exports = FormDataModel;
