import { Component, Input } from "@angular/core";

@Component({
    imports: [],
    standalone: true,
    selector: "app-label",
    template: `
        <label [class]="classInput" [for]="labelTitle"
            [style.font-size]="fontSize"
        >
            {{text}}
        </label>
    `
})
export class LabelComponent{

    @Input() labelTitle: string = "exampleInputEmail1";
    @Input() text: string = "Your Text";
    @Input() classInput: string = "";
    @Input() fontSize: unknown;
}