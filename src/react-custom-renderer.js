import ReactReconciler from "react-reconciler";

import {
  DiscreteEventPriority,
  ContinuousEventPriority,
  DefaultEventPriority,
} from 'react-reconciler/constants';

let reconciler = ReactReconciler({
  // host config options
  supportsMutation: true,
  createInstance(
    type,
    props,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    // Create a new HTML element based on the provided type
    let element = document.createElement(type);

    // Apply the className and src properties from the props object if they exist
    if (props.className) element.className = props.className;
    if (props.src) element.src = props.src;

    // Iterate through an array of specific attributes to check if they exist in the props object
    ["alt", "className", "href", "rel", "src", "target"].forEach((attr) => {
      // If the attribute exists in the props object, set it on the element
      if (props[attr]) element[attr] = props[attr];
    });

    // Log information about the created text instance
    console.log("Created instance:", type, props);

    // Return the created element
    return element;
  },
  createTextInstance(
    text,
    rootContainerInstance,
    hostContext,
    internalInstanceHandle
  ) {
    console.log("Created text instance:", text);

    // Create a new text node with the provided text content
    return document.createTextNode(text);
  },
  appendChildToContainer(container, child) {
    // Log information about appending child to container
    console.log("Appending child to container:", child);
    // Append the child to the container
    container.appendChild(child);
  },
  appendChild(parent, child) {
    // Log information about appending child to parent
    console.log("Appending child to parent:", child);
    // Append the child to the parent element
    parent.appendChild(child);
  },
  appendInitialChild(parent, child) {
    // Log information about appending initial child to parent
    console.log("Appending initial child to parent:", child);
    // Append the initial child to the parent element
    parent.appendChild(child);
  },
  prepareUpdate(
    instance,
    type,
    oldProps,
    newProps,
    rootContainerInstance,
    currentHostContext
  ) {
    console.log("Not implemented: prepareUpdate:", type, oldProps, newProps);
  },
  commitUpdate(
    instance,
    updatePayload,
    type,
    oldProps,
    newProps,
    finishedWork
  ) {
    console.log("Not implemented: commitUpdate:", type, oldProps, newProps);
  },
  finalizeInitialChildren() {
    // Logic for finalizing initial children
  },
  getChildHostContext() {
    // Logic for getting child host context
  },
  getPublicInstance() {
    // Logic for getting public instance
  },
  getRootHostContext() {
    // Logic for getting root host context
  },
  prepareForCommit() {
    // Logic before committing changes
  },
  resetAfterCommit() {
    // Logic after committing changes
  },
  shouldSetTextContent() {
    return false;
  },
  getCurrentUpdatePriority() {
    return DefaultEventPriority
  },
  resolveUpdatePriority() {
    return DefaultEventPriority
  },
  setCurrentUpdatePriority() {
  },
  clearContainer() {
    // Logic for clearing container
  },
  maySuspendCommit() {
    return false
  },
});

let ReactDOMCustom = {
  render(whatToRender, div) {
    let container = reconciler.createContainer(div, false, false);
    reconciler.updateContainer(whatToRender, container, null, null);
  },
};

export default ReactDOMCustom;
