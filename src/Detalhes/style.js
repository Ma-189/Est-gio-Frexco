import styled from 'styled-components';

export const Container = styled.div`

    dispaly: flex;
    align-items: center;
    justify-content: center;

    h2 {
        margin: 1rem 0 0 3rem;
        color: #33571A
    }

    h4 {
        margin: 0.3rem 0 0 3rem;
        color: #33571A
    }


.fruit {
    display: flex;
    margin: 2rem 14rem;
    background-color: rgba(0, 0, 0, 0.02);
    height: 26rem;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: 0.5rem solid #33571A;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1rem;
}

.info-nutri {
    display: flex;
    justify-content: center;
    color: #33571A;
    margin: 2rem
}

.img-fruit {
    width: 25rem;
    height: 17rem;
    margin: 0 10rem 0 0
}

.fruit-name {
    margin: 0 0 2rem 0;
}

h3 {
    color: #33571A
}

.fruit-name h1 {
    color: #33571A;
    display: flex;
    justify-content: center;
}

.details {
    display: flex;
    flex-direction: column;
    margin: 0 2rem 0 -7rem;
    align-items: center
}

.descricao {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center
}

buttom {
    background-color: #cf1e2b;
    padding: 0.4rem 2rem 0.4rem 2rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    margin: 2rem;
    cursor: pointer;
    color: white;
    font-weight: 600;
    border: none;
}

a {
    text-decoration: none;
}

buttom:hover {
    background-color: #b81a24;
}

`
export const ProductList = styled.ul` 
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        column-gap: 3rem;
        row-gap: 3rem;
        margin: 2rem 3rem 5rem 3rem;      
`

export const Product = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 17rem;
    height: 20rem;
    background-color: rgba(0, 0, 0, 0.02);
    border-bottom: 0.5rem solid #33571A;
    border-radius: 0.7rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

span {
    font-weight: regular;
}

img {
    width: 7rem;
    margin: 2rem;
}

.preço {
    display: flex;
    margin: 2rem 0 1.5rem 0
}

.preçofruta {
    margin: 0 3rem 0 0;
    font-weight: bold;
    color: #33571A;
}

.preçoquilo {
    font-weight: medium;
    color: rgba(0, 0, 0, 0.46);
}

.imagens img {
    width: 2.5rem;
    margin: 0 1rem 3rem 1rem;
    cursor: pointer;
}
`
