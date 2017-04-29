import { Component, HostListener, HostBinding, ElementRef, QueryList } from "@angular/core";

import { ItemDirective, TextDirective } from "../directives";

@Component({
    selector: "input.search.ngx-select-search-input[type='text']",
    template: ""
})
export class SearchInputComponent {

    public items: QueryList<ItemDirective> = null;
    public text: TextDirective = null;
    public minCharacters: number = 1;

    public get value(): string {
        return this._element.nativeElement.value;
    }
    public set value(val: string) {
        this._element.nativeElement.value = val;
    }

    private get _input(): HTMLInputElement {
        return this._element.nativeElement;
    }

    constructor(private _element: ElementRef) {
    }

    @HostListener("input", ["$event"])
    onInput(event: Event) {
        if (this.items !== null && this.minCharacters <= this._input.value.length) {
            this.items.forEach(x => {
                x.isFiltered = x.text.toLowerCase().indexOf(this._input.value.toLowerCase()) === -1;
            });
        }
        if (this.text !== null) {
            this.text.isFiltered = this._input.value.length > 0;
        }
    }

    focus() {
        this._element.nativeElement.focus();
    }

    clear() {
        this.value = "";
    }
}
