import {render, unmountComponentAtNode} from "react-dom";
import React from 'react';
import {act} from 'react-dom/test-utils';
import MainMenu from './MainMenu';
import whitespaceMatcher from '../Util/whitespaceMatcher';

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    /**
     * @type {HTMLDivElement}
     */
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


test("Main menu html is correct", () => {
    act(() => {
        render(<MainMenu/>, container);
    });

    const expectedHtml =
        `<header id="header">
            <div class="inner">
                <a href="index.html" class="logo">introspect</a>
                <nav id="nav">
                    <a href="/">Home</a>
                    <a href="/jobs">Jobs</a>
                    <a href="/login">Login</a>
                </nav>
            </div>
        </header>
        <a href="#menu" class="navPanelToggle"><span class="fa fa-bars"></span></a>
       `;

    const matcherResult = whitespaceMatcher(container.innerHTML, expectedHtml);

    try {
        expect(matcherResult.pass).toBeTruthy();
    } catch (e) {
        throw new Error(
            "Received HTML:\n" + container.innerHTML +
            "\n\nExpected HTML:\n" + matcherResult.expectedWithCompresssedWhitespace,
            e
        );
    }

});