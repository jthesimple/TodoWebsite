import { gymSession } from "./DOMmanupulation";
import { closeSession } from "./DOMmanupulation";
import { ExerciseSession } from "./classes";
import { getValues } from "./DOMmanupulation";
import { Project } from "./classes";
import { createNewProjectFolder } from "./DOMmanupulation";
import { clearMainContentsListener } from "./DOMmanupulation";


gymSession();
closeSession();
createNewProjectFolder();

