import React, { PureComponent } from "react";
import { CardTypes } from "@fdmg/fd-card";
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
    onFollowAuthorClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    render(): JSX.Element;
}
export declare const AuthorInfoStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
