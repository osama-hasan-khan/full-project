import Ticket from "../models/Ticket.js";

export const postTickets = async (req, res) => {
  try {
    const { title, description, priority, category, progress, status } =
      req.body;

    const ticket = await Ticket.create({
      title,
      description,
      priority,
      category,
      progress,
      status,
    });

    res.status(200).json(ticket);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
};

export const updateTicket = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Ticket.findByIfAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    return res.status(200).send({ message: "Ticket updated successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Ticket.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    return res.status(200).send({ message: "Ticket deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};
