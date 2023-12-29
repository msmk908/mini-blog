import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: calc(100% - 32px);
    padding: 1px;
    height: 40px;
    display: flex;
    flex-direction: colum;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: grey;
    :hover{
        background: lightgrey;
    }
`;

const TitleText = styled.p`
    height: 40px;
    margin: 0px;
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 40px;
`;

function PostListItem(props){
    const { post, onClick } = props;

    return(
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{post.datetime}</TitleText>
        </Wrapper>
    );
}

export default PostListItem;