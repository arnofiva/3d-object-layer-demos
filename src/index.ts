import Editor from "@arcgis/core/widgets/Editor";
import { view } from "./main";

const editor = new Editor({
  view: view
});
// Add widget to top-right of the view
view.ui.add(editor, "top-right");
