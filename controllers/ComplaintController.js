const Complaint = require('../models/Complaint');

const ComplaintController = {
    index: async (req, res) =>{
        try{
            const allComplaints = await Complaint.find();
            res.status(200).json(allComplaints);
        }catch(error){
            res.status(400).json({ error: error.message });
        }
    },
    create: async (req, res)=>{
        try {
            const newComplaint = new Complaint({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone,
                issue: req.body.issue,
                description: req.body.description,
                type: req.body.type,
                location_ward: req.body.location_ward,
                location_address: req.body.location_address,
                duration_of_the_issue: req.body.duration_of_the_issue,
                impact: req.body.impact,
                status: 'open',
            });
            const savedComplaint = await newComplaint.save();
        
            res.status(201).json(savedComplaint);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },
    update: async (req, res) =>{
        try{
            const complaintId = req.params.id;
            const updatedComplaint = await Complaint.findByIdAndUpdate(complaintId,{
                status: req.body.status,
            },{new: true});
            if (!updatedComplaint) {
                return res.status(404).json({ error: 'Complaint not found' });
            }
        
            res.status(200).json(updatedComplaint);
        }catch(error){
            res.status(400).json({ error: error.message });
        }
    },
    show: async (req, res) =>{
        try{
            const complaintId = req.params.id;
            const complaint = await Complaint.findById(complaintId);

            if (!complaint) {
                return res.status(404).json({ error: 'Complaint not found' });
            }

            res.status(200).json(complaint);
        }catch(error){
            res.status(400).json({ error: error.message });
        }
    },
    destroy: async(req, res)=>{
        try{
            const complaintId = req.params.id;
            const deletedComplaint = await Complaint.findByIdAndDelete(complaintId);

            if (!deletedComplaint) {
              return res.status(404).json({ error: 'Complaint not found' });
            }
      
            res.status(200).json({ message: 'Complaint deleted successfully' });
        }catch(error){
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = ComplaintController;