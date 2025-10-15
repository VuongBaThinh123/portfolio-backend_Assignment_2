// tiny CRUD factory for a Mongoose model
module.exports = (Model) => ({
  list: async (_req, res, next) => { try { res.json(await Model.find()); } catch (e) { next(e); } },
  get:  async (req, res, next) => {
    try { const x = await Model.findById(req.params.id); if (!x) return res.status(404).json({message:'Not found'}); res.json(x); }
    catch (e) { next(e); }
  },
  create: async (req, res, next) => { try { const x = await Model.create(req.body); res.status(201).json(x); } catch (e) { next(e); } },
  update: async (req, res, next) => {
    try { const x = await Model.findByIdAndUpdate(req.params.id, req.body, {new:true, runValidators:true});
      if (!x) return res.status(404).json({message:'Not found'}); res.json(x);
    } catch (e) { next(e); }
  },
  remove: async (req, res, next) => {
    try { const x = await Model.findByIdAndDelete(req.params.id);
      if (!x) return res.status(404).json({message:'Not found'}); res.json({message:'Deleted', id: x._id});
    } catch (e) { next(e); }
  },
  removeAll: async (_req, res, next) => {
    try { const { deletedCount } = await Model.deleteMany({}); res.json({message:'Deleted all', deletedCount}); }
    catch (e) { next(e); }
  },
});
