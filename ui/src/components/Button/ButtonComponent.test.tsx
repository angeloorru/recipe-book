import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import ButtonComponent from './ButtonComponent';

const TEST_NAME = "This is an example button";
const TEST_ON_PRESS_HANDLE = jest.fn();

describe("Testing Custom ButtonComponent", () => {
    afterEach(cleanup);

    it("The button should be displayed", async () => {
        render(
            <ButtonComponent
                text={TEST_NAME}
                variant="contained"
                onClick={TEST_ON_PRESS_HANDLE}
                className="button-container"
                testId="button-text"
            />,
        );
        const buttonName = screen.getByText(TEST_NAME);
        expect(buttonName).toBeDefined();
    });

    it("Pressing the button should run handler", async () => {
        render(
            <ButtonComponent
                text={TEST_NAME}
                variant="outlined"
                onClick={TEST_ON_PRESS_HANDLE}
                className="button-container"
                testId="button-text"
            />,
        );
        const buttonName = screen.getByText(TEST_NAME);
        fireEvent.click(buttonName);
        expect(TEST_ON_PRESS_HANDLE).toHaveBeenCalledTimes(1);
    });
});
