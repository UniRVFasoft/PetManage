import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
	selector: '[onlyLetters]',
})
export class OnlyLettersDirective {
	constructor(private element: ElementRef) {}

	@HostListener('input', ['$event'])
	onInput(event: InputEvent) {
		const input = event.target as HTMLInputElement

		const inputValue = input.value
		const newValue = input.value.replace(/[^a-zA-ZÀ-ÿ\s]+/g, '')

		if (newValue !== inputValue) {
			input.value = newValue
			input.dispatchEvent(new Event('input'))
		}
	}
}
