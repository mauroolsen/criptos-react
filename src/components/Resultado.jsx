import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 3rem;
    margin-top: 30px;
`
const Texto = styled.p`
    font-size: 18px;
`
const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 130px;
    margin: auto 0;
`

function Resultado({ resultado }) {
  const {
    PRICE,
    HIGHDAY,
    LOWDAY,
    CHANGEPCT24HOUR,
    IMAGEURL,
    LASTUPDATE,
  } = resultado
  
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='imagen cripto' />
        <div>
            <Precio>El Precio es de: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado
