import { Directive, HostListener, Optional } from "@angular/core";
import { ModalComponent } from "./modal.component";

@Directive({ selector: ".negative,.deny,.cancel" })
export class ModalDenyDirective {

    /**
     * Constructor to build out if this button is part of a modal.
     *
     * @param _modal The modal component that this button is a parent of.
     */
    constructor(@Optional() private _modal: ModalComponent) {
    }

    /**
     * Click listener that will deny the modal if this trigger has a modal parent.
     */
    @HostListener("click", ["$event"])
    approve() {
        if (this._modal != null) {
            this._modal.deny();
        }
    }

}
