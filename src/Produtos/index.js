import React, {useState, useEffect} from 'react';
import amora from '../Produtos/assets/amora.png';
import addcarrinho from '../Produtos/assets/add-carrinho.png';
import info from '../Produtos/assets/info.png';
import { Container, ProductList, Product } from './style';
import {Link} from 'react-router-dom';
import logo from '../Produtos/assets/logo.png';
import login from '../Produtos/assets/login.png';
import carrinho from '../Produtos/assets/carrinho.png';
import remover from '../Produtos/assets/remover-carrinho.png';
import lixo from '../Produtos/assets/lixo.png';

function Produtos() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

    fetch(`/api/fruit/all`)
        .then(response => response.json())
        .then(data => { 
            console.log(data) 
            setProducts(data)
            })

        }, [])

        //carrinho de compras

        const [cart, setCart] = useState([]);

            const addToCart = (product) => {
                const exist = cart.find((x) => x.id === product.id);
                if(exist) {
                    setCart(
                        cart.map(x => x.id === product.id ? {...exist, qty: exist.qty +1} : x, cart)
                    )
                } else {
                    setCart([...cart, {...product, qty: 1}])
                }
            }
        
            const removeFromCart = (product) => {
                const exist = cart.find((x) => x.id === product.id);
                if(exist.qty === 1) {
                    setCart(
                        cart.filter((x) => x.id !== product.id 
                    ))
                } else {
                    setCart(
                        cart.map((x) => x.id === product.id ? {...exist, qty: exist.qty -1} : x)
                        )
                }
            }

        const removeItemFromCart = (productToRemove) => {
            setCart(cart.filter(product => product !== productToRemove))
        }

        function clearCart() {
            setCart([])
        }

        const PAGE_PRODUCTS = 'product'
        const PAGE_CART = 'cart'

        

        const navigateTo = (nextpage) => {
            setPage(nextpage)
        }
        const [page, setPage] = useState(PAGE_PRODUCTS);
        const renderProducts = () => (
            <>

            <h2>Nossos Produtos</h2>
            <h4>{products.length} Produtos encontrados</h4>
             <ProductList>
            {products && products.map((product) => {
                return (
                    <Product key={product.id}>
                        <Link to={`/detalhes/${product.id}`}><img src={amora} /></Link>
                        <span>{product.name} (100g)</span>
                        <div className="preço">
                           <span className="preçofruta">R$ 2,20</span>
                            <span className="preçoquilo">R$ 8,40</span>
                        </div>
                        <div className="imagens">
                       <buttom onClick={() => addToCart(product)}><img onClick={() => navigateTo(PAGE_CART)}src={addcarrinho}/></buttom>
                            <Link to={`/detalhes/${product.id}`}><buttom><img src={info} /></buttom></Link>
                        </div>
                    </Product>
                   
                );   
            })}
             </ProductList>
            </>
        )

        const renderCart = () => (
            <>
            <div class='esvaziar'>
                <h2>Meu carrinho</h2>
                <div className="voltar-esvaziar">
                <buttom id="voltar" onClick={() => navigateTo(PAGE_PRODUCTS)}>+ Continuar comprando</buttom>
                    <buttom className="esvaziarcar" onClick={() => clearCart()}>
                        <img src={lixo}/> 
                        <span>ESVAZIAR CARRINHO</span>
                    </buttom>
                </div>
            </div>
             <ul>
            {cart.map(product => {
                return (
                    <>
                    <li id='li' key={product.id}>
                        <img id='fruta' src={amora} />
                        <span>{product.name} (100g)</span>
                        <div className="preço">
                            <span className="preçofruta" id="price">R$ 2,20</span>
                        </div>
                        <div className="quantidade">
                            <buttom id="del" onClick={() => removeFromCart(product)}>-</buttom>
                            <span id="quant-produtos">{product.qty}</span>
                            <buttom id="add" onClick={() => addToCart(product)}>+</buttom>
                        </div>
                        <div className="preço">
                            <span className="preçototal">R$ 8,60</span>
                        </div>
                        <buttom className="remover" onClick={() => removeItemFromCart(product)}>
                            <img src={remover} />
                            <span>Remover do carrinho</span>
                        </buttom>
                    </li>
                    </>
                );   
            })}
            <div className="carrinho-vazio"> {cart.length === 0 && <h1>Carrinho está vazio!</h1>}</div>
             </ul>
            </>
        )

    return (
        <><nav>
            <img className='logo' onClick={() => navigateTo(PAGE_PRODUCTS)} src={logo} />
            <input type='text' placeholder='Buscar produto:' />
            <div className='divlogin'>
                <img className='login' src={login} />
                <div className="divcarrinho">
                    <div className='quant'>
                        <p>{cart.length}</p>
                    </div>
                    <buttom onClick={() => navigateTo(PAGE_CART)}> <img className='carrinho' src={carrinho} /></buttom>
                </div>
            </div>
        </nav><Container>
                {page === PAGE_PRODUCTS && renderProducts()}
                {page === PAGE_CART && renderCart()}
            </Container></>

    )
}

export default Produtos;