const Contact = require('../models/contact.model');

// GET /api/contacts
exports.list = async (_req, res, next) => {
  try {
    const data = await Contact.find();
    res.json(data);
  } catch (e) { next(e); }
};

// GET /api/contacts/:id
exports.get = async (req, res, next) => {
  try {
    const item = await Contact.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Contact not found' });
    res.json(item);
  } catch (e) { next(e); }
};

// POST /api/contacts
exports.create = async (req, res, next) => {
  try {
    const created = await Contact.create(req.body);
    res.status(201).json(created);
  } catch (e) { next(e); }
};

// PUT /api/contacts/:id
exports.update = async (req, res, next) => {
  try {
    const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ message: 'Contact not found' });
    res.json(updated);
  } catch (e) { next(e); }
};

// DELETE /api/contacts/:id
exports.remove = async (req, res, next) => {
  try {
    const deleted = await Contact.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Deleted', id: deleted._id });
  } catch (e) { next(e); }
};

// DELETE /api/contacts
exports.removeAll = async (_req, res, next) => {
  try {
    const { deletedCount } = await Contact.deleteMany({});
    res.json({ message: 'Deleted all contacts', deletedCount });
  } catch (e) { next(e); }
};
