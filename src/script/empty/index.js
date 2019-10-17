import { listEmpty } from '../elements';

const emptyParent = listEmpty.parent;
const emptyChild = listEmpty.child;

if (emptyChild !== null) {
    // emptyParent.style.cursor = 'default';
    emptyParent.style.cssText = 'cursor: default !important';
}
