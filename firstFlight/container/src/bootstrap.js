
import 'products/ProdcutsIndex'
import 'cart/CartShow'
import { mount  as mountProducts} from 'products/ProdcutsIndex';
import { mount  as mountCart} from 'cart/CartShow';

console.log("container");
mountProducts(document.getElementById('my-products'));
mountCart(document.getElementById('my-cart'));