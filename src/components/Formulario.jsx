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
    margin-top: 30px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

function Formulario() {

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas);

    return (
        <form>
            <SelectMonedas />
            {moneda}
            <InputSubmit type="submit" value="Cotizar" />
        </form>
    )
}

export default Formulario