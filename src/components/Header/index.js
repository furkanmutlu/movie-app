import React from 'react';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

// Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={RMDBLogo} alt='RMDB Logo' />
                <TMDBLogoImg src={TMDBLogo} alt='TMDB Logo' />
            </Content>
        </Wrapper>
    );
};

export default Header;