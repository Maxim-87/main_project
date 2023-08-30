import {classNames} from "./classNames";

describe('classNames', () => {

    test('only one param', () => {
        expect(classNames('className')).toBe('className')
    })

    test('additional params', () => {
        expect(classNames('class', {}, ['red'])).toBe('class red')
    })

    test('with mods', () => {
        expect(classNames(
            'class',
            {active: true},
            ['red'])).toBe('class red active')
    })

    test('when mods false', () => {
        expect(classNames(
            'class',
            {active: false},
            ['red'])).toBe('class red')
    })

    test('when mods undefined', () => {
        expect(classNames(
            'class',
            {active: undefined},
            ['red'])).toBe('class red')
    })
})
