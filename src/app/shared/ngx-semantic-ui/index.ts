export {
    TabDirective, TabTriggerDirective, TabContextDirective, TabService,

    // #region Dropdown Includes
    DropdownSelectDirective, DropdownDirective, DropdownService, InputDirective, SearchInputDirective,
    DropdownSelectComponent, MultiSelectLabelComponent, SearchInputComponent, IconDirective, InputHiddenDirective,
    ItemDirective, MenuDirective, OptionDirective, TextDirective, DropdownSelectValueAccessor, DropdownSelectMultipleValueAccessor,
    // #endregion
    CheckboxDirective, RadioCheckboxDirective,
    AccordionContentComponent, AccordionDirective, AccordionTitleDirective,
    PopupDirective, PopupTriggerDirective, PopupService, TooltipDirective,
    ModalComponent, ModalContextDirective, ModalApproveDirective, ModalDenyDirective, ModalCloseDirective, ModalService,
    TransitionService
} from "./modules";

import { NgModule, ModuleWithProviders } from "@angular/core";
import { AccordionModule, CheckboxModule, ModalModule, TabModule } from "./modules";

const MODULES = [
    AccordionModule,
    CheckboxModule,
    ModalModule,
    TabModule
];

@NgModule({
    imports: [
        AccordionModule.forRoot(),
        CheckboxModule.forRoot(),
        ModalModule.forRoot(),
        TabModule.forRoot()
    ],
    exports: MODULES
})
export class NgxRootModule { }

@NgModule({ exports: MODULES })
export class NgxSemanticUiModule {
    public static forRoot(): ModuleWithProviders { return { ngModule: NgxRootModule }; }
}
