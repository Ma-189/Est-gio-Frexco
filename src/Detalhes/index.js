import { useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import { Container} from './style';
import {Link} from 'react-router-dom';
import amora from '../Produtos/assets/amora.png'; 

function Detalhes () {

    const { id } = useParams() 
    
    const [product, setProduct] = useState();

    useEffect(() => {

    fetch(`/api/fruit/${id}`, {
    method: 'GET',
    })
    .then(response => response.json())
    .then(data => 
            setProduct(data))

        }, [])

    return (
        <Container>
            <div className="container-fruit">
               <h1 className="info-nutri">Informação Nutricional</h1>
               </div>
                <div className="fruit">
                    <img className="img-fruit" src={amora} />
                    <div className="details">
                        <div className="fruit-name">
                        
                        {product && (
                           <>
                             <h1 className="fruit-name">{product.name}</h1>
                        <div className="descricao">
                       
                        <h3>Carboidratos: {product.nutritions.carbohydrates}</h3>
                        <h3>Proteínas: {product.nutritions.protein}</h3>
                        <h3>Calorias: {product.nutritions.calories}</h3>
                        <h3>Gorduras: {product.nutritions.fat}</h3>
                        <h3>Açúcares: {product.nutritions.sugar}</h3>
                        
                        </div>
                        </>
                        )}
                       
                        <Link to="/"><buttom>Voltar</buttom></Link>
                    </div> 
                </div>
                </div>
            </Container>
    )
}

export default Detalhes;