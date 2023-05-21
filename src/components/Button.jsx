import { ButtonCalculator } from "../styles/Button"

export const Button = ({ id, func }) => {
  return(
    <>
      <ButtonCalculator onClick={func} value={id}>{id}</ButtonCalculator>
    </>
  )
}