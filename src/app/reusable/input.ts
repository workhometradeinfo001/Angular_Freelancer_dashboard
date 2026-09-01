import { Component, Input } from "@angular/core";

@Component(
    {
        imports: [],
        standalone: true,
        selector: "app-input",
        template: `
            <input [type]="inputType" [class]="classInput" 
            [id]="inputId" [aria-describedby]="ariaDes" [placeholder]="placeHolder" />
        `

    }
)

export class InputComponent {
    @Input() inputType: unknown;
    @Input() classInput: string= "form-control";
    @Input() inputId: string = "exampleInputEmail1";
    @Input() ariaDes: string = "emailHelp";
    @Input() placeHolder: string = "Place Holder";
}