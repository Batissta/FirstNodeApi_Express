const clients = [
  { id: 1, name: "Francinaldo", age: 19, degree: "systems of information" },
  { id: 2, name: "Pablo", age: 20, degree: "systems of information" },
  { id: 3, name: "Talles", age: 18, degree: "systems of information" },
  { id: 4, name: "Gabryell", age: 22, degree: "systems of information" },
];

module.exports = {
  findOne: (req, res) => {
    const id = Number(req.params.id);
    const client = clients.filter((cl) => cl.id === id);
    res.status(200).json(...client);
  },
  findAll: (_req, res) => {
    res.status(200).json(clients);
  },
  insertOne: (req, res) => {
    const conteudo = {
      id: clients.length + 1,
      ...req.body,
    };
    clients.push(conteudo);
    res.status(201).json(conteudo);
  },
  updateOne: (req, res) => {
    const id = Number(req.params.id);
    clients.forEach((cl, index) => {
      if (cl.id === id) clients[index] = { ...cl, ...req.body };
    });
    res.status(201).json(clients[id - 1]);
  },
};
