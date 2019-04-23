function async(id) {
  return new Promise((resolve, reject) => {
    console.log('id :', id);
    resolve();
  });
}

console.log('start');
async(1).then(() => {
  console.log('end');
});
