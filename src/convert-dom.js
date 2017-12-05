import Node from './node';

// This will have a purpose later
export default function convertDOM(dom) {
  const node = new Node(dom);
  if (dom.childNodes) {
    for (let i = 0; i < dom.childNodes.length; i += 1) {
      node.appendChild(convertDOM(dom.childNodes[i]));
    }
  }
}
