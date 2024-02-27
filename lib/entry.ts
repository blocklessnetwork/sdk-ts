import { InputProps, readInput, writeOutput } from './stdin'

export async function entryMain<T>(
	cb: (input: InputProps<T>) => Promise<object>
): Promise<void> {
	const input = readInput<T>()
	const result = await cb(input)
	writeOutput(result)
}
