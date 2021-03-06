import { useEffect, useState } from "react"
import Error from "./Error";
import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 7px;
    transition: background-color .3s ease;
    margin: 30px 0;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

function Formulario({setMonedas}) {
    const [ error, setError ] = useState(false)
    const [ criptos, setCriptos ] = useState([])
    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
    const [ cripto, SelectCripto ] = useSelectMonedas('Elige tu Criptomoneda', criptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCrypto = resultado.Data.map( crypto => {
                return {
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName
                }
            })
            setCriptos(arrayCrypto)
        }
        consultarAPI()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        if([moneda, cripto].includes('')) {
            setError(true)
            return
        }
        setError(false)
        setMonedas({
            moneda,
            cripto
        })
    }

    return (
        <>
            {error &&
                <Error>Todos los campos son obligatorios</Error>
            }
            <form onSubmit={handleSubmit}>
                <SelectMonedas />
                <SelectCripto />
                <InputSubmit type="submit" value="Cotizar" />
            </form>
        </>
    )
}

export default Formulario