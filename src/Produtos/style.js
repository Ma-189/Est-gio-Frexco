import styled from 'styled-components';

export const Container = styled.div`

    h2 {
        margin: 1rem 0 0 3rem;
        color: #33571A
    }

    h4 {
        margin: 0.3rem 0 0 3rem;
        color: #33571A
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
