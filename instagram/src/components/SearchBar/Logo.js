import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    margin-top: 2px;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
    align-content: stretch;
    vertical-align: baseline;
    min-width: 40px;
    display: flex;
    flex: 2 99 0%;
    .logo--image {
        background-image: url(https://www.instagram.com/static/bundles/base/sprite_glyphs.png/07c1c2c6e459.png);
        background-repeat: no-repeat;
        background-position: -191px 0;
        height: 24px;
        width: 24px;
        display: block;
    }
    .logo--seperator {
        background-color: #262626;
        height: 28px;
        margin: 0 16px;
        width: 1px;
        transition: opacity .1s ease-out;
        align-items: stretch;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
    }
    .logo--text {
        align-self: flex-start;
        display: block;
        background-repeat: no-repeat;
        background-position: 0 0;
        height: 29px;
        width: 103px;
        background-image: url(https://www.instagram.com/static/bundles/base/sprite_glyphs.png/07c1c2c6e459.png);
    }
`;

const Logo = () => {
    return (
        <Div className="logo">
            <span className="logo--image" />
            <div className="logo--seperator" />
            <span className="logo--text" />
        </Div>
    );
};

export default Logo;
