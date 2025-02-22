export const zIndexSet = layer => `
	${layer}
`;

const zIndex = {
  header: zIndexSet(50),
  modal: zIndexSet(100),
  snackbar: zIndexSet(400),
  tooltip: zIndexSet(500),
};

export default zIndex;
