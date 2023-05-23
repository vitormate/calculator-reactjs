import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* background-color: #222; */
`;

export const NavBar = styled.nav`
    display: flex;
    align-items: center;
    height: 72px;
    width: 100%;
    background-color: yellow;
    margin-bottom: 80px;
    padding: 0 48px;

    p {
        font-size: 40px;
        font-weight: bold;
    }
`;

export const Row = styled.div`
    display: flex;
    gap: 8px;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const KeyNumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 60px 20px 20px 20px;
    background-color: #4c4e56;
    border-radius: 8px;
`;

export const Screen = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 40px;
    height: 96px;
    width: 345px;
    background-color: #d1edf6;
    border-radius: 8px;
    padding: 0 8px;
    overflow: hidden;
`;

export const Footer = styled.footer`
    display: flex;
    align-items: end;
    justify-content: center;
    height: 148px;
    width: 100%;
    background-color: yellow;
    margin-top: 80px;
    padding: 24px 0px;

    span {
        font-weight: bold;
    }
`;