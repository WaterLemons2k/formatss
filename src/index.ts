const PATTERN = '{}';

/**
 * Format the pattern ({}) in the input string with the corresponding argument.
 *
 * @param input - input string
 * @param args - arguments to format
 * @returns - formatted string
 */
export default function formatss(input: string, ...args: string[]) {
    return args.reduce((s, arg) => s.replace(PATTERN, arg), input);
}
