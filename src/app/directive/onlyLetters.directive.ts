import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
	selector: '[onlyLetters]',
})
export class OnlyLettersDirective {
	constructor(private element: ElementRef) {}

	@HostListener('input', ['$event'])
	onInput(event: KeyboardEvent) {
		const input = event.target as HTMLInputElement
		const regex = /^[a-zA-Z]+$/

		const inputValue = input.value
		const newValue = input.value.replace(/[^a-zA-Z]+/g, '')

		if (newValue !== inputValue) {
			input.value = newValue
			input.dispatchEvent(new Event('input'))
		}
	}
}
