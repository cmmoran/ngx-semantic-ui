import { Directive, Input, Output, EventEmitter, HostBinding, HostListener, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

export const CHECKBOX_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxDirective),
    multi: true
}

@Directive({ selector: '.ui.checkbox', providers: [ CHECKBOX_VALUE_ACCESSOR ] })
export class CheckboxDirective implements ControlValueAccessor, OnInit {

    /**
     * Empty functions for triggers
     */

    private _onChange: any = Function.prototype;
    private _onTouched: any = Function.prototype;

    @HostBinding('class.checked')
    @Input()
    public checked: boolean = false;;

    @Input()
    public disabled: boolean = false;

    @HostBinding('class.read-only')
    @Input()
    public readonly: boolean = false;

    @Output() onChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @HostListener('click')
    public onClick(): void {
        if (this.disabled || this.readonly) return;
        this.writeValue(this.checked);
        this._onTouched();
        this.onChange.emit(this.checked);
    }

    public constructor() {
    }

    /**
     * This function is needed for OnInit
     */


    public ngOnInit(): void {
    }

    /**
     * These functions are needed for the ControlValueAccessor
     */

    public writeValue(value: boolean): void {
        this.checked = !value;
    }

    public registerOnChange(func: any): void {
        this._onChange = func;
    }

    public registerOnTouched(func: any): void {
        this._onChange = func;
    }

}
