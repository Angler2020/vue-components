export const transformToTree = (data) => {
  let result = [];
  let map = new Map();

  data.forEach((item) => {
    map.set(item.deptId, { ...item, children: [] });
  });

  data.forEach((item) => {
    let parent = map.get(item.parentId);
    const { deptId, deptName } = item;
    if (parent) {
      parent.children.push({
        ...map.get(item.deptId),
        id: deptId,
        label: deptName,
      });
    } else {
      result.push({ ...map.get(item.deptId), id: deptId, label: deptName });
    }
  });

  return result;
};
