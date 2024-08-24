import test from 'ava';
import formatss from '.';

test('no format', (t) => {
    t.is(formatss('hello'), 'hello');
});

test('format', (t) => {
    t.is(formatss('hello {}', 'world'), 'hello world');
    t.is(formatss('hello {} {}', 'world', 'foo'), 'hello world foo');
});

test('too many format patterns', (t) => {
    t.is(formatss('hello {} {}', 'world'), 'hello world {}');
    t.is(formatss('hello {}'), 'hello {}');
});

test('too many args', (t) => {
    t.is(formatss('hello {}', 'world', 'foo'), 'hello world');
    t.is(formatss('hello', 'world'), 'hello');
});
