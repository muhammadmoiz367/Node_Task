const uuid=require('uuid')
//----consider it as your array of objects from db---->
var arr = [
  {
    _id: uuid.v4(),
    name: 'Product 1',
    price: 10,
    description: 'Product 1 description',
  },
  {
    _id: uuid.v4(),
    name: 'Product 2',
    price: 20,
    description: 'Product 2 description',
  },
  {
    _id: uuid.v4(),
    name: 'Product 3',
    price: 30,
    description: 'Product 3 description',
  },
];

//---fetch all products from db-----//>
exports.allProducts = (req, res, next) => {
  console.log('In product page');
  res.render('allproducts', {
    pageTitle: 'Products',
    data: arr,
  });
};

//----fetch detail of single product from db----//>
exports.specificProduct = (req, res, next) => {
  console.log('view each product detail');
  const data=arr.filter(item=>item._id===req.params.id)
  console.log(data);
  res.render('singleproduct', {
    pageTitle: 'Single Product',
    data: { _id: data[0]._id, name: data[0].name, description: data[0].description },
  });
};
