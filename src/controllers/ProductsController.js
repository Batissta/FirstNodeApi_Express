const products = [
  { id: 1, name: "banana", price: 0.4 },
  { id: 2, name: "apple", price: 0.7 },
  { id: 3, name: "pineapple", price: 2.7 },
  { id: 4, name: "strawberry", price: 2.5 },
  { id: 5, name: "rice", price: 0.82 },
  { id: 6, name: "beans", price: 1.02 },
];

module.exports = {
  findOne: (req, res) => {
    const id = Number(req.params.id);
    const product = products.filter((pr) => pr.id === id);
    res.status(200).json(...product);
  },
  findAll: (_req, res) => {
    res.status(200).json(products);
  },
  insertOne: (req, res) => {
    const conteudo = {
      id: products.length + 1,
      ...req.body,
    };
    products.push(conteudo);
    res.status(201).json(conteudo);
  },
  updateOne: (req, res) => {
    const id = Number(req.params.id);
    products.forEach((pr, index) => {
      if (pr.id === id) products[index] = { ...pr, ...req.body };
    });
    res.status(201).json(products[id - 1]);
  },
};
