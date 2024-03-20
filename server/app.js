const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Assuming you have body-parser middleware
const viewproducts = require('./routes/ProductRoutes/viewproducts');
const addproducts = require('./routes/ProductRoutes/addproducts');
const updateproducts = require('./routes/ProductRoutes/updateproducts');
const deleteproducts = require('./routes/ProductRoutes/deleteproducts');
const addproductspecs = require('./routes/productSpecsRoutes/addproductspecs');
const updateproductspecs = require('./routes/productSpecsRoutes/updateproductspecs');

//Create part start
const addproduct = require('./routes/product_routes_create_files/addProductRoutes');
const addproductDetails = require('./routes/product_routes_create_files/addProductDetailsRoutes');
const addproductSecondaryFunction = require('./routes/product_routes_create_files/addProductSecondaryFunctionRoutes');
const addproductSpecifications = require('./routes/product_routes_create_files/addProductSpecificationsRoutes');
const addsecFunctions = require('./routes/product_routes_create_files/addSecFunctionsRoutes');
const addsubAssemblies = require('./routes/product_routes_create_files/addSubAssembliesRoutes');
const addsubAssembliesSpecifications = require('./routes/product_routes_create_files/addSubAssembliesSpecificationsRoutes');

app.use(bodyParser.json());
app.listen('3001', (req, res)=>{
    console.log('working');
})
app.use('/api/v1/viewproducts', viewproducts);
app.use('/api/v1/addproducts', addproducts);
app.use('/api/v1/updateproducts', updateproducts);
app.use('/api/v1/deleteproducts', deleteproducts);
app.use('/api/v1/addproductspecs', addproductspecs);
app.use('/api/v1/updateproductspecs', updateproductspecs);

// Create API's
app.use('/api/v1/addproduct', addproduct);
app.use('/api/v1/addproductDetails', addproductDetails);
app.use('/api/v1/addproductSecondaryFunction', addproductSecondaryFunction);
app.use('/api/v1/addproductSpecifications', addproductSpecifications);
app.use('/api/v1/addsecFunctions', addsecFunctions);
app.use('/api/v1/addsubAssemblies', addsubAssemblies);
app.use('/api/v1/addsubAssembliesSpecifications', addsubAssembliesSpecifications);