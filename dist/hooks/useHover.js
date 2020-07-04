"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHover = void 0;
const react_1 = require("react");
function useHover() {
    const [value, setValue] = react_1.useState(false);
    const ref = react_1.useRef(null);
    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);
    react_1.useEffect(() => {
        const node = ref.current;
        if (node) {
            node.addEventListener('mouseover', handleMouseOver);
            node.addEventListener('mouseout', handleMouseOut);
            return () => {
                node.removeEventListener('mouseover', handleMouseOver);
                node.removeEventListener('mouseout', handleMouseOut);
            };
        }
    }, [] // Recall only if ref changes
    );
    return [ref, value];
}
exports.useHover = useHover;
//# sourceMappingURL=useHover.js.map