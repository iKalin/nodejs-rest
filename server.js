var express = require('express'),
	restful = require('node-restful'),
	mongoose = restful.mongoose;

var app = express();
app.configure(function(){
	app.use(express.bodyParser());
	app.use(express.methodOvveride());
});

mongoose.connect('mongodb://localhost/restful');

var ProductSchema = mongoose.Schema({
	name: String,
	sku: String,
	price: Number
});
var Products = restful.model('products', ProductSchema);
Products.methods(['get', 'put', 'post', 'delete']);
Products.register(app, '/api/products');

app.listen(3000);
console.log('Server is shitting at 3000');