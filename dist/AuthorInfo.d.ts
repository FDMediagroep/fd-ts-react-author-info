import React, { PureComponent } from "react";
import { CardTypes } from "@fdmg/fd-card";
export interface Props {
    cardStyle: CardTypes;
    className?: string;
    title: string;
    description: JSX.Element;
    followed?: boolean;
    onFollowAuthorClick?: (follow: boolean) => void;
}
export default class AuthorInfo extends PureComponent<Props, any> {
    onEmailClick: () => void;
    onFollowAuthorClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onLinkedInClick: () => void;
    onTwitterClick: () => void;
    render(): JSX.Element;
}
export declare const AuthorInfoStyle: import("styled-components").GlobalStyleComponent<{}, import("styled-components").DefaultTheme>;
