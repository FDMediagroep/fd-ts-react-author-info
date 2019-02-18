import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import AuthorInfo from '../src/AuthorInfo';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    .content-area {
        padding: 1rem 0;
        &.persoonlijk {
            background-color: white;
        }

        aside {
            padding-bottom: 15px;
        }
    }
`;

class App extends PureComponent<any, any> {
    state: any = {
        follow: false
    }

    onFollowAuthorClick = (follow: boolean) => {
        this.setState({follow});
    }

    render() {
        return(
            <>
                <GlobalStyle/>
                <AuthorInfo
                    cardStyle={this.props.cardStyle}
                    description={<p>Nelleke Trappenburg schrijft bij het FD over pensioenen: dekkingsgraden, beleggingskosten, nieuwe wetgeving etc. Eerder werkte zij onder meer op de beursredactie.</p>}
                    followed={this.state.follow}
                    onFollowAuthorClick={this.onFollowAuthorClick}
                    title="Nelleke Trappenburg"
                />
            </>
        );
    }
}

ReactDOM.render(<>
    <div>
        <App cardStyle="default"/>
    </div>
</>,
document.querySelector('.overview aside'));

ReactDOM.render(<>
    <div>
        <App cardStyle="persoonlijk"/>
    </div>
</>,
document.querySelector('.persoonlijk aside'));

