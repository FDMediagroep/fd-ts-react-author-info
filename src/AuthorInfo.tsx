import React, { PureComponent } from "react";
import Card, { getAllCardStyles, CardTypes } from "@fdmg/fd-card";
import TypoGraphy, { getAllTextStyles } from "@fdmg/fd-typography";
import {FollowButton, FollowButtonStyle, ButtonEditorial, ButtonEditorialStyles} from '@fdmg/fd-buttons';
import { createGlobalStyle } from "styled-components";

export interface Props {
    cardStyle: CardTypes;
    className?: string;
    title: string;
    description: JSX.Element;
    followed?: boolean;
    onEmailClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onFollowAuthorClick?: (follow: boolean) => void;
    onLinkedInClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onTwitterClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default class AuthorInfo extends PureComponent<Props, any> {
    onFollowAuthorClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (this.props.onFollowAuthorClick) {
            this.props.onFollowAuthorClick(e.currentTarget.getAttribute('data-selected') !== 'true');
        }
    }

    render() {
        return (
            <>
                <GlobalStyle/>
                <Card cardStyle={this.props.cardStyle} className={`fd-author-info${this.props.className ? ` ${this.props.className}` : ''}`}>
                    <div className="profile">
                        <img src="https://images.fd.nl/ffa583e0c7fbc666934ecc326a88defc2773f4e9.jpeg?fit=crop&amp;crop=faces&amp;auto=format&amp;q=45&amp;cs=tinysrgb&amp;w=640&amp;h=640&amp;fm=jpg" alt="Nelleke Trappenburg"/>
                        <TypoGraphy textStyle="card-h" className="fd-author-info-h"><h3>{this.props.title}</h3></TypoGraphy>
                        <div className="description">{this.props.description}</div>
                    </div>
                    <div className="controls">
                        <FollowButton
                            selected={this.props.followed}
                            buttonStyle={this.props.cardStyle === 'persoonlijk' ? 'persoonlijk' : 'default'}
                            tag="Van onze redacteur"
                            onClick={this.onFollowAuthorClick}
                            followButtonText="Volg deze auteur"
                        />
                        {this.props.onEmailClick ? <ButtonEditorial onClick={this.props.onEmailClick}><i className="icon-envelope"/> E-mail</ButtonEditorial> : null}
                        {this.props.onTwitterClick ? <ButtonEditorial onClick={this.props.onTwitterClick}><i className="icon-twitter"/>Twitter</ButtonEditorial> : null}
                        {this.props.onLinkedInClick ? <ButtonEditorial onClick={this.props.onLinkedInClick}><i className="icon-linkedin-in"/>LinkedIn</ButtonEditorial> : null}
                    </div>
                </Card>
            </>
        );
    }
}

const GlobalStyle = createGlobalStyle`
.fd-author-info {
    .profile, .controls {
        padding: 12px 10px;
        @media only screen and (min-width: 641px) {
            padding: 12px;
        }
        @media only screen and (min-width: 861px) {
            padding: 12px 15px;
        }
    }

    .profile {
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-bottom: 1rem;
        }
        .fd-author-info-h {
            margin-bottom: .5rem;
        }
        .description {
            font-family: 'ProximaNovaRegular', sans-serif;
            line-height: 1.434375rem;
            font-size: 1rem;
            * {
                margin: 0;
            }
            @media only screen and (min-width: 641px) {
                font-size: 1.0625rem;
            }
        }
    }

    .controls {
        border-top: 1px solid rgba(0,0,0,0.1);
        .fd-button {
            width: 100%;
            text-align: left;
            &:not(:last-child) {
                margin-bottom: .5rem;
            }
            i {
                margin-right: 1rem;
            }
        }
    }
}
`;

export const AuthorInfoStyle = createGlobalStyle`
${getAllCardStyles().globalStyle.rules}
${getAllTextStyles(['card-h']).globalStyle.rules}
${(FollowButtonStyle as any).globalStyle.rules}
${(ButtonEditorialStyles as any).globalStyle.rules}
${(GlobalStyle as any).globalStyle.rules}
`;
