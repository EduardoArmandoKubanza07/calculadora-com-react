import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 21rem;
    height: 29rem;
    background-color: rgba(0,0,0,0.6);
    border-radius: .5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    padding: 1.5rem 1rem;
    overflow : hidden ;
`;

export const Display = styled.div`
    width: 100%;
    height: 6rem;
    background-color: #fff;
    color: #333;
    border-radius: .5rem;
    padding: .5rem;
    font-weight: 800;
    font-size: 1.5rem;
    overflow: auto;
    text-align: right;
`;

export const Buttons = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 1rem;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1rem;
    
        &:last-child{
            justify-content: flex-start;
        }

        button {
            width: 23%;
            height: 3rem;
            border-radius: .5rem;
            cursor: pointer;
            background: #333;
            color: #fff;
            font-weight: 800;
            font-size: 1.4rem;
            transition: all .2s ease-in-out;

            &:hover {
                background-color: #000;
            }
        }
    }
`;