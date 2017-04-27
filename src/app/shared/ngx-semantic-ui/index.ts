export {
    TabDirective, TabTriggerDirective, TabContextDirective, TabService,
    DropdownService, SearchInputComponent, MultiSelectLabelComponent, DropDownDirective, DropdownSelectComponent, InputSearchDirective, OptionDirective, DropdownItemDirective, DropdownSelectionDirective, DropdownTextDirective, DropdownMenuDirective, InputHiddenDirective,
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
