import styled from "styled-components";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";

const CartCount = styled.span`
    width: 17px;
    height: 17px;

    background-color: var(--delete-color);
    color: white;

    position: absolute;
    right: -10px;
    top: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 10px;
    font-weight: 600;
    border-radius: 50%;
`


const Container = styled.div`
  position: relative;
`

export function CartControl() {
  const { value } = useLocalStorage<any[]>("cart-items", []);

  return (
    <Container>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}
