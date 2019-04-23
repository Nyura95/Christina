function async(id) {
  return new Promise((resolve, reject) => {
    console.log('id :', id);
    resolve();
  });
}

(async () => {
  console.log('start');
  await async(1);
  console.log('end');
})();
