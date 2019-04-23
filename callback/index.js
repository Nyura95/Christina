function async(id, callback) {
  console.log('id :', id);
  callback();
}

console.log('start');
async(1, function() {
  console.log('end');
});
