import { Component, Input } from "@angular/core";

@Component({
    imports: [],
    selector: "app-textarea",
    standalone: true,
    template: `
        <textarea [class]="classTextarea" [id]="idTextarea" [rows]="rowTextarea">
            {{text}}
        </textarea>
    `
})
export class TextareaComponent{
    @Input() text: string = "";
    @Input() classTextarea: string = "";
    @Input() idTextarea: string = "";
    @Input() rowTextarea: string = "";
}