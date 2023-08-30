import {render, screen} from '@testing-library/react'
import {Button, ThemeButton} from "shared/ui/Button/Button";

describe('Test button', () => {
    test('Render button component', () => {
        render(<Button> Test button </Button>);
        expect(screen.getByText('Test button')).toBeInTheDocument();
    });

    test('Has class clear', () => {
        render(<Button theme={ThemeButton.CLEAR}> Test button </Button>);
        expect(screen.getByText('Test button')).toHaveClass('clear');
        screen.debug();
    })
})
