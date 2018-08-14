export const mapActions = (actions, actionPrefix) => {
  let actionMapping = {};

  for (let action of actions) {
    actionMapping[action] = `${actionPrefix}/${action}`;
  }

  return actionMapping;
};
