import TestRenderer from 'react-test-renderer';
import AuthorInfo from '../src/AuthorInfo';
import React from 'react';
import uniqid from 'uniqid';

const onDisableAlertClick = () => {};
const onEnableAlertClick = () => {};
const onFollowClick = () => {};
const onUnfollowClick = () => {};
const interests = [{
    tag: 'Detailhandel',
    uuid: uniqid()
}, {
    selected: true,
    tag: 'Eten & Drinken',
    uuid: uniqid()
}, {
    alertSelected: true,
    selected: true,
    tag: 'Supermarkt',
    uuid: uniqid()
}];

describe('AuthorInfo', () => {
    test('renders correctly', () => {
        let authorInfo = TestRenderer.create(<AuthorInfo
            cardStyle="default"
            description={<p>Nelleke Trappenburg schrijft bij het FD over pensioenen: dekkingsgraden, beleggingskosten, nieuwe wetgeving etc. Eerder werkte zij onder meer op de beursredactie.</p>}
            title="Nelleke Trappenburg"
        />);
        expect(authorInfo.toJSON()).toMatchSnapshot();

        authorInfo = TestRenderer.create(<AuthorInfo
            cardStyle="persoonlijk"
            description={<p>Nelleke Trappenburg schrijft bij het FD over pensioenen: dekkingsgraden, beleggingskosten, nieuwe wetgeving etc. Eerder werkte zij onder meer op de beursredactie.</p>}
            onFollowAuthorClick={() => {}}
            title="Nelleke Trappenburg"
        />);
        authorInfo = TestRenderer.create(<AuthorInfo
            cardStyle="persoonlijk"
            description={<p>Nelleke Trappenburg schrijft bij het FD over pensioenen: dekkingsgraden, beleggingskosten, nieuwe wetgeving etc. Eerder werkte zij onder meer op de beursredactie.</p>}
            onEmailClick={() => {}}
            onFollowAuthorClick={() => {}}
            title="Nelleke Trappenburg"
        />);
        authorInfo = TestRenderer.create(<AuthorInfo
            cardStyle="persoonlijk"
            description={<p>Nelleke Trappenburg schrijft bij het FD over pensioenen: dekkingsgraden, beleggingskosten, nieuwe wetgeving etc. Eerder werkte zij onder meer op de beursredactie.</p>}
            onEmailClick={() => {}}
            onFollowAuthorClick={() => {}}
            onLinkedInClick={() => {}}
            title="Nelleke Trappenburg"
        />);
        authorInfo = TestRenderer.create(<AuthorInfo
            cardStyle="persoonlijk"
            description={<p>Nelleke Trappenburg schrijft bij het FD over pensioenen: dekkingsgraden, beleggingskosten, nieuwe wetgeving etc. Eerder werkte zij onder meer op de beursredactie.</p>}
            onEmailClick={() => {}}
            onFollowAuthorClick={() => {}}
            onLinkedInClick={() => {}}
            onTwitterClick={() => {}}
            title="Nelleke Trappenburg"
        />);
        expect(authorInfo.toJSON()).toMatchSnapshot();
    });

});
