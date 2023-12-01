import React from 'react'
import styled from "styled-components"

function Detail() {
  return (
    <Container>
        <DetailInfo>
            <h1>The Internet paves the way for people and communities to thrive.</h1>
            <Info>
                <img src="img/person.jpg" />
                <span>Natale campell</span> 
            </Info>
            <p>The internet has removed all communication barriers, creating an open world with easy, instant and endless communication practices and possibilities. We do not even need a PC to communicate online, thanks to our mobile phones. Art, knowledge and cultural processes make way across the world with much ease.
                The internet has removed all communication barriers, creating an open world with easy, instant and endless communication practices and possibilities. We do not even need a PC to communicate online, thanks to our mobile phones. Art, knowledge and cultural processes make way across the world with much ease.
                The internet has removed all communication barriers, creating an open world with easy, instant and endless communication practices and possibilities. We do not even need a PC to communicate online, thanks to our mobile phones. Art, knowledge and cultural processes make way across the world with much ease.
                The internet has removed all communication barriers, creating an open world with easy, instant and endless communication practices and possibilities. We do not even need a PC to communicate online, thanks to our mobile phones. Art, knowledge and cultural processes make way across the world with much ease.
                The internet has removed all communication barriers, creating an open world with easy, instant and endless communication practices and possibilities. We do not even need a PC to communicate online, thanks to our mobile phones. Art, knowledge and cultural processes make way across the world with much ease.
                The internet has removed all communication barriers, creating an open world with easy, instant and endless communication practices and possibilities. We do not even need a PC to communicate online, thanks to our mobile phones. Art, knowledge and cultural processes make way across the world with much ease.
            </p>
        </DetailInfo>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(50vh - 70px);
    width: 100vw;
    height: 50vh;
    background-image: url('img/background2.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: norepeat;
    display: flex;
`
const DetailInfo =styled.div`
   text-align: center;
   padding: 0 14rem;

    h1 {
        padding-top: 22rem;
        font-weight: normal;
        text-align: left;
    }

    img {
        width: 5em;
        height: 5em;
        object-fit: cover;
        border-radius: 50%;
        display: flex;
    }

    p {
        text-align: left;
        line-height: 1.8rem;
        margin-top: 2rem
    }
`
const Info = styled.div`
    display: flex;
    gap: 2rem;
    align-items: center;
    color: gray;

    span {
        font-size: 0.9rem;
    }
`