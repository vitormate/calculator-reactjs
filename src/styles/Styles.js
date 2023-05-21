import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* width: 100%; */
    /* height: 500px; */
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
    width: 325px;
    background-color: #d1edf6;
    border-radius: 8px;
    padding: 0 8px;
    overflow: hidden;
`;