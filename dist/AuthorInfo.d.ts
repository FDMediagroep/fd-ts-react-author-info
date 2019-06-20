import React from "react";
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
export default function AuthorInfo(props: Props): JSX.Element;
export declare const AuthorInfoStyle: import("styled-components").FlattenSimpleInterpolation;
